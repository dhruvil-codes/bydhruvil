import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Guides | Dhruvil Mistry",
  description: "Insightful articles, guides, and stories on AI engineering, local LLMs, and hackathons by Dhruvil Mistry.",
  alternates: {
    canonical: "https://bydhruvil.in/blog",
  },
  openGraph: {
    title: "Blog & Guides | Dhruvil Mistry",
    description: "Insightful articles, guides, and stories on AI engineering, local LLMs, and hackathons by Dhruvil Mistry.",
    url: "https://bydhruvil.in/blog",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Dhruvil Mistry's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Guides | Dhruvil Mistry",
    description: "Insightful articles, guides, and stories on AI engineering, local LLMs, and hackathons by Dhruvil Mistry.",
    images: ["/images/og-banner.png"],
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "building-minutz",
    title: "Building Minutz: Capturing WebRTC Audio Streams in Chrome Extensions",
    excerpt: "An in-depth look at capturing audio streams natively inside Google Chrome, overcoming Manifest V3 restrictions, and streaming WebSockets to FastAPI.",
    coverImage: "/images/projects/minutz/minutz.jpg",
    date: "July 2026",
    readTime: "8 min read",
    category: "Technical Article",
  },
  {
    slug: "local-ai",
    title: "Local AI is Easy. You're Overthinking It.",
    excerpt: "Moonshot AI launched Kimi K3 with 2.8T parameters for free. Learn why open weights are changing the game and how to set up your own local AI stack.",
    coverImage: "/images/local-ai-banner.png",
    date: "July 2026",
    readTime: "6 min read",
    category: "Technical Guide",
  },
  {
    slug: "openai-hackathon",
    title: "From 50% grades and zero peers to shipping AI products and beating 30,000 applicants for the OpenAI hackathon.",
    excerpt: "How I went from 50% grades to winning the OpenAI Hackathon. My journey of building AI products and beating 30,000 applicants.",
    coverImage: "/images/blog-banner.png",
    date: "June 2026",
    readTime: "5 min read",
    category: "Featured Article",
  },
];

export default function BlogListingPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": "https://bydhruvil.in/blog#page",
            "isPartOf": {
              "@id": "https://bydhruvil.in/#website"
            },
            "mainEntityOfPage": "https://bydhruvil.in/blog",
            "name": "Blog & Guides | Dhruvil Mistry",
            "description": "Articles, stories, and guides on AI engineering and systems by Dhruvil Mistry.",
            "publisher": {
              "@id": "https://bydhruvil.in/#person"
            }
          }),
        }}
      />
      {/* Hero background grid */}
      <div className="relative w-full bg-grid-dots">
        <Navbar />
      </div>

      {/* Main Blog Content */}
      <main className="max-w-screen overflow-x-hidden px-4 md:px-6 pb-10">
        <div className="mx-auto max-w-3xl relative">
          
          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Listing Container */}
          <section className="relative border-x border-edge screen-line-before screen-line-after">
            <Crosshairs top={true} bottom={true} />
            <header className="screen-line-after px-4 py-3 sm:px-6 flex items-center justify-between">
              <h1 className="font-semibold tracking-tight text-foreground text-xl">Blog</h1>
              <Link
                href="/"
                className="border border-border px-3 py-1.5 rounded-xl font-mono text-xs font-medium cursor-pointer group inline-flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all text-muted-foreground hover:text-foreground"
              >
                <span className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">←</span> Back
              </Link>
            </header>

            <div className="p-4 sm:p-6">
              <p className="text-sm sm:text-base leading-relaxed text-neutral-500 dark:text-neutral-400 mb-8">
                My thoughts, tutorials, and behind-the-scenes stories on building AI systems.
              </p>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group block border border-border hover:border-border/80 rounded-2xl overflow-hidden bg-card/40 hover:bg-card/80 transition-all hover:shadow-sm flex flex-col h-full"
                  >
                    {/* Cover image container */}
                    <div className="relative w-full aspect-video overflow-hidden border-b border-edge">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        {/* Meta Category and Time */}
                        <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase">
                          <span>{post.category}</span>
                          <span className="opacity-40">•</span>
                          <span>{post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-base font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-xs sm:text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Read Link */}
                      <div className="flex items-center justify-between pt-2 border-t border-border/20 text-xs font-mono font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        <span>Read article</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
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
