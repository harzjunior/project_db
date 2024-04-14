/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Matches any path starting with /api/
        destination: "http://localhost:3000/api/:path*", // Forwards the request to your Express server
      },
    ];
  },
};

export default nextConfig;
