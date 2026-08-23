import Link from "next/link";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Dhruvil Mistry",
  description: "Terms of service for Dhruvil Mistry's portfolio website and public developer APIs.",
  alternates: {
    canonical: "https://bydhruvil.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-8 py-10">
      <Header />
      <main className="mt-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold tracking-tight text-foreground text-2xl">
            Terms of Service
          </h1>
          <Link
            href="/"
            className="border border-border px-3 py-1.5 rounded-xl font-medium text-sm cursor-pointer group flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-110 transition-transform" />
            Home
          </Link>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Last Updated: August 2026</p>
        <div className="mt-4 border-b border-border" />

        <article className="mt-6 text-sm sm:text-base leading-7 text-foreground/85 space-y-4">
          <p>
            By accessing <code>https://bydhruvil.in</code>, its subpages, or its public APIs (including <code>/ask</code> and Model Context Protocol endpoints), you agree to these terms of use.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">1. Permitted Use</h2>
          <p>
            Autonomous AI agents, search engine crawlers, and human visitors are welcome to crawl and query public information published on this portfolio. Scraping for malicious attacks or denial of service is prohibited.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">2. Rate Limiting</h2>
          <p>
            Public APIs are subject to rate limiting (30 requests/minute) to maintain service availability. Excessive requests may receive HTTP 429 responses.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">3. Intellectual Property</h2>
          <p>
            All articles, code snippets, project architectures, and design assets are the intellectual property of Dhruvil Mistry unless otherwise noted.
          </p>
        </article>
      </main>
    </div>
  );
}
