'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useReadingProgress } from '@/hooks/useReadingProgress';
import { surahsMeta } from '@/data/metadata';
import { SurateCard } from '@/components/SurateCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

export default function FavorisPage() {
  const { bookmarks } = useBookmarks();
  const { readSurahs, progressPercentage } = useReadingProgress();

  const bookmarkedSurahs = useMemo(() => {
    return surahsMeta.filter(s => bookmarks.includes(s.numero));
  }, [bookmarks]);

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={center}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              المفضلة
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Favoris & Progression.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Vos sourates favorites et votre avancée dans la lecture.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="surah-card" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>Progression de lecture</h3>
              <span className="font-outfit" style={{ fontSize: '0.875rem' }}>
                <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{readSurahs.length}</span>
                <span className="text-muted"> / 114</span>
                <span className="text-muted" style={{ marginLeft: '8px' }}>({progressPercentage}%)</span>
              </span>
            </div>
            <div style={{
              width: '100%', height: '6px', borderRadius: '3px',
              background: 'var(--color-surface-elevated)', overflow: 'hidden',
            }}>
              <div style={{
                width: `${progressPercentage}%`, height: '100%', borderRadius: '3px',
                background: 'var(--color-gold)', transition: 'width 0.7s ease-out',
              }} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2 className="font-outfit font-semibold" style={{
            fontSize: '1.125rem', marginBottom: '1.25rem',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <Bookmark style={{ width: '20px', height: '20px', color: 'var(--color-gold)' }} />
            Favorites ({bookmarkedSurahs.length})
          </h2>

          {bookmarkedSurahs.length > 0 ? (
            <div className="grid-features">
              {bookmarkedSurahs.map((surah) => (
                <SurateCard key={surah.numero} surah={surah} />
              ))}
            </div>
          ) : (
            <div className="surah-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
              <Bookmark style={{ width: '40px', height: '40px', color: 'var(--color-border)', margin: '0 auto 1rem' }} />
              <p className="text-muted" style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Aucune sourate en favori.</p>
              <Link href="/apprendre" style={{ fontSize: '0.875rem', color: 'var(--color-gold)', textDecoration: 'none' }}>
                Explorer les sourates →
              </Link>
            </div>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
