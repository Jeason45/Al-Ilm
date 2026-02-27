'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useLocalStorage } from './useLocalStorage';

interface FavoriteItem {
  type: string;
  reference: string;
  label?: string;
}

export function useFavorites() {
  const { data: session } = useSession();
  const [localFavs, setLocalFavs] = useLocalStorage<FavoriteItem[]>('al-ilm-favorites', []);
  const [dbFavs, setDbFavs] = useState<FavoriteItem[]>([]);
  const [synced, setSynced] = useState(false);

  const isLoggedIn = !!session?.user;
  const favorites = isLoggedIn ? dbFavs : localFavs;

  // Fetch DB favorites when logged in
  useEffect(() => {
    if (!isLoggedIn) return;

    fetch('/api/favorites')
      .then(r => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDbFavs(data.map((f: { type: string; reference: string; label?: string }) => ({
            type: f.type,
            reference: f.reference,
            label: f.label || undefined,
          })));
        }
      })
      .catch(() => {});
  }, [isLoggedIn]);

  // Sync localStorage favorites to DB on first login
  useEffect(() => {
    if (!isLoggedIn || synced || localFavs.length === 0) return;
    setSynced(true);

    Promise.all(
      localFavs.map((f) =>
        fetch('/api/favorites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(f),
        })
      )
    ).then(() => {
      // Re-fetch and clear local
      fetch('/api/favorites')
        .then(r => r.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setDbFavs(data.map((f: { type: string; reference: string; label?: string }) => ({
              type: f.type,
              reference: f.reference,
              label: f.label || undefined,
            })));
          }
        });
      setLocalFavs([]);
    }).catch(() => {});
  }, [isLoggedIn, synced, localFavs, setLocalFavs]);

  const isFavorite = useCallback((type: string, reference: string) => {
    return favorites.some(f => f.type === type && f.reference === reference);
  }, [favorites]);

  const toggleFavorite = useCallback(async (type: string, reference: string, label?: string) => {
    const exists = isFavorite(type, reference);

    if (isLoggedIn) {
      if (exists) {
        await fetch('/api/favorites', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, reference }),
        });
        setDbFavs(prev => prev.filter(f => !(f.type === type && f.reference === reference)));
      } else {
        await fetch('/api/favorites', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type, reference, label }),
        });
        setDbFavs(prev => [...prev, { type, reference, label }]);
      }
    } else {
      if (exists) {
        setLocalFavs(prev => prev.filter(f => !(f.type === type && f.reference === reference)));
      } else {
        setLocalFavs(prev => [...prev, { type, reference, label }]);
      }
    }
  }, [isLoggedIn, isFavorite, setLocalFavs]);

  return { favorites, isFavorite, toggleFavorite };
}
