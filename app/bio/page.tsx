import Link from "next/link";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biography | Dhruvil Mistry",
  description: "Read the story and career journey of Dhruvil Mistry, an AI Engineer based in Mumbai, India.",
  alternates: {
    canonical: "https://bydhruvil.in/bio",
  },
  openGraph: {
    title: "Biography | Dhruvil Mistry",
    description: "Read the story and career journey of Dhruvil Mistry, an AI Engineer based in Mumbai, India.",
    url: "https://bydhruvil.in/bio",
    type: "profile",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Dhruvil Mistry Biography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biography | Dhruvil Mistry",
    description: "Read the story and career journey of Dhruvil Mistry, an AI Engineer based in Mumbai, India.",
    images: ["/images/og-banner.png"],
  },
};

export default function BioPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "@id": "https://bydhruvil.in/bio#page",
            "isPartOf": {
              "@id": "https://bydhruvil.in/#website"
            },
            "mainEntityOfPage": "https://bydhruvil.in/bio",
            "name": "Biography | Dhruvil Mistry",
            "description": "Biography and career journey of Dhruvil Mistry.",
            "about": {
              "@id": "https://bydhruvil.in/#person"
            },
            "mainEntity": {
              "@id": "https://bydhruvil.in/#person"
            }
          }),
        }}
      />
      <Header />
      <section aria-labelledby="about-heading" className="mt-12">
        <h2
          id="about-heading"
          className="font-semibold tracking-tight text-foreground text-xl flex items-center gap-2 justify-between"
        >
          Biography
          <Link
            href="/"
            className="border border-border px-2.5 py-1 rounded-xl font-medium text-sm cursor-pointer group flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-110 transition-transform" />
            Home
          </Link>
        </h2>
        <div className="mt-3 border-b border-border" />

        <div className="mt-6" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Dhruvil Mistry" />
          <meta itemProp="givenName" content="Dhruvil" />
          <meta itemProp="familyName" content="Mistry" />
          <meta itemProp="url" content="https://bydhruvil.in" />
          <meta itemProp="sameAs" content="https://github.com/dhruvil-codes" />
          <meta itemProp="sameAs" content="https://www.linkedin.com/in/dhruvilmistry16/" />
          <meta itemProp="sameAs" content="https://x.com/bydhruvil" />
          <meta itemProp="sameAs" content="https://peerlist.io/bydhruvil" />

          <div className="border border-dashed border-border rounded-xl p-4 mb-8 text-sm tracking-[-0.01em] bg-muted/20">
            <p className="text-muted-foreground">
              <strong className="tracking-tight text-foreground">Note:</strong> This page is
              primarily intended for search engines and knowledge graphs. The
              formatting and detailed structure are designed to improve
              discoverability and provide structured information about my
              background and work.
            </p>
          </div>
          
          <div
            className="text-sm sm:text-base leading-6 text-foreground/80 space-y-4 tracking-[-0.01em]"
            itemProp="description"
          >
            <p>
              I am an AI Engineer based in Mumbai, India, who bridges the gap between sophisticated machine learning capabilities and robust, user-facing software. I specialize in designing and shipping production-grade AI systems, specifically LLM agents, RAG (Retrieval-Augmented Generation) pipelines, and full-stack web architectures.
            </p>

            <p>
              My journey began as a Full Stack Web Designer on the Contra Platform, where I delivered over 10 client applications, achieved a 95% client satisfaction rate, and developed reusable design systems that accelerated delivery times by 30%. This background instilled a deep appreciation for UI/UX detail, clean code, and rapid product shipment.
            </p>

            <p>
              Driven by a curiosity for cognitive computing, I transitioned into AI and machine learning. During my internship at Infosys Springboard, I worked on end-to-end preprocessing pipelines and ML workflows, containerizing processes with Docker and integrating them into production-grade CI/CD pipelines, which reduced overall model error rates by 20%.
            </p>

            <p>
              My projects reflect a focus on real-world utility and engineering performance. For instance, I built **Minutz**, an invisible browser-native meeting recorder that captures audio streams directly via WebRTC, processing transcription and action item extraction through a parallelized FastAPI and OpenAI Whisper pipeline. I also engineered **Saral AI**, a low-latency voice receptionist that automates inbound calls over full-duplex WebSocket connections with sub-second response times using Sarvam AI and Groq LLM.
            </p>

            <p>
              I share my findings and engineering workflow as a technical content creator on LinkedIn, where I connect with a community of over 3,000 developers and founders. I am currently finishing my Bachelor of Engineering in Electronics & Telecommunications at MCT Rajiv Gandhi Institute of Technology.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold tracking-tight text-foreground text-lg mb-4">
              Community & Leadership
            </h3>
            <div className="border-t border-border pt-4">
              <ul className="text-sm sm:text-base leading-7 text-muted-foreground tracking-[-0.01em] list-disc list-outside ml-4 space-y-2">
                <li>
                  <span className="font-semibold text-foreground">Technical Lead</span> at ISTE RGIT Students Chapter (2024 – Present), directing technical curriculum and leading workshops.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Technical Content Creator</span> on LinkedIn (2023 – Present), sharing AI engineering and web development insights with 3,000+ followers.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Runner-up</span> in Project Model Presentation at TechnoFest State-Level Competition (2023).
                </li>
                <li>
                  <span className="font-semibold text-foreground">1st Place Winner</span> in Model Making Competition at Thakur Polytechnic (2022).
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold tracking-tight text-foreground text-lg mb-4">
              Frequently Asked Questions (FAQ)
            </h3>
            <div className="border-t border-border pt-4 space-y-6">
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">
                  Who is Dhruvil Mistry?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground mt-1 leading-6">
                  Dhruvil Mistry is an AI Engineer based in Mumbai, India. He specializes in designing and shipping production-grade LLM systems, agentic architectures, RAG pipelines, and full-stack AI applications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">
                  What has Dhruvil Mistry built?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground mt-1 leading-6">
                  His flagship projects include **Minutz** (an AI Meeting Intelligence Platform selected at the OpenAI hackathon), **Saral AI** (a real-time Voice AI Receptionist for MSMEs), **Skin Cure** (an AI dermatology classifier trained on SwinV2), and **Clarity** (a multi-provider AI reading assistant Chrome extension).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">
                  What technologies does Dhruvil Mistry specialize in?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground mt-1 leading-6">
                  Dhruvil specializes in Python, FastAPI, Next.js, React, LangChain, LlamaIndex, vector databases (Qdrant, Pinecone, ChromaDB), and integrating frontier LLMs from OpenAI, Anthropic, and Gemini.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">
                  Is Dhruvil Mistry open to work?
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground mt-1 leading-6">
                  Yes, Dhruvil is actively seeking AI Engineer, GenAI Engineer, or LLM Engineer roles at funded, fast-moving startups. He is based in Mumbai, India, and open to remote or on-site opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
