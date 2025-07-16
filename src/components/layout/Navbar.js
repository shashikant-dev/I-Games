'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  const pathname = usePathname();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.whyUs'), href: '/why-us' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  const isActiveLink = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold text-theme-text-primary">
              iGames.cloud
              {/* <Image src="/light-mode-logo.svg" alt="iGames.cloud" width={200} height={120} /> */}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActiveLink(item.href)
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-theme-text-primary hover:bg-theme-bg-secondary hover:text-brand-primary'
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 p-2 rounded-lg hover:bg-theme-bg-secondary transition-colors duration-200"
          >
            {theme === 'dark' ? <HiSun className="h-6 w-6" /> : <HiMoon className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className=" border-[#dedede] md:hidden flex items-center space-x-2">
          {/* Language Switcher for Mobile */}
          <LanguageSwitcher />

          {/* Theme Toggle for Mobile */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg hover:bg-theme-bg-secondary transition-colors duration-200"
          >
            {theme === 'dark' ? <HiSun className="h-6 w-6" /> : <HiMoon className="h-6 w-6" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-button"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger Icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-theme-bg-primary border-t border-theme-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActiveLink(item.href)
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'text-theme-text-primary hover:bg-theme-bg-secondary hover:text-brand-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;