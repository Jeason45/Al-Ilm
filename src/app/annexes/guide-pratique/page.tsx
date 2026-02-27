import type { Metadata } from 'next';
import { guidePratique } from '@/data/annexes/guide-pratique';
import { Badge } from '@/components/Badge';

export const metadata: Metadata = {
  title: 'Guide pratique',
  description: 'Quelles sourates réciter selon les situations de la vie.',
};

export default function GuidePratiquePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Guide pratique.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto">
            Quelles sourates réciter selon les situations et moments de la vie.
          </p>
        </div>

        <div className="space-y-4">
          {guidePratique.map((guide, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-lg font-medium font-outfit mb-2">{guide.situation}</h3>
              <p className="text-[15px] text-muted leading-relaxed mb-4">{guide.explication}</p>
              <div className="flex flex-wrap gap-2">
                {guide.sourates.map(s => (
                  <Badge key={s} variant="gold">{s}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
