/** @type {import('next').NextConfig} */

const caasDestPath = process.env.VITE_API_ENDPOINT || "http://localhost:4000";

// alternative: https://github.com/stegano/next-http-proxy-middleware
async function rewrites() {
  return [
    {
      source: "/caas",
      destination: `${caasDestPath}`,
    },
  ];
}

/**
 * App configuration
 * config subpath point to this Next.js app. @see: https://nextjs.org/docs/migrating/incremental-adoption#strategies
 * rewrites for caas
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: '/ssr',
  rewrites,
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
