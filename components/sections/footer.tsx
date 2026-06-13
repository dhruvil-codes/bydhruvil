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
      <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-4">
        <p
          className="text-xs font-medium leading-5 text-muted-foreground"
          itemProp="copyright"
        >
          &copy; {currentYear} – Dhruvil Mistry. All rights reserved.
        </p>

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
    </footer>
  );
}

