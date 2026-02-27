'use client';

import { useCallback } from 'react';
import { Play, Pause, Heart } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { RepetitionCounter } from './RepetitionCounter';
import type { InvocationItem } from '@/data/types';

interface InvocationCardProps {
  invocation: InvocationItem;
  showTransliteration: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  // Audio props (only for Quranic)
  isPlaying?: boolean;
  isLoading?: boolean;
  onPlay?: () => void;
}

export function InvocationCard({
  invocation,
  showTransliteration,
  isFavorite,
  onToggleFavorite,
  isPlaying = false,
  isLoading = false,
  onPlay,
}: InvocationCardProps) {
  const handleFavorite = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite();
  }, [onToggleFavorite]);

  return (
    <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
      {/* Header: Play + Title + Source + Favorite */}
      <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '10px', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
          {/* Play button (only Quranic) */}
          {invocation.isQuranic && onPlay && (
            <button
              onClick={onPlay}
              disabled={isLoading}
              aria-label={isPlaying ? 'Mettre en pause' : 'Écouter cette invocation'}
              style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                border: `1px solid ${isPlaying ? 'var(--color-gold)' : 'var(--color-border)'}`,
                background: isPlaying ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
                cursor: isLoading ? 'wait' : 'pointer',
                color: isPlaying ? 'var(--color-gold)' : 'var(--color-muted)',
                transition: 'all 0.2s',
              }}
            >
              {isLoading ? (
                <span style={{
                  width: '14px', height: '14px', border: '2px solid var(--color-muted)',
                  borderTopColor: 'transparent', borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite', display: 'block',
                }} />
              ) : isPlaying ? (
                <Pause size={14} />
              ) : (
                <Play size={14} style={{ marginLeft: '2px' }} />
              )}
            </button>
          )}

          <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {invocation.titre}
          </h3>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <Badge variant={invocation.isQuranic ? 'gold' : 'default'}>{invocation.source}</Badge>
          <button
            onClick={handleFavorite}
            aria-label={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '28px', height: '28px', borderRadius: '6px',
              background: 'transparent', border: 'none', cursor: 'pointer',
              color: isFavorite ? 'var(--color-gold)' : 'var(--color-muted)',
              transition: 'color 0.2s',
            }}
          >
            <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Arabic text */}
      <p
        className="font-amiri text-gold"
        dir="rtl"
        style={{
          fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
          lineHeight: 2,
          marginBottom: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--color-border)',
          textShadow: isPlaying ? '0 0 20px rgba(201, 168, 76, 0.3)' : 'none',
        }}
      >
        {invocation.arabe}
      </p>

      {/* Transliteration (toggle) */}
      {showTransliteration && invocation.transliteration && (
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--color-muted)',
          fontStyle: 'italic',
          marginBottom: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--color-border)',
          lineHeight: 1.7,
        }}>
          {invocation.transliteration}
        </p>
      )}

      {/* French translation */}
      <p style={{
        fontSize: '0.9375rem',
        color: 'var(--color-foreground)',
        opacity: 0.9,
        fontStyle: 'italic',
        marginBottom: invocation.repetitions && invocation.repetitions > 1 || invocation.notes ? '1rem' : 0,
        lineHeight: 1.7,
      }}>
        &laquo; {invocation.traduction} &raquo;
      </p>

      {/* Repetition counter */}
      {invocation.repetitions && invocation.repetitions > 1 && (
        <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginBottom: invocation.notes ? '0.75rem' : 0 }}>
          <RepetitionCounter target={invocation.repetitions} />
        </div>
      )}

      {/* Notes */}
      {invocation.notes && (
        <p className="text-muted" style={{ fontSize: '0.8125rem', lineHeight: 1.5 }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 500 }}>Note :</span> {invocation.notes}
        </p>
      )}
    </div>
  );
}
