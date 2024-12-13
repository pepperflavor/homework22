import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "specials-images.forbesimg.com/imageserve",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "specials-images.forbesimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

//specials-images.forbesimg.com
