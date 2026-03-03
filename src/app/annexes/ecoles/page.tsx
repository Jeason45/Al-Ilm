import type { Metadata } from 'next';
import Link from 'next/link';
import { ecolesJuridiques, introEcoles } from '@/data/annexes/ecoles';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Les 4 écoles juridiques',
  description: 'Découvrez les quatre grandes écoles de jurisprudence islamique (madhahib) : Hanafite, Malikite, Chaféite et Hanbalite.',
};

export default function EcolesPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              المذاهب الأربعة
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Les 4 écoles juridiques.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              {introEcoles}
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {ecolesJuridiques.map((ecole, i) => (
            <ScrollReveal key={ecole.nom} delay={i * 60}>
              <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '0.25rem' }}>
                  <h3 className="font-outfit font-bold" style={{ fontSize: '1.25rem' }}>École {ecole.nom}</h3>
                  <span className="font-amiri text-gold" style={{ fontSize: '1.25rem' }}>{ecole.nomArabe}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '2px 10px', borderRadius: '999px', background: 'var(--color-gold)', color: 'var(--color-bg)', fontWeight: 500 }}>
                    {ecole.epoque}
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '2px 10px', borderRadius: '999px', border: '1px solid var(--color-border)', color: 'var(--color-muted)', fontWeight: 500 }}>
                    {ecole.lieu}
                  </span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.25rem' }}>
                    Fondateur : {ecole.fondateur} <span className="font-amiri" style={{ opacity: 0.7 }}>{ecole.fondateurArabe}</span>
                  </p>
                </div>

                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>{ecole.methodologie}</p>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.5rem' }}>Zones géographiques</p>
                  <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{ecole.geographie}</p>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.5rem' }}>Particularités</p>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {ecole.particularites.map((p, j) => (
                      <li key={j} className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.5rem' }}>Ouvrages de référence</p>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {ecole.ouvragesRef.map((ouvrage, j) => (
                      <li key={j} className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{ouvrage}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
