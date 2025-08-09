import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaStar } from 'react-icons/fa';

const CategoryHero = ({ category, data }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      sports: '⚽',
      casino: '🎰',
      api: '🔗',
      betting: '🎯',
      development: '💻',
      gaming: '🎮',
      streaming: '📺'
    };
    return icons[category] || '🚀';
  };

    return (
    <section className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.services[0].image}
          alt={data.title}
          fill
          className="object-cover opacity-5 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/70 to-purple-50/80 dark:from-blue-900/90 dark:via-gray-900/80 dark:to-black/90"></div>

        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Category Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 dark:bg-blue-600/20 border border-blue-200 dark:border-blue-500/30 mb-6 backdrop-blur-sm">
            <span className="text-2xl mr-2">{getCategoryIcon(category)}</span>
            <span className="text-blue-700 dark:text-blue-300 font-medium capitalize">{category} Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            {data.title}
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text">
              Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          {/* Key Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {data.highlights?.map((highlight, index) => (
              <div key={index} className="flex items-center bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200 dark:border-white/20">
                <FaCheck className="text-green-600 dark:text-green-400 mr-2 text-sm" />
                <span className="text-gray-800 dark:text-white text-sm font-medium">{highlight}</span>
              </div>
            )) || [
              <div key="1" className="flex items-center bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200 dark:border-white/20">
                <FaCheck className="text-green-600 dark:text-green-400 mr-2 text-sm" />
                <span className="text-gray-800 dark:text-white text-sm font-medium">Industry Leading</span>
              </div>,
              <div key="2" className="flex items-center bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200 dark:border-white/20">
                <FaCheck className="text-green-600 dark:text-green-400 mr-2 text-sm" />
                <span className="text-gray-800 dark:text-white text-sm font-medium">24/7 Support</span>
              </div>,
              <div key="3" className="flex items-center bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200 dark:border-white/20">
                <FaCheck className="text-green-600 dark:text-green-400 mr-2 text-sm" />
                <span className="text-gray-800 dark:text-white text-sm font-medium">Custom Solutions</span>
              </div>
            ]}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <FaArrowRight className="ml-2" />
            </Link>

          </div>

          {/* Rating/Trust Indicator */}
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex text-yellow-500 dark:text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-sm" />
              ))}
            </div>
            <span className="text-gray-600 dark:text-white/80 text-sm">4.9/5 based on 500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
