import { FaUsers, FaRocket, FaClock, FaGlobe, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const CategoryStats = ({ category, data }) => {
  const getStats = (category) => {
    const stats = {
      sports: [
        {
          icon: <FaGlobe className="w-8 h-8" />,
          number: '50+',
          label: 'Sports Covered',
          description: 'Global sports coverage'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          number: '<100ms',
          label: 'Response Time',
          description: 'Lightning-fast data delivery'
        },
        {
          icon: <FaChartLine className="w-8 h-8" />,
          number: '1M+',
          label: 'Events Monthly',
          description: 'Live sports events tracked'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          number: '99.9%',
          label: 'Uptime',
          description: 'Guaranteed reliability'
        }
      ],
      casino: [
        {
          icon: <FaRocket className="w-8 h-8" />,
          number: '500+',
          label: 'Casino Games',
          description: 'Extensive game library'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          number: '10K+',
          label: 'Concurrent Players',
          description: 'Simultaneous gaming support'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          number: '24/7',
          label: 'Live Dealers',
          description: 'Round-the-clock gaming'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          number: '100%',
          label: 'Secure',
          description: 'Bank-grade security'
        }
      ],
      api: [
        {
          icon: <FaRocket className="w-8 h-8" />,
          number: '1B+',
          label: 'API Calls',
          description: 'Monthly API requests handled'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          number: '<50ms',
          label: 'Latency',
          description: 'Global average response time'
        },
        {
          icon: <FaGlobe className="w-8 h-8" />,
          number: '200+',
          label: 'Countries',
          description: 'Global API coverage'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          number: '99.99%',
          label: 'Reliability',
          description: 'Enterprise-grade uptime'
        }
      ],
      betting: [
        {
          icon: <FaChartLine className="w-8 h-8" />,
          number: '10K+',
          label: 'Markets',
          description: 'Betting markets available'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          number: 'Real-time',
          label: 'Odds Updates',
          description: 'Live odds management'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          number: '1M+',
          label: 'Bets Processed',
          description: 'Monthly bet processing'
        },
        {
          icon: <FaShieldAlt className="w-8 h-8" />,
          number: '100%',
          label: 'Compliant',
          description: 'Regulatory compliance'
        }
      ],
      development: [
        {
          icon: <FaRocket className="w-8 h-8" />,
          number: '500+',
          label: 'Projects',
          description: 'Successfully delivered'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          number: '120+',
          label: 'Developers',
          description: 'Expert development team'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          number: '30%',
          label: 'Faster',
          description: 'Time to market'
        },
        {
          icon: <FaChartLine className="w-8 h-8" />,
          number: '19+',
          label: 'Years',
          description: 'Industry experience'
        }
      ],
      gaming: [
        {
          icon: <FaRocket className="w-8 h-8" />,
          number: '60fps',
          label: 'Performance',
          description: 'Smooth gaming experience'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          number: '100K+',
          label: 'Players',
          description: 'Concurrent gaming support'
        },
        {
          icon: <FaGlobe className="w-8 h-8" />,
          number: '50+',
          label: 'Platforms',
          description: 'Cross-platform support'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          number: '<20ms',
          label: 'Latency',
          description: 'Ultra-low gaming latency'
        }
      ],
      streaming: [
        {
          icon: <FaRocket className="w-8 h-8" />,
          number: '4K',
          label: 'Video Quality',
          description: 'Ultra HD streaming'
        },
        {
          icon: <FaClock className="w-8 h-8" />,
          number: '<1s',
          label: 'Latency',
          description: 'Ultra-low streaming delay'
        },
        {
          icon: <FaGlobe className="w-8 h-8" />,
          number: '100+',
          label: 'CDN Nodes',
          description: 'Global distribution'
        },
        {
          icon: <FaUsers className="w-8 h-8" />,
          number: '1M+',
          label: 'Viewers',
          description: 'Concurrent streaming capacity'
        }
      ]
    };

    return stats[category] || stats.development;
  };

  const stats = getStats(category);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 dark:from-blue-900 dark:via-purple-900 dark:to-blue-900 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/images/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/30 dark:bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200/30 dark:bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
                    <p className="text-xl text-gray-600 dark:text-blue-100 max-w-3xl mx-auto">
            Our {category} solutions deliver exceptional results across the globe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:bg-blue-100 dark:group-hover:bg-white/20 transition-colors duration-300 border border-gray-200 dark:border-white/20">
                <div className="text-blue-600 dark:text-blue-300 group-hover:text-blue-700 dark:group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-xl font-semibold mb-2 text-gray-700 dark:text-blue-100">
                {stat.label}
              </div>
              <div className="text-gray-600 dark:text-blue-200 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl px-8 py-4 border border-gray-200 dark:border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-blue-200">Client Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">ISO 27001</div>
              <div className="text-sm text-gray-600 dark:text-blue-200">Certified</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-300">24/7</div>
              <div className="text-sm text-gray-600 dark:text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryStats;
