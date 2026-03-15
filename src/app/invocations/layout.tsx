import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invocations (Adhkar)',
  description:
    'Invocations du matin, du soir, de la prière et pour chaque occasion.',
  openGraph: {
    title: 'Invocations & Adhkar — Al-Ilm',
    description:
      'Plus de 170 invocations authentiques en arabe, translitération et français.',
  },
};

export default function InvocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
