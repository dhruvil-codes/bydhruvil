"use client";

import { Crosshairs } from "@/components/ui/crosshairs";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

function YCMonogram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 5h3.2l2.8 5 2.8-5H18l-4.6 8v6h-2.8v-6L6 5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = hostRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <footer
      id="footer"
      className="relative border-x border-edge screen-line-before screen-line-after p-4 sm:p-6"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <Crosshairs top={true} bottom={true} />
      <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
        <p
          className="text-xs font-medium leading-5 text-muted-foreground"
          itemProp="copyright"
        >
          &copy; {currentYear} – Dhruvil Mistry. All rights reserved.
        </p>

        <div
          ref={hostRef}
          className={cn(
            "relative inline-flex items-center justify-center rounded-full",
            "px-1.5 py-1.5 isolate select-none"
          )}
          style={
            {
              ["--mx" as any]: "50%",
              ["--my" as any]: "50%",
            } as React.CSSProperties
          }
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full">
            <div
              className={cn(
                "absolute inset-0 rounded-full",
                "bg-[radial-gradient(120px_60px_at_var(--mx)_var(--my),rgba(255,140,0,0.24),transparent_70%)]",
                "blur-xl"
              )}
            />
          </div>
          <div
            className={cn(
              "relative z-10 rounded-full px-3 py-1.5",
              "backdrop-blur-xl",
              "bg-muted/60",
              "ring-1 ring-border",
              "shadow-sm"
            )}
          >
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "h-5 w-5 shrink-0 rounded-md grid place-items-center",
                  "bg-[#FC6A21]",
                  "shadow-[0_2px_8px_rgba(252,106,33,0.55)]"
                )}
                aria-hidden="true"
              >
                <YCMonogram className="h-3 w-3 text-white" />
              </span>
              <span className="text-xs font-medium tracking-tight text-foreground">
                Not Backed by Y Combinator
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
