'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 14px 12px 40px', fontSize: '0.875rem',
  borderRadius: '8px', border: '1px solid var(--color-border)',
  background: 'var(--color-surface-elevated)', color: 'var(--color-foreground)', outline: 'none',
};

const iconStyle: React.CSSProperties = {
  position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
  width: '16px', height: '16px', color: 'var(--color-muted)', pointerEvents: 'none',
};

export default function ConnexionPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await signIn('credentials', { email, password, redirect: false });
    setLoading(false);

    if (res?.error) {
      setError('Email ou mot de passe incorrect.');
    } else {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '0.75rem', opacity: 0.5 }}>
              تسجيل الدخول
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
              Connexion.
            </h1>
            <p className="text-muted" style={{ fontSize: '0.9375rem' }}>
              Accédez à vos favoris et votre progression.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <form onSubmit={handleSubmit} className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {error && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px',
                  borderRadius: '8px', background: 'rgba(251, 113, 133, 0.08)',
                  border: '1px solid rgba(251, 113, 133, 0.2)', fontSize: '0.8125rem', color: 'var(--color-rose)',
                }}>
                  <AlertCircle size={16} style={{ flexShrink: 0 }} /> {error}
                </div>
              )}

              <div>
                <label htmlFor="email" className="text-muted" style={{ display: 'block', marginBottom: '6px', fontSize: '0.8125rem', fontWeight: 500 }}>Email</label>
                <div style={{ position: 'relative' }}>
                  <Mail style={iconStyle} />
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    required placeholder="votre@email.com" style={inputStyle} />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="text-muted" style={{ display: 'block', marginBottom: '6px', fontSize: '0.8125rem', fontWeight: 500 }}>Mot de passe</label>
                <div style={{ position: 'relative' }}>
                  <Lock style={iconStyle} />
                  <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    required placeholder="••••••••" style={inputStyle} />
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-primary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: loading ? 0.7 : 1 }}>
                {loading ? (
                  <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'block' }} />
                ) : (
                  <><LogIn size={16} /> Se connecter</>
                )}
              </button>

              <p className="text-muted" style={{ fontSize: '0.8125rem', textAlign: 'center', paddingTop: '0.25rem' }}>
                Pas encore de compte ?{' '}
                <Link href="/inscription" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Créer un compte</Link>
              </p>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
