import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | Dhruvil Mistry",
  description: "AI & full-stack development tools used by Dhruvil Mistry.",
  openGraph: {
    title: "Tech Stack | Dhruvil Mistry",
    description: "AI & full-stack development tools used by Dhruvil Mistry.",
  },
  twitter: {
    title: "Tech Stack | Dhruvil Mistry",
    description: "Explore the technologies, languages, libraries, and tools that Dhruvil Mistry uses to build production-grade AI systems.",
  },
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
