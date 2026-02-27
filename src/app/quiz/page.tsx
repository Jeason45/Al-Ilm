'use client';

import { useState, useCallback, useMemo } from 'react';
import { Trophy, RotateCcw, ChevronRight, Check, X, Zap, BookOpen, Star, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { surahsMeta } from '@/data/metadata';
import { nomsAllah } from '@/data/annexes/noms-allah';
import { prophetes } from '@/data/annexes/prophetes';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

/* ── Types ── */
type Category = 'sourates' | 'noms-allah' | 'prophetes' | 'mixte';

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  category: Category;
}

/* ── Question generators ── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

function generateSurahQuestions(): Question[] {
  const questions: Question[] = [];
  const surahs = shuffle(surahsMeta);

  for (const s of surahs.slice(0, 3)) {
    const wrong = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => x.nomArabe);
    const opts = shuffle([s.nomArabe, ...wrong]);
    questions.push({
      question: `Quel est le nom arabe de la sourate "${s.nomFrancais}" ?`,
      options: opts, correctIndex: opts.indexOf(s.nomArabe), category: 'sourates',
    });
  }

  for (const s of surahs.slice(3, 6)) {
    const correct = String(s.nombreVersets);
    const wrongs = [
      String(s.nombreVersets + Math.floor(Math.random() * 20) + 5),
      String(Math.max(1, s.nombreVersets - Math.floor(Math.random() * 15) - 3)),
      String(s.nombreVersets + Math.floor(Math.random() * 40) + 10),
    ];
    const opts = shuffle([correct, ...wrongs]);
    questions.push({
      question: `Combien de versets contient la sourate ${s.nom} ?`,
      options: opts, correctIndex: opts.indexOf(correct), category: 'sourates',
    });
  }

  for (const s of surahs.slice(6, 9)) {
    const correct = s.type === 'mecquoise' ? 'Mecquoise' : 'Médinoise';
    const opts = ['Mecquoise', 'Médinoise'];
    questions.push({
      question: `La sourate ${s.nom} est-elle mecquoise ou médinoise ?`,
      options: opts, correctIndex: opts.indexOf(correct), category: 'sourates',
    });
  }

  for (const s of surahs.slice(9, 12)) {
    const correct = String(s.numero);
    const wrongs = pick(surahsMeta.filter(x => x.numero !== s.numero).map(x => String(x.numero)), 3);
    const opts = shuffle([correct, ...wrongs]);
    questions.push({
      question: `Quel est le numéro de la sourate ${s.nom} ?`,
      options: opts, correctIndex: opts.indexOf(correct), category: 'sourates',
    });
  }

  return shuffle(questions);
}

function generateNomsAllahQuestions(): Question[] {
  const questions: Question[] = [];
  const noms = shuffle(nomsAllah);

  for (const n of noms.slice(0, 5)) {
    const wrong = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.signification);
    const opts = shuffle([n.signification, ...wrong]);
    questions.push({
      question: `Quelle est la signification de "${n.nom}" (${n.arabe}) ?`,
      options: opts, correctIndex: opts.indexOf(n.signification), category: 'noms-allah',
    });
  }

  for (const n of noms.slice(5, 10)) {
    const wrong = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.nom);
    const opts = shuffle([n.nom, ...wrong]);
    questions.push({
      question: `Quel nom d'Allah signifie "${n.signification}" ?`,
      options: opts, correctIndex: opts.indexOf(n.nom), category: 'noms-allah',
    });
  }

  return shuffle(questions);
}

function generateProphetesQuestions(): Question[] {
  const questions: Question[] = [];
  const props = shuffle(prophetes);

  for (const p of props.slice(0, 5)) {
    const wrong = pick(prophetes.filter(x => x.nom !== p.nom), 3).map(x => x.titre);
    const opts = shuffle([p.titre, ...wrong]);
    questions.push({
      question: `Quel est le titre du prophète ${p.nom} ?`,
      options: opts, correctIndex: opts.indexOf(p.titre), category: 'prophetes',
    });
  }

  for (const p of props.slice(5, 10)) {
    const wrong = pick(prophetes.filter(x => x.nom !== p.nom), 3).map(x => x.nom);
    const opts = shuffle([p.nom, ...wrong]);
    questions.push({
      question: `Quel prophète est connu comme "${p.titre}" ?`,
      options: opts, correctIndex: opts.indexOf(p.nom), category: 'prophetes',
    });
  }

  return shuffle(questions);
}

function generateQuestions(category: Category, count: number): Question[] {
  let pool: Question[] = [];
  if (category === 'sourates' || category === 'mixte') pool = [...pool, ...generateSurahQuestions()];
  if (category === 'noms-allah' || category === 'mixte') pool = [...pool, ...generateNomsAllahQuestions()];
  if (category === 'prophetes' || category === 'mixte') pool = [...pool, ...generateProphetesQuestions()];
  return shuffle(pool).slice(0, count);
}

const CATEGORIES: { id: Category; label: string; labelAr: string; icon: typeof BookOpen; description: string }[] = [
  { id: 'sourates', label: 'Sourates', labelAr: 'السور', icon: BookOpen, description: 'Noms, numéros, versets, types' },
  { id: 'noms-allah', label: "Noms d'Allah", labelAr: 'أسماء الله', icon: Star, description: '99 Noms et leurs significations' },
  { id: 'prophetes', label: 'Prophètes', labelAr: 'الأنبياء', icon: Users, description: '25 Prophètes et leurs titres' },
  { id: 'mixte', label: 'Mixte', labelAr: 'مختلط', icon: Zap, description: 'Toutes les catégories mélangées' },
];

const QUESTION_COUNT = 10;

export default function QuizPage() {
  const [category, setCategory] = useState<Category | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);

  const startQuiz = useCallback((cat: Category) => {
    setCategory(cat);
    setQuestions(generateQuestions(cat, QUESTION_COUNT));
    setCurrentIdx(0); setSelected(null); setScore(0); setAnswered(false); setFinished(false);
  }, []);

  const handleAnswer = useCallback((optionIdx: number) => {
    if (answered) return;
    setSelected(optionIdx);
    setAnswered(true);
    if (optionIdx === questions[currentIdx].correctIndex) setScore(prev => prev + 1);
  }, [answered, questions, currentIdx]);

  const nextQuestion = useCallback(() => {
    if (currentIdx + 1 >= questions.length) setFinished(true);
    else { setCurrentIdx(prev => prev + 1); setSelected(null); setAnswered(false); }
  }, [currentIdx, questions.length]);

  const reset = useCallback(() => { setCategory(null); setQuestions([]); setFinished(false); }, []);

  const scorePercent = useMemo(() => Math.round((score / QUESTION_COUNT) * 100), [score]);

  // ── Category selection ──
  if (!category) {
    return (
      <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
        <div style={{ ...center, maxWidth: '900px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
                اختبار
              </p>
              <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
                Quiz islamique.
              </h1>
              <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto' }}>
                Testez vos connaissances sur le Coran, les Noms d&apos;Allah et les Prophètes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-features">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.id} delay={i * 60}>
                  <button
                    onClick={() => startQuiz(cat.id)}
                    className="group surah-card"
                    style={{ display: 'block', width: '100%', padding: 'clamp(1.25rem, 2.5vw, 2rem)', cursor: 'pointer', textAlign: 'left', border: 'none' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                        background: 'rgba(201, 168, 76, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={20} style={{ color: 'var(--color-gold)' }} />
                      </div>
                      <div>
                        <p className="font-outfit font-semibold" style={{ fontSize: '1.0625rem' }}>{cat.label}</p>
                        <p className="font-amiri text-gold" style={{ fontSize: '0.9375rem', opacity: 0.6 }}>{cat.labelAr}</p>
                      </div>
                    </div>
                    <p className="text-muted" style={{ fontSize: '0.8125rem', marginBottom: '1rem' }}>{cat.description}</p>
                    <span className="text-muted group-hover:text-gold" style={{
                      display: 'inline-flex', alignItems: 'center', gap: '4px',
                      fontSize: '0.8125rem', fontWeight: 500, transition: 'color 0.2s',
                    }}>
                      Commencer <ChevronRight size={14} />
                    </span>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // ── Results ──
  if (finished) {
    const message = scorePercent >= 80
      ? 'Excellent ! Masha Allah !'
      : scorePercent >= 50
        ? 'Bien joué ! Continuez à apprendre.'
        : 'Continuez vos efforts, la connaissance est un chemin.';

    return (
      <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
        <div style={{ ...center, maxWidth: '500px', textAlign: 'center' }}>
          <ScrollReveal>
            <div className="surah-card" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <p className="font-amiri text-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {scorePercent >= 80 ? '🏆' : scorePercent >= 50 ? '👍' : '📖'}
              </p>
              <h2 className="font-outfit font-bold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {score} / {QUESTION_COUNT}
              </h2>
              <p className="text-muted" style={{ fontSize: '1.0625rem', marginBottom: '0.5rem' }}>
                {scorePercent}% de bonnes réponses
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-foreground)', opacity: 0.8, marginBottom: '1.5rem' }}>
                {message}
              </p>

              {/* Progress bar */}
              <div style={{
                width: '100%', height: '6px', borderRadius: '3px',
                background: 'var(--color-surface-elevated)', marginBottom: '2rem', overflow: 'hidden',
              }}>
                <div style={{
                  width: `${scorePercent}%`, height: '100%', borderRadius: '3px',
                  background: scorePercent >= 80 ? 'var(--color-emerald)' : scorePercent >= 50 ? 'var(--color-gold)' : 'var(--color-rose)',
                  transition: 'width 1s ease',
                }} />
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button onClick={() => startQuiz(category)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RotateCcw size={16} /> Rejouer
                </button>
                <button onClick={reset} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Catégories
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    );
  }

  // ── Question ──
  const q = questions[currentIdx];
  if (!q) return null;

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ ...center, maxWidth: '600px' }}>
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span className="text-muted" style={{ fontSize: '0.8125rem' }}>
            Question {currentIdx + 1} / {QUESTION_COUNT}
          </span>
          <span className="font-outfit font-semibold" style={{ fontSize: '0.8125rem', color: 'var(--color-gold)' }}>
            Score : {score}
          </span>
        </div>
        <div style={{
          width: '100%', height: '3px', borderRadius: '2px',
          background: 'var(--color-surface-elevated)', marginBottom: '2rem', overflow: 'hidden',
        }}>
          <div style={{
            width: `${((currentIdx + 1) / QUESTION_COUNT) * 100}%`,
            height: '100%', borderRadius: '2px', background: 'var(--color-gold)', transition: 'width 0.3s ease',
          }} />
        </div>

        {/* Question card */}
        <div className="surah-card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
          <p className="font-outfit font-semibold" style={{ fontSize: '1.0625rem', lineHeight: 1.6 }}>
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correctIndex;
            const isSelected = idx === selected;

            let borderColor = 'var(--color-border)';
            let bgColor = 'transparent';
            let icon = null;

            if (answered) {
              if (isCorrect) {
                borderColor = 'var(--color-emerald)';
                bgColor = 'rgba(52, 211, 153, 0.08)';
                icon = <Check size={16} style={{ color: 'var(--color-emerald)' }} />;
              } else if (isSelected && !isCorrect) {
                borderColor = 'var(--color-rose)';
                bgColor = 'rgba(251, 113, 133, 0.08)';
                icon = <X size={16} style={{ color: 'var(--color-rose)' }} />;
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                className="surah-card"
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px', width: '100%',
                  padding: '1rem 1.25rem', textAlign: 'left', cursor: answered ? 'default' : 'pointer',
                  borderColor, background: bgColor, transition: 'all 0.2s',
                }}
              >
                <span style={{
                  width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                  border: `1px solid ${borderColor}`, background: answered && (isCorrect || isSelected) ? bgColor : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-muted)',
                }}>
                  {icon || String.fromCharCode(65 + idx)}
                </span>
                <span style={{ fontSize: '0.9375rem' }}>{opt}</span>
              </button>
            );
          })}
        </div>

        {answered && (
          <button
            onClick={nextQuestion}
            className="btn-primary"
            style={{ width: '100%', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {currentIdx + 1 >= QUESTION_COUNT ? (
              <><Trophy size={16} /> Voir les résultats</>
            ) : (
              <>Question suivante <ChevronRight size={16} /></>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
