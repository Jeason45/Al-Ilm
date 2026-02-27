'use client';

import type { AblutionStep } from '@/data/ablutions/types';
import { ClassificationBadge } from './ClassificationBadge';

interface AblutionStepCardProps {
  step: AblutionStep;
  isActive: boolean;
  onClick: () => void;
}

export function AblutionStepCard({ step, isActive, onClick }: AblutionStepCardProps) {
  return (
    <button
      onClick={onClick}
      className="surah-card"
      style={{
        padding: '1rem 1.25rem',
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        borderColor: isActive ? 'var(--color-gold)' : undefined,
        boxShadow: isActive ? '0 0 0 1px var(--color-gold), 0 4px 20px rgba(201, 168, 76, 0.15)' : undefined,
        background: 'none',
        border: isActive ? '1px solid var(--color-gold)' : undefined,
        fontFamily: 'inherit',
      }}
    >
      {/* Step number */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
        background: isActive ? 'rgba(201, 168, 76, 0.15)' : 'rgba(255,255,255,0.03)',
        border: `1px solid ${isActive ? 'rgba(201, 168, 76, 0.3)' : 'var(--color-border)'}`,
        fontSize: '0.75rem', fontWeight: 600,
        color: isActive ? 'var(--color-gold)' : 'var(--color-muted)',
      }}>
        {step.order}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Header: name + arabic + badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
          <span className="font-outfit" style={{
            fontSize: '0.9375rem', fontWeight: 600,
            color: isActive ? 'var(--color-gold)' : 'var(--color-foreground)',
          }}>
            {step.name}
          </span>
          <span className="font-amiri" style={{ fontSize: '0.875rem', color: 'var(--color-muted)', opacity: 0.5 }}>
            {step.nameAr}
          </span>
          <ClassificationBadge ruling={step.ruling} />
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '4px', lineHeight: 1.5 }}>
          {step.description}
        </p>

        {/* Repetitions */}
        {step.repetitions && step.repetitions > 1 && (
          <p style={{ fontSize: '0.6875rem', color: 'var(--color-gold)', opacity: 0.7, marginTop: '6px' }}>
            {step.repetitions}x
          </p>
        )}

        {/* Madhab note */}
        {step.madhabNote && (
          <div style={{
            marginTop: '8px', padding: '8px 12px', borderRadius: '8px',
            background: 'rgba(96, 165, 250, 0.06)',
            border: '1px solid rgba(96, 165, 250, 0.1)',
          }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-blue)', lineHeight: 1.5 }}>
              {step.madhabNote}
            </p>
          </div>
        )}
      </div>
    </button>
  );
}
