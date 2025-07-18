'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      number: 19,
      label: t('stats.items.years'),
      suffix: '',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-indigo-500',
      description: 'Years of industry experience'
    },
    {
      number: 120,
      label: t('stats.items.professionals'),
      suffix: '+',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-blue-600',
      description: 'Professional developers and experts'
    },
    {
      number: 200,
      label: t('stats.items.games'),
      suffix: '+',
      gradientFrom: 'from-green-500',
      gradientTo: 'to-green-600',
      description: 'Games and applications delivered'
    }
  ];

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 bg-theme-bg-primary relative overflow-hidden"
      aria-label="Company statistics and achievements"
    >
      {/* Simplified background gradient for better performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-theme-bg-primary to-theme-bg-primary dark:from-blue-950/50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text-primary mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-theme-text-secondary text-base sm:text-lg max-w-3xl mx-auto">
            {t('stats.description')}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, suffix, gradientFrom, gradientTo, description, index }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);

  // Optimized animation function with useCallback
  const animateValue = useCallback((start, end, duration) => {
    if (hasAnimated) return; // Prevent re-animation

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setHasAnimated(true);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          // Stagger animation for better UX
          const delay = index * 200;
          setTimeout(() => {
            animateValue(0, number, 2000);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [animateValue, number, hasAnimated, index]);

  return (
    <article
      ref={countRef}
      className="relative group focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 rounded-xl"
      tabIndex="0"
      role="img"
      aria-label={`${number}${suffix} ${label}: ${description}`}
    >
      {/* Simplified glow effect for better performance */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />

      {/* Main card */}
      <div className="relative bg-theme-bg-secondary/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 h-full transition-all duration-300 group-hover:scale-[1.02] border border-theme-border">
        {/* Content */}
        <div className="text-center">
          <div className="flex items-baseline justify-center gap-1 mb-3">
            <span
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
              aria-hidden="true"
            >
              {count}
            </span>
            <span
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
              aria-hidden="true"
            >
              {suffix}
            </span>
          </div>
          <h3 className="text-theme-text-secondary text-sm sm:text-base lg:text-lg font-medium">
            {label}
          </h3>
          <p className="text-theme-text-secondary/70 text-xs sm:text-sm mt-2">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default StatsSection;