"use client";

import { Crosshairs } from "@/components/ui/crosshairs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "Python", icon: "python" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Supabase", icon: "supabase" },
  { name: "Docker", icon: "docker" },
  { name: "PyTorch", icon: "pytorch" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Skills</h2>
      </header>
      <div className="p-4 sm:p-6" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="numberOfItems" content={skills.length.toString()} />
        <meta itemProp="itemListOrder" content="Unordered" />

        <TooltipProvider delayDuration={0}>
          <div
            className="flex flex-row flex-nowrap overflow-x-auto w-full gap-2 sm:gap-2.5 py-2 px-1 scrollbar-none items-center justify-start md:justify-center"
            role="list"
            aria-label="Skills list"
          >
            {skills.map((skill, index) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <img
                    src={`https://skillicons.dev/icons?i=${skill.icon}`}
                    alt={skill.name}
                    className="h-9 w-9 sm:h-10 sm:w-10 transition-transform duration-300 hover:scale-110 cursor-pointer select-none shrink-0"
                    loading="lazy"
                  />
                </TooltipTrigger>
                <TooltipContent className="dark px-2 py-1 text-xs" showArrow={true}>
                  {skill.name}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <div className="sr-only">
          <ul>
            {skills.map((skill, index) => (
              <li
                key={skill.name}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={(index + 1).toString()} />
                <span itemProp="name">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
