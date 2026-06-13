import OpenAI from "openai"
import { readFileSync } from "fs"
import { join } from "path"

const client = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY!,
  baseURL: "https://integrate.api.nvidia.com/v1",
})

const KNOWLEDGE_BASE = readFileSync(
  join(process.cwd(), "dhruvil.md"),
  "utf-8"
)

const SYSTEM_PROMPT = `You are an AI assistant on Dhruvil Mistry's portfolio website. You speak on behalf of Dhruvil in first person where it makes sense, or refer to him in third person when answering factual questions. Be concise, direct, and technically grounded — no filler, no corporate speak.

Use ONLY the knowledge base below to answer questions. If something isn't in the knowledge base, say "I don't have that info — reach Dhruvil directly at dhruvilmistry16@gmail.com"

${KNOWLEDGE_BASE}`

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown"
  if (!checkRateLimit(ip)) {
    return new Response("Rate limit exceeded", { status: 429 })
  }

  const { messages } = await req.json()

  const stream = await client.chat.completions.create({
    model: "minimaxai/minimax-m3",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    stream: true,
    max_tokens: 400,
  })

  const encoder = new TextEncoder()
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || ""
        if (text) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`))
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"))
      controller.close()
    },
  })

  return new Response(readable, {
    headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" },
  })
}

// Simple in-memory rate limiter
interface RateLimitRecord {
  count: number
  resetAt: number
}
const requestCounts = new Map<string, RateLimitRecord>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)
  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (record.count >= 20) return false
  record.count++
  return true
}
