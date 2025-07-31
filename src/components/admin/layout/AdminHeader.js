'use client';

import { usePathname } from 'next/navigation';
import { useAdmin } from '@/components/admin/providers/AdminProvider';
import {
  Bars3Icon,
  BellIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

// Page titles mapping
const pageTitles = {
  '/admin/dashboard': 'Dashboard',
  '/admin/contact-requests': 'Contact Requests',
  '/admin/newsletter-subscribers': 'Newsletter Subscribers',
  '/admin/contact-info': 'Contact Information',
  '/admin/bulk-email': 'Bulk Email',
  '/admin/settings': 'Settings'
};

// Breadcrumb mappings
const breadcrumbs = {
  '/admin/dashboard': [{ name: 'Dashboard', href: '/admin/dashboard' }],
  '/admin/contact-requests': [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Contact Requests', href: '/admin/contact-requests' }
  ],
  '/admin/newsletter-subscribers': [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Newsletter Subscribers', href: '/admin/newsletter-subscribers' }
  ],
  '/admin/contact-info': [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Contact Information', href: '/admin/contact-info' }
  ],
  '/admin/bulk-email': [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Bulk Email', href: '/admin/bulk-email' }
  ],
  '/admin/settings': [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Settings', href: '/admin/settings' }
  ]
};

export default function AdminHeader({ onSidebarToggle }) {
  const pathname = usePathname();
  const { admin } = useAdmin();

  const currentTitle = pageTitles[pathname] || 'Admin Panel';
  const currentBreadcrumbs = breadcrumbs[pathname] || [];

  return (
    <div className="flex-1 px-4 flex justify-between items-center">
      {/* Left section - Mobile menu button and page title */}
      <div className="flex items-center">
        <button
          type="button"
          className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
          onClick={onSidebarToggle}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" />
        </button>

        <div className="flex flex-col justify-center ml-4 md:ml-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            {currentTitle}
          </h1>

          {/* Breadcrumbs */}
          {currentBreadcrumbs.length > 1 && (
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                {currentBreadcrumbs.map((item, index) => (
                  <li key={item.href}>
                    <div className="flex items-center">
                      {index > 0 && (
                        <svg
                          className="flex-shrink-0 h-3 w-3 text-gray-300 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      {index === currentBreadcrumbs.length - 1 ? (
                        <span className="font-medium text-gray-900">{item.name}</span>
                      ) : (
                        <a
                          href={item.href}
                          className="hover:text-gray-700 transition-colors duration-150"
                        >
                          {item.name}
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
      </div>

      {/* Right section - Notifications and user menu */}
      {/* <div className="ml-4 flex items-center md:ml-6 space-x-4">
        <button
          type="button"
          className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="hidden md:block text-right">
            <div className="text-sm font-medium text-gray-900">
              {typeof admin?.name === 'string' ? admin.name : (admin?.name?.name || 'Admin')}
            </div>
            <div className="text-xs text-gray-500 capitalize">
              {admin?.role?.replace('_', ' ')}
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">
                {(() => {
                  const name = typeof admin?.name === 'string' ? admin.name : (admin?.name?.name || 'Admin');
                  return name.charAt(0)?.toUpperCase() || 'A';
                })()}
              </span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}