import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/sections/navbar";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import { Crosshairs } from "@/components/ui/crosshairs";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Local AI is Easy. You're Overthinking It | Dhruvil Mistry",
  description: "Moonshot AI launched Kimi K3 with 2.8T parameters for free. Learn why open weights are changing the game and how to set up your own local AI stack.",
  alternates: {
    canonical: "https://bydhruvil.in/blog/local-ai",
  },
  openGraph: {
    title: "Local AI is Easy. You're Overthinking It | Dhruvil Mistry",
    description: "Moonshot AI launched Kimi K3 with 2.8T parameters for free. Learn why open weights are changing the game and how to set up your own local AI stack.",
    url: "https://bydhruvil.in/blog/local-ai",
    type: "article",
    publishedTime: "2026-07-21T00:00:00.000Z",
    authors: ["Dhruvil Mistry"],
    images: [
      {
        url: "/images/local-ai-banner.png",
        width: 1200,
        height: 675,
        alt: "Local AI is Easy. You're Overthinking It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local AI is Easy. You're Overthinking It | Dhruvil Mistry",
    description: "Learn why open weights are changing the game and how to set up your own local AI stack.",
    images: ["/images/local-ai-banner.png"],
  },
};

export default function LocalAIBlogPage() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "@id": "https://bydhruvil.in/blog/local-ai#article",
            "isPartOf": {
              "@id": "https://bydhruvil.in/#website"
            },
            "mainEntityOfPage": "https://bydhruvil.in/blog/local-ai",
            "headline": "Local AI is Easy. You're Overthinking It.",
            "description": "Moonshot AI launched Kimi K3 with 2.8T parameters for free. Learn why open weights are changing the game and how to set up your own local AI stack.",
            "image": "https://bydhruvil.in/images/local-ai-banner.png",
            "datePublished": "2026-07-21T00:00:00.000Z",
            "dateModified": "2026-07-21T00:00:00.000Z",
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
                  Technical Guide • 6 min read
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
                  Local AI is Easy. You&apos;re Overthinking It.
                </h1>
                <p className="text-sm font-mono text-muted-foreground">
                  By Dhruvil Mistry • July 2026
                </p>
              </div>
            </header>

            <div className="p-4 sm:p-6 space-y-8">
              {/* Cover Image banner */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-edge bg-muted shadow-lg shadow-black/[0.03]">
                <Image
                  src="/images/local-ai-banner.png"
                  alt="Laptop displaying Search with AI prompt bar with overlay hands"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Introduction Quote */}
              <div className="border-l-2 border-primary pl-4 py-1 italic text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                &quot;The Michelin-star recipe books are free now. You just have to be willing to cook.&quot;
              </div>

              {/* Article Content */}
              <div className="space-y-6 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                
                <p>
                  Three days ago, a Chinese startup called Moonshot AI launched Kimi K3 at the World Artificial Intelligence Conference in Shanghai. 
                  It has <strong>2.8 trillion parameters</strong>, making it the largest open-weight model ever built. It benchmarks neck-and-neck with proprietary models like GPT-5 and Claude Fable.
                </p>

                <p>
                  And they&apos;re giving the full model weights away, for <strong>FREE</strong>! 
                  Two weeks ago, the largest open-weight model in existence had 1 trillion parameters. Then Kimi K3 dropped and nearly tripled it overnight. 
                  This isn&apos;t a research paper. This isn&apos;t a demo. This is the most powerful AI model ever released to the public and you can download it, run it, and own it.
                </p>

                {/* Section 1 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[01]</span> what this actually means
                  </h2>
                  <p>
                    For the past two years, only a handful of companies knew how to build a truly powerful AI: OpenAI, Anthropic, and Google. That was basically it. 
                    If you wanted elite reasoning, coding, or generation, you paid what they asked, used what they served, and were grateful they let you in at all.
                  </p>
                  <p>
                    It felt permanent. Like this was just how AI worked. It wasn&apos;t.
                  </p>
                  <p>
                    Think of it this way: imagine only one or two restaurant chains in the world knew how to cook a decent meal. You wanted to eat? Go to them. Pay whatever they asked. Eat what they served. 
                    Then Michelin-star chefs published their exact recipe books on the internet. For free. Anyone can now cook a five-star meal in their own kitchen. That&apos;s what just happened.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[02]</span> and it&apos;s not just one model..
                  </h2>
                  <p>
                    Kimi K3 is the headline, but it&apos;s not alone. GLM-5.2 dropped a 744B parameter model that rivals the best proprietary systems on the market. 
                    Meta&apos;s pushing open source as the path to &quot;personal superintelligence.&quot; xAI&apos;s Grok Build is also now open sourced.
                  </p>
                  <p>
                    These aren&apos;t hobby projects. These are billion-dollar models given away. Now the question becomes: why is it even free when it&apos;s worth so much?
                  </p>
                </div>

                {/* Section 3 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[03]</span> why they&apos;re giving it away
                  </h2>
                  <p>
                    Simply because open source commoditizes the model layer. 
                    When your model is free, every developer in the world builds their tools, apps, and infrastructure on your ecosystem. You don&apos;t win by owning the intelligence; you win by owning the platform around it. It completely undercuts the closed-source giants.
                  </p>
                  <p>
                    OpenAI made GPT by taking learning from the &quot;Attention is all you need&quot; research paper published by Google. So eventually, the entire boom of AI arrived because of one research paper, followed by the rest of the advancements, all of which was effectively open source.
                  </p>
                </div>

                {/* Section 4 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[04]</span> three terms you need to know
                  </h2>
                  <p>
                    Before you do anything with this information, you need to understand three core concepts:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <strong>Open Source LLMs:</strong> An LLM is essentially a giant mathematical file containing billions of &quot;weights&quot; the model learned during training. When it&apos;s open, you can download those exact parameter files (usually in `.gguf` or `.safetensors` format) from Hugging Face, inspect them, and modify them. The master chef&apos;s recipe book, yours to keep.
                    </li>
                    <li>
                      <strong>Local AI:</strong> Running the model entirely on your own hardware. No data leaves your machine. No API calls. No servers pinged. 100% offline, 100% private. You&apos;re cooking in your own kitchen now ;)
                    </li>
                    <li>
                      <strong>Inference:</strong> Training is sending the chef to culinary school for three years. Inference is the chef actually cooking when you hand them an order. The AI isn&apos;t learning anything new; it&apos;s taking your prompt, doing massive matrix multiplication against its stored weights, and predicting the next most likely token. That&apos;s it.
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[05]</span> the mistake everyone makes while setting up local AI
                  </h2>
                  <p>
                    They download a massive model without checking if their hardware can run it. Then their computer freezes, generating two words per minute, and they give up. Don&apos;t do this.
                  </p>
                  <p>
                    There&apos;s a Python tool called <strong>whichllm</strong>. Run it before you download anything.
                  </p>
                  <pre className="bg-muted p-4 rounded-xl font-mono text-xs overflow-x-auto border border-edge">
                    pip install whichllm{"\n"}
                    whichllm
                  </pre>
                  <p>
                    It detects your GPU, CPU, and RAM, pulls live benchmark data, applies recency weighting (so a stale 2024 score doesn&apos;t outrank a smarter newer model), and gives you a ranked list showing the exact model, exact quantization format, and a real tokens-per-second estimate for your specific machine. Measure first. Download second.
                  </p>
                </div>

                {/* Section 6 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[06]</span> the actual stack to run it
                  </h2>
                  <p>
                    Two tools. That&apos;s all you need.
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <strong>Ollama</strong> is your backend engine. It loads the massive mathematical weights into your computer&apos;s memory and serves them locally. Pull the top model whichllm recommended. Remember, always start with the small model and see how your machine responds, so you can get the gist of which model runs smoothly and which doesn&apos;t.
                    </li>
                    <li>
                      <strong>Open WebUI</strong> is your interface. Running AI in a black terminal window is tedious. Open WebUI (via Docker or desktop app) gives you a ChatGPT-like experience that runs entirely offline, auto-connecting to Ollama in the background. The UI is very similar to any AI chat application (if you don&apos;t want to download Open WebUI, you can just use the Ollama App to chat with the model you downloaded).
                    </li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[07]</span> hardware reality for running models
                  </h2>
                  <p>
                    Local AI is bottlenecked by one thing: <strong>memory bandwidth</strong> — how fast your machine shuttles data between RAM and the processing chips. 
                    MacBooks and Mac Minis with M-series chips are the gold standard. Why? Unified memory. Standard PCs separate CPU RAM from GPU VRAM. Apple Silicon shares one massive pool. A 32GB Mac is effectively a 32GB graphics card for AI workloads. That&apos;s a superpower, though they are quite expensive now.
                  </p>
                  <p>
                    Nvidia RTX GPUs are the speed kings. 8GB to 24GB VRAM means the fastest token generation possible, but you&apos;re strictly limited by that VRAM cap.
                  </p>
                  <p>
                    CPU-only laptops are slow, but workable if you use <strong>quantization</strong> — compressing the model&apos;s 32-bit floats down to 4-bit integers. Smaller, slightly less precise, but it fits.
                  </p>
                </div>

                {/* Section 8 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[08]</span> no hardware? no problem.
                  </h2>
                  <p>
                    If you don&apos;t have a GPU, you can use cloud providers that host these open-weight models on their own GPU clusters and let you hit them via a simple API call (some for free, some for near-zero cost):
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <strong>Fireworks AI (Paid):</strong> What I personally used for Saral AI. Open-source models on AMD GPUs, custom inference optimization. Kimi K2.6 first-token delivery: 0.71 seconds. Fastest among all providers. Pay-per-token.
                    </li>
                    <li>
                      <strong>Together AI:</strong> 200+ open-weight models across text, image, audio, and embeddings. 400+ tokens per second. OpenAI-compatible API so your existing code migrates without a rewrite.
                    </li>
                    <li>
                      <strong>Cerebras:</strong> 1 million free tokens per day. Not a trial — permanent. Extremely fast (3,000 tokens per second). Hosts Qwen3-235B, Llama 4, and DeepSeek R1.
                    </li>
                    <li>
                      <strong>OpenRouter:</strong> One API key, 300+ models. Switch from Llama to Kimi to DeepSeek without touching your code.
                    </li>
                    <li>
                      <strong>NVIDIA NIM:</strong> 1,000 free credits on signup across 91 models with no credit card required.
                    </li>
                  </ul>
                  <p>
                    The workflow is simple: get the API key, paste that key into your code editor (or connect it), and boom — you have access to all those open-source models in your IDE. You&apos;re running world-class AI on H100s you don&apos;t own and don&apos;t pay for. That&apos;s the unlock most people miss.
                  </p>
                </div>

                {/* Section 9 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[09]</span> why this actually matters
                  </h2>
                  <p>
                    The boring answer is: it&apos;s cheaper. The real answer goes deeper:
                  </p>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <strong>Privacy:</strong> You wouldn&apos;t hand a corporate stranger your personal diary or your company&apos;s source code. With local AI, your data never leaves your hard drive.
                    </li>
                    <li>
                      <strong>Censorship resistance:</strong> Closed models have strict guardrails designed to protect the company&apos;s brand. Open models don&apos;t have corporate HR departments. They won&apos;t refuse a coding prompt because an over-sensitive safety filter tripped.
                    </li>
                    <li>
                      <strong>Ownership:</strong> You own the exact model version. A corporation can&apos;t suddenly update the AI, nerf its capabilities, or take it away. It&apos;s on your machine. It&apos;s yours.
                    </li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[10]</span> what you can do with this
                  </h2>
                  <p>
                    The math has completely changed. Just a year ago, building anything serious with AI meant pouring hundreds of dollars just to get the desired results. There was no other option than paying for those services. Now you have the options, but you&apos;re sleeping on it.
                  </p>
                  <p>
                    Same quality. Same latency. A fraction of the cost. You&apos;re not just saving money; you&apos;re removing a dependency on companies that can change pricing overnight, deprecate models, or suspend your account. The infrastructure is yours.
                  </p>
                </div>

                {/* Section 11 */}
                <div className="space-y-3 pt-2">
                  <h2 className="font-semibold text-foreground text-lg sm:text-xl font-mono tracking-tight text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">[11]</span> wrapping up
                  </h2>
                  <p>
                    I&apos;m an AI engineer who&apos;s been building in public for a few months. Six months ago, I didn&apos;t fully understand what &quot;open weights&quot; meant. I knew the theory but hadn&apos;t run a model locally or thought seriously about what owning your AI stack would actually mean. But now I do, and I&apos;m mostly using that for my builds.
                  </p>
                  <p>
                    So if you&apos;re a developer watching from the sidelines because it feels too technical, too expensive, or too complicated: it isn&apos;t anymore. The Michelin-star recipe books are free now. You just have to be willing to cook.
                  </p>
                </div>

                {/* Contact Footer */}
                <div className="space-y-4 pt-4 border-t border-edge mt-8">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg tracking-tight">
                    Let&apos;s have a chat!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    If you&apos;re building in AI, hosting models, or want to discuss local LLM stacks:
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
