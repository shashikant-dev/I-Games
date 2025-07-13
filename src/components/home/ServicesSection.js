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
    <section className="py-20 bg-theme-bg-primary relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 via-theme-bg-primary to-theme-bg-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4">
            Our offerings that make you stand out in the
            <span className="text-brand-primary"> Gaming Industry</span>
          </h2>
          <p className="text-theme-text-secondary text-lg max-w-3xl mx-auto">
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
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary via-brand-primary to-brand-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />

      <div className="relative bg-theme-bg-secondary/80 backdrop-blur-sm border border-theme-border rounded-xl p-8 h-full transform transition-all duration-300 group-hover:scale-[1.02] group-hover:border-brand-primary/50">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full opacity-20 blur-sm" />
          <Image
            src={icon}
            alt={title}
            fill
            className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-theme-text-primary mb-4">{title}</h3>
        <p className="text-theme-text-secondary">{description}</p>
      </div>
    </div>
  );
};

export default ServicesSection;