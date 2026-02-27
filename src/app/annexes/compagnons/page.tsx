import type { Metadata } from 'next';
import Link from 'next/link';
import { compagnons } from '@/data/annexes/compagnons';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Compagnons du Prophète',
  description: 'Les grands compagnons (Sahaba) du Prophète Muhammad ﷺ.',
};

export default function CompagnonsPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الصحابة
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Les Compagnons.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Les grands compagnons du Prophète Muhammad ﷺ, piliers de l&apos;Islam naissant.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {compagnons.map((compagnon, i) => (
            <ScrollReveal key={compagnon.nom} delay={i < 10 ? i * 40 : 0}>
              <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '0.25rem' }}>
                  <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{compagnon.nom}</h3>
                  <span className="font-amiri text-gold" style={{ fontSize: '1.125rem' }}>{compagnon.nomArabe}</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', marginBottom: '0.75rem' }}>{compagnon.titre}</p>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{compagnon.histoire}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
