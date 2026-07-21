"use client";

import { Crosshairs } from "@/components/ui/crosshairs";
import { FrameButton } from "@/components/ui/frame-button";
import { cn } from "@/lib/utils";

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

  return (
    <footer
      id="footer"
      className="relative border-x border-edge screen-line-before screen-line-after p-4 sm:p-6"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <Crosshairs top={true} bottom={true} />
      <div className="flex flex-col gap-4 w-full">
        {/* Crawlable Social Links for Entity & Profile Authority */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-[11px] font-mono text-muted-foreground/50 border-b border-border/20 pb-3">
          <a
            href="https://www.linkedin.com/in/dhruvilmistry16/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Dhruvil Mistry LinkedIn
          </a>
          <span className="opacity-40">•</span>
          <a
            href="https://github.com/dhruvil-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Dhruvil Mistry GitHub
          </a>
          <span className="opacity-40">•</span>
          <a
            href="https://peerlist.io/bydhruvil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Dhruvil Mistry Peerlist
          </a>
          <span className="opacity-40">•</span>
          <a
            href="https://x.com/bydhruvil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Dhruvil Mistry X / Twitter
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <p
              className="text-xs font-medium leading-5 text-muted-foreground"
              itemProp="copyright"
            >
              &copy; {currentYear} – Dhruvil Mistry. All rights reserved.
            </p>
            <p className="text-[11px] font-medium text-muted-foreground/60">
              Inspired from{" "}
              <a
                href="https://jdhruv.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/80 hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Dhruv
              </a>{" "}
              &amp;{" "}
              <a
                href="https://ramx.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/80 hover:text-foreground underline underline-offset-2 transition-colors"
              >
                Ram
              </a>
            </p>
          </div>

          <FrameButton
            variant="outline"
            className="h-9 px-4 text-xs normal-case tracking-wider gap-2 cursor-default"
          >
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
          </FrameButton>
        </div>
      </div>
    </footer>
  );
}

