'use client';

import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';

export function BookmarkButton({ surahNumber }: { surahNumber: number }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const bookmarked = isBookmarked(surahNumber);

  return (
    <button
      onClick={() => toggleBookmark(surahNumber)}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: bookmarked
          ? '1px solid rgba(201, 168, 76, 0.3)'
          : '1px solid var(--color-border)',
        background: bookmarked
          ? 'rgba(201, 168, 76, 0.10)'
          : 'var(--color-surface)',
        color: bookmarked
          ? 'var(--color-gold)'
          : 'var(--color-muted)',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      aria-label={bookmarked ? 'Retirer des favoris' : 'Ajouter aux favoris'}
    >
      <Bookmark
        style={{ width: '18px', height: '18px' }}
        fill={bookmarked ? 'currentColor' : 'none'}
      />
    </button>
  );
}
