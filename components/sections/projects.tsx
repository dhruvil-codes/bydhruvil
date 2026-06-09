"use client";
import { ProjectShowcase, type Project } from "@/components/ui/project-showcase";
import { Crosshairs } from "@/components/ui/crosshairs";

const projects: Project[] = [
  {
    title: "Minutz — AI Meeting Intelligence",
    description: "An invisible, browser-native meeting recorder that intercepts WebRTC audio streams directly inside Chrome with a full FastAPI & Next.js pipeline.",
    year: "Shipped | OpenAI Hackathon",
    link: "https://bydhruvil.in",
    image: "/images/projects/minutz/minutz.jpg",
  },
  {
    title: "Skin Cure — AI Dermatology",
    description: "Training a 24-class SwinV2 classifier on 28K+ dermatological images achieving 78% accuracy, combined with dermatologist discovery.",
    year: "Shipped",
    link: "https://github.com/dhruvil-codes",
    image: "/images/projects/skincure/skincure.jpg",
  },
    {
    title: "Clarity — AI Reading Assistant",
    description: "A shipped Chrome extension for 1-click summarisation, entity extraction, and contextual Q&A with multi-provider LLM abstraction.",
    year: "Shipped",
    link: "https://github.com/dhruvil-codes",
    image: "/images/projects/clarity/clarity.jpg",
  },
  {
    title: "LegalMind — AI Risk Analyser",
    description: "Building a production RAG pipeline for legal documents with 12 parallel async LLM risk-extraction tasks targeting under 30s latency on 50 pages.",
    year: "In Progress",
    link: "https://github.com/dhruvil-codes",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Projects</h2>
      </header>
      <div className="p-4 sm:p-6">
        <ProjectShowcase projects={projects} />
      </div>
    </section>
  );
}
