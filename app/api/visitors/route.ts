import { Redis } from "@upstash/redis";
import { promises as fs } from "fs";
import path from "path";

const VISITOR_KEY = "visitor_count";

// ---------------------------------------------------------------------------
// Storage backends (tried in order)
// ---------------------------------------------------------------------------

// 1️⃣  Upstash / Vercel KV — used in production when env vars are present
function getRedis(): Redis | null {
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    return new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });
  }
  return null;
}

// 2️⃣  Local JSON file — used during local development (fallback)
const counterFile = path.join(process.cwd(), "data", "visitors.json");

async function readLocalCount(): Promise<number> {
  try {
    const raw = await fs.readFile(counterFile, "utf-8");
    const parsed = JSON.parse(raw);
    return typeof parsed.count === "number" ? parsed.count : 0;
  } catch {
    return 0;
  }
}

async function writeLocalCount(count: number): Promise<void> {
  try {
    await fs.mkdir(path.dirname(counterFile), { recursive: true });
    await fs.writeFile(counterFile, JSON.stringify({ count }), "utf-8");
  } catch (err) {
    console.warn("Local filesystem write failed:", err);
  }
}

// ---------------------------------------------------------------------------
// Unified read / increment helpers
// ---------------------------------------------------------------------------

async function readCount(): Promise<number> {
  const redis = getRedis();
  if (redis) {
    const val = await redis.get<number>(VISITOR_KEY);
    return val ?? 0;
  }
  return readLocalCount();
}

async function incrementCount(): Promise<number> {
  const redis = getRedis();
  if (redis) {
    // INCR is atomic — safe across concurrent serverless invocations
    const newCount = await redis.incr(VISITOR_KEY);
    return newCount;
  }
  // Local dev: read → increment → write
  const current = await readLocalCount();
  const next = current + 1;
  await writeLocalCount(next);
  return next;
}

// ---------------------------------------------------------------------------
// Route handlers
// ---------------------------------------------------------------------------

// GET — return current count without incrementing (display only)
export async function GET() {
  const count = await readCount();
  return Response.json({ count });
}

// POST — increment and return new count (called once per session)
export async function POST() {
  const count = await incrementCount();
  return Response.json({ count });
}
