'use client';

import { useState, useMemo } from 'react';
import { SurateCard } from '@/components/SurateCard';
import { SearchInput } from '@/components/SearchInput';
import { FilterBar } from '@/components/FilterBar';
import { ScrollReveal } from '@/components/ScrollReveal';
import { surahsMeta } from '@/data/metadata';
import { searchSurahs } from '@/lib/search';
import { filterSurahs } from '@/data/index';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

export default function CoranPage() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const filteredSurahs = useMemo(() => {
    let result = surahsMeta;
    if (query) result = searchSurahs(query, result);
    if (typeFilter !== 'all') result = filterSurahs(result, { type: typeFilter as 'mecquoise' | 'medinoise' });
    return result;
  }, [query, typeFilter]);

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={center}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              القرآن الكريم
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Lire le Coran.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto' }}>
              Lecture verset par verset — arabe, translittération, traduction française et anglaise, avec audio.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="search-filter-row">
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Rechercher une sourate..."
            />
            <FilterBar activeFilter={typeFilter} onFilterChange={setTypeFilter} />
          </div>
        </ScrollReveal>

        <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>
          {filteredSurahs.length} sourate{filteredSurahs.length > 1 ? 's' : ''}
        </p>

        {filteredSurahs.length > 0 ? (
          <div className="grid-surahs">
            {filteredSurahs.map((surah) => (
              <SurateCard key={surah.numero} surah={surah} basePath="/coran" />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'clamp(3rem, 8vw, 8rem) 0' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-muted)' }}>Aucune sourate trouvée.</p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '0.5rem', opacity: 0.6 }}>Essayez un autre terme de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
