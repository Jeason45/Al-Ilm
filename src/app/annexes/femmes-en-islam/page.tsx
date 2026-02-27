import type { Metadata } from 'next';
import { femmesEnIslam } from '@/data/annexes/femmes-en-islam';
import { Badge } from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Femmes en Islam',
  description: 'Les femmes mentionnées et honorées dans le Coran.',
};

export default function FemmesEnIslamPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Femmes en Islam.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto">
            Les femmes mentionnées et honorées dans le Coran et la tradition islamique.
          </p>
        </div>

        <div className="space-y-4">
          {femmesEnIslam.map((femme) => (
            <div key={femme.nom} className="card p-6">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <h3 className="text-lg font-medium font-outfit">{femme.nom}</h3>
                  <p className="text-[13px] text-gold">{femme.titre}</p>
                </div>
                <Badge variant="muted">{femme.sourate}</Badge>
              </div>
              <p className="text-[15px] text-foreground leading-relaxed mt-3">{femme.histoire}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
