'use client';

import { useEffect, useState } from 'react';
import { BookOpen, Clock, Scroll, Lightbulb, Star, Award, Users, ArrowUp } from 'lucide-react';
import { SurateSection } from '@/components/SurateSection';
import { VersetCleCard } from '@/components/VersetCleCard';
import { Badge } from '@/components/Badge';
import { useReadingProgress } from '@/hooks/useReadingProgress';
import { TextReader, type TextSection } from '@/components/TextReader';
import type { Surah } from '@/data/types';

// Détecte les sous-titres : commence par un emoji, ou contient "(verset(s)" et fait < 150 chars
const emojiRegex = /^[\u{1F300}-\u{1F9FF}\u{2600}-\u{2B55}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}⭐🌿🔥🏔📚👑🎭💡🐝🌙🕌📿🌟⚖🎤🐜📖⛈🔗★✨🚢🕋🐄💔🌊🎯📜🕰🐪⚔🛡🌾🏛🌅🧭🗡🐫🏜🌳🐑💎🌧🐘🦅]/u;

function isSubTitle(line: string): boolean {
  if (emojiRegex.test(line)) return true;
  if (line.length < 150 && /\(versets?\s/i.test(line)) return true;
  return false;
}

function RichText({ text }: { text: string }) {
  const paragraphs = text.split('\n\n').filter(Boolean);
  if (paragraphs.length <= 1) return <p>{text}</p>;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {paragraphs.map((p, i) =>
        isSubTitle(p) ? (
          <p key={i} className="font-outfit" style={{
            fontWeight: 600,
            fontSize: '1.0625rem',
            marginTop: i > 0 ? '0.75rem' : 0,
            color: 'var(--color-foreground)',
          }}>{p}</p>
        ) : (
          <p key={i}>{p}</p>
        )
      )}
    </div>
  );
}

