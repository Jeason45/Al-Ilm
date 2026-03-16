'use client';

import { useState } from 'react';
import Link from 'next/link';
import { zakatInfo, zakatFitrInfo, fidyaInfo, kaffarahInfo, associationsIslam } from '@/data/annexes/zakat';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ExternalLink } from 'lucide-react';

type ZakatTab = 'mal' | 'fitr' | 'fidya' | 'kaffarah';

const tabs: { id: ZakatTab; label: string; labelAr: string }[] = [
  { id: 'mal', label: 'Zakat al-Mal', labelAr: 'زكاة المال' },
  { id: 'fitr', label: 'Zakat al-Fitr', labelAr: 'زكاة الفطر' },
  { id: 'fidya', label: 'Fidya', labelAr: 'فدية' },
  { id: 'kaffarah', label: 'Kaffarah', labelAr: 'كفارة' },
];

export default function ZakatPage() {
  const [activeTab, setActiveTab] = useState<ZakatTab>('mal');

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <Link href="/pratique" className="back-link">
          <span className="back-link-icon">←</span> Pratique
        </Link>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
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

        {/* Tab navigation */}
        <ScrollReveal delay={120}>
          <div style={{ marginBottom: '1.5rem' }}>
            <h2 className="font-outfit font-bold" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Calculateurs
            </h2>
            <div style={{
              display: 'flex', gap: '0.5rem', overflowX: 'auto',
              paddingBottom: '4px', WebkitOverflowScrolling: 'touch',
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid',
                    borderColor: activeTab === tab.id ? 'var(--color-gold)' : 'var(--color-border)',
                    background: activeTab === tab.id ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                    color: activeTab === tab.id ? 'var(--color-gold)' : 'var(--color-muted)',
                    cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.8125rem',
                    fontWeight: activeTab === tab.id ? 600 : 400,
                    whiteSpace: 'nowrap', transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', gap: '6px',
                  }}
                >
                  {tab.label}
                  <span className="font-amiri" style={{ fontSize: '0.75rem', opacity: 0.5 }}>{tab.labelAr}</span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Tab content */}
        {activeTab === 'mal' && <ZakatMalCalculator />}
        {activeTab === 'fitr' && <ZakatFitrCalculator />}
        {activeTab === 'fidya' && <FidyaCalculator />}
        {activeTab === 'kaffarah' && <KaffarahCalculator />}

        {/* Associations */}
        <ScrollReveal delay={160}>
          <h2 className="font-outfit font-bold" style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: '2rem' }}>
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

/* ──────────────────────────────────────────────────────────────── */
/*  Zakat al-Mal                                                    */
/* ──────────────────────────────────────────────────────────────── */

function ZakatMalCalculator() {
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
    <ScrollReveal>
      <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '2rem' }}>
        <h3 className="font-outfit font-bold" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
          Calculateur de Zakat al-Mal
        </h3>
        <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
          Entrez vos biens pour calculer le montant de votre Zakat (2,5%). La Zakat est due si le patrimoine atteint le nisab et qu&apos;une année lunaire s&apos;est écoulée depuis.
        </p>
        <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Biens soumis : épargne, liquidités, or, argent (métal), actions, marchandises commerciales. Non soumis : résidence principale, véhicule personnel, outils de travail, effets personnels.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputField
            label="Prix du gramme d'or (€)"
            value={prixOr}
            onChange={setPrixOr}
            min={0.01}
            step={0.01}
            placeholder="70"
            hint={`Nisab actuel : ${nisabValeur.toLocaleString('fr-FR')} € (${zakatInfo.nisabOr}g d'or)`}
          />
          <InputField label="Épargne (comptes bancaires, liquidités) en €" value={epargne} onChange={setEpargne} />
          <InputField label="Valeur de l'or possédé en €" value={or} onChange={setOr} />
          <InputField label="Valeur de l'argent (métal) possédé en €" value={argent} onChange={setArgent} />
          <InputField label="Autres biens (actions, marchandises, etc.) en €" value={autres} onChange={setAutres} />

          <ResultCard>
            <ResultRow label="Total patrimoine" value={`${totalPatrimoine.toLocaleString('fr-FR')} €`} />
            <ResultRow
              label="Nisab atteint ?"
              value={totalPatrimoine >= nisabValeur ? 'Oui' : 'Non'}
              valueColor={totalPatrimoine >= nisabValeur ? 'var(--color-gold)' : 'var(--color-muted)'}
              small
            />
            <ResultTotal label="Zakat à verser" value={`${zakatDue.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`} />
          </ResultCard>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ──────────────────────────────────────────────────────────────── */
/*  Zakat al-Fitr                                                   */
/* ──────────────────────────────────────────────────────────────── */

