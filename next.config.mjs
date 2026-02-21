/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "demo2.wpopal.com",
      },
      {
        protocol: "https",
        hostname: "static.cdnlogo.com",
      },
    ],
  },
};

export default nextConfig;