import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Dhruvil Mistry | AI Engineer — LLMs, RAG & Full-Stack AI",
  description:
    "AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI apps. Based in Mumbai. Open to work.",
  authors: [{ name: "Dhruvil Mistry" }],
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
  robots: "index, follow",
  metadataBase: new URL("https://bydhruvil.in"),
  alternates: {
    canonical: "https://bydhruvil.in",
  },
  openGraph: {
    title: "Dhruvil Mistry | AI Engineer — LLMs, RAG & Full-Stack AI",
    description:
      "AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI apps. Based in Mumbai.",
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
    title: "Dhruvil Mistry | AI Engineer — LLMs, RAG & Full-Stack AI",
    description:
      "AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI apps. Based in Mumbai.",
    creator: "@bydhruvil",
    images: ["/images/og-banner.png"],
  },
  other: {
    "theme-color": "#FFFFFF",
    "format-detection": "telephone=no, address=no, email=no",
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
              "@type": "WebSite",
              "@id": "https://bydhruvil.in/#website",
              "name": "Dhruvil Mistry Portfolio",
              "url": "https://bydhruvil.in",
              "description": "AI Engineer specialising in production-grade LLM systems, RAG pipelines, and full-stack applications.",
              "inLanguage": "en-US"
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

