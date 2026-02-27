'use client';

import Link from 'next/link';
import { ScrollReveal } from './ScrollReveal';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-amiri text-2xl sm:text-3xl text-gold/50 mb-8">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold tracking-tight mb-5">
              Prêt à apprendre ?
            </h2>
            <p className="text-[17px] text-muted max-w-md mx-auto mb-10">
              114 sourates, 10 annexes, des centaines de versets clés — tout est accessible, gratuitement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/coran" className="btn-primary">
                Lire le Coran
              </Link>
              <Link href="/apprendre" className="btn-secondary">
                Commencer l&apos;exploration
              </Link>
              <Link href="/annexes" className="btn-secondary">
                Parcourir les annexes
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
