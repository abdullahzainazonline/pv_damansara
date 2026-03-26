import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pavilion-damansara-heights.com',
      },
    ],
  },
=======
>>>>>>> 2588cb518e3b49f43514aad834219d5564d5ca0e
  async rewrites() {
    return [
      {
        source: "/isp-proxy/:path*",
        destination: "https://pavilionsquarekl.com/ISP/:path*",
      },
      {
        source: "/media/:path*",
        destination: "https://pavilionsquarekl.com/ISP/media/:path*",
      },
    ];
  },
};

export default nextConfig;
