/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.byteimg.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/blog/:id/edit',
        destination: `/blog/create`,
      },
      {
        source: '/blog/page/:page',
        destination: `/blog`,
      },
    ];
  },
};

module.exports = nextConfig;
