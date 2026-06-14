"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";

import StackCard from "@/components/stack/stack-card";
import { substacksData } from "@/lib/stack";

export default function StackPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      {/* Hero background grid */}
      <div className="relative w-full bg-grid-dots">
        <Navbar />
      </div>

      {/* Main Stack Content */}
      <main className="max-w-screen overflow-x-hidden px-4 md:px-6 pb-10">
        <div className="mx-auto max-w-3xl relative">
          
          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Page Container */}
          <section className="relative border-x border-edge screen-line-before screen-line-after">
            <Crosshairs top={true} bottom={true} />
            
            <header className="screen-line-after px-4 py-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase block mb-2">
                  What I recommend the most for everyone to read
                </span>
                <h1 className="font-semibold tracking-tight text-foreground text-xl">Stack</h1>
                <p className="text-xs font-mono text-muted-foreground mt-0.5">/curated-reads</p>
              </div>
              <Link
                href="/"
                className="border border-border px-3 py-1.5 rounded-xl font-mono text-xs font-medium cursor-pointer group inline-flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all text-muted-foreground hover:text-foreground self-start sm:self-auto"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">←</span> Back
              </Link>
            </header>

            <div className="p-4 sm:p-6 space-y-6">
              {/* Introduction */}
              <div className="space-y-2">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                  I can't always commit to reading long books, so I use Substacks to close the knowledge gap. So here are some of my recent reads that I found insightful.
                </p>
              </div>

              {/* Grid of Substack Cards */}
              <div className="relative pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {substacksData.map((item) => (
                    <StackCard key={item.id} item={item} />
                  ))}
                </div>
              </div>


            </div>
          </section>

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Footer Section */}
          <Footer />
        </div>
        
        {/* Site Widgets */}
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
          <MorphPanel />
        </div>
        <FloatingDock />
      </main>
    </div>
  );
}
