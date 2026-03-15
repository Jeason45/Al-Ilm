import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inscription',
  description: 'Créez votre compte Al-Ilm gratuitement.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
