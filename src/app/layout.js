import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContactButtons from '@/components/ui/FloatingContactButtons';
import ThemeProvider from '@/components/providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'iGames.cloud - Sports App Development',
  description: 'Premier Sports App Development Company - Elevate Your Digital Presence with our Cutting-Edge Sports Solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingContactButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
