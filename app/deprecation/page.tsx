import Link from "next/link";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Deprecation & Versioning Policy | bydhruvil",
  description: "API versioning lifecycle, deprecation guidelines, and sunset timeline for bydhruvil developer APIs.",
  alternates: {
    canonical: "https://bydhruvil.in/deprecation",
  },
};

export default function DeprecationPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-8 py-10">
      <Header />
      <main className="mt-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold tracking-tight text-foreground text-2xl">
            API Deprecation &amp; Versioning Policy
          </h1>
          <Link
            href="/developers"
            className="border border-border px-3 py-1.5 rounded-xl font-medium text-sm cursor-pointer group flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-110 transition-transform" />
            Developers Portal
          </Link>
        </div>
        <div className="mt-4 border-b border-border" />

        <article className="mt-6 text-sm sm:text-base leading-7 text-foreground/85 space-y-4">
          <h2 className="text-lg font-semibold text-foreground mt-4 mb-2">1. Versioning Strategy</h2>
          <p>
            bydhruvil APIs follow URL path versioning (e.g. <code>/v1/ask</code>, <code>/v1/projects</code>, <code>/v1/tasks</code>). All breaking changes are guaranteed to increment the major version path.
          </p>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">2. Deprecation Notice &amp; RFC Sunset Headers</h2>
          <p>
            When an API endpoint or version is marked for deprecation:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>A minimum of <strong>6 months notice</strong> is provided before decommission.</li>
            <li>HTTP responses will include the standard <code>Deprecation: @timestamp</code> and <code>Sunset: date</code> headers (RFC 8594).</li>
            <li>A human and agent-readable link header <code>Link: &lt;https://bydhruvil.in/deprecation&gt;; rel=&quot;deprecation&quot;</code> will be attached.</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground mt-6 mb-2">3. Current Supported Versions</h2>
          <p>
            - <strong>v1 (Active):</strong> Introduced August 2026. Deprecation status: None. Sunset date: None.
          </p>
        </article>
      </main>
    </div>
  );
}
