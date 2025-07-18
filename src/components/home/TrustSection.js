'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo } from 'react';
import {
  FaShieldAlt,
  FaCertificate,
  FaGlobe,
  FaUsers,
  FaLock,
  FaRocket,
  FaClock
} from 'react-icons/fa';
import { HiSparkles, HiChartBarSquare } from 'react-icons/hi2';

export default function TrustSection() {
  const { t } = useLanguage();

  // Memoize trust metrics to prevent recreation on each render
  const trustMetrics = useMemo(() => [
    {
      icon: FaUsers,
      number: "200+",
      label: "Happy Clients",
      description: "Worldwide",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: FaGlobe,
      number: "50+",
      label: "Countries",
      description: "Global Reach",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: FaRocket,
      number: "500+",
      label: "Projects",
      description: "Delivered",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: FaClock,
      number: "99.9%",
      label: "Uptime",
      description: "Guaranteed",
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    }
  ], []);

  // Memoize certifications to prevent recreation on each render
  const certifications = useMemo(() => [
    {
      icon: FaShieldAlt,
      title: "ISO 27001",
      subtitle: "Certified",
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20"
    },
    {
      icon: FaLock,
      title: "SSL Secured",
      subtitle: "256-bit",
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20"
    },
    {
      icon: FaCertificate,
      title: "GDPR",
      subtitle: "Compliant",
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: HiChartBarSquare,
      title: "SOC 2",
      subtitle: "Type II",
      gradient: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20"
    }
  ], []);

  // Memoize industries to prevent recreation on each render
  const industries = useMemo(() => [
    "Sports Betting", "Online Casino", "Fantasy Sports", "Esports",
    "Live Streaming", "Payment Processing", "Data Analytics", "Mobile Gaming"
  ], []);

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 bg-theme-bg-primary relative overflow-hidden"
      aria-label="Trust indicators and industry credentials"
    >
      {/* Simplified background elements for better performance */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 sm:w-40 sm:h-40 bg-yellow-100/50 dark:bg-yellow-900/20 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <header className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-blue-200 dark:border-blue-800">
            <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Trusted Worldwide
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
            Trusted by <span className="text-blue-600 dark:text-blue-400">Industry Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
            Enterprise-grade security, compliance, and reliability trusted by companies worldwide
          </p>
        </header>

        {/* Trust Metrics */}
        <section className="mb-8 sm:mb-12" aria-label="Company metrics and achievements">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {trustMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <article
                  key={index}
                  className={`relative group ${metric.bgColor} rounded-lg p-3 sm:p-4 lg:p-6 text-center border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
                  tabIndex="0"
                  role="img"
                  aria-label={`${metric.number} ${metric.label}: ${metric.description}`}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${metric.gradient} rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-text-primary mb-1">
                    {metric.number}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-theme-text-secondary">
                    {metric.description}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Certifications & Security */}
        <section
          className="bg-theme-bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-theme-border mb-8 sm:mb-12"
          aria-label="Security certifications and compliance"
        >
          <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary text-center mb-4 sm:mb-6">
            Security & Compliance
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <article
                  key={index}
                  className={`relative group ${cert.bgColor} rounded-lg p-3 sm:p-4 text-center border border-theme-border group-hover:scale-105 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2`}
                  tabIndex="0"
                  role="img"
                  aria-label={`${cert.title} ${cert.subtitle} certification`}
                >
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto`}>
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-theme-text-primary">
                    {cert.title}
                  </div>
                  <div className="text-xs text-theme-text-secondary">
                    {cert.subtitle}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Industries Served */}
        <section className="text-center" aria-label="Industries we serve">
          <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary mb-4 sm:mb-6">
            Industries We Serve
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium rounded-full border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300"
                role="text"
                aria-label={`${industry} industry`}
              >
                {industry}
              </span>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}