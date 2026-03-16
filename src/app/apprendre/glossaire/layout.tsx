import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glossaire islamique',
  description: "Définitions des termes essentiels de l'Islam.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
