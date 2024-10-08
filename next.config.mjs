/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'godotengine.org',
        port: '',
        pathname: '/storage/blog/covers/**',
      },
      {
        protocol: 'https',
        hostname: 'godotengine.org',
        port: '',
        pathname: '/assets/*/**',
      },
    ],
  },
};

export default nextConfig;
