/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  experimental: {
    // esmExternals: 'loose', // 👈 Add this to handle ESM packages like date-fns - Note: i commented this code because it was showing warning error
  },
};

export default nextConfig;
