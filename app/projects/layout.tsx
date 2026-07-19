import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dhruvil Mistry",
  description: "Explore AI products & workflows built by Dhruvil Mistry.",
  openGraph: {
    title: "Projects | Dhruvil Mistry",
    description: "Explore AI products & workflows built by Dhruvil Mistry.",
  },
  twitter: {
    title: "Projects | Dhruvil Mistry",
    description: "Explore the portfolio of AI products, RAG pipelines, and automated workflows engineered by Dhruvil Mistry.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
