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
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <div className="bg-black border border-primary/20 rounded-xl p-8 transform transition-transform duration-300 group-hover:scale-105">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
          {count}
          <span className="text-secondary">{suffix}</span>
        </div>
        <div className="text-gray-300 text-lg">{label}</div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-20 group-hover:opacity-30 transition-opacity blur" />
    </div>
  );
};

export default StatsSection;