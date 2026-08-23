import Link from "next/link";
import Header from "@/components/sections/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Portal & Agent Documentation | Dhruvil Mistry",
  description:
    "Developer API documentation, Model Context Protocol (MCP) server integration, NLWeb /ask endpoint, and AI agent instructions for Dhruvil Mistry's portfolio.",
  alternates: {
    canonical: "https://bydhruvil.in/developers",
  },
  openGraph: {
    title: "Developer Portal & Agent Documentation | Dhruvil Mistry",
    description:
      "Developer API documentation, Model Context Protocol (MCP) server integration, and NLWeb endpoint.",
    url: "https://bydhruvil.in/developers",
    type: "website",
  },
};

export default function DevelopersPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 md:px-8 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Developer Portal & Agent Integration Guide",
            "url": "https://bydhruvil.in/developers",
            "author": {
              "@id": "https://bydhruvil.in/#person"
            },
            "publisher": {
              "@id": "https://bydhruvil.in/#person"
            },
            "description": "Comprehensive guide for integrating AI agents and developers with Dhruvil Mistry's portfolio."
          }),
        }}
      />
      <Header />
      <main className="mt-12">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold tracking-tight text-foreground text-2xl">
            Developer & Agent Portal
          </h1>
          <Link
            href="/"
            className="border border-border px-3 py-1.5 rounded-xl font-medium text-sm cursor-pointer group flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all"
          >
            <div className="h-2 w-2 rounded-full bg-blue-500 group-hover:scale-110 transition-transform" />
            Home
          </Link>
        </div>
        <p className="mt-2 text-muted-foreground text-sm">
          Machine-readable surfaces, OpenAPI schemas, NLWeb natural language endpoints, and MCP server configuration.
        </p>

        <div className="mt-4 border-b border-border" />

        {/* Quick Specs Grid */}
        <section aria-label="Machine Readable Specifications" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="/.well-known/ai-catalog.json"
            target="_blank"
            className="p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">AI Resource Discovery (ARD)</h2>
            <p className="text-xs text-muted-foreground mt-1 font-mono">/.well-known/ai-catalog.json</p>
            <p className="text-xs text-foreground/80 mt-2">Standard AI catalog linking models, endpoints, and trust manifests.</p>
          </a>

          <a
            href="/.well-known/mcp/server-card.json"
            target="_blank"
            className="p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">MCP Server Card (SEP-2127)</h2>
            <p className="text-xs text-muted-foreground mt-1 font-mono">/.well-known/mcp/server-card.json</p>
            <p className="text-xs text-foreground/80 mt-2">Model Context Protocol server with tools, prompts, and UI metadata.</p>
          </a>

          <a
            href="/openapi.json"
            target="_blank"
            className="p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">OpenAPI 3.1 Specification</h2>
            <p className="text-xs text-muted-foreground mt-1 font-mono">/openapi.json</p>
            <p className="text-xs text-foreground/80 mt-2">Complete API contract for conversational Q&A and query endpoints.</p>
          </a>

          <a
            href="/agents.md"
            target="_blank"
            className="p-4 rounded-xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
          >
            <h2 className="font-semibold text-foreground text-base">Agent Guidelines & Rules</h2>
            <p className="text-xs text-muted-foreground mt-1 font-mono">/agents.md & /llms.txt</p>
            <p className="text-xs text-foreground/80 mt-2">When-to-use instructions and structured knowledge base for LLMs.</p>
          </a>
        </section>

        {/* NLWeb Endpoint */}
        <section aria-label="NLWeb Integration" className="mt-10">
          <h2 className="font-semibold text-foreground text-xl">1. NLWeb Natural Language Query Endpoint</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Query Dhruvil Mistry’s portfolio knowledge base using standard natural language queries via GET or POST. Supports SSE streaming.
          </p>

          <div className="mt-4 rounded-xl bg-muted/40 border border-border p-4 font-mono text-xs overflow-x-auto text-foreground">
            <span className="text-emerald-500 font-bold">POST</span> https://bydhruvil.in/ask<br/>
            <span className="text-muted-foreground">Content-Type:</span> application/json<br/><br/>
            {`{
  "query": "Tell me about Dhruvil's work with Voice AI and FastAPI",
  "stream": false
}`}
          </div>
        </section>

        {/* MCP Configuration */}
        <section aria-label="MCP Configuration" className="mt-10">
          <h2 className="font-semibold text-foreground text-xl">2. Model Context Protocol (MCP) Setup</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Add to your Claude Desktop, Cursor, or Windsurf configuration:
          </p>

          <div className="mt-4 rounded-xl bg-muted/40 border border-border p-4 font-mono text-xs overflow-x-auto text-foreground">
            {`{
  "mcpServers": {
    "bydhruvil": {
      "url": "https://bydhruvil.in/ask"
    }
  }
}`}
          </div>
        </section>

        {/* Authentication */}
        <section aria-label="Authentication" className="mt-10 mb-12">
          <h2 className="font-semibold text-foreground text-xl">3. Authentication & Scopes</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Public endpoints are rate-limited to 30 requests/minute. For full auth guidance, review <Link href="/auth.md" className="underline font-medium text-foreground">auth.md</Link> and the <a href="/.well-known/oauth-protected-resource" className="underline font-medium text-foreground">OAuth Resource Metadata</a>.
          </p>
        </section>
      </main>
    </div>
  );
}
