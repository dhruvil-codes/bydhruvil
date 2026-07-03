export const siteMetadata = {
  name: "Dhruvil Mistry",
  title: "Dhruvil Mistry | AI Engineer",
  description:
    "AI Engineer specialising in production-grade LLM systems, RAG pipelines, and full-stack applications. Building at the intersection of AI capability and user-facing products.",
  url: "https://bydhruvil.in",
  author: "Dhruvil Mistry",
  keywords: [
    "Dhruvil Mistry",
    "AI Engineer",
    "LLM",
    "RAG",
    "Python",
    "FastAPI",
    "Next.js",
    "Machine Learning",
    "Mumbai",
    "Portfolio",
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/dhruvil-codes",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dhruvilmistry16/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:dhruvilmistry16@gmail.com",
    icon: "mail",
  },
];

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  boldWords: string[];
  tags: string[];
  status: "live" | "shipped" | "in-progress";
  statusLabel: string;
  links: { label: string; href: string }[];
  images: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "saral-ai",
    title: "Saral AI",
    subtitle: "Voice AI Receptionist",
    description:
      "Saral AI is a low-latency, real-time Voice AI Receptionist engineered specifically for Micro, Small, and Medium Enterprises (MSMEs). It automates inbound customer phone calls over full-duplex WebSocket connections, answers business queries using custom enterprise knowledge, captures structured high-intent leads, and communicates naturally in Indian regional languages.",
    boldWords: [
      "low-latency",
      "Voice AI Receptionist",
      "MSMEs",
      "WebSocket connections",
      "custom enterprise knowledge",
      "structured high-intent leads",
      "Indian regional languages",
    ],
    tags: ["FastAPI", "Next.js", "Sarvam AI", "Groq LLM", "WebSockets", "webrtcvad"],
    status: "in-progress",
    statusLabel: "In Progress",
    links: [{ label: "View GitHub", href: "#" }],
    images: ["/images/projects/saral-ai/saral-ai.png"],
    featured: true,
  },
  {
    slug: "minutz",
    title: "Minutz",
    subtitle: "AI Meeting Intelligence",
    description:
      "I built Minutz as an invisible, browser-native meeting recorder that intercepts WebRTC audio streams directly inside Chrome — no bot joins, no notifications. It processes audio through a full FastAPI pipeline: Whisper transcription, GPT-4o extraction of summaries, action items, and decisions. Shipped with a Next.js dashboard, Supabase backend, and Slack integration.",
    boldWords: [
      "invisible",
      "WebRTC audio streams",
      "FastAPI pipeline",
      "Whisper transcription",
      "GPT-4o extraction",
      "Next.js dashboard",
      "Supabase backend",
      "Slack integration",
    ],
    tags: ["FastAPI", "Next.js", "OpenAI Whisper", "GPT-4o", "Supabase", "Chrome MV3"],
    status: "live",
    statusLabel: "Live · Shipped",
    links: [
      { label: "View Live", href: "#" },
      { label: "View GitHub", href: "#" },
    ],
    images: ["/images/projects/minutz/minutz.jpg"],
    featured: true,
  },
  {
    slug: "skincure",
    title: "Skin Cure",
    subtitle: "AI Dermatology Classifier",
    description:
      "Training a 24-class SwinV2-Base classifier on 28,000+ dermatological images achieving 78% accuracy. Built with a FastAPI + React frontend that combines AI predictions, confidence scores, and Google Maps API for dermatologist discovery.",
    boldWords: ["24-class SwinV2-Base classifier", "28,000+ dermatological images", "78% accuracy", "Google Maps API"],
    tags: ["FastAPI", "React", "SwinV2", "PyTorch"],
    status: "shipped",
    statusLabel: "Shipped",
    links: [{ label: "View GitHub", href: "#" }],
    images: ["/images/projects/skincure/skincure.jpg"],
    featured: false,
  },
  {
    slug: "clarity",
    title: "Clarity",
    subtitle: "AI Reading Assistant",
    description:
      "A shipped Chrome extension for 1-click summarisation, entity extraction, and contextual Q&A. Built with a zero-backend, multi-provider LLM abstraction layer supporting GPT-4o Mini, Claude Haiku, and Gemini 2.5 Flash.",
    boldWords: [
      "Chrome extension",
      "1-click summarisation",
      "zero-backend",
      "multi-provider LLM abstraction",
      "GPT-4o Mini",
      "Claude Haiku",
      "Gemini 2.5 Flash",
    ],
    tags: ["Chrome Extension", "OpenAI", "Anthropic", "Gemini"],
    status: "shipped",
    statusLabel: "Shipped",
    links: [{ label: "View GitHub", href: "#" }],
    images: ["/images/projects/clarity/clarity.jpg"],
    featured: false,
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  boldWords: string[];
}

export const experiences: Experience[] = [
  {
    role: "AI/ML Intern",
    company: "Infosys Springboard",
    location: "Remote",
    period: "Sep 2025 — Nov 2025",
    description:
      "Reduced model error rates by 20% across production ML pipelines by engineering end-to-end preprocessing and feature engineering. Containerised ML workflows with Docker and integrated version-controlled releases into CI/CD pipelines.",
    boldWords: ["20%", "production ML pipelines", "Docker", "CI/CD pipelines"],
  },
  {
    role: "Full Stack Web Designer",
    company: "Contra Platform",
    location: "Remote",
    period: "Oct 2023 — Feb 2024",
    description:
      "Delivered 10+ full-stack applications with zero post-launch critical bugs and 95% client satisfaction. Reduced average delivery time by 30% by establishing reusable design systems and component libraries.",
    boldWords: ["10+ full-stack applications", "zero post-launch critical bugs", "95% client satisfaction", "30%"],
  },
];

export const terminalLines = [
  { type: "system" as const, text: "Last login: Thu Jun 05 2026 08:00 PM on ttys000" },
  { type: "system" as const, text: "welcome to bydhruvil.in — type `help` to explore." },
  { type: "prompt" as const, text: "run pipeline --project minutz" },
  { type: "output" as const, text: "→ Intercepting WebRTC audio streams...   done" },
  { type: "output" as const, text: "→ Transcribing via Whisper...            done" },
  { type: "output" as const, text: "→ Extracting action items via GPT-4o...  done" },
  { type: "output" as const, text: "→ Syncing to dashboard...               done" },
  { type: "success" as const, text: "✓ Meeting processed — 4 action items, 2 decisions captured" },
];
