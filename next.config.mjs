/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: [process.env.NEXT_PUBLIC_HOST], // Allow images from localhost
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kenalidiriapi.azurewebsites.net',
                port: '',
                pathname: '/Images/**',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '7237',
                pathname: '/Images/**',
                search: '',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5215',
                pathname: '/Images/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
