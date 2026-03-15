import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hadiths',
  description:
    'Découvrez les hadiths authentiques des grandes collections : Bukhari, Muslim, Tirmidhi et plus.',
  openGraph: {
    title: 'Hadiths — Al-Ilm',
    description:
      '9 collections de hadiths authentiques — plus de 7500 hadiths en arabe et français avec grades d\'authenticité.',
  },
};

export default function HadithsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
