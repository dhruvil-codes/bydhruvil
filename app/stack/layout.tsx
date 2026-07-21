import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack & Curated Reads | Dhruvil Mistry",
  description:
    "Detailed list of technologies, frameworks, databases, and curated technical reading list by Dhruvil Mistry, AI Engineer.",
  alternates: {
    canonical: "https://bydhruvil.in/stack",
  },
  openGraph: {
    title: "Tech Stack & Curated Reads | Dhruvil Mistry",
    description:
      "Detailed list of technologies, frameworks, databases, and curated technical reading list by Dhruvil Mistry, AI Engineer.",
    url: "https://bydhruvil.in/stack",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Dhruvil Mistry's Tech Stack & Reading List",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Stack & Curated Reads | Dhruvil Mistry",
    description:
      "Detailed list of technologies, frameworks, databases, and curated technical reading list by Dhruvil Mistry, AI Engineer.",
    images: ["/images/og-banner.png"],
  },
};

export default function StackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
