"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "/projects", external: false },
  { label: "Blog", href: "/blog", external: false },
  { label: "Stack", href: "/stack", external: false },
];

const quickLinks = [
  { label: "Experience", href: "/#experience", external: false },
  { label: "Education", href: "/#education", external: false },
  { label: "Certifications", href: "/#certifications", external: false },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [affix, setAffix] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let active = true;
    requestAnimationFrame(() => {
      if (active) setMounted(true);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setAffix(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#") || (href.startsWith("/#") && pathname === "/")) {
      e.preventDefault();
      const targetId = href.replace(/^\/?#/, "");
      if (!targetId) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(targetId) || document.querySelector(`#${targetId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  const profileSrc = mounted && resolvedTheme === "dark"
    ? "/images/dhruvil-dark.png"
    : "/images/dhruvil.png";

  return (
    <header
      data-affix={affix}
      className="sticky top-0 z-50 w-full overflow-x-clip bg-background px-4 md:px-6 pt-2 transition-shadow duration-300 data-[affix=true]:shadow-[0_0_16px_0_rgba(0,0,0,0.08)] dark:data-[affix=true]:shadow-[0_0_16px_0_rgba(0,0,0,0.4)]"
    >
      {/* Inner container integrates with the grid border system */}
      <div className="screen-line-before screen-line-after mx-auto flex h-12 max-w-3xl items-center justify-between gap-2 border-x border-edge px-3 sm:gap-4">
        
        {/* Logo / Icon — image placeholder */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          aria-label="Home"
          className="shrink-0 transition-transform duration-200 ease-out active:scale-95"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-muted overflow-hidden">
            <Image
              src={profileSrc}
              alt="Dhruvil Mistry"
              width={72}
              height={72}
              className="h-full w-full object-cover rounded-lg [image-rendering:-webkit-optimize-contrast]"
              priority
            />
          </div>
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Nav links — hidden on mobile */}
        <nav className="hidden items-center gap-5 sm:flex">
          {navLinks.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Divider + Theme toggle + Mobile Menu Button */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />

          {mounted ? (
            <AnimatedThemeToggler
              theme={resolvedTheme as "light" | "dark"}
              onThemeChange={(t) => setTheme(t)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground [&_svg]:h-4 [&_svg]:w-4"
            />
          ) : (
            <div className="h-8 w-8 rounded-lg" />
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:hidden"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mx-auto max-w-3xl overflow-hidden border-x border-b border-edge bg-background/95 backdrop-blur-md sm:hidden"
          >
            <div className="flex flex-col gap-1 p-3.5">
              <div className="text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-1 px-3 pt-1">
                Pages
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-mono font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-accent text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              ))}

              <div className="my-1.5 h-px bg-edge" />

              <div className="text-[11px] font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-1 px-3">
                Sections & Quick Links
              </div>
              {quickLinks.map((link) => {
                if (link.external) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                  >
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

