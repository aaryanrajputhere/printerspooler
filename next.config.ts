import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    // Keep Cloudflare Worker-only source out of Vercel's Next.js type check.
    tsconfigPath: "tsconfig.next.json",
  },
};

export default nextConfig;
