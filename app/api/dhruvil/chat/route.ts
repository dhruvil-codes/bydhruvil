import Groq from "groq-sdk"
import { readFileSync } from "fs"
import { join } from "path"

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
})

const KNOWLEDGE_BASE = readFileSync(
  join(process.cwd(), "dhruvil.md"),
  "utf-8"
)

const SYSTEM_PROMPT = `You are an AI assistant embedded on Dhruvil Mistry's personal portfolio website. You answer questions about Dhruvil in a conversational, direct, and technically sharp tone — no filler, no corporate speak.

RULES:
- Answer ONLY using the knowledge base provided below. Do not make anything up.
- Keep answers short and conversational — 2 to 4 sentences max.
- Never return markdown formatting like ###, **, or bullet points. Plain text only.
- If the question cannot be answered from the knowledge base, respond exactly with: "I don't have that info — reach Dhruvil directly at dhruvilmistry16@gmail.com"
- Refer to Dhruvil in third person ("he", "his") or first person ("I", "my") — whichever sounds more natural for the question.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`

// Simple in-memory rate limiter
const requestCounts = new Map()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)
  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return true
  }
  if (record.count >= 30) return false
  record.count++
  return true
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown"
  if (!checkRateLimit(ip)) {
    return new Response(
      JSON.stringify({ answer: "Too many questions! Reach Dhruvil at dhruvilmistry16@gmail.com" }),
      { status: 429, headers: { "Content-Type": "application/json" } }
    )
  }

  const { message, history } = await req.json()

  if (!message || typeof message !== "string") {
    return new Response(
      JSON.stringify({ answer: "No question received." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    )
  }

  // Build conversation history (last 6 messages for context)
  const conversationHistory = (history || []).slice(-6).map((m: { role: string; content: string }) => ({
    role: m.role as "user" | "assistant",
    content: m.content,
  }))

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: "user", content: message },
    ],
    temperature: 0.5,
    max_tokens: 150,
  })

  const answer = completion.choices[0]?.message?.content?.trim() ?? 
    "I don't have that info — reach Dhruvil directly at dhruvilmistry16@gmail.com"

  return new Response(JSON.stringify({ answer }), {
    headers: { "Content-Type": "application/json" },
  })
}
