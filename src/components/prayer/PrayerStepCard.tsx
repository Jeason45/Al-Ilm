'use client';

import type { PrayerStep } from '@/data/prayer-guide/types';
import { ClassificationBadge } from './ClassificationBadge';

interface PrayerStepCardProps {
  step: PrayerStep;
  stepNumber: number;
  isActive: boolean;
  onClick: () => void;
}

export function PrayerStepCard({ step, stepNumber, isActive, onClick }: PrayerStepCardProps) {
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
        {stepNumber}
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

        {/* Dhikr */}
        {step.dhikrAr && (
          <div style={{
            marginTop: '8px', padding: '10px 14px', borderRadius: '10px',
            background: 'rgba(201, 168, 76, 0.04)',
            border: '1px solid rgba(201, 168, 76, 0.08)',
          }}>
            <p className="font-amiri" style={{
              fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--color-gold)',
              textAlign: 'right', marginBottom: '6px',
            }}>
              {step.dhikrAr}
            </p>
            {step.dhikrTranslit && (
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', fontStyle: 'italic', marginBottom: '4px' }}>
                {step.dhikrTranslit}
              </p>
            )}
            {step.dhikr && (
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                {step.dhikr}
              </p>
            )}
            {step.repetitions && step.repetitions > 1 && (
              <p style={{ fontSize: '0.6875rem', color: 'var(--color-gold)', opacity: 0.7, marginTop: '4px' }}>
                {step.repetitions}x
              </p>
            )}
          </div>
        )}

        {/* Notes */}
        {step.notes && (
          <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', opacity: 0.7, marginTop: '6px' }}>
            {step.notes}
          </p>
        )}
      </div>
    </button>
  );
}
