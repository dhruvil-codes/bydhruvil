import { NextResponse, type NextRequest } from "next/server";

const BOT_USER_AGENTS = [
  "gptbot",
  "claudebot",
  "chatgpt-user",
  "perplexitybot",
  "google-extended",
  "applebot-extended",
  "ora-agent",
  "deepseekbot",
  "anthropic-ai",
  "oai-searchbot",
  "meta-externalagent",
  "cohere-ai",
];

const HOMEPAGE_MARKDOWN = `# Dhruvil Mistry — AI Engineer

> AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI applications. Based in Mumbai, India.

- **Email:** dhruvilmistry16@gmail.com
- **LinkedIn:** https://linkedin.com/in/dhruvilmistry16
- **GitHub:** https://github.com/dhruvil-codes
- **Twitter/X:** https://x.com/bydhruvil
- **Website:** https://bydhruvil.in
- **Developer Portal:** https://bydhruvil.in/developers

---

## Agent Instructions & NLWeb Endpoints
- **NLWeb Query Endpoint:** POST https://bydhruvil.in/ask (supports SSE streaming)
- **v1 API Root:** https://bydhruvil.in/v1/ask | https://bydhruvil.in/v1/projects
- **MCP Server Card:** https://bydhruvil.in/.well-known/mcp/server-card.json
- **MCP JSON-RPC Endpoint:** POST https://bydhruvil.in/mcp
- **Agent Instructions:** https://bydhruvil.in/agents.md
- **Developer Portal:** https://bydhruvil.in/developers
- **LLM Context:** https://bydhruvil.in/llms.txt
- **OpenAPI 3.1 Spec:** https://bydhruvil.in/openapi.json

---

## Flagship Projects
1. **Minutz — AI Meeting Intelligence Platform:** Shipped a browser-native meeting recorder and asynchronous processing pipeline (FastAPI, Next.js, Whisper, GPT-4o, Supabase). Selected at the OpenAI × Outskill Hackathon.
2. **Saral AI — Voice AI Receptionist:** Shipped a low-latency real-time voice receptionist over WebSocket connections (FastAPI, Groq, Sarvam AI).
3. **Skin Cure — Multimodal Healthcare AI:** Trained a SwinV2 classifier on 28k dermatology images with confidence scores and local discovery (FastAPI, React, PyTorch).
4. **Clarity — AI Reading Assistant:** Shipped a MV3 Chrome extension with zero-backend LLM abstraction (GPT-4o Mini, Claude Haiku, Gemini Flash).

---

## Technical Skills
- **Core AI:** LLMs, Prompt Engineering, RAG Architectures, Agentic Workflows, Evaluation.
- **Languages & Frameworks:** Python, FastAPI, TypeScript, Next.js, React, Node.js.
- **Vector Databases:** Qdrant, Pinecone, ChromaDB.
`;

const RATE_LIMIT_HEADERS: Record<string, string> = {
  "RateLimit-Limit": "100",
  "RateLimit-Remaining": "99",
  "RateLimit-Reset": "60",
  "RateLimit-Policy": "100;w=60",
  "X-RateLimit-Limit": "100",
  "X-RateLimit-Remaining": "99",
  "X-RateLimit-Reset": "60",
};

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const acceptHeader = request.headers.get("accept") || "";
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const idempotencyKey = request.headers.get("idempotency-key") || request.headers.get("x-idempotency-key") || "";
  const isAgentMode = searchParams.get("mode") === "agent" || request.headers.get("x-mode") === "agent";
  const wantsMarkdown = acceptHeader.includes("text/markdown");
  const isAiBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));

  // If path is index.md or root requested with Accept: text/markdown or ?mode=agent
  if (
    pathname === "/index.md" ||
    ((pathname === "/" || pathname === "") && (wantsMarkdown || (isAiBot && !acceptHeader.includes("text/html")) || isAgentMode))
  ) {
    return new NextResponse(HOMEPAGE_MARKDOWN, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, User-Agent",
        "Link": '<https://bydhruvil.in/index.md>; rel="alternate"; type="text/markdown", <https://bydhruvil.in/sitemap.xml>; rel="sitemap", <https://bydhruvil.in/.well-known/ai-catalog.json>; rel="describedby"',
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
        ...RATE_LIMIT_HEADERS,
      },
    });
  }

  // If unknown api or v1 route is queried that is not recognized
  const knownApiPrefixes = [
    "/api/ask",
    "/api/dhruvil",
    "/api/donna",
    "/api/mcp",
    "/api/tts",
    "/api/visitors",
    "/api/v1",
    "/v1/ask",
    "/v1/chat",
    "/v1/projects",
    "/v1/tasks",
    "/ask",
    "/mcp",
  ];

  const isApiRoute = pathname.startsWith("/api/") || pathname.startsWith("/v1/");
  const isKnown = knownApiPrefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));

  if (isApiRoute && !isKnown) {
    return new NextResponse(
      JSON.stringify({
        error: {
          code: "NOT_FOUND",
          message: `The requested API endpoint '${pathname}' was not found.`,
          status: 404,
          timestamp: new Date().toISOString(),
          documentation_url: "https://bydhruvil.in/developers",
        },
      }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
          ...RATE_LIMIT_HEADERS,
        },
      }
    );
  }

  const response = NextResponse.next();

  // Attach RFC 8288 Link headers, Accept Vary header, and Rate Limit headers to all responses
  response.headers.set(
    "Link",
    '<https://bydhruvil.in/index.md>; rel="alternate"; type="text/markdown", <https://bydhruvil.in/sitemap.xml>; rel="sitemap", <https://bydhruvil.in/.well-known/ai-catalog.json>; rel="describedby", <https://bydhruvil.in/developers>; rel="service-doc"'
  );
  response.headers.set("Vary", "Accept, User-Agent");

  for (const [key, value] of Object.entries(RATE_LIMIT_HEADERS)) {
    response.headers.set(key, value);
  }

  if (idempotencyKey) {
    response.headers.set("Idempotency-Key", idempotencyKey);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
