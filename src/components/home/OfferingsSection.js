'use client';

import { HiGlobeAlt } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';
import { MdSports } from 'react-icons/md';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo } from 'react';

export default function OfferingsSection() {
  const { t } = useLanguage();

  // Memoize stats to prevent recreation on each render
  const stats = useMemo(() => [
    {
      number: '19',
      label: t('stats.items.years'),
      gradient: 'from-purple-400 to-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      description: 'Years of industry expertise'
    },
    {
      number: '120+',
      label: t('stats.items.professionals'),
      gradient: 'from-blue-400 to-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      description: 'Expert professionals in our team'
    },
    {
      number: '200+',
      label: t('stats.items.games'),
      gradient: 'from-green-400 to-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      description: 'Games and applications delivered'
    }
  ], [t]);

  // Memoize offerings to prevent recreation on each render
  const offerings = useMemo(() => [
    {
      icon: HiGlobeAlt,
      title: t('offerings.items.webAppShort.title'),
      description: t('offerings.items.webAppShort.description'),
      ariaLabel: 'Web application development services'
    },
    {
      icon: IoGameController,
      title: t('offerings.items.gameAppShort.title'),
      description: t('offerings.items.gameAppShort.description'),
      ariaLabel: 'Game application development services'
    },
    {
      icon: MdSports,
      title: t('offerings.items.fantasyAppShort.title'),
      description: t('offerings.items.fantasyAppShort.description'),
      ariaLabel: 'Fantasy sports application development services'
    }
  ], [t]);

  return (
    <section
      className="relative bg-white dark:bg-gray-900 py-12 sm:py-16"
      aria-label="Company offerings and statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('offerings.title')}{' '}
            <span className="text-[#3B82F6]">{t('offerings.titleHighlight')}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('offerings.description')}
          </p>
        </header>

        {/* Stats Section */}
        <section className="mb-12 sm:mb-16" aria-label="Company statistics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <article
                key={index}
                className={`relative overflow-hidden rounded-xl sm:rounded-2xl p-6 sm:p-8 ${stat.bgColor} transition-all duration-300 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
                tabIndex="0"
                role="img"
                aria-label={`${stat.number} ${stat.label}: ${stat.description}`}
              >
                <div className="relative z-10 text-center">
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${stat.textColor}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1 opacity-75">
                    {stat.description}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Offerings Grid */}
        <section aria-label="Service offerings">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {offerings.map((offering, index) => {
              const IconComponent = offering.icon;
              return (
                <article
                  key={index}
                  className="relative p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                  tabIndex="0"
                  role="button"
                  aria-label={offering.ariaLabel}
                >
                  <div
                    className="text-[#3B82F6] mb-4 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <IconComponent className="w-10 h-10 sm:w-12 sm:h-12" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    {offering.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}