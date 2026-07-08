/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable for better performance
  swcMinify: true,
  // For better SEO
  trailingSlash: false,
};

module.exports = nextConfig;