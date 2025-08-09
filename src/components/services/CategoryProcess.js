import { FaLightbulb, FaProjectDiagram, FaCode, FaRocket, FaHeadset, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const CategoryProcess = ({ category, data }) => {
  const getProcess = (category) => {
    const processes = {
      sports: [
        {
          icon: <FaLightbulb className="w-6 h-6" />,
          title: 'Discovery & Analysis',
          description: 'We analyze your sports data requirements and identify the best solutions for your business goals.'
        },
        {
          icon: <FaProjectDiagram className="w-6 h-6" />,
          title: 'Data Integration',
          description: 'Seamless integration of our sports APIs and data feeds into your existing systems.'
        },
        {
          icon: <FaCode className="w-6 h-6" />,
          title: 'Custom Development',
          description: 'Tailored development of sports platforms and applications to meet your specific needs.'
        },
        {
          icon: <FaRocket className="w-6 h-6" />,
          title: 'Launch & Optimization',
          description: 'Go-live support with performance monitoring and continuous optimization for best results.'
        },
        {
          icon: <FaHeadset className="w-6 h-6" />,
          title: 'Ongoing Support',
          description: '24/7 technical support and regular updates to keep your sports platform running smoothly.'
        }
      ],
      casino: [
        {
          icon: <FaLightbulb className="w-6 h-6" />,
          title: 'Platform Planning',
          description: 'Comprehensive planning of your casino platform including game selection and user experience design.'
        },
        {
          icon: <FaProjectDiagram className="w-6 h-6" />,
          title: 'Game Integration',
          description: 'Integration of casino games, payment systems, and live dealer solutions into your platform.'
        },
        {
          icon: <FaCode className="w-6 h-6" />,
          title: 'Custom Features',
          description: 'Development of custom casino features, bonuses, and player management tools.'
        },
        {
          icon: <FaRocket className="w-6 h-6" />,
          title: 'Testing & Launch',
          description: 'Thorough testing of all casino features followed by smooth platform launch and monitoring.'
        },
        {
          icon: <FaHeadset className="w-6 h-6" />,
          title: 'Player Support',
          description: 'Ongoing player support, platform maintenance, and continuous feature enhancements.'
        }
      ],
      api: [
        {
          icon: <FaLightbulb className="w-6 h-6" />,
          title: 'API Assessment',
          description: 'Detailed assessment of your API requirements and integration complexity analysis.'
        },
        {
          icon: <FaProjectDiagram className="w-6 h-6" />,
          title: 'Integration Design',
          description: 'Design of API integration architecture and documentation for seamless implementation.'
        },
        {
          icon: <FaCode className="w-6 h-6" />,
          title: 'Implementation',
          description: 'API integration implementation with comprehensive testing and error handling.'
        },
        {
          icon: <FaRocket className="w-6 h-6" />,
          title: 'Performance Tuning',
          description: 'Optimization of API performance and scalability for high-volume production use.'
        },
        {
          icon: <FaHeadset className="w-6 h-6" />,
          title: 'API Maintenance',
          description: 'Continuous API monitoring, updates, and dedicated technical support.'
        }
      ],
      betting: [
        {
          icon: <FaLightbulb className="w-6 h-6" />,
          title: 'Market Research',
          description: 'Analysis of betting markets, regulations, and competitor landscape for your target regions.'
        },
        {
          icon: <FaProjectDiagram className="w-6 h-6" />,
          title: 'Platform Architecture',
          description: 'Design of betting platform architecture with risk management and compliance features.'
        },
        {
          icon: <FaCode className="w-6 h-6" />,
          title: 'Development & Testing',
          description: 'Full-scale development of betting platform with rigorous testing and security audits.'
        },
        {
          icon: <FaRocket className="w-6 h-6" />,
          title: 'Launch & Compliance',
          description: 'Platform launch with regulatory compliance verification and market entry support.'
        },
        {
          icon: <FaHeadset className="w-6 h-6" />,
          title: 'Operations Support',
          description: 'Ongoing operational support, risk monitoring, and platform optimization.'
        }
      ],
      development: [
        {
          icon: <FaLightbulb className="w-6 h-6" />,
          title: 'Requirements Analysis',
          description: 'Thorough analysis of your project requirements and technical specifications.'
        },
        {
          icon: <FaProjectDiagram className="w-6 h-6" />,
          title: 'Solution Design',
          description: 'Architectural design and technology stack selection for optimal performance.'
        },
        {
          icon: <FaCode className="w-6 h-6" />,
          title: 'Agile Development',
          description: 'Iterative development with regular updates and feedback incorporation.'
        },
        {
          icon: <FaRocket className="w-6 h-6" />,
          title: 'Quality Assurance',
          description: 'Comprehensive testing and quality assurance before project delivery.'
        },
        {
          icon: <FaHeadset className="w-6 h-6" />,
          title: 'Support & Maintenance',
          description: 'Post-launch support, maintenance, and continuous improvement services.'
        }
      ],
      gaming: [
        {
          icon: <FaLightbulb className="w-6 h-6" />,
          title: 'Game Concept',
          description: 'Collaborative development of game concepts, mechanics, and user experience design.'
        },
        {
          icon: <FaProjectDiagram className="w-6 h-6" />,
          title: 'Technical Design',
          description: 'Game architecture design, technology selection, and development roadmap creation.'
        },
        {
          icon: <FaCode className="w-6 h-6" />,
          title: 'Game Development',
          description: 'Full-cycle game development with regular milestones and playable builds.'
        },
        {
          icon: <FaRocket className="w-6 h-6" />,
          title: 'Testing & Polish',
          description: 'Extensive game testing, optimization, and final polish before market release.'
        },
        {
          icon: <FaHeadset className="w-6 h-6" />,
          title: 'Live Operations',
          description: 'Post-launch support, content updates, and community management services.'
        }
      ],
      streaming: [
        {
          icon: <FaLightbulb className="w-6 h-6" />,
          title: 'Streaming Strategy',
          description: 'Development of streaming strategy including content delivery and audience targeting.'
        },
        {
          icon: <FaProjectDiagram className="w-6 h-6" />,
          title: 'Infrastructure Setup',
          description: 'Setup of streaming infrastructure, CDN configuration, and encoding optimization.'
        },
        {
          icon: <FaCode className="w-6 h-6" />,
          title: 'Platform Integration',
          description: 'Integration of streaming capabilities into your platform with custom features.'
        },
        {
          icon: <FaRocket className="w-6 h-6" />,
          title: 'Go-Live Support',
          description: 'Live streaming launch support with real-time monitoring and optimization.'
        },
        {
          icon: <FaHeadset className="w-6 h-6" />,
          title: 'Performance Monitoring',
          description: 'Continuous monitoring of streaming performance and audience analytics.'
        }
      ]
    };

    return processes[category] || processes.development;
  };

  const process = getProcess(category);

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We follow a systematic approach to ensure successful delivery of your {category} solution
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="flex justify-between items-start relative">
              {/* Timeline line */}
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>

              {process.map((step, index) => (
                <div key={index} className="relative flex-1 text-center max-w-xs">
                  {/* Step number circle */}
                  <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-full mb-6 shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Step indicator */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="text-blue-600 dark:text-blue-400 mr-3">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your {category} project and create a customized solution that drives results for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <FaArrowRight className="ml-2" />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProcess;
