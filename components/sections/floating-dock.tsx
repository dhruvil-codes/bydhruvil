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
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const InfinityIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" />
  </svg>
);

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
    label: "Infinity Glow",
    icon: InfinityIcon,
    href: "#",
    isSection: false,
  },
  {
    label: "Email",
    icon: MailIcon,
    href: "mailto:dhruvilmistry16@gmail.com",
    isSection: false,
  },
];

interface FloatingDockProps {
  isGlowActive?: boolean;
  onGlowToggle?: () => void;
  isDonnaOpen?: boolean;
  onDonnaToggle?: () => void;
}

export default function FloatingDock({
  isGlowActive = false,
  onGlowToggle,
  isDonnaOpen = false,
  onDonnaToggle,
}: FloatingDockProps) {
  const [isMobile, setIsMobile] = React.useState(false);
  const pathname = usePathname();

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
    if (item.label === "Infinity Glow") {
      e.preventDefault();
      onGlowToggle?.();
      return;
    }



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
          const isExternal = item.href.startsWith("http") || item.href.startsWith("mailto");
          const isGlow = item.label === "Infinity Glow";

          if (isExternal) {
            return (
              <DockIcon key={item.label} label={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex items-center justify-center w-full h-full transition-all duration-300 text-muted-foreground hover:text-foreground"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </DockIcon>
            );
          }

          if (isGlow) {
            return (
              <DockIcon key={item.label} label={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item)}
                  aria-label={item.label}
                  className={cn(
                    "flex items-center justify-center w-full h-full transition-all duration-300",
                    isGlowActive
                      ? "text-violet-500 hover:text-violet-600 dark:text-violet-400 dark:hover:text-violet-300 animate-pulse scale-110"
                      : "text-muted-foreground hover:text-foreground"
                  )}
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
