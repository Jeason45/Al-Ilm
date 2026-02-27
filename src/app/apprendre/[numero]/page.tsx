import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { getSurahMeta, getAllSurahsMeta } from '@/data/index';
import { Badge } from '@/components/Badge';
import { BookmarkButton } from '@/components/BookmarkButton';
import { SurateNav } from '@/components/SurateNav';
import { formatSurahNumber } from '@/lib/utils';
import { SurahContent } from './SurahContent';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

interface PageProps {
  params: Promise<{ numero: string }>;
}

export async function generateStaticParams() {
  return getAllSurahsMeta().map((s) => ({ numero: String(s.numero) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { numero } = await params;
  const num = parseInt(numero, 10);
  const meta = getSurahMeta(num);
  if (!meta) return { title: 'Sourate introuvable' };
  return {
    title: `Sourate ${meta.nom} (${meta.nomArabe}) — ${meta.nomFrancais}`,
    description: meta.themeCentral,
    openGraph: { title: `Sourate ${meta.nom} — Al-Ilm`, description: meta.themeCentral },
  };
}

export default async function SuratePage({ params }: PageProps) {
  const { numero } = await params;
  const num = parseInt(numero, 10);
  const meta = getSurahMeta(num);

  if (!meta || isNaN(num) || num < 1 || num > 114) notFound();

  return (
    <div style={{ paddingTop: 'clamp(4rem, 7vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      {/* Back link */}
      <div style={center}>
        <Link
          href="/apprendre"
          className="back-link"
        >
          <span className="back-link-icon">
            <ArrowLeft style={{ width: '14px', height: '14px' }} />
          </span>
          Toutes les sourates
        </Link>
      </div>

      {/* Hero header */}
      <div style={{ ...center, textAlign: 'center', marginBottom: '3rem' }}>
        {/* Surah number + badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '2rem', flexWrap: 'wrap', rowGap: '8px' }}>
          <span style={{ fontSize: '0.8125rem', fontFamily: 'monospace', color: 'var(--color-muted)' }}>
            Sourate {formatSurahNumber(meta.numero)}
          </span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-muted)', opacity: 0.4 }} />
          <Badge variant={meta.type === 'mecquoise' ? 'emerald' : 'gold'}>
            {meta.type === 'mecquoise' ? 'Mecquoise' : 'Médinoise'}
          </Badge>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-muted)', opacity: 0.4 }} />
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>{meta.nombreVersets} versets</span>
        </div>

        {/* Arabic name — big and prominent */}
        <p className="font-amiri" style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          color: 'var(--color-gold)',
          lineHeight: 1.4,
          marginBottom: '1rem',
        }}>
          {meta.nomArabe}
        </p>

        {/* Latin name */}
        <h1 className="font-outfit font-bold" style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '0.5rem',
        }}>
          {meta.nom}
        </h1>

        {/* French name */}
        <p style={{ fontSize: '1.25rem', color: 'var(--color-muted)' }}>
          {meta.nomFrancais}
        </p>

        {/* Bookmark + theme tags */}
        <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <BookmarkButton surahNumber={meta.numero} />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
            {meta.themes.map(theme => (
              <Badge key={theme} variant="muted">{theme}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Separator */}
      <div style={center}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }} />
      </div>

      {/* Content */}
      <div style={{ ...center, marginTop: '3rem' }}>
        <SurahContent numero={num} />
        <SurateNav currentNumero={num} />
      </div>
    </div>
  );
}
