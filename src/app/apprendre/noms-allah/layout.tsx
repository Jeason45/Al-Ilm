import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Les 99 Noms d'Allah",
  description: "Découvrez les 99 plus beaux noms d'Allah avec leur signification.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
