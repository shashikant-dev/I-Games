import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'iGames.cloud - Sports App Development',
  description: 'Premier Sports App Development Company - Elevate Your Digital Presence with our Cutting-Edge Sports Solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
