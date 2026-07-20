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
          I don&apos;t build for demos. I build for the moment something actually works for a real business with a real problem, saving them time, cutting out friction, making something hard feel effortless.
        </p>
        <p>
          That&apos;s the only thing that&apos;s keeps me going.
        </p>
        <p>
          I&apos;ve taken that obsession into hackathons too recently I got ranked #167 out of 13k globally on HackerRank Orchestrate, and selected as one of 1000 builders from 30k applicants for the Outskill x OpenAI hackathon.
        </p>
        <p>
          if it solves something real, it&apos;s worth building..
        </p>
        <p>
          Currently looking for an AI Engineer role at a startup where things move fast, the problems are real, and there&apos;s room to grow with the product. If that&apos;s you, let&apos;s talk.
        </p>
      </div>
    </section>
  );
}