function ZakatFitrCalculator() {
  const [personnes, setPersonnes] = useState('1');
  const [montant, setMontant] = useState(String(zakatFitrInfo.montantDefautEur));

  const nbPersonnes = Math.max(0, parseInt(personnes) || 0);
  const montantParPersonne = Math.max(0, parseFloat(montant) || 0);
  const total = nbPersonnes * montantParPersonne;

  return (
    <ScrollReveal>
      <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
        <h3 className="font-outfit font-bold" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
          Calculateur de Zakat al-Fitr
        </h3>
        <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
          {zakatFitrInfo.definition}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputField
            label="Nombre de personnes dans le foyer"
            value={personnes}
            onChange={setPersonnes}
            min={1}
            step={1}
            placeholder="1"
            hint="Vous-même + conjoint(e) + enfants + toute personne à votre charge"
          />
          <InputField
            label="Montant par personne (€)"
            value={montant}
            onChange={setMontant}
            min={1}
            step={0.5}
            placeholder={String(zakatFitrInfo.montantDefautEur)}
            hint={`Estimation France : ${zakatFitrInfo.montantDefautEur}€ à ${zakatFitrInfo.montantHautEur}€ selon les mosquées et associations`}
          />

          <ResultCard>
            <ResultRow label="Personnes" value={String(nbPersonnes)} small />
            <ResultRow label="Montant par personne" value={`${montantParPersonne.toLocaleString('fr-FR')} €`} small />
            <ResultTotal label="Zakat al-Fitr à verser" value={`${total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`} />
          </ResultCard>
        </div>
      </div>

      {/* Détails */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        <InfoCard title="Hadith de référence" content={zakatFitrInfo.hadith} />
        <InfoCard title="Quand la verser ?" content={zakatFitrInfo.quand} />
        <InfoCard title="Pour qui ?" content={zakatFitrInfo.pourQui} />
        <InfoCard title="Mesure (un sa')" content={zakatFitrInfo.mesure.description} />
        <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)' }}>
          <h4 className="font-outfit font-semibold" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
            Différences entre écoles
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>
              <strong style={{ color: 'var(--color-text)' }}>Hanafites :</strong> {zakatFitrInfo.mesure.hanafi}
            </p>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>
              <strong style={{ color: 'var(--color-text)' }}>Majorité :</strong> {zakatFitrInfo.mesure.majorite}
            </p>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>
              <strong style={{ color: 'var(--color-text)' }}>Versement en argent :</strong> {zakatFitrInfo.mesure.monetaire}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ──────────────────────────────────────────────────────────────── */
/*  Fidya                                                           */
/* ──────────────────────────────────────────────────────────────── */

function FidyaCalculator() {
  const [jours, setJours] = useState('');
  const [montantJour, setMontantJour] = useState(String(fidyaInfo.montantDefautEur));

  const nbJours = Math.max(0, parseInt(jours) || 0);
  const parJour = Math.max(0, parseFloat(montantJour) || 0);
  const total = nbJours * parJour;

  return (
    <ScrollReveal>
      <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
        <h3 className="font-outfit font-bold" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
          Calculateur de Fidya
        </h3>
        <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
          {fidyaInfo.definition}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputField
            label="Nombre de jours non jeûnés"
            value={jours}
            onChange={setJours}
            min={1}
            step={1}
            placeholder="0"
            hint="Le nombre de jours de Ramadan que vous ne pouvez définitivement pas rattraper"
          />
          <InputField
            label="Montant par jour (€)"
            value={montantJour}
            onChange={setMontantJour}
            min={1}
            step={0.5}
            placeholder={String(fidyaInfo.montantDefautEur)}
            hint="Équivalent d'un mudd de nourriture (~750 g), soit nourrir un pauvre un jour"
          />

          <ResultCard>
            <ResultRow label="Jours" value={String(nbJours)} small />
            <ResultRow label="Montant par jour" value={`${parJour.toLocaleString('fr-FR')} €`} small />
            <ResultTotal label="Fidya à verser" value={`${total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`} />
          </ResultCard>
        </div>
      </div>

      {/* Détails */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        <InfoCard title="Verset coranique" content={fidyaInfo.verset} />
        <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)' }}>
          <h4 className="font-outfit font-semibold" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
            Qui est concerné ?
          </h4>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {fidyaInfo.quiEstConcerne.map((item, i) => (
              <li key={i} style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>{item}</li>
            ))}
          </ul>
        </div>
        <InfoCard title="Mesure" content={fidyaInfo.mesure} />
        <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)', borderLeft: '3px solid rgba(201, 168, 76, 0.4)' }}>
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)', fontStyle: 'italic' }}>
            {fidyaInfo.note}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ──────────────────────────────────────────────────────────────── */
/*  Kaffarah                                                        */
/* ──────────────────────────────────────────────────────────────── */

function KaffarahCalculator() {
  const [jours, setJours] = useState('');
  const [montantRepas, setMontantRepas] = useState(String(kaffarahInfo.montantParRepasEur));

  const nbJours = Math.max(0, parseInt(jours) || 0);
  const parRepas = Math.max(0, parseFloat(montantRepas) || 0);
  const totalParJour = kaffarahInfo.nombrePauvres * parRepas;
  const total = nbJours * totalParJour;

  return (
    <ScrollReveal>
      <div className="surah-card" style={{ padding: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '1rem' }}>
        <h3 className="font-outfit font-bold" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>
          Calculateur de Kaffarah
        </h3>
        <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '1rem', lineHeight: 1.6 }}>
          {kaffarahInfo.definition}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <InputField
            label="Nombre de jours volontairement rompus"
            value={jours}
            onChange={setJours}
            min={1}
            step={1}
            placeholder="0"
            hint="Uniquement les jours rompus volontairement et sans excuse valable"
          />
          <InputField
            label="Coût d'un repas (€)"
            value={montantRepas}
            onChange={setMontantRepas}
            min={1}
            step={0.5}
            placeholder={String(kaffarahInfo.montantParRepasEur)}
            hint={`Estimation : ~${kaffarahInfo.montantParRepasEur}€ par repas (nourrir un pauvre)`}
          />

          <ResultCard>
            <ResultRow label="Jours rompus" value={String(nbJours)} small />
            <ResultRow label="Pauvres à nourrir par jour" value={String(kaffarahInfo.nombrePauvres)} small />
            <ResultRow label="Coût par jour" value={`${totalParJour.toLocaleString('fr-FR')} €`} small />
            <ResultTotal label="Kaffarah totale" value={`${total.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`} />
          </ResultCard>
        </div>
      </div>

      {/* Détails */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        <InfoCard title="Hadith de référence" content={kaffarahInfo.hadith} />

        {/* 3 options ordonnées */}
        <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)' }}>
          <h4 className="font-outfit font-semibold" style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: 'var(--color-gold)' }}>
            Les 3 options (dans l&apos;ordre)
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {kaffarahInfo.options.map((opt) => (
              <div key={opt.ordre} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                  background: 'rgba(201, 168, 76, 0.15)', color: 'var(--color-gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6875rem', fontWeight: 700, marginTop: '1px',
                }}>
                  {opt.ordre}
                </div>
                <div>
                  <p style={{ fontSize: '0.875rem', fontWeight: 500, marginBottom: '2px' }}>{opt.action}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)', lineHeight: 1.5 }}>{opt.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quand s'applique */}
        <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)' }}>
          <h4 className="font-outfit font-semibold" style={{ fontSize: '0.875rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>
            Quand la Kaffarah s&apos;applique
          </h4>
          <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            {kaffarahInfo.quand.map((item, i) => (
              <li key={i} style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)', borderLeft: '3px solid rgba(201, 168, 76, 0.4)' }}>
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)', fontStyle: 'italic' }}>
            {kaffarahInfo.note}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ──────────────────────────────────────────────────────────────── */
/*  Shared UI components                                            */
/* ──────────────────────────────────────────────────────────────── */

function InputField({ label, value, onChange, min = 0, step = 1, placeholder = '0', hint }: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  min?: number;
  step?: number;
  placeholder?: string;
  hint?: string;
}) {
  return (
    <div>
      <label style={{ fontSize: '0.8125rem', fontWeight: 500, display: 'block', marginBottom: '0.375rem' }}>
        {label}
      </label>
      <input
        type="number"
        min={min}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%', padding: '0.625rem 0.75rem', borderRadius: '8px',
          border: '1px solid var(--color-border)', background: 'var(--color-bg)',
          color: 'var(--color-text)', fontSize: '0.9375rem',
        }}
      />
      {hint && (
        <p className="text-muted" style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>{hint}</p>
      )}
    </div>
  );
}

