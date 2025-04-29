import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //  output: 'export',
  //  distDir: 'out',

   typescript: {
     ignoreBuildErrors: true,
   },
   eslint: {
     ignoreDuringBuilds: true,
   },
};

export default nextConfig;
