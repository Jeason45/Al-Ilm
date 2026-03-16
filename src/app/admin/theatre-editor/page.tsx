'use client';

import dynamic from 'next/dynamic';

const TheatrePoseEditor = dynamic(
  () => import('@/components/3d/theatre/TheatrePoseEditor').then((m) => m.TheatrePoseEditor),
  { ssr: false, loading: () => <LoadingFallback /> },
);

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      color: '#888',
      fontSize: '0.875rem',
    }}>
      Chargement de Theatre.js Studio...
    </div>
  );
}

export default function TheatreEditorPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a1e' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
      }}>
        <h1 style={{
          fontSize: '1.125rem',
          fontWeight: 700,
          color: '#e8e0d0',
        }}>
          Theatre.js — Éditeur de poses 3D
        </h1>
        <span style={{ fontSize: '0.75rem', color: '#888' }}>
          Dev-only
        </span>
      </header>
      <TheatrePoseEditor />
    </div>
  );
}
