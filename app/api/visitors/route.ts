import { promises as fs } from "fs";
import path from "path";

const counterFile = path.join(process.cwd(), "data", "visitors.json");

// Vercel KV REST API credentials (auto-injected when linking KV Storage on Vercel)
const kvUrl = process.env.KV_REST_API_URL;
const kvToken = process.env.KV_REST_API_TOKEN;

// In-memory fallback for serverless environments when KV is not set up and disk is read-only
let memoryCount: number | null = null;

async function getKVCount(): Promise<number | null> {
  if (!kvUrl || !kvToken) return null;
  try {
    const res = await fetch(`${kvUrl}/get/visitor_count`, {
      headers: { Authorization: `Bearer ${kvToken}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.result ? parseInt(data.result, 10) : 0;
  } catch (err) {
    console.error("Vercel KV Read Error:", err);
    return null;
  }
}

async function setKVCount(count: number): Promise<boolean> {
  if (!kvUrl || !kvToken) return false;
  try {
    const res = await fetch(`${kvUrl}/set/visitor_count/${count}`, {
      headers: { Authorization: `Bearer ${kvToken}` },
      cache: "no-store",
    });
    return res.ok;
  } catch (err) {
    console.error("Vercel KV Write Error:", err);
    return false;
  }
}

async function readCount(): Promise<number> {
  // 1. Try Vercel KV if available
  const kvCount = await getKVCount();
  if (kvCount !== null) {
    memoryCount = kvCount;
    return kvCount;
  }

  // 2. Try in-memory cached count if initialized
  if (memoryCount !== null) {
    return memoryCount;
  }

  // 3. Fallback to local JSON file (useful for local development)
  try {
    const raw = await fs.readFile(counterFile, "utf-8");
    const parsed = JSON.parse(raw);
    const fileCount = typeof parsed.count === "number" ? parsed.count : 0;
    memoryCount = fileCount;
    return fileCount;
  } catch {
    memoryCount = 0;
    return 0;
  }
}

async function writeCount(count: number): Promise<void> {
  memoryCount = count;

  // 1. Try Vercel KV if available
  const ok = await setKVCount(count);
  if (ok) return;

  // 2. Try writing to local filesystem (works in local dev, fails silently in read-only serverless)
  try {
    await fs.mkdir(path.dirname(counterFile), { recursive: true });
    await fs.writeFile(counterFile, JSON.stringify({ count }), "utf-8");
  } catch (err) {
    // Fail silently in production, keeping the updated value in memory (memoryCount)
    console.warn("Local filesystem write failed (likely read-only serverless environment). Using in-memory fallback:", err);
  }
}

// GET — return current count without incrementing (for display)
export async function GET() {
  const count = await readCount();
  return Response.json({ count });
}

// POST — increment and return new count
export async function POST() {
  const count = await readCount();
  const newCount = count + 1;
  await writeCount(newCount);
  return Response.json({ count: newCount });
}

