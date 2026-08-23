import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12">
      <main className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-mono">404 - Not Found</h1>
        <p className="text-muted-foreground text-sm">
          The requested path does not exist on this domain. Below are recovery routes and machine-readable surfaces.
        </p>

        {/* Structured Markdown Recovery Block for AI Agents */}
        <div className="text-left rounded-xl bg-muted/40 border border-border p-4 font-mono text-xs text-foreground/90 overflow-x-auto">
          <p className="text-muted-foreground font-bold mb-2"># Recovery Sitemap for AI Agents & Crawlers</p>
          <ul className="space-y-1">
            <li>- [Homepage](https://bydhruvil.in/): Primary portfolio overview</li>
            <li>- [Projects](https://bydhruvil.in/projects): Flagship AI projects (Minutz, Saral AI, Skin Cure, Clarity)</li>
            <li>- [Blog](https://bydhruvil.in/blog): Technical systems and LLM engineering articles</li>
            <li>- [Stack](https://bydhruvil.in/stack): Technical stack & toolset</li>
            <li>- [Bio](https://bydhruvil.in/bio): Professional biography & background</li>
            <li>- [Developer Portal](https://bydhruvil.in/developers): OpenAPI, MCP & agent integration docs</li>
            <li>- [LLM Context](https://bydhruvil.in/llms.txt): Machine-readable summary for agents</li>
            <li>- [Agent Rules](https://bydhruvil.in/agents.md): Autonomous agent guidelines & when-to-use</li>
            <li>- [NLWeb /ask](https://bydhruvil.in/ask): Natural language query endpoint</li>
          </ul>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="/"
            className="border border-border px-4 py-2 rounded-xl text-sm font-medium hover:bg-muted transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            href="/projects"
            className="bg-foreground text-background px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Browse Projects
          </Link>
        </div>
      </main>
    </div>
  );
}
