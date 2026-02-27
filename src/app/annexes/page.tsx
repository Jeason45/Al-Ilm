import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ANNEXES_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Annexes',
  description: "Explorez les annexes : 99 Noms d'Allah, 25 Prophètes, glossaire, miracles scientifiques et plus.",
};

export default function AnnexesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Annexes.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto">
            Approfondissez votre connaissance de l&apos;Islam avec ces ressources complémentaires.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ANNEXES_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group card card-hover flex items-center justify-between p-6"
            >
              <h3 className="text-[15px] font-medium font-outfit group-hover:text-gold transition-colors duration-200">
                {link.label}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors duration-200 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
