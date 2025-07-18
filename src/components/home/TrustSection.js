'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  FaShieldAlt,
  FaCertificate,
  FaGlobe,
  FaUsers,
  FaTrophy,
  FaLock,
  FaRocket,
  FaClock
} from 'react-icons/fa';
import { HiSparkles, HiChartBarSquare } from 'react-icons/hi2';

export default function TrustSection() {
  const { t } = useLanguage();

  const trustMetrics = [
    {
      icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "200+",
      label: "Happy Clients",
      description: "Worldwide",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaGlobe className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "50+",
      label: "Countries",
      description: "Global Reach",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <FaRocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "500+",
      label: "Projects",
      description: "Delivered",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaClock className="w-5 h-5 sm:w-6 sm:h-6" />,
      number: "99.9%",
      label: "Uptime",
      description: "Guaranteed",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  const certifications = [
    {
      icon: <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "ISO 27001",
      subtitle: "Certified",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <FaLock className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "SSL Secured",
      subtitle: "256-bit",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaCertificate className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "GDPR",
      subtitle: "Compliant",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <HiChartBarSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: "SOC 2",
      subtitle: "Type II",
      gradient: "from-yellow-500 to-yellow-600"
    }
  ];

  const industries = [
    "Sports Betting", "Online Casino", "Fantasy Sports", "Esports",
    "Live Streaming", "Payment Processing", "Data Analytics", "Mobile Gaming"
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-theme-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-[#3B82F6]/5 to-[#60A5FA]/5 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute bottom-1/4 left-1/4 w-28 h-28 sm:w-40 sm:h-40 lg:w-60 lg:h-60 bg-gradient-to-r from-[#FFD000]/5 to-[#FFF700]/5 rounded-full blur-3xl animate-pulse delay-1500" />
      </div>

      <div className="relative max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-[#3B82F6]/20 backdrop-blur-sm">
            <HiSparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Trusted Worldwide
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-theme-text-primary mb-2 sm:mb-4">
            Trusted by <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text">Industry Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-theme-text-secondary max-w-2xl mx-auto">
            Enterprise-grade security, compliance, and reliability trusted by companies worldwide
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="relative group">
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${metric.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
              <div className="relative bg-theme-bg-secondary rounded-lg p-3 sm:p-4 lg:p-6 text-center border border-theme-border group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${metric.gradient} rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                  <div className="text-white">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-theme-text-primary mb-1">
                  {metric.number}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#3B82F6] dark:text-[#60A5FA] mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-theme-text-secondary">
                  {metric.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Security */}
        <div className="bg-theme-bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-theme-border mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary text-center mb-4 sm:mb-6">
            Security & Compliance
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-primary rounded-lg p-3 sm:p-4 text-center border border-theme-border group-hover:scale-105 transition-all duration-300">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto`}>
                    <div className="text-white">
                      {cert.icon}
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-theme-text-primary">
                    {cert.title}
                  </div>
                  <div className="text-xs text-theme-text-secondary">
                    {cert.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary mb-4 sm:mb-6">
            Industries We Serve
          </h3>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-xs sm:text-sm font-medium rounded-full border border-[#3B82F6]/20 hover:scale-105 transition-transform duration-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}