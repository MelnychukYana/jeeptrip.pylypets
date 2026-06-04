import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source:
          "/:section(home|sunrise|prices|certificate|gallery|faq|location|reviews)",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;