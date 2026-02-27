import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Horaires de prière — Al-Ilm',
  description:
    'Consultez les horaires des 5 prières quotidiennes selon votre localisation — Fajr, Dhuhr, Asr, Maghrib, Isha.',
};

export default function HorairesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
