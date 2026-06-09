"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { useTheme } from "next-themes";

import { MorphingText } from "@/components/ui/morphing-text";

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
    setMounted(true);
  }, []);

  const profileSrc = mounted && resolvedTheme === "dark"
    ? "/images/dhruvil-dark.png"
    : "/images/dhruvil.png";

  const handleInteraction = useCallback(() => {
    setTrigger((prev) => prev + 1);
  }, []);

  return (
    <section className="screen-line-after flex flex-col border-x border-edge">

      <div className="flex relative">
      {/* Profile Avatar */}
      <div className="shrink-0 p-2 sm:p-5">
        <div className="size-28 sm:size-32 rounded-[12px] border border-neutral-200 dark:border-neutral-800 p-[4px]">
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
      <div className="flex flex-1 flex-col justify-center gap-1 pl-2 pr-2 sm:pl-4 sm:pr-4">
        <div className="flex items-center gap-2 pt-2 pb-2">
          <h1
            className="font-bold tracking-tight"
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
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-[470px]">
          I build and ship AI products that actually solve a problem. Not just the demos that sits in github repo :)
        </p>
      </div>

      {/* Visitor Counter — top right corner */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
        <div className="flex items-center gap-1.5 rounded-full border border-edge bg-muted/60 px-2.5 py-1 backdrop-blur-sm">
          <Eye className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
          <span className="font-mono text-xs font-medium text-muted-foreground tabular-nums">
            {visitorCount !== null ? formatCount(visitorCount) : "—"}
          </span>
        </div>
      </div>
      </div>
    </section>
  );
}
