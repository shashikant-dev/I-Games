'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

// Optimized icon imports - only import what's needed
import {
  IoCash,
  IoDesktop,
  IoGameController
} from 'react-icons/io5';
import {
  MdSportsScore,
  MdDeveloperMode,
  MdOutlineCasino,
  MdSportsMartialArts,
  MdOutlineSportsKabaddi
} from 'react-icons/md';
import {
  FaDice,
  FaRunning
} from 'react-icons/fa';
import {
  GiSoccerBall,
  GiBasketballBall,
  GiTennisRacket,
  GiPokerHand,
  GiDiceEightFacesEight,
  GiCricketBat,
  GiTrophy,
  GiTv,
  GiChart,
  GiJumpingDog,
  GiCardJoker,
  GiHorseHead
} from 'react-icons/gi';
import { SiNba, SiDatadog } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';

export default function HeroSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update selectedCategory when language changes
  useEffect(() => {
    setSelectedCategory(t('hero.categories.all'));
  }, [t]);

  // Memoize categories to prevent recreation on each render
  const categories = useMemo(() => [
    t('hero.categories.all'),
    t('hero.categories.sport'),
    t('hero.categories.casino'),
    t('hero.categories.api'),
    t('hero.categories.betting'),
    t('hero.categories.development'),
    t('hero.categories.gaming'),
    t('hero.categories.streaming'),
  ], [t]);

  // Memoize services to prevent recreation on each render
  const services = useMemo(() => [
    { id: 14, name: t('services.whiteLabel'), icon: IoDesktop, category: t('hero.categories.development') },
    { id: 16, name: t('services.casinoAppDev'), icon: FaDice, category: t('hero.categories.development') },
    { id: 19, name: t('services.liveCasino'), icon: MdOutlineCasino, category: t('hero.categories.betting') },
    { id: 17, name: t('services.gamblingAppDev'), icon: MdDeveloperMode, category: t('hero.categories.development') },
    { id: 6, name: t('services.casinoGamesApi'), icon: GiDiceEightFacesEight, category: t('hero.categories.api') },
    { id: 18, name: t('services.accurateSettlement'), icon: IoCash, category: t('hero.categories.api') },
    { id: 1, name: t('services.liveScores'), icon: GiChart, category: t('hero.categories.api') },
    { id: 2, name: t('services.liveOdds'), icon: IoCash, category: t('hero.categories.api') },
    { id: 3, name: t('services.playerTeamData'), icon: SiDatadog, category: t('hero.categories.api') },
    { id: 4, name: t('services.fancyBetting'), icon: GiPokerHand, category: t('hero.categories.api') },
    { id: 5, name: t('services.bookmakerOdds'), icon: IoCash, category: t('hero.categories.api') },
    { id: 7, name: t('services.scoreApi'), icon: MdSportsScore, category: t('hero.categories.api') },
    { id: 8, name: t('services.tvStreaming'), icon: GiTv, category: t('hero.categories.streaming') },
    { id: 9, name: t('services.fantasyAppDev'), icon: GiTrophy, category: t('hero.categories.development') },
    { id: 10, name: t('services.skilledBetting'), icon: IoDesktop, category: t('hero.categories.development') },
    { id: 11, name: t('services.sportsCoverage'), icon: GiSoccerBall, category: t('hero.categories.api') },
    { id: 12, name: t('services.virtualSports'), icon: IoGameController, category: t('hero.categories.gaming') },
    { id: 13, name: t('services.sportsbookDev'), icon: GiBasketballBall, category: t('hero.categories.development') },
    { id: 15, name: t('services.premiumOdds'), icon: IoCash, category: t('hero.categories.api') },
    { id: 21, name: t('services.cricket'), icon: GiCricketBat, category: t('hero.categories.sport') },
    { id: 22, name: t('services.soccer'), icon: GiSoccerBall, category: t('hero.categories.sport') },
    { id: 23, name: t('services.tennis'), icon: GiTennisRacket, category: t('hero.categories.sport') },
    { id: 24, name: t('services.basketball'), icon: GiBasketballBall, category: t('hero.categories.sport') },
    { id: 25, name: t('services.racing'), icon: FaRunning, category: t('hero.categories.sport') },
    { id: 26, name: t('services.kabaddi'), icon: MdOutlineSportsKabaddi, category: t('hero.categories.sport') },
    { id: 27, name: t('services.mma'), icon: MdSportsMartialArts, category: t('hero.categories.sport') },
    { id: 28, name: t('services.nbaApi'), icon: SiNba, category: t('hero.categories.api') },
    { id: 30, name: t('services.teenpatti'), icon: GiCardJoker, category: t('hero.categories.casino') },
    { id: 31, name: t('services.poker'), icon: GiPokerHand, category: t('hero.categories.casino') },
    { id: 32, name: t('services.greyhound'), icon: GiJumpingDog, category: t('hero.categories.sport') },
    { id: 33, name: t('services.horse'), icon: GiHorseHead, category: t('hero.categories.sport') },
  ], [t]);

  // Enhanced carousel slides with gradient backgrounds for better text visibility
  const carouselSlides = useMemo(() => [
    {
      id: 1,
      title: 'Fantasy Sports Development',
      description: 'Build engaging fantasy platforms with real-time scoring and competitions',
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      id: 2,
      title: 'Sports Betting Platforms',
      description: 'Advanced betting solutions with live odds and secure transactions',
      gradient: 'from-green-600 to-green-700'
    },
    {
      id: 3,
      title: 'Live Casino Solutions',
      description: 'Premium casino gaming with live dealers and table games',
      gradient: 'from-red-600 to-red-700'
    },
    {
      id: 4,
      title: 'Online Casino Development',
      description: 'Complete casino platforms with real money gaming capabilities',
      gradient: 'from-purple-600 to-purple-700'
    },
    {
      id: 5,
      title: 'Mobile Gaming Solutions',
      description: 'Responsive gaming applications optimized for all mobile devices',
      gradient: 'from-indigo-600 to-indigo-700'
    }
  ], []);

  // Optimized auto-slide with useCallback to prevent recreation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  }, [carouselSlides.length]);

  // Auto-slide functionality - optimized
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Increased to 5s for better UX
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Memoize filtered services to prevent recalculation
  const filteredServices = useMemo(() => {
    return (selectedCategory === t('hero.categories.all') || selectedCategory === '')
      ? services
      : services.filter(service => service.category === selectedCategory);
  }, [selectedCategory, services, t]);

  // Handle keyboard navigation for carousel
  const handleKeyDown = useCallback((event, slideIndex) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setCurrentSlide(slideIndex);
    }
  }, []);

  // Handle keyboard navigation for category filters
  const handleCategoryKeyDown = useCallback((event, category) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedCategory(category);
    }
  }, []);

  return (
    <section
      className="relative bg-white dark:bg-gray-900 transition-colors"
      aria-label="Gaming and sports services showcase"
    >
      {/* Skip link for accessibility */}
      <a
        href="#services-grid"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Skip to services
      </a>

      {/* Background Pattern - Reduced opacity for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="relative pt-16 pb-8 lg:pt-20 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Carousel Section with Images */}
          <header className="text-center mb-8">
            <div
              className="relative"
              role="region"
              aria-label="Service showcase carousel"
              aria-live="polite"
            >
                            <div className="mt-2 sm:mt-0 relative h-48 sm:h-64 lg:h-80 overflow-hidden rounded-2xl shadow-lg">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' :
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                    aria-hidden={index !== currentSlide}
                  >
                    <div className={`w-full h-full bg-gradient-to-r ${slide.gradient} relative flex items-center justify-center`}>
                      <div className="text-center text-white px-4">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">{slide.title}</h2>
                        <p className="text-sm sm:text-base lg:text-lg opacity-90">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots - Enhanced for accessibility */}
              <nav className="flex justify-center mt-6 space-x-3" aria-label="Carousel navigation">
                {carouselSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      index === currentSlide
                        ? 'bg-[#3B82F6] border-[#3B82F6] shadow-lg scale-110'
                        : 'bg-white/80 border-gray-300 hover:bg-white hover:border-[#3B82F6] shadow-md hover:scale-105'
                    }`}
                    aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                    aria-pressed={index === currentSlide}
                  />
                ))}
              </nav>
            </div>
          </header>

          {/* Category Filter - Enhanced for accessibility */}
          <nav
            className="flex flex-wrap justify-center gap-2 mb-6"
            role="tablist"
            aria-label="Service category filters"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                onKeyDown={(e) => handleCategoryKeyDown(e, category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? 'bg-[#3B82F6] text-white shadow-md scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
                }`}
                role="tab"
                aria-selected={selectedCategory === category}
                aria-controls="services-grid"
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Services Grid - Enhanced semantics */}
          <section
            id="services-grid"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-h-[600px] overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
            role="tabpanel"
            aria-label={`${selectedCategory} services`}
          >
            {filteredServices.map(service => {
              const IconComponent = service.icon;
              return (
                <article
                  key={service.id}
                  className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500"
                  tabIndex="0"
                  role="button"
                  aria-label={`${service.name} service`}
                >
                  <div
                    className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white text-center leading-tight">
                    {service.name}
                  </h3>
                </article>
              );
            })}
          </section>

          {/* Screen reader announcement for filtered services */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {filteredServices.length} services available in {selectedCategory} category
          </div>

          {/* Gaming Interface Showcase Cards */}
          <section className="mt-12 sm:mt-16" aria-label="Live gaming interfaces showcase">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">
              Live Gaming Interfaces
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Poker Interface Card */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src="/assets/images/sports-betting-platform.jpg"
                    alt="Live poker interface with royal flush cards display"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1">Live Poker Tables</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Real-time card gaming experience</p>
                  </div>
                </div>
              </div>

              {/* Sports Betting Interface Card */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src="/assets/images/mobile-gaming-interface.jpg"
                    alt="Sports betting interface with live statistics and odds"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1">Sports Analytics</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Live statistics and betting odds</p>
                  </div>
                </div>
              </div>

              {/* Multi-player Gaming Card */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src="/assets/images/original-demo-3.jpg"
                    alt="Multi-player gaming interface with player avatars and chip counts"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1">Multi-Player Gaming</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Social gaming with live players</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}