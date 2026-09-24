import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/professtional-headshot",
        destination: "/professional-headshot.jpg",
      },
      {
        source: "/professional-headshot",
        destination: "/professional-headshot.jpg",
      },
      {
        source: "/anime-headshot",
        destination: "/anime-headshot.jpg",
      },
    ];
  },
};

export default nextConfig;
