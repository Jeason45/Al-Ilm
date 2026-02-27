'use client';

import { useState } from 'react';
import type { AblutionTypeId, AblutionStep } from '@/data/ablutions/types';
import { getAblutionById } from '@/data/ablutions';
import { ablutionErrors } from '@/data/ablutions/common-errors';
import { ablutionSpecialCases } from '@/data/ablutions/special-cases';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useAvatarPreference } from '@/hooks/useAvatarPreference';
import { AblutionSelector } from './AblutionSelector';
import { AblutionStepCard } from './AblutionStepCard';
import { PrayerPositionAvatar } from './PrayerPositionAvatar';
import { AvatarCustomizer } from './AvatarCustomizer';
import { WuduInvalidatorsSection } from './WuduInvalidatorsSection';
import { WuduDuaSection } from './WuduDuaSection';
import { CommonErrorsCard } from './CommonErrorsCard';
import { SpecialCasesSection } from './SpecialCasesSection';
import { ChevronDown } from 'lucide-react';

export function AblutionsTab() {
  const [activeAblutionId, setActiveAblutionId] = useState<AblutionTypeId>('wudu');
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const { avatarUrl, setAvatarUrl } = useAvatarPreference();

  const ablution = getAblutionById(activeAblutionId);

  const handleAblutionChange = (id: AblutionTypeId) => {
    setActiveAblutionId(id);
    setActiveStepIndex(0);
  };

  if (!ablution) return null;

  const activeStep: AblutionStep | undefined = ablution.steps[activeStepIndex];
  const isWudu = activeAblutionId === 'wudu';
  const avatarPosition = activeStep?.position ?? (isWudu ? 'wudu-hands' : undefined);

  return (
    <div>
      {/* Ablution selector */}
      <ScrollReveal delay={80}>
        <div style={{ marginBottom: '2rem' }}>
          <AblutionSelector activeAblution={activeAblutionId} onSelect={handleAblutionChange} />
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

      {/* Conditions (when ghusl is obligatory) */}
      {ablution.conditions && ablution.conditions.length > 0 && (
        <ScrollReveal delay={140}>
          <ConditionsSection conditions={ablution.conditions} />
        </ScrollReveal>
      )}

      {/* Avatar + customizer (for wudu) */}
      {isWudu && avatarPosition && (
        <ScrollReveal delay={160}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', gap: '10px' }}>
            <PrayerPositionAvatar activePosition={avatarPosition} avatarUrl={avatarUrl} />
            <AvatarCustomizer currentUrl={avatarUrl} onSelect={setAvatarUrl} />
          </div>
        </ScrollReveal>
      )}

      {/* Steps list */}
      <ScrollReveal delay={200}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {ablution.steps.map((step, index) => (
            <AblutionStepCard
              key={step.id}
              step={step}
              isActive={index === activeStepIndex}
              onClick={() => setActiveStepIndex(index)}
            />
          ))}
        </div>
      </ScrollReveal>

      {/* Wudu-specific sections */}
      {activeAblutionId === 'wudu' && (
        <>
          {/* Invalidators */}
          <ScrollReveal delay={240}>
            <WuduInvalidatorsSection />
          </ScrollReveal>

          {/* Du'a after wudu */}
          <ScrollReveal delay={260}>
            <WuduDuaSection />
          </ScrollReveal>
        </>
      )}

      {/* Common errors */}
      <ScrollReveal delay={280}>
        <CommonErrorsCard errors={ablutionErrors} title="Erreurs courantes du wudu" />
      </ScrollReveal>

      {/* Special cases */}
      <ScrollReveal delay={300}>
        <SpecialCasesSection cases={ablutionSpecialCases} title="Cas particuliers" />
      </ScrollReveal>
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
