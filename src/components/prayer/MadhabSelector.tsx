'use client';

import type { MadhabId } from '@/data/prayer-guide/types';

interface MadhabSelectorProps {
  activeMadhab: MadhabId;
  onSelect: (id: MadhabId) => void;
}

const madhabs: { id: MadhabId; name: string; nameAr: string; available: boolean }[] = [
  { id: 'hanafi', name: 'Hanafite', nameAr: 'حنفي', available: true },
  { id: 'maliki', name: 'Malikite', nameAr: 'مالكي', available: true },
  { id: 'shafii', name: 'Chafiite', nameAr: 'شافعي', available: true },
  { id: 'hanbali', name: 'Hanbalite', nameAr: 'حنبلي', available: true },
];

export function MadhabSelector({ activeMadhab, onSelect }: MadhabSelectorProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
      {madhabs.map((m) => {
        const isActive = m.id === activeMadhab;
        const isDisabled = !m.available;
        return (
          <button
            key={m.id}
            onClick={() => !isDisabled && onSelect(m.id)}
            disabled={isDisabled}
            style={{
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.8125rem',
              fontWeight: 500,
              fontFamily: 'inherit',
              cursor: isDisabled ? 'default' : 'pointer',
              transition: 'all 0.2s',
              border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border)'}`,
              background: isActive ? 'rgba(201, 168, 76, 0.12)' : 'var(--color-surface)',
              color: isActive ? 'var(--color-gold)' : isDisabled ? 'var(--color-muted)' : 'var(--color-foreground)',
              opacity: isDisabled ? 0.4 : 1,
              position: 'relative',
            }}
          >
            <span>{m.name}</span>
            <span
              className="font-amiri"
              style={{ marginLeft: '6px', fontSize: '0.75rem', opacity: 0.5 }}
            >
              {m.nameAr}
            </span>
            {isDisabled && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                fontSize: '0.5625rem',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '6px',
                padding: '1px 5px',
                color: 'var(--color-muted)',
              }}>
                bientôt
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
