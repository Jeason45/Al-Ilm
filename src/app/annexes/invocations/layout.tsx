import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invocations thématiques',
  description: "Invocations classées par thème et occasion.",
};

export default function InvocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
