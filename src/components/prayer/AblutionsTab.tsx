'use client';

import { useState } from 'react';
import type { AblutionTypeId, AblutionStep } from '@/data/ablutions/types';
import type { MadhabId } from '@/data/prayer-guide/types';
import {
  getAblutionByMadhab,
  getAblutionsByMadhab,
  getInvalidatorsByMadhab,
  getNonInvalidatorsByMadhab,
  getSpecialCasesByMadhab,
  getErrorsByMadhab,
} from '@/data/ablutions';
import { wuduDuas } from '@/data/ablutions';
import { ScrollReveal } from '@/components/ScrollReveal';
import { MadhabSelector } from './MadhabSelector';
import { AblutionSelector } from './AblutionSelector';
import { PrayerCarousel } from './PrayerCarousel';
import type { CarouselStep } from './PrayerCarousel';
import { WuduInvalidatorsSection } from './WuduInvalidatorsSection';
import { WuduDuaSection } from './WuduDuaSection';
import { CommonErrorsCard } from './CommonErrorsCard';
import { SpecialCasesSection } from './SpecialCasesSection';
import { ClassificationBadge } from './ClassificationBadge';
import { ChevronDown } from 'lucide-react';

export function AblutionsTab() {
  const [activeMadhab, setActiveMadhab] = useState<MadhabId>('hanafi');
  const [activeAblutionId, setActiveAblutionId] = useState<AblutionTypeId>('wudu');

  const ablutions = getAblutionsByMadhab(activeMadhab);
  const ablution = getAblutionByMadhab(activeMadhab, activeAblutionId);
  const invalidators = getInvalidatorsByMadhab(activeMadhab);
  const nonInvalidators = getNonInvalidatorsByMadhab(activeMadhab);
  const specialCases = getSpecialCasesByMadhab(activeMadhab);
  const errors = getErrorsByMadhab(activeMadhab);

  const handleMadhabChange = (madhab: MadhabId) => {
    setActiveMadhab(madhab);
    setActiveAblutionId('wudu');
  };

  const handleAblutionChange = (id: AblutionTypeId) => {
    setActiveAblutionId(id);
  };

  if (!ablution) return null;

  const isWudu = activeAblutionId === 'wudu';

  const carouselSteps: CarouselStep[] = ablution.steps
    .filter(s => s.position) // only steps with an image position
    .map(s => ({
      position: s.position!,
      ruling: s.ruling,
      name: s.name,
      nameAr: s.nameAr,
      notes: s.description,
      repetitions: s.repetitions,
    }));

  const hasCarouselSteps = carouselSteps.length > 0;

  return (
    <div>
      {/* Madhab selector */}
      <ScrollReveal delay={40}>
        <div style={{ marginBottom: '1.5rem' }}>
          <MadhabSelector activeMadhab={activeMadhab} onSelect={handleMadhabChange} />
        </div>
      </ScrollReveal>

      {/* Ablution selector */}
      <ScrollReveal delay={80}>
        <div style={{ marginBottom: '2rem' }}>
          <AblutionSelector
            activeAblution={activeAblutionId}
            onSelect={handleAblutionChange}
            ablutions={ablutions}
          />
        </div>
      </ScrollReveal>

      {/* Ablution info header */}
      <ScrollReveal delay={120}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '6px' }}>
            <h2 className="font-outfit font-bold" style={{ fontSize: '1.5rem' }}>
              {ablution.name}
            </h2>
            <span className="font-amiri" style={{ fontSize: '1.25rem', color: 'var(--color-muted)', opacity: 0.5 }}>
              {ablution.nameAr}
            </span>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '8px', lineHeight: 1.5 }}>
            {ablution.description}
          </p>
        </div>
      </ScrollReveal>

      {/* Conditions (when ghusl/tayammum is required) */}
      {ablution.conditions && ablution.conditions.length > 0 && (
        <ScrollReveal delay={140}>
          <ConditionsSection conditions={ablution.conditions} />
        </ScrollReveal>
      )}

      {/* Step-by-step carousel (wudu only — has position images) */}
      {isWudu && hasCarouselSteps && (
        <ScrollReveal delay={160}>
          <PrayerCarousel
            key={`${activeMadhab}-${activeAblutionId}`}
            steps={carouselSteps}
          />
        </ScrollReveal>
      )}

      {/* Step-by-step list (ghusl & tayammum — no position images) */}
      {!isWudu && (
        <ScrollReveal delay={160}>
          <StepsList steps={ablution.steps} />
        </ScrollReveal>
      )}

      {/* Wudu-specific sections */}
      {isWudu && (
        <>
          <ScrollReveal delay={240}>
            <WuduInvalidatorsSection
              invalidators={invalidators}
              nonInvalidators={nonInvalidators}
            />
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <WuduDuaSection />
          </ScrollReveal>
        </>
      )}

      {/* Common errors (wudu only) */}
      {isWudu && (
        <ScrollReveal delay={280}>
          <CommonErrorsCard errors={errors} title="Erreurs courantes du wudu" />
        </ScrollReveal>
      )}

      {/* Special cases */}
      <ScrollReveal delay={300}>
        <SpecialCasesSection cases={specialCases} title="Cas particuliers" />
      </ScrollReveal>
    </div>
  );
}

