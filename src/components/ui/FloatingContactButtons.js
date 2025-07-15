'use client';
import Link from 'next/link';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingContactButtons = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/15551234567" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        aria-label={t('contact.whatsapp')}
      >
        <FaWhatsapp className="w-7 h-7" />
      </Link>

      {/* Telegram Button */}
      <Link
        href="https://t.me/yourusername" // Replace with your Telegram username
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        aria-label={t('contact.telegram')}
      >
        <FaTelegramPlane className="w-7 h-7" />
      </Link>

      {/* Tooltip for mobile - optional */}
      <div className="hidden lg:block absolute right-16 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
          Contact us instantly
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingContactButtons;