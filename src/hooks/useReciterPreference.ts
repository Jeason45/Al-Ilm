'use client';

import { useLocalStorage } from './useLocalStorage';
import { DEFAULT_RECITER_ID } from '@/lib/quran-api';

export function useReciterPreference() {
  const [reciterId, setReciterId] = useLocalStorage<number>('al-ilm-reciter', DEFAULT_RECITER_ID);
  return { reciterId, setReciterId };
}
