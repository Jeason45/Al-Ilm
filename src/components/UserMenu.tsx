'use client';

import { useState, useRef, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { User, LogOut, Heart, ChevronDown } from 'lucide-react';

export function UserMenu() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  if (status === 'loading') {
    return (
      <div style={{
        width: '32px', height: '32px', borderRadius: '50%',
        background: 'var(--color-card)', border: '1px solid var(--color-border)',
      }} />
    );
  }

  if (!session) {
    return (
      <Link
        href="/connexion"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '6px 14px', fontSize: '13px', fontWeight: 500,
          borderRadius: '8px', border: '1px solid var(--color-border)',
          color: 'var(--color-foreground)', textDecoration: 'none',
          transition: 'all 0.2s',
        }}
      >
        <User size={14} />
        Connexion
      </Link>
    );
  }

  const initial = session.user.name?.charAt(0).toUpperCase() || '?';

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '4px 10px 4px 4px', borderRadius: '20px',
          border: '1px solid var(--color-border)', background: 'transparent',
          cursor: 'pointer', color: 'var(--color-foreground)', fontSize: '13px',
        }}
      >
        <span style={{
          width: '28px', height: '28px', borderRadius: '50%',
          background: 'rgba(201, 168, 76, 0.2)', color: 'var(--color-gold)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '13px', fontWeight: 600,
        }}>
          {initial}
        </span>
        <span style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {session.user.name}
        </span>
        <ChevronDown size={14} style={{ color: 'var(--color-muted)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>

      {open && (
        <div style={{
          position: 'absolute', right: 0, top: 'calc(100% + 8px)', minWidth: '180px',
          background: 'var(--color-card)', border: '1px solid var(--color-border)',
          borderRadius: '12px', padding: '4px', zIndex: 100,
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        }}>
          <Link
            href="/profil"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px',
              fontSize: '13px', color: 'var(--color-foreground)', textDecoration: 'none',
              borderRadius: '8px', transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <User size={14} style={{ color: 'var(--color-muted)' }} />
            Mon profil
          </Link>
          <Link
            href="/favoris"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px',
              fontSize: '13px', color: 'var(--color-foreground)', textDecoration: 'none',
              borderRadius: '8px', transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <Heart size={14} style={{ color: 'var(--color-muted)' }} />
            Mes favoris
          </Link>
          <div style={{ height: '1px', background: 'var(--color-border)', margin: '4px 0' }} />
          <button
            onClick={() => { signOut({ callbackUrl: '/' }); setOpen(false); }}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px',
              fontSize: '13px', color: '#ef4444', background: 'transparent', border: 'none',
              borderRadius: '8px', cursor: 'pointer', width: '100%', transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <LogOut size={14} />
            Déconnexion
          </button>
        </div>
      )}
    </div>
  );
}
