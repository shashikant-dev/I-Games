'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import LanguageMeta from '@/components/providers/LanguageMeta';
import FloatingContactButtons from '@/components/ui/FloatingContactButtons';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    // Admin routes - minimal layout, no main website components
    return (
      <div className="bg-gray-50 min-h-screen">
        {children}
      </div>
    );
  }

  // Public routes - full website layout
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LanguageMeta />
        <div className="min-h-screen flex flex-col bg-theme-bg-primary text-theme-text-primary">
          <Navbar />
          <main
            id="main-content"
            className="flex-1"
            role="main"
            tabIndex="-1"
          >
            {children}
          </main>
          <Footer />
          <FloatingContactButtons />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
} 