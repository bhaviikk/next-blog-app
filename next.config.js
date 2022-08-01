/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['localhost','bt-strapi-blog-api.herokuapp.com'],
    },
};

module.exports = nextConfig;
