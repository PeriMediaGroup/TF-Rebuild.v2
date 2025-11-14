/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  webpack: (config) => {
    config.infrastructureLogging = { level: "error" };
    return config;
  }
};

export default nextConfig;
