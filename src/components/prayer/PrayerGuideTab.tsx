'use client';

import { useState, useMemo } from 'react';
import type { PrayerId, MadhabId } from '@/data/prayer-guide/types';
import { getPrayerByMadhab, getPrayersByMadhab } from '@/data/prayer-guide/prayers';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MadhabSelector } from './MadhabSelector';
import { PrayerSelector } from './PrayerSelector';
import { PrayerCarousel } from './PrayerCarousel';
import type { CarouselStep } from './PrayerCarousel';
import { ClassificationBadge } from './ClassificationBadge';
import { CommonErrorsCard } from './CommonErrorsCard';
import { SpecialCasesSection } from './SpecialCasesSection';

export function PrayerGuideTab() {
  const [activeMadhab, setActiveMadhab] = useState<MadhabId>('hanafi');
  const [activePrayerId, setActivePrayerId] = useState<PrayerId>('fajr');

  const prayers = getPrayersByMadhab(activeMadhab);
  const prayer = getPrayerByMadhab(activeMadhab, activePrayerId);

  const { carouselSteps, rakaatBoundaries } = useMemo(() => {
    if (!prayer) return { carouselSteps: [] as CarouselStep[], rakaatBoundaries: [] as number[] };

    const steps: CarouselStep[] = [];
    const boundaries: number[] = [];

    for (const rakaa of prayer.rakaat) {
      boundaries.push(steps.length);
      for (const s of rakaa.steps) {
        steps.push({
          position: s.position,
          ruling: s.ruling,
          name: s.name,
          nameAr: s.nameAr,
          dhikr: s.dhikr,
          dhikrAr: s.dhikrAr,
          dhikrTranslit: s.dhikrTranslit,
          repetitions: s.repetitions,
          notes: s.notes,
        });
      }
    }

    return { carouselSteps: steps, rakaatBoundaries: boundaries };
  }, [prayer]);

  const handleMadhabChange = (id: MadhabId) => {
    setActiveMadhab(id);
  };

  const handlePrayerChange = (id: PrayerId) => {
    setActivePrayerId(id);
  };

  if (!prayer) return null;

  return (
    <div>
      {/* Madhab selector */}
      <ScrollReveal delay={40}>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textAlign: 'center', marginBottom: '8px' }}>
            École juridique
          </p>
          <MadhabSelector activeMadhab={activeMadhab} onSelect={handleMadhabChange} />
        </div>
      </ScrollReveal>

      {/* Prayer selector */}
      <ScrollReveal delay={80}>
        <div style={{ marginBottom: '2rem' }}>
          <PrayerSelector activePrayer={activePrayerId} onSelect={handlePrayerChange} prayers={prayers} />
        </div>
      </ScrollReveal>

      {/* Prayer info header */}
      <ScrollReveal delay={120}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '6px' }}>
            <h2 className="font-outfit font-bold" style={{ fontSize: '1.5rem' }}>
              {prayer.name}
            </h2>
            <span className="font-amiri" style={{ fontSize: '1.25rem', color: 'var(--color-muted)', opacity: 0.5 }}>
              {prayer.nameAr}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <ClassificationBadge ruling={prayer.ruling} />
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
              {prayer.rakaatCount} rak'at
            </span>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '8px' }}>
            {prayer.description}
          </p>
        </div>
      </ScrollReveal>

      {/* Prayer carousel */}
      <ScrollReveal delay={160}>
        <PrayerCarousel
          key={`${activeMadhab}-${activePrayerId}`}
          steps={carouselSteps}
          rakaatBoundaries={rakaatBoundaries}
        />
      </ScrollReveal>

      {/* Common errors */}
      <ScrollReveal delay={240}>
        <CommonErrorsCard />
      </ScrollReveal>

      {/* Special cases */}
      <ScrollReveal delay={280}>
        <SpecialCasesSection />
      </ScrollReveal>
    </div>
  );
}
