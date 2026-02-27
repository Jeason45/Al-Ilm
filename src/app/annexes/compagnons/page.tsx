import type { Metadata } from 'next';
import { compagnons } from '@/data/annexes/compagnons';

export const metadata: Metadata = {
  title: 'Compagnons du Prophète',
  description: 'Les grands compagnons (Sahaba) du Prophète Muhammad ﷺ.',
};

export default function CompagnonsPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="font-amiri text-2xl text-gold mb-4">الصحابة</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Les Compagnons.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto">
            Les grands compagnons du Prophète Muhammad ﷺ, piliers de l&apos;Islam naissant.
          </p>
        </div>

        <div className="space-y-4">
          {compagnons.map((compagnon) => (
            <div key={compagnon.nom} className="card p-6">
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="text-lg font-medium font-outfit">{compagnon.nom}</h3>
                <span className="font-amiri text-lg text-gold">{compagnon.nomArabe}</span>
              </div>
              <p className="text-[13px] text-gold mb-3">{compagnon.titre}</p>
              <p className="text-[15px] text-foreground leading-relaxed">{compagnon.histoire}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
