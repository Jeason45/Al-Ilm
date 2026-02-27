import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getSurahMeta } from '@/data/index';

interface SurateNavProps {
  currentNumero: number;
  basePath?: string;
}

export function SurateNav({ currentNumero, basePath = '/apprendre' }: SurateNavProps) {
  const prev = currentNumero > 1 ? getSurahMeta(currentNumero - 1) : null;
  const next = currentNumero < 114 ? getSurahMeta(currentNumero + 1) : null;

  return (
    <div style={{ display: 'flex', gap: '14px', marginTop: '5rem' }}>
      {prev ? (
        <Link
          href={`${basePath}/${prev.numero}`}
          className="surah-card group"
          style={{ flex: 1, padding: '1.25rem 1.5rem', textDecoration: 'none', color: 'inherit' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
            <ArrowLeft style={{ width: '14px', height: '14px', color: 'var(--color-muted)' }} />
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>Précédente</span>
          </div>
          <p className="font-outfit font-medium" style={{ fontSize: '0.9375rem', transition: 'color 0.2s' }}>
            {prev.nom}
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>{prev.nomFrancais}</p>
        </Link>
      ) : (
        <div style={{ flex: 1 }} />
      )}

      {next ? (
        <Link
          href={`${basePath}/${next.numero}`}
          className="surah-card group"
          style={{ flex: 1, padding: '1.25rem 1.5rem', textDecoration: 'none', color: 'inherit', textAlign: 'right' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '8px', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>Suivante</span>
            <ArrowRight style={{ width: '14px', height: '14px', color: 'var(--color-muted)' }} />
          </div>
          <p className="font-outfit font-medium" style={{ fontSize: '0.9375rem', transition: 'color 0.2s' }}>
            {next.nom}
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>{next.nomFrancais}</p>
        </Link>
      ) : (
        <div style={{ flex: 1 }} />
      )}
    </div>
  );
}
