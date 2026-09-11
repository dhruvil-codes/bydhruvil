import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import { Crosshairs } from "@/components/ui/crosshairs";
import { BookingButton } from "@/components/services/booking-button";
import { ProjectsCarousel } from "@/components/services/projects-carousel";
import { Timeline } from "@/components/services/timeline";
import { WhatIBuild } from "@/components/services/what-i-build";
import { AnnotatedText } from "@/components/services/annotated-text";

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

            <div className="p-4 sm:p-6 space-y-12">
              {/* 1. SERVICES INTRO */}
              <div className="max-w-[680px] space-y-4">
                <h1 className="text-2xl sm:text-[32px] font-semibold tracking-tight text-foreground">
                  Services
                </h1>
                <div className="space-y-3.5 text-[15px] leading-[1.6] text-neutral-600 dark:text-neutral-400">
                  <p>
                    i&apos;m an AI engineer with{" "}
                    <span className="font-medium text-foreground">
                      2+ years of experience
                    </span>{" "}
                    building and shipping AI systems.
                  </p>
                  <p>
                    i care a lot about how software is built, from the architecture
                    and scalability to the tiny details that make a product feel
                    polished. i also have a strong eye for design, so everything
                    i ship comes with an interface that feels just as good as the
                    system behind it.
                  </p>
                  <p>
                    i work{" "}
                    <AnnotatedText variant="highlight">
                      9:00 AM to 7:00 PM IST
                    </AnnotatedText>{" "}
                    and keep my freelance work intentionally limited to 2 projects per
                    month so i can stay deeply involved in every build.
                  </p>
                  <p>
                    projects start at{" "}
                    <AnnotatedText variant="highlight">$450</AnnotatedText>, depending
                    on scope.
                  </p>
                  <p>
                    everything is built directly inside your accounts, tested with
                    your real data, and once we&apos;re done, you own the repository
                    and the entire system.
                  </p>
                  <div className="pt-1 space-y-1">
                    <p className="font-medium text-foreground">
                      have something you want to build?
                    </p>
                    <p>
                      ping me via{" "}
                      <a
                        href="mailto:dhruvilmistry16@gmail.com"
                        className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        email
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://x.com/bydhruvil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      >
                        X DM
                      </a>
                      . i usually reply within 2–3 hours.
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <BookingButton />
                </div>
              </div>

              {/* 2. WHAT I BUILD */}
              <div className="max-w-[680px] space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  What I Build
                </h2>

                <WhatIBuild />
              </div>

              {/* 3. PROJECTS */}
              <div className="space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  Projects
                </h2>

                <ProjectsCarousel />

                <p className="text-[15px] leading-[1.6] text-neutral-600 dark:text-neutral-400 pt-1">
                  Every project ships with the repo transferred to you, a
                  handover recording, and 7 days of fixes.
                </p>

                {/* Mount point: Testimonials and client quotes omitted until cleared */}
              </div>

              {/* 4. HOW IT WORKS */}
              <div className="max-w-[680px] space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  How It Works
                </h2>

                <Timeline />

                <div className="space-y-4 pt-2">
                  <p className="text-[15px] leading-[1.6] text-neutral-600 dark:text-neutral-400">
                    Available Monday to Friday,{" "}
                    <AnnotatedText variant="highlight">
                      9:00 AM – 7:00 PM IST
                    </AnnotatedText>
                    . Reach out anytime via{" "}
                    <a
                      href="mailto:dhruvilmistry16@gmail.com"
                      className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      email
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://x.com/bydhruvil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      X DM
                    </a>
                    —I reply within 2–3 hours.
                  </p>

                  <div>
                    <BookingButton />
                  </div>
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
