'use client';

import { useState, useMemo } from 'react';
import type { PrayerId, PrayerStep } from '@/data/prayer-guide/types';
import { getPrayerById, allPrayers } from '@/data/prayer-guide/prayers';
import { classifications } from '@/data/prayer-guide/classifications';
import { ScrollReveal } from '@/components/ScrollReveal';
import { PrayerSelector } from './PrayerSelector';
import { PrayerPositionAvatar } from './PrayerPositionAvatar';
import { PrayerStepCard } from './PrayerStepCard';
import { ClassificationBadge } from './ClassificationBadge';
import { CommonErrorsCard } from './CommonErrorsCard';
import { SpecialCasesSection } from './SpecialCasesSection';

export function PrayerGuideTab() {
  const [activePrayerId, setActivePrayerId] = useState<PrayerId>('fajr');
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const prayer = getPrayerById(activePrayerId);

  const allSteps = useMemo(() => {
    if (!prayer) return [];
    return prayer.rakaat.flatMap(r => r.steps);
  }, [prayer]);

  const activeStep: PrayerStep | undefined = allSteps[activeStepIndex];

  const handlePrayerChange = (id: PrayerId) => {
    setActivePrayerId(id);
    setActiveStepIndex(0);
  };

  if (!prayer) return null;

  const meta = classifications[prayer.ruling];

  return (
    <div>
      {/* Prayer selector */}
      <ScrollReveal delay={80}>
        <div style={{ marginBottom: '2rem' }}>
          <PrayerSelector activePrayer={activePrayerId} onSelect={handlePrayerChange} />
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

      {/* Avatar */}
      <ScrollReveal delay={160}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          {activeStep && (
            <PrayerPositionAvatar activePosition={activeStep.position} />
          )}
        </div>
      </ScrollReveal>

      {/* Steps list */}
      <ScrollReveal delay={200}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {prayer.rakaat.map((rakaa) => (
            <div key={rakaa.number}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '8px', marginTop: rakaa.number > 1 ? '1.25rem' : 0,
              }}>
                <div style={{
                  height: '1px', flex: 1,
                  background: 'linear-gradient(to right, transparent, var(--color-border))',
                }} />
                <span style={{
                  fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-gold)',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Rak'a {rakaa.number}
                </span>
                <div style={{
                  height: '1px', flex: 1,
                  background: 'linear-gradient(to left, transparent, var(--color-border))',
                }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {rakaa.steps.map((step) => {
                  const globalIndex = allSteps.indexOf(step);
                  return (
                    <PrayerStepCard
                      key={step.id}
                      step={step}
                      stepNumber={globalIndex + 1}
                      isActive={globalIndex === activeStepIndex}
                      onClick={() => setActiveStepIndex(globalIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
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
