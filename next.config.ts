import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // ESTA LINHA RESOLVE O PROBLEMA DE IP PRIVADO
    dangerouslyAllowSVG: true,
    unoptimized: process.env.NODE_ENV === 'development',
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'reasonable-transformation-production-21b0.up.railway.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
