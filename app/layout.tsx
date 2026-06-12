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
  title: "Dhruvil Mistry | AI Engineer",
  description:
    "AI Engineer specialising in production-grade LLM systems, RAG pipelines, and full-stack applications. Building at the intersection of AI capability and user-facing products.",
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
    title: "Dhruvil Mistry | AI Engineer",
    description:
      "AI Engineer specialising in production-grade LLM systems, RAG pipelines, and full-stack applications.",
    url: "https://bydhruvil.in",
    siteName: "Dhruvil Mistry",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruvil Mistry | AI Engineer",
    description:
      "AI Engineer specialising in production-grade LLM systems, RAG pipelines, and full-stack applications.",
    creator: "@bydhruvil",
  },
  other: {
    "theme-color": "#FFFFFF",
    "format-detection": "telephone=no, address=no, email=no",
  },
};

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
          {children}
          <Toaster />
          <Oneko />
        </ThemeProvider>
      </body>
    </html>
  );
}
