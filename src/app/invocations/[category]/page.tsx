import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { CATEGORIES } from '@/data/invocations/categories';
import { getByCategorySlug, getCategoryMeta } from '@/data/invocations';
import { InvocationReader } from './InvocationReader';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategoryMeta(category);
  if (!meta) return { title: 'Catégorie introuvable' };
  const invocations = getByCategorySlug(category);
  return {
    title: `${meta.titre} — Invocations — Al-Ilm`,
    description: `${invocations.length} ${meta.titre.toLowerCase()} authentiques en arabe, translitération et français.`,
    openGraph: {
      title: `${meta.titre} — Invocations — Al-Ilm`,
      description: meta.description,
    },
  };
}

export default async function InvocationCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const meta = getCategoryMeta(category);

  if (!meta) notFound();

  const invocations = getByCategorySlug(category);

  return (
    <div style={{ paddingTop: 'clamp(4rem, 7vw, 6rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      {/* Back link */}
      <div style={center}>
        <Link href="/invocations" className="back-link">
          <span className="back-link-icon">
            <ArrowLeft style={{ width: '14px', height: '14px' }} />
          </span>
          Toutes les invocations
        </Link>
      </div>

      {/* Hero header */}
      <div style={{ ...center, textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '2rem', flexWrap: 'wrap', rowGap: '8px' }}>
          <Badge variant="gold">{invocations.length} invocation{invocations.length > 1 ? 's' : ''}</Badge>
        </div>

        {/* Arabic name */}
        <p className="font-amiri" style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          color: 'var(--color-gold)',
          lineHeight: 1.4,
          marginBottom: '1rem',
        }}>
          {meta.titreArabe}
        </p>

        {/* French name */}
        <h1 className="font-outfit font-bold" style={{
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          marginBottom: '1rem',
        }}>
          {meta.titre}
        </h1>

        {/* Description */}
        <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto' }}>
          {meta.description}
        </p>
      </div>

      {/* Separator */}
      <div style={center}>
        <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--color-border), transparent)' }} />
      </div>

      {/* Reader */}
      <div style={{ ...center, marginTop: '2rem' }}>
        <InvocationReader invocations={invocations} categoryId={meta.id} />
      </div>
    </div>
  );
}
