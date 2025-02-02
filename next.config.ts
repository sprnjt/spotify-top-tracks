import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/**', // Allow all paths under this hostname
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
