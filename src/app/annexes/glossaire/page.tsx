'use client';

import { useState, useMemo } from 'react';
import { glossaire } from '@/data/annexes/glossaire';
import { SearchInput } from '@/components/SearchInput';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function GlossairePage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return glossaire;
    const q = query.toLowerCase();
    return glossaire.filter(
      g => g.terme.toLowerCase().includes(q) ||
           g.arabe.includes(q) ||
           g.definition.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
              Glossaire islamique.
            </h1>
            <p className="text-[17px] text-muted max-w-lg mx-auto">
              Les termes essentiels pour comprendre l&apos;Islam et le Coran.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-md mx-auto mb-10">
            <SearchInput value={query} onChange={setQuery} placeholder="Rechercher un terme..." />
          </div>
        </ScrollReveal>

        <div className="card overflow-hidden">
          {filtered.map((item, i) => (
            <div
              key={item.terme}
              className="p-5 sm:p-6 hover:bg-surface-elevated transition-colors duration-200"
              style={{ borderTop: i > 0 ? '1px solid var(--color-border)' : undefined }}
            >
              <div className="flex items-baseline gap-3 mb-1.5">
                <h3 className="text-[15px] font-medium font-outfit">{item.terme}</h3>
                <span className="font-amiri text-gold">{item.arabe}</span>
              </div>
              <p className="text-[14px] text-muted leading-relaxed">{item.definition}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">Aucun terme trouvé.</p>
        )}
      </div>
    </div>
  );
}
