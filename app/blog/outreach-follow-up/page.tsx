import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "You're Not Bad at Outreach. You're Bad at Follow-Up | Dhruvil Mistry",
  description: "I lost more opportunities to forgetting than to rejection. So I built Nudge to solve it — an AI agent for email follow-ups.",
  alternates: {
    canonical: "https://bydhruvil.in/blog/outreach-follow-up",
  },
  openGraph: {
    title: "You're Not Bad at Outreach. You're Bad at Follow-Up | Dhruvil Mistry",
    description: "I lost more opportunities to forgetting than to rejection. So I built Nudge to solve it.",
    url: "https://bydhruvil.in/blog/outreach-follow-up",
    type: "article",
    publishedTime: "2026-07-27T11:21:06.000Z",
    authors: ["Dhruvil Mistry"],
    images: [
      {
        url: "/images/outreach-follow-up-banner.jpg",
        width: 1200,
        height: 675,
        alt: "You're not bad at outreach. You're bad at follow-up.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "You're Not Bad at Outreach. You're Bad at Follow-Up | Dhruvil Mistry",
    description: "I lost more opportunities to forgetting than to rejection. So I built Nudge to solve it.",
    images: ["/images/outreach-follow-up-banner.jpg"],
  },
};

export default function OutreachFollowUpBlogPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "https://bydhruvil.in/blog/outreach-follow-up#article",
            "isPartOf": {
              "@id": "https://bydhruvil.in/#website"
            },
            "mainEntityOfPage": "https://bydhruvil.in/blog/outreach-follow-up",
            "headline": "You're not bad at outreach. You're bad at follow-up.",
            "description": "I lost more opportunities to forgetting than to rejection. So I built Nudge to solve it.",
            "image": "https://bydhruvil.in/images/outreach-follow-up-banner.jpg",
            "datePublished": "2026-07-27T11:21:06.000Z",
            "dateModified": "2026-07-27T11:21:06.000Z",
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
                <span className="text-[10px] font-mono tracking-wider text-muted-foreground uppercase bg-muted/60 border border-edge px-2 py-0.5 rounded-md">
                  Featured Article • 5 min read
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
                  You&apos;re not bad at outreach. You&apos;re bad at follow-up.
                </h1>
                <p className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                  <span>By Dhruvil Mistry • July 27, 2026</span>
                  <span>•</span>
                  <a
                    href="https://bydhruvil.substack.com/p/youre-not-bad-at-outreach-youre-bad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Substack <ExternalLink className="h-3 w-3 inline" />
                  </a>
                </p>
              </div>
            </header>

            <div className="p-4 sm:p-6 space-y-8">
              {/* Cover Image banner */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-edge bg-muted shadow-lg shadow-black/[0.03]">
                <Image
                  src="/images/outreach-follow-up-banner.jpg"
                  alt="You're not bad at outreach. You're bad at follow-up."
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Introduction Quote */}
              <div className="border-l-2 border-primary pl-4 py-1 italic text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                &quot;I lost more opportunities to forgetting than to rejection. So I built Nudge to solve it.&quot;
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                
                {/* Section 1 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[01]</span> the silent killer
                  </h2>
                  <p>
                    I&apos;ve sent hundreds of cold emails.
                  </p>
                  <p>
                    Job applications. Founder DMs. Partnership requests. Investor intros. People I genuinely wanted to know.
                  </p>
                  <p>
                    And then... I forgot.
                  </p>
                  <p>
                    Sometimes for a few days. Sometimes for weeks. By the time I remembered, the conversation already felt stale. Sending another email felt awkward. So I didn&apos;t.
                  </p>
                  <p>
                    That&apos;s how most opportunities die. Not with rejection. With silence.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[02]</span> it&apos;s not a writing problem
                  </h2>
                  <p>
                    Here&apos;s what I used to tell myself: &quot;Following up is easy. I&apos;ll just do it later.&quot;
                  </p>
                  <p>
                    Later never came.
                  </p>
                  <p>
                    Because the actual problem isn&apos;t writing the email. Writing a follow-up takes 2 minutes.
                  </p>
                  <p>
                    The problem is the 20 minutes before it. Opening Gmail. Scrolling through sent. Trying to remember: did they reply? did I already follow up once? is 5 days too soon? what should I even say now?
                  </p>
                  <p>
                    That&apos;s the part that kills you. The mental overhead of deciding who deserves another message.
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[03]</span> busy work that ai should own
                  </h2>
                  <p>
                    I started to notice a pattern.
                  </p>
                  <p>
                    Every week I&apos;d lose track of 3 or 4 conversations that mattered. Quietly. Without realizing it.
                  </p>
                  <p>
                    One week it was a founder I&apos;d emailed about Saral AI. Another week it was a recruiter who&apos;d said &quot;let&apos;s connect soon.&quot; Another week it was a hiring manager whose JD fit exactly what I was building toward.
                  </p>
                  <p>
                    All of them deserved a follow-up. None of them got one.
                  </p>
                  <p>
                    It felt like exactly the kind of boring, repetitive, context-heavy work that AI was built to remove.
                  </p>
                  <p>
                    So I built <strong>Nudge</strong>.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[04]</span> what nudge actually does
                  </h2>
                  <p>
                    Two commands. That&apos;s the whole setup.
                  </p>
                  
                  <div className="my-4 rounded-xl border border-edge bg-muted/50 p-4 font-mono text-xs text-foreground overflow-x-auto">
                    <div className="text-neutral-400 select-none"># Install & run Nudge agent</div>
                    <div className="text-emerald-400 font-semibold mt-1">pip install nudge-agent</div>
                    <div className="text-emerald-400 font-semibold mt-1">nudge</div>
                  </div>

                  <p>
                    First run asks for your Groq API key, opens Google Sign-In, done. No OAuth config. No Google Cloud project. No copying client IDs. Under a minute.
                  </p>
                  <p>
                    After that: Nudge signs into your Gmail, scans your sent emails, finds conversations that deserve a follow-up, reads the entire thread for context, and writes a draft that sounds like you.
                  </p>
                  <p>
                    Nothing gets sent automatically. Every draft goes through you first.
                  </p>
                  <p>
                    I wanted AI to remove the boring part, not the decision-making.
                  </p>
                </div>

                {/* Section 5 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[05]</span> the filtering problem nobody talks about
                  </h2>
                  <p>
                    The hardest part of building Nudge wasn&apos;t the drafting. It was the filtering.
                  </p>
                  <p>
                    Most conversations shouldn&apos;t get another email. Sending a follow-up to someone who already replied isn&apos;t a follow-up, it&apos;s noise. Following up on a 1-day-old email isn&apos;t persistence, it&apos;s annoying.
                  </p>
                  <p>
                    So Nudge skips conversations where they&apos;ve already replied, where the email is under 3 days old, or where you&apos;ve already followed up more than once.
                  </p>
                  <p>
                    That alone removes most of the clutter. What&apos;s left is the small set of conversations that are actually worth a nudge.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[06]</span> one keypress changes the tone
                  </h2>
                  <p>
                    Not every follow-up should sound the same.
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <strong>Simple check-in:</strong> &quot;Hey, just wanted to see if you had a chance to look at this.&quot;
                    </li>
                    <li>
                      <strong>Add value:</strong> Share something useful. Reopen the conversation with a reason.
                    </li>
                    <li>
                      <strong>Polite breakup email:</strong> &quot;No worries if this isn&apos;t the right time, I&apos;ll leave it here.&quot;
                    </li>
                  </ul>
                  <p>
                    Nudge lets you pick the tone with one keypress. The draft adjusts accordingly.
                  </p>
                </div>

                {/* Section 7 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[07]</span> everything stays local
                  </h2>
                  <p>
                    This matters to me.
                  </p>
                  <p>
                    Your config lives on your machine. Your history lives on your machine. Your drafts live on your machine.
                  </p>
                  <p>
                    Nothing gets sent to a server. Nothing gets stored somewhere I can&apos;t see.
                  </p>
                  <p>
                    I&apos;m sending cold emails about jobs, products I&apos;m building, conversations I care about. I&apos;m not handing that data to a third-party service.
                  </p>
                  <p>
                    Nudge is fully local by design.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[08]</span> the week i actually used it
                  </h2>
                  <p>
                    I&apos;ve been running Nudge on my own outreach for the past week.
                  </p>
                  <p>
                    The feeling is different.
                  </p>
                  <p>
                    I no longer open Gmail on Sunday morning dreading the scroll. I run one command. It tells me who&apos;s worth following up with. It writes the draft. I review it, tweak a line or two, approve it. Done.
                  </p>
                  <p>
                    I followed up with a founder I&apos;d emailed 9 days ago about a collab. He replied within the hour. That conversation had been sitting dead in my sent folder.
                  </p>
                  <p className="font-medium text-foreground">
                    One command changed that.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[09]</span> what&apos;s next
                  </h2>
                  <p>
                    This is v1. It&apos;s minimal. It does one thing well.
                  </p>
                  <p>
                    Currently I&apos;m building an MCP server so you can run Nudge directly from Claude Code, Cursor, or Codex.
                  </p>
                  <p>
                    Imagine typing: <em>&quot;Follow up with everyone who hasn&apos;t replied in the last 10 days.&quot;</em>
                  </p>
                  <p>
                    And your agent prepares every draft for you in one shot. That&apos;s where this is going.
                  </p>
                </div>

                {/* Section 10 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[10]</span> it&apos;s open source, try it
                  </h2>
                  <p>
                    Nudge is completely open source.
                  </p>
                  <p>
                    If you send emails for recruiting, sales, networking, fundraising, or job applications, this is for you.
                  </p>
                  <p>
                    The best features have come from scratching my own itch. I&apos;m sure there are plenty more worth scratching. If you try it and hit a rough edge, tell me.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[11]</span> if you&apos;re reading this
                  </h2>
                  <p>
                    Right now I&apos;m building Nudge and open for AI Engineer roles, if you&apos;re hiring or just want to connect with me. Just DM me, I reply fast ;)
                  </p>
                  <p>
                    I&apos;m 21, in Mumbai, and just getting started.
                  </p>
                  <p>
                    If you feel like you&apos;re bad at follow-up: you&apos;re not. You just don&apos;t have a system. The work isn&apos;t the writing, it&apos;s the remembering. Let something else do the remembering.
                  </p>
                  <p className="font-semibold text-foreground">
                    Go build.
                  </p>
                </div>

                {/* Substack Callout Box */}
                <div className="my-6 p-4 border border-edge rounded-xl bg-card/60 flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Original Post</p>
                    <p className="text-sm font-semibold text-foreground">Read and subscribe on Substack</p>
                  </div>
                  <a
                    href="https://bydhruvil.substack.com/p/youre-not-bad-at-outreach-youre-bad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border px-3 py-1.5 rounded-xl font-mono text-xs font-medium cursor-pointer inline-flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 text-primary transition-all shrink-0"
                  >
                    Open Substack <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Contact Footer */}
                <div className="space-y-4 pt-4 border-t border-edge mt-8">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg tracking-tight">
                    Let&apos;s connect!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    If you&apos;re building in AI, working on cold outreach systems, or want to discuss Nudge:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="https://x.com/bydhruvil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border px-4 py-2 rounded-xl font-mono text-xs font-medium cursor-pointer inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground transition-all hover:border-border/80"
                    >
                      Reach out on X
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dhruvilmistry16/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border px-4 py-2 rounded-xl font-mono text-xs font-medium cursor-pointer inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground transition-all hover:border-border/80"
                    >
                      Connect on LinkedIn
                    </a>
                    <a
                      href="https://bydhruvil.substack.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border px-4 py-2 rounded-xl font-mono text-xs font-medium cursor-pointer inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground transition-all hover:border-border/80"
                    >
                      Subscribe on Substack
                    </a>
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

        {/* Site Widgets */}
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999]">
          <MorphPanel />
        </div>
      </main>
    </div>
  );
}
