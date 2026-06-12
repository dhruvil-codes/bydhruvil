"use client";

import React from "react";
import { Crosshairs } from "@/components/ui/crosshairs";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function Quote() {
  return (
    <section id="quote" className="relative border-x border-edge screen-line-before screen-line-after overflow-hidden">
      <Crosshairs top={true} bottom={true} />
      
      <div className="relative py-12 px-6 sm:px-12 flex flex-col items-center justify-center text-center select-none bg-muted/5">
        {/* Background Dot Pattern with a custom mask to fade towards the edges */}
        <DotPattern
          width={24}
          height={24}
          cx={1}
          cy={0.5}
          cr={0.5}
          className="absolute inset-0 h-full w-full fill-neutral-400/20 dark:fill-neutral-500/15 [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_100%)] pointer-events-none"
        />

        {/* Quote content */}
        <div className="relative z-10 max-w-xl">
          <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-600 dark:text-neutral-300 tracking-tight italic">
            &ldquo;When you&apos;re <span className="font-bold text-foreground">winning</span>, you&apos;re not as <span className="font-bold text-foreground">good</span>{" "}as you think you&apos;re. 
            <br />
            When you&apos;re <span className="font-bold text-foreground">losing</span>, you&apos;re not as <span className="font-bold text-foreground">bad</span>{" "}as you think you&apos;re.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
