'use client';

import { useLocalStorage } from './useLocalStorage';

export function useMuezzinPreference() {
  const [muezzinId, setMuezzinId] = useLocalStorage<string>('al-ilm-muezzin', 'afasy');
  return { muezzinId, setMuezzinId };
}
