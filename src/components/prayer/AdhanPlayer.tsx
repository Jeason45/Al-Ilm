'use client';

import { Play, Pause, Square } from 'lucide-react';
import { muezzins } from '@/data/adhan/muezzins';

interface AdhanPlayerProps {
  muezzinId: string;
  onMuezzinChange: (id: string) => void;
  isPlaying: boolean;
  progress: number;
  onPlay: (url: string) => void;
  onStop: () => void;
}

export function AdhanPlayer({ muezzinId, onMuezzinChange, isPlaying, progress, onPlay, onStop }: AdhanPlayerProps) {
  const currentMuezzin = muezzins.find(m => m.id === muezzinId) || muezzins[0];

  return (
    <div className="surah-card" style={{ padding: '1.25rem', marginBottom: '1.5rem' }}>
      {/* Muezzin selector */}
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
          Muezzin
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {muezzins.map((m) => {
            const isActive = m.id === muezzinId;
            return (
              <button
                key={m.id}
                onClick={() => {
                  onStop();
                  onMuezzinChange(m.id);
                }}
                style={{
                  padding: '6px 12px', borderRadius: '8px',
                  fontSize: '0.8125rem', fontFamily: 'inherit',
                  cursor: 'pointer', transition: 'all 0.2s',
                  border: `1px solid ${isActive ? 'var(--color-gold)' : 'var(--color-border)'}`,
                  background: isActive ? 'rgba(201, 168, 76, 0.12)' : 'transparent',
                  color: isActive ? 'var(--color-gold)' : 'var(--color-muted)',
                }}
              >
                {m.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '100%', height: '4px', borderRadius: '2px',
        background: 'var(--color-border)', marginBottom: '1rem',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress * 100}%`, height: '100%',
          background: 'var(--color-gold)', borderRadius: '2px',
          transition: 'width 0.3s ease',
        }} />
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
        <button
          onClick={() => onPlay(currentMuezzin.audioUrl)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '48px', height: '48px', borderRadius: '50%',
            background: 'var(--color-gold)', border: 'none',
            cursor: 'pointer', transition: 'opacity 0.2s',
          }}
        >
          {isPlaying ? (
            <Pause style={{ width: '20px', height: '20px', color: '#000' }} />
          ) : (
            <Play style={{ width: '20px', height: '20px', color: '#000', marginLeft: '2px' }} />
          )}
        </button>

        {(isPlaying || progress > 0) && (
          <button
            onClick={onStop}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '36px', height: '36px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)',
              cursor: 'pointer',
            }}
          >
            <Square style={{ width: '14px', height: '14px', color: 'var(--color-muted)' }} />
          </button>
        )}
      </div>

      {/* Current muezzin name */}
      <p className="font-amiri" style={{
        textAlign: 'center', fontSize: '0.875rem',
        color: 'var(--color-gold)', opacity: 0.7, marginTop: '10px',
      }}>
        {currentMuezzin.nameAr}
      </p>
    </div>
  );
}
