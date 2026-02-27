'use client';

import { useState, useMemo } from 'react';
import { prophetes } from '@/data/annexes/prophetes';
import { SearchInput } from '@/components/SearchInput';
import { Badge } from '@/components/Badge';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ProphetesPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return prophetes;
    const q = query.toLowerCase();
    return prophetes.filter(
      p => p.nom.toLowerCase().includes(q) ||
           p.nomArabe.includes(q) ||
           p.titre.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
              Les 25 Prophètes.
            </h1>
            <p className="text-[17px] text-muted max-w-lg mx-auto">
              Les prophètes mentionnés dans le Coran et leurs enseignements.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-md mx-auto mb-10">
            <SearchInput value={query} onChange={setQuery} placeholder="Rechercher un prophète..." />
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {filtered.map((prophete) => (
            <div key={prophete.nom} className="card p-6">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-lg font-medium font-outfit">{prophete.nom}</h3>
                <span className="font-amiri text-lg text-gold">{prophete.nomArabe}</span>
              </div>
              <p className="text-[13px] text-gold mb-3">{prophete.titre}</p>
              <p className="text-[15px] text-foreground leading-relaxed mb-4">{prophete.histoire}</p>
              <div className="flex flex-wrap gap-2">
                {prophete.sourates.map(s => (
                  <Badge key={s} variant="muted">{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted py-20">Aucun prophète trouvé.</p>
        )}
      </div>
    </div>
  );
}
