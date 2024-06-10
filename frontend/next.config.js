const { withContentlayer } = require('next-contentlayer');

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  dynamicStartUrl: true,
  reloadOnOnline: true,
  scope: '/',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
    ],
  },
  // output: "standalone",
};

const App = withContentlayer(nextConfig);
module.exports = withPWA(App);
