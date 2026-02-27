'use client';

import { useState } from 'react';
import { BookOpen, ChevronDown } from 'lucide-react';
import { specialCases } from '@/data/prayer-guide/special-cases';

export function SpecialCasesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
        <BookOpen style={{ width: '16px', height: '16px', color: 'var(--color-blue)' }} />
        <h3 className="font-outfit font-semibold" style={{ fontSize: '1.125rem' }}>
          Cas particuliers
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {specialCases.map((sc) => {
          const isExpanded = expandedId === sc.id;
          return (
            <div
              key={sc.id}
              className="surah-card"
              style={{ overflow: 'hidden' }}
            >
              <button
                onClick={() => setExpandedId(isExpanded ? null : sc.id)}
                style={{
                  width: '100%', padding: '0.875rem 1rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--color-foreground)', fontFamily: 'inherit',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{sc.title}</span>
                  <span className="font-amiri" style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', opacity: 0.5 }}>
                    {sc.titleAr}
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
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
                    {sc.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {sc.rules.map((rule, i) => (
                      <li key={i} style={{
                        fontSize: '0.8125rem', color: 'var(--color-foreground)',
                        paddingLeft: '16px', position: 'relative',
                      }}>
                        <span style={{
                          position: 'absolute', left: 0, top: '0.45em',
                          width: '5px', height: '5px', borderRadius: '50%',
                          background: 'var(--color-blue)', opacity: 0.5,
                        }} />
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
