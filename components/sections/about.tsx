"use client";

import React from "react";
import { Crosshairs } from "@/components/ui/crosshairs";

export default function About() {
  return (
    <section id="about" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">About Me</h2>
      </header>
      <div className="p-4 sm:p-6 space-y-3 text-sm sm:text-base leading-7 text-neutral-600 dark:text-neutral-300">
        <p>
          I build AI products from idea to production. Whether it&apos;s AI agents, voice AI, RAG, or developer tools, I enjoy solving messy engineering problems and turning prototypes into products people actually use.
        </p>
        <p>
          Outside of building, I love documenting the journey and contributing to open source. I&apos;m always experimenting with new ideas, shipping fast, and obsessing over what makes AI products feel magical.
        </p>
        <p>
          Currently focusing on agentic AI, evals, and open source, and looking for an <strong className="font-semibold text-foreground">AI Engineer role at a startup</strong> where I can ship fast and solve real-world problems.
        </p>
      </div>
    </section>
  );
}
