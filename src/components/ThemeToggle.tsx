'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return <div style={{ width: '32px', height: '32px' }} />;

  return (
    <button
      onClick={toggleTheme}
      style={{
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255,255,255,0.8)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: 'color 0.2s',
      }}
      aria-label={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
    >
      {theme === 'dark' ? <Moon style={{ width: '18px', height: '18px' }} /> : <Sun style={{ width: '18px', height: '18px' }} />}
    </button>
  );
}
