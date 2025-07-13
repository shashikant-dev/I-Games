'use client';

import { HiGlobeAlt } from 'react-icons/hi';
import { IoGameController } from 'react-icons/io5';
import { MdSports } from 'react-icons/md';

const stats = [
  {
    number: '19',
    label: 'Years Delivering Games',
    gradient: 'from-purple-400/20 to-purple-600/20',
    textColor: 'text-purple-600'
  },
  {
    number: '120+',
    label: 'In-house Professionals',
    gradient: 'from-blue-400/20 to-green-400/20',
    textColor: 'text-blue-500'
  },
  {
    number: '200+',
    label: 'Games Delivered',
    gradient: 'from-orange-400/20 to-red-400/20',
    textColor: 'text-orange-500'
  }
];

const offerings = [
  {
    icon: <HiGlobeAlt className="w-12 h-12" />,
    title: 'Best Gaming Web & App',
    description: 'Develop cutting-edge gaming platforms with modern technology stack'
  },
  {
    icon: <IoGameController className="w-12 h-12" />,
    title: 'Game App Development',
    description: 'Create engaging and immersive gaming experiences for all platforms'
  },
  {
    icon: <MdSports className="w-12 h-12" />,
    title: 'Top Quality Fantasy Sports',
    description: 'Build feature-rich fantasy sports platforms with advanced analytics'
  }
];

export default function OfferingsSection() {
  return (
    <div className="relative bg-white dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Our offerings that make you stand out in the{' '}
            <span className="text-[#3B82F6]">Gaming Industry</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We stand tall in the gaming app development industry for delivering remarkable gaming solutions.
            Our seasoned developers craft top-quality gaming experiences that engage and delight users.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl p-8
                         bg-gradient-to-br ${stat.gradient}
                         backdrop-blur-sm transition-all duration-300
                         hover:shadow-lg`}
            >
              <div className="relative z-10">
                <div className={`text-5xl font-bold mb-2 ${stat.textColor}`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-white dark:bg-gray-800
                         border border-gray-100 dark:border-gray-700
                         hover:shadow-xl transition-all duration-300
                         group"
            >
              <div className="text-[#3B82F6] mb-4 transition-transform duration-300
                            group-hover:scale-110">
                {offering.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {offering.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}