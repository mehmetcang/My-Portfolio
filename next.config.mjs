/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mehmetcangultekin.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'mehmetcangultekin.com',
          },
        ],
        destination: 'https://www.mehmetcangultekin.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
