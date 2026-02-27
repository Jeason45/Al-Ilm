'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { SurateCard } from '@/components/SurateCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { surahsMeta } from '@/data/metadata';
import { searchSurahs } from '@/lib/search';

export default function RecherchePage() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    return searchSurahs(query, surahsMeta);
  }, [query]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
              Recherche.
            </h1>
            <p className="text-[17px] text-muted max-w-md mx-auto">
              Trouvez une sourate par son nom, thème ou mot-clé.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tapez au moins 2 caractères..."
                className="w-full pl-12 pr-6 py-3.5 rounded-xl bg-surface border border-border text-[15px] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-gold/30 transition-colors duration-200"
                autoFocus
              />
            </div>
          </div>
        </ScrollReveal>

        {query.length >= 2 && (
          <>
            <p className="text-[13px] text-muted mb-6">
              {results.length} résultat{results.length > 1 ? 's' : ''} pour &quot;{query}&quot;
            </p>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((surah) => (
                  <SurateCard key={surah.numero} surah={surah} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32">
                <p className="text-lg text-muted">Aucun résultat.</p>
              </div>
            )}
          </>
        )}

        {query.length < 2 && (
          <div className="text-center py-24">
            <Search className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-muted">Commencez à taper pour rechercher.</p>
          </div>
        )}
      </div>
    </div>
  );
}
