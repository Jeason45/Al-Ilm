import Link from 'next/link';
import type { Metadata } from 'next';
import { PRATIQUE_LINKS } from '@/lib/constants';
import { ScrollReveal } from '@/components/ScrollReveal';
import { HandMetal, Compass, Moon, HandCoins } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  HandMetal, Compass, Moon, HandCoins,
};

export const metadata: Metadata = {
  title: 'Pratique',
  description: 'Outils pratiques : horaires de prière, guide du Ramadan, zakat et plus.',
};

export default function PratiquePage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              العبادة
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Pratique.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '28rem', margin: '0 auto' }}>
              Outils et guides pour votre pratique quotidienne.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {PRATIQUE_LINKS.map((link, i) => {
            const Icon = iconMap[link.icon] || HandMetal;
            return (
              <ScrollReveal key={link.href} delay={i * 60}>
                <Link
                  href={link.href}
                  className="surah-card group"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(201, 168, 76, 0.08)',
                    border: '1px solid rgba(201, 168, 76, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon style={{ width: '22px', height: '22px', color: 'var(--color-gold)' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="font-outfit font-semibold" style={{ fontSize: '1rem', marginBottom: '3px' }}>
                      {link.label}
                    </h3>
                    <p className="text-muted" style={{ fontSize: '0.8125rem', lineHeight: 1.4 }}>
                      {link.desc}
                    </p>
                  </div>
                  <span className="text-muted" style={{ fontSize: '1.25rem', flexShrink: 0 }}>&#8250;</span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
