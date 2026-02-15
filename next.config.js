/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  basePath: '/personal-website', // GitHub Pages base path
  assetPrefix: '/personal-website/', // For correct asset loading
}

module.exports = nextConfig
