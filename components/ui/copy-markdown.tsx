"use client";

import { useState } from "react";
import { FileText, Check } from "lucide-react";

const PORTFOLIO_MARKDOWN = `# Dhruvil Mistry — AI Engineer

> AI Engineer specialising in production-grade LLM systems, RAG pipelines, and full-stack applications. Building at the intersection of AI capability and user-facing products.

- **Website:** https://bydhruvil.in
- **GitHub:** https://github.com/dhruvil-codes
- **LinkedIn:** https://www.linkedin.com/in/dhruvilmistry16/
- **Twitter/X:** https://x.com/bydhruvil
- **Email:** dhruvilmistry16@gmail.com
- **Status:** Open to work

---

## About

In 2021, I typed something into the OpenAI Playground. Got a response in seconds. Couldn't stop thinking about it.

Spent a year doing client web work — decent money, zero excitement. Kept coming back to AI every evening. Testing, breaking, rebuilding.

At some point the pretending stopped. I stopped treating AI as a side interest and went all in.

I care about the layer where research meets production — real data, real edge cases, real users.

Every project I've built started with a real frustration. Minutz because meeting bots are annoying. LegalMind because contracts shouldn't need a lawyer to read.

---

## Experience

### AI/ML Intern — Infosys Springboard
*Sep 2025 – Nov 2025*

- Reduced model error rates by 20% across production ML pipelines by engineering end-to-end preprocessing and feature engineering.
- Containerised ML workflows with Docker and integrated version-controlled releases into CI/CD pipelines.

### Full Stack Web Designer — Contra Platform
*Oct 2023 – Feb 2024*

- Delivered 10+ full-stack applications with zero post-launch critical bugs and 95% client satisfaction.
- Reduced average delivery time by 30% by establishing reusable design systems and component libraries.

---

## Education

### MCT Rajiv Gandhi Institute of Technology — Mumbai, India
- **Graduation:** 2026
- **CGPA:** 7.00/10

### Thakur Polytechnic — Mumbai, India
- **Graduation:** 2023
- **Achievement:** 3rd Rank in Department

---

## Skills

Python · JavaScript · TypeScript · HTML · CSS · Tailwind CSS · React · Next.js · PostgreSQL · Supabase · Docker · PyTorch · Git · GitHub

---

## Certifications & Honors

- **Building LLM Applications with Prompt Engineering** — NVIDIA (May 2025)
  Hands-on experience in building LLM-powered applications using prompt engineering, chain-of-thought prompting, and agent-like structures.

- **Generative AI with LLMs** — DeepLearning.AI (March 2025)
  Advanced certification covering LLM training, fine-tuning, RLHF, and efficient scaling models.

- **Technical Lead** — ISTE RGIT Students Chapter (September 2024)
  Leading the student developer community and technical initiatives, hosting workshops on Python, web development, and introductory machine learning.

- **TechnoFest 2023 Runner-up** — TechnoFest State-Level (March 2023)
  Awarded runner-up for innovative project presentation at the state-level technical model competition.

- **1st Place Model Making** — Thakur Polytechnic (September 2022)
  Won first prize in the department-wide project and model making competition for demonstrating physical and software prototypes.

---

*This profile was copied from https://bydhruvil.in*
`;

export function CopyMarkdown() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_MARKDOWN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement("textarea");
      el.value = PORTFOLIO_MARKDOWN;
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      id="copy-markdown-btn"
      onClick={handleCopy}
      title="Copy profile as Markdown (great for AI tools)"
      aria-label="Copy profile as Markdown"
      className="flex items-center gap-1.5 rounded-full border border-edge bg-muted/60 px-2.5 py-1 backdrop-blur-sm cursor-pointer hover:bg-muted/80 active:scale-95 transition-all duration-200 outline-none select-none"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden="true" />
      ) : (
        <FileText className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      )}
      <span className="font-mono text-xs font-medium text-muted-foreground tabular-nums">
        {copied ? "Copied!" : ".md"}
      </span>
    </button>
  );
}
