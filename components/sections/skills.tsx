import { Crosshairs } from "@/components/ui/crosshairs";

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
  const desktopIcons = skills.map((s) => s.icon).join(",");
  const mobileIcons = `${skills.map((s) => s.icon).join(",")}&perline=7`;

  return (
    <section id="skills" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Skills</h2>
      </header>
      <div className="p-4 sm:p-6" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="numberOfItems" content={skills.length.toString()} />
        <meta itemProp="itemListOrder" content="Unordered" />

        <div className="hidden md:block" role="list" aria-label="Skills grid">
          <img
            className="w-full"
            src={`https://skillicons.dev/icons?i=${desktopIcons}`}
            alt="Skills including Python, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, React, Next.js, PostgreSQL, Supabase, Docker, PyTorch, Git, and GitHub"
            loading="lazy"
          />
        </div>

        <div className="block md:hidden" role="list" aria-label="Skills grid">
          <img
            className="w-full"
            src={`https://skillicons.dev/icons?i=${mobileIcons}`}
            alt="Skills including Python, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, React, Next.js, PostgreSQL, Supabase, Docker, PyTorch, Git, and GitHub"
            loading="lazy"
          />
        </div>

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
