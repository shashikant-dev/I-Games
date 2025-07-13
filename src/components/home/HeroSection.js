'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <div className="relative bg-white pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Services List */}
          <div>
            <h1 className="mb-8">
              <div className="text-[2.5rem] leading-[1.2] font-bold text-[#0F172A] mb-2">
                Transform Your Vision
              </div>
              <div className="text-[2.5rem] leading-[1.2] font-bold text-[#3B82F6]">
                Into Game-Changing<br />Sports Apps
              </div>
            </h1>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${selectedCategory === category
                      ? 'bg-[#3B82F6] text-white'
                      : 'bg-[#F8FAFC] text-[#64748B] hover:text-[#0F172A]'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-3 max-h-[480px] overflow-y-auto pr-4
                          scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
              {filteredServices.map(service => (
                <div
                  key={service.id}
                  className="flex items-center gap-3 p-3 rounded-lg
                           bg-[#F8FAFC] hover:bg-[#F1F5F9]
                           transition-all cursor-pointer"
                >
                  <div className="text-[#3B82F6] flex-shrink-0">
                    {service.icon}
                  </div>
                  <span className="text-sm font-medium text-[#0F172A] line-clamp-2">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[600px] hidden lg:block">
            <Image
              src="/hero-image.png"
              alt="Sports App Development"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}