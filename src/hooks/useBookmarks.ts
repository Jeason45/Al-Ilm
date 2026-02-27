'use client';

import { useLocalStorage } from './useLocalStorage';
import { useCallback } from 'react';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>('al-ilm-bookmarks', []);

  const toggleBookmark = useCallback((surahNumber: number) => {
    setBookmarks(prev =>
      prev.includes(surahNumber)
        ? prev.filter(n => n !== surahNumber)
        : [...prev, surahNumber]
    );
  }, [setBookmarks]);

  const isBookmarked = useCallback((surahNumber: number) => {
    return bookmarks.includes(surahNumber);
  }, [bookmarks]);

  return { bookmarks, toggleBookmark, isBookmarked };
}
