/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    // Enables the styled-components SWC transform
    
  }
}

module.exports = nextConfig
