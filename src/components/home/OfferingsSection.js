'use client';

import { HiGlobeAlt } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';
import { MdSports } from 'react-icons/md';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OfferingsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      number: '19',
      label: t('stats.items.years'),
      gradient: 'from-purple-400/20 to-purple-600/20',
      textColor: 'text-purple-600'
    },
    {
      number: '120+',
      label: t('stats.items.professionals'),
      gradient: 'from-blue-400/20 to-green-400/20',
      textColor: 'text-blue-500'
    },
    {
      number: '200+',
      label: t('stats.items.games'),
      gradient: 'from-orange-400/20 to-red-400/20',
      textColor: 'text-orange-500'
    }
  ];

  const offerings = [
    {
      icon: <HiGlobeAlt className="w-12 h-12" />,
      title: t('offerings.items.webAppShort.title'),
      description: t('offerings.items.webAppShort.description')
    },
    {
      icon: <IoGameController className="w-12 h-12" />,
      title: t('offerings.items.gameAppShort.title'),
      description: t('offerings.items.gameAppShort.description')
    },
    {
      icon: <MdSports className="w-12 h-12" />,
      title: t('offerings.items.fantasyAppShort.title'),
      description: t('offerings.items.fantasyAppShort.description')
    }
  ];

  return (
    <div className="relative bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t('offerings.title')}{' '}
            <span className="text-[#3B82F6]">{t('offerings.titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('offerings.description')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-8
                         bg-gradient-to-br ${stat.gradient}
                         backdrop-blur-sm transition-all duration-300
                         hover:shadow-lg`}
            >
              <div className="relative z-10">
                <div className={`text-5xl font-bold mb-2 ${stat.textColor}`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-white dark:bg-gray-800
                         border border-gray-100 dark:border-gray-700
                         hover:shadow-xl transition-all duration-300
                         group"
            >
              <div className="text-[#3B82F6] mb-4 transition-transform duration-300
                            group-hover:scale-110">
                {offering.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {offering.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}