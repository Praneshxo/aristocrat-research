/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.prod.website-files.com'],
  },
};

module.exports = nextConfig;
