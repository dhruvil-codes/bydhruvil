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
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.bydhruvil.in",
          },
        ],
        destination: "https://bydhruvil.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
