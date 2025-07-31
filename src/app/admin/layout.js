'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Inter } from 'next/font/google';
import AdminProvider, { useAdmin } from '@/components/admin/providers/AdminProvider';
import AdminSidebar from '@/components/admin/layout/AdminSidebar';
import AdminHeader from '@/components/admin/layout/AdminHeader';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

function AdminLayoutContent({ children }) {
  const { isAuthenticated, loading } = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Allow access to login, forgot-password, and reset-password pages for unauthenticated users
  const publicAdminPages = ['/admin/login', '/admin/forgot-password', '/admin/reset-password'];
  const isPublicAdminPage = publicAdminPages.some(page => pathname?.startsWith(page));

  if (!isAuthenticated && !isPublicAdminPage) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated but on a public admin page, just render children (no sidebar/header)
  if (!isAuthenticated && isPublicAdminPage) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  // Authenticated users get the full admin layout
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Mobile sidebar - only shows on mobile when opened */}
      <div className="md:hidden">
        <AdminSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          isMobile={true}
        />
      </div>

      {/* Static sidebar for desktop - only shows on desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <AdminSidebar
            isOpen={true}
            onClose={() => {}}
            isMobile={false}
          />
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Header */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow-sm border-b border-gray-200">
          <AdminHeader onSidebarToggle={() => setSidebarOpen(true)} />
        </div>

        {/* Scrollable Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="pt-6 pb-12 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  return (
    <AdminProvider>
      <AdminLayoutContent>
        {children}
      </AdminLayoutContent>
    </AdminProvider>
  );
}