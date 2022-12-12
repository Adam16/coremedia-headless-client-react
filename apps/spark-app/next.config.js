/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/ssr' // config subpath point to this Next.js app. @see: https://nextjs.org/docs/migrating/incremental-adoption#strategies
}

module.exports = nextConfig
