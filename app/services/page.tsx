import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Crosshairs } from "@/components/ui/crosshairs";
import { BookingButton } from "@/components/services/booking-button";
import { ProjectsCarousel } from "@/components/services/projects-carousel";
import { Timeline } from "@/components/services/timeline";
import { WhatIBuild } from "@/components/services/what-i-build";

export const metadata: Metadata = {
  title: "Services | Dhruvil Mistry",
  description:
    "AI engineering freelance builds. Customer support agents, internal knowledge bots, and ops automation.",
  alternates: {
    canonical: "https://bydhruvil.in/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://bydhruvil.in/services#service",
            "name": "AI Engineering Services",
            "provider": {
              "@type": "Person",
              "name": "Dhruvil Mistry",
              "url": "https://bydhruvil.in",
            },
            "description":
              "AI engineering freelance builds by Dhruvil Mistry: support agents, internal knowledge bots, and ops automation.",
            "offers": {
              "@type": "Offer",
              "price": "450",
              "priceCurrency": "USD",
            },
          }),
        }}
      />

      {/* Hero background grid */}
      <div className="relative w-full bg-grid-dots">
        <Navbar />
      </div>

      {/* Main Services Content */}
      <main className="max-w-screen overflow-x-hidden px-4 md:px-6 pb-10">
        <div className="mx-auto max-w-3xl relative">
          {/* Top Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Page Container */}
          <section className="relative border-x border-edge screen-line-before screen-line-after">
            <Crosshairs top={true} bottom={true} />

            <header className="screen-line-after px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase block mb-1">
                  AI Systems · Scoped Pilots & Audits
                </span>
                <h1 className="font-semibold tracking-tight text-foreground text-xl">
                  AI that fits the way your team works
                </h1>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">/services</p>
              </div>
              <Link
                href="/"
                className="border border-border px-3 py-1.5 rounded-xl font-mono text-xs font-medium cursor-pointer group inline-flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all text-muted-foreground hover:text-foreground self-start sm:self-auto"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">←</span> Back
              </Link>
            </header>

            <div className="p-4 sm:p-6 space-y-10">
              {/* 1. SERVICES INTRO */}
              <div className="space-y-4">
                <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m Dhruvil Mistry, an AI engineer. I build useful AI workflows with clear handoffs, source-backed answers and a person in control where it matters. I take on no more than two freelance projects a month.
                  </p>
                  <p>
                    We start with a focused pilot or workflow audit. We pick one workflow, one data source and a measurable acceptance test together. You get a working proof of concept or a written audit with concrete next steps before committing to a larger production build.
                  </p>
                  <div className="pt-2 space-y-1.5">
                    <p className="text-foreground font-medium">
                      <a
                        href="mailto:dhruvilmistry16@gmail.com?subject=20-minute%20AI%20project%20call"
                        className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity font-semibold"
                      >
                        Email me to arrange a 20-minute call →
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Tell me your process, the systems involved and what success would look like.
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <BookingButton />
                </div>
              </div>

              {/* 2. WHAT I BUILD */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                    What I Build
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Focused solutions built directly around your operational bottlenecks.
                  </p>
                </div>

                <WhatIBuild />
              </div>

              {/* 3. PROOF, NOT STOCK DEMOS */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                    Proof, not stock demos
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Independent products and hackathon builds showing real citation flows, human review, and explicit failure boundaries.
                  </p>
                </div>

                <ProjectsCarousel />

                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground/80 pt-1 border-t border-border/40">
                  Note: Tax Mitra and Nudge are independent products; Minutz is an OpenAI hackathon project. Client cases are shared only with explicit permission and verified outcomes. None of these are presented as commissioned client results.
                </p>
              </div>

              {/* 4. HOW A PROJECT RUNS */}
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                    How a project runs
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    A predictable, transparent engagement from discovery to handover.
                  </p>
                </div>

                <Timeline />
              </div>

              {/* 5. PRICING & SCOPE */}
              <div className="space-y-6 pt-2 border-t border-border/40">
                <div className="space-y-1">
                  <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                    Pricing & Engagement Terms
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Clear scopes, fixed budgets, and zero hidden assumptions.
                  </p>
                </div>

                {/* Two Tier Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pilot / Audit */}
                  <div className="p-4 sm:p-5 rounded-xl border border-edge bg-muted/20 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        Pilot or Workflow Audit
                      </h3>
                      <span className="font-mono text-base font-bold text-foreground">$450</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      A fast, fixed-scope proof of concept or technical review to validate ROI before building full production infrastructure.
                    </p>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 list-disc list-inside pt-1">
                      <li>One workflow & one data source</li>
                      <li>Measurable acceptance test criteria</li>
                      <li>Working POC code or prioritized fix audit</li>
                    </ul>
                  </div>

                  {/* Production Build */}
                  <div className="p-4 sm:p-5 rounded-xl border border-edge bg-muted/20 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">
                        Production Integration
                      </h3>
                      <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">Custom Quote</span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      End-to-end integration, automated data pipelines, custom security review, and live cloud deployment.
                    </p>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1.5 list-disc list-inside pt-1">
                      <li>Scoped after a 20-minute discovery call</li>
                      <li>50% upfront, balance upon handover</li>
                      <li>Explicit hosting, monitoring & error alerts</li>
                    </ul>
                  </div>
                </div>

                {/* Terms Details */}
                <div className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed rounded-xl border border-edge/60 p-4 bg-muted/10">
                  <p>
                    <strong className="text-foreground font-medium">Account ownership:</strong> Third-party model, API, telephony, and hosting charges are paid directly by you in your own accounts with cost estimates provided upfront.
                  </p>
                  <p>
                    <strong className="text-foreground font-medium">Warranty:</strong> I include seven calendar days of defect fixes against the agreed scope after handover. New feature requests and ongoing retainer maintenance are quoted separately.
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    <a
                      href="mailto:dhruvilmistry16@gmail.com?subject=AI%20project%20idea"
                      className="text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity font-semibold"
                    >
                      Tell me the workflow you want to improve →
                    </a>
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono">
                    I work from Mumbai, 9 am–7 pm IST.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Footer Section */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
