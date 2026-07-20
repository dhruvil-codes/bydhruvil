import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dhruvil Mistry",
  description: "Explore production-grade AI systems, LLM agents, and RAG pipelines designed and built by Dhruvil Mistry.",
  alternates: {
    canonical: "https://bydhruvil.in/projects",
  },
  openGraph: {
    title: "Projects | Dhruvil Mistry",
    description: "Explore production-grade AI systems, LLM agents, and RAG pipelines designed and built by Dhruvil Mistry.",
    url: "https://bydhruvil.in/projects",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Dhruvil Mistry Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Dhruvil Mistry",
    description: "Explore production-grade AI systems, LLM agents, and RAG pipelines designed and built by Dhruvil Mistry.",
    images: ["/images/og-banner.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
