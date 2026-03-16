import Link from 'next/link';
import type { Metadata } from 'next';
import { APPRENDRE_CATEGORIES } from '@/lib/constants';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  Star, Users, BookOpen, Microscope, List,
  Heart, Shield, BookMarked, Scale, GitBranch,
  Pilcrow, Sparkles, Infinity, BookHeart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Star, Users, BookOpen, Microscope, List,
  Heart, Shield, BookMarked, Scale, GitBranch,
  Pilcrow, Sparkles, Infinity, BookHeart,
};

export const metadata: Metadata = {
  title: 'Apprendre',
  description: "Apprenez les fondements de l'Islam : piliers, prophètes, noms d'Allah, histoire et plus.",
};

export default function ApprendrePage() {
  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              تعلّم
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Apprendre.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '30rem', margin: '0 auto' }}>
              Explorez les fondements, les figures et l&apos;histoire de l&apos;Islam.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          {APPRENDRE_CATEGORIES.map((category, ci) => (
            <section key={category.title}>
              <ScrollReveal delay={ci * 60}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '1rem' }}>
                  <h2 className="font-outfit font-semibold" style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', letterSpacing: '-0.02em' }}>
                    {category.title}
                  </h2>
                  <span className="font-amiri text-gold" style={{ fontSize: '1rem', opacity: 0.4 }}>
                    {category.titleAr}
                  </span>
                </div>
              </ScrollReveal>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
                gap: '0.75rem',
              }}>
                {category.items.map((link, i) => {
                  const Icon = iconMap[link.icon] || Star;
                  return (
                    <ScrollReveal key={link.href} delay={ci * 60 + i * 40}>
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
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
