'use client';

import type { PrayerPositionId } from '@/data/prayer-guide/types';
import { positions } from '@/data/prayer-guide/positions';

interface PrayerPositionAvatarProps {
  activePosition: PrayerPositionId;
}

export function PrayerPositionAvatar({ activePosition }: PrayerPositionAvatarProps) {
  const active = positions.find(p => p.id === activePosition);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <div
        style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'rgba(201, 168, 76, 0.06)',
          border: '1px solid rgba(201, 168, 76, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          style={{ width: '100px', height: '100px' }}
        >
          {positions.map((pos) => (
            <path
              key={pos.id}
              d={pos.svgPath}
              fill="var(--color-gold)"
              style={{
                opacity: pos.id === activePosition ? 1 : 0,
                transition: 'opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            />
          ))}
        </svg>
      </div>
      {active && (
        <div style={{ textAlign: 'center' }}>
          <p className="font-amiri" style={{ fontSize: '1rem', color: 'var(--color-gold)', opacity: 0.8 }}>
            {active.nameAr}
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
            {active.name}
          </p>
        </div>
      )}
    </div>
  );
}
