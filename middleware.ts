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
- **Substack:** https://bydhruvil.substack.com/
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

const OPENAPI_MARKDOWN = `# Dhruvil Mistry Portfolio & AI API (OpenAPI 3.1.0)

> Complete specification of public endpoints available on bydhruvil.in.

## Base URL
- Production: \`https://bydhruvil.in\`
- Version 1: \`https://bydhruvil.in/v1\`

## Endpoints
1. \`POST /ask\` & \`GET /ask?q=query\` — NLWeb natural language query with SSE streaming.
2. \`POST /v1/ask\` — Versioned NLWeb query endpoint.
3. \`GET /v1/projects?limit=10&offset=0\` — Paginated project catalog.
4. \`POST /v1/tasks\` — Asynchronous job creation (returns 202 Accepted with Location header).
5. \`GET /v1/tasks/{taskId}\` — Poll asynchronous task status.
6. \`POST /mcp\` — Model Context Protocol JSON-RPC 2.0 handshake and tool execution.

Full raw JSON: [openapi.json](https://bydhruvil.in/openapi.json)
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

// Cluster Gate Protection
const CLUSTER_PIN = process.env.CLUSTER_PIN || "291026";
const CLUSTER_COOKIE_NAME = "cluster_auth_session";
const CLUSTER_COOKIE_VALUE = "cl_sec_v1_8f92e030";

function renderClusterLockScreen(hasError = false): string {
  const errorHtml = hasError
    ? `<div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.25); color: #f87171; padding: 8px 12px; border-radius: 6px; font-size: 0.78rem; font-family: 'Geist Mono', monospace; margin-bottom: 1.25rem; text-align: center;">Invalid authorization key. Access denied.</div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Agent Cluster // Restricted Access</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-sans/style.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/geist@1.3.0/dist/fonts/geist-mono/style.css">
