import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  return (
    <main className="pt-20 min-h-screen bg-theme-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-theme-text-primary mb-6">
            About Us
          </h1>
          <p className="text-lg text-theme-text-secondary max-w-3xl mx-auto">
            We are a leading provider of sports APIs and gaming solutions for modern businesses.
            Our team specializes in creating cutting-edge gaming platforms and comprehensive
            API solutions for the sports and betting industry.
          </p>
        </div>
      </div>
    </main>
  );
}