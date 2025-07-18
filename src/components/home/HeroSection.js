'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  IoCash, IoTrophy, IoDesktop, IoAirplane
} from 'react-icons/io5';
import {
  SiDatadog
} from 'react-icons/si';
import {
  MdCasino,
  MdDeveloperMode, MdSportsScore, MdGames, MdSportsMartialArts, MdOutlineCasino
} from 'react-icons/md';
import { FaDice, FaHeart, FaRunning, FaPlane } from 'react-icons/fa';
import {
  GiSoccerBall, GiBasketballBall, GiTennisRacket, GiPokerHand,
  GiDiceEightFacesEight, GiCricketBat, GiGamepad, GiTrophy,
  GiTv, GiChart, GiDiceSixFacesFive, GiJumpingDog
} from 'react-icons/gi';

import { GiBoxingGlove, GiCasinoChip, GiCardJoker, GiSittingDog, GiHorseHead } from "react-icons/gi";
import { SiNba } from "react-icons/si";
import { MdOutlineSportsKabaddi } from "react-icons/md";
import { AiFillApi } from "react-icons/ai";

export default function HeroSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Update selectedCategory when language changes
  useEffect(() => {
    setSelectedCategory(t('hero.categories.all'));
  }, [t]);

  const categories = [
    t('hero.categories.all'),
    t('hero.categories.sport'),
    t('hero.categories.casino'),
    t('hero.categories.api'),
    t('hero.categories.betting'),
    t('hero.categories.development'),
    t('hero.categories.gaming'),
    t('hero.categories.streaming'),
  ];

  const services = [
    { id: 14, name: t('services.whiteLabel'), icon: <IoDesktop className="w-12 h-12" />, category: t('hero.categories.development') },
    { id: 16, name: t('services.casinoAppDev'), icon: <FaDice className="w-12 h-12" />, category: t('hero.categories.development') },
    { id: 19, name: t('services.liveCasino'), icon: <MdOutlineCasino className="w-12 h-12" />, category: t('hero.categories.betting') },
    { id: 17, name: t('services.gamblingAppDev'), icon: <MdDeveloperMode className="w-12 h-12" />, category: t('hero.categories.development') },
    { id: 6, name: t('services.casinoGamesApi'), icon: <GiDiceEightFacesEight className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 18, name: t('services.accurateSettlement'), icon: <IoCash className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 1, name: t('services.liveScores'), icon: <GiChart className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 2, name: t('services.liveOdds'), icon: <IoCash className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 3, name: t('services.playerTeamData'), icon: <SiDatadog className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 4, name: t('services.fancyBetting'), icon: <GiPokerHand className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 5, name: t('services.bookmakerOdds'), icon: <IoCash className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 7, name: t('services.scoreApi'), icon: <MdSportsScore className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 8, name: t('services.tvStreaming'), icon: <GiTv className="w-12 h-12" />, category: t('hero.categories.streaming') },
    { id: 9, name: t('services.fantasyAppDev'), icon: <GiTrophy className="w-12 h-12" />, category: t('hero.categories.development') },
    { id: 10, name: t('services.skilledBetting'), icon: <IoDesktop className="w-12 h-12" />, category: t('hero.categories.development') },
    { id: 11, name: t('services.sportsCoverage'), icon: <GiSoccerBall className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 12, name: t('services.virtualSports'), icon: <GiGamepad className="w-12 h-12" />, category: t('hero.categories.gaming') },
    { id: 13, name: t('services.sportsbookDev'), icon: <GiBasketballBall className="w-12 h-12" />, category: t('hero.categories.development') },
    { id: 15, name: t('services.premiumOdds'), icon: <IoCash className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 21, name: t('services.cricket'), icon: <GiCricketBat className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 22, name: t('services.soccer'), icon: <GiSoccerBall className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 23, name: t('services.tennis'), icon: <GiTennisRacket className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 24, name: t('services.basketball'), icon: <GiBasketballBall className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 25, name: t('services.racing'), icon: <FaRunning className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 26, name: t('services.kabaddi'), icon: <MdOutlineSportsKabaddi className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 27, name: t('services.mma'), icon: <MdSportsMartialArts className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 28, name: t('services.nbaApi'), icon: <SiNba className="w-12 h-12" />, category: t('hero.categories.api') },
    { id: 30, name: t('services.teenpatti'), icon: <GiCardJoker className="w-12 h-12" />, category: t('hero.categories.casino') },
    { id: 31, name: t('services.poker'), icon: <GiPokerHand className="w-12 h-12" />, category: t('hero.categories.casino') },
    { id: 32, name: t('services.greyhound'), icon: <GiJumpingDog className="w-12 h-12" />, category: t('hero.categories.sport') },
    { id: 33, name: t('services.horse'), icon: <GiHorseHead className="w-12 h-12" />, category: t('hero.categories.sport') },
  ];

  const carouselSlides = [
    {
      id: 1,
      image: 'https://placehold.co/800x300/1e40af/ffffff?text=Sports+API+Solutions',
      title: '',
      description: ''
    },
    {
      id: 2,
      image: 'https://placehold.co/800x300/dc2626/ffffff?text=Skilled+Betting+Platform+Development',
      title: '',
      description: ''
    },
    {
      id: 3,
      image: 'https://placehold.co/800x300/059669/ffffff?text=Fantasy+Sports+Apps',
      title: '',
      description: ''
    },
    {
      id: 4,
      image: 'https://placehold.co/800x300/7c2d12/ffffff?text=Casino+Game+Development',
      title: '',
      description: ''
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const filteredServices = (selectedCategory === t('hero.categories.all') || selectedCategory === '')
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="relative bg-white dark:bg-gray-900 transition-colors">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03]" />
      </div>

      <div className="relative pt-16 pb-8 lg:pt-20 lg:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Section */}
          <div className="text-center mb-8">
            {/* Carousel Banner */}
            <div className="relative">
              <div className="mt-2 sm:mt-0 relative h-48 sm:h-64 overflow-hidden rounded-2xl">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' :
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <div
                      className="w-full h-full bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-shadow-lg">
                            {slide.title}
                          </h3>
                          <p className="text-sm sm:text-base text-shadow">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-6 space-x-3">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                      index === currentSlide
                        ? 'bg-[#3B82F6] border-[#3B82F6] shadow-lg'
                        : 'bg-white/80 border-gray-300 hover:bg-white hover:border-[#3B82F6] shadow-md'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedCategory === category
                    ? 'bg-[#3B82F6] text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4
                        max-h-[600px] overflow-y-auto pr-3
                        scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="flex flex-col items-center p-4 rounded-xl
                         bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
                         shadow-md hover:shadow-lg transition-all cursor-pointer group border border-gray-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 rounded-full bg-[#3B82F6] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-900 dark:text-white text-center leading-tight">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}