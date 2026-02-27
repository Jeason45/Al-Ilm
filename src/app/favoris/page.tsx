'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/hooks/useBookmarks';
import { useReadingProgress } from '@/hooks/useReadingProgress';
import { surahsMeta } from '@/data/metadata';
import { SurateCard } from '@/components/SurateCard';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function FavorisPage() {
  const { bookmarks } = useBookmarks();
  const { readSurahs, progressPercentage } = useReadingProgress();

  const bookmarkedSurahs = useMemo(() => {
    return surahsMeta.filter(s => bookmarks.includes(s.numero));
  }, [bookmarks]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
              Favoris & Progression.
            </h1>
            <p className="text-[17px] text-muted max-w-md mx-auto">
              Vos sourates favorites et votre avancée dans la lecture.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="p-6 sm:p-8 card mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[15px] font-medium font-outfit">Progression de lecture</h3>
              <span className="text-[14px] font-outfit">
                <span className="text-gold font-semibold">{readSurahs.length}</span>
                <span className="text-muted"> / 114</span>
                <span className="text-muted ml-2">({progressPercentage}%)</span>
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-background overflow-hidden">
              <div
                className="h-full bg-gold rounded-full transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2 className="text-xl font-medium font-outfit tracking-tight mb-6 flex items-center gap-3">
            <Bookmark className="w-5 h-5 text-gold" />
            Favorites ({bookmarkedSurahs.length})
          </h2>

          {bookmarkedSurahs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bookmarkedSurahs.map((surah) => (
                <SurateCard key={surah.numero} surah={surah} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 card">
              <Bookmark className="w-10 h-10 text-border mx-auto mb-4" />
              <p className="text-muted mb-3">Aucune sourate en favori.</p>
              <Link href="/apprendre" className="text-[14px] text-gold hover:text-gold-light transition-colors">
                Explorer les sourates →
              </Link>
            </div>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
