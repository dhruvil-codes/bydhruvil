import Header from "@/components/sections/header";
import Navbar from "@/components/sections/navbar";
import About from "@/components/sections/about";
import Connect from "@/components/sections/connect";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Skills from "@/components/sections/skills";
import Certifications from "@/components/sections/certifications";
import Footer from "@/components/sections/footer";
import FloatingDock from "@/components/sections/floating-dock";

export default function Home() {
  return (
    <div className="flex-col flex w-full overflow-x-hidden scroll-smooth">
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

          {/* Footer Section */}
          <Footer />

        </div>
        <FloatingDock />
      </main>
    </div>
  );
}
