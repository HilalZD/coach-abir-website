/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    // Skip TypeScript errors during production build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint errors during production build
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
