'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUsers,
  FaClock,
  FaShieldAlt,
  FaRocket,
  FaCode,
  FaDesktop,
  FaHeadset,
  FaCogs,
  FaArrowRight,
  FaTelegramPlane
} from 'react-icons/fa';
import {
  HiSparkles,
  HiGlobeAlt,
  HiCpuChip
} from 'react-icons/hi2';
import { CONTACT_INFO, QUICK_CONTACT } from '@/constants/contacts';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [dynamicContactInfo, setDynamicContactInfo] = useState(null);
  const [contactInfoLoading, setContactInfoLoading] = useState(true);

  // Fetch contact information on component mount
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/contact-info');
        if (response.ok) {
          const data = await response.json();
          setDynamicContactInfo(data.data);
        } else {
          console.error('Failed to fetch contact info');
          // Fallback to static info if API fails
          setDynamicContactInfo(null);
        }
      } catch (error) {
        console.error('Error fetching contact info:', error);
        // Fallback to static info if API fails
        setDynamicContactInfo(null);
      } finally {
        setContactInfoLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Contact form submission error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  // Use dynamic contact info if available, otherwise fallback to static info
  const activeContactInfo = dynamicContactInfo || {
    companyName: CONTACT_INFO.company.name,
    email: CONTACT_INFO.email,
    phone: CONTACT_INFO.phone,
    address: CONTACT_INFO.address
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: t('contact.page.info.email.title'),
      subtitle: t('contact.page.info.email.subtitle'),
      value: activeContactInfo.email?.primary || CONTACT_INFO.email.primary,
      link: `mailto:${activeContactInfo.email?.primary || CONTACT_INFO.email.primary}`,
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: t('contact.page.info.phone.title'),
      subtitle: t('contact.page.info.phone.subtitle'),
      value: activeContactInfo.phone?.primary || CONTACT_INFO.phone.primary,
      link: `tel:${activeContactInfo.phone?.primary || CONTACT_INFO.phone.primary}`,
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: t('contact.page.info.whatsapp.title'),
      subtitle: t('contact.page.info.whatsapp.subtitle'),
      value: activeContactInfo.phone?.whatsapp || CONTACT_INFO.social.whatsapp.displayText,
      link: `https://wa.me/${(activeContactInfo.phone?.whatsapp || CONTACT_INFO.social.whatsapp.number).replace(/[^0-9]/g, '')}`,
      gradient: 'from-green-400 to-green-500'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: t('contact.page.info.address.title'),
      subtitle: t('contact.page.info.address.subtitle'),
      value: activeContactInfo.address ?
        `${activeContactInfo.address.street}, ${activeContactInfo.address.city}, ${activeContactInfo.address.state} ${activeContactInfo.address.zipCode}, ${activeContactInfo.address.country}` :
        CONTACT_INFO.address.full,
      link: '#',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  const serviceOptions = [
    'API Development & Integration',
    'Platform Development',
    'Casino Game Development',
    'Sports Betting Platform',
    'Fantasy Sports App',
    'Technical Consulting',
    'White Label Solutions',
    '24/7 Support & Maintenance',
    'Customized Solutions',
    'Game Development & Distribution',
    'Other'
  ];

  const helpServices = [
    {
      icon: <FaCode className="w-8 h-8" />,
      title: t('contact.page.services.api'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: t('contact.page.services.platform'),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: t('contact.page.services.consulting'),
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: t('contact.page.services.support'),
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: t('contact.page.whyChoose.experience.title'),
      description: t('contact.page.whyChoose.experience.description'),
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: t('contact.page.whyChoose.support.title'),
      description: t('contact.page.whyChoose.support.description'),
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: t('contact.page.whyChoose.clients.title'),
      description: t('contact.page.whyChoose.clients.description'),
      gradient: 'from-purple-500 to-violet-600'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: t('contact.page.whyChoose.uptime.title'),
      description: t('contact.page.whyChoose.uptime.description'),
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <main className="pt-16 min-h-screen bg-theme-bg-primary">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 lg:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-gradient-to-r from-[#FFD000]/10 to-[#FFF700]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-[#3B82F6]/10 to-[#60A5FA]/10 text-[#3B82F6] dark:text-[#60A5FA] text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-[#3B82F6]/20 backdrop-blur-sm">
              <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Let's Connect
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-theme-text-primary mb-4 sm:mb-6 leading-tight">
              {t('contact.page.title')}{' '}
              <span className="text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text">
                {t('contact.page.titleHighlight')}
              </span>
          </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-[#3B82F6] dark:text-[#60A5FA] font-semibold mb-4 sm:mb-6 lg:mb-8">
              {t('contact.page.subtitle')}
            </p>

            <p className="text-base sm:text-lg lg:text-xl text-theme-text-secondary max-w-4xl mx-auto leading-relaxed">
              {t('contact.page.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-theme-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-theme-bg-primary rounded-2xl p-6 sm:p-8 shadow-xl border border-theme-border">
                <h2 className="text-2xl sm:text-3xl font-bold text-theme-text-primary mb-6 sm:mb-8">
                  {t('contact.page.form.title')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-theme-text-primary mb-2">
                        {t('contact.page.form.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-theme-text-primary placeholder-theme-text-secondary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-theme-text-primary mb-2">
                        {t('contact.page.form.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-theme-text-primary placeholder-theme-text-secondary transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-theme-text-primary mb-2">
                        {t('contact.page.form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-theme-text-primary placeholder-theme-text-secondary transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-theme-text-primary mb-2">
                        {t('contact.page.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-theme-text-primary placeholder-theme-text-secondary transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-theme-text-primary mb-2">
                      {t('contact.page.form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-theme-text-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

              <div>
                    <label htmlFor="message" className="block text-sm font-medium text-theme-text-primary mb-2">
                      {t('contact.page.form.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-theme-bg-secondary border border-theme-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent text-theme-text-primary placeholder-theme-text-secondary transition-colors resize-none"
                      placeholder="Tell us about your project requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        {t('contact.page.form.sending')}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5 mr-3" />
                        {t('contact.page.form.submit')}
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                      <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                        {t('contact.page.form.success')}
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                      <p className="text-red-700 dark:text-red-300 text-sm font-medium">
                        There was an error submitting your message. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="sticky top-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-theme-text-primary mb-6 sm:mb-8">
                  {t('contact.page.info.title')}
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group">
                      <div className="relative">
                        <div className={`absolute -inset-1 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-300`} />
                        <Link
                          href={info.link}
                          className="relative flex items-start p-6 bg-theme-bg-primary rounded-xl border border-theme-border hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                        >
                          <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            <div className="text-white">
                              {info.icon}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-theme-text-primary mb-1">
                              {info.title}
                            </h3>
                            <p className="text-sm text-theme-text-secondary mb-2">
                              {info.subtitle}
                            </p>
                            <p className="text-[#3B82F6] dark:text-[#60A5FA] font-medium break-words">
                              {info.value}
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <Link
                    href={QUICK_CONTACT.whatsappMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <FaWhatsapp className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Link>
                  <Link
                    href={QUICK_CONTACT.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <FaTelegramPlane className="w-5 h-5 mr-2" />
                    Telegram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Can Help With */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-text-primary mb-6">
              {t('contact.page.services.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {helpServices.map((service, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-secondary rounded-xl p-6 sm:p-8 text-center border border-theme-border group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-theme-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-theme-text-primary mb-6">
              {t('contact.page.whyChoose.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`} />
                <div className="relative bg-theme-bg-primary rounded-xl p-6 sm:p-8 h-full border border-theme-border group-hover:scale-105 group-hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-theme-text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-theme-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}