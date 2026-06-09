import Image from "next/image";
import { Crosshairs } from "@/components/ui/crosshairs";

interface ExperienceItem {
  title: string;
  previousTitle?: string;
  company: string;
  date: string;
  description: string[];
  items?: {
    image: string;
    alt: string;
    link: string;
  }[];
}

const roles: ExperienceItem[] = [
  {
    title: "AI/ML Intern",
    company: "Infosys Springboard",
    date: "Sep 2025 – Nov 2025",
    description: [
      "Reduced model error rates by 20% across production ML pipelines by engineering end-to-end preprocessing and feature engineering.",
      "Containerised ML workflows with Docker and integrated version-controlled releases into CI/CD pipelines.",
    ],
    items: [
      {
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=120&h=120&q=80",
        alt: "Infosys",
        link: "https://www.infosys.com",
      },
    ],
  },
  {
    title: "Full Stack Web Designer",
    company: "Contra Platform",
    date: "Oct 2023 – Feb 2024",
    description: [
      "Delivered 10+ full-stack applications with zero post-launch critical bugs and 95% client satisfaction.",
      "Reduced average delivery time by 30% by establishing reusable design systems and component libraries.",
    ],
    items: [
      {
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=120&h=120&q=80",
        alt: "Contra",
        link: "https://contra.com",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative border-x border-edge screen-line-before screen-line-after">
      <Crosshairs top={true} bottom={true} />
      <header className="screen-line-after px-4 py-3 sm:px-6">
        <h2 className="font-semibold tracking-tight text-foreground text-xl">Experience</h2>
      </header>
      <div className="p-4 sm:p-6 space-y-8">
        {roles.map((role) => (
          <article
            key={role.company}
            className="first:mt-0"
            itemScope
            itemType="https://schema.org/EmployeeRole"
          >
            <div className="flex">
              <div>
                <h3
                  className="text-lg tracking-tight font-semibold"
                  itemProp="roleName"
                >
                  {role.title}
                </h3>
                {role.previousTitle && (
                  <p
                    className="mt-1 mb-1 text-sm sm:text-base font-medium leading-4 text-muted-foreground/80 italic"
                    itemProp="roleName"
                  >
                    Previously: {role.previousTitle}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between">
              <p className="mt-2 text-sm sm:text-base font-medium leading-6 text-foreground/80">
                <span itemProp="name">{role.company}</span>
              </p>
              <p
                className="mt-2 text-sm sm:text-base font-medium leading-6 text-foreground/80"
                itemProp="startDate"
              >
                {role.date}
              </p>
            </div>
            <div
              className="mt-2 text-sm sm:text-base leading-6 text-muted-foreground"
              itemProp="description"
            >
              <ul className="list-outside ml-4 list-disc space-y-2 text-muted-foreground">
                {role.description.map((desc, index) => (
                  <li key={index} className="text-base pl-1">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            {role.items && (
              <div className="mt-4 flex flex-wrap flex-row gap-1.5 relative">
                {role.items.map((item) => (
                  <a
                    key={item.link}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border p-1.5 rounded-xl flex items-center justify-between gap-2 w-full sm:w-fit flex-row-reverse sm:flex-row hover:bg-muted hover:border-border/80 transition-all cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={32}
                      height={32}
                      className="rounded-lg object-cover h-8 w-8 border border-border"
                      itemProp="image"
                    />
                    <div>
                      <span className="font-medium text-base tracking-tight text-foreground/70 pr-1 pl-1 sm:pl-0">
                        {item.alt}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
