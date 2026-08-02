/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // If you want a fully static HTML export (no server needed at all),
  // uncomment the line below and set images.unoptimized to true above.
  // output: "export",
};

module.exports = nextConfig;
