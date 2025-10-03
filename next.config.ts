import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants";
import type { NextConfig } from "next";
import withPWA from "@ducanh2912/next-pwa";

const isPWAEnabled =
  process.env.NEXT_PHASE === PHASE_DEVELOPMENT_SERVER ||
  process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

const config = isPWAEnabled
  ? withPWA({
      dest: "public",
      ...nextConfig,
    })
  : nextConfig;

export default config;
