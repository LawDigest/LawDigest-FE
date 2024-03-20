/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
        port: '8080',
        pathname: '/**',
      },
    ],
    domains: [process.env.NEXT_PUBLIC_HOSTNAME],
  },
};

module.exports = nextConfig;
