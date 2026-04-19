import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  basePath: "/10to10-website",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default config;
