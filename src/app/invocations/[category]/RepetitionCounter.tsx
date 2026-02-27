'use client';

import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

interface RepetitionCounterProps {
  target: number;
}

export function RepetitionCounter({ target }: RepetitionCounterProps) {
  const [count, setCount] = useState(0);
  const isComplete = count >= target;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 0',
    }}>
      {/* Dots */}
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', flex: 1 }}>
        {target <= 10 ? (
          // Show individual dots for small targets
          Array.from({ length: target }).map((_, i) => (
            <span
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: i < count ? 'var(--color-gold)' : 'var(--color-border)',
                transition: 'background 0.2s, box-shadow 0.3s',
                boxShadow: i < count ? '0 0 6px rgba(201, 168, 76, 0.4)' : 'none',
              }}
            />
          ))
        ) : (
          // Show progress bar for large targets
          <div style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            background: 'var(--color-border)',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              borderRadius: '3px',
              background: isComplete
                ? 'var(--color-gold)'
                : 'linear-gradient(to right, var(--color-gold), rgba(201, 168, 76, 0.6))',
              width: `${Math.min((count / target) * 100, 100)}%`,
              transition: 'width 0.3s ease, box-shadow 0.3s',
              boxShadow: isComplete ? '0 0 10px rgba(201, 168, 76, 0.5)' : 'none',
            }} />
          </div>
        )}
      </div>

      {/* Count */}
      <button
        onClick={() => !isComplete && setCount(c => c + 1)}
        disabled={isComplete}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 12px',
          borderRadius: '8px',
          fontSize: '0.8125rem',
          fontWeight: 600,
          fontFamily: 'inherit',
          color: isComplete ? 'var(--color-gold)' : 'var(--color-foreground)',
          background: isComplete
            ? 'rgba(201, 168, 76, 0.15)'
            : 'rgba(255, 255, 255, 0.04)',
          border: `1px solid ${isComplete ? 'rgba(201, 168, 76, 0.3)' : 'var(--color-border)'}`,
          cursor: isComplete ? 'default' : 'pointer',
          transition: 'all 0.2s',
          boxShadow: isComplete ? '0 0 12px rgba(201, 168, 76, 0.2)' : 'none',
        }}
      >
        {count}/{target}
      </button>

      {/* Reset */}
      {count > 0 && (
        <button
          onClick={() => setCount(0)}
          aria-label="Réinitialiser le compteur"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            background: 'transparent',
            border: '1px solid var(--color-border)',
            color: 'var(--color-muted)',
            cursor: 'pointer',
            transition: 'all 0.2s',
            flexShrink: 0,
          }}
        >
          <RotateCcw size={12} />
        </button>
      )}

      {/* Repetition badge */}
      <span style={{
        fontSize: '0.6875rem',
        color: 'var(--color-muted)',
        whiteSpace: 'nowrap',
      }}>
        x{target}
      </span>
    </div>
  );
}
