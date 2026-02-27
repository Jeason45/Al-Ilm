'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

const features = [
  {
    number: '6236',
    title: 'Versets à lire',
    arabic: 'الآيات',
    description: 'Lecture verset par verset avec arabe, translittération, traduction et audio.',
    href: '/coran',
  },
  {
    number: '7500+',
    title: 'Hadiths',
    arabic: 'الأحاديث',
    description: '9 grandes collections de hadiths authentiques en arabe et français.',
    href: '/hadiths',
  },
  {
    number: '114',
    title: 'Sourates',
    arabic: 'السور',
    description: 'Contexte de révélation, récits, leçons et versets clés pour chaque sourate.',
    href: '/apprendre',
  },
  {
    number: '99',
    title: "Noms d'Allah",
    arabic: 'أسماء الله',
    description: "Les attributs divins et leur signification profonde.",
    href: '/annexes/noms-allah',
  },
  {
    number: '25',
    title: 'Prophètes',
    arabic: 'الأنبياء',
    description: "De Adam à Muhammad ﷺ — histoires et enseignements.",
    href: '/annexes/prophetes',
  },
];

export function FeaturesGrid() {
  return (
    <section style={{ width: '100%', padding: 'clamp(4rem, 8vw, 8rem) 0' }}>
      <div style={{ ...center, textAlign: 'center' }}>
        <ScrollReveal>
          <h2 className="font-outfit font-bold" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginBottom: 'clamp(2.5rem, 5vw, 5rem)' }}>
            Tout pour comprendre le Coran.
          </h2>
        </ScrollReveal>

        <div className="grid-features">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 80}>
              <Link
                href={feature.href}
                className="group card card-hover"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2.5vw, 2rem)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <span className="font-amiri text-gold/30" style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1.25rem' }}>
                  {feature.arabic}
                </span>
                <span className="font-outfit font-bold gradient-gold" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', display: 'block', marginBottom: '0.75rem' }}>
                  {feature.number}
                </span>
                <h3 className="font-outfit font-semibold" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  {feature.title}
                </h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {feature.description}
                </p>
                <span className="text-muted group-hover:text-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8125rem', fontWeight: 500, transition: 'color 0.2s' }}>
                  Explorer
                  <ArrowUpRight style={{ width: '14px', height: '14px' }} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
