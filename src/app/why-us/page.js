'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  FaTrophy,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaCode,
  FaMicrochip,
  FaCloud,
  FaHeadset,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaCheck,
  FaLightbulb,
  FaProjectDiagram,
  FaHandsHelping
} from 'react-icons/fa';
import {
  HiSparkles,
  HiGlobeAlt,
  HiCpuChip,
  HiBolt,
  HiShieldCheck,
  HiChartBarSquare
} from 'react-icons/hi2';

export default function WhyUs() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroStats = [
    { key: 'experience', icon: <FaTrophy className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { key: 'projects', icon: <FaRocket className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { key: 'clients', icon: <FaUsers className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { key: 'uptime', icon: <FaShieldAlt className="w-3 h-3 sm:w-4 sm:h-4" /> }
  ];

  const advantages = [
    {
      key: 'experience',
      icon: <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-yellow-400 to-yellow-600'
    },
    {
      key: 'technology',
      icon: <HiCpuChip className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      key: 'team',
      icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-green-500 to-green-700'
    },
    {
      key: 'support',
      icon: <FaHeadset className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      key: 'security',
      icon: <HiShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-red-500 to-red-700'
    },
    {
      key: 'scalability',
      icon: <HiChartBarSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      gradient: 'from-indigo-500 to-indigo-700'
    }
  ];

  const achievements = [
    {
      key: 'projects',
      icon: <FaRocket className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      key: 'clients',
      icon: <FaUsers className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: 'from-green-500 to-green-600'
    },
    {
      key: 'uptime',
      icon: <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      key: 'support',
      icon: <FaClock className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      key: 'apis',
      icon: <FaCode className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      key: 'response',
      icon: <HiBolt className="w-4 h-4 sm:w-5 sm:h-5" />,
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const testimonials = [
    { key: 'client1', avatar: 'https://placehold.co/60x60/3B82F6/ffffff?text=RK' },
    { key: 'client2', avatar: 'https://placehold.co/60x60/10B981/ffffff?text=SJ' },
    { key: 'client3', avatar: 'https://placehold.co/60x60/8B5CF6/ffffff?text=MA' }
  ];

  const technologies = [
    {
      key: 'ai',
      icon: <FaMicrochip className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      key: 'cloud',
      icon: <FaCloud className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      key: 'realtime',
      icon: <HiBolt className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      key: 'security',
      icon: <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      gradient: 'from-red-500 to-pink-600'
    }
  ];

  const processSteps = [
    {
      key: 'consultation',
      icon: <FaLightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      step: '01'
    },
    {
      key: 'planning',
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
              {t('whyUs.page.hero.badge')}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-theme-text-primary mb-3 sm:mb-4 leading-tight">
              {t('whyUs.page.title')}{' '}
              <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text">
                {t('whyUs.page.titleHighlight')}
              </span>
          </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#3B82F6] dark:text-[#60A5FA] font-semibold mb-3 sm:mb-4 lg:mb-6">
              {t('whyUs.page.subtitle')}
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-theme-text-secondary max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              {t('whyUs.page.description')}
            </p>

            {/* Hero Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {heroStats.map((stat, index) => (
                <div key={stat.key} className="bg-theme-bg-secondary rounded-lg p-3 sm:p-4 border border-theme-border group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-[#3B82F6] dark:text-[#60A5FA]">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-theme-text-primary mb-1">
                    {t(`whyUs.page.hero.stats.${stat.key}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-theme-bg-secondary">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('whyUs.page.advantages.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              {t('whyUs.page.advantages.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {advantages.map((advantage, index) => (
              <div key={advantage.key} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${advantage.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-primary rounded-lg p-4 sm:p-6 h-full border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${advantage.gradient} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-6 transition-transform duration-300`}>
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-theme-text-primary mb-2 sm:mb-3">
                    {t(`whyUs.page.advantages.items.${advantage.key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">
                    {t(`whyUs.page.advantages.items.${advantage.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Stats - Mobile Optimized */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('whyUs.page.achievements.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              {t('whyUs.page.achievements.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {achievements.map((achievement, index) => (
              <div key={achievement.key} className="group">
                <div className="bg-theme-bg-secondary rounded-lg p-3 sm:p-4 lg:p-6 text-center border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${achievement.gradient} rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-text-primary mb-1">
                    {t(`whyUs.page.achievements.stats.${achievement.key}.number`)}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-[#3B82F6] dark:text-[#60A5FA] mb-1">
                    {t(`whyUs.page.achievements.stats.${achievement.key}.label`)}
                  </div>
                  <div className="text-xs text-theme-text-secondary">
                    {t(`whyUs.page.achievements.stats.${achievement.key}.description`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-theme-bg-secondary">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('whyUs.page.testimonials.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary">
              {t('whyUs.page.testimonials.subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="bg-theme-bg-primary rounded-xl p-4 sm:p-6 lg:p-8 border border-theme-border shadow-lg">
              <div className="text-center">
                <div className="relative mb-4 sm:mb-6">
                  <FaQuoteLeft className="w-6 h-6 sm:w-8 sm:h-8 text-[#3B82F6] dark:text-[#60A5FA] mx-auto mb-4" />
                  <p className="text-sm sm:text-base lg:text-lg text-theme-text-secondary leading-relaxed italic">
                    {t(`whyUs.page.testimonials.items.${testimonials[activeTestimonial].key}.text`)}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src={testimonials[activeTestimonial].avatar}
                    alt="Client"
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 border-2 border-[#3B82F6]/20"
                  />
                  <h4 className="text-sm sm:text-base font-bold text-theme-text-primary">
                    {t(`whyUs.page.testimonials.items.${testimonials[activeTestimonial].key}.name`)}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#3B82F6] dark:text-[#60A5FA] font-medium">
                    {t(`whyUs.page.testimonials.items.${testimonials[activeTestimonial].key}.position`)}
                  </p>
                  <p className="text-xs sm:text-sm text-theme-text-secondary">
                    {t(`whyUs.page.testimonials.items.${testimonials[activeTestimonial].key}.company`)}
                  </p>

                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === index
                      ? 'bg-[#3B82F6] scale-125'
                      : 'bg-theme-text-secondary/30 hover:bg-theme-text-secondary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Excellence - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('whyUs.page.technology.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              {t('whyUs.page.technology.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <div key={tech.key} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-secondary rounded-lg p-4 sm:p-6 border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${tech.gradient} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300`}>
                      <div className="text-white">
                        {tech.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-theme-text-primary mb-1 sm:mb-2">
                        {t(`whyUs.page.technology.features.${tech.key}.title`)}
                      </h3>
                      <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">
                        {t(`whyUs.page.technology.features.${tech.key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-theme-bg-secondary">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
              {t('whyUs.page.process.title')}
            </h2>
            <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
              {t('whyUs.page.process.subtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
              {processSteps.map((step, index) => (
                <div key={step.key} className="relative">
                  <div className="bg-theme-bg-primary rounded-lg p-4 sm:p-6 text-center border border-theme-border hover:scale-105 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-[#3B82F6] dark:text-[#60A5FA] mb-1 sm:mb-2">
                      STEP {step.step}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-theme-text-primary mb-2">
                      {t(`whyUs.page.process.steps.${step.key}.title`)}
                    </h3>
                    <p className="text-xs sm:text-sm text-theme-text-secondary leading-relaxed">
                      {t(`whyUs.page.process.steps.${step.key}.description`)}
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

      {/* Call to Action - Mobile First */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-[#FFD000]/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            {t('whyUs.page.cta.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 mb-6 sm:mb-8 leading-relaxed">
            {t('whyUs.page.cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#3B82F6] font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <FaRocket className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
              {t('whyUs.page.cta.primaryButton')}
            </Link>
            <Link
              href="/services"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-lg sm:rounded-xl hover:bg-white hover:text-[#3B82F6] transition-all duration-300 hover:scale-105"
            >
              <HiGlobeAlt className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:rotate-12 transition-transform duration-300" />
              {t('whyUs.page.cta.secondaryButton')}
              <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}