import type { Metadata } from 'next';
import Link from 'next/link';
import { indexThematique } from '@/data/annexes/index-thematique';

export const metadata: Metadata = {
  title: 'Index thématique',
  description: 'Retrouvez les sourates par thème : foi, prophètes, au-delà, justice...',
};

export default function IndexThematiquePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Index thématique.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto">
            Explorez le Coran par thème et retrouvez les sourates correspondantes.
          </p>
        </div>

        <div className="space-y-4">
          {indexThematique.map((theme) => (
            <div key={theme.theme} className="card p-6">
              <h3 className="text-lg font-medium font-outfit text-gold mb-2">{theme.theme}</h3>
              <p className="text-[15px] text-muted leading-relaxed mb-4">{theme.description}</p>
              <div className="flex flex-wrap gap-2">
                {theme.sourates.map(num => (
                  <Link
                    key={num}
                    href={`/apprendre/${num}`}
                    className="text-[12px] font-medium text-muted bg-surface-elevated hover:text-gold hover:bg-gold/10 px-3 py-1.5 rounded-md transition-colors duration-200"
                  >
                    Sourate {num}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
