"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  HomeIcon,
  CodeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
  MailIcon,
  FileDown as FileDownIcon,
} from "lucide-react";
const dockItems = [
  {
    label: "Home",
    icon: HomeIcon,
    href: "/",
    isSection: true,
  },
  {
    label: "Projects",
    icon: CodeIcon,
    href: "/projects",
    isSection: false,
  },
  {
    label: "Experience",
    icon: BriefcaseIcon,
    href: "/#experience",
    isSection: true,
  },
  {
    label: "Education",
    icon: GraduationCapIcon,
    href: "/#education",
    isSection: true,
  },
  {
    label: "Certifications",
    icon: AwardIcon,
    href: "/#certifications",
    isSection: true,
  },
  {
    label: "separator" as const,
    icon: null,
    href: "",
    isSection: false,
  },
  {
    label: "Resume",
    icon: FileDownIcon,
    href: "/resume.pdf",
    isSection: false,
    download: "Dhruvil_Mistry_Resume.pdf",
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
  const pathname = usePathname();

  React.useEffect(() => {
    const media = window.matchMedia("(max-width: 640px)");
    let active = true;
    requestAnimationFrame(() => {
      if (active) setIsMobile(media.matches);
    });
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => {
      active = false;
      media.removeEventListener("change", listener);
    };
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof dockItems)[0]
  ) => {



    if (item.label === "Home") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (item.isSection) {
      if (pathname === "/") {
        e.preventDefault();
        const sectionId = item.href.split("#")[1];
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60]">
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
          const isExternal =
            item.href.startsWith("http") ||
            item.href.startsWith("mailto") ||
            ("download" in item && !!item.download);
          if (isExternal) {
            return (
              <DockIcon key={item.label} label={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={"download" in item ? item.download : undefined}
                  aria-label={item.label}
                  className="flex items-center justify-center w-full h-full transition-all duration-300 text-muted-foreground hover:text-foreground"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </DockIcon>
            );
          }



          return (
            <DockIcon key={item.label} label={item.label}>
              <Link
                href={item.href}
                onClick={(e) => handleClick(e, item)}
                aria-label={item.label}
                className="flex items-center justify-center w-full h-full transition-all duration-300 text-muted-foreground hover:text-foreground"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </DockIcon>
          );
        })}
      </Dock>
    </div>
  );
}
