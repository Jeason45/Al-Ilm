'use client';

import { useState, useEffect, useCallback } from 'react';
import type { PrayerPositionId } from '@/data/prayer-guide/types';
import { getPosition } from '@/data/prayer-guide/positions';
import { ImageOff } from 'lucide-react';

interface PrayerPositionImageProps {
  activePosition: PrayerPositionId;
  showLabel?: boolean;
}

export function PrayerPositionImage({ activePosition, showLabel = true }: PrayerPositionImageProps) {
  const position = getPosition(activePosition);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedSrc, setDisplayedSrc] = useState(position?.imagePath ?? '');

  useEffect(() => {
    if (!position) return;
    setHasError(false);
    setIsLoading(true);
    setDisplayedSrc(position.imagePath);
  }, [position]);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  if (!position) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      {/* Image container */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '340px',
        aspectRatio: '3 / 4',
        borderRadius: '16px',
        border: '1.5px solid rgba(201, 168, 76, 0.3)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
        overflow: 'hidden',
        background: 'var(--color-surface, #1a1a2e)',
      }}>
        {hasError ? (
          /* Fallback */
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            background: 'rgba(201, 168, 76, 0.05)',
          }}>
            <ImageOff style={{ width: '48px', height: '48px', color: 'rgba(201, 168, 76, 0.3)' }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textAlign: 'center', padding: '0 1rem' }}>
              Image bientôt disponible
            </span>
          </div>
        ) : (
          <img
            key={displayedSrc}
            src={displayedSrc}
            alt={`${position.name} — ${position.nameAr}`}
            onError={handleError}
            onLoad={handleLoad}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.35s ease',
            }}
          />
        )}

        {/* Loading shimmer overlay */}
        {isLoading && !hasError && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(110deg, transparent 30%, rgba(201, 168, 76, 0.06) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }} />
        )}
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

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
