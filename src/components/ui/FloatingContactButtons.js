'use client';
import Link from 'next/link';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { QUICK_CONTACT } from '@/constants/contacts';

const FloatingContactButtons = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Link
        href={QUICK_CONTACT.whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        aria-label={t('contact.whatsapp')}
        title={`WhatsApp: ${QUICK_CONTACT.displayWhatsApp}`}
      >
        <FaWhatsapp className="w-7 h-7" />
      </Link>

      {/* Telegram Button */}
      <Link
        href={QUICK_CONTACT.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        aria-label={t('contact.telegram')}
        title={`Telegram: ${QUICK_CONTACT.telegramLink}`}
      >
        <FaTelegramPlane className="w-7 h-7" />
      </Link>
    </div>
  );
};

export default FloatingContactButtons;