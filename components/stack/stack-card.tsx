import React from "react";
import { FrameMarkers } from "@/components/ui/frame-button";
import type { SubstackRecommendation } from "@/lib/stack";

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
        <h3 className="font-semibold text-base sm:text-lg leading-snug text-zinc-100 tracking-tight group-hover:text-blue-400 transition-colors duration-200 font-sans">
          {item.title}
        </h3>
      </div>
    </a>
  );
}
