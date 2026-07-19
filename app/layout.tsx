import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Oneko } from "@/components/ui/oneko";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export const metadata: Metadata = {
  title: "Dhruvil Mistry — Official Website & Portfolio",
  description:
    "AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI apps. Based in Mumbai.",
  authors: [{ name: "Dhruvil Mistry", url: "https://bydhruvil.in" }],
  keywords: [
    "Dhruvil Mistry",
    "AI Engineer",
    "LLM",
    "RAG",
    "Python",
    "FastAPI",
    "Next.js",
    "Machine Learning",
    "Mumbai",
    "Portfolio",
  ],
  creator: "Dhruvil Mistry",
  publisher: "Dhruvil Mistry",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://bydhruvil.in"),
  alternates: {
    canonical: "https://bydhruvil.in",
    languages: {
      "en-US": "https://bydhruvil.in",
    },
  },
  openGraph: {
    title: "Dhruvil Mistry | AI Engineer",
    description: "AI Engineer building production-grade LLMs & RAG pipelines.",
    url: "https://bydhruvil.in",
    siteName: "Dhruvil Mistry",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Dhruvil Mistry | AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruvil Mistry | AI Engineer",
    description: "Dhruvil Mistry is an AI Engineer specialising in production-grade LLM systems, RAG pipelines, and full-stack AI applications. Based in Mumbai, open to work.",
    site: "@bydhruvil",
    creator: "@bydhruvil",
    images: ["/images/og-banner.png"],
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
};

import { ChatProvider } from "@/lib/chat-context";
import { GlowOverlay } from "@/components/glow-overlay";
import { LenisProvider } from "@/components/lenis-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://bydhruvil.in/#person",
                  "name": "Dhruvil Mistry",
                  "url": "https://bydhruvil.in",
                  "sameAs": [
                    "https://github.com/dhruvil-codes",
                    "https://linkedin.com/in/dhruvilmistry16",
                    "https://x.com/bydhruvil",
                    "https://peerlist.io/bydhruvil"
                  ],
                  "jobTitle": "AI Engineer",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Freelance / Independent"
                  },
                  "description": "AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI applications.",
                  "knowsAbout": [
                    "Artificial Intelligence",
                    "Large Language Models (LLMs)",
                    "Retrieval-Augmented Generation (RAG)",
                    "Full-Stack AI Applications",
                    "Next.js",
                    "Python",
                    "FastAPI",
                    "Machine Learning"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "India"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bydhruvil.in/#website",
                  "url": "https://bydhruvil.in",
                  "name": "Dhruvil Mistry Portfolio",
                  "description": "Portfolio of Dhruvil Mistry - AI Engineer specializing in LLMs, RAG, and AI applications.",
                  "publisher": {
                    "@id": "https://bydhruvil.in/#person"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "ProfilePage",
                  "@id": "https://bydhruvil.in/#profile",
                  "url": "https://bydhruvil.in",
                  "name": "Dhruvil Mistry - Professional Portfolio & Profile",
                  "about": {
                    "@id": "https://bydhruvil.in/#person"
                  },
                  "mainEntity": {
                    "@id": "https://bydhruvil.in/#person"
                  }
                }
              ]
            }
          `}
        </Script>
      </head>
      <body
        className="min-h-full bg-background text-foreground transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <ChatProvider>
              {children}
              <GlowOverlay />
            </ChatProvider>
            <Toaster />
            <Oneko />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

