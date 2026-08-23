import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "ora-agent",
    "DeepSeekBot",
    "Bytespider",
    "CCBot",
    "anthropic-ai",
    "OAI-SearchBot",
    "Amazonbot",
    "Meta-ExternalAgent",
    "cohere-ai",
  ];

  const botRules = aiBots.map((bot) => ({
    userAgent: bot,
    allow: "/",
  }));

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...botRules,
    ],
    sitemap: "https://bydhruvil.in/sitemap.xml",
  };
}
