import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const allowedAiBots = [
    "GPTBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
    "ora-agent",
    "DeepSeekBot",
    "anthropic-ai",
    "OAI-SearchBot",
    "Meta-ExternalAgent",
    "cohere-ai",
  ];

  const blockedTrainingBots = [
    "CCBot",
    "Bytespider",
    "Diffbot",
  ];

  const allowedRules = allowedAiBots.map((bot) => ({
    userAgent: bot,
    allow: "/",
  }));

  const blockedRules = blockedTrainingBots.map((bot) => ({
    userAgent: bot,
    disallow: "/",
  }));

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...allowedRules,
      ...blockedRules,
    ],
    sitemap: "https://bydhruvil.in/sitemap.xml",
  };
}
