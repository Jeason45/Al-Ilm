import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/annexes', destination: '/apprendre', permanent: true },
      { source: '/annexes/:path*', destination: '/apprendre/:path*', permanent: true },
      { source: '/horaires', destination: '/pratique/priere', permanent: true },
      // Pages moved from annexes to pratique
      { source: '/apprendre/guide-pratique', destination: '/pratique/guide', permanent: true },
      { source: '/apprendre/ramadan', destination: '/pratique/ramadan', permanent: true },
      { source: '/apprendre/zakat', destination: '/pratique/zakat', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
    ];
  },
};

export default nextConfig;
