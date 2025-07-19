'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  FaCode,
  FaDesktop,
  FaMobile,
  FaDice,
  FaTrophy,
  FaChartLine,
  FaShieldAlt,
  FaHeadset,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaPlay,
  FaGamepad,
  FaFootballBall,
  FaLaptopCode,
  FaUserTie,
  FaCloudUploadAlt,
  FaCogs,
  FaLightbulb,
  FaProjectDiagram,
  FaServer,
  FaUsers,
  FaClock,
  FaStar
} from 'react-icons/fa';
import {
  HiSparkles,
  HiGlobeAlt,
  HiCpuChip,
  HiBolt,
  HiChartBarSquare,
  HiShieldCheck
} from 'react-icons/hi2';

export default function Services() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    {
      key: 'all',
      icon: <HiGlobeAlt className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: t('servicesPage.categories.all')
    },
    {
      key: 'api',
      icon: <FaCode className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: t('servicesPage.categories.api')
    },
    {
      key: 'development',
      icon: <FaDesktop className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: t('servicesPage.categories.development')
    },
    {
      key: 'casino',
      icon: <FaDice className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: t('servicesPage.categories.casino')
    },
    {
      key: 'sports',
      icon: <FaFootballBall className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: t('servicesPage.categories.sports')
    },
    {
      key: 'consulting',
      icon: <FaUserTie className="w-3 h-3 sm:w-4 sm:h-4" />,
      label: t('servicesPage.categories.consulting')
    }
  ];

  const featuredServices = [
    {
      key: 'whiteLabel',
      icon: <FaLaptopCode className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-blue-500 to-blue-700',
      category: 'development',
      popular: true
    },
    {
      key: 'casinoAppDev',
      icon: <FaDice className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-purple-500 to-purple-700',
      category: 'casino',
      popular: true
    },
    {
      key: 'liveCasino',
      icon: <FaPlay className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-red-500 to-red-700',
      category: 'casino',
      popular: true
    },
    {
      key: 'liveScores',
      icon: <HiBolt className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-green-500 to-green-700',
      category: 'api',
      popular: true
    }
  ];

  const allServices = [
    // API Services
    {
      key: 'liveScores',
      icon: <HiBolt className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-green-500 to-green-600',
      category: 'api'
    },
    {
      key: 'liveOdds',
      icon: <HiChartBarSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-blue-500 to-blue-600',
      category: 'api'
    },
    {
      key: 'casinoGamesApi',
      icon: <FaGamepad className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-purple-500 to-purple-600',
      category: 'api'
    },
    // Development Services
    {
      key: 'whiteLabel',
      icon: <FaLaptopCode className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-blue-500 to-blue-600',
      category: 'development'
    },
    {
      key: 'fantasyAppDev',
      icon: <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-yellow-500 to-yellow-600',
      category: 'development'
    },
    {
      key: 'sportsbookDev',
      icon: <FaFootballBall className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-green-500 to-green-600',
      category: 'development'
    },
    // Casino Services
    {
      key: 'casinoAppDev',
      icon: <FaDice className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-purple-500 to-purple-600',
      category: 'casino'
    },
    {
      key: 'liveCasino',
      icon: <FaPlay className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-red-500 to-red-600',
      category: 'casino'
    }
  ];

  const processSteps = [
    {
      key: 'consultation',
      icon: <FaLightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      step: '01'
    },
    {
      key: 'design',
      icon: <FaProjectDiagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      step: '02'
    },
    {
      key: 'development',
      icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      step: '03'
    },
    {
      key: 'deployment',
      icon: <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />,
      step: '04'
    },
    {
      key: 'support',
      icon: <FaHeadset className="w-4 h-4 sm:w-5 sm:h-5" />,
      step: '05'
    }
  ];

  const whyChooseItems = [
    {
      key: 'expertise',
      icon: <FaTrophy className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      key: 'technology',
      icon: <HiCpuChip className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      key: 'support',
      icon: <FaHeadset className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-green-500 to-green-600'
    },
    {
      key: 'customization',
      icon: <FaCogs className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const filteredServices = selectedCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === selectedCategory);

  return (
    <main className="pt-14 min-h-screen bg-theme-bg-primary">
      {/* Hero Section - Mobile First */}
      <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-gradient-to-r from-[#FFD000]/10 to-[#FFF700]/10 rounded-full blur-2xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#3B82F6]/20 backdrop-blur-sm">
              <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              {t('servicesPage.hero.badge')}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-theme-text-primary mb-3 sm:mb-4 leading-tight">
              {t('servicesPage.hero.title')}{' '}
              <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text">
                {t('servicesPage.hero.titleHighlight')}
              </span>
          </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#3B82F6] dark:text-[#60A5FA] font-semibold mb-3 sm:mb-4 lg:mb-6">
              {t('servicesPage.hero.subtitle')}
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-theme-text-secondary max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              {t('servicesPage.hero.description')}
            </p>

            {/* Service Categories Filter - Mobile Optimized */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white shadow-lg scale-105'
                      : 'bg-theme-bg-secondary text-theme-text-secondary hover:bg-theme-bg-primary hover:text-theme-text-primary border border-theme-border'
                  }`}
                >
                  {category.icon}
                                     <span className="ml-1.5 sm:ml-2">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-theme-bg-secondary">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          {/* Enhanced Services Showcase Banner */}
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
                                      {/* Main Hero Image */}
             <div className="relative h-48 sm:h-64 lg:h-80 rounded-2xl overflow-hidden mb-4 sm:mb-6">
               <Image
                 src="/assets/images/premium-casino-environment.jpg"
                 alt="Professional casino and gaming environment - Premium gaming solutions"
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/85 to-blue-900/90" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center text-white px-4">
                   <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">
                     Enterprise Gaming Solutions
                   </h2>
                   <p className="text-sm sm:text-base lg:text-lg opacity-90 max-w-4xl leading-relaxed">
                     Powering the future of gaming and sports betting with cutting-edge technology and professional-grade platforms
                   </p>
                 </div>
               </div>
             </div>

             {/* Service Categories Grid */}
             <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
               {/* Fantasy Sports */}
               <div className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="relative h-20 sm:h-24 lg:h-32">
                   <Image
                     src="/assets/images/fantasy-sports-platform.jpg"
                     alt="Fantasy football platform showcasing user engagement"
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-500"
                     sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                   <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2">
                     <h3 className="text-white font-bold text-xs sm:text-sm">Fantasy Sports</h3>
                   </div>
                 </div>
               </div>

               {/* Casino Solutions */}
               <div className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="relative h-20 sm:h-24 lg:h-32">
                   <Image
                     src="/assets/images/casino-roulette-players.jpg"
                     alt="Professional roulette table with players - Live casino experience"
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-500"
                     sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                   <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2">
                     <h3 className="text-white font-bold text-xs sm:text-sm">Live Casino</h3>
                   </div>
                 </div>
               </div>

               {/* Mobile Gaming */}
               <div className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="relative h-20 sm:h-24 lg:h-32">
                   <Image
                     src="/assets/images/mobile-gaming-interface.jpg"
                     alt="Mobile gaming interface and user experience design"
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-500"
                     sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                   <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2">
                     <h3 className="text-white font-bold text-xs sm:text-sm">Mobile Gaming</h3>
                   </div>
                 </div>
               </div>

               {/* API Solutions */}
               <div className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                 <div className="relative h-20 sm:h-24 lg:h-32">
                   <Image
                     src="/assets/images/technology-infrastructure.jpg"
                     alt="Advanced technology and API development infrastructure"
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-500"
                     sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                   <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 right-1 sm:right-2">
                     <h3 className="text-white font-bold text-xs sm:text-sm">API Solutions</h3>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('servicesPage.featured.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              {t('servicesPage.featured.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featuredServices.map((service, index) => (
              <div key={service.key} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-primary rounded-lg p-4 sm:p-6 border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-theme-text-primary mb-2">
                        {t(`services.${service.key}`)}
                      </h3>
                      <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed mb-3">
                        {t(`servicesPage.serviceDetails.${service.key}.description`)}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {t(`servicesPage.serviceDetails.${service.key}.features`).slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center px-2 py-1 bg-theme-bg-secondary text-xs text-theme-text-secondary rounded-md">
                            <FaCheck className="w-2 h-2 sm:w-3 sm:h-3 mr-1 text-green-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Portfolio - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('servicesPage.allServices.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              {t('servicesPage.allServices.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredServices.map((service, index) => (
              <div key={`${service.key}-${index}`} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-secondary rounded-lg p-4 sm:p-5 border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-theme-text-primary mb-2">
                    {t(`services.${service.key}`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">
                    {t(`servicesPage.serviceDetails.${service.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-theme-bg-secondary">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('servicesPage.processSection.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              {t('servicesPage.processSection.subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {processSteps.map((step, index) => (
                <div key={step.key} className="relative">
                  <div className="bg-theme-bg-primary rounded-lg p-4 sm:p-5 text-center border border-theme-border hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#3B82F6] dark:text-[#60A5FA] mb-1 sm:mb-2">
                      STEP {step.step}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-theme-text-primary mb-2">
                      {t(`servicesPage.processSection.steps.${step.key}.title`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">
                      {t(`servicesPage.processSection.steps.${step.key}.description`)}
                    </p>
                  </div>

                  {/* Connector line for desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#3B82F6] to-transparent transform -translate-y-1/2 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('servicesPage.whyChoose.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {whyChooseItems.map((item, index) => (
              <div key={item.key} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-secondary rounded-lg p-4 sm:p-5 text-center border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-theme-text-primary mb-2">
                    {t(`servicesPage.whyChoose.items.${item.key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">
                    {t(`servicesPage.whyChoose.items.${item.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-[#FFD000]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            {t('servicesPage.cta.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
            {t('servicesPage.cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#3B82F6] font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <FaRocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
              {t('servicesPage.cta.primaryButton')}
            </Link>
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-lg sm:rounded-xl hover:bg-white hover:text-[#3B82F6] transition-all duration-300 hover:scale-105"
            >
              <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
              {t('servicesPage.cta.secondaryButton')}
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}