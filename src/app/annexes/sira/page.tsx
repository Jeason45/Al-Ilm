import type { Metadata } from 'next';
import Link from 'next/link';
import { siraEvenements, introSira } from '@/data/annexes/sira';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Biographie du Prophète ﷺ (Sira)',
  description: 'La vie du Prophète Muhammad ﷺ de sa naissance à son décès : Révélation, Hégire, batailles, conquête de La Mecque et pèlerinage d\'adieu.',
};

export default function SiraPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              السيرة النبوية
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Biographie du Prophète ﷺ
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              {introSira}
            </p>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          {siraEvenements.map((event, index) => (
            <ScrollReveal key={index} delay={index * 40}>
              <div style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: index < siraEvenements.length - 1 ? '1.5rem' : 0 }}>
                {/* Timeline line */}
                {index < siraEvenements.length - 1 && (
                  <div style={{
                    position: 'absolute', left: '7px', top: '20px', bottom: 0, width: '1px',
                    background: 'var(--color-border)',
                  }} />
                )}
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: 0, top: '8px', width: '15px', height: '15px',
                  borderRadius: '50%', background: 'var(--color-gold)',
                }} />

                <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.6875rem', padding: '2px 10px', borderRadius: '999px',
                      background: 'var(--color-gold)', color: 'var(--color-bg)', fontWeight: 600,
                    }}>
                      {event.date}
                    </span>
                    <span style={{
                      fontSize: '0.6875rem', padding: '2px 10px', borderRadius: '999px',
                      border: '1px solid var(--color-border)', color: 'var(--color-muted)', fontWeight: 500,
                    }}>
                      {event.lieu}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '0.5rem' }}>
                    <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{event.titre}</h3>
                    <span className="font-amiri text-gold" style={{ fontSize: '1rem', opacity: 0.6 }}>{event.titreArabe}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {event.description.map((p, j) => (
                      <p key={j} style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{p}</p>
                    ))}
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
