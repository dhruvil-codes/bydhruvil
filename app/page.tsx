"use client";

import React, { useState } from "react";
import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";
import About from "@/components/sections/about";
import Connect from "@/components/sections/connect";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";
import Certifications from "@/components/sections/certifications";
import Quote from "@/components/sections/quote";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";
import MorphPanel from "@/components/ui/morph-panel";
import { BorderGlow } from "@/registry/aliimam/components/border-glow";
import { useMagicGlowSound } from "@/hooks/useMagicGlowSound";

export default function Home() {
  const [glowActive, setGlowActive] = useState(false);

  useMagicGlowSound(glowActive);

  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
      {glowActive && (
        <div
          className="fixed inset-0 z-40 pointer-events-none"
          style={{ width: "100vw", height: "100vh" }}
        >
          <BorderGlow
            width="100%"
            height="100%"
            colorPreset="pastel"
            animationDuration={6}
            className="pointer-events-none"
            innerClassName="pointer-events-none p-0"
          >
            <></>
          </BorderGlow>
        </div>
      )}

      {/* Hero area: grid shows in left/right margins, navbar + hero content sit on solid bg */}
      <div className="relative w-full bg-grid-dots">
        {/* Sticky Navbar — integrated with grid border system */}
        <Navbar />

        <main className="max-w-screen overflow-x-hidden px-4 md:px-6">
          <div className="mx-auto max-w-3xl relative bg-background">
            {/* Hero Section */}
            <Header />
          </div>
        </main>
      </div>

      {/* Rest of content */}
      <main className="max-w-screen overflow-x-hidden px-4 md:px-6 pb-10">
        <div className="mx-auto max-w-3xl relative">

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* About Section */}
          <About />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Connect Section */}
          <Connect />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Projects Section */}
          <Projects />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Experience Section */}
          <Experience />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Education Section */}
          <Education />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Skills Section */}
          <Skills />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Certifications Section */}
          <Certifications />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Quote Section */}
          <Quote />

          {/* Separator */}
          <div className="relative flex h-6 w-full border-x border-edge bg-hatch-lines"></div>

          {/* Footer Section */}
          <Footer />

        </div>
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <MorphPanel />
        </div>
        <FloatingDock
          isGlowActive={glowActive}
          onGlowToggle={() => setGlowActive((prev) => !prev)}
        />
      </main>
    </div>
  );
}
