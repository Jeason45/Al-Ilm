import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { HADITH_COLLECTIONS, getCollectionMeta } from '@/lib/hadith-api';
import { HadithReader } from './HadithReader';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

interface PageProps {
  params: Promise<{ collection: string }>;
}

export async function generateStaticParams() {
  return HADITH_COLLECTIONS.map((c) => ({ collection: c.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { collection } = await params;
  const meta = getCollectionMeta(collection);
  if (!meta) return { title: 'Collection introuvable' };
  return {
    title: `${meta.name} — Hadiths — Al-Ilm`,
    description: `Lisez les ${meta.count} hadiths de ${meta.name} en arabe et français.`,
    openGraph: {
      title: `${meta.name} — Hadiths — Al-Ilm`,
      description: `${meta.count} hadiths en arabe et français.`,
    },
  };
}

export default async function HadithCollectionPage({ params }: PageProps) {
  const { collection } = await params;
  const meta = getCollectionMeta(collection);

  if (!meta) notFound();

  return (
    <div style={{ paddingTop: 'clamp(4rem, 7vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      {/* Back link */}
      <div style={center}>
        <Link href="/hadiths" className="back-link">
          <span className="back-link-icon">
            <ArrowLeft style={{ width: '14px', height: '14px' }} />
          </span>
          Toutes les collections
        </Link>
      </div>

      {/* Hero header */}
      <div style={{ ...center, textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '2rem', flexWrap: 'wrap', rowGap: '8px' }}>
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
            {meta.author}
          </span>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-muted)', opacity: 0.4 }} />
          <Badge variant="gold">{meta.count.toLocaleString('fr-FR')} hadiths</Badge>
          {meta.allSahih && (
            <>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-muted)', opacity: 0.4 }} />
              <Badge variant="emerald">✓ 100% Sahih</Badge>
            </>
          )}
        </div>

        {/* Arabic name */}
        <p className="font-amiri" style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          color: 'var(--color-gold)',
          lineHeight: 1.4,
          marginBottom: '1rem',
        }}>
          {meta.nameAr}
        </p>

        {/* Latin name */}
        <h1 className="font-outfit font-bold" style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
        }}>
          {meta.name}
        </h1>
      </div>

      {/* Separator */}
      <div style={center}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }} />
      </div>

      {/* Reader */}
      <div style={{ ...center, marginTop: '2rem' }}>
        <HadithReader collectionId={meta.id} allSahih={meta.allSahih} />
      </div>
    </div>
  );
}
