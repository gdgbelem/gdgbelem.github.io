import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't pick up a parent
  // lockfile (a yarn.lock exists higher up in ~/Documents/Personal).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
