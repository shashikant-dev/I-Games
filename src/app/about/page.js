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
      icon: <FaLightbulb className="w-8 h-8" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description'),
      gradient: 'from-purple-500 to-indigo-600',
      bgPattern: 'from-purple-500/5 to-indigo-600/5'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
      gradient: 'from-blue-500 to-cyan-600',
      bgPattern: 'from-blue-500/5 to-cyan-600/5'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description'),
      gradient: 'from-green-500 to-emerald-600',
      bgPattern: 'from-green-500/5 to-emerald-600/5'
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
      gradient: 'from-yellow-500 to-orange-600',
      bgPattern: 'from-yellow-500/5 to-orange-600/5'
    }
  ];

  const techFeatures = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: t('about.technology.features.realtime.title'),
      description: t('about.technology.features.realtime.description'),
      accent: <HiBolt className="w-4 h-4" />
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: t('about.technology.features.scalable.title'),
      description: t('about.technology.features.scalable.description'),
      accent: <HiComputerDesktop className="w-4 h-4" />
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: t('about.technology.features.ai.title'),
      description: t('about.technology.features.ai.description'),
      accent: <HiSparkles className="w-4 h-4" />
    },
    {
      icon: <FaLock className="w-6 h-6" />,
      title: t('about.technology.features.secure.title'),
      description: t('about.technology.features.secure.description'),
      accent: <FaStar className="w-4 h-4" />
    }
  ];

  const stats = [
    {
      number: t('about.stats.clients.number'),
      label: t('about.stats.clients.label'),
      icon: <FaUsers className="w-8 h-8" />,
      gradient: 'from-blue-500 to-indigo-600',
      description: 'Trusted worldwide'
    },
    {
      number: t('about.stats.apis.number'),
      label: t('about.stats.apis.label'),
      icon: <FaCode className="w-8 h-8" />,
      gradient: 'from-green-500 to-emerald-600',
      description: 'Comprehensive coverage'
    },
    {
      number: t('about.stats.uptime.number'),
      label: t('about.stats.uptime.label'),
      icon: <FaGlobe className="w-8 h-8" />,
      gradient: 'from-purple-500 to-indigo-600',
      description: 'Reliable performance'
    },
    {
      number: t('about.stats.requests.number'),
      label: t('about.stats.requests.label'),
      icon: <FaChartLine className="w-8 h-8" />,
      gradient: 'from-yellow-500 to-orange-600',
      description: 'Global scale'
    }
  ];

  return (
    <main className="pt-16 min-h-screen bg-theme-bg-primary">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#FFD000]/10 to-[#FFF700]/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-sm font-medium mb-8 border border-[#3B82F6]/20 backdrop-blur-sm">
              <HiSparkles className="w-5 h-5 mr-2 animate-pulse" />
              <span className="font-semibold">Established 2005</span>
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full ml-3 animate-pulse"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-theme-text-primary mb-8 leading-tight">
              {t('about.hero.title')}{' '}
              <span className="relative">
                <span className="text-transparent bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] bg-clip-text animate-gradient bg-300% bg-left">
                  {t('about.hero.titleHighlight')}
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full opacity-30"></div>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#3B82F6] dark:text-[#60A5FA] font-semibold mb-8 leading-relaxed">
              {t('about.hero.subtitle')}
            </p>

            <div className="max-w-4xl mx-auto">
              <p className="text-lg sm:text-xl text-theme-text-secondary leading-relaxed">
                {t('about.hero.description')}
              </p>
            </div>

            {/* Floating Action Elements */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full border border-green-500/20">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live & Active</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full border border-purple-500/20">
                <HiCpuChip className="w-4 h-4 mr-2 text-purple-500" />
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Company Overview Section */}
      <section className="py-24 bg-theme-bg-secondary relative">
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg-primary/50 to-theme-bg-secondary"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-sm font-medium mb-6">
                  <FaRocket className="w-4 h-4 mr-2" />
                  Our Journey
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-theme-text-primary mb-6 leading-tight">
                  {t('about.company.title')}
                </h2>
              </div>

              <p className="text-lg sm:text-xl text-theme-text-secondary leading-relaxed">
                {t('about.company.description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <FaRocket className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{t('about.company.foundedLabel')} {t('about.company.foundedYear')}</span>
                </div>
                <div className="flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg">
                  <FaStar className="w-5 h-5 mr-3" />
                  <span>19+ Years</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative group">
                {/* Enhanced image container with multiple layers */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6]/20 to-[#60A5FA]/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#3B82F6]/30 to-[#60A5FA]/30 rounded-2xl blur-md"></div>

                <div className="relative aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://placehold.co/600x450/3B82F6/ffffff?text=Our+Innovation+Hub"
                    alt="iGames.cloud Innovation Hub"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-[#FFD000] to-[#FFF700] rounded-full flex items-center justify-center shadow-lg group-hover:rotate-180 transition-transform duration-700">
                  <HiSparkles className="w-12 h-12 text-gray-900" />
                </div>

                                 <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                   <HiComputerDesktop className="w-10 h-10 text-white" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg-secondary via-theme-bg-primary to-theme-bg-secondary"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
              <FaTrophy className="w-4 h-4 mr-2" />
              What Drives Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-theme-text-primary mb-6">
              {t('about.values.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                {/* Enhanced background effects */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className={`absolute inset-0 bg-gradient-to-br ${value.bgPattern} rounded-2xl opacity-50`} />

                <div className="relative bg-theme-bg-secondary/80 backdrop-blur-sm rounded-2xl p-8 h-full border border-theme-border/50 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                  <div className="text-center">
                    {/* Enhanced icon container */}
                    <div className={`relative w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="text-white transform group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div className={`absolute -inset-2 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-20 blur-lg`}></div>
                    </div>

                    <h3 className="text-xl font-bold text-theme-text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-theme-text-secondary leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${value.gradient} rounded-full opacity-60`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Technology & Innovation Section */}
      <section className="py-24 bg-theme-bg-secondary relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-sm font-medium mb-6">
              <HiCpuChip className="w-4 h-4 mr-2" />
              Cutting-Edge Solutions
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-theme-text-primary mb-8">
              {t('about.technology.title')}
            </h2>
            <p className="text-lg sm:text-xl text-theme-text-secondary max-w-4xl mx-auto leading-relaxed">
              {t('about.technology.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techFeatures.map((feature, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

                <div className="relative bg-theme-bg-primary/80 backdrop-blur-sm rounded-xl p-8 h-full border border-theme-border/50 group-hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="text-[#3B82F6] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.accent}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-theme-text-primary mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-theme-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress bar decoration */}
                  <div className="mt-6 w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/5 via-transparent to-[#60A5FA]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
              <FaChartLine className="w-4 h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text-primary">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />

                <div className="relative bg-theme-bg-secondary/80 backdrop-blur-sm rounded-2xl p-8 text-center border border-theme-border/50 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500">
                  {/* Enhanced icon with animation */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>

                  {/* Enhanced number display */}
                  <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>

                  <p className="text-theme-text-primary font-semibold mb-2 text-lg">
                    {stat.label}
                  </p>

                  <p className="text-theme-text-secondary text-sm opacity-75">
                    {stat.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full opacity-40"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-[#FFD000] to-[#FFF700] rounded-full opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD000]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <HiSparkles className="w-4 h-4 mr-2" />
              Ready to Innovate?
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('about.cta.description')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center px-8 py-4 bg-white text-[#3B82F6] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <HiGlobeAlt className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              {t('about.cta.button')}
              <FaArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#3B82F6] transition-all duration-300"
            >
              <FaRocket className="w-5 h-5 mr-3 group-hover:-rotate-12 transition-transform duration-300" />
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}