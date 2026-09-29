"use client";

import React from "react";
import Link from "next/link";
import { Crosshairs } from "@/components/ui/crosshairs";
import { ArrowRight, Mail } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6 flex items-center justify-between">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Services & Client Work</h2>
        <Link
          href="/services"
          className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
        >
          View all services <ArrowRight className="h-3 w-3" />
        </Link>
      </header>
      <div className="p-4 sm:p-6 space-y-4">
        <div>
          <h3 className="text-base sm:text-lg font-medium text-foreground">
            AI systems that solve a real bottleneck
          </h3>
          <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
            I build support and knowledge assistants, lead-response workflows and practical automation for small teams. Start with a focused pilot, then decide whether a production integration is worth building.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=dhruvilmistry16@gmail.com&su=AI%20project%20idea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground text-background px-4 py-2 text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="h-4 w-4" />
            Tell me what is slowing your team down
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            See services <span className="font-mono text-xs">→ /services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
