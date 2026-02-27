'use client';

import { useState, useMemo } from 'react';
import { Search, BookOpen, Star, Users, BookMarked, Heart } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { unifiedSearch, type SearchCategory, type SearchResult } from '@/lib/search';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

const CATEGORIES: { id: SearchCategory; label: string; icon: typeof BookOpen }[] = [
  { id: 'all', label: 'Tout', icon: Search },
  { id: 'sourates', label: 'Sourates', icon: BookOpen },
  { id: 'noms-allah', label: "Noms d'Allah", icon: Star },
  { id: 'prophetes', label: 'Prophètes', icon: Users },
  { id: 'glossaire', label: 'Glossaire', icon: BookMarked },
  { id: 'invocations', label: 'Invocations', icon: Heart },
];

const CATEGORY_COLORS: Record<string, string> = {
  sourates: 'var(--color-gold)',
  'noms-allah': 'var(--color-emerald)',
  prophetes: 'var(--color-amber)',
  glossaire: 'var(--color-muted)',
  invocations: 'var(--color-rose)',
};

function CategoryBadge({ category }: { category: string }) {
  const cat = CATEGORIES.find(c => c.id === category);
  if (!cat) return null;
  const color = CATEGORY_COLORS[category] || 'var(--color-muted)';
  return (
    <span style={{
      fontSize: '0.6875rem', fontWeight: 600, padding: '2px 8px', borderRadius: '6px',
      background: `color-mix(in srgb, ${color} 15%, transparent)`, color, flexShrink: 0,
    }}>
      {cat.label}
    </span>
  );
}

function ResultCard({ result }: { result: SearchResult }) {
  return (
    <Link
      href={result.href}
      className="surah-card group"
      style={{ display: 'block', padding: '1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '12px', marginBottom: '0.25rem' }}>
        <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem', flex: 1 }}>{result.title}</h3>
        <CategoryBadge category={result.category} />
      </div>

      {result.arabic && (
        <p className="font-amiri text-gold" dir="rtl" style={{ fontSize: '1rem', opacity: 0.7, marginBottom: '0.5rem' }}>
          {result.arabic}
        </p>
      )}

      <p className="text-muted" style={{ fontSize: '0.8125rem' }}>{result.subtitle}</p>

      {result.detail && (
        <p style={{ fontSize: '0.8125rem', color: 'var(--color-foreground)', opacity: 0.5, marginTop: '0.25rem', lineHeight: 1.5 }}>
          {result.detail}
        </p>
      )}
    </Link>
  );
}

export default function RecherchePage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');

  const results = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];
    return unifiedSearch(query, category);
  }, [query, category]);

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={center}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              البحث
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Recherche.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Recherchez dans les sourates, les Noms d&apos;Allah, les prophètes, le glossaire et les invocations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          {/* Search input */}
          <div style={{ maxWidth: '560px', margin: '0 auto 1.25rem' }}>
            <div style={{ position: 'relative' }}>
              <Search style={{
                position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                width: '18px', height: '18px', color: 'var(--color-muted)', pointerEvents: 'none',
              }} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tapez au moins 2 caractères..."
                autoFocus
                style={{
                  width: '100%', padding: '14px 16px 14px 44px', fontSize: '0.9375rem',
                  borderRadius: '12px', border: '1px solid var(--color-border)',
                  background: 'var(--color-surface-elevated)', color: 'var(--color-foreground)',
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Category filters */}
          <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const active = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    padding: '6px 14px', fontSize: '0.8125rem', fontWeight: 500,
                    borderRadius: '20px', cursor: 'pointer',
                    border: `1px solid ${active ? 'var(--color-gold)' : 'var(--color-border)'}`,
                    background: active ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                    color: active ? 'var(--color-gold)' : 'var(--color-muted)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={14} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {query.length >= 2 && (
          <>
            <p className="text-muted" style={{ fontSize: '0.8125rem', marginBottom: '1rem' }}>
              {results.length} résultat{results.length > 1 ? 's' : ''} pour &laquo; {query} &raquo;
              {category !== 'all' && ` dans ${CATEGORIES.find(c => c.id === category)?.label}`}
            </p>

            {results.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {results.map((result, idx) => (
                  <ResultCard key={`${result.category}-${result.title}-${idx}`} result={result} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Aucun résultat.</p>
                <p className="text-muted" style={{ fontSize: '0.8125rem', opacity: 0.5 }}>Essayez un autre terme ou changez de catégorie.</p>
              </div>
            )}
          </>
        )}

        {query.length < 2 && (
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>
            <Search style={{ width: '48px', height: '48px', color: 'var(--color-border)', margin: '0 auto 1rem' }} />
            <p className="text-muted">Commencez à taper pour rechercher.</p>
          </div>
        )}
      </div>
    </div>
  );
}
