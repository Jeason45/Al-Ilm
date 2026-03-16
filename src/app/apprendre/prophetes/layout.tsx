import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Les 25 Prophètes',
  description: "L'histoire des 25 prophètes mentionnés dans le Coran.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
