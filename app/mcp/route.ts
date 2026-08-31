import { readFileSync } from "fs";
import { join } from "path";

function getKnowledgeBase(): string {
  try {
    return readFileSync(join(process.cwd(), "dhruvil.md"), "utf-8");
  } catch {
    return "Dhruvil Mistry is an AI Engineer specializing in production-grade LLM systems, RAG pipelines, and full-stack AI applications.";
  }
}

const SERVER_INFO = {
  name: "bydhruvil-mcp-server",
  version: "1.0.0",
};

const CAPABILITIES = {
  tools: { listChanged: false },
  resources: { subscribe: false, listChanged: false },
  prompts: { listChanged: false },
};

const TOOLS = [
  {
    name: "ask_dhruvil",
    description: "Ask grounded questions about Dhruvil Mistry, his projects, technical expertise, work experience, or availability.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "The question to ask about Dhruvil Mistry",
        },
      },
      required: ["query"],
    },
    annotations: {
      readOnly: true,
    },
    _meta: {
      ui: {
        resourceUri: "ui://bydhruvil/chat",
      },
    },
  },
  {
    name: "get_projects",
    description: "Retrieve Dhruvil Mistry's flagship AI projects, descriptions, tech stacks, and live links.",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Optional category filter: 'all', 'ai', 'voice', 'fullstack'",
          default: "all",
        },
      },
    },
    annotations: {
      readOnly: true,
    },
    _meta: {
      ui: {
        resourceUri: "ui://bydhruvil/projects",
      },
    },
  },
  {
    name: "read_doc_page",
    description: "Read documentation, articles, and bio pages from Dhruvil Mistry's portfolio (e.g. 'bio', 'stack', 'gpt-live', 'execution', 'developers').",
    inputSchema: {
      type: "object",
      properties: {
        page: {
          type: "string",
          description: "The page identifier to fetch ('bio', 'stack', 'developers', 'projects', 'gpt-live', 'execution')",
        },
      },
      required: ["page"],
    },
    annotations: {
      readOnly: true,
    },
    _meta: {
      ui: {
        resourceUri: "ui://bydhruvil/docs",
      },
    },
  },
  {
    name: "get_contact_info",
    description: "Retrieve Dhruvil Mistry's verified contact details, email, and social profiles.",
    inputSchema: {
      type: "object",
      properties: {
        format: {
          type: "string",
          description: "Preferred format: 'json' or 'text'",
          default: "json",
        },
      },
    },
    annotations: {
      readOnly: true,
    },
    _meta: {
      ui: {
        resourceUri: "ui://bydhruvil/contact",
      },
    },
  },
];

const RESOURCES = [
  {
    uri: "ui://bydhruvil/chat",
    name: "Dhruvil AI Interactive Chat View",
    mimeType: "text/html",
    description: "Interactive conversational interface for Dhruvil Mistry",
  },
  {
    uri: "ui://bydhruvil/projects",
    name: "Flagship Projects View",
    mimeType: "text/html",
    description: "Interactive projects card view",
  },
  {
    uri: "ui://bydhruvil/contact",
    name: "Contact Card View",
    mimeType: "text/html",
    description: "Contact and hiring information card",
  },
  {
    uri: "bydhruvil://llms.txt",
    name: "LLMs Context File",
    mimeType: "text/markdown",
    description: "Full LLM-friendly documentation and portfolio summary",
  },
];

const RESOURCE_CONTENTS: Record<string, { mimeType: string; text: string }> = {
  "ui://bydhruvil/chat": {
    mimeType: "text/html",
    text: "<div id='dhruvil-chat'><p>Chat with Dhruvil AI: Query projects, background, and skills.</p></div>",
  },
  "ui://bydhruvil/projects": {
    mimeType: "text/html",
    text: "<div id='dhruvil-projects'><h1>Projects</h1><ul><li>Tax Mitra (AI Income-Tax Notice Workflow)</li><li>Nudge (Autonomous Gmail Follow-Up Agent)</li><li>Minutz (OpenAI Hackathon)</li><li>Saral AI (Voice Receptionist)</li><li>Skin Cure</li><li>Clarity</li></ul></div>",
  },
  "ui://bydhruvil/contact": {
    mimeType: "text/html",
    text: "<div id='dhruvil-contact'><p>Email: dhruvilmistry16@gmail.com</p><p>LinkedIn: https://linkedin.com/in/dhruvilmistry16</p></div>",
  },
  "bydhruvil://llms.txt": {
    mimeType: "text/markdown",
    text: "# Dhruvil Mistry — AI Engineer\n\nAI Engineer building production-grade LLM systems and RAG pipelines.\nContact: dhruvilmistry16@gmail.com",
  },
};

