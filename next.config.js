/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['wildcardnft.infura-ipfs.io', 'infura-ipfs.io'],
  },
}

module.exports = nextConfig
