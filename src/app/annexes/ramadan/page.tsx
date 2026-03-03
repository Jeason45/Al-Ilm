import type { Metadata } from 'next';
import Link from 'next/link';
import { ramadanSections } from '@/data/annexes/ramadan';
import { ScrollReveal } from '@/components/ScrollReveal';
import type { LucideIcon } from 'lucide-react';
import { Moon, BookOpen, Clock, Star, HandCoins, PartyPopper, Heart, Lightbulb } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Moon, BookOpen, Clock, Star, HandCoins, PartyPopper, Heart, Lightbulb,
  HandHeart: Heart,
};

export const metadata: Metadata = {
  title: 'Guide du Ramadan',
  description: 'Guide complet du Ramadan : règles du jeûne, programme quotidien, 10 dernières nuits, Zakat al-Fitr, invocations et conseils pratiques.',
};

export default function RamadanPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              رمضان
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Guide du Ramadan.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto' }}>
              Tout ce qu&apos;il faut savoir pour vivre un Ramadan serein et spirituellement enrichissant.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {ramadanSections.map((section, i) => {
            const IconComponent = iconMap[section.icon] || Moon;
            return (
              <ScrollReveal key={section.titre} delay={i < 10 ? i * 40 : 0}>
                <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                    <IconComponent style={{ width: '20px', height: '20px', color: 'var(--color-gold)', flexShrink: 0 }} />
                    <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{section.titre}</h3>
                    <span className="font-amiri text-gold" style={{ fontSize: '1rem', opacity: 0.6 }}>{section.titreArabe}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem' }}>
                    {section.contenu.map((paragraphe, j) => (
                      <p key={j} style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{paragraphe}</p>
                    ))}
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
