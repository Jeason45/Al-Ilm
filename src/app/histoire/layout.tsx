import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Histoire du Coran — Al-Ilm',
  description:
    "Frise chronologique narrative de l'histoire du Coran et du Prophète ﷺ : de la naissance du Prophète à la compilation finale, 36 événements majeurs racontés comme une histoire vivante.",
};

export default function HistoireLayout({ children }: { children: React.ReactNode }) {
  return children;
}
