const ALL_PROJECTS = [
  {
    id: "taxmitra",
    name: "Tax Mitra — AI Income-Tax Notice & Workflow Assistant",
    tagline: "AI-powered statutory tax notice analyzer, position evaluator & response drafter",
    description: "Helps Indian taxpayers understand income-tax notices, determine their position, prepare relevant evidence and responses, and navigate official filing with grounded sources, deterministic rules, and human approval.",
    category: "ai",
    tech_stack: ["Next.js", "FastAPI", "Python", "RAG", "Deterministic Rules", "LLMs"],
    url: "https://taxmitra.bydhruvil.in",
    github: "https://github.com/dhruvil-codes/taxmitra",
  },
  {
    id: "nudge",
    name: "Nudge — Autonomous AI Gmail Follow-Up Agent",
    tagline: "CLI agent and MCP tool for automated email follow-ups using Groq Llama 3.3 70B",
    description: "Identifies unanswered email threads and generates contextual follow-up drafts with Google OAuth, local SQLite, and MCP client support.",
    category: "tools",
    tech_stack: ["Python", "CLI", "Groq LLM", "Llama 3.3 70B", "MCP", "SQLite", "Google OAuth"],
    url: "https://bydhruvil.in/projects",
    github: "https://github.com/dhruvil-codes",
  },
  {
    id: "minutz",
    name: "Minutz — AI Meeting Intelligence",
    tagline: "Browser-native meeting audio recorder & asynchronous intelligence pipeline",
    description: "Captures WebRTC audio directly, running transcription, summarization, and action-item extraction via FastAPI, Next.js, OpenAI Whisper, and GPT-4o.",
    category: "ai",
    tech_stack: ["FastAPI", "Next.js", "OpenAI Whisper", "GPT-4o", "Supabase", "TailwindCSS"],
    recognition: "Selected at OpenAI × Outskill Hackathon",
    url: "https://bydhruvil.in/projects",
    github: "https://github.com/dhruvil-codes",
  },
  {
    id: "saral-ai",
    name: "Saral AI — Voice AI Receptionist",
    tagline: "Ultra low-latency conversational voice agent for small businesses",
    description: "Automates customer inbound calls over full-duplex WebSocket connections with sub-second response times using Groq and Sarvam AI.",
    category: "voice",
    tech_stack: ["FastAPI", "Python", "Groq", "Sarvam AI", "WebSockets"],
    url: "https://bydhruvil.in/projects",
    github: "https://github.com/dhruvil-codes",
  },
  {
    id: "skin-cure",
    name: "Skin Cure — Healthcare AI Classifier",
    tagline: "Multimodal clinical dermatology classification platform",
    description: "SwinV2 Transformer model trained on 28k dermatology clinical images with localized clinic discovery and severity scoring.",
    category: "healthcare",
    tech_stack: ["PyTorch", "SwinV2", "FastAPI", "React", "Leaflet"],
    url: "https://bydhruvil.in/projects",
    github: "https://github.com/dhruvil-codes",
  },
  {
    id: "clarity",
    name: "Clarity — AI Reading Assistant",
    tagline: "Multi-provider contextual reading Chrome extension",
    description: "Manifest V3 browser extension with zero-backend LLM abstraction supporting OpenAI, Claude, and Gemini.",
    category: "tools",
    tech_stack: ["Manifest V3", "WebExtensions", "OpenAI", "Anthropic", "Gemini"],
    url: "https://bydhruvil.in/projects",
    github: "https://github.com/dhruvil-codes",
  },
];

const RATE_LIMIT_HEADERS = {
  "RateLimit-Limit": "100",
  "RateLimit-Remaining": "99",
  "RateLimit-Reset": "60",
  "RateLimit-Policy": "100;w=60",
  "X-RateLimit-Limit": "100",
  "X-RateLimit-Remaining": "99",
  "X-RateLimit-Reset": "60",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, Idempotency-Key, X-Idempotency-Key, X-Agent-ID, X-API-Version",
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = Math.min(Math.max(parseInt(searchParams.get("limit") || "10", 10), 1), 50);
  const offset = Math.max(parseInt(searchParams.get("offset") || "0", 10), 0);
  const category = searchParams.get("category");

  let filtered = ALL_PROJECTS;
  if (category && category !== "all") {
    filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }

  const paginated = filtered.slice(offset, offset + limit);
  const hasMore = offset + limit < filtered.length;
  const nextOffset = hasMore ? offset + limit : null;
  const nextCursor = hasMore ? Buffer.from(String(nextOffset)).toString("base64") : null;

  return new Response(
    JSON.stringify({
      data: paginated,
      pagination: {
        total: filtered.length,
        limit,
        offset,
        has_more: hasMore,
        next_offset: nextOffset,
        next_cursor: nextCursor,
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        ...RATE_LIMIT_HEADERS,
      },
    }
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: RATE_LIMIT_HEADERS,
  });
}
