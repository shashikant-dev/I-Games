'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  IoStatsChart, IoGameController, IoTv, IoFootball,
  IoBasketball, IoCash, IoTrophy, IoDesktop
} from 'react-icons/io5';
import {
  SiWebrtc, SiDatadog, SiWorldhealthorganization
} from 'react-icons/si';
import {
  MdSports, MdCasino, MdSportsCricket, MdApi,
  MdDeveloperMode, MdSportsScore, MdGames
} from 'react-icons/md';
import { FaDice } from 'react-icons/fa';
import {
  GiSoccerBall, GiBasketballBall, GiTennisRacket, GiPokerHand,
  GiDiceEightFacesEight, GiCricketBat, GiGamepad, GiTrophy,
  GiTv, GiChart
} from 'react-icons/gi';

const services = [
  {
    id: 1,
    name: 'Live Scores & Stats API',
    icon: <GiChart className="w-12 h-12" />,
    category: 'Data'
  },
  {
    id: 2,
    name: 'Live Odds & Predictions API',
    icon: <IoCash className="w-12 h-12" />,
    category: 'Betting'
  },
  {
    id: 3,
    name: 'Player & Team Data API',
    icon: <SiDatadog className="w-12 h-12" />,
    category: 'Data'
  },
  {
    id: 4,
    name: 'Fancy Betting API',
    icon: <GiPokerHand className="w-12 h-12" />,
    category: 'Betting'
  },
  {
    id: 5,
    name: 'Bookmaker Odds API',
    icon: <IoCash className="w-12 h-12" />,
    category: 'Betting'
  },
  {
    id: 6,
    name: 'Casino Games API',
    icon: <GiDiceEightFacesEight className="w-12 h-12" />,
    category: 'Casino'
  },
  {
    id: 7,
    name: 'Score API',
    icon: <MdSportsScore className="w-12 h-12" />,
    category: 'Data'
  },
  {
    id: 8,
    name: 'TV Streaming API',
    icon: <GiTv className="w-12 h-12" />,
    category: 'Streaming'
  },
  {
    id: 9,
    name: 'Fantasy App Development',
    icon: <GiTrophy className="w-12 h-12" />,
    category: 'Development'
  },
  {
    id: 10,
    name: 'Betting Platform Development',
    icon: <IoDesktop className="w-12 h-12" />,
    category: 'Development'
  },
  {
    id: 11,
    name: 'Sports Coverage APIs',
    icon: <GiSoccerBall className="w-12 h-12" />,
    category: 'Data'
  },
  {
    id: 12,
    name: 'Virtual Sports Integration',
    icon: <GiGamepad className="w-12 h-12" />,
    category: 'Gaming'
  },
  {
    id: 13,
    name: 'Sportsbook Development',
    icon: <GiBasketballBall className="w-12 h-12" />,
    category: 'Development'
  },
  {
    id: 14,
    name: 'Whitelabel Betting Platform',
    icon: <IoDesktop className="w-12 h-12" />,
    category: 'Development'
  },
  {
    id: 15,
    name: 'Premium Odds API',
    icon: <IoCash className="w-12 h-12" />,
    category: 'Betting'
  },
  {
    id: 16,
    name: 'Casino App Development',
    icon: <FaDice className="w-12 h-12" />,
    category: 'Development'
  },
  {
    id: 17,
    name: 'Gambling App Development',
    icon: <MdCasino className="w-12 h-12" />,
    category: 'Development'
  },
  {
    id: 18,
    name: 'Fantasy Points API',
    icon: <IoTrophy className="w-12 h-12" />,
    category: 'Data'
  },
  {
    id: 19,
    name: 'Worldwide Sports Coverage',
    icon: <GiTennisRacket className="w-12 h-12" />,
    category: 'Data'
  },
  {
    id: 20,
    name: 'API Trial & Developer Tools',
    icon: <MdDeveloperMode className="w-12 h-12" />,
    category: 'Development'
  }
];

const categories = [
  'All',
  'Data',
  'Betting',
  'Casino',
  'Development',
  'Gaming',
  'Streaming'
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
    image: 'https://placehold.co/800x300/dc2626/ffffff?text=Betting+Platform+Development',
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

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const filteredServices = selectedCategory === 'All'
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
              <div className="relative h-48 sm:h-64 overflow-hidden rounded-2xl">
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
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
                        max-h-[500px] overflow-y-auto pr-3
                        scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="flex items-center gap-4 p-4 rounded-lg
                         bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                         shadow-sm transition-all cursor-pointer group min-h-[80px]"
              >
                <div className="text-[#3B82F6] flex-shrink-0">
                  {service.icon}
                </div>
                <span className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2 leading-relaxed">
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