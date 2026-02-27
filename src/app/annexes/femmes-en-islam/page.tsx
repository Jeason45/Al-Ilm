import type { Metadata } from 'next';
import { femmesEnIslam } from '@/data/annexes/femmes-en-islam';
import { Badge } from '@/components/Badge';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Femmes en Islam',
  description: 'Les femmes mentionnées et honorées dans le Coran.',
};

export default function FemmesEnIslamPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              المرأة في الإسلام
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Femmes en Islam.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Les femmes mentionnées et honorées dans le Coran et la tradition islamique.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {femmesEnIslam.map((femme, i) => (
            <ScrollReveal key={femme.nom} delay={i < 8 ? i * 40 : 0}>
              <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '12px', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{femme.nom}</h3>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)' }}>{femme.titre}</p>
                  </div>
                  <Badge variant="muted">{femme.sourate}</Badge>
                </div>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginTop: '0.75rem' }}>{femme.histoire}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
