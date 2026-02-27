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
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الأنبياء
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Les 25 Prophètes.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Les prophètes mentionnés dans le Coran et leurs enseignements.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div style={{ maxWidth: '28rem', margin: '0 auto 2.5rem' }}>
            <SearchInput value={query} onChange={setQuery} placeholder="Rechercher un prophète..." />
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {filtered.map((prophete, i) => (
            <ScrollReveal key={prophete.nom} delay={i < 10 ? i * 40 : 0}>
              <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '0.25rem' }}>
                  <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{prophete.nom}</h3>
                  <span className="font-amiri text-gold" style={{ fontSize: '1.125rem' }}>{prophete.nomArabe}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>{prophete.titre}</p>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>{prophete.histoire}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {prophete.sourates.map(s => (
                    <Badge key={s} variant="muted">{s}</Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-muted" style={{ textAlign: 'center', padding: '5rem 0' }}>Aucun prophète trouvé.</p>
        )}
      </div>
    </div>
  );
}
