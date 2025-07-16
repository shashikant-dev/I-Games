'use client';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  FaRocket,
  FaEye,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
  FaTrophy,
  FaClock,
  FaServer,
  FaBrain,
  FaLock,
  FaUsers,
  FaCode,
  FaGlobe,
  FaChartLine,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';
import {
  HiSparkles,
  HiCpuChip,
  HiGlobeAlt,
  HiBolt,
  HiComputerDesktop
} from 'react-icons/hi2';

export default function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: <FaLightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      gradient: 'from-purple-500 to-indigo-600',
      bgPattern: 'from-purple-500/5 to-indigo-600/5'
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
      gradient: 'from-blue-500 to-cyan-600',
      bgPattern: 'from-blue-500/5 to-cyan-600/5'
    },
    {
      icon: <FaHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description'),
      gradient: 'from-green-500 to-emerald-600',
      bgPattern: 'from-green-500/5 to-emerald-600/5'
    },
    {
      icon: <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      gradient: 'from-yellow-500 to-orange-600',
      bgPattern: 'from-yellow-500/5 to-orange-600/5'
    }
  ];

  const techFeatures = [
    {
      icon: <FaClock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('about.technology.features.realtime.title'),
      description: t('about.technology.features.realtime.description'),
      accent: <HiBolt className="w-3 h-3 sm:w-4 sm:h-4" />
    },
    {
      icon: <FaServer className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('about.technology.features.scalable.title'),
      description: t('about.technology.features.scalable.description'),
      accent: <HiComputerDesktop className="w-3 h-3 sm:w-4 sm:h-4" />
    },
    {
      icon: <FaBrain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('about.technology.features.ai.title'),
      description: t('about.technology.features.ai.description'),
      accent: <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
    },
    {
      icon: <FaLock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: t('about.technology.features.secure.title'),
      description: t('about.technology.features.secure.description'),
      accent: <FaStar className="w-3 h-3 sm:w-4 sm:h-4" />
    }
  ];

  const stats = [
    {
      number: t('about.stats.clients.number'),
      label: t('about.stats.clients.label'),
      icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-blue-500 to-indigo-600',
      description: 'Trusted worldwide'
    },
    {
      number: t('about.stats.apis.number'),
      label: t('about.stats.apis.label'),
      icon: <FaCode className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-green-500 to-emerald-600',
      description: 'Comprehensive coverage'
    },
    {
      number: t('about.stats.uptime.number'),
      label: t('about.stats.uptime.label'),
      icon: <FaGlobe className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-purple-500 to-indigo-600',
      description: 'Reliable performance'
    },
    {
      number: t('about.stats.requests.number'),
      label: t('about.stats.requests.label'),
      icon: <FaChartLine className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-yellow-500 to-orange-600',
      description: 'Global scale'
    }
  ];

  return (
    <main className="pt-16 min-h-screen bg-theme-bg-primary">
      {/* Enhanced Hero Section - Mobile Optimized */}
      <section className="relative py-12 sm:py-20 lg:py-32 overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-[#FFD000]/10 to-[#FFF700]/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-54 sm:h-54 lg:w-72 lg:h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-[#3B82F6]/20 backdrop-blur-sm">
              <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-pulse" />
              <span className="font-semibold">Established 2005</span>
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full ml-2 sm:ml-3 animate-pulse"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-theme-text-primary mb-4 sm:mb-6 lg:mb-8 leading-tight px-4 sm:px-0">
              {t('about.hero.title')}{' '}
              <span className="relative block sm:inline">
                <span className="text-transparent bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] bg-clip-text animate-gradient bg-300% bg-left">
                  {t('about.hero.titleHighlight')}
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full opacity-30"></div>
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#3B82F6] dark:text-[#60A5FA] font-semibold mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-2 sm:px-0">
              {t('about.hero.subtitle')}
            </p>

            <div className="max-w-4xl mx-auto px-4 sm:px-0">
              <p className="text-base sm:text-lg lg:text-xl text-theme-text-secondary leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>

            {/* Floating Action Elements - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
              <div className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live & Active</span>
              </div>
              <div className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full border border-purple-500/20">
                <HiCpuChip className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Overview Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-theme-bg-secondary relative">
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg-primary/50 to-theme-bg-secondary"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <FaRocket className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Our Journey
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-text-primary mb-4 sm:mb-6 leading-tight">
                  {t('about.company.title')}
                </h2>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-theme-text-secondary leading-relaxed">
                {t('about.company.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <div className="flex items-center justify-center sm:justify-start bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <FaRocket className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm sm:text-base">{t('about.company.foundedLabel')} {t('about.company.foundedYear')}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold shadow-lg">
                  <FaStar className="w-4 h-4 sm:w-5 sm:h-5 mr-3" />
                  <span className="text-sm sm:text-base">19+ Years</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="relative group">
                {/* Enhanced image container with multiple layers - Mobile Optimized */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-2xl sm:rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#3B82F6]/30 to-[#60A5FA]/30 rounded-xl sm:rounded-2xl blur-md"></div>

                <div className="relative aspect-w-4 aspect-h-3 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <img
                    src="/assets/images/tech-innovation.jpg"
                    alt="iGames.cloud Innovation Hub"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating accent elements - Mobile Optimized */}
                <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-[#FFD000] to-[#FFF700] rounded-full flex items-center justify-center shadow-lg group-hover:rotate-180 transition-transform duration-700">
                  <HiSparkles className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-900" />
                </div>

                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <HiComputerDesktop className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg-secondary via-theme-bg-primary to-theme-bg-secondary"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <FaTrophy className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              What Drives Us
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-text-primary mb-4 sm:mb-6">
              {t('about.values.title')}
            </h2>
            <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                {/* Enhanced background effects */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgPattern} rounded-xl sm:rounded-2xl opacity-50`} />

                <div className="relative bg-theme-bg-secondary/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full border border-theme-border/50 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                  <div className="text-center">
                    {/* Enhanced icon container - Mobile Optimized */}
                    <div className={`relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r ${value.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div className={`absolute -inset-1 sm:-inset-2 bg-gradient-to-r ${value.gradient} rounded-xl sm:rounded-2xl opacity-20 blur-lg`}></div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary mb-3 sm:mb-4">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${value.gradient} rounded-full opacity-60`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technology & Innovation Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-theme-bg-secondary relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <HiCpuChip className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Cutting-Edge Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-text-primary mb-6 sm:mb-8">
              {t('about.technology.title')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-theme-text-secondary max-w-4xl mx-auto leading-relaxed">
              {t('about.technology.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

                <div className="relative bg-theme-bg-primary/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 h-full border border-theme-border/50 group-hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="text-[#3B82F6] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.accent}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-theme-text-primary mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress bar decoration */}
                  <div className="mt-4 sm:mt-6 w-full h-0.5 sm:h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 via-transparent to-[#60A5FA]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <FaChartLine className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-theme-text-primary">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />

                <div className="relative bg-theme-bg-secondary/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-theme-border/50 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                  {/* Enhanced icon with animation - Mobile Optimized */}
                  <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Enhanced number display - Mobile Optimized */}
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>

                  <p className="text-theme-text-primary font-semibold mb-1 sm:mb-2 text-base sm:text-lg">
                    {stat.label}
                  </p>

                  <p className="text-theme-text-secondary text-xs sm:text-sm opacity-75">
                    {stat.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full opacity-40"></div>
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-[#FFD000] to-[#FFF700] rounded-full opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#FFD000]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Ready to Innovate?
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              {t('about.cta.title')}
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
              {t('about.cta.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#3B82F6] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-sm sm:text-base"
            >
              <HiGlobeAlt className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              {t('about.cta.button')}
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#3B82F6] transition-all duration-300 text-sm sm:text-base"
            >
              <FaRocket className="w-4 h-4 sm:w-5 sm:h-5 mr-3 group-hover:-rotate-12 transition-transform duration-300" />
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}