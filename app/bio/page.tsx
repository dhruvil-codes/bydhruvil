import Link from "next/link";
import Header from "@/components/sections/header";

export default function BioPage() {
  return (
    <div className="mx-auto max-w-4xl px-8 py-10">
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
              My projects reflect a focus on real-world utility and engineering performance. For instance, I built **Minutz**, an invisible browser-native meeting recorder that captures audio streams directly via WebRTC, processing transcription and action item extraction through a parallelized FastAPI and OpenAI Whisper pipeline. I also engineered **LegalMind**, a high-performance contract risk analyzer that scales risk extraction into 12 parallel async LLM tasks, handling 50-page documents in under 30 seconds.
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
        </div>
      </section>
    </div>
  );
}
