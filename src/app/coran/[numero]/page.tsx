import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { getSurahMeta, getAllSurahsMeta } from '@/data/index';
import { Badge } from '@/components/Badge';
import { SurateNav } from '@/components/SurateNav';
import { formatSurahNumber } from '@/lib/utils';
import { QuranReader } from './QuranReader';

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
    title: `Lire ${meta.nom} (${meta.nomArabe}) — ${meta.nomFrancais}`,
    description: `Lecture verset par verset de la sourate ${meta.nom} avec arabe, translittération, traduction et audio.`,
    openGraph: { title: `${meta.nom} — Lire le Coran — Al-Ilm`, description: `Sourate ${meta.nom} — ${meta.nombreVersets} versets` },
  };
}

export default async function CoranSuratePage({ params }: PageProps) {
  const { numero } = await params;
  const num = parseInt(numero, 10);
  const meta = getSurahMeta(num);

  if (!meta || isNaN(num) || num < 1 || num > 114) notFound();

  return (
    <div style={{ paddingTop: 'clamp(4rem, 7vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      {/* Back link */}
      <div style={center}>
        <Link
          href="/coran"
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

        {/* Arabic name */}
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

        {/* Link to /apprendre */}
        <div style={{ marginTop: '1.5rem' }}>
          <Link
            href={`/apprendre/${meta.numero}`}
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-gold)',
              textDecoration: 'none',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
          >
            Voir l&apos;analyse détaillée →
          </Link>
        </div>
      </div>

      {/* Separator */}
      <div style={center}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }} />
      </div>

      {/* Quran Reader */}
      <div style={{ ...center, marginTop: '2rem' }}>
        <QuranReader chapterNumber={num} verseCount={meta.nombreVersets} />
        <SurateNav currentNumero={num} basePath="/coran" />
      </div>
    </div>
  );
}
