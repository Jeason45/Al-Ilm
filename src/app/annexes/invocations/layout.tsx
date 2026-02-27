import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invocations coraniques',
  description: "Les du'as tirées du Coran pour chaque occasion.",
};

export default function InvocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
