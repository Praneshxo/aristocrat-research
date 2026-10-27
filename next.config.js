/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'cdn.prod.website-files.com'],
  },
};

module.exports = nextConfig;
