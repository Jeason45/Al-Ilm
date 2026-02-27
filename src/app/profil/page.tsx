'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { User, Mail, Calendar, BookOpen, Heart } from 'lucide-react';
import Link from 'next/link';

export default function ProfilPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/connexion');
  }, [status, router]);

  if (status === 'loading' || !session) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-[600px] mx-auto px-6 text-center">
          <div style={{
            width: '40px', height: '40px', margin: '0 auto',
            border: '3px solid var(--color-border)', borderTopColor: 'var(--color-gold)',
            borderRadius: '50%', animation: 'spin 0.8s linear infinite',
          }} />
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[600px] mx-auto px-6">
        <div className="text-center mb-8">
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%', margin: '0 auto 16px',
            background: 'rgba(201, 168, 76, 0.15)', border: '2px solid var(--color-gold)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '28px', fontWeight: 700, color: 'var(--color-gold)',
          }}>
            {session.user.name?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-3xl font-outfit font-bold tracking-tight mb-1">
            {session.user.name}
          </h1>
          <p className="text-[15px] text-muted">{session.user.email}</p>
        </div>

        <div className="space-y-3">
          <div className="card p-5">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <User size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <div>
                <p className="text-[13px] text-muted">Nom</p>
                <p className="text-[15px] font-medium">{session.user.name}</p>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
              <div>
                <p className="text-[13px] text-muted">Email</p>
                <p className="text-[15px] font-medium">{session.user.email}</p>
              </div>
            </div>
          </div>

          <Link href="/favoris" className="card p-5 card-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
            <Heart size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p className="text-[15px] font-medium">Mes favoris</p>
              <p className="text-[13px] text-muted">Versets, hadiths et sourates sauvegardés</p>
            </div>
          </Link>

          <Link href="/coran" className="card p-5 card-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
            <BookOpen size={18} style={{ color: 'var(--color-gold)', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <p className="text-[15px] font-medium">Ma progression</p>
              <p className="text-[13px] text-muted">Suivi de lecture du Coran</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
