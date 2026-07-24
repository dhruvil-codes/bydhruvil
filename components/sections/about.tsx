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
      <div className="p-4 sm:p-6 space-y-4 text-sm sm:text-base leading-7 text-neutral-600 dark:text-neutral-300">
        <p>
          I&apos;m an AI Engineer who loves building things around agents, LLMs and voice AI. Most of my time goes into tinkering with new ideas, shipping projects and going down random AI rabbit holes. I share almost everything I learn and build on X.
        </p>
        <p>
          I&apos;ve been building in AI since college, from Minutz, an AI meeting intelligence tool, to Saral AI, a multilingual voice agent. My favourite part is taking a random idea, turning it into something that actually works, and figuring out all the messy engineering in between.
        </p>
        <p>
          Right now, I&apos;m going deeper into agentic AI, evals, observability and open source. I&apos;m also looking for an <strong className="font-semibold text-foreground">AI Engineer role at a startup</strong> where I can ship fast, work on real problems and grow alongside the product.
        </p>
      </div>
    </section>
  );
}
