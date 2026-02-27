'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { UserPlus, Mail, Lock, User, AlertCircle } from 'lucide-react';

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

      // Auto-login after registration
      const loginRes = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

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

  const inputStyle = {
    width: '100%', padding: '10px 12px 10px 38px', fontSize: '14px',
    background: 'var(--color-background)', border: '1px solid var(--color-border)',
    borderRadius: '8px', color: 'var(--color-foreground)', outline: 'none',
  };

  const iconStyle = {
    position: 'absolute' as const, left: '12px', top: '50%',
    transform: 'translateY(-50%)', color: 'var(--color-muted)',
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[420px] mx-auto px-6">
        <div className="text-center mb-8">
          <p className="font-amiri text-2xl text-gold mb-3">إنشاء حساب</p>
          <h1 className="text-3xl sm:text-4xl font-outfit font-bold tracking-tight mb-2">
            Créer un compte
          </h1>
          <p className="text-[15px] text-muted">
            Sauvegardez vos favoris et suivez votre progression.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-4">
          {error && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px',
              borderRadius: '8px', background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)', fontSize: '13px', color: '#ef4444',
            }}>
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="text-[13px] font-medium text-muted" style={{ display: 'block', marginBottom: '6px' }}>
              Nom
            </label>
            <div style={{ position: 'relative' }}>
              <User size={16} style={iconStyle} />
              <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}
                required placeholder="Votre nom" style={inputStyle} />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-[13px] font-medium text-muted" style={{ display: 'block', marginBottom: '6px' }}>
              Email
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={iconStyle} />
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                required placeholder="votre@email.com" style={inputStyle} />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-[13px] font-medium text-muted" style={{ display: 'block', marginBottom: '6px' }}>
              Mot de passe
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={iconStyle} />
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                required minLength={6} placeholder="6 caractères minimum" style={inputStyle} />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? (
              <span style={{
                width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)',
                borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', display: 'block',
              }} />
            ) : (
              <>
                <UserPlus size={16} />
                Créer mon compte
              </>
            )}
          </button>

          <p className="text-[13px] text-muted text-center" style={{ paddingTop: '4px' }}>
            Déjà un compte ?{' '}
            <Link href="/connexion" style={{ color: 'var(--color-gold)', textDecoration: 'underline' }}>
              Se connecter
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
