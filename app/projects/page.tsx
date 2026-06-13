"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/sections/navbar";
import Header from "@/components/sections/header";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import Footer from "@/components/sections/footer";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { projectsData } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { Crosshairs } from "@/components/ui/crosshairs";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
  const pathname = usePathname();

  useEffect(() => {
    const handleDeepLink = () => {
      const hash = window.location.hash.replace("#", "");
      const params = new URLSearchParams(window.location.search);
      const projectParam = params.get("project");
      const targetId = hash || projectParam;

      if (targetId) {
        // Next tick to guarantee DOM nodes are fully painted
        const timer = setTimeout(() => {
          const cardContainer = document.getElementById(`project-card-${targetId}`);
          if (cardContainer) {
            const trigger = cardContainer.querySelector('[role="dialog"]') as HTMLElement;
            if (trigger) {
              cardContainer.scrollIntoView({ behavior: "auto", block: "center" });
              trigger.click();
            }
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    };

    handleDeepLink();
  }, [pathname]);

  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">

      {/* Hero area: grid shows in left/right margins, navbar + hero content sit on solid bg */}
      <div className="relative w-full bg-grid-dots">
        <Navbar />

        <main className="max-w-screen overflow-x-hidden px-4 md:px-6">
          <div className="mx-auto max-w-3xl relative bg-background">
            <Header />
          </div>
        </main>
      </div>

      {/* Projects Grid Section */}
      <main className="max-w-screen overflow-x-hidden px-4 md:px-6 pb-10">
        <div className="mx-auto max-w-3xl relative">
          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Projects List Container */}
          <section className="relative border-x border-edge screen-line-before screen-line-after">
            <Crosshairs top={true} bottom={true} />
            <header className="screen-line-after px-4 py-3 sm:px-6 flex items-center justify-between">
              <h1 className="font-semibold tracking-tight text-foreground text-xl">Projects</h1>
              <Link
                href="/"
                className="border border-border px-3 py-1.5 rounded-xl font-mono text-xs font-medium cursor-pointer group inline-flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all text-muted-foreground hover:text-foreground"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">←</span> Back
              </Link>
            </header>

            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 mb-6">
                Things I've built and shipped.
              </p>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    id={`project-card-${project.id}`}
                    className="relative group w-full [&_div[role='dialog']]:w-full [&_div[role='dialog']]:items-stretch [&_div[role='dialog']_img]:w-full [&_div[role='dialog']_img]:h-48 [&_div[role='dialog']_img]:object-cover"
                  >
                    <ExpandableCard
                      title={project.name}
                      src={project.heroImage}
                      description={project.subtitle}
                    >
                      {/* Expanded View Content */}
                      <div className="space-y-4 w-full">
                        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {project.description}
                        </p>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="border border-edge text-muted-foreground bg-muted/30 px-2 py-0.5 rounded-md text-xs font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Link Button */}
                        {project.href && (
                          <div className="pt-2">
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 rounded-xl font-mono text-xs font-medium cursor-pointer bg-background hover:bg-muted text-foreground transition-all"
                            >
                              View project <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </ExpandableCard>

                    {/* Status Badge overlays top-right of contracted card */}
                    <div className="absolute top-5 right-5 pointer-events-none">
                      <span className="text-[10px] font-mono text-muted-foreground bg-background/80 border border-edge px-2 py-0.5 rounded-full font-medium backdrop-blur-sm">
                        {project.status === "shipped"
                          ? (project.year || "Shipped")
                          : "In Progress"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Footer Section */}
          <Footer />
        </div>
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
          <MorphPanel />
        </div>
        <FloatingDock />
      </main>
    </div>
  );
}
