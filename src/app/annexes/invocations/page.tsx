'use client';

import { useState, useRef, useCallback } from 'react';
import { invocations } from '@/data/annexes/invocations';
import { Badge } from '@/components/Badge';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { useReciterPreference } from '@/hooks/useReciterPreference';
import { fetchAudio, RECITERS } from '@/lib/quran-api';
import { Play, Pause, Volume2 } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';

/* ── Parse reference → chapter + verse range ── */
function parseReference(ref: string): { chapter: number; verseStart: number; verseEnd: number } | null {
  // Formats: "Al-Baqara 2:201", "Ta-Ha 20:25-28", "Al-Fatiha 1:1-7"
  const match = ref.match(/(\d+):(\d+)(?:-(\d+))?/);
  if (!match) return null;
  const chapter = parseInt(match[1], 10);
  const verseStart = parseInt(match[2], 10);
  const verseEnd = match[3] ? parseInt(match[3], 10) : verseStart;
  return { chapter, verseStart, verseEnd };
}

export default function InvocationsPage() {
  const { currentVerseKey, isPlaying, isPlayingAll, playVerse, playAll, stop } = useAudioPlayer();
  const { reciterId, setReciterId } = useReciterPreference();

  // Cache: chapter number → Map<verseKey, audioUrl>
  const audioCacheRef = useRef<Map<number, Map<string, string>>>(new Map());
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const fetchChapterAudio = useCallback(async (chapter: number): Promise<Map<string, string>> => {
    const cached = audioCacheRef.current.get(chapter);
    if (cached) return cached;
    const audioMap = await fetchAudio(chapter, reciterId);
    audioCacheRef.current.set(chapter, audioMap);
    return audioMap;
  }, [reciterId]);

  const handlePlay = useCallback(async (index: number) => {
    // If already playing this invocation, stop
    if (playingIndex === index && isPlaying) {
      stop();
      setPlayingIndex(null);
      return;
    }

    const ref = parseReference(invocations[index].reference);
    if (!ref) return;

    setLoadingIndex(index);
    try {
      const audioMap = await fetchChapterAudio(ref.chapter);

      // Build verse keys and urls for the range
      const keys: string[] = [];
      const urls: string[] = [];
      for (let v = ref.verseStart; v <= ref.verseEnd; v++) {
        const key = `${ref.chapter}:${v}`;
        const url = audioMap.get(key);
        if (url) {
          keys.push(key);
          urls.push(url);
        }
      }

      if (keys.length === 0) return;

      setPlayingIndex(index);
      if (keys.length === 1) {
        playVerse(keys[0], urls[0]);
      } else {
        playAll(keys, urls);
      }
    } finally {
      setLoadingIndex(null);
    }
  }, [playingIndex, isPlaying, stop, fetchChapterAudio, playVerse, playAll]);

  // Reset playingIndex when audio ends naturally
  const isCurrentlyPlaying = isPlaying && playingIndex !== null;

  // Clear reciter cache when reciter changes
  const handleReciterChange = (id: number) => {
    stop();
    setPlayingIndex(null);
    audioCacheRef.current.clear();
    setReciterId(id);
  };

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الدعاء
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Invocations coraniques.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto 1.5rem' }}>
              Les plus belles invocations du Coran pour chaque moment de la vie.
            </p>

            {/* Reciter selector */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <Volume2 size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <select
                value={reciterId}
                onChange={(e) => handleReciterChange(Number(e.target.value))}
                style={{
                  background: 'var(--color-surface-elevated)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  padding: '6px 12px',
                  fontSize: '0.8125rem',
                  color: 'var(--color-foreground)',
                  cursor: 'pointer',
                }}
              >
                {RECITERS.map((r) => (
                  <option key={r.id} value={r.id}>{r.name}</option>
                ))}
              </select>
            </div>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {invocations.map((dua, index) => {
            const isThisPlaying = playingIndex === index && isCurrentlyPlaying;
            const isThisLoading = loadingIndex === index;

            return (
              <ScrollReveal key={index} delay={index * 40}>
                <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '12px', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <button
                        onClick={() => handlePlay(index)}
                        disabled={isThisLoading}
                        aria-label={isThisPlaying ? 'Mettre en pause' : 'Écouter cette invocation'}
                        style={{
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0,
                          border: `1px solid ${isThisPlaying ? 'var(--color-gold)' : 'var(--color-border)'}`,
                          background: isThisPlaying ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
                          cursor: isThisLoading ? 'wait' : 'pointer',
                          color: isThisPlaying ? 'var(--color-gold)' : 'var(--color-muted)',
                          transition: 'all 0.2s',
                        }}
                      >
                        {isThisLoading ? (
                          <span style={{
                            width: '14px', height: '14px', border: '2px solid var(--color-muted)',
                            borderTopColor: 'transparent', borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite', display: 'block',
                          }} />
                        ) : isThisPlaying ? (
                          <Pause size={14} />
                        ) : (
                          <Play size={14} style={{ marginLeft: '2px' }} />
                        )}
                      </button>
                      <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>{dua.titre}</h3>
                    </div>
                    <Badge variant="gold">{dua.reference}</Badge>
                  </div>

                  <p
                    className="font-amiri text-gold"
                    dir="rtl"
                    style={{
                      fontSize: '1.25rem', lineHeight: 2, marginBottom: '1rem', paddingBottom: '1rem',
                      borderBottom: '1px solid var(--color-border)',
                      textShadow: isThisPlaying ? '0 0 20px rgba(201, 168, 76, 0.3)' : 'none',
                    }}
                  >
                    {dua.arabe}
                  </p>

                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-foreground)', opacity: 0.9, fontStyle: 'italic', marginBottom: '0.75rem' }}>
                    &laquo; {dua.traduction} &raquo;
                  </p>

                  <p className="text-muted" style={{ fontSize: '0.8125rem' }}>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 500 }}>Occasion :</span> {dua.occasion}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
