import type { Metadata } from 'next';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { SurahPreview } from '@/components/SurahPreview';

export const metadata: Metadata = {
  title: 'Accueil',
  description: 'Explorez le Coran, les hadiths, les invocations et bien plus. Votre compagnon pour apprendre l\'Islam.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <SurahPreview />
    </>
  );
}
