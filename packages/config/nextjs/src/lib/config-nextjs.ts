import type { NextConfig } from 'next';

export default {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
} as NextConfig;
