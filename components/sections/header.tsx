"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { MorphingText } from "@/components/ui/morphing-text";
import { CopyMarkdown } from "@/components/ui/copy-markdown";

export default function Header() {
  const [trigger, setTrigger] = useState(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let active = true;
    requestAnimationFrame(() => {
      if (active) setMounted(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const profileSrc = mounted && resolvedTheme === "dark"
    ? "/images/dhruvil-dark.png"
    : "/images/dhruvil.png";

  const handleInteraction = useCallback(() => {
    setTrigger((prev) => prev + 1);
  }, []);

  return (
    <section className="screen-line-after flex flex-col border-x border-edge">
      <div className="flex relative p-3 sm:p-5 gap-3 sm:gap-4 items-start sm:items-center">
        {/* Profile Avatar */}
        <div className="shrink-0">
          <div className="size-24 sm:size-32 rounded-[12px] border border-neutral-200 dark:border-neutral-800 p-[4px]">
            <div className="relative w-full h-full overflow-hidden rounded-[8px]">
              <Image
                src={profileSrc}
                alt="Dhruvil Mistry"
                fill
                priority
                sizes="(max-width: 640px) 250px, 300px"
                className="rounded-[8px] object-cover transition-opacity duration-300 [image-rendering:-webkit-optimize-contrast] [transform:translateZ(0)]"
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex flex-1 flex-col justify-center gap-1.5 pr-14 sm:pr-24 min-w-0">
          <div className="flex flex-col gap-1.5">
            <h1
              className="font-bold tracking-tight inline-flex items-center gap-x-3"
              itemScope
              itemType="https://schema.org/Person"
            >
              <span
                className="inline-flex items-center text-foreground text-xl sm:text-3xl"
                onMouseEnter={handleInteraction}
                onClick={handleInteraction}
              >
                <MorphingText
                  texts={["Dhruvil Mistry", "AI Engineer"]}
                  trigger={trigger}
                  className="!text-xl !leading-tight sm:!text-3xl"
                />
                <span itemProp="name" className="sr-only">
                  Dhruvil Mistry
                </span>
              </span>

              <meta itemProp="givenName" content="Dhruvil" />
              <meta itemProp="familyName" content="Mistry" />
              <meta
                itemProp="description"
                content="I build and ship AI products that actually solve a problem"
              />
              <meta itemProp="url" content="https://bydhruvil.in" />
              <meta itemProp="sameAs" content="https://github.com/dhruvil-codes" />
              <meta itemProp="sameAs" content="https://www.linkedin.com/in/dhruvilmistry16/" />
              <meta itemProp="sameAs" content="https://x.com/bydhruvil" />
              <meta itemProp="jobTitle" content="AI Engineer" />
            </h1>

            {/* Badges container */}
            <div className="flex flex-wrap items-center gap-1.5 py-0.5">
              {/* Open to Work Badge */}
              <span className="inline-flex items-center gap-1.5 rounded-full border border-edge bg-muted/30 dark:bg-muted/30 px-2.5 py-1 text-xs font-medium backdrop-blur-sm select-none shrink-0 align-middle">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/75 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-muted-foreground font-normal">Open to work</span>
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-[470px]">
            I build and ship AI products that actually solves a problem.
          </p>
        </div>

        {/* Copy Markdown — top right corner */}
        <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 flex items-center">
          <CopyMarkdown />
        </div>
      </div>
    </section>
  );
}


