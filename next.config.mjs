/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-image-domain.com', // Replace with actual domains if needed
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
