import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const CategoryBenefits = ({ category, data }) => {
  const getBenefits = (category) => {
    const benefits = {
      sports: {
        title: 'Why Choose Our Sports Solutions?',
        description: 'Transform your sports business with our comprehensive data and platform solutions',
        benefits: [
          'Real-time data accuracy with 99.9% uptime',
          'Comprehensive coverage of global sports events',
          'Advanced analytics and predictive insights',
          'Scalable infrastructure for any business size',
          'API-first approach for easy integration',
          '24/7 technical support and monitoring'
        ],
        image: '/assets/images/sport.avif'
      },
      casino: {
        title: 'Why Choose Our Casino Solutions?',
        description: 'Create engaging casino experiences with our premium gaming platform',
        benefits: [
          'Live casino with professional dealers',
          'Secure payment processing and KYC',
          'Mobile-optimized gaming experience',
          'Extensive game library and providers',
          'Real-time player management tools',
          'Compliance with gaming regulations'
        ],
        image: '/assets/images/casino.jpeg'
      },
      api: {
        title: 'Why Choose Our API Solutions?',
        description: 'Power your applications with our robust and reliable API infrastructure',
        benefits: [
          'RESTful APIs with comprehensive documentation',
          'Sub-100ms response times globally',
          'Enterprise-grade security and authentication',
          'Auto-scaling infrastructure',
          'Real-time data streaming capabilities',
          'Dedicated support and SLA guarantees'
        ],
        image: '/assets/images/api.webp'
      },
      betting: {
        title: 'Why Choose Our Betting Solutions?',
        description: 'Build successful betting platforms with our comprehensive solutions',
        benefits: [
          'Advanced risk management systems',
          'Real-time odds and live betting',
          'Multi-sport coverage and markets',
          'Player analytics and insights',
          'Regulatory compliance features',
          'Fraud detection and prevention'
        ],
        image: '/assets/images/betting.jpg'
      },
      development: {
        title: 'Why Choose Our Development Services?',
        description: 'Accelerate your digital transformation with our expert development team',
        benefits: [
          'Custom solutions tailored to your needs',
          'Agile development methodology',
          'Cross-platform compatibility',
          'Modern technology stack',
          'Quality assurance and testing',
          'Post-launch support and maintenance'
        ],
        image: '/assets/images/sports-betting-platform.jpg'
      },
      gaming: {
        title: 'Why Choose Our Gaming Solutions?',
        description: 'Create immersive gaming experiences with cutting-edge technology',
        benefits: [
          'High-performance gaming engines',
          'Multiplayer and social features',
          'Cross-platform compatibility',
          'Cloud gaming capabilities',
          'Advanced graphics and audio',
          'Monetization and analytics tools'
        ],
        image: '/assets/images/mobile-gaming.webp'
      },
      streaming: {
        title: 'Why Choose Our Streaming Solutions?',
        description: 'Deliver high-quality streaming experiences to global audiences',
        benefits: [
          'Ultra-low latency streaming',
          '4K and HDR video quality',
          'Global CDN distribution',
          'Adaptive bitrate streaming',
          'DRM and content protection',
          'Real-time analytics and monitoring'
        ],
        image: '/assets/images/streaming.jpeg'
      }
    };

    return benefits[category] || benefits.development;
  };

  const benefitData = getBenefits(category);

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {benefitData.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefitData.description}
              </p>
            </div>

            <div className="space-y-4">
              {benefitData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-green-500 mt-0.5" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/services"
                className=" inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More About Our Solutions
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={benefitData.image}
                alt={`${category} solutions benefits`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBenefits;
