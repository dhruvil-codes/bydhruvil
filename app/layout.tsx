import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
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
  title: "Dhruvil Mistry - AI Engineer",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
  },
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
    title: "Dhruvil Mistry - AI Engineer",
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
    title: "Dhruvil Mistry - AI Engineer",
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
        {/* Machine-readable Alternate & Metadata Links */}
        <link rel="alternate" type="text/markdown" href="https://bydhruvil.in/index.md" />
        <link rel="describedby" type="application/json" href="https://bydhruvil.in/.well-known/ai-catalog.json" />
        <link rel="service-desc" type="application/vnd.oai.openapi+json;version=3.1" href="https://bydhruvil.in/openapi.json" />

        {/* WebMCP Model Context Client Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var tools = [
                    {
                      name: "ask_dhruvil",
                      description: "Ask technical or background questions about AI Engineer Dhruvil Mistry",
                      endpoint: "https://bydhruvil.in/ask",
                      method: "POST",
                      parameters: {
                        type: "object",
                        properties: { query: { type: "string" } },
                        required: ["query"]
                      }
                    },
                    {
                      name: "get_projects",
                      description: "Retrieve flagship AI projects built by Dhruvil Mistry",
                      endpoint: "https://bydhruvil.in/projects",
                      method: "GET"
                    },
                    {
                      name: "get_contact_info",
                      description: "Retrieve verified contact info and social links for Dhruvil Mistry",
                      endpoint: "https://bydhruvil.in/contact",
                      method: "GET"
                    }
                  ];
                  var contextObj = {
                    version: "1.0.0",
                    server: "https://bydhruvil.in",
                    tools: tools,
                    catalog: "https://bydhruvil.in/.well-known/ai-catalog.json",
                    mcp: "https://bydhruvil.in/.well-known/mcp/server-card.json"
                  };
                  window.modelContext = contextObj;
                  document.modelContext = contextObj;
                  if (typeof navigator !== 'undefined') {
                    navigator.modelContext = contextObj;
                  }
                } catch(e) {}
              })();
            `,
          }}
        />

        {/* Schema.org Comprehensive JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://bydhruvil.in/#person",
                  "name": "Dhruvil Mistry",
                  "url": "https://bydhruvil.in",
                  "email": "dhruvilmistry16@gmail.com",
                  "sameAs": [
                    "https://github.com/dhruvil-codes",
                    "https://www.linkedin.com/in/dhruvilmistry16/",
                    "https://x.com/bydhruvil",
                    "https://peerlist.io/bydhruvil",
                    "https://bydhruvil.substack.com/"
                  ],
                  "jobTitle": "AI Engineer",
                  "worksFor": {
                    "@id": "https://bydhruvil.in/#organization"
                  },
                  "description": "AI Engineer building production-grade LLM systems, RAG pipelines, and full-stack AI applications.",
                  "knowsAbout": [
                    "Artificial Intelligence",
                    "Large Language Models",
                    "Retrieval-Augmented Generation",
                    "AI Agents",
                    "Voice AI",
                    "Generative AI",
                    "Machine Learning",
                    "FastAPI",
                    "Next.js",
                    "Python",
                    "WebSockets",
                    "Vector Databases"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "India"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "personal & professional inquiries",
                      "email": "dhruvilmistry16@gmail.com",
                      "url": "https://bydhruvil.in/contact",
                      "availableLanguage": ["English", "Hindi", "Gujarati"]
                    }
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://bydhruvil.in/#organization",
                  "name": "Dhruvil Mistry AI Engineering",
                  "url": "https://bydhruvil.in",
                  "logo": "https://bydhruvil.in/icon.png",
                  "email": "dhruvilmistry16@gmail.com",
                  "founder": {
                    "@id": "https://bydhruvil.in/#person"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "contactType": "technical inquiries & consulting",
                      "email": "dhruvilmistry16@gmail.com",
                      "url": "https://bydhruvil.in/contact",
                      "availableLanguage": ["English", "Hindi", "Gujarati"]
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Mumbai",
                    "addressRegion": "Maharashtra",
                    "addressCountry": "India"
                  },
                  "sameAs": [
                    "https://github.com/dhruvil-codes",
                    "https://www.linkedin.com/in/dhruvilmistry16/",
                    "https://x.com/bydhruvil",
                    "https://peerlist.io/bydhruvil",
                    "https://bydhruvil.substack.com/"
                  ]
                },
                {
                  "@type": "Service",
                  "@id": "https://bydhruvil.in/#service",
                  "name": "AI Engineering & LLM Architecture Services",
                  "serviceType": "AI Systems Development",
                  "provider": {
                    "@id": "https://bydhruvil.in/#person"
                  },
                  "description": "Designing and deploying production-grade LLM systems, RAG pipelines, voice bots, and agentic workflows.",
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "AI Engineering Solutions",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Production RAG & Semantic Search Systems"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Real-time Voice AI & Audio Agent Architectures"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Full-Stack AI Application Development & Deployment"
                        }
                      }
                    ]
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
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://bydhruvil.in/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Who is Dhruvil Mistry?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dhruvil Mistry is an AI Engineer based in Mumbai, India. He specializes in shipping production-grade LLM systems, RAG pipelines, and full-stack AI applications."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What has Dhruvil Mistry built?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dhruvil has built flagship projects like Minutz (an AI Meeting Intelligence Platform selected at the OpenAI hackathon), Saral AI (a low-latency Voice AI Receptionist for MSMEs), Skin Cure (an AI dermatology classifier), and Clarity (a multi-provider Chrome reading assistant extension)."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What technologies does Dhruvil Mistry specialize in?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dhruvil specializes in Python, FastAPI, Next.js, React, LangChain, LlamaIndex, vector databases (Qdrant, Pinecone, ChromaDB), and integrating frontier LLMs from OpenAI, Anthropic, and Gemini."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is Dhruvil Mistry open to work?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, Dhruvil Mistry is actively looking for AI Engineer, GenAI Engineer, or LLM Engineer roles at funded, fast-moving startups. He is based in Mumbai, India, and open to remote or on-site opportunities."
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
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
