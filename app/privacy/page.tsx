import Link from "next/link";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dhruvil Mistry",
  description: "Privacy Policy for Dhruvil Mistry's portfolio website and AI endpoints.",
  alternates: {
    canonical: "https://bydhruvil.in/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-8 py-10">
      <Header />
      <main className="mt-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold tracking-tight text-foreground text-2xl">
            Privacy Policy
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
            Your privacy is valued. This portfolio website (<code>https://bydhruvil.in</code>) and its associated AI endpoints operate with strict data privacy principles.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">1. Data Collection</h2>
          <p>
            This website does not require account creation, login, or persistent tracking cookies. When you interact with the interactive AI chat widget or <code>/ask</code> API, your queries are processed solely in real-time to generate grounded responses. Queries are not used to train proprietary foundational models.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">2. Analytics & Cookies</h2>
          <p>
            Minimal, privacy-friendly telemetry (such as standard server access logs and anonymous visitor counts) may be processed to monitor uptime and site performance.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">3. Contact</h2>
          <p>
            For privacy inquiries, contact Dhruvil Mistry at <a href="mailto:dhruvilmistry16@gmail.com" className="underline font-medium text-foreground">dhruvilmistry16@gmail.com</a>.
          </p>
        </article>
      </main>
    </div>
  );
}
