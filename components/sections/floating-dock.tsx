"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  HomeIcon,
  CodeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
  MailIcon,
} from "lucide-react";

const dockItems = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "#",
    isSection: true,
  },
  {
    label: "Projects",
    icon: CodeIcon,
    href: "#projects",
    isSection: true,
  },
  {
    label: "Experience",
    icon: BriefcaseIcon,
    href: "#experience",
    isSection: true,
  },
  {
    label: "Education",
    icon: GraduationCapIcon,
    href: "#education",
    isSection: true,
  },
  {
    label: "Certifications",
    icon: AwardIcon,
    href: "#certifications",
    isSection: true,
  },
  {
    label: "separator" as const,
    icon: null,
    href: "",
    isSection: false,
  },
  {
    label: "GitHub",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
      </svg>
    ),
    href: "https://github.com/dhruvil-codes",
    isSection: false,
  },
  {
    label: "X",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 512 512"
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),
    href: "https://x.com/dhruvil_codes",
    isSection: false,
  },
  {
    label: "LinkedIn",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
      </svg>
    ),
    href: "https://www.linkedin.com/in/dhruvilmistry16/",
    isSection: false,
  },
  {
    label: "Email",
    icon: MailIcon,
    href: "mailto:dhruvilmistry16@gmail.com",
    isSection: false,
  },
];


export default function FloatingDock() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof dockItems)[0]
  ) => {
    if (item.isSection) {
      e.preventDefault();
      if (item.href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.querySelector(item.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <Dock
        iconSize={isMobile ? 28 : 40}
        iconMagnification={isMobile ? 28 : 56}
        iconDistance={isMobile ? 0 : 140}
        disableMagnification={isMobile}
        direction="middle"
        className="border-border bg-background/80 shadow-lg shadow-black/[0.03] backdrop-blur-xl"
      >
        {dockItems.map((item, index) => {
          if (item.label === "separator") {
            return (
              <div
                key={`sep-${index}`}
                className="mx-0.5 sm:mx-1 h-5 sm:h-8 w-px bg-border"
              />
            );
          }

          const Icon = item.icon!;

          return (
            <DockIcon key={item.label} label={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item)}
                target={item.isSection ? undefined : "_blank"}
                rel={item.isSection ? undefined : "noopener noreferrer"}
                aria-label={item.label}
                className="flex items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </DockIcon>
          );
        })}
      </Dock>
    </div>
  );
}
