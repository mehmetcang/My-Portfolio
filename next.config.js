/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  experimental: {
    scrollRestoration: true,
  },
  analyticsId: process.env.VERCEL_ANALYTICS_ID,
};

module.exports = nextConfig; 