import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ebrflv1h4e.ufs.sh",
        port: "",
        pathname: "/f/**"
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**"
      }
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
};

export default nextConfig;