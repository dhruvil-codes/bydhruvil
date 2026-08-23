import Groq from "groq-sdk";
import { readFileSync } from "fs";
import { join } from "path";

// Initialize Groq if API key is present
const groqApiKey = process.env.GROQ_API_KEY;
const groq = groqApiKey ? new Groq({ apiKey: groqApiKey }) : null;

function getKnowledgeBase(): string {
  try {
    return readFileSync(join(process.cwd(), "dhruvil.md"), "utf-8");
  } catch {
    return "Dhruvil Mistry is an AI Engineer specializing in production-grade LLM systems, RAG pipelines, and full-stack AI applications.";
  }
}

const SYSTEM_PROMPT = `You are an AI assistant for Dhruvil Mistry's personal portfolio website (bydhruvil.in) answering queries via the NLWeb endpoint.
RULES:
- Answer accurately and concisely using the knowledge base below.
- Highlight Dhruvil's flagship projects (Minutz, Saral AI, Skin Cure, Clarity) and expertise in LLMs, RAG, Python, FastAPI, Next.js.
- Keep answers factual, direct, and conversational.
- If unsure, provide his direct contact: dhruvilmistry16@gmail.com.

KNOWLEDGE BASE:
${getKnowledgeBase()}`;

async function handleQuery(query: string, isStream: boolean): Promise<Response> {
  const sources = [
    "https://bydhruvil.in",
    "https://bydhruvil.in/projects",
    "https://bydhruvil.in/stack",
    "https://bydhruvil.in/bio"
  ];

  if (!query || typeof query !== "string" || !query.trim()) {
    return new Response(
      JSON.stringify({
        error: "Missing query parameter",
        usage: "GET /ask?q=your_question or POST /ask with JSON { query: 'your_question' }"
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // If streaming is requested
  if (isStream) {
    const encoder = new TextEncoder();
    
    if (groq) {
      try {
        const stream = await groq.chat.completions.create({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: query },
          ],
          stream: true,
          temperature: 0.5,
          max_tokens: 300,
        });

        const readableStream = new ReadableStream({
          async start(controller) {
            for await (const chunk of stream) {
              const text = chunk.choices[0]?.delta?.content || "";
              if (text) {
                controller.enqueue(
                  encoder.encode(`data: ${JSON.stringify({ delta: text })}\n\n`)
                );
              }
            }
            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({ done: true, sources, agent: "Dhruvil AI" })}\n\n`
              )
            );
            controller.close();
          },
        });

        return new Response(readableStream, {
          headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive",
          },
        });
      } catch {
        // Fallback below
      }
    }

    // Static streaming fallback
    const fallbackText = `Dhruvil Mistry is an AI Engineer based in Mumbai specializing in production-grade LLM systems, RAG pipelines, and full-stack AI applications. He built Minutz (OpenAI Hackathon), Saral AI, Skin Cure, and Clarity. Reach him at dhruvilmistry16@gmail.com.`;
    const readableStream = new ReadableStream({
      start(controller) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ delta: fallbackText })}\n\n`)
        );
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ done: true, sources, agent: "Dhruvil AI" })}\n\n`)
        );
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        "Connection": "keep-alive",
      },
    });
  }

  // Non-streaming JSON response
  let answer = `Dhruvil Mistry is an AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI apps. His flagship projects include Minutz, Saral AI, Skin Cure, and Clarity. Reach him at dhruvilmistry16@gmail.com.`;

  if (groq) {
    try {
      const completion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: query },
        ],
        temperature: 0.5,
        max_tokens: 250,
      });

      const generated = completion.choices[0]?.message?.content?.trim();
      if (generated) {
        answer = generated;
      }
    } catch {
      // Use fallback
    }
  }

  return new Response(
    JSON.stringify({
      answer,
      query,
      sources,
      agent: "Dhruvil AI",
      confidence: 1.0,
      timestamp: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q") || searchParams.get("query") || "";
  const isStream = searchParams.get("stream") === "true" || req.headers.get("accept")?.includes("text/event-stream") || false;
  return handleQuery(query, isStream);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let query = "";
    let isStream = req.headers.get("accept")?.includes("text/event-stream") || false;

    if (contentType.includes("application/json")) {
      const body = await req.json();
      query = body.query || body.q || (body.messages && body.messages[body.messages.length - 1]?.content) || "";
      if (body.stream === true) isStream = true;
    } else {
      const text = await req.text();
      query = text;
    }

    return handleQuery(query, isStream);
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request payload" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Agent-ID",
    },
  });
}