export function SurahContent({ numero }: { numero: number }) {
  const [surah, setSurah] = useState<Surah | null>(null);
  const [loading, setLoading] = useState(true);
  const { markAsRead } = useReadingProgress();

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const mod = await import(`@/data/sourates/${getFileName(numero)}`);
        if (!cancelled) { setSurah(mod.surah); setLoading(false); markAsRead(numero); }
      } catch { if (!cancelled) setLoading(false); }
    }
    load();
    return () => { cancelled = true; };
  }, [numero, markAsRead]);

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ opacity: 0.4 }}>
            <div style={{ height: '20px', width: '160px', background: 'var(--color-surface-elevated)', borderRadius: '8px', marginBottom: '1.5rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ height: '16px', width: '100%', background: 'var(--color-surface-elevated)', borderRadius: '8px' }} />
              <div style={{ height: '16px', width: '85%', background: 'var(--color-surface-elevated)', borderRadius: '8px' }} />
              <div style={{ height: '16px', width: '70%', background: 'var(--color-surface-elevated)', borderRadius: '8px' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!surah) {
    return (
      <div style={{ textAlign: 'center', padding: '8rem 0' }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-muted)' }}>Contenu non disponible pour cette sourate.</p>
      </div>
    );
  }

  const textSections: TextSection[] = [
    { title: 'Thème central', text: surah.themeCentral },
    { title: 'Contexte de révélation', text: surah.contexteRevelation },
    { title: 'Récits et histoires', text: surah.recitsEtHistoires },
    { title: 'Leçons à retenir', text: surah.leconsARetenir },
    { title: 'Versets clés', text: surah.versetsCles.map(v => `Verset ${v.numero}. ${v.traduction}. ${v.explication}`).join('. ') },
    { title: 'Mérites et récompenses', text: surah.meritesEtRecompenses },
  ];

  const stickyAnchors = [
    { id: 'theme-central', label: 'Thème' },
    { id: 'contexte', label: 'Contexte' },
    { id: 'recits', label: 'Récits' },
    { id: 'lecons', label: 'Leçons' },
    { id: 'versets-cles', label: 'Versets clés' },
    { id: 'merites', label: 'Mérites' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
      <TextReader sections={textSections} />

      {/* Sticky navigation bar */}
      <div style={{
        position: 'sticky', top: '64px', zIndex: 30,
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 12px', borderRadius: '10px',
        background: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        overflowX: 'auto', marginBottom: '-2rem',
      }}>
        <span style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', fontWeight: 600, whiteSpace: 'nowrap', marginRight: '4px' }}>Aller à :</span>
        {stickyAnchors.map((s) => (
          <button
            key={s.id}
            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            style={{
              padding: '5px 12px', fontSize: '0.75rem', fontWeight: 500,
              borderRadius: '6px', border: '1px solid var(--color-border)',
              background: 'transparent', color: 'var(--color-foreground)',
              cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(201, 168, 76, 0.1)'; e.currentTarget.style.color = 'var(--color-gold)'; e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-foreground)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
          >
            {s.label}
          </button>
        ))}

        <div style={{ width: '1px', height: '20px', background: 'var(--color-border)', flexShrink: 0, marginLeft: 'auto' }} />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '5px 10px', fontSize: '0.75rem', fontWeight: 500,
            borderRadius: '6px', border: '1px solid var(--color-border)',
            background: 'transparent', color: 'var(--color-muted)',
            cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.15s', flexShrink: 0,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--color-foreground)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-muted)'; }}
        >
          <ArrowUp style={{ width: '12px', height: '12px' }} />
        </button>
      </div>

      <SurateSection id="theme-central" title="Thème central" iconColor="var(--color-blue)" icon={<BookOpen style={{ width: '20px', height: '20px' }} />}>
        <RichText text={surah.themeCentral} />
      </SurateSection>

      {surah.prophetesmentionnes.length > 0 && (
        <div className="surah-card" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', padding: '1.25rem 1.5rem' }}>
          <Users style={{ width: '16px', height: '16px', color: 'var(--color-emerald)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginRight: '4px' }}>Prophètes mentionnés :</span>
          {surah.prophetesmentionnes.map(p => (
            <Badge key={p} variant="emerald">{p}</Badge>
          ))}
        </div>
      )}

      <SurateSection id="contexte" title="Contexte de révélation" iconColor="var(--color-teal)" icon={<Clock style={{ width: '20px', height: '20px' }} />}>
        <RichText text={surah.contexteRevelation} />
      </SurateSection>

      <SurateSection id="recits" title="Récits et histoires" iconColor="var(--color-purple)" icon={<Scroll style={{ width: '20px', height: '20px' }} />}>
        <RichText text={surah.recitsEtHistoires} />
      </SurateSection>

      <SurateSection id="lecons" title="Leçons à retenir" iconColor="var(--color-amber)" icon={<Lightbulb style={{ width: '20px', height: '20px' }} />}>
        <RichText text={surah.leconsARetenir} />
      </SurateSection>

      <SurateSection id="versets-cles" title="Versets clés" iconColor="var(--color-gold)" icon={<Star style={{ width: '20px', height: '20px' }} />}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
          {surah.versetsCles.map((v, i) => (<VersetCleCard key={i} verset={v} />))}
        </div>
      </SurateSection>

      <SurateSection id="merites" title="Mérites et récompenses" iconColor="var(--color-rose)" icon={<Award style={{ width: '20px', height: '20px' }} />}>
        <RichText text={surah.meritesEtRecompenses} />
      </SurateSection>

      {surah.lienSurateSuivante && (
        <div className="surah-card" style={{ padding: '1.25rem 1.5rem' }}>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)' }}>
            <span style={{ color: 'var(--color-gold)', fontWeight: 500 }}>Transition →</span>{' '}
            {surah.lienSurateSuivante}
          </p>
        </div>
      )}
    </div>
  );
}

function getFileName(numero: number): string {
  const names: Record<number, string> = {
    1:'001-al-fatiha',2:'002-al-baqara',3:'003-al-imran',4:'004-an-nisa',5:'005-al-maida',6:'006-al-anam',7:'007-al-araf',8:'008-al-anfal',9:'009-at-tawba',10:'010-yunus',11:'011-hud',12:'012-yusuf',13:'013-ar-rad',14:'014-ibrahim',15:'015-al-hijr',16:'016-an-nahl',17:'017-al-isra',18:'018-al-kahf',19:'019-maryam',20:'020-ta-ha',21:'021-al-anbiya',22:'022-al-hajj',23:'023-al-muminun',24:'024-an-nur',25:'025-al-furqan',26:'026-ash-shuara',27:'027-an-naml',28:'028-al-qasas',29:'029-al-ankabut',30:'030-ar-rum',31:'031-luqman',32:'032-as-sajda',33:'033-al-ahzab',34:'034-saba',35:'035-fatir',36:'036-ya-sin',37:'037-as-saffat',38:'038-sad',39:'039-az-zumar',40:'040-ghafir',41:'041-fussilat',42:'042-ash-shura',43:'043-az-zukhruf',44:'044-ad-dukhan',45:'045-al-jathiya',46:'046-al-ahqaf',47:'047-muhammad',48:'048-al-fath',49:'049-al-hujurat',50:'050-qaf',51:'051-adh-dhariyat',52:'052-at-tur',53:'053-an-najm',54:'054-al-qamar',55:'055-ar-rahman',56:'056-al-waqia',57:'057-al-hadid',58:'058-al-mujadila',59:'059-al-hashr',60:'060-al-mumtahina',61:'061-as-saff',62:'062-al-jumua',63:'063-al-munafiqun',64:'064-at-taghabun',65:'065-at-talaq',66:'066-at-tahrim',67:'067-al-mulk',68:'068-al-qalam',69:'069-al-haqqa',70:'070-al-maarij',71:'071-nuh',72:'072-al-jinn',73:'073-al-muzzammil',74:'074-al-muddathir',75:'075-al-qiyama',76:'076-al-insan',77:'077-al-mursalat',78:'078-an-naba',79:'079-an-naziat',80:'080-abasa',81:'081-at-takwir',82:'082-al-infitar',83:'083-al-mutaffifin',84:'084-al-inshiqaq',85:'085-al-buruj',86:'086-at-tariq',87:'087-al-ala',88:'088-al-ghashiya',89:'089-al-fajr',90:'090-al-balad',91:'091-ash-shams',92:'092-al-layl',93:'093-ad-duha',94:'094-ash-sharh',95:'095-at-tin',96:'096-al-alaq',97:'097-al-qadr',98:'098-al-bayyina',99:'099-az-zalzala',100:'100-al-adiyat',101:'101-al-qaria',102:'102-at-takathur',103:'103-al-asr',104:'104-al-humaza',105:'105-al-fil',106:'106-quraysh',107:'107-al-maun',108:'108-al-kawthar',109:'109-al-kafirun',110:'110-an-nasr',111:'111-al-masad',112:'112-al-ikhlas',113:'113-al-falaq',114:'114-an-nas',
  };
  return names[numero] || `${String(numero).padStart(3,'0')}-unknown`;
}
