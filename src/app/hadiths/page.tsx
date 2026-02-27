'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Badge } from '@/components/Badge';
import { HADITH_COLLECTIONS } from '@/lib/hadith-api';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

// Hadiths célèbres pour le "Hadith du jour" — rotation déterministe par date
const DAILY_HADITHS = [
  { textAr: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى', textFr: 'Les actes ne valent que par les intentions, et chaque homme n\'aura que ce qu\'il a eu réellement l\'intention de faire.', source: 'Bukhari & Muslim', ref: 'Hadith 1' },
  { textAr: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ', textFr: 'Aucun d\'entre vous ne sera véritablement croyant tant qu\'il n\'aimera pas pour son frère ce qu\'il aime pour lui-même.', source: 'Bukhari & Muslim', ref: 'Nawawi 13' },
  { textAr: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ', textFr: 'Que celui qui croit en Allah et au Jour Dernier dise du bien ou qu\'il se taise.', source: 'Bukhari & Muslim', ref: 'Nawawi 15' },
  { textAr: 'لَا ضَرَرَ وَلَا ضِرَارَ', textFr: 'Pas de préjudice ni de réciproque de préjudice.', source: 'Ibn Majah & Ahmad', ref: 'Nawawi 32' },
  { textAr: 'الدِّينُ النَّصِيحَةُ', textFr: 'La religion, c\'est le bon conseil.', source: 'Muslim', ref: 'Nawawi 7' },
  { textAr: 'مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ', textFr: 'Fait partie de la perfection de l\'Islam de l\'homme qu\'il délaisse ce qui ne le concerne pas.', source: 'Tirmidhi', ref: 'Nawawi 12' },
  { textAr: 'الطُّهُورُ شَطْرُ الإِيمَانِ', textFr: 'La purification est la moitié de la foi.', source: 'Muslim', ref: 'Nawawi 23' },
  { textAr: 'إِنَّ اللَّهَ طَيِّبٌ لاَ يَقْبَلُ إِلاَّ طَيِّبًا', textFr: 'Allah est bon et n\'accepte que ce qui est bon.', source: 'Muslim', ref: 'Nawawi 10' },
  { textAr: 'ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ', textFr: 'Renonce à ce bas monde et Allah t\'aimera, et renonce à ce que les gens possèdent et les gens t\'aimeront.', source: 'Ibn Majah', ref: 'Nawawi 31' },
  { textAr: 'لَا تَغْضَبْ', textFr: 'Ne te mets pas en colère.', source: 'Bukhari', ref: 'Nawawi 16' },
  { textAr: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ', textFr: 'Le musulman est celui dont les musulmans sont à l\'abri de sa langue et de sa main.', source: 'Bukhari & Muslim', ref: 'Bukhari 10' },
  { textAr: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ', textFr: 'Celui qui emprunte un chemin à la recherche de la science, Allah lui facilite un chemin vers le Paradis.', source: 'Muslim', ref: 'Muslim 2699' },
  { textAr: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ', textFr: 'Le meilleur d\'entre vous est celui qui apprend le Coran et l\'enseigne.', source: 'Bukhari', ref: 'Bukhari 5027' },
  { textAr: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ', textFr: 'Ton sourire à ton frère est une aumône.', source: 'Tirmidhi', ref: 'Tirmidhi 1956' },
];

function getDailyHadith() {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  );
  return DAILY_HADITHS[dayOfYear % DAILY_HADITHS.length];
}

export default function HadithsPage() {
  const dailyHadith = useMemo(() => getDailyHadith(), []);

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={center}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الأحاديث النبوية
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              Les Hadiths Prophétiques.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '36rem', margin: '0 auto' }}>
              Explorez les grandes collections de hadiths authentiques — arabe et français.
            </p>
          </div>
        </ScrollReveal>

        {/* Hadith du jour */}
        <ScrollReveal delay={80}>
          <div className="surah-card" style={{
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            textAlign: 'center',
          }}>
            <p className="font-outfit font-semibold" style={{ fontSize: '0.6875rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
              Hadith du jour
            </p>
            <p className="font-amiri" style={{
              fontSize: 'clamp(1.375rem, 3vw, 1.875rem)',
              color: 'var(--color-gold)',
              lineHeight: 1.8,
              direction: 'rtl',
              marginBottom: '1.25rem',
            }}>
              {dailyHadith.textAr}
            </p>
            <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, var(--color-border), transparent)', marginBottom: '1.25rem' }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto 1rem' }}>
              {dailyHadith.textFr}
            </p>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
              {dailyHadith.source} — {dailyHadith.ref}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-features">
          {HADITH_COLLECTIONS.map((col, i) => (
            <ScrollReveal key={col.id} delay={i * 60}>
              <Link
                href={`/hadiths/${col.id}`}
                className="group surah-card"
                style={{
                  display: 'block',
                  padding: 'clamp(1.25rem, 2.5vw, 2rem)',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                {/* Arabic name */}
                <p className="font-amiri" style={{
                  fontSize: '1.75rem',
                  color: 'var(--color-gold)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.4,
                }}>
                  {col.nameAr}
                </p>

                {/* Latin name */}
                <h3 className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', marginBottom: '0.25rem' }}>
                  {col.name}
                </h3>

                {/* Author */}
                <p className="text-muted" style={{ fontSize: '0.8125rem', marginBottom: '1rem' }}>
                  {col.author}
                </p>

                {/* Badges */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <Badge variant="gold">{col.count.toLocaleString('fr-FR')} hadiths</Badge>
                  {col.grades ? (
                    <>
                      <Badge variant="emerald">{col.allSahih ? '✓ ' : ''}{col.grades.sahih}% Sahih</Badge>
                      {col.grades.hasan > 0 && <Badge variant="amber">{col.grades.hasan}% Hasan</Badge>}
                      {col.grades.daif > 0 && <Badge variant="rose">{col.grades.daif}% Da&apos;if</Badge>}
                    </>
                  ) : (
                    <Badge variant="default">Grades non disponibles</Badge>
                  )}
                </div>

                {/* Arrow */}
                <span className="text-muted group-hover:text-gold" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '0.8125rem', fontWeight: 500, marginTop: '1rem',
                  transition: 'color 0.2s',
                }}>
                  Explorer
                  <ArrowUpRight style={{ width: '14px', height: '14px' }} />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
