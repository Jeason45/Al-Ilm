import Link from 'next/link';
import type { SurahMeta } from '@/data/types';

export function SurateCard({ surah, basePath = '/apprendre' }: { surah: SurahMeta; basePath?: string }) {
  return (
    <Link
      href={`${basePath}/${surah.numero}`}
      className="surah-card group"
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem',
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
      }}
    >
      {/* Top row: number + type */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 600,
          color: 'var(--color-muted)',
          letterSpacing: '0.04em',
          fontFamily: 'var(--font-outfit)',
        }}>
          {String(surah.numero).padStart(3, '0')}
        </span>
        <span style={{
          fontSize: '0.6875rem',
          fontWeight: 500,
          color: surah.type === 'mecquoise' ? 'var(--color-gold)' : 'var(--color-emerald)',
          padding: '2px 8px',
          borderRadius: '100px',
          background: surah.type === 'mecquoise'
            ? 'rgba(201, 168, 76, 0.08)'
            : 'rgba(74, 222, 128, 0.08)',
          border: surah.type === 'mecquoise'
            ? '1px solid rgba(201, 168, 76, 0.12)'
            : '1px solid rgba(74, 222, 128, 0.12)',
        }}>
          {surah.type === 'mecquoise' ? 'Mecquoise' : 'Médinoise'}
        </span>
      </div>

      {/* Center: Arabic name */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '1.25rem' }}>
        <p className="font-amiri" style={{ fontSize: '2rem', color: 'var(--color-gold)', lineHeight: 1.3, marginBottom: '0.75rem', opacity: 0.8 }}>
          {surah.nomArabe}
        </p>
        <p className="font-outfit font-semibold" style={{ fontSize: '0.9375rem', marginBottom: '0.125rem', transition: 'color 0.2s' }}>
          {surah.nom}
        </p>
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
          {surah.nomFrancais}
        </p>
      </div>

      {/* Bottom: versets count */}
      <div style={{
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
          {surah.nombreVersets} versets
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', opacity: 0.4, transition: 'opacity 0.2s, color 0.2s' }}
          className="group-hover:text-gold"
        >
          Lire →
        </span>
      </div>
    </Link>
  );
}
