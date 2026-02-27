'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'theme-central', label: 'Thème central' },
  { id: 'contexte', label: 'Contexte' },
  { id: 'recits', label: 'Récits' },
  { id: 'lecons', label: 'Leçons' },
  { id: 'versets-cles', label: 'Versets clés' },
  { id: 'merites', label: 'Mérites' },
];

export function SurateTableOfContents() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block sticky top-28 w-44 shrink-0">
      <p className="text-[13px] font-medium text-muted mb-5">
        Sommaire
      </p>
      <ul className="space-y-1 border-l border-border pl-4">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                'block py-1.5 text-[14px] transition-colors duration-300',
                active === id
                  ? 'text-gold'
                  : 'text-muted/60 hover:text-foreground'
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
