import type { Metadata } from 'next';
import { miraclesScientifiques } from '@/data/annexes/miracles-scientifiques';
import { Badge } from '@/components/Badge';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Miracles scientifiques du Coran',
  description: 'Découvrez les miracles scientifiques mentionnés dans le Coran.',
};

export default function MiraclesPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الإعجاز العلمي
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Miracles scientifiques.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto' }}>
              Des vérités révélées il y a plus de 14 siècles, confirmées par la science moderne.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {miraclesScientifiques.map((miracle, index) => (
            <ScrollReveal key={index} delay={index < 8 ? index * 40 : 0}>
              <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: '12px', marginBottom: '1rem' }}>
                  <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{miracle.titre}</h3>
                  <Badge variant="gold">{miracle.reference}</Badge>
                </div>

                <p
                  className="font-amiri text-gold"
                  dir="rtl"
                  style={{ fontSize: '1.25rem', lineHeight: 2, marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--color-border)' }}
                >
                  {miracle.verset}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <h4 className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.375rem' }}>Explication</h4>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{miracle.explication}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.75rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.375rem', color: 'var(--color-emerald)' }}>Découverte moderne</h4>
                    <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{miracle.decouverteModerne}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
