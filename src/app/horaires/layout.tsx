import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'La Prière — Al-Ilm',
  description:
    'Horaires de prière, guide complet étape par étape avec positions illustrées, et adhan avec texte synchronisé — Fajr, Dhuhr, Asr, Maghrib, Isha.',
};

export default function HorairesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
