/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['blog.adaptimmo.com', 'upload.wikimedia.org', 'cdn-cf.ginx.tv'],
  },
};

module.exports = nextConfig;
