'use client';

import { useState, useMemo } from 'react';
import { nomsAllah } from '@/data/annexes/noms-allah';
import { SearchInput } from '@/components/SearchInput';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function NomsAllahPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return nomsAllah;
    const q = query.toLowerCase();
    return nomsAllah.filter(
      n => n.nom.toLowerCase().includes(q) ||
           n.signification.toLowerCase().includes(q) ||
           n.arabe.includes(q)
    );
  }, [query]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="font-amiri text-2xl text-gold mb-4">أسماء الله الحسنى</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
              Les 99 Noms d&apos;Allah.
            </h1>
            <p className="text-[17px] text-muted max-w-lg mx-auto">
              Les plus beaux noms appartiennent à Allah. Découvrez chacun d&apos;eux.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-md mx-auto mb-10">
            <SearchInput value={query} onChange={setQuery} placeholder="Rechercher un nom..." />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((nom) => (
            <div key={nom.numero} className="card card-hover p-5">
              <div className="flex items-start justify-between mb-3">
                <span className="text-[12px] font-mono text-muted">{nom.numero}</span>
                <span className="font-amiri text-2xl text-gold">{nom.arabe}</span>
              </div>
              <h3 className="text-[15px] font-medium font-outfit mb-1">{nom.nom}</h3>
              <p className="text-[13px] text-gold mb-2">{nom.signification}</p>
              <p className="text-[14px] text-muted leading-relaxed">{nom.explication}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">Aucun nom trouvé.</p>
        )}
      </div>
    </div>
  );
}
