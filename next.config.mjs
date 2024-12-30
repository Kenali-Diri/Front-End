/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_HOST], // Allow images from localhost
    },
};

export default nextConfig;
