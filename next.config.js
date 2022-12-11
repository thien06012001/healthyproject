/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}
