'use client';

import { useState, useMemo } from 'react';
import { SurateCard } from '@/components/SurateCard';
import { SearchInput } from '@/components/SearchInput';
import { FilterBar } from '@/components/FilterBar';
import { ScrollReveal } from '@/components/ScrollReveal';
import { surahsMeta } from '@/data/metadata';
import { searchSurahs } from '@/lib/search';
import { filterSurahs } from '@/data/index';

export function ApprendreTab() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredSurahs = useMemo(() => {
    let result = surahsMeta;
    if (query) result = searchSurahs(query, result);
    if (typeFilter !== 'all') result = filterSurahs(result, { type: typeFilter as 'mecquoise' | 'medinoise' });
    return result;
  }, [query, typeFilter]);

  return (
    <>
      <ScrollReveal delay={100}>
        <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto', textAlign: 'center', marginBottom: '2rem' }}>
          De la Fatiha à An-Nas — explorez chaque sourate, son contexte,
          ses enseignements et ses versets clés.
        </p>
        <div className="search-filter-row">
          <SearchInput value={query} onChange={setQuery} placeholder="Rechercher une sourate..." />
          <FilterBar activeFilter={typeFilter} onFilterChange={setTypeFilter} />
        </div>
      </ScrollReveal>

      <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
        {filteredSurahs.length} sourate{filteredSurahs.length > 1 ? 's' : ''}
      </p>

      {filteredSurahs.length > 0 ? (
        <div className="grid-surahs">
          {filteredSurahs.map((surah) => (
            <SurateCard key={surah.numero} surah={surah} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: 'clamp(3rem, 8vw, 8rem) 0' }}>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-muted)' }}>Aucune sourate trouvée.</p>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '0.5rem', opacity: 0.6 }}>Essayez un autre terme de recherche.</p>
        </div>
      )}
    </>
  );
}
