import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable Turbopack for production builds to avoid Vercel build errors
  // Use standard webpack bundler instead
};

export default nextConfig;
