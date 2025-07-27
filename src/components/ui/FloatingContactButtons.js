'use client';
import Link from 'next/link';
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';
import { useContactInfo } from '@/contexts/ContactInfoContext';

const FloatingContactButtons = () => {
  const { t } = useLanguage();
  const { quickContact, loading } = useContactInfo();

  if (loading) {
    return null; // Don't show buttons while loading
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <Link
        href={quickContact.whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        aria-label={t('contact.whatsapp')}
        title={`WhatsApp: ${quickContact.displayWhatsApp}`}
      >
        <FaWhatsapp className="w-7 h-7" />
      </Link>

      {/* Telegram Button */}
      <Link
        href={quickContact.telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
        aria-label={t('contact.telegram')}
        title={`Telegram: ${quickContact.telegramLink}`}
      >
        <FaTelegramPlane className="w-7 h-7" />
      </Link>
    </div>
  );
};

export default FloatingContactButtons;