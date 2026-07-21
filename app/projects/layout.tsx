import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Full-Stack Projects | Dhruvil Mistry",
  description:
    "Explore the AI systems, meeting recorders, voice receptionists, and browser extensions built and shipped by Dhruvil Mistry.",
  alternates: {
    canonical: "https://bydhruvil.in/projects",
  },
  openGraph: {
    title: "AI & Full-Stack Projects | Dhruvil Mistry",
    description:
      "Explore the AI systems, meeting recorders, voice receptionists, and browser extensions built and shipped by Dhruvil Mistry.",
    url: "https://bydhruvil.in/projects",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Dhruvil Mistry's Projects Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Full-Stack Projects | Dhruvil Mistry",
    description:
      "Explore the AI systems, meeting recorders, voice receptionists, and browser extensions built and shipped by Dhruvil Mistry.",
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
