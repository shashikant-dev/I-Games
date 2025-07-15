/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'hi', 'bn'],
    defaultLocale: 'en',
    localeDetection: true,
  },
};

export default nextConfig;
