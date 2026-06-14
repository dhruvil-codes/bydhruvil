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
}

export const projectsData: ProjectData[] = [
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
  },
  {
    id: "legalmind",
    name: "LegalMind",
    subtitle: "AI Risk Analyser",
    shortDescription: "Building a production RAG pipeline for legal documents with 12 parallel async LLM risk-extraction tasks targeting under 30s latency on 50 pages.",
    description: "Building a production RAG pipeline for legal document analysis. LegalMind processes PDFs and DOCX files with 12 parallel async LLM risk-extraction tasks using FastAPI + asyncio, targeting under 30 seconds latency on 50-page contracts. Implements Qdrant vector search with recursive chunking and text-embedding-3-small.",
    year: null,
    status: "in-progress",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    tags: ["FastAPI", "Qdrant", "OpenAI", "Pydantic", "RAG"],
    href: "https://github.com/dhruvil-codes"
  },
  {
    id: "skincure",
    name: "Skin Cure",
    subtitle: "AI Dermatology",
    shortDescription: "Training a 24-class SwinV2 classifier on 28K+ dermatological images achieving 78% accuracy, combined with dermatologist discovery.",
    description: "Training a 24-class SwinV2-Base classifier on 28,000+ dermatological images achieving 78% accuracy. Built with a FastAPI + React frontend that combines AI predictions, confidence scores, and Google Maps API for dermatologist discovery.",
    year: null,
    status: "shipped",
    heroImage: "/images/projects/skincure/skincure.jpg",
    tags: ["FastAPI", "React", "SwinV2", "PyTorch"],
    href: "https://github.com/dhruvil-codes"
  }
];