<style>
  :root {
    --bg-main: #0a0a0a;
    --bg-surface: #111113;
    --edge: #262626;
    --text-primary: #ededed;
    --text-secondary: #a1a1aa;
    --text-muted: #71717a;
    --accent-emerald: #10b981;
    --font-sans: 'Geist Sans', -apple-system, sans-serif;
    --font-mono: 'Geist Mono', monospace;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    font-family: var(--font-sans);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 0);
    background-size: 24px 24px;
  }
  .lock-card {
    width: 100%;
    max-width: 440px;
    background: var(--bg-surface);
    border: 1px solid var(--edge);
    border-radius: 12px;
    padding: 2.25rem 2rem;
    position: relative;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
  .cad-cross { position: absolute; width: 14px; height: 14px; pointer-events: none; }
  .cad-cross::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: #52525b; transform: translateY(-50%); }
  .cad-cross::after { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background: #52525b; transform: translateX(-50%); }
  .cad-cross.top-left { top: 0; left: 0; transform: translate(-50%, -50%); }
  .cad-cross.top-right { top: 0; right: 0; transform: translate(50%, -50%); }
  .cad-cross.bottom-left { bottom: 0; left: 0; transform: translate(-50%, 50%); }
  .cad-cross.bottom-right { bottom: 0; right: 0; transform: translate(50%, 50%); }
  .badge-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; }
  .status-pill {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25);
    color: var(--accent-emerald); padding: 4px 10px; border-radius: 9999px;
    font-size: 0.72rem; font-family: var(--font-mono);
  }
  .dot { width: 6px; height: 6px; background: var(--accent-emerald); border-radius: 50%; }
  h1 { font-size: 1.25rem; font-weight: 600; letter-spacing: -0.02em; margin-bottom: 0.5rem; }
  p { font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1.5rem; }
  .input-label {
    display: block; font-size: 0.72rem; font-family: var(--font-mono);
    color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem;
  }
  .pin-input {
    width: 100%; background: #0a0a0a; border: 1px solid var(--edge);
    border-radius: 8px; padding: 12px 14px; font-family: var(--font-mono);
    font-size: 1.15rem; color: #fff; letter-spacing: 0.25em; text-align: center;
    margin-bottom: 1.25rem; outline: none; transition: border-color 0.2s;
  }
  .pin-input:focus { border-color: #ededed; }
  .submit-btn {
    width: 100%; background: #ededed; color: #0a0a0a; border: none;
    border-radius: 8px; padding: 12px; font-family: var(--font-mono);
    font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
  }
  .submit-btn:hover { background: #fff; box-shadow: 0 0 16px rgba(255, 255, 255, 0.2); }
</style>
</head>
<body>
<div class="lock-card">
  <div class="cad-cross top-left"></div>
  <div class="cad-cross top-right"></div>
  <div class="cad-cross bottom-left"></div>
  <div class="cad-cross bottom-right"></div>

  <div class="badge-row">
    <div style="font-size: 0.8rem; font-family: var(--font-mono); color: var(--text-muted);">
      ✦ bydhruvil.in // mesh
    </div>
    <div class="status-pill">
      <span class="dot"></span> RESTRICTED
    </div>
  </div>

  <h1>Agent Cluster Gateway</h1>
  <p>Private multi-agent infrastructure. Enter master PIN to establish verified cockpit session.</p>

  ${errorHtml}

  <form method="POST" action="/_cluster_auth">
    <label class="input-label">Master Authorization PIN</label>
    <input type="password" name="pin" class="pin-input" placeholder="••••••" autofocus required autocomplete="current-password" />
    <button type="submit" class="submit-btn">AUTHENTICATE COCKPIT ↗</button>
  </form>
</div>
</body>
</html>`;
}

export async function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const { pathname, searchParams } = request.nextUrl;

  // Route cluster.bydhruvil.in with Private CAD PIN Gate
  if (host.startsWith("cluster.")) {
    // 1. Check for Query Param bypass (?pin=...)
    const queryPin = searchParams.get("pin");
    if (queryPin === CLUSTER_PIN) {
      const cleanUrl = new URL(pathname, request.url);
      const res = NextResponse.redirect(cleanUrl);
      res.cookies.set(CLUSTER_COOKIE_NAME, CLUSTER_COOKIE_VALUE, {
        path: "/",
        maxAge: 31536000, // 1 year
        httpOnly: true,
        sameSite: "lax",
        secure: true,
      });
      return res;
    }

    // 2. Handle Form Authentication Submission
    if (pathname === "/_cluster_auth" && request.method === "POST") {
      return (async () => {
        try {
          const formData = await request.formData();
          const submittedPin = formData.get("pin")?.toString() || "";
          if (submittedPin === CLUSTER_PIN) {
            const res = NextResponse.redirect(new URL("/", request.url));
            res.cookies.set(CLUSTER_COOKIE_NAME, CLUSTER_COOKIE_VALUE, {
              path: "/",
              maxAge: 31536000, // 1 year
              httpOnly: true,
              sameSite: "lax",
              secure: true,
            });
            return res;
          }
        } catch {}
        return new NextResponse(renderClusterLockScreen(true), {
          status: 401,
          headers: { "Content-Type": "text/html; charset=utf-8" },
        });
      })();
    }

    // 3. Verify Active Session Cookie
    const sessionCookie = request.cookies.get(CLUSTER_COOKIE_NAME)?.value;
    if (sessionCookie === CLUSTER_COOKIE_VALUE) {
      const targetUrl = new URL(pathname + request.nextUrl.search, "https://8765-agqw5dtjvs6zrs3mhsk42zysku.instabox.tech");
      return NextResponse.rewrite(targetUrl);
    }

    // 4. If not authenticated, render private CAD lock screen
    return new NextResponse(renderClusterLockScreen(false), {
      status: 401,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const acceptHeader = request.headers.get("accept") || "";
  const userAgent = (request.headers.get("user-agent") || "").toLowerCase();
  const idempotencyKey = request.headers.get("idempotency-key") || request.headers.get("x-idempotency-key") || "";
  const isAgentMode = searchParams.get("mode") === "agent" || request.headers.get("x-mode") === "agent";
  const wantsMarkdown = acceptHeader.includes("text/markdown");
  const isAiBot = BOT_USER_AGENTS.some((bot) => userAgent.includes(bot));

  // Markdown twin for openapi.json.md
  if (pathname === "/openapi.json.md") {
    return new NextResponse(OPENAPI_MARKDOWN, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Vary": "Accept, User-Agent",
        "Link": '<https://bydhruvil.in/openapi.json>; rel="alternate"; type="application/json"',
        "Access-Control-Allow-Origin": "*",
        ...RATE_LIMIT_HEADERS,
      },
    });
  }

  // Handle other .md fallbacks dynamically
  if (pathname.endsWith(".md") && pathname !== "/index.md") {
    const baseSlug = pathname.replace(/\.md$/, "").replace(/^\//, "");
    if (baseSlug === "projects" || baseSlug === "blog" || baseSlug === "stack" || baseSlug === "bio" || baseSlug === "developers") {
      const markdownTwin = `# ${baseSlug.toUpperCase()} — Dhruvil Mistry Portfolio\n\nDetailed content for ${baseSlug}.\nFull documentation: https://bydhruvil.in/${baseSlug}\nLLM Context: https://bydhruvil.in/${baseSlug}/llms.txt`;
      return new NextResponse(markdownTwin, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Vary": "Accept, User-Agent",
          "Access-Control-Allow-Origin": "*",
          ...RATE_LIMIT_HEADERS,
        },
      });
    }
  }

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
        "Link": '<https://bydhruvil.in/index.md>; rel="alternate"; type="text/markdown", <https://bydhruvil.in/sitemap.xml>; rel="sitemap", <https://bydhruvil.in/.well-known/ai-catalog.json>; rel="describedby", <https://bydhruvil.in/developers>; rel="service-doc"',
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
    "/.well-known/api-catalog",
    "/.well-known/mcp",
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
