import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin workspace root: a yarn.lock exists higher up in ~/Documents/Personal.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
