'use client';

import { useState, useRef, useCallback } from 'react';
import { Volume2, Eye, EyeOff } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { useReciterPreference } from '@/hooks/useReciterPreference';
import { useFavorites } from '@/hooks/useFavorites';
import { fetchAudio, RECITERS } from '@/lib/quran-api';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { InvocationCard } from './InvocationCard';
import type { InvocationItem, InvocationCategory } from '@/data/types';

/* ── Parse quranRef → chapter + verse range ── */
function parseQuranRef(ref: string): { chapter: number; verseStart: number; verseEnd: number } | null {
  const match = ref.match(/(\d+):(\d+)(?:-(\d+))?/);
  if (!match) return null;
  const chapter = parseInt(match[1], 10);
  const verseStart = parseInt(match[2], 10);
  const verseEnd = match[3] ? parseInt(match[3], 10) : verseStart;
  return { chapter, verseStart, verseEnd };
}

interface InvocationReaderProps {
  invocations: InvocationItem[];
  categoryId: InvocationCategory;
}

export function InvocationReader({ invocations, categoryId }: InvocationReaderProps) {
  const hasQuranic = invocations.some(inv => inv.isQuranic);

  const { currentVerseKey, isPlaying, playVerse, playAll, stop } = useAudioPlayer();
  const { reciterId, setReciterId } = useReciterPreference();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [showTranslit, setShowTranslit] = useLocalStorage('al-ilm-show-transliteration', true);

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
    const inv = invocations[index];
    if (!inv.isQuranic || !inv.quranRef) return;

    if (playingIndex === index && isPlaying) {
      stop();
      setPlayingIndex(null);
      return;
    }

    const ref = parseQuranRef(inv.quranRef);
    if (!ref) return;

    setLoadingIndex(index);
    try {
      const audioMap = await fetchChapterAudio(ref.chapter);

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
  }, [invocations, playingIndex, isPlaying, stop, fetchChapterAudio, playVerse, playAll]);

  const handleReciterChange = (id: number) => {
    stop();
    setPlayingIndex(null);
    audioCacheRef.current.clear();
    setReciterId(id);
  };

  const isCurrentlyPlaying = isPlaying && playingIndex !== null;

  return (
    <div>
      {/* Controls */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
      }}>
        {/* Transliteration toggle */}
        <button
          onClick={() => setShowTranslit(!showTranslit)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '8px',
            fontSize: '0.8125rem',
            fontFamily: 'inherit',
            fontWeight: 500,
            color: showTranslit ? 'var(--color-gold)' : 'var(--color-muted)',
            background: showTranslit ? 'rgba(201, 168, 76, 0.1)' : 'rgba(255, 255, 255, 0.04)',
            border: `1px solid ${showTranslit ? 'rgba(201, 168, 76, 0.2)' : 'var(--color-border)'}`,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {showTranslit ? <Eye size={14} /> : <EyeOff size={14} />}
          Translitération
        </button>

        {/* Reciter selector (only if category has quranic invocations) */}
        {hasQuranic && (
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
                fontFamily: 'inherit',
              }}
            >
              {RECITERS.map((r) => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Invocation cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {invocations.map((inv, index) => {
          const isThisPlaying = playingIndex === index && isCurrentlyPlaying;
          const isThisLoading = loadingIndex === index;

          return (
            <ScrollReveal key={inv.id} delay={index * 40}>
              <InvocationCard
                invocation={inv}
                showTransliteration={showTranslit}
                isFavorite={isFavorite('invocation', inv.id)}
                onToggleFavorite={() => toggleFavorite('invocation', inv.id, inv.titre)}
                isPlaying={isThisPlaying}
                isLoading={isThisLoading}
                onPlay={inv.isQuranic ? () => handlePlay(index) : undefined}
              />
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
