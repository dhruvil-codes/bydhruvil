import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "From 50% Grades to OpenAI Hackathon | Dhruvil Mistry",
  description: "How I went from 50% grades and zero peers to shipping AI products and beating 30,000 applicants for the OpenAI hackathon.",
  openGraph: {
    title: "From 50% Grades to OpenAI Hackathon | Dhruvil Mistry",
    description: "How I went from 50% grades and zero peers to shipping AI products and beating 30,000 applicants for the OpenAI hackathon.",
    images: [
      {
        url: "/images/blog-banner.png",
        width: 1200,
        height: 675,
        alt: "Crowd of silhouettes with one cyan glowing person standing out in the center",
      },
    ],
  },
};

export default function BlogPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
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
                  href="/"
                  className="border border-border px-3 py-1 rounded-xl font-mono text-xs font-medium cursor-pointer group inline-flex items-center gap-1.5 hover:bg-muted hover:border-border/80 transition-all text-muted-foreground hover:text-foreground"
                >
                  <ArrowLeft className="h-3 w-3 transition-transform duration-200 group-hover:-translate-x-0.5" /> Back
                </Link>
              </div>

              <div className="space-y-3">
                <h1 className="font-semibold tracking-tight text-foreground text-2xl sm:text-3xl leading-tight">
                  From 50% grades and zero peers to shipping AI products and beating 30,000 applicants for the OpenAI hackathon.
                </h1>
                <p className="text-sm font-mono text-muted-foreground">
                  By Dhruvil Mistry • June 2026
                </p>
              </div>
            </header>

            <div className="p-4 sm:p-6 space-y-8">
              {/* Cover Image banner */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-edge bg-muted shadow-lg shadow-black/[0.03]">
                <Image
                  src="/images/blog-banner.png"
                  alt="Crowd of silhouettes with one cyan glowing person standing out in the center"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Introduction Quote */}
              <div className="border-l-2 border-primary pl-4 py-1 italic text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                "Here is how I did it."
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                
                {/* Section: the beginning */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[01]</span> the beginning
                  </h2>
                  <p>
                    I grew up in Mumbai. Since childhood, I was what you’d call a builder.
                  </p>
                  <p>
                    My uncle used to give me those mechanical kits where you assemble small cars piece by piece. I’d sit for hours making them, completely fascinated by how individual parts came together to create something that actually moved.
                  </p>
                  <p>
                    That fascination never left. I moved from mechanical kits to Lego blocks, then to remote control cars I’d disassemble just to tinker with the motors. I still do car photography and spot cars everywhere. It’s just part of who I am.
                  </p>
                  <p>
                    Engineering curiosity is what really stuck, though. That mindset started developing in 6th, 7th standard: building things, taking them apart, wondering how they worked.
                  </p>
                </div>

                {/* Section: the rock bottom moment */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[02]</span> the rock bottom moment
                  </h2>
                  <p>
                    In 8th and 9th standard, things went sideways. I was completely distracted by cricket, hobbies — everything except academics. I just couldn’t focus on studying.
                  </p>
                  <div className="my-4 border border-dashed border-edge rounded-xl p-4 bg-muted/20 flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <p className="text-xs font-mono text-muted-foreground">9TH GRADE FINAL SCORE</p>
                      <p className="text-2xl font-bold text-red-500">50%</p>
                    </div>
                    <div className="text-muted-foreground text-xl">➔</div>
                    <div className="space-y-1 text-right">
                      <p className="text-xs font-mono text-muted-foreground">SELF-TAUGHT RECOVERY</p>
                      <p className="text-2xl font-bold text-green-500">86%</p>
                    </div>
                  </div>
                  <p>
                    That’s the moment that changed everything. I looked at my report card and realized I didn’t even understand the fundamentals. So I did what any confused 14-year-old does: I started teaching myself. No tuition, no coaching. Just me, textbooks, and stubbornness.
                  </p>
                  <p>
                    By my final exams, I had climbed to 86%.
                  </p>
                </div>

                {/* Section: the trade-off */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[03]</span> the trade-off
                  </h2>
                  <p>
                    Then came 10th board exams. I was so focused on getting academics right that I literally gave up everything else for an entire year. No cricket, no real hobbies.
                  </p>
                  <p>
                    Result? <strong>81%</strong>.
                  </p>
                  <p>
                    Not what I expected. I thought I’d score 90+. But that taught me something important: you can’t get everything in life. Sometimes you do your best and it’s still not “perfect.” That’s okay.
                  </p>
                </div>

                {/* Section: the diploma decision */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[04]</span> the diploma decision
                  </h2>
                  <p>
                    With 81%, I knew I wasn’t getting into a top computer science college. CS typically needed 90–95%, and I wasn’t there. But I didn’t want to abandon tech completely.
                  </p>
                  <p>
                    I started looking for an option that would give me the fundamentals I was missing AND exposure to software. That’s when I found <strong>Diploma in Electronics and Telecommunication Engineering</strong> at Thakur Vocational Training.
                  </p>
                  <p>
                    Looking back, it was one of the best decisions I’ve ever made.
                  </p>
                </div>

                {/* Section: those years in college */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[05]</span> those years in college
                  </h2>
                  <p>
                    I didn’t just attend classes. I went all in.
                  </p>
                  <p>
                    Joined the technical community and became Secretary. Participated in national-level contests and global coding challenges. Won first prize in a model-making competition. Secured 3rd rank in my entire Electronics and Telecom department, going from 70–80% to consistently hitting 90+.
                  </p>
                  <p>
                    Those were genuinely some of the best years of my life.
                  </p>
                </div>

                {/* Section: degree's heartbreak */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[06]</span> degree’s heartbreak
                  </h2>
                  <p>
                    After diploma, I needed a degree. There was one college I really wanted: Thakur College itself. I was confident, prepared, thought I had it.
                  </p>
                  <p>
                    I missed it by 1%. One lousy percent. I was devastated. But I had learned something from 9th grade: you can’t get everything in life. So I took the next best option, Rajiv Gandhi Institute of Technology, same field.
                  </p>
                </div>

                {/* Section: tinkering with AI */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[07]</span> tinkering with AI
                  </h2>
                  <p>
                    While everyone was focused on regular engineering subjects, I was already deep in the AI rabbit hole.
                  </p>
                  <p>
                    I discovered the ChatGPT Playground and started asking it to write simple Python scripts, watching it hallucinate wildly. I was absolutely hooked: how does this thing work? How does it generate code? What’s happening under the hood?
                  </p>
                  <p>
                    So I started learning. The problem was, I didn’t have the fundamentals. I didn’t understand how computers worked at a deep level, so a lot of it went over my head. But I was too fascinated to stop.
                  </p>
                  <p>
                    I used to watch MKBHD, Arun Maini, Linus Tech Tips, Werktherapie. Tech was my thing, even if I couldn’t yet build anything impressive.
                  </p>
                </div>

                {/* Section: twitter/x the best place to be at */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[08]</span> twitter/x, the best place to be at
                  </h2>
                  <p>
                    During my degree, I noticed something disappointing: none of my peers were curious about how AI actually worked. They were focused on other fields, and I was alone in this interest.
                  </p>
                  
                  {/* Callout Quote */}
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-5 my-5 shadow-sm">
                    <p className="text-base font-medium text-foreground italic">
                      “You don’t need anyone’s permission to do something.”
                    </p>
                    <span className="text-xs font-mono text-muted-foreground block mt-2">— Someone on Twitter/X</span>
                  </div>

                  <p>
                    That one sentence changed everything.
                  </p>
                </div>

                {/* Section: bro started going to hackathons */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[09]</span> bro started going to hackathons
                  </h2>
                  <p>
                    I started participating in hackathons. Got selected into the world’s largest hackathon, Bolt.new’s, with a $1M+ prize pool. Made it to the semifinals and got knocked out.
                  </p>
                  <p>
                    But I found my community: people who were building, shipping, and curious about AI.
                  </p>
                  <p>
                    From there, I went all in. Participated in way too many hackathons, online and offline. Built a strong network on LinkedIn. Started posting my work on Twitter. Got a subject in AIML during my degree, finally the core knowledge I’d been missing.
                  </p>
                </div>

                {/* Section: this hackathon who made me think from startup pov */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[10]</span> the hackathon that changed it all
                  </h2>
                  <p>
                    Then came the <strong>OpenAI Hackathon</strong>. The one that genuinely changed things.
                  </p>
                  <p>
                    Out of 30,000–40,000 participants, only 1,000 were selected to build. I was one of them. And I built <strong>Minutz</strong>, an AI-powered meeting assistant Chrome extension.
                  </p>
                  <p>
                    Most meeting bots are intrusive. You join a Zoom call and suddenly there’s a bot recording everything — awkward, obvious, annoying. Minutz hides it. It captures audio from the browser tab (not a bot, invisible), chunks it into 10-minute segments, sends it to Whisper for transcription, then extracts key items and action items into a dashboard.
                  </p>
                  <p>
                    I built the entire thing (landing page, Chrome extension, dashboard, backend) in 7 days. The constraints made it better. Limited resources, mainly Codex and some free open-source models. That forced me to think deeper and ship faster.
                  </p>
                  <p>
                    I didn’t win. Only 5 winners out of 1,000. But I got connected with people actually shipping in the AI ecosystem, met people working at OpenAI’s level, and validated that I could build production-grade AI tools.
                  </p>
                </div>

                {/* Section: why i build what i build */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[11]</span> why I build what I build
                  </h2>
                  <p>
                    I see a lot of people using vision models to create flowers in their hands, or generating art mid-air. Those projects are cool. Zero offense.
                  </p>
                  <p>
                    But they’re not solving business problems.
                  </p>
                  <p>
                    What gets me going is building things that make someone’s life easier. Real use cases, real problems. That’s why I built Minutz. That’s why I’m continuing to build. I want to make an impact, not just make demos.
                  </p>
                </div>

                {/* Section: what’s next? */}
                <div className="space-y-3">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[12]</span> what’s next?
                  </h2>
                  <p>
                    Right now I’m finishing my portfolio website, actively exploring startup roles in the AI/LLM space, and building in public so others can learn from the journey.
                  </p>
                  <p>
                    I’m 21, in Mumbai, and just getting started.
                  </p>
                  <p>
                    If you’re 18, 19, 20 and feel behind: you’re not. The path is messy and nonlinear, full of 1-percent failures and 50% grades. But if you’re curious, building, and shipping, you’re already ahead.
                  </p>
                </div>

                {/* Section: let’s have a chat! */}
                <div className="space-y-4 pt-4 border-t border-edge mt-8">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg tracking-tight">
                    Let's have a chat!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    If you’re building in AI, working on hackathons, or want to chat about startups:
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href="https://x.com/bydhruvil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border px-4 py-2 rounded-xl font-mono text-xs font-medium cursor-pointer inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground transition-all hover:border-border/80"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="size-4 shrink-0 text-neutral-800 dark:text-white/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                      </svg>
                      Reach out on X
                    </a>
                    <a
                      href="https://linkedin.com/in/bydhruvil" // standard linkedin url mapping if not specific
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-border px-4 py-2 rounded-xl font-mono text-xs font-medium cursor-pointer inline-flex items-center justify-center gap-2 bg-background hover:bg-muted text-foreground transition-all hover:border-border/80"
                    >
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="size-4 shrink-0 text-neutral-800 dark:text-white/80" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.5 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                      </svg>
                      Connect on LinkedIn
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
        <FloatingDock />
      </main>
    </div>
  );
}