const PROMPTS = [
  {
    name: "summarize_profile",
    description: "Summarize Dhruvil Mistry's background, top projects, and technical strengths for a hiring manager or collaborator.",
  },
];

export async function POST(req: Request) {
  const rateLimitHeaders = {
    "RateLimit-Limit": "100",
    "RateLimit-Remaining": "99",
    "RateLimit-Reset": "60",
    "RateLimit-Policy": "100;w=60",
    "X-RateLimit-Limit": "100",
    "X-RateLimit-Remaining": "99",
    "X-RateLimit-Reset": "60",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, Idempotency-Key, X-Idempotency-Key, X-Agent-ID",
  };

  const idempotencyKey = req.headers.get("idempotency-key") || req.headers.get("x-idempotency-key") || "";

  try {
    const body = await req.json();
    const id = body.id !== undefined ? body.id : null;
    const method = body.method;

    if (method === "initialize") {
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: "2024-11-05",
            capabilities: CAPABILITIES,
            serverInfo: SERVER_INFO,
            instructions: "Dhruvil Mistry MCP Server. Grounded portfolio tools and resources.",
          },
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
            ...rateLimitHeaders,
          },
        }
      );
    }

    if (method === "ping") {
      return new Response(JSON.stringify({ jsonrpc: "2.0", id, result: {} }), {
        status: 200,
        headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders },
      });
    }

    if (method === "tools/list") {
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: { tools: TOOLS },
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders },
        }
      );
    }

    if (method === "tools/call") {
      const toolName = body.params?.name;
      const args = body.params?.arguments || {};

      if (toolName === "ask_dhruvil") {
        const query = args.query || "Tell me about Dhruvil";
        const text = `Dhruvil Mistry is an AI Engineer based in Mumbai specializing in production-grade LLM systems, RAG pipelines, and full-stack AI applications. He built Minutz (OpenAI Hackathon), Saral AI, Skin Cure, and Clarity. Reach him at dhruvilmistry16@gmail.com. (Query: ${query})`;
        return new Response(
          JSON.stringify({
            jsonrpc: "2.0",
            id,
            result: {
              content: [{ type: "text", text }],
            },
          }),
          { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
        );
      }

      if (toolName === "get_projects") {
        return new Response(
          JSON.stringify({
            jsonrpc: "2.0",
            id,
            result: {
              content: [
                {
                  type: "text",
                  text: JSON.stringify([
                    { name: "Tax Mitra", description: "AI-powered Income-Tax Notice & Workflow Assistant for Indian taxpayers", stack: ["Next.js", "FastAPI", "RAG", "Deterministic Rules", "LLMs"], url: "https://taxmitra.bydhruvil.in" },
                    { name: "Nudge", description: "Autonomous AI Gmail Follow-Up Agent with CLI & MCP support", stack: ["Python", "Groq", "Llama 3.3 70B", "MCP", "SQLite"], url: "https://bydhruvil.in/projects" },
                    { name: "Minutz", description: "AI Meeting Intelligence Platform selected at OpenAI Hackathon", stack: ["FastAPI", "Next.js", "Whisper", "GPT-4o"], url: "https://bydhruvil.in/projects" },
                    { name: "Saral AI", description: "Low-latency Voice AI Receptionist for MSMEs", stack: ["FastAPI", "Groq", "Sarvam AI", "WebSockets"], url: "https://bydhruvil.in/projects" },
                    { name: "Skin Cure", description: "Multimodal Healthcare Classifier on 28k dermatology images", stack: ["PyTorch", "SwinV2", "FastAPI", "React"], url: "https://bydhruvil.in/projects" },
                    { name: "Clarity", description: "Multi-provider AI reading assistant Chrome extension", stack: ["Manifest V3", "LLM APIs"], url: "https://bydhruvil.in/projects" }
                  ], null, 2)
                }
              ]
            }
          }),
          { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
        );
      }

      if (toolName === "read_doc_page") {
        const page = (args.page || "bio").toLowerCase();
        let content = "Dhruvil Mistry Portfolio Documentation.";
        if (page.includes("stack")) {
          content = "Tech Stack: Python, FastAPI, Next.js, React, Qdrant, Pinecone, Groq, PyTorch, OpenAI, Anthropic, Gemini.";
        } else if (page.includes("gpt")) {
          content = "GPT-Live Architecture: WebRTC WARP plumbing, full-duplex turn detection, Go media frontends.";
        } else if (page.includes("dev")) {
          content = "Developer Portal: https://bydhruvil.in/developers. OpenAPI 3.1: /openapi.json. NLWeb: /ask. MCP: /mcp.";
        } else {
          content = "Biography: Dhruvil Mistry is an AI Engineer from Mumbai building production LLMs and voice bots.";
        }
        return new Response(
          JSON.stringify({
            jsonrpc: "2.0",
            id,
            result: {
              content: [{ type: "text", text: content }],
            },
          }),
          { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
        );
      }

      if (toolName === "get_contact_info") {
        return new Response(
          JSON.stringify({
            jsonrpc: "2.0",
            id,
            result: {
              content: [
                {
                  type: "text",
                  text: JSON.stringify({
                    email: "dhruvilmistry16@gmail.com",
                    location: "Mumbai, India",
                    linkedin: "https://linkedin.com/in/dhruvilmistry16",
                    github: "https://github.com/dhruvil-codes",
                    twitter: "https://x.com/bydhruvil",
                    substack: "https://bydhruvil.substack.com/",
                    portfolio: "https://bydhruvil.in"
                  }, null, 2)
                }
              ]
            }
          }),
          { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
        );
      }

      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          error: { code: -32601, message: `Tool not found: ${toolName}` },
        }),
        { status: 404, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
      );
    }

    if (method === "resources/list") {
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: { resources: RESOURCES },
        }),
        { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
      );
    }

    if (method === "resources/read") {
      const uri = body.params?.uri || "";
      const res = RESOURCE_CONTENTS[uri] || {
        mimeType: "text/plain",
        text: `Content for ${uri}: Dhruvil Mistry AI Portfolio resource.`,
      };

      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: {
            contents: [
              {
                uri,
                mimeType: res.mimeType,
                text: res.text,
              },
            ],
          },
        }),
        { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
      );
    }

    if (method === "prompts/list") {
      return new Response(
        JSON.stringify({
          jsonrpc: "2.0",
          id,
          result: { prompts: PROMPTS },
        }),
        { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
      );
    }

    if (method?.startsWith("notifications/")) {
      return new Response(null, { status: 204, headers: rateLimitHeaders });
    }

    // Default MCP info
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        id,
        result: {
          serverInfo: SERVER_INFO,
          capabilities: CAPABILITIES,
          tools: TOOLS,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
    );
  } catch {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32700, message: "Parse error / Invalid JSON-RPC payload" },
      }),
      { status: 400, headers: { "Content-Type": "application/json; charset=utf-8", ...rateLimitHeaders } }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({
      name: "bydhruvil-mcp-server",
      version: "1.0.0",
      description: "Model Context Protocol JSON-RPC endpoint for Dhruvil Mistry Portfolio",
      server_card: "https://bydhruvil.in/.well-known/mcp/server-card.json",
      tools: TOOLS,
      resources: RESOURCES,
      capabilities: CAPABILITIES,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "RateLimit-Limit": "100",
        "RateLimit-Remaining": "99",
        "RateLimit-Reset": "60",
        "RateLimit-Policy": "100;w=60",
        "X-RateLimit-Limit": "100",
        "X-RateLimit-Remaining": "99",
        "X-RateLimit-Reset": "60",
      },
    }
  );
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, Idempotency-Key, X-Idempotency-Key, X-Agent-ID",
    },
  });
}
