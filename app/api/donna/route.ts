import OpenAI from "openai"
import { NextRequest } from "next/server"

const client = new OpenAI({
  apiKey: process.env.NVIDIA_API_KEY || "dummy-key",
  baseURL: "https://integrate.api.nvidia.com/v1",
})

const SYSTEM_PROMPT = `You are Dhruvil's AI assistant, speaking in his cloned voice on Dhruvil Mistry's portfolio website. 
Answer questions about Dhruvil only. Be concise — 2 sentences maximum. 
Never make up facts. Here is what you know:
- Shipped projects: Minutz (AI meeting intelligence), Skin Cure (AI dermatology), Clarity (AI reading assistant)
- In progress: Saral AI (Voice AI Receptionist)
- Skills: Next.js, TypeScript, Tailwind CSS, Framer Motion, AI API integration
- Open to work and collaboration
If asked anything outside this scope, say: I only know about Dhruvil's work.`

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const stream = await client.chat.completions.create({
    model: "meta/llama-3.1-8b-instruct",
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    stream: true,
    max_tokens: 150,
    temperature: 0.7,
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
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  })
}
