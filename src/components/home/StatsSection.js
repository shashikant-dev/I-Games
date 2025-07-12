'use client';
import { useEffect, useState, useRef } from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: 19,
      label: 'Years Delivering Games',
      suffix: ''
    },
    {
      number: 120,
      label: 'In-house Professionals',
      suffix: '+'
    },
    {
      number: 200,
      label: 'Games Delivered',
      suffix: '+'
    }
  ];

  return (
    <section className="py-24 bg-black relative">
      {/* Background gradient for the section */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-black to-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label, suffix }) => {
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
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-all duration-500 group-hover:blur-xl" />

      {/* Card content */}
      <div className="relative bg-black/80 backdrop-blur-sm border border-primary/30 rounded-xl p-8 transform transition-all duration-300 group-hover:scale-[1.02] group-hover:border-primary/50">
        <div className="flex items-baseline">
          <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {count}
          </div>
          <div className="text-4xl font-bold text-secondary ml-1">
            {suffix}
          </div>
        </div>
        <div className="text-gray-100 text-lg font-medium mt-3">{label}</div>
      </div>
    </div>
  );
};

export default StatsSection;