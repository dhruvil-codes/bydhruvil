"use client";
import { Badge } from "@/components/ui/badge";

interface UpcomingProject {
  title: string;
  released: boolean;
  type: string;
  badges: Record<string, string>;
  company: string;
  description: string;
}

const upcomingProjects: UpcomingProject[] = [
  {
    title: "LegalMind",
    released: false,
    type: "In Progress",
    badges: {
      FastAPI: "border border-green-500/15 text-green-800 bg-green-500/5 hover:bg-green-500/5 rounded-xl",
      Qdrant: "border border-blue-500/15 text-blue-800 bg-blue-500/5 hover:bg-blue-500/5 rounded-xl",
      OpenAI: "border border-purple-500/15 text-purple-800 bg-purple-500/5 hover:bg-purple-500/5 rounded-xl",
      RAG: "border border-orange-500/15 text-orange-800 bg-orange-500/5 hover:bg-orange-500/5 rounded-xl",
    },
    company: "AI Risk Analyser",
    description:
      "Building a production RAG pipeline for legal documents with 12 parallel async LLM risk-extraction tasks targeting under 30s latency on 50 pages.",
  },
  {
    title: "Skin Cure",
    released: false,
    type: "In Progress",
    badges: {
      FastAPI: "border border-green-500/15 text-green-800 bg-green-500/5 hover:bg-green-500/5 rounded-xl",
      React: "border border-sky-500/15 text-sky-800 bg-sky-500/5 hover:bg-sky-500/5 rounded-xl",
      SwinV2: "border border-amber-500/15 text-amber-800 bg-amber-500/5 hover:bg-amber-500/5 rounded-xl",
      PyTorch: "border border-red-500/15 text-red-800 bg-red-500/5 hover:bg-red-500/5 rounded-xl",
    },
    company: "AI Dermatology",
    description:
      "Training a 24-class SwinV2 classifier on 28K+ dermatological images achieving 78% accuracy, combined with dermatologist discovery.",
  },
];

export default function UpcomingProjects() {
  return (
    <section aria-labelledby="upcoming-heading" className="mt-12">
      <h2
        id="upcoming-heading"
        className="font-semibold tracking-tight text-black text-xl"
      >
        Projects In Progress
      </h2>
      <div className="mt-3 scale-[101%] border-b border-neutral-200" />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {upcomingProjects.map((project) => (
          <div
            key={project.title}
            className="bg-neutral-50/50 group p-6 rounded-xl sm:justify-between border-neutral-200 border transition-all w-full flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">{project.title}</h3>
                <span className="text-xs bg-amber-500/10 text-amber-800 border border-amber-500/20 px-2 py-0.5 rounded-full font-medium">
                  {project.type}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base leading-6 text-neutral-800/80 py-2">
                {project.description}
              </p>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {Object.keys(project.badges).map((badge) => (
                <Badge
                  key={badge}
                  className={project.badges[badge]}
                >
                  {badge}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
