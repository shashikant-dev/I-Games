'use client';

import { useState, Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useAdmin } from '@/components/admin/providers/AdminProvider';
import { Dialog, Transition } from '@headlessui/react';
import {
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  PhoneIcon,
  PaperAirplaneIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  XMarkIcon,
  ChevronRightIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Contact Requests', href: '/admin/contact-requests', icon: ChatBubbleBottomCenterTextIcon },
  { name: 'Newsletter Subscribers', href: '/admin/newsletter-subscribers', icon: UserGroupIcon },
  { name: 'Update Contact Info', href: '/admin/contact-info', icon: PhoneIcon },
  { name: 'Blog Management', href: '/admin/blog', icon: DocumentTextIcon },
  // { name: 'Bulk Email', href: '/admin/bulk-email', icon: PaperAirplaneIcon },
  { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
];

function SidebarContent({ onClose, isMobile }) {
  const pathname = usePathname();
  const { admin, logout } = useAdmin();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await logout();
    if (onClose && isMobile) onClose();
  };

  const handleNavClick = () => {
    if (onClose && isMobile) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo and company info */}
      <div className="flex items-center h-16 flex-shrink-0 px-4 bg-blue-600">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">iG</span>
              {/* <Image src="/assets/images/light-mode-logo.svg" alt="iGames Logo" width={100} height={100} /> */}
            </div>
          </div>
          <div className="ml-3">
            <div className="text-white font-semibold text-lg">iGames Admin</div>
            <div className="text-blue-200 text-xs">Management Portal</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-white space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors duration-150 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <item.icon
                  className={`mr-3 flex-shrink-0 h-5 w-5 transition-colors duration-150 ${
                    isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
                {item.name}
                {isActive && (
                  <ChevronRightIcon className="ml-auto h-4 w-4 text-blue-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User info and logout */}
        <div className="flex-shrink-0 border-t border-gray-200 p-4 bg-gray-50">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">
                  {(() => {
                    const name = typeof admin?.name === 'string' ? admin.name : (admin?.name?.name || 'Admin');
                    return name.charAt(0)?.toUpperCase() || 'A';
                  })()}
                </span>
              </div>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-700 truncate">
                {typeof admin?.name === 'string' ? admin.name : (admin?.name?.name || 'Admin')}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {admin?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="mt-3 w-full group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150 disabled:opacity-50"
          >
            <ArrowRightOnRectangleIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
            {isLoggingOut ? 'Signing out...' : 'Sign out'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminSidebar({ isOpen, onClose, isMobile }) {
  if (isMobile) {
    return (
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={onClose}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" />
                  </button>
                </div>
              </Transition.Child>

              <SidebarContent onClose={onClose} isMobile={true} />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      <SidebarContent onClose={onClose} isMobile={false} />
    </div>
  );
}