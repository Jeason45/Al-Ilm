import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zakat et dons',
  description: 'Calculez votre Zakat et découvrez les associations humanitaires musulmanes.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
