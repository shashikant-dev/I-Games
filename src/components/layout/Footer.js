'use client';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';
import {
  IoGameController,
  IoStatsChart,
  IoCash,
  IoDesktop
} from 'react-icons/io5';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerSections = {
    services: [
      { name: t('footer.links.liveScoresApi'), href: '/services/live-scores' },
      { name: t('footer.links.bettingPlatform'), href: '/services/betting-platform' },
      { name: t('footer.links.casinoGames'), href: '/services/casino-games' },
      { name: t('footer.links.whiteLabelSolutions'), href: '/services/white-label' }
    ],
    company: [
      { name: t('footer.links.aboutUs'), href: '/about' },
      { name: t('footer.links.whyChooseUs'), href: '/why-us' },
      { name: t('footer.links.contact'), href: '/contact' },
      { name: t('footer.links.careers'), href: '/careers' }
    ],
    support: [
      { name: t('footer.links.helpCenter'), href: '/help' },
      { name: t('footer.links.apiDocs'), href: '/docs' },
      { name: t('footer.links.support'), href: '/support' },
      { name: t('footer.links.faq'), href: '/faq' }
    ],
    legal: [
      { name: t('footer.links.privacyPolicy'), href: '/privacy' },
      { name: t('footer.links.termsOfService'), href: '/terms' },
      { name: t('footer.links.security'), href: '/security' },
      { name: t('footer.links.compliance'), href: '/compliance' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: <FaFacebookF />, color: 'hover:text-blue-600 dark:hover:text-blue-400' },
    { name: 'Twitter', href: '#', icon: <FaTwitter />, color: 'hover:text-blue-400 dark:hover:text-blue-300' },
    { name: 'LinkedIn', href: '#', icon: <FaLinkedinIn />, color: 'hover:text-blue-700 dark:hover:text-blue-500' },
    { name: 'Instagram', href: '#', icon: <FaInstagram />, color: 'hover:text-pink-600 dark:hover:text-pink-400' },
    { name: 'Telegram', href: '#', icon: <FaTelegramPlane />, color: 'hover:text-blue-500 dark:hover:text-blue-300' },
    { name: 'WhatsApp', href: '#', icon: <FaWhatsapp />, color: 'hover:text-green-500 dark:hover:text-green-400' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-3">
              <span className="text-xl sm:text-2xl font-bold text-[#3B82F6] dark:text-[#60A5FA]">
                iGames.cloud
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4 text-[#3B82F6] dark:text-[#60A5FA]" />
                <Link href={`mailto:${t('footer.contact.email')}`} className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA]">
                  {t('footer.contact.email')}
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4 text-[#3B82F6] dark:text-[#60A5FA]" />
                <Link href={`tel:${t('footer.contact.phone')}`} className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA]">
                  {t('footer.contact.phone')}
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 text-[#3B82F6] dark:text-[#60A5FA]">{t('footer.sections.services')}</h3>
            <ul className="space-y-2">
              {footerSections.services.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 text-[#3B82F6] dark:text-[#60A5FA]">{t('footer.sections.company')}</h3>
            <ul className="space-y-2">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3 text-[#3B82F6] dark:text-[#60A5FA]">{t('footer.sections.support')}</h3>
            <ul className="space-y-2">
              {footerSections.support.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 text-[#3B82F6] dark:text-[#60A5FA]">{t('footer.sections.legal')}</h3>
            <ul className="space-y-2">
              {footerSections.legal.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-900 dark:text-white">{t('footer.social.followUs')}</span>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-8 h-8 bg-gray-200 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder={t('footer.social.newsletter.placeholder')}
                className="px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm w-48"
              />
              <button className="px-4 py-2 bg-[#3B82F6] dark:bg-[#60A5FA] text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors text-sm font-medium">
                {t('footer.social.newsletter.subscribe')}
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs text-gray-500 dark:text-gray-400 space-y-2 sm:space-y-0">
              <p>&copy; {currentYear} iGames.cloud. {t('footer.copyright')}</p>
              <div className="flex space-x-4">
                <span>{t('footer.badges.licensed')}</span>
                <span>•</span>
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