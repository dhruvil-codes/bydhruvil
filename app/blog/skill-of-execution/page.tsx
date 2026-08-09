import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import { ArrowLeft, Cpu, ShieldAlert, GitCommit, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Why your best ideas die in your notes app (and how to fix it) | Dhruvil Mistry",
  description: "How your brain runs at 100% CPU utilization while your project stands completely still — and the operational toolkit to break the loop of overthinking.",
  alternates: {
    canonical: "https://bydhruvil.in/blog/skill-of-execution",
  },
  openGraph: {
    title: "Why your best ideas die in your notes app (and how to fix it) | Dhruvil Mistry",
    description: "How your brain runs at 100% CPU utilization while your project stands completely still.",
    url: "https://bydhruvil.in/blog/skill-of-execution",
    type: "article",
    publishedTime: "2026-08-09T12:00:00.000Z",
    authors: ["Dhruvil Mistry"],
    images: [
      {
        url: "/images/skill-of-execution-banner.jpg",
        width: 1200,
        height: 675,
        alt: "The Skill of Execution — Why your best ideas die in your notes app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why your best ideas die in your notes app (and how to fix it) | Dhruvil Mistry",
    description: "How your brain runs at 100% CPU utilization while your project stands completely still.",
    images: ["/images/skill-of-execution-banner.jpg"],
  },
};

export default function SkillOfExecutionBlogPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "https://bydhruvil.in/blog/skill-of-execution#article",
            "isPartOf": {
              "@id": "https://bydhruvil.in/#website"
            },
            "mainEntityOfPage": "https://bydhruvil.in/blog/skill-of-execution",
            "headline": "Why your best ideas die in your notes app",
            "description": "How your brain runs at 100% CPU utilization while your project stands completely still.",
            "image": "https://bydhruvil.in/images/skill-of-execution-banner.jpg",
            "datePublished": "2026-08-09T12:00:00.000Z",
            "dateModified": "2026-08-09T12:00:00.000Z",
            "author": {
              "@id": "https://bydhruvil.in/#person"
            },
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

          {/* Page Container */}
          <section className="relative border-x border-edge screen-line-before screen-line-after">
            <Crosshairs top={true} bottom={true} />
            
            {/* Header / Meta */}
            <header className="screen-line-after px-4 py-6 sm:px-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase bg-muted/60 border border-edge px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Zap className="h-3 w-3 text-red-500" /> Featured Article • Systems & Psychology • 6 min read
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
                  Why your best ideas die in your notes app
                </h1>
                <p className="text-sm font-mono text-muted-foreground">
                  how your brain runs at 100% CPU utilization while your project stands completely still
                </p>
                <div className="pt-1 text-xs font-mono text-neutral-500 flex items-center gap-2">
                  <span>By Dhruvil Mistry</span>
                  <span>•</span>
                  <span>August 9, 2026</span>
                </div>
              </div>
            </header>

            <div className="p-4 sm:p-6 space-y-8">
              {/* Cover Image banner */}
              <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden border border-edge bg-muted shadow-lg shadow-black/[0.03]">
                <Image
                  src="/images/skill-of-execution-banner.jpg"
                  alt="The Skill of Execution — Break the loop of overthinking & finally build what matters"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Introduction Quote */}
              <div className="border-l-2 border-red-500 pl-4 py-2 italic text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed bg-red-500/5 rounded-r-lg">
                &quot;You fool your brain into believing that planning is progress, and you get trapped in an infinite loop of preparation without a single line of execution.&quot;
              </div>

              {/* Article Content */}
              <div className="space-y-8 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                
                {/* Introduction Paragraphs */}
                <div className="space-y-4">
                  <p>
                    Think back to the last time you actually wanted to start something new.
                  </p>
                  <p>
                    Maybe it was that side project. That SaaS idea you sketched on a napkin. That Medium draft. That application. That morning routine you swore you&apos;d stick to. Or that fresh codebase you wanted to spin up.
                  </p>
                  <p>
                    You sat down, opened a fresh document, and you began to prepare.
                  </p>
                  <p>
                    You built the nodes. You mapped out the approach. You detailed the exact steps you would take, the milestones, the checkpoints, the potential stack, the database structures, the marketing plan. You collected a thousand resources from the internet, bookmarking every guide and video. You felt incredibly organized.
                  </p>
                  <p className="font-medium text-foreground">
                    But then, you kept preparing.
                  </p>
                  <p>
                    You spent the entire evening refining the roadmap instead of building the thing. You told yourself you were doing &quot;due diligence.&quot; You wrote out the entire plan of action for Day One.
                  </p>
                  <p>
                    And then Day One came. And went.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6 font-mono text-xs">
                    <div className="border border-edge bg-muted/40 rounded-xl p-3 text-center">
                      <span className="text-red-500 block text-base font-bold">0</span>
                      <span className="text-neutral-400">Lines Coded</span>
                    </div>
                    <div className="border border-edge bg-muted/40 rounded-xl p-3 text-center">
                      <span className="text-red-500 block text-base font-bold">0</span>
                      <span className="text-neutral-400">Words Written</span>
                    </div>
                    <div className="border border-edge bg-muted/40 rounded-xl p-3 text-center">
                      <span className="text-red-500 block text-base font-bold">0</span>
                      <span className="text-neutral-400">Apps Deployed</span>
                    </div>
                    <div className="border border-edge bg-muted/40 rounded-xl p-3 text-center">
                      <span className="text-red-500 block text-base font-bold">100%</span>
                      <span className="text-neutral-400">CPU Overhead</span>
                    </div>
                  </div>
                  <p>
                    You looked at your screen and realized that despite your brain running at 100% CPU all day, your tangible output was exactly zero.
                  </p>
                  <p>
                    So you made a deal with yourself: <em>I&apos;ll start tomorrow. I just need to research this one last thing.</em>
                  </p>
                  <p>
                    But tomorrow looks exactly like today. You fool your brain into believing that planning is progress, and you get trapped in an infinite loop of preparation without a single line of execution.
                  </p>
                </div>

                {/* Section 01 */}
                <div className="space-y-4 pt-4 border-t border-edge">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[01]</span> the paralysis of the ambitious
                  </h2>
                  <p>
                    This is the central paradox of ambitious, highly analytical people.
                  </p>
                  <p>
                    We think our problem is procrastination, but it isn&apos;t. Procrastination is lazy avoidance—putting off your project to go watch movies or clean your room.
                  </p>
                  <p>
                    What you are experiencing is much more sophisticated. It is a psychological state known as <strong>Analysis Paralysis</strong>, formally operationalized in psychological literature as the <strong>Indecision-Inaction Phenomenon (IIP)</strong>.
                  </p>
                  <p>
                    When you are in this state, you aren&apos;t being lazy. You are actively, intensely engaged with the problem. You are drawing diagrams, running cost-benefit analyses, and evaluating alternatives. You are working incredibly hard.
                  </p>
                  <div className="my-4 p-4 rounded-xl border border-red-500/20 bg-red-500/5 text-sm space-y-2">
                    <div className="flex items-center gap-2 text-red-500 font-semibold font-mono text-xs">
                      <ShieldAlert className="h-4 w-4" /> THE CLOSED-CIRCUIT LOOP
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Your mental wheels are spinning at redline, but they aren&apos;t touching the road. Because you want the choice to be perfect, you keep gathering data. But in a complex world, more data doesn&apos;t bring certainty; it brings cognitive overload.
                    </p>
                  </div>
                  <p>
                    Your brain&apos;s processing capacity gets entirely overwhelmed, and the default response of an overloaded system is to freeze.
                  </p>
                  <p>
                    You remain stuck in the analysis phase, mistaking the exhaustion of overthinking for the satisfaction of real work.
                  </p>
                </div>

                {/* Section 02 */}
                <div className="space-y-4 pt-4 border-t border-edge">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[02]</span> the thoroughness illusion
                  </h2>
                  <p>
                    Why do so many of us fall into this loop without even realizing we are in it?
                  </p>
                  <p>
                    Because we hide in our thoroughness.
                  </p>
                  <p>
                    In school and in our careers, we are conditioned to believe that more research equals less risk. We are taught that the &quot;smart&quot; way to build is to plan for every contingency.
                  </p>
                  <p>
                    So, when we face the terrifying blank page of a new venture, our survival instinct is to seek shelter in a &quot;fortress of analysis.&quot; We tell ourselves:
                  </p>
                  <ul className="space-y-2.5 font-mono text-xs sm:text-sm pl-2">
                    <li className="flex items-start gap-2.5 border border-edge bg-muted/30 rounded-lg p-3">
                      <span className="text-red-500 font-bold">›</span>
                      <span>&quot;I&apos;m not stalling; I&apos;m just evaluating frameworks.&quot;</span>
                    </li>
                    <li className="flex items-start gap-2.5 border border-edge bg-muted/30 rounded-lg p-3">
                      <span className="text-red-500 font-bold">›</span>
                      <span>&quot;I&apos;m not avoiding the launch; I&apos;m just optimizing the onboarding flow.&quot;</span>
                    </li>
                    <li className="flex items-start gap-2.5 border border-edge bg-muted/30 rounded-lg p-3">
                      <span className="text-red-500 font-bold">›</span>
                      <span>&quot;I&apos;m not scared of being judged; I&apos;m just making sure my notes are organized.&quot;</span>
                    </li>
                  </ul>
                  <p>
                    This is the <strong>Thoroughness Illusion</strong>. It is a highly respectable, socially acceptable mask for the fear of failure.
                  </p>
                  <p>
                    As long as your idea remains in the notes app, it is perfect. It has no bugs. It has no negative feedback. It cannot fail. The second you write the first line of code, publish the first paragraph, or take the first physical step, your idea has to survive contact with reality.
                  </p>
                  <p>
                    To avoid that vulnerability, we choose to keep preparing. We collect more data, buy more books, and create more milestones. We treat looking for information as a way to avoid the hard judgment calls of taking a risk.
                  </p>
                  <p className="font-semibold text-foreground">
                    We are literally using our intelligence to build the cage that traps us.
                  </p>
                </div>

                {/* Section 03 */}
                <div className="space-y-4 pt-4 border-t border-edge">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[03]</span> the trap of the perfect pipe
                  </h2>
                  <p>
                    There is a powerful structural engineering concept that serves as a perfect metaphor for this trap.
                  </p>
                  <p>
                    In advanced structural optimization, engineers use machine learning algorithms to design things like steel-and-concrete building columns. An algorithm can easily crunch thousands of variables and output a mathematically &quot;perfect&quot; column diameter—say, exactly 380 millimeters.
                  </p>
                  <p>
                    It satisfies every theoretical constraint. It is beautiful.
                  </p>
                  <p>
                    But there&apos;s a catch: <strong>no standard industrial pipe on earth is manufactured at 380 millimeters.</strong>
                  </p>
                  <p>
                    The theoretically perfect solution is physically unconstructable in the real world. To actually build the structure, the engineer has to abandon the mathematical ideal, accept a standard, slightly less &quot;optimal&quot; pipe size from a local catalog, and get to work.
                  </p>
                  <p>
                    When you spend weeks comparing frameworks, models, or marketing channels in your head, you are looking for a 380mm pipe. You are looking for a flawless, risk-free theoretical path that does not exist in reality.
                  </p>
                  <p>
                    And while you search for the perfect option, you suffer from what behavioral economists call <strong>FOBO (Fear of Better Options)</strong>. You refuse to commit to Option A because Option B might be slightly better, completely forgetting that an imperfect decision executed today will always beat a perfect decision stuck in your head.
                  </p>
                  <p className="font-medium text-foreground">
                    In a world of infinite options, the &quot;best&quot; choice is almost always the one you actually start.
                  </p>
                </div>

                {/* Section 04 */}
                <div className="space-y-4 pt-4 border-t border-edge">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[04]</span> debugging the loop
                  </h2>
                  <p>
                    So, how do we break the loop and actually start shipping?
                  </p>
                  <p>
                    You don&apos;t cure overthinking by trying to think your way out of it. You cure it by removing freedom and adding hard, systemic constraints. Here is your operational toolkit for Day One:
                  </p>

                  <div className="space-y-6 my-6">
                    {/* Tool 1 */}
                    <div className="border border-edge bg-muted/20 rounded-xl p-5 space-y-2">
                      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500 text-xs">1</span>
                        Identify Reversible &quot;Two-Way&quot; Doors
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Jeff Bezos famously divides decisions into two categories: Type 1 (one-way doors) and Type 2 (two-way doors). <strong>Type 1 Decisions</strong> are irreversible and high-stakes (e.g., signing a lease, choosing your core company name). They deserve slow, deep analysis. <strong>Type 2 Decisions</strong> are highly reversible (e.g., choosing a landing page color, picking a notes app, choosing a coding library).
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                        About 90% of our daily roadblocks are Type 2 decisions. If you walk through a two-way door and don&apos;t like what&apos;s on the other side, you can simply walk back. Decide fast with 70% of the information you wish you had, and adjust on the fly.
                      </p>
                    </div>

                    {/* Tool 2 */}
                    <div className="border border-edge bg-muted/20 rounded-xl p-5 space-y-2">
                      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500 text-xs">2</span>
                        Become a &quot;Satisficer&quot;
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        There are two types of decision-makers in psychology: <strong>Maximizers</strong> (who need the absolute best) and <strong>Satisficers</strong> (who look for &quot;good enough&quot; that meets their criteria). Maximizers spend massive amounts of energy comparing options, yet suffer the highest rates of regret and paralysis. Satisficers define their baseline requirements upfront (e.g., <em>&quot;Must cost under $20, must support Markdown, must be ready today&quot;</em>). The very second they find an option that clears that bar, they lock it in and stop looking.
                      </p>
                    </div>

                    {/* Tool 3 */}
                    <div className="border border-edge bg-muted/20 rounded-xl p-5 space-y-2">
                      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500 text-xs">3</span>
                        Enforce &quot;Decision Deadlines&quot;
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Never set a launch deadline without setting separate, non-negotiable decision deadlines. Tell yourself: <em>&quot;I have until Thursday at 5:00 PM to evaluate these three options. At 5:01, I am picking one by coin flip if I have to, and moving to execution.&quot;</em> A deadline creates the artificial scarcity of time that forces your brain to stop spectating and start acting.
                      </p>
                    </div>

                    {/* Tool 4 */}
                    <div className="border border-edge bg-muted/20 rounded-xl p-5 space-y-2">
                      <div className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-500 text-xs">4</span>
                        Build a Safe-to-Fail Action Loop
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Action generates real-world data that speculation never can. If you are stuck debating between two approaches, time-box yourself to one hour of ugly, messy prototyping. Run the script. Write the terrible first draft. Let the compiler break. The real-world feedback of a single runtime error or a poorly written paragraph contains infinitely more actionable intelligence than three weeks of pure, abstract theory.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 05 */}
                <div className="space-y-4 pt-4 border-t border-edge">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[05]</span> the bottom line
                  </h2>
                  <p className="text-base sm:text-lg font-medium text-foreground">
                    The notes app is a graveyard of brilliant ideas that were studied to death.
                  </p>
                  <p>
                    If you are waiting for a sign that you are 100% ready, you will spend your entire life standing on one leg. The friction of starting is always psychological, never technical.
                  </p>
                  <p className="font-mono text-sm text-red-500 font-semibold">
                    Stop looking for the perfect 380mm pipe.
                  </p>
                  <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 font-mono text-xs sm:text-sm text-foreground space-y-2">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold">
                      <CheckCircle2 className="h-4 w-4" /> THE DAY-ONE RULE:
                    </div>
                    <p>
                      Pick an option that is good enough, set a timer, write a messy first page, compile a broken script, and start shipping.
                    </p>
                  </div>
                </div>

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
