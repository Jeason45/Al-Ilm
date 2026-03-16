import type { Metadata } from 'next';
import Link from 'next/link';
import { courantsIslam, introCourants } from '@/data/annexes/courants';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Les courants de l\'Islam',
  description: 'Découvrez les principaux courants de l\'Islam : Sunnisme, Chiisme, Ibadisme, Soufisme et Salafisme — approche neutre et éducative.',
};

export default function CourantsPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <Link href="/apprendre" className="back-link">
          <span className="back-link-icon">←</span> Apprendre
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              التيارات الإسلامية
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Les courants de l&apos;Islam.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              {introCourants}
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {courantsIslam.map((courant, i) => (
            <ScrollReveal key={courant.nom} delay={i * 60}>
              <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '0.25rem' }}>
                  <h3 className="font-outfit font-bold" style={{ fontSize: '1.25rem' }}>{courant.nom}</h3>
                  <span className="font-amiri text-gold" style={{ fontSize: '1.25rem' }}>{courant.nomArabe}</span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '2px 10px', borderRadius: '999px', background: 'var(--color-gold)', color: 'var(--color-bg)', fontWeight: 500 }}>
                    {courant.population}
                  </span>
                  <span style={{ fontSize: '0.75rem', padding: '2px 10px', borderRadius: '999px', border: '1px solid var(--color-border)', color: 'var(--color-muted)', fontWeight: 500 }}>
                    {courant.geographie}
                  </span>
                </div>

                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>{courant.origine}</p>

                <div style={{ marginBottom: courant.sousCourants ? '1rem' : 0 }}>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.5rem' }}>Points clés</p>
                  <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {courant.croyances.map((c, j) => (
                      <li key={j} className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{c}</li>
                    ))}
                  </ul>
                </div>

                {courant.sousCourants && (
                  <div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.5rem' }}>Sous-courants</p>
                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {courant.sousCourants.map((sc, j) => (
                        <li key={j} className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{sc}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
