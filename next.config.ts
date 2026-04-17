import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin Turbopack to this app dir, not the upstream workspace it inferred.
  // (Build still uses --webpack because Turbopack panics on multi-byte chars
  // in the project path; once that bug is fixed we can drop --webpack.)
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "s4.anilist.co" },
      { protocol: "https", hostname: "img.anili.st" },
    ],
  },
};

export default nextConfig;
