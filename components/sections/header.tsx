"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { useTheme } from "next-themes";

import { MorphingText } from "@/components/ui/morphing-text";
import { ConfettiButton } from "@/components/ui/confetti-button";
import { CopyMarkdown } from "@/components/ui/copy-markdown";

function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Only run once per session to avoid double-counting on re-renders
    const sessionKey = "visitor_counted";
    const alreadyCounted = sessionStorage.getItem(sessionKey);

    if (!alreadyCounted) {
      // Increment count on first visit in this session
      fetch("/api/visitors", { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setCount(data.count);
          sessionStorage.setItem(sessionKey, "1");
        })
        .catch(() => {
          // Fallback: try to just read count
          fetch("/api/visitors")
            .then((res) => res.json())
            .then((data) => setCount(data.count))
            .catch(() => setCount(null));
        });
    } else {
      // Already counted this session — just fetch display count
      fetch("/api/visitors")
        .then((res) => res.json())
        .then((data) => setCount(data.count))
        .catch(() => setCount(null));
    }
  }, []);

  return count;
}

function formatCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) {
    const s = n.toLocaleString("en-US");
    return s;
  }
  return n.toLocaleString("en-US");
}

export default function Header() {
  const [trigger, setTrigger] = useState(0);
  const visitorCount = useVisitorCount();
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

  const renderVisitorCounter = () => (
    <ConfettiButton
      options={{
        particleCount: 40,
        spread: 360,
        startVelocity: 15,
        gravity: 1.2,
        scalar: 0.75
      }}
      className="flex items-center gap-1.5 rounded-full border border-edge bg-muted/60 px-2.5 py-1 backdrop-blur-sm cursor-pointer hover:bg-muted/80 active:scale-95 transition-all duration-200 outline-none select-none shrink-0"
    >
      <Eye className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
      <span className="font-mono text-xs font-medium text-muted-foreground tabular-nums">
        {visitorCount !== null ? formatCount(visitorCount) : "—"}
      </span>
    </ConfettiButton>
  );

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
        <div className="flex flex-1 flex-col justify-center gap-1.5 pr-0 sm:pr-36 min-w-0">
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

              {/* Mobile action buttons (visible on mobile < 640px) */}
              <div className="flex sm:hidden items-center gap-1.5">
                <CopyMarkdown />
                {renderVisitorCounter()}
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-[470px]">
            I build and ship AI products that actually solve a problem. Not just the demos that sits in github repo :)
          </p>
        </div>

        {/* Desktop Visitor Counter + Copy Markdown — top right corner */}
        <div className="hidden sm:flex absolute top-5 right-5 z-20 items-center gap-1.5">
          <CopyMarkdown />
          {renderVisitorCounter()}
        </div>
      </div>
    </section>
  );
}

