import Link from "next/link";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dhruvil Mistry | AI Engineer",
  description:
    "Learn about Dhruvil Mistry, an AI Engineer based in Mumbai, India, specializing in production LLM architectures, RAG pipelines, and full-stack AI development.",
  alternates: {
    canonical: "https://bydhruvil.in/about",
  },
  openGraph: {
    title: "About Dhruvil Mistry | AI Engineer",
    description:
      "Learn about Dhruvil Mistry, an AI Engineer based in Mumbai, India, specializing in production LLM architectures, RAG pipelines, and full-stack AI development.",
    url: "https://bydhruvil.in/about",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Dhruvil Mistry",
            "url": "https://bydhruvil.in/about",
            "mainEntity": {
              "@id": "https://bydhruvil.in/#person"
            }
          }),
        }}
      />
      <Header />
      <main className="mt-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold tracking-tight text-foreground text-2xl">
            About Me
          </h1>
          <Link
            href="/"
            className="border border-border px-3 py-1.5 rounded-xl font-medium text-sm cursor-pointer group flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-110 transition-transform" />
            Home
          </Link>
        </div>
        <div className="mt-4 border-b border-border" />

        <article className="mt-6 text-sm sm:text-base leading-7 text-foreground/85 space-y-4">
          <p>
            I am <strong>Dhruvil Mistry</strong>, an AI Engineer based in Mumbai, India. I focus on building real-time, production-grade AI systems, voice agents, and full-stack applications that combine clean software architecture with cutting-edge machine learning.
          </p>

          <p>
            Over the past few years, I have engineered flagship projects including <strong>Minutz</strong> (an AI meeting intelligence platform selected at the OpenAI × Outskill Hackathon), <strong>Saral AI</strong> (a low-latency voice receptionist for SMBs), <strong>Skin Cure</strong> (a multimodal healthcare classifier), and <strong>Clarity</strong> (a multi-model Chrome reading extension).
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Core Engineering Philosophy</h2>
          <p>
            I believe that great AI engineering is 90% systems plumbing: low-latency data streaming, robust error recovery, context compaction, and responsive user feedback loops. I write about these architectural patterns on my <Link href="/blog" className="underline font-medium text-foreground">technical blog</Link>.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-8 mb-2">Current Status & Hiring</h2>
          <p>
            I am actively open to AI Engineer, LLM Engineer, or GenAI Engineer roles at high-growth tech startups. If you are building ambitious AI products, let&apos;s connect via <Link href="/contact" className="underline font-medium text-foreground">Contact</Link> or email me at <a href="mailto:dhruvilmistry16@gmail.com" className="underline font-medium text-foreground">dhruvilmistry16@gmail.com</a>.
          </p>
        </article>
      </main>
    </div>
  );
}
