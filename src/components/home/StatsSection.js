'use client';
import { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: 19,
      label: 'Years Delivering Games',
      suffix: '',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-indigo-500'
    },
    {
      number: 120,
      label: 'In-house Professionals',
      suffix: '+',
      gradientFrom: 'from-brand-primary',
      gradientTo: 'to-brand-secondary'
    },
    {
      number: 200,
      label: 'Games Delivered',
      suffix: '+',
      gradientFrom: 'from-brand-secondary',
      gradientTo: 'to-orange-500'
    }
  ];

  return (
    <section className="py-24 bg-theme-bg-primary relative overflow-hidden">
      {/* Background gradient for the section */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 via-theme-bg-primary to-theme-bg-primary" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-theme-text-primary mb-4">
            Our offerings that make you stand out in the Gaming Industry
          </h2>
          <p className="text-theme-text-secondary text-lg max-w-3xl mx-auto">
            We stand tall in the gaming app development industry for delivering remarkable gaming solutions.
            Our seasoned developers craft top-quality gaming experiences that engage and delight users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, suffix, gradientFrom, gradientTo }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue(0, number, 2000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [number]);

  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div ref={countRef} className="relative group">
      {/* Outer glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-all duration-500`} />

      {/* Inner glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl opacity-10 group-hover:opacity-20 blur-md transition-all duration-500`} />

      {/* Glass background with gradient border */}
      <div className="relative bg-theme-bg-secondary/30 backdrop-blur-xl rounded-xl p-8 h-full transition-all duration-300 group-hover:scale-[1.02] border border-transparent">
        {/* Gradient border */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-baseline gap-1">
            <div className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
              {count}
            </div>
            <div className={`text-4xl font-bold bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}>
              {suffix}
            </div>
          </div>
          <div className="text-theme-text-secondary text-lg font-medium mt-3">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;