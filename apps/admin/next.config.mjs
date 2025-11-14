/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  transpilePackages: ["@triggerfeed/ui", "@triggerfeed/theme"],
  webpack: (config) => {
    config.infrastructureLogging = { level: "error" };
    return config;
  }
};

export default nextConfig;