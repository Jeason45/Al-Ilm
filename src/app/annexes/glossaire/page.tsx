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
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              المصطلحات
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Glossaire islamique.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Les termes essentiels pour comprendre l&apos;Islam et le Coran.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div style={{ maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
            <SearchInput value={query} onChange={setQuery} placeholder="Rechercher un terme..." />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="surah-card" style={{ overflow: 'hidden' }}>
            {filtered.map((item, i) => (
              <div
                key={item.terme}
                style={{
                  padding: 'clamp(1rem, 2vw, 1.5rem)',
                  borderTop: i > 0 ? '1px solid var(--color-border)' : undefined,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '0.375rem' }}>
                  <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>{item.terme}</h3>
                  <span className="font-amiri text-gold" style={{ fontSize: '1rem' }}>{item.arabe}</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{item.definition}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {filtered.length === 0 && (
          <p className="text-muted" style={{ textAlign: 'center', padding: '5rem 0' }}>Aucun terme trouvé.</p>
        )}
      </div>
    </div>
  );
}
