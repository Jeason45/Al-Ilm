'use client';

import type { AblutionTypeId } from '@/data/ablutions/types';
import { allAblutions } from '@/data/ablutions';

interface AblutionSelectorProps {
  activeAblution: AblutionTypeId;
  onSelect: (id: AblutionTypeId) => void;
}

const ABLUTION_COLORS: Record<AblutionTypeId, string> = {
  'wudu': 'var(--color-blue)',
  'ghusl-men': 'var(--color-teal)',
  'ghusl-women': 'var(--color-rose)',
  'tayammum': 'var(--color-amber)',
};

export function AblutionSelector({ activeAblution, onSelect }: AblutionSelectorProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
      {allAblutions.map((ablution) => {
        const isActive = ablution.id === activeAblution;
        const color = ABLUTION_COLORS[ablution.id];
        return (
          <button
            key={ablution.id}
            onClick={() => onSelect(ablution.id)}
            style={{
              padding: '8px 14px',
              borderRadius: '10px',
              fontSize: '0.8125rem',
              fontWeight: 500,
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'all 0.2s',
              border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border)'}`,
              background: isActive ? 'rgba(201, 168, 76, 0.12)' : 'var(--color-surface)',
              color: isActive ? 'var(--color-gold)' : 'var(--color-foreground)',
            }}
          >
            <span>{ablution.name}</span>
            <span style={{
              display: 'inline-block', marginLeft: '6px', width: '6px', height: '6px',
              borderRadius: '50%', background: color, opacity: 0.6,
            }} />
          </button>
        );
      })}
    </div>
  );
}
