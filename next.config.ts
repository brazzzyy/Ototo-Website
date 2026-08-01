import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // WebP only. Our sources are already lossy WebP, so transcoding to AVIF
    // costs ~4x the CPU and comes out *larger* — measured on home-banner.webp:
    // 2400w AVIF 870ms/353KB vs WebP 211ms/248KB. AVIF wins on PNG/JPEG
    // sources, which we don't have.
    formats: ["image/webp"],
    // Capped at 1920: the widest source is 2400px and every photo is either
    // full-bleed behind a scrim or well under half the viewport, so the
    // 2048/3840 entries only bought a bigger LCP payload and a slower first
    // encode on a cold cache.
    deviceSizes: [640, 750, 828, 1080, 1280, 1920],
    // Only the widths our `sizes` attributes actually resolve to
    imageSizes: [64, 96, 128, 256, 384],
    // Local photos are imported statically, so they get content-hashed URLs and
    // are already served immutable. This TTL is for the remote Google review
    // avatars, which would otherwise be re-fetched and re-encoded constantly.
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
