'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Play, Pause, Square, ChevronDown, SkipBack, SkipForward } from 'lucide-react';
import { fetchAudio, RECITERS } from '@/lib/quran-api';
import { useReciterPreference } from '@/hooks/useReciterPreference';

interface SurahAudioPlayerProps {
  chapterNumber: number;
  verseCount: number;
}

export function SurahAudioPlayer({ chapterNumber, verseCount }: SurahAudioPlayerProps) {
  const [audioUrls, setAudioUrls] = useState<Map<string, string>>(new Map());
  const [audioLoading, setAudioLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const keysRef = useRef<string[]>([]);

  const { reciterId, setReciterId } = useReciterPreference();
  const currentReciter = RECITERS.find(r => r.id === reciterId) || RECITERS[0];

  const getAudio = useCallback(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    return audioRef.current;
  }, []);

  // Build ordered keys
  useEffect(() => {
    keysRef.current = Array.from({ length: verseCount }, (_, i) => `${chapterNumber}:${i + 1}`);
  }, [chapterNumber, verseCount]);

  // Fetch audio on reciter change
  useEffect(() => {
    let cancelled = false;
    setAudioLoading(true);
    stop();

    fetchAudio(chapterNumber, reciterId)
      .then((map) => { if (!cancelled) { setAudioUrls(map); setAudioLoading(false); } })
      .catch(() => { if (!cancelled) { setAudioUrls(new Map()); setAudioLoading(false); } });

    return () => { cancelled = true; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterNumber, reciterId]);

  function stop() {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
      audio.load();
      audio.onended = null;
    }
    setCurrentIndex(-1);
    setIsPlaying(false);
  }

  function playFromIndex(idx: number) {
    const keys = keysRef.current;
    if (idx < 0 || idx >= keys.length) { stop(); return; }

    const url = audioUrls.get(keys[idx]);
    if (!url) { stop(); return; }

    const audio = getAudio();
    audio.onended = () => {
      const nextIdx = idx + 1;
      if (nextIdx < keys.length) {
        playFromIndex(nextIdx);
      } else {
        stop();
      }
    };
    audio.src = url;
    audio.play();
    setCurrentIndex(idx);
    setIsPlaying(true);
  }

  function handlePlayPause() {
    if (isPlaying) {
      const audio = audioRef.current;
      if (audio) { audio.pause(); audio.onended = null; }
      setIsPlaying(false);
      return;
    }
    // Resume or start from beginning
    if (currentIndex >= 0) {
      const audio = getAudio();
      const keys = keysRef.current;
      audio.onended = () => {
        const nextIdx = currentIndex + 1;
        if (nextIdx < keys.length) playFromIndex(nextIdx);
        else stop();
      };
      audio.play();
      setIsPlaying(true);
    } else {
      playFromIndex(0);
    }
  }

  function handlePrev() {
    const idx = currentIndex > 0 ? currentIndex - 1 : 0;
    playFromIndex(idx);
  }

  function handleNext() {
    const keys = keysRef.current;
    if (currentIndex < keys.length - 1) playFromIndex(currentIndex + 1);
    else stop();
  }

  function handleReciterChange(id: number) {
    setReciterId(id);
    setDropdownOpen(false);
  }

  const ready = !audioLoading && audioUrls.size > 0;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 16px',
      borderRadius: '12px',
      background: 'var(--color-surface-elevated)',
      border: '1px solid var(--color-border)',
      flexWrap: 'wrap',
    }}>
      {/* Play controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button
          onClick={handlePrev}
          disabled={!ready || currentIndex <= 0}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '32px', height: '32px', borderRadius: '50%',
            border: 'none', background: 'transparent',
            color: !ready || currentIndex <= 0 ? 'var(--color-border)' : 'var(--color-muted)',
            cursor: !ready || currentIndex <= 0 ? 'default' : 'pointer',
            transition: 'color 0.15s',
          }}
        >
          <SkipBack style={{ width: '14px', height: '14px' }} />
        </button>

        <button
          onClick={handlePlayPause}
          disabled={!ready}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '36px', height: '36px', borderRadius: '50%',
            border: '1px solid var(--color-border)',
            background: isPlaying ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
            color: isPlaying ? 'var(--color-gold)' : 'var(--color-foreground)',
            cursor: ready ? 'pointer' : 'default',
            opacity: ready ? 1 : 0.4,
            transition: 'all 0.2s',
          }}
        >
          {isPlaying ? (
            <Pause style={{ width: '16px', height: '16px' }} />
          ) : (
            <Play style={{ width: '16px', height: '16px', marginLeft: '2px' }} />
          )}
        </button>

        <button
          onClick={handleNext}
          disabled={!ready || currentIndex < 0}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '32px', height: '32px', borderRadius: '50%',
            border: 'none', background: 'transparent',
            color: !ready || currentIndex < 0 ? 'var(--color-border)' : 'var(--color-muted)',
            cursor: !ready || currentIndex < 0 ? 'default' : 'pointer',
            transition: 'color 0.15s',
          }}
        >
          <SkipForward style={{ width: '14px', height: '14px' }} />
        </button>
      </div>

      {/* Verse indicator */}
      <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', minWidth: '60px' }}>
        {audioLoading ? 'Chargement...' : currentIndex >= 0 ? (
          <span>Verset <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{currentIndex + 1}</span> / {verseCount}</span>
        ) : (
          <span>{verseCount} versets</span>
        )}
      </span>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Reciter dropdown */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '6px 12px', fontSize: '0.75rem',
            cursor: 'pointer', border: '1px solid var(--color-border)',
            background: 'transparent', color: 'var(--color-foreground)',
            borderRadius: '8px', transition: 'border-color 0.2s',
          }}
        >
          <span style={{ color: 'var(--color-muted)', whiteSpace: 'nowrap' }}>{currentReciter.name}</span>
          <ChevronDown style={{ width: '12px', height: '12px', color: 'var(--color-muted)', transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
        </button>

        {dropdownOpen && (
          <>
            <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setDropdownOpen(false)} />
            <div style={{
              position: 'absolute', top: 'calc(100% + 6px)', right: 0, zIndex: 50,
              minWidth: '260px', background: 'var(--color-surface-elevated)',
              border: '1px solid var(--color-border)', borderRadius: '10px',
              overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
            }}>
              {RECITERS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => handleReciterChange(r.id)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '10px 14px', fontSize: '0.8125rem', border: 'none',
                    background: r.id === reciterId ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                    color: r.id === reciterId ? 'var(--color-gold)' : 'var(--color-foreground)',
                    fontWeight: r.id === reciterId ? 600 : 400,
                    cursor: 'pointer', transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => { if (r.id !== reciterId) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={(e) => { if (r.id !== reciterId) e.currentTarget.style.background = 'transparent'; }}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Stop button */}
      {isPlaying && (
        <button
          onClick={stop}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '32px', height: '32px', borderRadius: '50%',
            border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444', cursor: 'pointer', transition: 'all 0.2s',
          }}
        >
          <Square style={{ width: '12px', height: '12px' }} />
        </button>
      )}
    </div>
  );
}
