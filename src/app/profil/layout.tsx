import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mon profil',
  description: 'Gérez votre profil, vos favoris et votre progression.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
