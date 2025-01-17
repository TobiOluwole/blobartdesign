import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  env:{
    // BACKEND_URL:'http://192.168.129.235:8000',
    // BASE_URL:'http://192.168.129.235:8000/api/',
    BACKEND_URL:'http://localhost:8000',
    BASE_URL:'http://localhost:8000/api/',
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true
  }

};

export default nextConfig;
