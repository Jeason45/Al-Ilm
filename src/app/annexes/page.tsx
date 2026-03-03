import Link from 'next/link';
import type { Metadata } from 'next';
import { ANNEXES_LINKS } from '@/lib/constants';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Star, Users, BookOpen, Microscope, Compass, List,
  Heart, Shield, BookMarked, Moon, Scale, HandCoins, GitBranch,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Star, Users, BookOpen, Microscope, Compass, List,
  Heart, Shield, BookMarked, Moon, Scale, HandCoins, GitBranch,
};

export const metadata: Metadata = {
  title: 'Annexes',
  description: "Explorez les annexes : 99 Noms d'Allah, 25 Prophètes, glossaire, miracles scientifiques et plus.",
};

export default function AnnexesPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الملاحق
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Annexes.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Approfondissez votre connaissance de l&apos;Islam avec ces ressources complémentaires.
            </p>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '0.75rem',
        }}>
          {ANNEXES_LINKS.map((link, i) => {
            const Icon = iconMap[link.icon] || Star;
            return (
              <ScrollReveal key={link.href} delay={i * 40}>
                <Link
                  href={link.href}
                  className="surah-card group"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    padding: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                    textDecoration: 'none',
                    color: 'inherit',
                    height: '100%',
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(201, 168, 76, 0.08)',
                    border: '1px solid rgba(201, 168, 76, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon style={{ width: '18px', height: '18px', color: 'var(--color-gold)' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem', marginBottom: '3px' }}>
                      {link.label}
                    </h3>
                    <p className="text-muted" style={{ fontSize: '0.8125rem', lineHeight: 1.4 }}>
                      {link.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
