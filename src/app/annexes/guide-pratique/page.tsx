import type { Metadata } from 'next';
import Link from 'next/link';
import { guidePratique } from '@/data/annexes/guide-pratique';
import { Badge } from '@/components/Badge';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Guide pratique',
  description: 'Quelles sourates réciter selon les situations de la vie.',
};

export default function GuidePratiquePage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الدليل العملي
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Guide pratique.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Quelles sourates réciter selon les situations et moments de la vie.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {guidePratique.map((guide, index) => (
            <ScrollReveal key={index} delay={index < 8 ? index * 40 : 0}>
              <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>{guide.situation}</h3>
                <p className="text-muted" style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem' }}>{guide.explication}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {guide.sourates.map(s => (
                    <Badge key={s} variant="gold">{s}</Badge>
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
