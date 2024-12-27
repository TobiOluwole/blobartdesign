import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  env:{
    BACKEND_URL:'http://localhost:8000',
    BASE_URL:'http://localhost:8000/api/',
  },

};

export default nextConfig;
