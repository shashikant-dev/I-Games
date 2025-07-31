'use client';

import { useState } from 'react';
import { useAdmin } from '@/components/admin/providers/AdminProvider';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout({ children }) {
  const { isAuthenticated, loading } = useAdmin();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Redirect will be handled by AdminProvider, but show loading state
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar for mobile */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isMobile={true}
      />

      {/* Static sidebar for desktop */}
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
      <div className="flex-1 overflow-hidden">
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white shadow-sm border-b border-gray-200">
          <AdminHeader onSidebarToggle={() => setSidebarOpen(true)} />
        </div>

        {/* Page content */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none" style={{ minHeight: '0' }}>
          <div className="py-6 px-4 sm:px-6 lg:px-8 min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}