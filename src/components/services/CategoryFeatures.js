import { FaRocket, FaShieldAlt, FaClock, FaUsers, FaCode, FaMobile, FaCloud, FaChartLine } from 'react-icons/fa';

const CategoryFeatures = ({ category, data }) => {
  const getFeatures = (category) => {
    const features = {
      sports: [
        {
          icon: <FaClock className="w-8 h-8" />,
          title: 'Real-Time Data',
          description: 'Live sports data with sub-second updates and 99.9% uptime guarantee'
        },
        {
          icon: <FaChartLine className="w-8 h-8" />,
          title: 'Advanced Analytics',
          description: 'Comprehensive statistics and performance analytics for better decision making'
        },
        {
          icon: <FaCloud className="w-8 h-8" />,
          title: 'Global Coverage',
          description: 'Worldwide sports coverage including all major leagues and tournaments'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          title: 'Reliable Infrastructure',
          description: 'Enterprise-grade infrastructure ensuring maximum reliability and performance'
        }
      ],
      casino: [
        {
          icon: <FaRocket className="w-8 h-8" />,
          title: 'Live Gaming',
          description: 'Real-time casino gaming with professional dealers and HD streaming'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          title: 'Secure Transactions',
          description: 'Bank-grade security for all financial transactions and user data'
        },
        {
          icon: <FaMobile className="w-8 h-8" />,
          title: 'Mobile Optimized',
          description: 'Seamless gaming experience across all devices and platforms'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          title: 'Multi-Player Support',
          description: 'Support for thousands of concurrent players with real-time interactions'
        }
      ],
      api: [
        {
          icon: <FaCode className="w-8 h-8" />,
          title: 'RESTful APIs',
          description: 'Clean, well-documented APIs following industry best practices'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          title: 'Low Latency',
          description: 'Ultra-fast response times with global CDN distribution'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          title: 'Secure Access',
          description: 'Enterprise-grade security with API key management and rate limiting'
        },
        {
          icon: <FaCloud className="w-8 h-8" />,
          title: 'Scalable Architecture',
          description: 'Auto-scaling infrastructure to handle any volume of requests'
        }
      ],
      betting: [
        {
          icon: <FaChartLine className="w-8 h-8" />,
          title: 'Risk Management',
          description: 'Advanced risk management tools and real-time monitoring systems'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          title: 'Live Betting',
          description: 'Real-time betting with instant odds updates and live event streaming'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          title: 'Compliance Ready',
          description: 'Built-in compliance features for various regulatory requirements'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          title: 'Player Management',
          description: 'Comprehensive player management with KYC and responsible gaming tools'
        }
      ],
      development: [
        {
          icon: <FaCode className="w-8 h-8" />,
          title: 'Custom Solutions',
          description: 'Tailored development solutions designed specifically for your business needs'
        },
        {
          icon: <FaMobile className="w-8 h-8" />,
          title: 'Cross-Platform',
          description: 'Native and hybrid applications for iOS, Android, and web platforms'
        },
        {
          icon: <FaRocket className="w-8 h-8" />,
          title: 'Rapid Deployment',
          description: 'Agile development methodology for faster time-to-market'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          title: 'Quality Assurance',
          description: 'Comprehensive testing and quality assurance processes'
        }
      ],
      gaming: [
        {
          icon: <FaRocket className="w-8 h-8" />,
          title: 'High Performance',
          description: 'Optimized gaming engines for smooth gameplay and high frame rates'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          title: 'Multiplayer Support',
          description: 'Real-time multiplayer gaming with advanced networking capabilities'
        },
        {
          icon: <FaCloud className="w-8 h-8" />,
          title: 'Cloud Gaming',
          description: 'Cloud-based gaming solutions for instant access without downloads'
        },
        {
          icon: <FaMobile className="w-8 h-8" />,
          title: 'Cross-Platform Play',
          description: 'Seamless gaming experience across all devices and platforms'
        }
      ],
      streaming: [
        {
          icon: <FaClock className="w-8 h-8" />,
          title: 'Low Latency',
          description: 'Ultra-low latency streaming for real-time interactive experiences'
        },
        {
          icon: <FaCloud className="w-8 h-8" />,
          title: 'Global CDN',
          description: 'Worldwide content delivery network for optimal streaming quality'
        },
        {
          icon: <FaRocket className="w-8 h-8" />,
          title: 'HD Quality',
          description: '4K streaming capabilities with adaptive bitrate technology'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          title: 'DRM Protection',
          description: 'Advanced digital rights management for content protection'
        }
      ]
    };

    return features[category] || features.development;
  };

  const features = getFeatures(category);

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Key Features & Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the powerful features that make our {category} solutions industry-leading
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFeatures;
