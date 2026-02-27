import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ANNEXES_LINKS } from '@/lib/constants';
import { ScrollReveal } from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Annexes',
  description: "Explorez les annexes : 99 Noms d'Allah, 25 Prophètes, glossaire, miracles scientifiques et plus.",
};

export default function AnnexesPage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
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

        <div className="grid-features">
          {ANNEXES_LINKS.map((link, i) => (
            <ScrollReveal key={link.href} delay={i * 40}>
              <Link
                href={link.href}
                className="surah-card group"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(1.25rem, 2.5vw, 1.5rem)', textDecoration: 'none', color: 'inherit' }}
              >
                <h3 className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>
                  {link.label}
                </h3>
                <ArrowUpRight style={{ width: '16px', height: '16px', color: 'var(--color-muted)', flexShrink: 0 }} />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
