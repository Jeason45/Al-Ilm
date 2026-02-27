'use client';

import { useState, useMemo } from 'react';
import { Search, BookOpen, Star, Users, BookMarked, Heart } from 'lucide-react';
import Link from 'next/link';
import { unifiedSearch, type SearchCategory, type SearchResult } from '@/lib/search';

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
  return (
    <span style={{
      fontSize: '11px', fontWeight: 600, padding: '2px 8px', borderRadius: '6px',
      background: `color-mix(in srgb, ${CATEGORY_COLORS[category] || 'var(--color-muted)'} 15%, transparent)`,
      color: CATEGORY_COLORS[category] || 'var(--color-muted)',
    }}>
      {cat.label}
    </span>
  );
}

function ResultCard({ result }: { result: SearchResult }) {
  return (
    <Link
      href={result.href}
      className="card card-hover"
      style={{ display: 'block', padding: '16px 20px', textDecoration: 'none', color: 'inherit' }}
    >
      <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '12px', marginBottom: '4px' }}>
        <h3 className="text-[15px] font-medium font-outfit" style={{ flex: 1 }}>{result.title}</h3>
        <CategoryBadge category={result.category} />
      </div>

      {result.arabic && (
        <p className="font-amiri text-gold text-right text-[16px] mb-2" dir="rtl" style={{ opacity: 0.8 }}>
          {result.arabic}
        </p>
      )}

      <p className="text-[13px] text-muted">{result.subtitle}</p>

      {result.detail && (
        <p className="text-[13px] text-foreground/60 mt-1" style={{ lineHeight: 1.5 }}>{result.detail}</p>
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
    <div className="pt-32 pb-24">
      <div className="max-w-[800px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="font-amiri text-2xl text-gold mb-4">البحث</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Recherche.
          </h1>
          <p className="text-[17px] text-muted max-w-md mx-auto">
            Recherchez dans les sourates, les Noms d&apos;Allah, les prophètes, le glossaire et les invocations.
          </p>
        </div>

        {/* Search input */}
        <div className="max-w-xl mx-auto mb-6">
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

        {/* Category filters */}
        <div style={{
          display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '32px',
        }}>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  padding: '6px 14px', fontSize: '13px', fontWeight: 500,
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

        {/* Results */}
        {query.length >= 2 && (
          <>
            <p className="text-[13px] text-muted mb-4">
              {results.length} résultat{results.length > 1 ? 's' : ''} pour &laquo; {query} &raquo;
              {category !== 'all' && ` dans ${CATEGORIES.find(c => c.id === category)?.label}`}
            </p>

            {results.length > 0 ? (
              <div className="space-y-3">
                {results.map((result, idx) => (
                  <ResultCard key={`${result.category}-${result.title}-${idx}`} result={result} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-muted mb-2">Aucun résultat.</p>
                <p className="text-[13px] text-muted/60">Essayez un autre terme ou changez de catégorie.</p>
              </div>
            )}
          </>
        )}

        {query.length < 2 && (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-border mx-auto mb-4" />
            <p className="text-muted">Commencez à taper pour rechercher.</p>
          </div>
        )}
      </div>
    </div>
  );
}
