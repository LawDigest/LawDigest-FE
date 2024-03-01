/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: '52.79.63.140',
  //       port: '8080',
  //       pathname: '/**',
  //     },
  //   ],
  //   domains: ['52.79.63.140'],
  // },
  reactStrictMode: true,
  // images: {
  //   domains: ['*'],
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'http://52.79.63.140:8080/v1/:path*',
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
