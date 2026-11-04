import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'origin-when-cross-origin' }
];

const nextConfig: NextConfig = {
  // @ts-ignore - Next.js types might not be fully up to date for this property
  // Removed invalid turbopack key
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      { source: '/founder', destination: '/about/team', permanent: true },
      { source: '/blog', destination: '/articles', permanent: true },
      { source: '/blog/:path*', destination: '/articles', permanent: true },
      { source: '/post/:slug', destination: '/articles/:slug', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/previously-awarded-grants', destination: '/results', permanent: true },
      { source: '/client-recommendations', destination: '/case-studies', permanent: true },
      { source: '/grant-writing-consulting', destination: '/services/grant-writing', permanent: true },
      { source: '/partnering-with-gma', destination: '/partners', permanent: true },
      { source: '/specialty-services', destination: '/services', permanent: true },
      { source: '/department-of-defense', destination: '/industries/defense', permanent: true },
      { source: '/funding-identification-proposal-pre', destination: '/services/funding-identification', permanent: true },
      { source: '/broadband-grants', destination: '/industries/broadband', permanent: true },
      { source: '/tax-credit', destination: '/services/capital-strategy', permanent: true },
      { source: '/european-clients', destination: '/services', permanent: true },
      { source: '/about', destination: '/about/firm', permanent: true },
    ];
  },
};

export default nextConfig;
