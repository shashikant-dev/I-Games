'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationCircle
} from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";

import {
  IoGameController,
  IoStatsChart,
  IoCash,
  IoDesktop
} from 'react-icons/io5';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_INFO, QUICK_CONTACT } from '@/constants/contacts';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState(''); // 'loading', 'success', 'error'
  const [newsletterMessage, setNewsletterMessage] = useState('');

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter your email address');
      return;
    }

    setNewsletterStatus('loading');
    setNewsletterMessage('');

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewsletterStatus('success');
        setNewsletterMessage('Thank you for subscribing!');
        setNewsletterEmail('');
      } else {
        setNewsletterStatus('error');
        setNewsletterMessage(data.error || 'Subscription failed. Please try again.');
      }
    } catch (error) {
      setNewsletterStatus('error');
      setNewsletterMessage('Network error. Please try again.');
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      setNewsletterStatus('');
      setNewsletterMessage('');
    }, 5000);
  };

  const footerSections = {
    services: [
      { name: t('footer.links.liveScoresApi'), href: '#' },
      { name: t('footer.links.bettingPlatform'), href: '#' },
      { name: t('footer.links.casinoGames'), href: '#' },
      { name: t('footer.links.whiteLabelSolutions'), href: '#' }
    ],
    company: [
      { name: t('footer.links.aboutUs'), href: '/about' },
      { name: t('footer.links.whyChooseUs'), href: '/why-us' },
      { name: t('footer.links.contact'), href: '/contact' },
      { name: 'Our Services', href: '/services' }
    ],
    support: [
      { name: t('footer.links.helpCenter'), href: '#' },
      { name: t('footer.links.apiDocs'), href: '#' },
      { name: t('footer.links.support'), href: '#' },
      { name: t('footer.links.faq'), href: '#' }
    ],
    legal: [
      { name: t('footer.links.privacyPolicy'), href: '/privacy-policy' },
      { name: t('footer.links.termsOfService'), href: '/terms-of-service' },
      { name: t('footer.links.security'), href: '/security' },
      { name: t('footer.links.compliance'), href: '/compliance' }
    ]
  };

  const socialLinks = [
          { name: 'Facebook', href: CONTACT_INFO.links.facebook, icon: <FaFacebookF />, color: 'hover:text-blue-600 dark:hover:text-blue-400' },
          { name: 'Twitter', href: CONTACT_INFO.links.twitter, icon: <BsTwitterX />, color: 'hover:text-black-400 dark:hover:text-black-300' },
      { name: 'LinkedIn', href: CONTACT_INFO.links.linkedin, icon: <FaLinkedinIn />, color: 'hover:text-blue-700 dark:hover:text-blue-500' },
          { name: 'Instagram', href: CONTACT_INFO.links.instagram, icon: <FaInstagram />, color: 'hover:text-pink-600 dark:hover:text-pink-400' },
          { name: 'Telegram', href: QUICK_CONTACT.telegramLink, icon: <FaTelegramPlane />, color: 'hover:text-blue-500 dark:hover:text-blue-300' },
      { name: 'WhatsApp', href: QUICK_CONTACT.whatsappLink, icon: <FaWhatsapp />, color: 'hover:text-green-500 dark:hover:text-green-400' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Section - Company Info & Newsletter */}
        <div className="mb-8">

          {/* Newsletter Section - Mobile Optimized */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg text-[#3B82F6] dark:text-[#60A5FA] mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Get the latest updates on our APIs and gaming solutions
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t('footer.social.newsletter.placeholder')}
                  disabled={newsletterStatus === 'loading'}
                  className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'loading'}
                  className="px-6 py-3 bg-[#3B82F6] dark:bg-[#60A5FA] text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors text-sm font-medium whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {newsletterStatus === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Subscribing...
                    </>
                  ) : (
                    t('footer.social.newsletter.subscribe')
                  )}
                </button>
              </div>

              {/* Status Message */}
              {newsletterMessage && (
                <div className={`mt-3 p-3 rounded-lg text-sm flex items-center gap-2 ${
                  newsletterStatus === 'success'
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                }`}>
                  {newsletterStatus === 'success' ? (
                    <FaCheckCircle className="w-4 h-4" />
                  ) : (
                    <FaExclamationCircle className="w-4 h-4" />
                  )}
                  {newsletterMessage}
                </div>
              )}
            </form>
          </div>

          {/* Contact Information - Mobile Optimized */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-600">
            <h3 className="font-semibold text-lg text-[#3B82F6] dark:text-[#60A5FA] mb-4 text-center sm:text-left">
              {t('footer.contact.getInTouch')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center justify-center sm:justify-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <FaEnvelope className="w-4 h-4 text-[#3B82F6] dark:text-[#60A5FA] flex-shrink-0" />
                <Link
                  href={`mailto:${t('footer.contact.email')}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] text-sm font-medium"
                >
                  {t('footer.contact.email')}
                </Link>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                <FaPhone className="w-4 h-4 text-[#3B82F6] dark:text-[#60A5FA] flex-shrink-0" />
                <Link
                  href={`tel:${t('footer.contact.phone')}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] text-sm font-medium"
                >
                  {t('footer.contact.phone')}
                </Link>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg sm:col-span-2 lg:col-span-1">
                <FaMapMarkerAlt className="w-4 h-4 text-[#3B82F6] dark:text-[#60A5FA] flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm font-medium text-center sm:text-left">
                  {t('footer.contact.address')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section - Mobile Optimized Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Services */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base sm:text-lg text-[#3B82F6] dark:text-[#60A5FA] mb-3">
              {t('footer.sections.services')}
            </h3>
            <ul className="space-y-2">
              {footerSections.services.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base sm:text-lg text-[#3B82F6] dark:text-[#60A5FA] mb-3">
              {t('footer.sections.company')}
            </h3>
            <ul className="space-y-2">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base sm:text-lg text-[#3B82F6] dark:text-[#60A5FA] mb-3">
              {t('footer.sections.support')}
            </h3>
            <ul className="space-y-2">
              {footerSections.support.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors block py-1"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="font-semibold text-base sm:text-lg text-[#3B82F6] dark:text-[#60A5FA] mb-3">
              {t('footer.sections.legal')}
            </h3>
            <ul className="space-y-2">
              {footerSections.legal.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors block py-1"
                    target={item.target || '_self'}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Section - Mobile Optimized */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
          <div className="text-center">
            <h3 className="font-semibold text-base sm:text-lg text-[#3B82F6] dark:text-[#60A5FA] mb-4">
              {t('footer.social.followUs')}
            </h3>
            <div className="flex justify-center space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.color} hover:scale-110 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-600`}
                  aria-label={social.name}
                >
                  <span className="text-sm sm:text-base">
                    {social.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="text-center space-y-3">
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} iGames.cloud. {t('footer.copyright')}
            </p>

            {/* Badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-gray-500 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{t('footer.badges.licensed')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>{t('footer.badges.certified')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;