'use client';

import { useState } from 'react';
import { AlertTriangle, ChevronDown } from 'lucide-react';
import { commonErrors as defaultErrors } from '@/data/prayer-guide/common-errors';
import type { CommonError } from '@/data/prayer-guide/types';

interface CommonErrorsCardProps {
  errors?: CommonError[];
  title?: string;
}

export function CommonErrorsCard({ errors, title }: CommonErrorsCardProps = {}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const items = errors ?? defaultErrors;

  return (
    <div style={{ marginTop: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
        <AlertTriangle style={{ width: '16px', height: '16px', color: 'var(--color-amber)' }} />
        <h3 className="font-outfit font-semibold" style={{ fontSize: '1.125rem' }}>
          {title ?? 'Erreurs courantes'}
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map((error) => {
          const isExpanded = expandedId === error.id;
          return (
            <div
              key={error.id}
              className="surah-card"
              style={{ overflow: 'hidden' }}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : error.id)}
                style={{
                  width: '100%', padding: '0.875rem 1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--color-foreground)', fontFamily: 'inherit',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{error.title}</span>
                  <span className="font-amiri" style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', opacity: 0.5 }}>
                    {error.titleAr}
                  </span>
                </div>
                <ChevronDown style={{
                  width: '14px', height: '14px', color: 'var(--color-muted)', flexShrink: 0,
                  transition: 'transform 0.2s',
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                }} />
              </button>

              {isExpanded && (
                <div style={{
                  padding: '0 1rem 0.875rem 1rem',
                  borderTop: '1px solid var(--color-border)',
                }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '0.75rem', marginBottom: '0.5rem' }}>
                    {error.description}
                  </p>
                  <div style={{
                    padding: '8px 12px', borderRadius: '8px',
                    background: 'rgba(52, 211, 153, 0.06)',
                    border: '1px solid rgba(52, 211, 153, 0.1)',
                  }}>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-emerald)' }}>
                      {error.correction}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
