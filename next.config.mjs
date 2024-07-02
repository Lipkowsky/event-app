/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['utf-io'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
                port: ''
            }
        ]
    }
};

export default nextConfig;
