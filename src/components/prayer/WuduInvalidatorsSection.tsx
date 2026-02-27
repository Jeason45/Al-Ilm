'use client';

import { useState } from 'react';
import { ShieldOff, ChevronDown } from 'lucide-react';
import { wuduInvalidators } from '@/data/ablutions';
import type { ConsensusLevel } from '@/data/ablutions/types';

const CONSENSUS_META: Record<ConsensusLevel, { label: string; color: string; bg: string; border: string }> = {
  unanime: {
    label: 'Unanime',
    color: 'var(--color-rose)',
    bg: 'rgba(251,113,133,0.10)',
    border: 'rgba(251,113,133,0.18)',
  },
  majoritaire: {
    label: 'Majoritaire',
    color: 'var(--color-amber)',
    bg: 'rgba(251,191,36,0.10)',
    border: 'rgba(251,191,36,0.18)',
  },
  dispute: {
    label: 'Disputé',
    color: 'var(--color-purple)',
    bg: 'rgba(167,139,250,0.10)',
    border: 'rgba(167,139,250,0.18)',
  },
};

export function WuduInvalidatorsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
        <ShieldOff style={{ width: '16px', height: '16px', color: 'var(--color-rose)' }} />
        <h3 className="font-outfit font-semibold" style={{ fontSize: '1.125rem' }}>
          Annulateurs du wudu
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {wuduInvalidators.map((inv) => {
          const isExpanded = expandedId === inv.id;
          const consensus = CONSENSUS_META[inv.consensus];
          return (
            <div
              key={inv.id}
              className="surah-card"
              style={{ overflow: 'hidden' }}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : inv.id)}
                style={{
                  width: '100%', padding: '0.875rem 1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--color-foreground)', fontFamily: 'inherit',
                  textAlign: 'left', gap: '8px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{inv.title}</span>
                  <span className="font-amiri" style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', opacity: 0.5 }}>
                    {inv.titleAr}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <span style={{
                    fontSize: '0.6875rem', fontWeight: 500, padding: '2px 8px',
                    borderRadius: '6px', whiteSpace: 'nowrap',
                    background: consensus.bg, border: `1px solid ${consensus.border}`,
                    color: consensus.color,
                  }}>
                    {consensus.label}
                  </span>
                  <ChevronDown style={{
                    width: '14px', height: '14px', color: 'var(--color-muted)', flexShrink: 0,
                    transition: 'transform 0.2s',
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  }} />
                </div>
              </button>

              {isExpanded && (
                <div style={{
                  padding: '0 1rem 0.875rem 1rem',
                  borderTop: '1px solid var(--color-border)',
                }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '0.75rem', lineHeight: 1.5 }}>
                    {inv.description}
                  </p>
                  {inv.madhabNote && (
                    <div style={{
                      marginTop: '0.5rem', padding: '8px 12px', borderRadius: '8px',
                      background: 'rgba(96, 165, 250, 0.06)',
                      border: '1px solid rgba(96, 165, 250, 0.1)',
                    }}>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-blue)', lineHeight: 1.5 }}>
                        {inv.madhabNote}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
