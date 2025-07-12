'use client';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [
    {
      title: 'Best Gaming Web & App Development',
      description: 'After accumulating years of expertise we take immense pride in delivering cutting-edge sports and gaming app development services.',
      icon: '/globe.svg'
    },
    {
      title: 'Game App Development',
      description: 'Our adept game developers craft winsome gaming software solutions to help you deliver a seamless gaming experience.',
      icon: '/window.svg'
    },
    {
      title: 'Top Quality Fantasy Sports Development',
      description: 'We offer cutting-edge fantasy sports solutions for various sports like cricket, football, tennis, kabaddi, and many other sports.',
      icon: '/file.svg'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our offerings that make you stand out in the
            <span className="text-primary"> Gaming Industry</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We stand tall in the gaming app development industry for delivering remarkable gaming solutions.
            Our seasoned developers craft top-quality gaming experiences that engage and delight users.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="group relative">
      <div className="bg-black border border-primary/20 rounded-xl p-8 h-full transform transition-transform duration-300 group-hover:-translate-y-2">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 relative">
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default ServicesSection;