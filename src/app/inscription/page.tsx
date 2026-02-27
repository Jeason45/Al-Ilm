'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UserPlus, Mail, Lock, User, AlertCircle } from 'lucide-react';
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

export default function InscriptionPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue.');
        setLoading(false);
        return;
      }

      const loginRes = await signIn('credentials', { email, password, redirect: false });
      setLoading(false);

      if (loginRes?.error) {
        setError('Compte créé mais connexion échouée. Essayez de vous connecter.');
      } else {
        router.push('/');
        router.refresh();
      }
    } catch {
      setError('Erreur de connexion au serveur.');
      setLoading(false);
    }
  };

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '0.75rem', opacity: 0.5 }}>
              إنشاء حساب
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
              Créer un compte.
            </h1>
            <p className="text-muted" style={{ fontSize: '0.9375rem' }}>
              Sauvegardez vos favoris et suivez votre progression.
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
                <label htmlFor="name" className="text-muted" style={{ display: 'block', marginBottom: '6px', fontSize: '0.8125rem', fontWeight: 500 }}>Nom</label>
                <div style={{ position: 'relative' }}>
                  <User style={iconStyle} />
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                    required placeholder="Votre nom" style={inputStyle} />
                </div>
              </div>

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
                    required minLength={6} placeholder="6 caractères minimum" style={inputStyle} />
                </div>
              </div>

              <button type="submit" disabled={loading} className="btn-primary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: loading ? 0.7 : 1 }}>
                {loading ? (
                  <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'block' }} />
                ) : (
                  <><UserPlus size={16} /> Créer mon compte</>
                )}
              </button>

              <p className="text-muted" style={{ fontSize: '0.8125rem', textAlign: 'center', paddingTop: '0.25rem' }}>
                Déjà un compte ?{' '}
                <Link href="/connexion" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>Se connecter</Link>
              </p>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </div>
  );
}
