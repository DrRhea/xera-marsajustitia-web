import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force disable Turbopack to avoid Vercel build errors
  // Vercel might auto-enable Turbopack, so we need to explicitly disable it
  webpack: (config, { isServer }) => {
    return config;
  },
};

export default nextConfig;
