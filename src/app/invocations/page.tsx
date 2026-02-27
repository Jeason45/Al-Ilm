'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Badge } from '@/components/Badge';
import { SearchInput } from '@/components/SearchInput';
import { CATEGORIES } from '@/data/invocations/categories';
import { ALL_INVOCATIONS, getCategoryCount, searchInvocations } from '@/data/invocations';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

// Dhikr du jour — rotation déterministe par date
function getDailyDhikr() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return ALL_INVOCATIONS[dayOfYear % ALL_INVOCATIONS.length];
}

export default function InvocationsPage() {
  const [search, setSearch] = useState('');
  const dailyDhikr = useMemo(() => getDailyDhikr(), []);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return searchInvocations(search).slice(0, 20);
  }, [search]);

  const isSearching = search.trim().length > 0;

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={center}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الأذكار والأدعية
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Invocations &amp; Adhkar.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '36rem', margin: '0 auto' }}>
              {ALL_INVOCATIONS.length} invocations authentiques en arabe, translitération et français — réparties en {CATEGORIES.length} catégories.
            </p>
          </div>
        </ScrollReveal>

        {/* Dhikr du jour */}
        <ScrollReveal delay={80}>
          <div className="surah-card" style={{
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
          }}>
            <p className="font-outfit font-semibold" style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
              Dhikr du jour
            </p>
            <p className="font-amiri" style={{
              fontSize: 'clamp(1.375rem, 3vw, 1.875rem)',
              color: 'var(--color-gold)',
              lineHeight: 1.8,
              direction: 'rtl',
              marginBottom: '1.25rem',
            }}>
              {dailyDhikr.arabe}
            </p>
            <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--color-border), transparent)', marginBottom: '1.25rem' }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto 1rem' }}>
              &laquo; {dailyDhikr.traduction} &raquo;
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
              {dailyDhikr.source} — {dailyDhikr.titre}
            </p>
          </div>
        </ScrollReveal>

        {/* Recherche */}
        <ScrollReveal delay={120}>
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Rechercher une invocation..."
            />
          </div>
        </ScrollReveal>

        {/* Résultats de recherche */}
        {isSearching && (
          <div style={{ marginBottom: '2rem' }}>
            {searchResults.length === 0 ? (
              <p className="text-muted" style={{ textAlign: 'center', fontSize: '0.9375rem' }}>
                Aucune invocation trouvée pour &laquo; {search} &raquo;
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p className="text-muted" style={{ fontSize: '0.8125rem', marginBottom: '0.5rem' }}>
                  {searchResults.length} résultat{searchResults.length > 1 ? 's' : ''}
                </p>
                {searchResults.map((inv) => (
                  <Link
                    key={inv.id}
                    href={`/invocations/${inv.category}`}
                    className="surah-card"
                    style={{ display: 'block', padding: '1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '0.5rem' }}>
                      <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>{inv.titre}</h3>
                      <Badge variant={inv.isQuranic ? 'gold' : 'default'}>{inv.source}</Badge>
                    </div>
                    <p className="font-amiri text-gold" dir="rtl" style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                      {inv.arabe.length > 100 ? inv.arabe.slice(0, 100) + '...' : inv.arabe}
                    </p>
                    <p className="text-muted" style={{ fontSize: '0.8125rem', fontStyle: 'italic' }}>
                      {inv.traduction.length > 120 ? inv.traduction.slice(0, 120) + '...' : inv.traduction}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Grille des catégories */}
        {!isSearching && (
          <div className="grid-features">
            {CATEGORIES.map((cat, i) => {
              const count = getCategoryCount(cat.id);
              return (
                <ScrollReveal key={cat.id} delay={i * 50}>
                  <Link
                    href={`/invocations/${cat.slug}`}
                    className="group surah-card"
                    style={{
                      display: 'block',
                      padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    {/* Arabic name */}
                    <p className="font-amiri" style={{
                      fontSize: '1.75rem',
                      color: 'var(--color-gold)',
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                    }}>
                      {cat.titreArabe}
                    </p>

                    {/* French name */}
                    <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>
                      {cat.titre}
                    </h3>

                    {/* Description */}
                    <p className="text-muted" style={{ fontSize: '0.8125rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                      {cat.description}
                    </p>

                    {/* Badge + Arrow */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Badge variant="gold">{count} invocation{count > 1 ? 's' : ''}</Badge>
                      <span className="text-muted group-hover:text-gold" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                        fontSize: '0.8125rem', fontWeight: 500,
                        transition: 'color 0.2s',
                      }}>
                        Explorer
                        <ArrowUpRight style={{ width: '14px', height: '14px' }} />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
