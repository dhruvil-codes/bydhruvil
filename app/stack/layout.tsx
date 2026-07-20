import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack & Curated Reads | Dhruvil Mistry",
  description: "Curated reading recommendations and insightful Substack articles on AI engineering, career, and deep learning recommended by Dhruvil Mistry.",
  alternates: {
    canonical: "https://bydhruvil.in/stack",
  },
  openGraph: {
    title: "Tech Stack & Curated Reads | Dhruvil Mistry",
    description: "Curated reading recommendations and insightful Substack articles on AI engineering, career, and deep learning recommended by Dhruvil Mistry.",
    url: "https://bydhruvil.in/stack",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Dhruvil Mistry Tech Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Stack & Curated Reads | Dhruvil Mistry",
    description: "Curated reading recommendations and insightful Substack articles on AI engineering, career, and deep learning recommended by Dhruvil Mistry.",
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
