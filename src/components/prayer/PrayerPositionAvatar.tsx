'use client';

import type { PrayerPositionId } from '@/data/prayer-guide/types';
import { positions } from '@/data/prayer-guide/positions';

interface PrayerPositionAvatarProps {
  activePosition: PrayerPositionId;
}

export function PrayerPositionAvatar({ activePosition }: PrayerPositionAvatarProps) {
  const active = positions.find(p => p.id === activePosition);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
      {/* Circular container with glow */}
      <div
        style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 70%, transparent 100%)',
          border: '1.5px solid rgba(201, 168, 76, 0.18)',
          boxShadow: '0 0 40px rgba(201, 168, 76, 0.06), inset 0 0 30px rgba(201, 168, 76, 0.04)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          style={{ width: '130px', height: '130px' }}
          aria-label={active?.name}
        >
          {positions.map((pos) => (
            <g
              key={pos.id}
              style={{
                opacity: pos.id === activePosition ? 1 : 0,
                transition: 'opacity 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              <path
                d={pos.svgPath}
                fill="var(--color-gold)"
                fillRule="evenodd"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Label */}
      {active && (
        <div style={{ textAlign: 'center' }}>
          <p className="font-amiri" style={{ fontSize: '1.125rem', color: 'var(--color-gold)', opacity: 0.85 }}>
            {active.nameAr}
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
            {active.name}
          </p>
        </div>
      )}
    </div>
  );
}
