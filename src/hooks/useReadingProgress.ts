'use client';

import { useLocalStorage } from './useLocalStorage';
import { useCallback } from 'react';

export function useReadingProgress() {
  const [readSurahs, setReadSurahs] = useLocalStorage<number[]>('al-ilm-read', []);

  const markAsRead = useCallback((surahNumber: number) => {
    setReadSurahs(prev =>
      prev.includes(surahNumber) ? prev : [...prev, surahNumber]
    );
  }, [setReadSurahs]);

  const toggleRead = useCallback((surahNumber: number) => {
    setReadSurahs(prev =>
      prev.includes(surahNumber)
        ? prev.filter(n => n !== surahNumber)
        : [...prev, surahNumber]
    );
  }, [setReadSurahs]);

  const isRead = useCallback((surahNumber: number) => {
    return readSurahs.includes(surahNumber);
  }, [readSurahs]);

  const progressPercentage = Math.round((readSurahs.length / 114) * 100);

  return { readSurahs, markAsRead, toggleRead, isRead, progressPercentage };
}
