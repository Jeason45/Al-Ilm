'use client';

import dynamic from 'next/dynamic';

const PoseEditorPanel = dynamic(
  () => import('@/components/3d/editor/PoseEditorPanel').then((m) => m.PoseEditorPanel),
  { ssr: false, loading: () => <LoadingFallback /> },
);

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: 'var(--color-muted)',
      fontSize: '0.875rem',
    }}>
      Chargement de l&apos;éditeur 3D...
    </div>
  );
}

export default function PoseEditorPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-background, #0a0a1e)' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
      }}>
        <h1 className="font-outfit" style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-foreground)' }}>
          Éditeur de poses — Prière & Ablutions
        </h1>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>Admin</span>
      </header>
      <PoseEditorPanel />
    </div>
  );
}
