'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo } from 'react';

const ServicesSection = () => {
  const { t } = useLanguage();

  // Memoize services to prevent recreation on each render
  const services = useMemo(() => [
    {
      title: t('offerings.items.webApp.title'),
      description: t('offerings.items.webApp.description'),
      icon: '/assets/images/globe.svg',
      alt: 'Web application development icon'
    },
    {
      title: t('offerings.items.gameApp.title'),
      description: t('offerings.items.gameApp.description'),
      icon: '/assets/images/window.svg',
      alt: 'Game application development icon'
    },
    {
      title: t('offerings.items.fantasyApp.title'),
      description: t('offerings.items.fantasyApp.description'),
      icon: '/assets/images/file.svg',
      alt: 'Fantasy application development icon'
    }
  ], [t]);

  return (
    <section
      className="py-16 sm:py-20 bg-theme-bg-primary relative"
      aria-label="Our core service offerings"
    >
      {/* Simplified background gradient for better performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-theme-bg-primary to-theme-bg-primary dark:from-blue-950/30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text-primary mb-4">
            {t('offerings.title')}
            <span className="text-blue-600 dark:text-blue-400"> {t('offerings.titleHighlight')}</span>
          </h2>
          <p className="text-theme-text-secondary text-base sm:text-lg max-w-3xl mx-auto">
            {t('offerings.description')}
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, alt, index }) => {
  return (
    <article
      className="group relative focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 rounded-xl"
      tabIndex="0"
      role="button"
      aria-label={`${title} service offering`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Simplified glow effect for better performance */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      <div className="relative bg-theme-bg-secondary/90 backdrop-blur-sm border border-theme-border rounded-xl p-6 sm:p-8 h-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:border-blue-500/50 group-hover:shadow-lg">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
          <Image
            src={icon}
            alt={alt}
            width={64}
            height={64}
            className="relative z-10 transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            sizes="64px"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-theme-text-primary mb-3 sm:mb-4">
            {title}
          </h3>
          <p className="text-theme-text-secondary text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ServicesSection;