'use client';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { HiChevronDown, HiGlobeAlt } from 'react-icons/hi2';

const LanguageSwitcher = () => {
  const { languages, currentLanguage, changeLanguage, getCurrentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = getCurrentLanguage();

  // Create a mapping for language codes to short display names
  const getShortLanguageName = (lang) => {
    const shortNames = {
      'en': 'EN',
      'hi': 'हिं',
      'bn': 'বাং'
    };
    return shortNames[lang.code] || lang.code.toUpperCase();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-theme-bg-secondary transition-colors duration-200 text-theme-text-primary min-w-[80px] sm:min-w-[120px]"
        aria-label="Change language"
      >
        <HiGlobeAlt className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />

        {/* Mobile: Show abbreviated version */}
        <span className="text-xs sm:hidden font-medium">
          {getShortLanguageName(currentLang)}
        </span>

        {/* Desktop: Show full name */}
        <span className="text-sm font-medium hidden sm:inline">
          {currentLang.nativeName}
        </span>

        <HiChevronDown
          className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full px-3 sm:px-4 py-2 text-left text-sm transition-colors duration-200 ${
                  currentLanguage === language.code
                    ? 'bg-[#3B82F6] text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    {/* Mobile: Show abbreviated + full name */}
                    <div className="sm:hidden">
                      <div className="font-medium text-xs truncate">
                        {getShortLanguageName(language)} - {language.nativeName}
                      </div>
                      <div className="text-xs opacity-75 truncate">{language.name}</div>
                    </div>

                    {/* Desktop: Show full details */}
                    <div className="hidden sm:block">
                    <div className="font-medium">{language.nativeName}</div>
                    <div className="text-xs opacity-75">{language.name}</div>
                    </div>
                  </div>
                  {currentLanguage === language.code && (
                    <div className="w-2 h-2 bg-current rounded-full ml-2 flex-shrink-0"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;