import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for production builds to avoid build errors
  // Turbopack can still be used in development with --turbo flag
  experimental: {
    turbo: undefined,
  },
};

export default nextConfig;
