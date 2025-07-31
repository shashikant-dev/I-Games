/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'hi', 'bn'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
