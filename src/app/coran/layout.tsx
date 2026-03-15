import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le Saint Coran',
  description:
    'Lisez et explorez les 114 sourates du Coran avec traduction française et translittération.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
