'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

const previewSurahs = [
  { numero: 1, nom: 'Al-Fatiha', nomArabe: 'الفاتحة', nomFrancais: "L'Ouverture", versets: 7, type: 'Mecquoise' },
  { numero: 36, nom: 'Ya-Sin', nomArabe: 'يس', nomFrancais: 'Le Cœur du Coran', versets: 83, type: 'Mecquoise' },
  { numero: 55, nom: 'Ar-Rahman', nomArabe: 'الرحمن', nomFrancais: 'Le Tout Miséricordieux', versets: 78, type: 'Médinoise' },
  { numero: 67, nom: 'Al-Mulk', nomArabe: 'الملك', nomFrancais: 'La Royauté', versets: 30, type: 'Mecquoise' },
  { numero: 112, nom: 'Al-Ikhlas', nomArabe: 'الإخلاص', nomFrancais: 'Le Monothéisme Pur', versets: 4, type: 'Mecquoise' },
  { numero: 18, nom: 'Al-Kahf', nomArabe: 'الكهف', nomFrancais: 'La Caverne', versets: 110, type: 'Mecquoise' },
];

export function SurahPreview() {
  return (
    <section style={{ width: '100%', padding: 'clamp(3.5rem, 7vw, 7rem) 0' }}>
      <div style={{ ...center, textAlign: 'center' }}>
        <ScrollReveal>
          <p className="text-muted" style={{ fontSize: '0.8125rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '1rem' }}>
            Commencez ici
          </p>
          <h2 className="font-outfit font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', marginBottom: '4rem' }}>
            Six sourates essentielles.
          </h2>
        </ScrollReveal>

        <div className="grid-preview">
          {previewSurahs.map((s, i) => (
            <ScrollReveal key={s.numero} delay={i * 70}>
              <Link
                href={`/apprendre/${s.numero}`}
                className="surah-card"
                style={{
                  display: 'block',
                  padding: '2rem 1.5rem',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Numéro */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.04em' }}>
                    {String(s.numero).padStart(3, '0')}
                  </span>
                  <span style={{
                    fontSize: '0.6875rem',
                    fontWeight: 500,
                    color: 'var(--color-gold)',
                    padding: '3px 10px',
                    borderRadius: '100px',
                    background: 'rgba(201, 168, 76, 0.08)',
                    border: '1px solid rgba(201, 168, 76, 0.12)',
                  }}>
                    {s.versets} versets
                  </span>
                </div>

                {/* Arabic */}
                <p className="font-amiri" style={{ fontSize: '2.25rem', color: 'var(--color-gold)', lineHeight: 1.3, marginBottom: '1rem', opacity: 0.85 }}>
                  {s.nomArabe}
                </p>

                {/* Names */}
                <p className="font-outfit font-semibold" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                  {s.nom}
                </p>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                  {s.nomFrancais}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/apprendre"
              className="btn-secondary"
              style={{ gap: '10px' }}
            >
              Voir les 114 sourates
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </Link>
            <Link
              href="/coran"
              className="btn-secondary"
              style={{ gap: '10px' }}
            >
              Lire le Coran
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
