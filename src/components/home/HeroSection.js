'use client';

import { useState } from 'react';
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

const services = [
  {
    id: 1,
    name: 'Live Scores & Stats API',
    icon: <IoStatsChart className="w-6 h-6" />,
    category: 'Data'
  },
  {
    id: 2,
    name: 'Live Odds & Predictions API',
    icon: <IoCash className="w-6 h-6" />,
    category: 'Betting'
  },
  {
    id: 3,
    name: 'Player & Team Data API',
    icon: <SiDatadog className="w-6 h-6" />,
    category: 'Data'
  },
  {
    id: 4,
    name: 'Fancy Betting API',
    icon: <IoCash className="w-6 h-6" />,
    category: 'Betting'
  },
  {
    id: 5,
    name: 'Bookmaker Odds API',
    icon: <IoCash className="w-6 h-6" />,
    category: 'Betting'
  },
  {
    id: 6,
    name: 'Casino Games API',
    icon: <MdCasino className="w-6 h-6" />,
    category: 'Casino'
  },
  {
    id: 7,
    name: 'Score API',
    icon: <MdSportsScore className="w-6 h-6" />,
    category: 'Data'
  },
  {
    id: 8,
    name: 'TV Streaming API',
    icon: <IoTv className="w-6 h-6" />,
    category: 'Streaming'
  },
  {
    id: 9,
    name: 'Fantasy App Development',
    icon: <IoTrophy className="w-6 h-6" />,
    category: 'Development'
  },
  {
    id: 10,
    name: 'Betting Platform Development',
    icon: <IoDesktop className="w-6 h-6" />,
    category: 'Development'
  },
  {
    id: 11,
    name: 'Sports Coverage APIs',
    icon: <MdSports className="w-6 h-6" />,
    category: 'Data'
  },
  {
    id: 12,
    name: 'Virtual Sports Integration',
    icon: <IoGameController className="w-6 h-6" />,
    category: 'Gaming'
  },
  {
    id: 13,
    name: 'Sportsbook Development',
    icon: <IoFootball className="w-6 h-6" />,
    category: 'Development'
  },
  {
    id: 14,
    name: 'Whitelabel Betting Platform',
    icon: <IoDesktop className="w-6 h-6" />,
    category: 'Development'
  },
  {
    id: 15,
    name: 'Premium Odds API',
    icon: <IoCash className="w-6 h-6" />,
    category: 'Betting'
  },
  {
    id: 16,
    name: 'Casino App Development',
    icon: <FaDice className="w-6 h-6" />,
    category: 'Development'
  },
  {
    id: 17,
    name: 'Gambling App Development',
    icon: <MdCasino className="w-6 h-6" />,
    category: 'Development'
  },
  {
    id: 18,
    name: 'Fantasy Points API',
    icon: <IoTrophy className="w-6 h-6" />,
    category: 'Data'
  },
  {
    id: 19,
    name: 'Worldwide Sports Coverage',
    icon: <SiWorldhealthorganization className="w-6 h-6" />,
    category: 'Data'
  },
  {
    id: 20,
    name: 'API Trial & Developer Tools',
    icon: <MdDeveloperMode className="w-6 h-6" />,
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

export default function HeroSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
          <div className="text-center mb-8 relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 z-0 rounded-2xl overflow-hidden"
              style={{
                backgroundImage: 'url(https://www.laespanavacilada.com/indibet.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(0.5)'
              }}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 z-1 bg-black/30 rounded-2xl" />

            {/* Content */}
            <div className="relative z-2 px-4 sm:px-6 py-8 sm:py-12 rounded-2xl">
              <h1 className="max-w-5xl mx-auto">
                <div className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.8rem] leading-[1.3] sm:leading-[1.2] font-bold text-white mb-3 sm:mb-4 tracking-wide text-shadow-lg">
                  Power Your Sports Platform with Our Complete API & Development Suite
                </div>
                <div className="relative px-4 py-2">
                  <div className="absolute inset-0 bg-black/50 blur-xl rounded-3xl transform scale-105"></div>
                  <div className="absolute inset-0 bg-[#3B82F6]/10 blur-lg rounded-3xl"></div>
                  <div className="text-[1.5rem] sm:text-[1.8rem] md:text-[2.8rem] leading-[1.3] sm:leading-[1.2] font-bold text-[#3B82F6] text-shadow-lg relative">
                    Into Game-Changing<br className="hidden sm:inline" />Sports Apps
                  </div>
                </div>
              </h1>

              {/* Description Text */}
              <div className="relative px-4 py-2 mt-4 sm:mt-6">
                <div className="absolute inset-0 bg-black/50 blur-xl rounded-3xl transform scale-105"></div>
                <div className="absolute inset-0 bg-[#3B82F6]/5 blur-lg rounded-3xl"></div>
                <p className="relative text-base sm:text-lg text-gray-100 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed tracking-wide text-shadow-lg">
                  From live scores, odds, and predictions to fantasy games, casino apps, and streaming platforms — we deliver robust APIs and full-scale development solutions tailored for modern sports and betting businesses.
                </p>
              </div>

              {/* Stats Section */}
              <div className="flex justify-center gap-6 sm:gap-8 md:gap-16 mt-8 sm:mt-10">
                <div className="text-center bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3B82F6] text-shadow-sm">1200+</div>
                  <div className="text-xs sm:text-sm text-gray-100 mt-1 font-medium tracking-wide">Success Stories</div>
                </div>
                <div className="text-center bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3B82F6] text-shadow-sm">4.9/5</div>
                  <div className="text-xs sm:text-sm text-gray-100 mt-1 font-medium tracking-wide">Client Rating</div>
                </div>
                <div className="text-center bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#3B82F6] text-shadow-sm">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-100 mt-1 font-medium tracking-wide">Support</div>
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3
                        max-h-[500px] overflow-y-auto pr-3
                        scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {filteredServices.map(service => (
              <div
                key={service.id}
                className="flex items-center gap-3 p-3 rounded-lg
                         bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700
                         shadow-sm transition-all cursor-pointer group"
              >
                <div className="text-[#3B82F6] flex-shrink-0">
                  {service.icon}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
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