'use client';

import { useRef, useEffect } from 'react';
import type { AdhanLine } from '@/data/adhan/adhan-text';

interface AdhanTextDisplayProps {
  lines: AdhanLine[];
  currentLineIndex: number;
}

export function AdhanTextDisplay({ lines, currentLineIndex }: AdhanTextDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (currentLineIndex >= 0 && lineRefs.current[currentLineIndex]) {
      lineRefs.current[currentLineIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [currentLineIndex]);

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      {lines.map((line, i) => {
        const isActive = i === currentLineIndex;
        return (
          <div
            key={line.id}
            ref={el => { lineRefs.current[i] = el; }}
            style={{
              padding: '12px 16px',
              borderRadius: '12px',
              transition: 'all 0.3s ease',
              background: isActive ? 'rgba(201, 168, 76, 0.08)' : 'transparent',
              border: `1px solid ${isActive ? 'rgba(201, 168, 76, 0.2)' : 'transparent'}`,
            }}
          >
            <p className="font-amiri" style={{
              fontSize: '1.25rem', lineHeight: 1.8,
              textAlign: 'right',
              color: isActive ? 'var(--color-gold)' : 'var(--color-foreground)',
              transition: 'color 0.3s',
            }}>
              {line.arabic}
            </p>
            <p style={{
              fontSize: '0.8125rem', fontStyle: 'italic',
              color: isActive ? 'var(--color-gold)' : 'var(--color-muted)',
              opacity: isActive ? 0.8 : 0.6,
              transition: 'all 0.3s',
              marginTop: '2px',
            }}>
              {line.transliteration}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
              <p style={{
                fontSize: '0.75rem',
                color: 'var(--color-muted)', opacity: 0.5,
              }}>
                {line.french}
              </p>
              {line.repetitions > 1 && (
                <span style={{
                  fontSize: '0.625rem', color: 'var(--color-muted)', opacity: 0.4,
                  padding: '2px 6px', borderRadius: '4px',
                  background: 'rgba(255,255,255,0.03)',
                }}>
                  x{line.repetitions}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
