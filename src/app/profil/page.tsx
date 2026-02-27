'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { User, Mail, BookOpen, Heart } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ProfilPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/connexion');
  }, [status, router]);

  if (status === 'loading' || !session) {
    return (
      <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px', textAlign: 'center' }}>
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
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%', margin: '0 auto 1rem',
              background: 'rgba(201, 168, 76, 0.15)', border: '2px solid var(--color-gold)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.75rem', fontWeight: 700, color: 'var(--color-gold)',
            }}>
              {session.user.name?.charAt(0).toUpperCase()}
            </div>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>
              {session.user.name}
            </h1>
            <p className="text-muted" style={{ fontSize: '0.9375rem' }}>{session.user.email}</p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <ScrollReveal delay={60}>
            <div className="surah-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(201, 168, 76, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <User size={18} style={{ color: 'var(--color-gold)' }} />
              </div>
              <div>
                <p className="text-muted" style={{ fontSize: '0.75rem' }}>Nom</p>
                <p className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>{session.user.name}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <div className="surah-card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(201, 168, 76, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Mail size={18} style={{ color: 'var(--color-gold)' }} />
              </div>
              <div>
                <p className="text-muted" style={{ fontSize: '0.75rem' }}>Email</p>
                <p className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>{session.user.email}</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <Link href="/favoris" className="surah-card group" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '1.25rem', textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(201, 168, 76, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Heart size={18} style={{ color: 'var(--color-gold)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>Mes favoris</p>
                <p className="text-muted" style={{ fontSize: '0.8125rem' }}>Versets, hadiths et sourates sauvegardés</p>
              </div>
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={240}>
            <Link href="/coran" className="surah-card group" style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '1.25rem', textDecoration: 'none', color: 'inherit' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                background: 'rgba(201, 168, 76, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <BookOpen size={18} style={{ color: 'var(--color-gold)' }} />
              </div>
              <div style={{ flex: 1 }}>
                <p className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>Ma progression</p>
                <p className="text-muted" style={{ fontSize: '0.8125rem' }}>Suivi de lecture du Coran</p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
