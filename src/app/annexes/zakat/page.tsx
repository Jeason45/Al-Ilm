'use client';

import { useState } from 'react';
import Link from 'next/link';
import { zakatInfo, associationsIslam } from '@/data/annexes/zakat';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ExternalLink } from 'lucide-react';

export default function ZakatPage() {
  const [epargne, setEpargne] = useState('');
  const [or, setOr] = useState('');
  const [argent, setArgent] = useState('');
  const [autres, setAutres] = useState('');
  const [prixOr, setPrixOr] = useState('70');

  const totalPatrimoine =
    (parseFloat(epargne) || 0) +
    (parseFloat(or) || 0) +
    (parseFloat(argent) || 0) +
    (parseFloat(autres) || 0);

  const nisabValeur = zakatInfo.nisabOr * (parseFloat(prixOr) || 70);
  const zakatDue = totalPatrimoine >= nisabValeur ? totalPatrimoine * 0.025 : 0;

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <Link href="/annexes" className="back-link">
          <span className="back-link-icon">←</span> Annexes
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الزكاة
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Zakat &amp; Dons.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto', lineHeight: 1.7 }}>
              {zakatInfo.definition}
            </p>
          </div>
        </ScrollReveal>

        {/* Zakat vs Sadaqa */}
        <ScrollReveal delay={40}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
            <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--color-gold)' }}>Zakat</span> — Obligatoire
              </h3>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {zakatInfo.differenceZakatSadaqa.zakat.map((point, i) => (
                  <li key={i} style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--color-gold)' }}>Sadaqa</span> — Volontaire
              </h3>
              <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {zakatInfo.differenceZakatSadaqa.sadaqa.map((point, i) => (
                  <li key={i} style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Nisab info */}
        <ScrollReveal delay={80}>
          <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '2rem' }}>
            <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
              Le Nisab
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{zakatInfo.nisab}</p>
          </div>
        </ScrollReveal>

        {/* Bénéficiaires */}
        <ScrollReveal delay={100}>
          <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', marginBottom: '2rem' }}>
            <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
              Les 8 bénéficiaires
            </h3>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>{zakatInfo.beneficiaires}</p>
          </div>
        </ScrollReveal>

        {/* Calculateur */}
        <ScrollReveal delay={120}>
          <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '2rem' }}>
            <h3 className="font-outfit font-bold" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
              Calculateur de Zakat
            </h3>
            <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Entrez vos biens pour calculer le montant de votre Zakat (2,5%).
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 500, display: 'block', marginBottom: '0.375rem' }}>
                  Prix du gramme d&apos;or (€)
                </label>
                <input
                  type="number"
                  value={prixOr}
                  onChange={(e) => setPrixOr(e.target.value)}
                  placeholder="70"
                  style={{
                    width: '100%', padding: '0.625rem 0.75rem', borderRadius: '8px',
                    border: '1px solid var(--color-border)', background: 'var(--color-bg)',
                    color: 'var(--color-text)', fontSize: '0.9375rem',
                  }}
                />
                <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                  Nisab actuel : {nisabValeur.toLocaleString('fr-FR')} € ({zakatInfo.nisabOr}g d&apos;or)
                </p>
              </div>

              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 500, display: 'block', marginBottom: '0.375rem' }}>
                  Épargne (comptes bancaires, liquidités) en €
                </label>
                <input
                  type="number"
                  value={epargne}
                  onChange={(e) => setEpargne(e.target.value)}
                  placeholder="0"
                  style={{
                    width: '100%', padding: '0.625rem 0.75rem', borderRadius: '8px',
                    border: '1px solid var(--color-border)', background: 'var(--color-bg)',
                    color: 'var(--color-text)', fontSize: '0.9375rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 500, display: 'block', marginBottom: '0.375rem' }}>
                  Valeur de l&apos;or possédé en €
                </label>
                <input
                  type="number"
                  value={or}
                  onChange={(e) => setOr(e.target.value)}
                  placeholder="0"
                  style={{
                    width: '100%', padding: '0.625rem 0.75rem', borderRadius: '8px',
                    border: '1px solid var(--color-border)', background: 'var(--color-bg)',
                    color: 'var(--color-text)', fontSize: '0.9375rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 500, display: 'block', marginBottom: '0.375rem' }}>
                  Valeur de l&apos;argent (métal) possédé en €
                </label>
                <input
                  type="number"
                  value={argent}
                  onChange={(e) => setArgent(e.target.value)}
                  placeholder="0"
                  style={{
                    width: '100%', padding: '0.625rem 0.75rem', borderRadius: '8px',
                    border: '1px solid var(--color-border)', background: 'var(--color-bg)',
                    color: 'var(--color-text)', fontSize: '0.9375rem',
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8125rem', fontWeight: 500, display: 'block', marginBottom: '0.375rem' }}>
                  Autres biens (actions, marchandises, etc.) en €
                </label>
                <input
                  type="number"
                  value={autres}
                  onChange={(e) => setAutres(e.target.value)}
                  placeholder="0"
                  style={{
                    width: '100%', padding: '0.625rem 0.75rem', borderRadius: '8px',
                    border: '1px solid var(--color-border)', background: 'var(--color-bg)',
                    color: 'var(--color-text)', fontSize: '0.9375rem',
                  }}
                />
              </div>

              {/* Result */}
              <div style={{ marginTop: '0.5rem', padding: '1rem 1.25rem', borderRadius: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="text-muted" style={{ fontSize: '0.875rem' }}>Total patrimoine</span>
                  <span className="font-outfit font-semibold" style={{ fontSize: '1rem' }}>
                    {totalPatrimoine.toLocaleString('fr-FR')} €
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span className="text-muted" style={{ fontSize: '0.875rem' }}>Nisab atteint ?</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: totalPatrimoine >= nisabValeur ? 'var(--color-gold)' : 'var(--color-muted)' }}>
                    {totalPatrimoine >= nisabValeur ? 'Oui' : 'Non'}
                  </span>
                </div>
                <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="font-outfit font-semibold" style={{ fontSize: '1rem' }}>Zakat à verser</span>
                  <span className="font-outfit font-bold" style={{ fontSize: '1.5rem', color: 'var(--color-gold)' }}>
                    {zakatDue.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Associations */}
        <ScrollReveal delay={160}>
          <h2 className="font-outfit font-bold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Associations &amp; Dons
          </h2>
          <p className="text-muted" style={{ fontSize: '0.9375rem', marginBottom: '1rem', lineHeight: 1.7 }}>
            Voici quelques associations fiables pour verser votre Zakat ou faire des dons (Sadaqa).
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {associationsIslam.map((asso, i) => (
              <ScrollReveal key={asso.nom} delay={160 + i * 40}>
                <a
                  href={asso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surah-card"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(1.25rem, 2.5vw, 1.75rem)', textDecoration: 'none', color: 'inherit', gap: '1rem' }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                      <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{asso.nom}</h3>
                      <span style={{ fontSize: '0.6875rem', padding: '1px 8px', borderRadius: '999px', border: '1px solid var(--color-border)', color: 'var(--color-muted)' }}>
                        {asso.pays}
                      </span>
                    </div>
                    <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>{asso.description}</p>
                  </div>
                  <ExternalLink style={{ width: '16px', height: '16px', color: 'var(--color-muted)', flexShrink: 0 }} />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
