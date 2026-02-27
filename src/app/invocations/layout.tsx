import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invocations & Adhkar — Al-Ilm',
  description: 'Plus de 170 invocations authentiques réparties en 18 catégories : adhkar du matin et du soir, après la prière, sommeil, voyage, protection et bien plus.',
  openGraph: {
    title: 'Invocations & Adhkar — Al-Ilm',
    description: 'Plus de 170 invocations authentiques en arabe, translitération et français.',
  },
};

export default function InvocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