// ─── Steps list (for ghusl/tayammum — text-only, no carousel) ───

function StepsList({ steps }: { steps: AblutionStep[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '2rem' }}>
      {steps.map((step, i) => (
        <div
          key={step.id}
          style={{
            position: 'relative',
            paddingLeft: 'clamp(2.5rem, 5vw, 3rem)',
          }}
        >
          {/* Vertical line */}
          {i < steps.length - 1 && (
            <div style={{
              position: 'absolute', left: '11px', top: '24px', bottom: '-12px', width: '1px',
              background: 'var(--color-border)',
            }} />
          )}

          {/* Step number circle */}
          <div style={{
            position: 'absolute', left: 0, top: '4px',
            width: '24px', height: '24px', borderRadius: '50%',
            background: step.ruling === 'fard' ? 'var(--color-gold)' : 'rgba(201, 168, 76, 0.15)',
            color: step.ruling === 'fard' ? '#000' : 'var(--color-gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.6875rem', fontWeight: 700,
          }}>
            {step.order}
          </div>

          {/* Content */}
          <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
              <span className="font-outfit" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                {step.name}
              </span>
              <span className="font-amiri" style={{ fontSize: '0.875rem', color: 'var(--color-muted)', opacity: 0.5 }}>
                {step.nameAr}
              </span>
              <ClassificationBadge ruling={step.ruling} />
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', lineHeight: 1.6, margin: 0 }}>
              {step.description}
            </p>

            {step.repetitions && step.repetitions > 1 && (
              <span style={{ fontSize: '0.6875rem', color: 'var(--color-gold)', opacity: 0.7, marginTop: '4px', display: 'inline-block' }}>
                {step.repetitions}x
              </span>
            )}

            {step.madhabNote && (
              <p style={{
                fontSize: '0.75rem', color: 'var(--color-muted)', opacity: 0.7,
                marginTop: '8px', paddingTop: '8px',
                borderTop: '1px solid var(--color-border)',
                lineHeight: 1.5,
              }}>
                {step.madhabNote}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Conditions sub-component (for ghusl/tayammum) ───

function ConditionsSection({ conditions }: { conditions: { id: string; title: string; titleAr: string; description: string }[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h3 className="font-outfit font-semibold" style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--color-foreground)' }}>
        Quand est-ce obligatoire ?
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {conditions.map((cond) => {
          const isExpanded = expandedId === cond.id;
          return (
            <div key={cond.id} className="surah-card" style={{ overflow: 'hidden' }}>
              <button
                onClick={() => setExpandedId(isExpanded ? null : cond.id)}
                style={{
                  width: '100%', padding: '0.75rem 1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--color-foreground)', fontFamily: 'inherit',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{cond.title}</span>
                  <span className="font-amiri" style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', opacity: 0.5 }}>
                    {cond.titleAr}
                  </span>
                </div>
                <ChevronDown style={{
                  width: '14px', height: '14px', color: 'var(--color-muted)', flexShrink: 0,
                  transition: 'transform 0.2s',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                }} />
              </button>
              {isExpanded && (
                <div style={{ padding: '0 1rem 0.75rem 1rem', borderTop: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '0.5rem', lineHeight: 1.5 }}>
                    {cond.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
