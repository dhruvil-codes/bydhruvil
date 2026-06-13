"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import { FrameMarkers } from "@/components/ui/frame-button";
import { ArrowUpRight, Search, BookOpen, Clock, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SubstackRecommendation {
  id: string;
  title: string;
  publication: string;
  author: string;
  description: string;
  url: string;
  readTime: string;
  category: string;
  accentColor: string; // Tailored HSL colors for glow effect
  borderColor: string;
}

const substacksData: SubstackRecommendation[] = [
  {
    id: "ai-engineer",
    title: "The Rise of the AI Engineer",
    publication: "Latent Space",
    author: "Swyx & Alessio",
    description: "The seminal post defining the shift from traditional machine learning research to software engineering with foundation models. It details how AI Engineers build pipelines, evaluate LLMs, and ship cognitive features in production.",
    url: "https://www.latent.space/p/ai-engineer",
    readTime: "12 min read",
    category: "AI Engineering",
    accentColor: "rgba(59, 130, 246, 0.12)",
    borderColor: "group-hover:border-blue-500/30",
  },
  {
    id: "pragmatic-engineer",
    title: "How AI is Changing Software Engineering",
    publication: "The Pragmatic Engineer",
    author: "Gergely Orosz",
    description: "A data-driven deep dive into the real-world impact of generative AI on developer velocity, team velocity, and career paths. Provides insight into how big tech and startups adapt to AI coding tools.",
    url: "https://newsletter.pragmaticengineer.com/p/how-ai-is-changing-software-engineering",
    readTime: "15 min read",
    category: "Software Career",
    accentColor: "rgba(249, 115, 22, 0.12)",
    borderColor: "group-hover:border-orange-500/30",
  },
  {
    id: "ahead-of-ai",
    title: "Understanding Parameter-Efficient Fine-Tuning",
    publication: "Ahead of AI",
    author: "Sebastian Raschka",
    description: "An exceptional technical breakdown of PEFT, LoRA, and fine-tuning strategies for large language models. It explains how to scale model adaptions while managing compute and memory constraints.",
    url: "https://sebastianraschka.substack.com/p/understanding-parameter-efficient-fine-tuning",
    readTime: "18 min read",
    category: "Deep Learning",
    accentColor: "rgba(168, 85, 247, 0.12)",
    borderColor: "group-hover:border-purple-500/30",
  },
  {
    id: "interconnects",
    title: "RLHF and the Training of Modern LLMs",
    publication: "Interconnects",
    author: "Nathan Lambert",
    description: "An essential exploration of reinforcement learning from human feedback (RLHF) and direct preference optimization (DPO). It analyzes the engineering trade-offs of alignment, post-training, and model safety.",
    url: "https://www.interconnects.ai/p/rlhf-in-modern-llms",
    readTime: "10 min read",
    category: "Alignment",
    accentColor: "rgba(16, 185, 129, 0.12)",
    borderColor: "group-hover:border-emerald-500/30",
  },
];

const categories = ["All", "AI Engineering", "Deep Learning", "Alignment", "Software Career"];

export default function StackPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSubstacks = useMemo(() => {
    return substacksData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      {/* Hero background grid */}
      <div className="relative w-full bg-grid-dots">
        <Navbar />

        <main className="max-w-screen overflow-x-hidden px-4 md:px-6">
          <div className="mx-auto max-w-3xl relative bg-background">
            <Header />
          </div>
        </main>
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
                  A curated selection of technical essays, deep dives, and articles that I recommend reading. 
                  These resources cover practical production challenges in machine learning, engineering workflows, and the future of AI.
                </p>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-col gap-4 pt-2">
                {/* Search Bar */}
                <div className="relative w-full">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search articles, publications, or authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 rounded-xl border border-edge bg-muted/20 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/30 transition-all"
                  />
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono border transition-all cursor-pointer ${
                        selectedCategory === category
                          ? "bg-foreground text-background border-foreground"
                          : "bg-muted/10 border-edge text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of Substack Cards */}
              <div className="relative pt-2">
                {filteredSubstacks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredSubstacks.map((item) => (
                      <a
                        key={item.id}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col justify-between border-[1.5px] border-edge dark:border-zinc-800/80 p-5 rounded-xl bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:bg-neutral-50/30 dark:hover:bg-zinc-900/20 active:scale-[0.99] select-none cursor-pointer overflow-visible"
                      >
                        {/* Glow Layer Accent */}
                        <div
                          className="absolute inset-0 -z-10 opacity-0 blur-2xl rounded-xl transition-all duration-300 group-hover:opacity-100"
                          style={{
                            background: `radial-gradient(circle at 50% 50%, ${item.accentColor} 0%, transparent 70%)`
                          }}
                        />

                        {/* Top corner frame markers */}
                        <FrameMarkers size={16} offset={6} hoverOffset={3} />

                        {/* Card Content */}
                        <div className="space-y-3">
                          {/* Metadata Header */}
                          <div className="flex justify-between items-center text-[10px] font-mono tracking-tight">
                            <span className="text-muted-foreground font-semibold uppercase">
                              {item.publication}
                            </span>
                            <span className="px-2 py-0.5 rounded-full border border-edge text-muted-foreground bg-muted/30">
                              {item.category}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-semibold text-base leading-snug text-foreground tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                            {item.title}
                          </h3>

                          {/* Author & Read Time */}
                          <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                            <span>By {item.author}</span>
                            <span className="h-1.5 w-1.5 rounded-full bg-border" />
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" /> {item.readTime}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-xs leading-relaxed text-muted-foreground/90 font-sans mt-1">
                            {item.description}
                          </p>
                        </div>

                        {/* Link Trigger */}
                        <div className="flex items-center justify-between pt-4 mt-auto">
                          <span className="text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                            Read article
                          </span>
                          <div className="h-7 w-7 rounded-lg border border-edge bg-muted/20 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-border transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="border border-dashed border-edge rounded-xl p-8 text-center space-y-2">
                    <BookOpen className="h-8 w-8 text-muted-foreground mx-auto" />
                    <p className="text-sm font-medium text-foreground">No recommendations found</p>
                    <p className="text-xs text-muted-foreground">Try adjusting your search query or filters.</p>
                  </div>
                )}
              </div>

              {/* Newsletter CTA Panel */}
              <div className="border border-dashed border-edge rounded-xl p-5 bg-muted/10 relative overflow-hidden mt-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-4 w-4 text-orange-500" />
                      <h4 className="font-semibold text-sm text-foreground">My Personal Newsletter</h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
                      I write about engineering, building AI assistants like Minutz, Whisper pipelines, and system architectures. Subscribe to follow along.
                    </p>
                  </div>
                  <a
                    href="https://dhruvil.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border px-3 py-1.5 rounded-xl font-mono text-xs font-medium cursor-pointer inline-flex items-center gap-1.5 bg-background hover:bg-muted text-foreground transition-all hover:border-border/80 whitespace-nowrap self-start sm:self-auto"
                  >
                    Subscribe to Blog <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
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
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <MorphPanel />
        </div>
        <FloatingDock />
      </main>
    </div>
  );
}
