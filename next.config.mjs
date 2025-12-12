/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
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
