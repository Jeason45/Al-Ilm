import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recherche',
  description: 'Recherchez dans le Coran, les hadiths et les invocations.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
