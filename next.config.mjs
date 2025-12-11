/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'CardlyAI.dev',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Disable Next.js Dev Toolbar in development builds
    if (!isServer && process.env.NODE_ENV === 'development') {
      config.devtool = false;
    }
    return config;
  },
}

export default nextConfig