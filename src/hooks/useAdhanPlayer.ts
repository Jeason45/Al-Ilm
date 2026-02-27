'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import type { AdhanLine } from '@/data/adhan/adhan-text';

interface UseAdhanPlayerOptions {
  lines: AdhanLine[];
}

export function useAdhanPlayer({ lines }: UseAdhanPlayerOptions) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const animFrameRef = useRef<number>(0);

  const totalWeight = lines.reduce((sum, l) => sum + l.repetitions, 0);

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    return audioRef.current;
  }, []);

  const updateProgress = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const pct = audio.currentTime / audio.duration;
    setProgress(pct);

    // Estimate current line based on proportional duration
    let accumulated = 0;
    for (let i = 0; i < lines.length; i++) {
      accumulated += lines[i].repetitions / totalWeight;
      if (pct < accumulated) {
        setCurrentLineIndex(i);
        break;
      }
    }

    if (!audio.paused) {
      animFrameRef.current = requestAnimationFrame(updateProgress);
    }
  }, [lines, totalWeight]);

  const play = useCallback((url: string) => {
    const audio = getAudio();

    if (audio.src === url && !audio.paused) {
      audio.pause();
      setIsPlaying(false);
      cancelAnimationFrame(animFrameRef.current);
      return;
    }

    if (audio.src === url && audio.paused && audio.currentTime > 0) {
      audio.play();
      setIsPlaying(true);
      animFrameRef.current = requestAnimationFrame(updateProgress);
      return;
    }

    audio.src = url;
    audio.play();
    setIsPlaying(true);
    setCurrentLineIndex(0);
    setProgress(0);
    animFrameRef.current = requestAnimationFrame(updateProgress);

    audio.onended = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentLineIndex(-1);
      cancelAnimationFrame(animFrameRef.current);
    };

    audio.ontimeupdate = () => {
      // Fallback for browsers where rAF doesn't fire
    };
  }, [getAudio, updateProgress]);

  const stop = useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.removeAttribute('src');
      audio.load();
      audio.onended = null;
    }
    setIsPlaying(false);
    setProgress(0);
    setCurrentLineIndex(-1);
    cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeAttribute('src');
        audioRef.current.load();
      }
    };
  }, []);

  return { isPlaying, progress, currentLineIndex, play, stop };
}
