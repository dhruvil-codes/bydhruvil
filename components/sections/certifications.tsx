"use client";
import { Badge } from "@/components/ui/badge";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Crosshairs } from "@/components/ui/crosshairs";

const badgeStyles: Record<string, string> = {
  Credential: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-500/20 rounded-xl hover:bg-indigo-500/10",
  Award: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 rounded-xl hover:bg-amber-500/10",
  Leadership: "bg-pink-500/10 text-pink-700 dark:text-pink-400 border border-pink-500/20 rounded-xl hover:bg-pink-500/10",
};

interface Certification {
  title: string;
  date: string;
  released: boolean;
  badge: "Credential" | "Award" | "Leadership";
  issuer: string;
  link: string;
  description: string;
}

const certifications: Certification[] = [
  {
    title: "1st Place Model Making",
    date: "September 2022",
    released: true,
    badge: "Award",
    issuer: "Thakur Polytechnic",
    link: "https://bydhruvil.in",
    description: "Won first prize in the department-wide project and model making competition for demonstrating physical and software prototypes.",
  },
  {
    title: "TechnoFest 2023 Runner-up",
    date: "March 2023",
    released: true,
    badge: "Award",
    issuer: "TechnoFest State-Level",
    link: "https://bydhruvil.in",
    description: "Awarded runner-up place for innovative project presentation at the TechnoFest state-level technical model competition.",
  },
  {
    title: "Technical Lead",
    date: "September 2024",
    released: true,
    badge: "Leadership",
    issuer: "ISTE RGIT Students Chapter",
    link: "https://www.mctrgit.ac.in",
    description: "Leading the student developer community and technical initiatives, hosting workshops on Python, web development, and introductory machine learning.",
  },
  {
    title: "Building LLM Applications with Prompt Engineering",
    date: "May 2025",
    released: true,
    badge: "Credential",
    issuer: "NVIDIA",
    link: "https://www.nvidia.com",
    description: "Hands-on experience in building LLM-powered applications using prompt engineering, chain-of-thought prompting, and agent-like structures.",
  },
  {
    title: "Generative AI with LLMs",
    date: "March 2025",
    released: true,
    badge: "Credential",
    issuer: "DeepLearning.AI",
    link: "https://www.deeplearning.ai",
    description: "Advanced certification covering LLM training, fine-tuning, RLHF (Reinforcement Learning from Human Feedback), and efficient scaling models.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Certifications & Honors</h2>
      </header>
      <div className="p-4 sm:p-6">
        <div className="relative overflow-hidden">
          {/* The scrollable cards container */}
          <div
            className="relative h-[500px] overflow-y-auto overflow-x-hidden scrollbar-hide pt-4 pb-32"
            style={{
              maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
            }}
          >
            <div className="grid grid-cols-3 gap-4">
              {certifications.map((item) => (
                <article
                  key={item.title}
                  className="col-span-3"
                  itemScope
                  itemType="https://schema.org/CreativeWork"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Verify ${item.title}`}
                    className="group block cursor-pointer"
                  >
                    <div className="mt-0 bg-card rounded-xl flex flex-col border-border border hover:border-border/80 transition-all hover:shadow-sm">
                      <div>
                        <div className="p-4 pb-3">
                          <div className="flex justify-between items-start gap-2">
                            <div className="flex gap-1.5 flex-wrap items-center">
                              <h3 className="text-base font-semibold tracking-tight text-foreground">
                                {item.issuer}
                              </h3>
                            </div>
                            <Badge
                              className={`${badgeStyles[item.badge] || badgeStyles.Credential} shrink-0`}
                            >
                              {item.badge}
                            </Badge>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mt-2">
                            <p
                              className="text-sm sm:text-base font-medium leading-6 text-foreground/80 tracking-tight"
                              itemProp="headline name"
                            >
                              {item.title}
                            </p>
                            <p
                              className="text-sm sm:text-base font-medium leading-6 text-muted-foreground shrink-0"
                              itemProp="datePublished"
                            >
                              {item.date}
                            </p>
                          </div>
                        </div>

                        <div className="h-px w-full bg-border" />
                        <div className="p-4 pt-3 bg-muted/30 rounded-b-xl">
                          <p
                            className="text-sm sm:text-base leading-6 text-muted-foreground"
                            itemProp="abstract"
                          >
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom blur */}
          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-10"
            direction="bottom"
            blurIntensity={0.2}
          />
        </div>
      </div>
    </section>
  );
}
