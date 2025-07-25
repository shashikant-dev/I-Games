'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import ImageCarousel from '@/components/ui/ImageCarousel';

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
    { id: 14, name: t('services.whiteLabel'), description: t('services.whiteLabelDesc'), icon: IoDesktop, category: t('hero.categories.development') },
    { id: 16, name: t('services.casinoAppDev'), description: t('services.casinoAppDevDesc'), icon: FaDice, category: t('hero.categories.development') },
    { id: 19, name: t('services.liveCasino'), description: t('services.liveCasinoDesc'), icon: MdOutlineCasino, category: t('hero.categories.betting') },
    { id: 17, name: t('services.gamblingAppDev'), description: t('services.gamblingAppDevDesc'), icon: MdDeveloperMode, category: t('hero.categories.development') },
    { id: 6, name: t('services.casinoGamesApi'), description: t('services.casinoGamesApiDesc'), icon: GiDiceEightFacesEight, category: t('hero.categories.api') },
    { id: 18, name: t('services.accurateSettlement'), description: t('services.accurateSettlementDesc'), icon: IoCash, category: t('hero.categories.api') },
    { id: 1, name: t('services.liveScores'), description: t('services.liveScoresDesc'), icon: GiChart, category: t('hero.categories.api') },
    { id: 2, name: t('services.liveOdds'), description: t('services.liveOddsDesc'), icon: IoCash, category: t('hero.categories.api') },
    { id: 3, name: t('services.playerTeamData'), description: t('services.playerTeamDataDesc'), icon: SiDatadog, category: t('hero.categories.api') },
    { id: 4, name: t('services.fancyBetting'), description: t('services.fancyBettingDesc'), icon: GiPokerHand, category: t('hero.categories.api') },
    { id: 5, name: t('services.bookmakerOdds'), description: t('services.bookmakerOddsDesc'), icon: IoCash, category: t('hero.categories.api') },
    { id: 7, name: t('services.scoreApi'), description: t('services.scoreApiDesc'), icon: MdSportsScore, category: t('hero.categories.api') },
    { id: 8, name: t('services.tvStreaming'), description: t('services.tvStreamingDesc'), icon: GiTv, category: t('hero.categories.streaming') },
    { id: 9, name: t('services.fantasyAppDev'), description: t('services.fantasyAppDevDesc'), icon: GiTrophy, category: t('hero.categories.development') },
    { id: 10, name: t('services.skilledBetting'), description: t('services.skilledBettingDesc'), icon: IoDesktop, category: t('hero.categories.development') },
    { id: 11, name: t('services.sportsCoverage'), description: t('services.sportsCoverageDesc'), icon: GiSoccerBall, category: t('hero.categories.api') },
    { id: 12, name: t('services.virtualSports'), description: t('services.virtualSportsDesc'), icon: IoGameController, category: t('hero.categories.gaming') },
    { id: 13, name: t('services.sportsbookDev'), description: t('services.sportsbookDevDesc'), icon: GiBasketballBall, category: t('hero.categories.development') },
    { id: 15, name: t('services.premiumOdds'), description: t('services.premiumOddsDesc'), icon: IoCash, category: t('hero.categories.api') },
    { id: 21, name: t('services.cricket'), description: t('services.cricketDesc'), icon: GiCricketBat, category: t('hero.categories.sport') },
    { id: 22, name: t('services.soccer'), description: t('services.soccerDesc'), icon: GiSoccerBall, category: t('hero.categories.sport') },
    { id: 23, name: t('services.tennis'), description: t('services.tennisDesc'), icon: GiTennisRacket, category: t('hero.categories.sport') },
    { id: 24, name: t('services.basketball'), description: t('services.basketballDesc'), icon: GiBasketballBall, category: t('hero.categories.sport') },
    { id: 25, name: t('services.racing'), description: t('services.racingDesc'), icon: FaRunning, category: t('hero.categories.sport') },
    { id: 26, name: t('services.kabaddi'), description: t('services.kabaddiDesc'), icon: MdOutlineSportsKabaddi, category: t('hero.categories.sport') },
    { id: 27, name: t('services.mma'), description: t('services.mmaDesc'), icon: MdSportsMartialArts, category: t('hero.categories.sport') },
    { id: 28, name: t('services.nbaApi'), description: t('services.nbaApiDesc'), icon: SiNba, category: t('hero.categories.api') },
    { id: 30, name: t('services.teenpatti'), description: t('services.teenpattiDesc'), icon: GiCardJoker, category: t('hero.categories.casino') },
    { id: 31, name: t('services.poker'), description: t('services.pokerDesc'), icon: GiPokerHand, category: t('hero.categories.casino') },
    { id: 32, name: t('services.greyhound'), description: t('services.greyhoundDesc'), icon: GiJumpingDog, category: t('hero.categories.sport') },
    { id: 33, name: t('services.horse'), description: t('services.horseDesc'), icon: GiHorseHead, category: t('hero.categories.sport') },
  ], [t]);

  // Enhanced carousel slides with gaming interface images
  const carouselSlides = useMemo(() => [
    {
      id: 1,
      image: '/assets/images/fantasy-sports-platform.jpg',
      title: 'Fantasy Sports Development',
      description: 'Build engaging fantasy platforms with real-time scoring, player analytics, and exciting competitions',
      badge: 'Fantasy Sports',
      features: ['Real-time Scoring', 'Live Competitions'],
      alt: 'Fantasy sports platform interface showing player statistics and live scoring'
    },
    {
      id: 2,
      image: '/assets/images/sports-betting-platform.jpg',
      title: 'Sports Betting Platforms',
      description: 'Advanced betting solutions with live odds, secure transactions, and comprehensive market coverage',
      badge: 'Sports Betting',
      features: ['Live Odds', 'Secure Payments', 'Global Markets'],
      alt: 'Sports betting platform with live odds and comprehensive betting markets'
    },
    {
      id: 3,
      image: '/assets/images/live-casino-roulette-table.jpg',
      title: 'Live Casino Solutions',
      description: 'Premium casino gaming experience with professional dealers, HD streaming, and interactive gameplay',
      badge: 'Live Casino',
      features: ['HD Streaming', 'Interactive Gaming'],
      alt: 'Live casino roulette table with professional dealer and HD streaming interface'
    },
    {
      id: 4,
      image: '/assets/images/casino-roulette-players.jpg',
      title: 'Online Casino Development',
      description: 'Complete casino platforms with extensive game libraries, secure banking, and real money gaming',
      badge: 'Online Casino',
      features: ['Secure Banking', 'Real Money Gaming'],
      alt: 'Online casino platform interface displaying various casino games and options'
    },
    {
      id: 5,
      image: '/assets/images/mobile-gaming-interface.jpg',
      title: 'Mobile Gaming Solutions',
      description: 'Responsive gaming applications optimized for mobile devices with seamless cross-platform compatibility',
      badge: 'Mobile Gaming',
      features: ['Cross-platform', 'Responsive Design'],
      alt: 'Mobile gaming interface showing responsive design across different devices'
    },
    {
      id: 6,
      image: '/assets/images/technology-infrastructure.jpg',
      title: 'Gaming Platform Infrastructure',
      description: 'Robust gaming infrastructure with scalable architecture, real-time data processing, and worldwide deployment',
      badge: 'Platform Tech',
      features: ['Scalable Architecture', 'Real-time Processing'],
      alt: 'Gaming platform infrastructure interface showing system architecture and performance metrics'
    }
  ], []);



  // Memoize filtered services to prevent recalculation
  const filteredServices = useMemo(() => {
    return (selectedCategory === t('hero.categories.all') || selectedCategory === '')
      ? services
      : services.filter(service => service.category === selectedCategory);
  }, [selectedCategory, services, t]);

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

      <div className="relative pt-12 pb-8 sm:pt-16 lg:pt-20 lg:pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
          {/* Enhanced Carousel Section with Images */}
          <header className="text-center mb-6 sm:mb-8">
            <div
              className="relative"
              role="region"
              aria-label="Service showcase carousel"
              aria-live="polite"
            >
              <div className="mt-2 sm:mt-0">
                <ImageCarousel
                  images={carouselSlides}
                  autoPlay={true}
                  interval={6000}
                  height="h-44 sm:h-56 md:h-64 lg:h-80"
                  showIndicators={true}
                  showNavigation={true}
                />
              </div>
            </div>
          </header>

          {/* Category Filter - Enhanced for accessibility and mobile */}
          <nav
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
            role="tablist"
            aria-label="Service category filters"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                onKeyDown={(e) => handleCategoryKeyDown(e, category)}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] text-white shadow-lg scale-105 ring-2 ring-blue-200 dark:ring-blue-800'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105 hover:shadow-md border border-gray-200 dark:border-gray-700'
                }`}
                role="tab"
                aria-selected={selectedCategory === category}
                aria-controls="services-grid"
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Services Grid - Enhanced semantics and mobile-optimized */}
          <section
            id="services-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 max-h-[700px] overflow-y-auto pr-2 sm:pr-3 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent"
            role="tabpanel"
            aria-label={`${selectedCategory} services`}
          >
            {filteredServices.map(service => {
              const IconComponent = service.icon;
              return (
                <article
                  key={service.id}
                  className="flex flex-col items-start p-3 sm:p-4 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group border border-gray-100 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 hover:border-blue-200 dark:hover:border-blue-600"
                  tabIndex="0"
                  role="button"
                  aria-label={`${service.name} service`}
                >
                  <div className="flex items-start w-full">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-200 shadow-sm"
                      aria-hidden="true"
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white leading-tight mb-1">
                        {service.name}
                      </h3>
                      {service.description && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Category badge for mobile */}
                  <div className="mt-2 sm:mt-3 w-full">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Screen reader announcement for filtered services */}
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {filteredServices.length} services available in {selectedCategory} category
          </div>

          {/* Gaming Interface Showcase Cards */}
          <section className="mt-8 sm:mt-12 lg:mt-16" aria-label="Live gaming interfaces showcase">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white text-center mb-4 sm:mb-6 lg:mb-8">
              Live Gaming Interfaces
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {/* Poker Interface Card */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-40 sm:h-48 lg:h-56">
                  <Image
                    src="/assets/images/sports-betting-platform.jpg"
                    alt="Live poker interface with royal flush cards display"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1">Live Poker Tables</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Real-time card gaming experience</p>
                  </div>
                </div>
              </div>

              {/* Sports Betting Interface Card */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-40 sm:h-48 lg:h-56">
                  <Image
                    src="/assets/images/mobile-gaming-interface.jpg"
                    alt="Sports betting interface with live statistics and odds"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                    <h4 className="text-white font-bold text-sm sm:text-base mb-1">Sports Analytics</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Live statistics and betting odds</p>
                  </div>
                </div>
              </div>

              {/* Multi-player Gaming Card */}
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 sm:col-span-2 lg:col-span-1">
                <div className="relative h-40 sm:h-48 lg:h-56">
                  <Image
                    src="/assets/images/original-demo-3.jpg"
                    alt="Multi-player gaming interface with player avatars and chip counts"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
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