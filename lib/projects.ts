export interface ProjectData {
  id: string;
  name: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  year: string | null;
  status: "shipped" | "in-progress";
  heroImage: string;
  tags: string[];
  href: string;
  githubHref?: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "taxmitra",
    name: "Tax Mitra",
    subtitle: "AI Income-Tax Notice & Workflow Assistant",
    shortDescription: "An AI-powered workflow that helps Indian taxpayers understand income-tax notices, determine position, draft evidence-backed responses, and navigate filing with grounded sources.",
    description: "Tax Mitra is an AI-powered workflow that helps Indian taxpayers understand income-tax notices, determine their position, prepare relevant evidence and responses, and navigate the official filing process — with grounded sources, deterministic rules, safety boundaries, and human approval.",
    year: "2025",
    status: "shipped",
    heroImage: "/images/projects/taxmitra/taxmitra.png",
    tags: ["Next.js", "FastAPI", "Income Tax AI", "RAG", "Deterministic Rules", "LLMs"],
    href: "https://taxmitra.bydhruvil.in",
    githubHref: "https://github.com/dhruvil-codes/taxmitra"
  },
  {
    id: "nudge",
    name: "Nudge",
    subtitle: "Autonomous AI Gmail Follow-Up Agent",
    shortDescription: "An autonomous AI Gmail follow-up agent that identifies unanswered email threads and generates contextual, human-like follow-up drafts using Groq's Llama 3.3 70B.",
    description: "Nudge is an autonomous AI Gmail follow-up agent that identifies unanswered email threads and generates contextual, human-like follow-up drafts using Groq's Llama 3.3 70B. Built as a zero-setup CLI tool with Google OAuth, local SQLite persistence, and Model Context Protocol (MCP) support, it integrates with AI clients like Claude Desktop and Cursor while keeping user data local and secure.",
    year: "2025",
    status: "shipped",
    heroImage: "/images/projects/nudge/nudge.png",
    tags: ["Python", "CLI", "Groq LLM", "Llama 3.3 70B", "MCP", "SQLite", "Google OAuth"],
    href: "https://github.com/dhruvil-codes"
  },
  {
    id: "saral-ai",
    name: "Saral AI",
    subtitle: "Voice AI Receptionist",
    shortDescription: "A low-latency, real-time Voice AI Receptionist for MSMEs automating inbound customer phone calls over full-duplex WebSocket connections.",
    description: "Saral AI is a low-latency, real-time Voice AI Receptionist engineered specifically for Micro, Small, and Medium Enterprises (MSMEs). It automates inbound customer phone calls over full-duplex WebSocket connections, answers business queries using custom enterprise knowledge, captures structured high-intent leads, and communicates naturally in Indian regional languages.",
    year: null,
    status: "in-progress",
    heroImage: "/images/projects/saral-ai/saral-ai.png",
    tags: ["FastAPI", "Next.js", "Sarvam AI", "Groq LLM", "WebSockets", "webrtcvad"],
    href: "https://github.com/dhruvil-codes"
  },
  {
    id: "minutz",
    name: "Minutz",
    subtitle: "AI Meeting Intelligence",
    shortDescription: "An invisible, browser-native meeting recorder that intercepts WebRTC audio streams directly inside Chrome with a full FastAPI & Next.js pipeline.",
    description: "I built Minutz as an invisible, browser-native meeting recorder that intercepts WebRTC audio streams directly inside Chrome — no bot joins, no notifications. It processes audio through a full FastAPI pipeline: Whisper transcription, GPT-4o extraction of summaries, action items, and decisions. Shipped with a Next.js dashboard, Supabase backend, and Slack integration.",
    year: "2024",
    status: "shipped",
    heroImage: "/images/projects/minutz/minutz.jpg",
    tags: ["FastAPI", "Next.js", "OpenAI Whisper", "GPT-4o", "Supabase", "Chrome MV3"],
    href: "https://bydhruvil.in"
  },
  {
    id: "skincure",
    name: "Skin Cure",
    subtitle: "AI Dermatology Classifier",
    shortDescription: "Training a 24-class SwinV2 classifier on 28K+ dermatological images achieving 78% accuracy, combined with dermatologist discovery.",
    description: "Training a 24-class SwinV2-Base classifier on 28,000+ dermatological images achieving 78% accuracy. Built with a FastAPI + React frontend that combines AI predictions, confidence scores, and Google Maps API for dermatologist discovery.",
    year: null,
    status: "shipped",
    heroImage: "/images/projects/skincure/skincure.jpg",
    tags: ["FastAPI", "React", "SwinV2", "PyTorch"],
    href: "https://github.com/dhruvil-codes"
  },
  {
    id: "clarity",
    name: "Clarity",
    subtitle: "AI Reading Assistant",
    shortDescription: "A shipped Chrome extension for 1-click summarisation, entity extraction, and contextual Q&A with multi-provider LLM abstraction.",
    description: "A shipped Chrome extension for 1-click summarisation, entity extraction, and contextual Q&A. Built with a zero-backend, multi-provider LLM abstraction layer supporting GPT-4o Mini, Claude Haiku, and Gemini 2.5 Flash.",
    year: "2024",
    status: "shipped",
    heroImage: "/images/projects/clarity/clarity.jpg",
    tags: ["Chrome Extension", "OpenAI", "Anthropic", "Gemini"],
    href: "https://github.com/dhruvil-codes"
  }
];
