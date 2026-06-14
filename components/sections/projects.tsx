"use client";
import { ProjectShowcase, type Project } from "@/components/ui/project-showcase";
import { Crosshairs } from "@/components/ui/crosshairs";
import { projectsData } from "@/lib/projects";

const projectsOrder = ["minutz", "skincure", "clarity", "legalmind"];
const projects: Project[] = projectsOrder
  .map((id) => projectsData.find((p) => p.id === id))
  .filter((p): p is typeof projectsData[0] => !!p)
  .map((project) => ({
    id: project.id,
    title: `${project.name} — ${project.subtitle}`,
    description: project.shortDescription,
    year: project.status === "in-progress" ? "In Progress" : (project.id === "minutz" ? "Shipped | OpenAI Hackathon" : "Shipped"),
    link: `/projects#${project.id}`,
    image: project.heroImage,
  }));

export default function Projects() {
  return (
    <section id="projects" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Projects</h2>
      </header>
      <div className="p-4 sm:p-6">
        <ProjectShowcase projects={projects} />
      </div>
    </section>
  );
}
