import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiz islamique',
  description:
    'Testez vos connaissances sur le Coran, les prophètes et l\'Islam.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
