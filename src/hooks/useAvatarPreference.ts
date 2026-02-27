'use client';

import { useLocalStorage } from './useLocalStorage';

const STORAGE_KEY = 'al-ilm-prayer-avatar';
const DEFAULT_URL = 'https://models.readyplayer.me/696ce18a29115399d7fe924c.glb';

export function useAvatarPreference() {
  const [avatarUrl, setAvatarUrl] = useLocalStorage<string>(STORAGE_KEY, DEFAULT_URL);
  return { avatarUrl, setAvatarUrl } as const;
}
