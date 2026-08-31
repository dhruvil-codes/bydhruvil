import Link from "next/link";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dhruvil Mistry | AI Engineer",
  description:
    "Get in touch with Dhruvil Mistry for AI engineering roles, collaborations, speaking, or consultations.",
  alternates: {
    canonical: "https://bydhruvil.in/contact",
  },
  openGraph: {
    title: "Contact Dhruvil Mistry | AI Engineer",
    description:
      "Get in touch with Dhruvil Mistry for AI engineering roles, collaborations, speaking, or consultations.",
    url: "https://bydhruvil.in/contact",
    type: "profile",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Dhruvil Mistry",
            "url": "https://bydhruvil.in/contact",
            "mainEntity": {
              "@id": "https://bydhruvil.in/#person"
            }
          }),
        }}
      />
      <Header />
      <main className="mt-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold tracking-tight text-foreground text-2xl">
            Contact & Connect
          </h1>
          <Link
            href="/"
            className="border border-border px-3 py-1.5 rounded-xl font-medium text-sm cursor-pointer group flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-110 transition-transform" />
            Home
          </Link>
        </div>
        <div className="mt-4 border-b border-border" />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="mailto:dhruvilmistry16@gmail.com"
            className="p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">Direct Email</h2>
            <p className="text-sm text-foreground/80 mt-1 font-mono">dhruvilmistry16@gmail.com</p>
            <p className="text-xs text-muted-foreground mt-2">Response time: Usually within 12-24 hours</p>
          </a>

          <a
            href="https://linkedin.com/in/dhruvilmistry16"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">LinkedIn</h2>
            <p className="text-sm text-foreground/80 mt-1 font-mono">in/dhruvilmistry16</p>
            <p className="text-xs text-muted-foreground mt-2">Professional networking, articles & career updates</p>
          </a>

          <a
            href="https://github.com/dhruvil-codes"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">GitHub</h2>
            <p className="text-sm text-foreground/80 mt-1 font-mono">@dhruvil-codes</p>
            <p className="text-xs text-muted-foreground mt-2">Open source AI code, repositories & demos</p>
          </a>

          <a
            href="https://x.com/bydhruvil"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">Twitter / X</h2>
            <p className="text-sm text-foreground/80 mt-1 font-mono">@bydhruvil</p>
            <p className="text-xs text-muted-foreground mt-2">AI thoughts, build-in-public logs & experiments</p>
          </a>

          <a
            href="https://bydhruvil.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">Substack Newsletter</h2>
            <p className="text-sm text-foreground/80 mt-1 font-mono">bydhruvil.substack.com</p>
            <p className="text-xs text-muted-foreground mt-2">In-depth essays on AI systems, engineering breakdowns & mental models</p>
          </a>
        </div>
      </main>
    </div>
  );
}
