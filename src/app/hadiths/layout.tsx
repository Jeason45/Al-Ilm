import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hadiths Prophétiques — Al-Ilm',
  description:
    'Explorez les grandes collections de hadiths authentiques en arabe et français : Bukhari, Muslim, Abu Dawud, Ibn Majah, Nasai, Malik, Nawawi et plus.',
  openGraph: {
    title: 'Hadiths Prophétiques — Al-Ilm',
    description:
      '9 collections de hadiths authentiques — plus de 7500 hadiths en arabe et français avec grades d\'authenticité.',
  },
};

export default function HadithsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
