import type { Metadata } from 'next';
import Link from 'next/link';
import { compilation } from '@/data/annexes/compilation';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Compilation du Coran',
  description: "L'histoire de la compilation et de la préservation du Saint Coran.",
};

export default function CompilationPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              جمع القرآن
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Compilation du Coran.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto' }}>
              {compilation.introduction}
            </p>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          {compilation.etapes.map((etape, index) => (
            <ScrollReveal key={index} delay={index * 60}>
              <div style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: index < compilation.etapes.length - 1 ? '2.5rem' : 0 }}>
                {index < compilation.etapes.length - 1 && (
                  <div style={{
                    position: 'absolute', left: '7px', top: '12px', bottom: 0, width: '1px',
                    background: 'var(--color-border)',
                  }} />
                )}
                <div style={{
                  position: 'absolute', left: 0, top: '6px', width: '15px', height: '15px',
                  borderRadius: '50%', background: 'var(--color-gold)',
                }} />

                <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                    {etape.periode}
                  </span>
                  <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>{etape.titre}</h3>
                  <p className="text-muted" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{etape.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
              {compilation.conclusion}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
