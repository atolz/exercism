/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "d24y9kuxp2d7l2.cloudfront.net",
      "dg8krxphbh767.cloudfront.net",
      "avatars.githubusercontent.com",
      "avatars1.githubusercontent.com",
      "avatars0.githubusercontent.com",
      "avatars2.githubusercontent.com",
      "avatars3.githubusercontent.com",
      "exercism.org",
    ],
  },
};

module.exports = nextConfig;
