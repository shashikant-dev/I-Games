import HeroSection from '@/components/home/HeroSection';
import OfferingsSection from '@/components/home/OfferingsSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import TrustSection from '@/components/home/TrustSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OfferingsSection />
      <StatsSection />
      <ServicesSection />
      <TrustSection />
    </main>
  );
}
