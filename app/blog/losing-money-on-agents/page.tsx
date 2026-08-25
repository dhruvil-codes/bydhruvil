import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import {
  ArrowLeft,
  DollarSign,
  Activity,
  Layers,
  Terminal,
  Cpu,
  AlertTriangle,
  GitBranch,
  ShieldCheck,
  Zap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "you're losing money on agents (the shift to shifts) | Dhruvil Mistry",
  description:
    "AI is shifting from clever text assistants to full-time digital employees. The real engineering problem isn't keeping them running — it's knowing what they actually did while you were asleep.",
  alternates: {
    canonical: "https://bydhruvil.in/blog/losing-money-on-agents",
  },
  openGraph: {
    title: "you're losing money on agents (the shift to shifts) | Dhruvil Mistry",
    description:
      "AI is shifting from clever text assistants to full-time digital employees. The real engineering problem isn't keeping them running — it's knowing what they actually did while you were asleep.",
    url: "https://bydhruvil.in/blog/losing-money-on-agents",
    type: "article",
    publishedTime: "2026-08-25T12:00:00.000Z",
    authors: ["Dhruvil Mistry"],
    images: [
      {
        url: "/images/losing-money-on-agents-banner.jpg",
        width: 1200,
        height: 800,
        alt: "you're losing money on agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "you're losing money on agents (the shift to shifts) | Dhruvil Mistry",
    description:
      "AI is shifting from clever text assistants to full-time digital employees. The real engineering problem isn't keeping them running — it's knowing what they actually did while you were asleep.",
    images: ["/images/losing-money-on-agents-banner.jpg"],
  },
};

export default function LosingMoneyOnAgentsBlogPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "https://bydhruvil.in/blog/losing-money-on-agents#article",
            isPartOf: {
              "@id": "https://bydhruvil.in/#website",
            },
            mainEntityOfPage: "https://bydhruvil.in/blog/losing-money-on-agents",
            headline: "you're losing money on agents (the shift to shifts)",
            description:
              "AI is shifting from clever text assistants to full-time digital employees. The real engineering problem isn't keeping them running — it's knowing what they actually did while you were asleep.",
            image: "https://bydhruvil.in/images/losing-money-on-agents-banner.jpg",
            datePublished: "2026-08-25T12:00:00.000Z",
            dateModified: "2026-08-25T12:00:00.000Z",
            author: {
              "@id": "https://bydhruvil.in/#person",
            },
            publisher: {
              "@id": "https://bydhruvil.in/#person",
            },
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

          {/* Page Container */}
          <section className="relative border-x border-edge screen-line-before screen-line-after">
            <Crosshairs top={true} bottom={true} />

            {/* Header / Meta */}
            <header className="screen-line-after px-4 py-6 sm:px-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase bg-muted/60 border border-edge px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <DollarSign className="h-3 w-3 text-emerald-500" /> Agent Engineering • Observability • 6 min read
                </span>
                <Link
                  href="/blog"
                  className="border border-border px-3 py-1 rounded-xl font-mono text-xs font-medium cursor-pointer group inline-flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" /> Back to Blog
                </Link>
              </div>

              <div className="space-y-3">
                <h1 className="font-semibold tracking-tight text-foreground text-2xl sm:text-3xl leading-tight">
                  you&apos;re losing money on agents
                </h1>
                <p className="text-sm font-mono text-muted-foreground">
                  AI is shifting from clever text assistants to full-time digital employees working in shifts. The real engineering problem isn&apos;t keeping them running — it&apos;s knowing what they actually did while you were asleep.
                </p>
                <div className="pt-1 text-xs font-mono text-neutral-500 flex items-center gap-2">
                  <span>By Dhruvil Mistry</span>
                  <span>•</span>
                  <span>August 25, 2026</span>
                </div>
              </div>
            </header>

            <div className="p-4 sm:p-6 space-y-8">
              {/* Cover Image banner (3:2 aspect ratio) */}
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-edge bg-muted shadow-lg shadow-black/[0.03]">
                <Image
                  src="/images/losing-money-on-agents-banner.jpg"
                  alt="you're losing money on agents"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Introduction Quote */}
              <div className="border-l-2 border-emerald-500 pl-4 py-2 italic text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed bg-emerald-500/5 rounded-r-lg">
                &quot;The next multi-billion-dollar tooling layer isn&apos;t going to be a &apos;smarter&apos; agent. It&apos;s going to be the infrastructure that lets us understand, evaluate, and guide the agents we already have.&quot;
              </div>

              {/* Article Content */}
              <div className="space-y-8 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                {/* Section 01: The Shift to Shifts */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[01]</span> the shift to shifts
                  </h2>
                  <p>We used to talk to AI.</p>
                  <p>
                    You typed a prompt, watched tokens stream by, and hoped for a clean copy-paste of code or text. It was a simple, single-turn transaction.
                  </p>
                  <p className="font-semibold text-foreground">
                    Now, we’re hiring them.
                  </p>
                  <p>
                    AI is shifting from clever text assistants to full-time digital employees that can run for hours, days, or weeks across multiple sandboxes and context windows. They work in shifts.
                  </p>
                  <div className="p-4 border border-edge rounded-xl bg-card/60 space-y-2 text-xs sm:text-sm">
                    <p className="font-semibold text-foreground">Addy Osmani frames this transition cleanly:</p>
                    <p className="italic text-muted-foreground">
                      &quot;Imagine a software project staffed by engineers working in shifts, where each new engineer arrives with no memory of what happened on the previous shift.&quot;
                    </p>
                  </div>
                  <p>
                    Without an explicit infrastructure to preserve memory across those shifts, every handoff becomes a disaster.
                  </p>
                  <p>
                    But keeping them running is no longer the hardest part.
                  </p>
                  <p className="font-semibold text-foreground">
                    The real engineering problem is knowing what they actually did while you were asleep.
                  </p>
                </div>

                {/* Section 02: The Harness is the House */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[02]</span> the harness is the house
                  </h2>
                  <p>The model is just the engine. The harness is the chassis.</p>
                  <p>
                    If you just drop a frontier LLM into a naked <code className="font-mono bg-muted px-1.5 py-0.5 rounded text-xs">while true</code> loop, it fails.
                  </p>
                  <p>
                    In early runs of Anthropic’s long-horizon coding agents, the model would hit &quot;context anxiety.&quot; As the context window filled, the agent would panic, wrap up its work prematurely, and declare &quot;task complete&quot; on a broken, half-implemented codebase.
                  </p>
                  <p>
                    The fix wasn’t a bigger model. It was structural telemetry.
                  </p>
                  <p>
                    Anthropic solved this by decoupling the <strong>&quot;brain&quot;</strong> (the model) from the <strong>&quot;hands&quot;</strong> (the sandboxes and execution tools) and the <strong>&quot;session&quot;</strong> (the append-only event log).
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
                    <div className="p-3 border border-edge rounded-lg bg-card/40">
                      <div className="font-mono text-xs font-semibold text-purple-400 uppercase mb-1 flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5" /> The Brain
                      </div>
                      <p className="text-xs text-muted-foreground">The model reasoning engine, kept stateless and focused.</p>
                    </div>
                    <div className="p-3 border border-edge rounded-lg bg-card/40">
                      <div className="font-mono text-xs font-semibold text-blue-400 uppercase mb-1 flex items-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5" /> The Hands
                      </div>
                      <p className="text-xs text-muted-foreground">Ephemeral sandbox containers treated as cattle, not pets.</p>
                    </div>
                    <div className="p-3 border border-edge rounded-lg bg-card/40">
                      <div className="font-mono text-xs font-semibold text-emerald-400 uppercase mb-1 flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5" /> The Session
                      </div>
                      <p className="text-xs text-muted-foreground">Append-only durable event log that survives sandbox reboots.</p>
                    </div>
                  </div>

                  <p>
                    They made sandboxes cattle, not pets. If a sandbox container crashes, the stateless harness catches it as a tool error, pulls the event log from durable storage, and spins up a fresh sandbox without losing the session’s state.
                  </p>
                  <p>
                    When you decouple them, performance jumps: Anthropic’s p50 time-to-first-token dropped by <strong>60%</strong>, and p95 plummeted by over <strong>90%</strong>. The brain starts reasoning before the physical container even finishes booting.
                  </p>
                  <p className="italic border-l-2 border-edge pl-3 text-neutral-500">
                    The model itself might be amnesiac, but your filesystem isn’t.
                  </p>
                </div>

                {/* Section 03: The Silent Failure of the Final Line */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[03]</span> the silent failure of the final line
                  </h2>
                  <p>Traditional software is deterministic: same inputs, same outputs.</p>
                  <p>If a unit test passes, the code works.</p>
                  <p>
                    But an agent can produce the correct final output through a completely broken, hallucinated, or inefficient process. Google’s Hugo Selbie calls this the <strong>&quot;silent failure&quot;</strong>.
                  </p>
                  <div className="p-4 border border-edge rounded-xl bg-amber-500/5 border-amber-500/30 text-xs sm:text-sm space-y-2">
                    <div className="font-semibold text-foreground flex items-center gap-1.5 text-amber-500">
                      <AlertTriangle className="h-4 w-4" /> The Phantom Success Trap
                    </div>
                    <p className="text-muted-foreground">
                      An agent tasked with running an inventory report pulls the exact right numbers, but references last year’s cached spreadsheet by mistake. The final output looks perfect. The CFO is happy. But the execution is a ticking time bomb.
                    </p>
                  </div>
                  <p>
                    This is why final outputs don’t tell you anything anymore. You have to evaluate the <strong>trajectory</strong> — the exact sequence of tool calls, reasoning steps, retries, and context states that led to the result.
                  </p>
                  <p>
                    When agents fail, they fail in weird, highly specific ways. Microsoft’s AgentRx team annotated 115 failed agent runs and mapped a concrete nine-category failure taxonomy, finding agents failing from:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-muted-foreground font-mono text-xs sm:text-sm pl-2">
                    <li><strong className="text-foreground">Plan Adherence Failure:</strong> Ignoring their own formulated steps midway through execution.</li>
                    <li><strong className="text-foreground">Invention of New Information:</strong> Flat-out hallucinations injected into real tool parameters.</li>
                    <li><strong className="text-foreground">Invalid Tool Invocations:</strong> Repeatedly firing schema-violating or unvalidated calls.</li>
                  </ul>
                  <p className="font-semibold text-foreground">
                    If you aren’t tracing every step, you’re flying blind.
                  </p>
                </div>

                {/* Section 04: The Coordination Bottleneck */}
                <div className="space-y-4 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[04]</span> the coordination bottleneck
                  </h2>
                  <p>If one agent is good, are sixteen agents better?</p>
                  <p className="font-semibold text-foreground">Usually, no. They just step on each other’s toes.</p>
                  <p>
                    When Nicholas Carlini at Anthropic tasked 16 parallel Claudes with writing a Rust-based C compiler from scratch, they hit the parallel wall.
                  </p>
                  <p>
                    When the agents tried to compile the giant monolithic Linux kernel, they got stuck.
                  </p>
                  <p>
                    Every agent would find the exact same bug, fix it in their own container, pull from upstream, and overwrite each other’s changes. Having 16 agents running didn’t help because each was stuck solving the same task.
                  </p>
                  <p>
                    They had to build a custom compiler oracle using GCC just to let the agents compare and isolate separate files to work on in parallel.
                  </p>
                  <p>
                    Cursor hit the same wall. Their first attempts at running multiple agents used simple file locks. The result? The agents became risk-averse, endlessly churning rather than committing.
                  </p>
                  
                  <div className="p-4 border border-edge rounded-xl bg-card/60 space-y-3">
                    <div className="text-xs font-mono font-semibold text-foreground uppercase">
                      Cursor&apos;s Concurrency Solution: Optimistic Hierarchical Fleets
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-xs">
                      <div className="p-2.5 rounded-lg border border-edge bg-muted/40">
                        <span className="font-mono font-semibold text-sky-400">1. Planners</span>
                        <p className="text-muted-foreground mt-1">Emit isolated, scoped tasks</p>
                      </div>
                      <div className="p-2.5 rounded-lg border border-edge bg-muted/40">
                        <span className="font-mono font-semibold text-emerald-400">2. Workers</span>
                        <p className="text-muted-foreground mt-1">Execute with zero big-picture cognitive overhead</p>
                      </div>
                      <div className="p-2.5 rounded-lg border border-edge bg-muted/40">
                        <span className="font-mono font-semibold text-amber-400">3. Judges</span>
                        <p className="text-muted-foreground mt-1">Decide when an iteration is truly done</p>
                      </div>
                    </div>
                  </div>

                  <p className="italic border-l-2 border-edge pl-3 text-neutral-500">
                    Left to themselves, agents are terrible coordinators. More agents usually just means higher coordination overhead.
                  </p>
                </div>

                {/* Section 05: Quality-Adjusted Cost and Role Matching */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[05]</span> quality-adjusted cost and role matching
                  </h2>
                  <p>Let’s talk about the bill.</p>
                  <p>Running agents overnight is not cheap.</p>
                  <div className="p-4 border border-edge rounded-xl bg-card/60 space-y-2 text-xs sm:text-sm">
                    <p>
                      Carlini’s compiler experiment consumed <strong>2 billion input tokens</strong> and <strong>140 million output tokens</strong>, running up a bill of <strong>$20,000</strong>.
                    </p>
                    <p className="text-muted-foreground italic border-t border-edge/60 pt-2">
                      Addy Osmani warns: &quot;Without budgets, circuit breakers, and a hard cap on tool spend, an agent can quietly burn through a week’s API budget in an afternoon.&quot;
                    </p>
                  </div>
                  <p>
                    This is why you can’t just throw your largest, most expensive model at every problem. You need <strong>role matching</strong>.
                  </p>
                  <p>
                    Cursor discovered in production that different models excel in different roles. A GPT model actually outperformed Opus for extended autonomous work because Opus had a tendency to take lazy shortcuts or stop early.
                  </p>
                  <p>
                    If you’re paying top-tier pricing for a high-reasoning model to do a simple regex find-and-replace, you are burning cash.
                  </p>
                  <p className="font-semibold text-foreground">
                    You need to measure quality-adjusted cost: matching the cheapest model that can reliably hit the success criteria for that specific sub-task.
                  </p>
                </div>

                {/* Section 06: The Observe-Evaluate-Optimize Loop */}
                <div className="space-y-4 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[06]</span> the observe-evaluate-optimize loop
                  </h2>
                  <p>
                    Every major cloud player and open-source project is rushing to build this telemetry stack, but they’re looking at it from different angles.
                  </p>

                  <div className="space-y-2.5">
                    <div className="p-3.5 border border-edge rounded-xl bg-card/40 text-xs sm:text-sm space-y-1">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span> Google Agent Platform
                      </div>
                      <p className="text-muted-foreground">
                        GA’d evaluations that integrate their Agent SDK directly with DeepMind’s &quot;adaptive rubrics.&quot; It uses a user simulator to play out multi-turn conversations and online monitors that grade live production traffic.
                      </p>
                    </div>

                    <div className="p-3.5 border border-edge rounded-xl bg-card/40 text-xs sm:text-sm space-y-1">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-500"></span> Microsoft Foundry
                      </div>
                      <p className="text-muted-foreground">
                        Attacking the loop with their Agent Optimizer and &quot;intelligent trace sampling.&quot; It reads live production traces, converts them into offline test datasets, and automatically suggests prompt adjustments with side-by-side diffs.
                      </p>
                    </div>

                    <div className="p-3.5 border border-edge rounded-xl bg-card/40 text-xs sm:text-sm space-y-1">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-500"></span> Anthropic Tooling
                      </div>
                      <p className="text-muted-foreground">
                        Focuses heavily on structural developer tooling: git-backed &quot;test ratchets&quot; inside prompts to prevent coding agents from deleting failing tests to make them pass, and context resets to clear memory limits.
                      </p>
                    </div>

                    <div className="p-3.5 border border-edge rounded-xl bg-card/40 text-xs sm:text-sm space-y-1">
                      <div className="font-semibold text-foreground flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span> Open-Source Ecosystem
                      </div>
                      <p className="text-muted-foreground">
                        Langfuse, LangSmith, Phoenix (Arize), and OpenTelemetry standardizing the wires. OpenTelemetry has become the common trace language underneath, spanning custom code and frameworks in one unified view.
                      </p>
                    </div>
                  </div>

                  <p>
                    They all agree on the golden rule of agent engineering: <strong>never let an agent grade its own work.</strong> Models are inherently lenient on themselves.
                  </p>
                  <p>
                    Where they disagree is where the state belongs: Google wants cloud-managed Memory Banks and Sessions; Anthropic wants to decouple the session log entirely; open-source developers want self-hosted, lightweight trace containers.
                  </p>
                </div>

                {/* Section 07: We Are Building Forge */}
                <div className="space-y-4 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[07]</span> we are building forge
                  </h2>
                  <p>This is the exact wall I hit while building Orbit.</p>
                  <p>
                    I knew Orbit was running, but I couldn’t tell why it decided to call a specific partner API, why it spent 50,000 tokens looping on a simple string formatting error, or whether a prompt tweak actually improved things across 100 historical runs.
                  </p>
                  <p className="font-semibold text-foreground">
                    So, I started building Forge.
                  </p>

                  {/* Forge Project Card */}
                  <div className="p-5 border border-emerald-500/40 rounded-2xl bg-gradient-to-b from-emerald-500/10 via-card/80 to-card shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-emerald-400" />
                        <span className="font-semibold text-foreground text-base">Forge</span>
                        <span className="text-[10px] font-mono uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                          Open Source
                        </span>
                      </div>
                      <a
                        href="https://github.com/forge-open/forge"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 border border-emerald-500/30 px-2.5 py-1 rounded-lg hover:bg-emerald-500/10 transition-colors"
                      >
                        GitHub <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                      An open-source telemetry and evaluation engine designed specifically to help developers understand what their AI coding agents did, what it cost, what worked, and what to improve.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 font-mono text-xs text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span> Protocol-level trajectory capture
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span> Critical failure step isolation
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span> Quality-adjusted token cost metrics
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-emerald-400">✓</span> Deterministic tests + LLM judges
                      </div>
                    </div>
                  </div>

                  <p>
                    It’s not another agent framework. It doesn’t write code for you.
                  </p>
                  <p>
                    It sits at the protocol layer. It captures the trajectory, normalizes your agent traces, and isolates the exact &quot;critical failure step&quot; where a long-running execution became unrecoverable. It calculates your quality-adjusted token cost per run and lets you run deterministic unit tests alongside LLM-as-a-judge rubrics.
                  </p>
                  <p className="font-semibold text-foreground">
                    Because if you can’t measure it, you can’t optimize it.
                  </p>
                </div>

                {/* Section 08: The Next Unit of Software */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[08]</span> the next unit of software
                  </h2>
                  <p>
                    We are entering a world where agents, not classes or APIs, are the new unit of software development.
                  </p>
                  <p>
                    You won’t write code; you will write specs that survive contact with autonomous executors.
                  </p>
                  <p>
                    But when your codebase is written, reviewed, and debugged by independent, parallel brains, your standard DevOps stack of log files and exception catchers breaks down.
                  </p>
                  <p>
                    The next multi-billion-dollar tooling layer isn’t going to be a &quot;smarter&quot; agent.
                  </p>
                  <p className="font-semibold text-foreground">
                    It’s going to be the infrastructure that lets us understand, evaluate, and guide the agents we already have.
                  </p>
                </div>

                {/* Section 09: The Dashboard, Not the Gas Pedal */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[09]</span> the dashboard, not the gas pedal
                  </h2>
                  <p className="text-base sm:text-lg font-medium text-foreground">
                    We don’t need a heavier foot on the gas.
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-foreground font-mono text-emerald-400">
                    We need a better dashboard.
                  </p>
                  <p className="italic text-neutral-500 pt-1">
                    The dashboard, not the gas pedal.
                  </p>
                </div>

                {/* Newsletter / Publication Note */}
                <div className="border-t border-edge pt-6 text-xs font-mono text-muted-foreground space-y-2">
                  <p>
                    <strong>Hidden Layer</strong> is a reader-supported publication. To receive new posts and support my work, follow along and check back often.
                  </p>
                </div>
              </div>

              {/* Navigation Back */}
              <div className="border-t border-edge pt-6 flex items-center justify-between">
                <Link
                  href="/blog"
                  className="font-mono text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="h-3 w-3" /> All Articles
                </Link>
                <Link
                  href="/blog/gpt-live"
                  className="font-mono text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
                >
                  Next: why GPT-Live feels different <ArrowRight className="h-3 w-3" />
                </Link>
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
      </main>
    </div>
  );
}
