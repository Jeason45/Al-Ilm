'use client';

import { useState } from 'react';
import { adhanLines, iqamaLines } from '@/data/adhan/adhan-text';
import { useMuezzinPreference } from '@/hooks/useMuezzinPreference';
import { useAdhanPlayer } from '@/hooks/useAdhanPlayer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { AdhanPlayer } from './AdhanPlayer';
import { AdhanTextDisplay } from './AdhanTextDisplay';
import { DuaAfterAdhan } from './DuaAfterAdhan';

type AdhanMode = 'adhan' | 'iqama';

export function AdhanTab() {
  const [mode, setMode] = useState<AdhanMode>('adhan');
  const { muezzinId, setMuezzinId } = useMuezzinPreference();

  const lines = mode === 'adhan' ? adhanLines : iqamaLines;
  const { isPlaying, progress, currentLineIndex, play, stop } = useAdhanPlayer({ lines });

  const handleModeChange = (newMode: AdhanMode) => {
    stop();
    setMode(newMode);
  };

  return (
    <div>
      {/* Adhan / Iqama toggle */}
      <ScrollReveal delay={80}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            padding: '4px', borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--color-border)',
          }}>
            {(['adhan', 'iqama'] as const).map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m)}
                style={{
                  padding: '8px 20px', fontSize: '13px', fontWeight: 500,
                  borderRadius: '8px', border: 'none', cursor: 'pointer',
                  transition: 'all 0.2s', fontFamily: 'inherit',
                  background: mode === m ? 'var(--color-gold)' : 'transparent',
                  color: mode === m ? '#000' : 'var(--color-muted)',
                }}
              >
                {m === 'adhan' ? 'Adhan' : 'Iqama'}
              </button>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Player */}
      <ScrollReveal delay={120}>
        <AdhanPlayer
          muezzinId={muezzinId}
          onMuezzinChange={setMuezzinId}
          isPlaying={isPlaying}
          progress={progress}
          onPlay={play}
          onStop={stop}
        />
      </ScrollReveal>

      {/* Text display */}
      <ScrollReveal delay={160}>
        <AdhanTextDisplay lines={lines} currentLineIndex={currentLineIndex} />
      </ScrollReveal>

      {/* Du'a after adhan */}
      <ScrollReveal delay={200}>
        <DuaAfterAdhan />
      </ScrollReveal>
    </div>
  );
}
