import { Inter } from 'next/font/google';
import './globals.css';
import ConditionalLayout from '@/components/layout/ConditionalLayout';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: 'iGames.cloud - Gaming & Sports Technology Solutions',
  description: 'Leading provider of gaming APIs, sports data, casino games, and betting platform development. Enterprise-grade solutions for 200+ companies worldwide.',
  keywords: 'gaming API, sports data, casino games, betting platform, fantasy sports, live scores, odds API',
  authors: [{ name: 'iGames.cloud' }],
  creator: 'iGames.cloud',
  publisher: 'iGames.cloud',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://igames.cloud'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'hi-IN': '/hi',
      'bn-BD': '/bn',
    },
  },
  openGraph: {
    title: 'iGames.cloud - Gaming & Sports Technology Solutions',
    description: 'Leading provider of gaming APIs, sports data, casino games, and betting platform development.',
    url: 'https://igames.cloud',
    siteName: 'iGames.cloud',
    images: [
      {
        url: '/hero-image.png',
        width: 1200,
        height: 630,
        alt: 'iGames.cloud - Gaming & Sports Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iGames.cloud - Gaming & Sports Technology Solutions',
    description: 'Leading provider of gaming APIs, sports data, casino games, and betting platform development.',
    images: ['/hero-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={inter.variable}
      suppressHydrationWarning
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
