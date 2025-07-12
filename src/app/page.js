import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
    </main>
  );
}
