import React from "react";
import { FrameMarkers } from "@/components/ui/frame-button";
import type { SubstackRecommendation } from "@/lib/stack";
import { ArrowUpRight } from "lucide-react";

interface StackCardProps {
  item: SubstackRecommendation;
}

export default function StackCard({ item }: StackCardProps) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between border-[1.5px] border-edge dark:border-zinc-800/80 rounded-xl bg-zinc-900/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:bg-zinc-900/60 active:scale-[0.99] select-none cursor-pointer overflow-visible min-h-[280px]"
    >
      {/* Glow Layer Accent - preserved from original card design */}
      <div
        className="absolute inset-0 -z-10 opacity-0 blur-2xl rounded-xl transition-all duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${item.accentColor} 0%, transparent 70%)`
        }}
      />

      {/* Top corner frame markers - preserved from original card design */}
      <FrameMarkers size={16} offset={6} hoverOffset={3} />

      {/* Image container: no padding, no margin, rounded-t-xl with overflow-hidden */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-t-xl">
        <img
          src={item.heroImage}
          alt={item.title}
          className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      {/* Card Body: Only contains title below the image */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-base sm:text-lg leading-snug text-zinc-200 tracking-tight group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 font-sans">
            {item.title}
          </h3>
          <ArrowUpRight className="w-4 h-4 shrink-0 text-zinc-500 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-zinc-300" />
        </div>
      </div>
    </a>
  );
}
