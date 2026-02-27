import type { Metadata } from 'next';
import { miraclesScientifiques } from '@/data/annexes/miracles-scientifiques';
import { Badge } from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Miracles scientifiques du Coran',
  description: 'Découvrez les miracles scientifiques mentionnés dans le Coran.',
};

export default function MiraclesPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Miracles scientifiques.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto">
            Des vérités révélées il y a plus de 14 siècles, confirmées par la science moderne.
          </p>
        </div>

        <div className="space-y-4">
          {miraclesScientifiques.map((miracle, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-medium font-outfit">{miracle.titre}</h3>
                <Badge variant="gold">{miracle.reference}</Badge>
              </div>

              <p className="font-amiri text-xl text-gold text-right leading-loose mb-5" dir="rtl">
                {miracle.verset}
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="text-[12px] font-medium text-muted uppercase tracking-wider mb-1.5">Explication</h4>
                  <p className="text-[15px] text-foreground leading-relaxed">{miracle.explication}</p>
                </div>
                <div>
                  <h4 className="text-[12px] font-medium text-emerald uppercase tracking-wider mb-1.5">Découverte moderne</h4>
                  <p className="text-[15px] text-foreground leading-relaxed">{miracle.decouverteModerne}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
