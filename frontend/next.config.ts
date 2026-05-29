import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

module.exports = {
  allowedDevOrigins: ['http://172.23.118.83:8000', '172.23.118.83'],
}

export default nextConfig;
