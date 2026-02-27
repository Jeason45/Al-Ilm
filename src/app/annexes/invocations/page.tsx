'use client';

import { useState, useRef, useCallback } from 'react';
import { invocations } from '@/data/annexes/invocations';
import { Badge } from '@/components/Badge';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { useReciterPreference } from '@/hooks/useReciterPreference';
import { fetchAudio, RECITERS } from '@/lib/quran-api';
import { Play, Pause, Volume2 } from 'lucide-react';

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
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-amiri text-2xl text-gold mb-4">الدعاء</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Invocations coraniques.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto mb-6">
            Les plus belles invocations du Coran pour chaque moment de la vie.
          </p>

          {/* Reciter selector */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Volume2 size={16} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <select
              value={reciterId}
              onChange={(e) => handleReciterChange(Number(e.target.value))}
              style={{
                background: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                borderRadius: '8px',
                padding: '6px 12px',
                fontSize: '13px',
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

        <div className="space-y-4">
          {invocations.map((dua, index) => {
            const isThisPlaying = playingIndex === index && isCurrentlyPlaying;
            const isThisLoading = loadingIndex === index;

            return (
              <div key={index} className="card p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Play button */}
                    <button
                      onClick={() => handlePlay(index)}
                      disabled={isThisLoading}
                      aria-label={isThisPlaying ? 'Mettre en pause' : 'Écouter cette invocation'}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        border: `1px solid ${isThisPlaying ? 'var(--color-gold)' : 'var(--color-border)'}`,
                        background: isThisPlaying ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
                        cursor: isThisLoading ? 'wait' : 'pointer',
                        color: isThisPlaying ? 'var(--color-gold)' : 'var(--color-muted)',
                        transition: 'all 0.2s',
                        flexShrink: 0,
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
                    <h3 className="text-[15px] font-medium font-outfit">{dua.titre}</h3>
                  </div>
                  <Badge variant="gold">{dua.reference}</Badge>
                </div>

                <p
                  className="font-amiri text-xl text-gold text-right leading-loose mb-4 pb-4 border-b border-border"
                  dir="rtl"
                  style={isThisPlaying ? { textShadow: '0 0 20px rgba(201, 168, 76, 0.3)' } : undefined}
                >
                  {dua.arabe}
                </p>

                <p className="text-[15px] text-foreground/90 italic mb-3">&laquo; {dua.traduction} &raquo;</p>

                <p className="text-[13px] text-muted">
                  <span className="text-gold font-medium">Occasion :</span> {dua.occasion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
