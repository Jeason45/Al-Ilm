import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mes favoris',
  description: 'Retrouvez vos sourates, hadiths et invocations favoris.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
