/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  env: {
    WEATEHR_API_KEY: process.env.WEATEHR_API_KEY,
  },

  images: {
    domains: ["openweathermap.org"],
  },
};
