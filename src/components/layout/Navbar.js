'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi2';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Why Us?', href: '/why-us' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold text-theme-text-primary">
              iGames.cloud
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}

          {/* Contact Us Button */}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 rounded-lg bg-brand-primary text-white
                     hover:bg-brand-primary-light transition-colors duration-200"
          >
            Contact us
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 p-2 rounded-lg hover:bg-theme-bg-secondary transition-colors duration-200"
          >
            {theme === 'dark' ? <HiSun className="h-6 w-6" /> : <HiMoon className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
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
                className="nav-link block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full text-center mt-4 px-4 py-2 rounded-lg
                       bg-brand-primary text-white hover:bg-brand-primary-light
                       transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;