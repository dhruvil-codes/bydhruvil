import { NextRequest } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const counterFile = path.join(process.cwd(), "data", "visitors.json");

async function readCount(): Promise<number> {
  try {
    const raw = await fs.readFile(counterFile, "utf-8");
    const parsed = JSON.parse(raw);
    return typeof parsed.count === "number" ? parsed.count : 0;
  } catch {
    return 0;
  }
}

async function writeCount(count: number): Promise<void> {
  await fs.mkdir(path.dirname(counterFile), { recursive: true });
  await fs.writeFile(counterFile, JSON.stringify({ count }), "utf-8");
}

// GET — return current count without incrementing (for display)
export async function GET(_req: NextRequest) {
  const count = await readCount();
  return Response.json({ count });
}

// POST — increment and return new count
export async function POST(_req: NextRequest) {
  const count = await readCount();
  const newCount = count + 1;
  await writeCount(newCount);
  return Response.json({ count: newCount });
}
