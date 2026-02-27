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
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              أسماء الله الحسنى
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Les 99 Noms d&apos;Allah.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Les plus beaux noms appartiennent à Allah. Découvrez chacun d&apos;eux.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div style={{ maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
            <SearchInput value={query} onChange={setQuery} placeholder="Rechercher un nom..." />
          </div>
        </ScrollReveal>

        <div className="grid-features">
          {filtered.map((nom, i) => (
            <ScrollReveal key={nom.numero} delay={i < 12 ? i * 30 : 0}>
              <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.5rem)' }}>
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="text-muted" style={{ fontSize: '0.75rem', fontFamily: 'monospace' }}>{nom.numero}</span>
                  <span className="font-amiri text-gold" style={{ fontSize: '1.5rem' }}>{nom.arabe}</span>
                </div>
                <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem', marginBottom: '0.25rem' }}>{nom.nom}</h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>{nom.signification}</p>
                <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{nom.explication}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted" style={{ textAlign: 'center', padding: '5rem 0' }}>Aucun nom trouvé.</p>
        )}
      </div>
    </div>
  );
}
