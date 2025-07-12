'use client';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-black min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                <span>iGames</span>
                <span className="text-primary">.cloud</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 font-medium max-w-xl">
                Where Innovation Meets Sports Excellence
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-secondary">Transform Your Vision</span>
              </h2>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                Into Game-Changing Sports Apps
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Elevate your sports business with our cutting-edge development solutions.
                From fantasy leagues to live-streaming platforms, we bring your ideas to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Link
                  href="#contact"
                  className="inline-block bg-primary hover:bg-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="#services"
                  className="inline-block text-secondary hover:text-secondary-light font-semibold text-lg transition-colors"
                >
                  Explore Our Services →
                </Link>
              </div>
            </div>

            {/* Rating Section */}
            <div className="flex items-center space-x-4 pt-4">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-400 border-2 border-black"
                  />
                ))}
              </div> */}
              <div>
                {/* <div className="flex items-center">
                  <span className="text-secondary font-bold text-lg">4.9/5</span>
                  <span className="text-gray-100 ml-2 font-medium">(1200+ Success Stories)</span>
                </div> */}
                {/* <div className="flex text-secondary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative h-[600px] hidden lg:block">
            <Image
              src="/fantasy-about.png"
              alt="Sports App Mockup"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;