'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
        Une erreur est survenue
      </h2>
      <p style={{ color: 'var(--text-secondary)' }}>
        Nous nous excusons pour ce désagrément. Veuillez réessayer.
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 rounded-xl font-medium transition-colors"
        style={{
          backgroundColor: 'var(--gold)',
          color: 'var(--bg-primary)',
        }}
      >
        Réessayer
      </button>
    </div>
  );
}
