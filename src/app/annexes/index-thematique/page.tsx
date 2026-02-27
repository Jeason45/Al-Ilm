import type { Metadata } from 'next';
import Link from 'next/link';
import { indexThematique } from '@/data/annexes/index-thematique';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Index thématique',
  description: 'Retrouvez les sourates par thème : foi, prophètes, au-delà, justice...',
};

export default function IndexThematiquePage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الفهرس الموضوعي
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Index thématique.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Explorez le Coran par thème et retrouvez les sourates correspondantes.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {indexThematique.map((theme, i) => (
            <ScrollReveal key={theme.theme} delay={i < 8 ? i * 40 : 0}>
              <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', color: 'var(--color-gold)', marginBottom: '0.5rem' }}>
                  {theme.theme}
                </h3>
                <p className="text-muted" style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>{theme.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {theme.sourates.map(num => (
                    <Link
                      key={num}
                      href={`/apprendre/${num}`}
                      style={{
                        fontSize: '0.75rem', fontWeight: 500, color: 'var(--color-muted)',
                        background: 'var(--color-surface-elevated)', padding: '0.375rem 0.75rem',
                        borderRadius: '6px', textDecoration: 'none', transition: 'all 0.2s',
                      }}
                    >
                      Sourate {num}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
