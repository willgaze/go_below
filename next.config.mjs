/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Underground photography is dark and detailed; these widths cover the
    // full-bleed architectural plates without shipping a 4K file to a phone.
    deviceSizes: [420, 640, 828, 1080, 1280, 1920, 2560],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  poweredByHeader: false,
}
export default nextConfig
