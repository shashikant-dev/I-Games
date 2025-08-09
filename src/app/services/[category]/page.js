'use client';

import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import BackgroundEffects from '@/components/ui/BackgroundEffects';
import ServiceCard from '@/components/services/ServiceCard';
import CategoryHero from '@/components/services/CategoryHero';
import CategoryFeatures from '@/components/services/CategoryFeatures';
import CategoryBenefits from '@/components/services/CategoryBenefits';
import CategoryProcess from '@/components/services/CategoryProcess';
import CategoryStats from '@/components/services/CategoryStats';
import { serviceCategories } from '@/constants/serviceCategories';
import { notFound } from 'next/navigation';

const ServiceCategoryPage = () => {
  const params = useParams();
  const { t } = useLanguage();
  const { category } = params;

  // Check if category exists
  if (!serviceCategories[category]) {
    notFound();
  }

  const categoryData = serviceCategories[category];

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <CategoryHero category={category} data={categoryData} />

      {/* Key Features */}
      <CategoryFeatures category={category} data={categoryData} />

      {/* Benefits */}
      <CategoryBenefits category={category} data={categoryData} />

      {/* Statistics */}
      <CategoryStats category={category} data={categoryData} />

      {/* Process */}
      <CategoryProcess category={category} data={categoryData} />
    </main>
  );
};

export default ServiceCategoryPage;
