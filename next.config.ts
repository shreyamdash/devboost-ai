import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/devboost-ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
