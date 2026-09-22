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
                  What I offer and build for clients
                </span>
                <h1 className="font-semibold tracking-tight text-foreground text-xl">Services</h1>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">/freelance-builds</p>
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
                    I&apos;m an AI engineer with{" "}
                    <span className="font-semibold text-foreground">
                      2+ years of experience
                    </span>{" "}
                    building and shipping AI systems.
                  </p>
                  <p>
                    I care a lot about how software is built, from the architecture
                    and scalability to the tiny details that make a product feel
                    polished. I also have a strong eye for design, so everything
                    I ship comes with an interface that feels just as good as the
                    system behind it.
                  </p>
                  <p>
                    I work{" "}
                    <span className="font-medium text-foreground">
                      9:00 AM to 7:00 PM IST
                    </span>{" "}
                    and keep my freelance work intentionally limited to 2 projects per
                    month so I can stay deeply involved in every build.
                  </p>
                  <p>
                    Projects start at{" "}
                    <span className="font-semibold text-foreground">$450</span>, depending
                    on scope.
                  </p>
                  <p>
                    Everything is built directly inside your accounts, tested with
                    your real data, and once we&apos;re done, you own the repository
                    and the entire system.
                  </p>
                  <div className="pt-2 space-y-1">
                    <p className="font-semibold text-foreground">
                      Have something you want to build?
                    </p>
                    <p className="text-muted-foreground">
                      Ping me via{" "}
                      <a
                        href="mailto:dhruvilmistry16@gmail.com"
                        className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
                      >
                        email
                      </a>{" "}
                      or{" "}
                      <a
                        href="https://x.com/bydhruvil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
                      >
                        X DM
                      </a>
                      . I usually reply within 2–3 hours.
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <BookingButton />
                </div>
              </div>

              {/* 2. WHAT I BUILD */}
              <div className="space-y-4 pt-2">
                <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                  What I Build
                </h2>

                <WhatIBuild />
              </div>

              {/* 3. PROJECTS */}
              <div className="space-y-4 pt-2">
                <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                  Projects
                </h2>

                <ProjectsCarousel />

                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground pt-1">
                  Every project ships with the repo transferred to you, a
                  handover recording, and 7 days of fixes.
                </p>
              </div>

              {/* 4. HOW IT WORKS */}
              <div className="space-y-4 pt-2">
                <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground">
                  How It Works
                </h2>

                <Timeline />

                <div className="space-y-4 pt-2">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    Available Monday to Friday,{" "}
                    <span className="font-medium text-foreground">
                      9:00 AM – 7:00 PM IST
                    </span>
                    . Reach out anytime via{" "}
                    <a
                      href="mailto:dhruvilmistry16@gmail.com"
                      className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
                    >
                      email
                    </a>{" "}
                    or{" "}
                    <a
                      href="https://x.com/bydhruvil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white transition-colors font-medium"
                    >
                      X DM
                    </a>
                    — I reply within 2–3 hours.
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
