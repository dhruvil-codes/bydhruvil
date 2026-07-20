import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bydhruvil.in";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/stack`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bio`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
