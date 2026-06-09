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
          In 2021, I typed something into the OpenAI Playground. Got a response in seconds. Couldn't stop thinking about it.
        </p>
        <p>
          Spent a year doing client web work — decent money, zero excitement. Kept coming back to AI every evening. Testing, breaking, rebuilding.
        </p>
        <p>At some point the pretending stopped. I stopped treating AI as a side interest and went all in.</p>
        <p>
          I care about the layer where research meets production — real data, real edge cases, real users.
        </p>
        <p>Every project I've built started with a real frustration. Minutz because meeting bots are annoying. LegalMind because contracts shouldn't need a lawyer to read.</p>
      </div>
    </section>
  );
}
