/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '15.164.152.208',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['15.164.152.208'],
  },
};

module.exports = nextConfig;
