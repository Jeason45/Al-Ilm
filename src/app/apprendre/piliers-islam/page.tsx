import type { Metadata } from 'next';
import Link from 'next/link';
import { piliersIslam, introPiliersIslam } from '@/data/annexes/piliers-islam';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { LucideIcon } from 'lucide-react';
import { MessageCircle, HandMetal, HandCoins, Moon, Landmark } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  MessageCircle, HandMetal, HandCoins, Moon, Landmark,
};

export const metadata: Metadata = {
  title: 'Les 5 piliers de l\'Islam',
  description: 'Les cinq piliers fondamentaux de l\'Islam : Shahada, Salat, Zakat, Sawm et Hajj — avec preuves coraniques et hadiths.',
};

export default function PiliersIslamPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <Link href="/apprendre" className="back-link">
          <span className="back-link-icon">←</span> Apprendre
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              أركان الإسلام
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Les 5 piliers de l&apos;Islam.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '36rem', margin: '0 auto', lineHeight: 1.7 }}>
              {introPiliersIslam}
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {piliersIslam.map((pilier, i) => {
            const Icon = iconMap[pilier.icon] || MessageCircle;
            return (
              <ScrollReveal key={pilier.nom} delay={i * 60}>
                <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '10px',
                      background: 'rgba(201, 168, 76, 0.1)', border: '1px solid rgba(201, 168, 76, 0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span className="font-outfit font-bold" style={{ fontSize: '1rem', color: 'var(--color-gold)' }}>{pilier.numero}</span>
                    </div>
                    <div>
                      <h3 className="font-outfit font-bold" style={{ fontSize: '1.125rem' }}>{pilier.nom}</h3>
                      <span className="font-amiri text-gold" style={{ fontSize: '1.125rem', opacity: 0.7 }}>{pilier.nomArabe}</span>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '1rem', marginTop: '0.75rem' }}>{pilier.description}</p>

                  <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.5rem' }}>Preuves (Coran & Sunna)</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {pilier.preuves.map((preuve, j) => (
                        <div key={j} style={{
                          padding: '0.625rem 0.875rem', borderRadius: '8px',
                          background: 'rgba(201, 168, 76, 0.04)', border: '1px solid rgba(201, 168, 76, 0.08)',
                        }}>
                          <p className="text-muted" style={{ fontSize: '0.8125rem', lineHeight: 1.6, fontStyle: 'italic' }}>{preuve}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', fontWeight: 500, marginBottom: '0.5rem' }}>En détail</p>
                    <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {pilier.details.map((detail, j) => (
                        <li key={j} style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