function ResultCard({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginTop: '0.5rem', padding: '1rem 1.25rem', borderRadius: '10px', background: 'var(--color-card)', border: '1px solid var(--color-border)' }}>
      {children}
    </div>
  );
}

function ResultRow({ label, value, valueColor, small }: {
  label: string;
  value: string;
  valueColor?: string;
  small?: boolean;
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
      <span className="text-muted" style={{ fontSize: small ? '0.8125rem' : '0.875rem' }}>{label}</span>
      <span className={small ? '' : 'font-outfit font-semibold'} style={{
        fontSize: small ? '0.8125rem' : '1rem',
        fontWeight: small ? 500 : undefined,
        color: valueColor,
      }}>
        {value}
      </span>
    </div>
  );
}

function ResultTotal({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span className="font-outfit font-semibold" style={{ fontSize: '1rem' }}>{label}</span>
      <span className="font-outfit font-bold" style={{ fontSize: '1.5rem', color: 'var(--color-gold)' }}>
        {value}
      </span>
    </div>
  );
}

function InfoCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="surah-card" style={{ padding: 'clamp(1rem, 2vw, 1.25rem)' }}>
      <h4 className="font-outfit font-semibold" style={{ fontSize: '0.875rem', marginBottom: '0.375rem', color: 'var(--color-gold)' }}>
        {title}
      </h4>
      <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)' }}>{content}</p>
    </div>
  );
}
