'use client';

import type { PrayerPositionId } from '@/data/prayer-guide/types';
import type { Gender } from '@/components/3d/types';
import { getPosition } from '@/data/prayer-guide/positions';

interface PrayerPositionImageProps {
  activePosition: PrayerPositionId;
  showLabel?: boolean;
  gender?: Gender;
}

export function PrayerPositionImage({ activePosition, showLabel = true }: PrayerPositionImageProps) {
  const position = getPosition(activePosition);

  if (!position) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      {/* Visual placeholder + description */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: 'min(340px, 100%)',
        borderRadius: '16px',
        border: '1.5px solid rgba(201, 168, 76, 0.3)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
        overflow: 'hidden',
        background: 'var(--color-surface, #1a1a2e)',
      }}>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 'clamp(1.25rem, 3vw, 2rem)',
          gap: '12px',
          background: 'rgba(201, 168, 76, 0.03)',
        }}>
          <p className="font-amiri" style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--color-gold)', opacity: 0.25, lineHeight: 1.2 }}>
            {position.nameAr}
          </p>
          <span className="font-outfit" style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-muted)', opacity: 0.6 }}>
            {position.name}
          </span>

          {position.description && (
            <p style={{
              fontSize: '0.8125rem',
              lineHeight: 1.65,
              color: 'var(--color-muted)',
              textAlign: 'left',
              marginTop: '4px',
            }}>
              {position.description}
            </p>
          )}

          {position.madhabNotes && position.madhabNotes.length > 0 && (
            <div style={{
              width: '100%',
              paddingTop: '8px',
              marginTop: '4px',
              borderTop: '1px solid rgba(201, 168, 76, 0.15)',
            }}>
              <p className="font-outfit" style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-gold)', opacity: 0.7, marginBottom: '6px' }}>
                Selon les écoles
              </p>
              <ul style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                {position.madhabNotes.map((note, i) => (
                  <li key={i} style={{ fontSize: '0.75rem', lineHeight: 1.5, color: 'var(--color-muted)', opacity: 0.8 }}>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Label */}
      {showLabel && (
        <div style={{ textAlign: 'center' }}>
          <span className="font-outfit" style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
            {position.name}
          </span>
          <span className="font-amiri" style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginLeft: '8px', opacity: 0.6 }}>
            {position.nameAr}
          </span>
        </div>
      )}
    </div>
  );
}
