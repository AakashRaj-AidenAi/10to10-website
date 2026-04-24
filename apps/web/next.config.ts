import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  basePath: "/10to10-website",
  reactStrictMode: true,
  images: {
    unoptimized: true,
<<<<<<< HEAD
=======
    remotePatterns: [
      { protocol: "https", hostname: "10to10adventures.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
>>>>>>> master
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default config;
