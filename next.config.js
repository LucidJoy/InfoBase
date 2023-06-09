/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["gateway.lighthouse.storage", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
