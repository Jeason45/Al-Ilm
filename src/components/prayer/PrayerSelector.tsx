'use client';

import type { PrayerId, PrayerDefinition } from '@/data/prayer-guide/types';
import { allPrayers as defaultPrayers } from '@/data/prayer-guide/prayers';
import { classifications } from '@/data/prayer-guide/classifications';

interface PrayerSelectorProps {
  activePrayer: PrayerId;
  onSelect: (id: PrayerId) => void;
  prayers?: PrayerDefinition[];
}

export function PrayerSelector({ activePrayer, onSelect, prayers }: PrayerSelectorProps) {
  const prayerList = prayers ?? defaultPrayers;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
      {prayerList.map((prayer) => {
        const isActive = prayer.id === activePrayer;
        const meta = classifications[prayer.ruling];
        return (
          <button
            key={prayer.id}
            onClick={() => onSelect(prayer.id)}
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
            <span>{prayer.name}</span>
            <span style={{
              display: 'inline-block', marginLeft: '6px', width: '6px', height: '6px',
              borderRadius: '50%', background: meta.color, opacity: 0.6,
            }} />
          </button>
        );
      })}
    </div>
  );
}
