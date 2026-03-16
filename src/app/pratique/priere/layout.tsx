import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horaires de prière',
  description:
    'Horaires de prière selon votre localisation et guide de la prière étape par étape.',
};

export default function HorairesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
