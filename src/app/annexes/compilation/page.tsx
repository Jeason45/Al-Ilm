import type { Metadata } from 'next';
import { compilation } from '@/data/annexes/compilation';

export const metadata: Metadata = {
  title: 'Compilation du Coran',
  description: "L'histoire de la compilation et de la préservation du Saint Coran.",
};

export default function CompilationPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
            Compilation du Coran.
          </h1>
          <p className="text-[17px] text-muted max-w-lg mx-auto">
            {compilation.introduction}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {compilation.etapes.map((etape, index) => (
            <div key={index} className="relative pl-10 pb-10 last:pb-0">
              {index < compilation.etapes.length - 1 && (
                <div className="absolute left-[7px] top-3 bottom-0 w-px bg-border" />
              )}
              <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full bg-gold" />

              <div className="card p-6">
                <span className="text-[12px] text-gold font-medium uppercase tracking-wider mb-2 block">{etape.periode}</span>
                <h3 className="text-lg font-medium font-outfit mb-2">{etape.titre}</h3>
                <p className="text-[15px] text-muted leading-relaxed">{etape.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[17px] text-muted max-w-xl mx-auto leading-relaxed">{compilation.conclusion}</p>
        </div>
      </div>
    </div>
  );
}
