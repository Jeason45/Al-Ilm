'use client';

import { useState, useCallback, useMemo } from 'react';
import { Trophy, RotateCcw, ChevronRight, Check, X, Zap, BookOpen, Star, Users } from 'lucide-react';
import { surahsMeta } from '@/data/metadata';
import { nomsAllah } from '@/data/annexes/noms-allah';
import { prophetes } from '@/data/annexes/prophetes';

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

  // Type 1: Quel est le nom arabe de la sourate X ?
  for (const s of surahs.slice(0, 3)) {
    const wrong = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => x.nomArabe);
    const opts = shuffle([s.nomArabe, ...wrong]);
    questions.push({
      question: `Quel est le nom arabe de la sourate "${s.nomFrancais}" ?`,
      options: opts,
      correctIndex: opts.indexOf(s.nomArabe),
      category: 'sourates',
    });
  }

  // Type 2: Combien de versets dans la sourate X ?
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
      options: opts,
      correctIndex: opts.indexOf(correct),
      category: 'sourates',
    });
  }

  // Type 3: Mecquoise ou Médinoise ?
  for (const s of surahs.slice(6, 9)) {
    const correct = s.type === 'mecquoise' ? 'Mecquoise' : 'Médinoise';
    const opts = ['Mecquoise', 'Médinoise'];
    questions.push({
      question: `La sourate ${s.nom} est-elle mecquoise ou médinoise ?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      category: 'sourates',
    });
  }

  // Type 4: Quel numéro pour cette sourate ?
  for (const s of surahs.slice(9, 12)) {
    const correct = String(s.numero);
    const wrongs = pick(
      surahsMeta.filter(x => x.numero !== s.numero).map(x => String(x.numero)),
      3
    );
    const opts = shuffle([correct, ...wrongs]);
    questions.push({
      question: `Quel est le numéro de la sourate ${s.nom} ?`,
      options: opts,
      correctIndex: opts.indexOf(correct),
      category: 'sourates',
    });
  }

  return shuffle(questions);
}

function generateNomsAllahQuestions(): Question[] {
  const questions: Question[] = [];
  const noms = shuffle(nomsAllah);

  // Type 1: Quelle est la signification de X ?
  for (const n of noms.slice(0, 5)) {
    const wrong = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.signification);
    const opts = shuffle([n.signification, ...wrong]);
    questions.push({
      question: `Quelle est la signification de "${n.nom}" (${n.arabe}) ?`,
      options: opts,
      correctIndex: opts.indexOf(n.signification),
      category: 'noms-allah',
    });
  }

  // Type 2: Quel nom correspond à cette signification ?
  for (const n of noms.slice(5, 10)) {
    const wrong = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => n.arabe ? x.nom : x.nom);
    const opts = shuffle([n.nom, ...wrong]);
    questions.push({
      question: `Quel nom d'Allah signifie "${n.signification}" ?`,
      options: opts,
      correctIndex: opts.indexOf(n.nom),
      category: 'noms-allah',
    });
  }

  return shuffle(questions);
}

function generateProphetesQuestions(): Question[] {
  const questions: Question[] = [];
  const props = shuffle(prophetes);

  // Type 1: Quel est le titre de ce prophète ?
  for (const p of props.slice(0, 5)) {
    const wrong = pick(prophetes.filter(x => x.nom !== p.nom), 3).map(x => x.titre);
    const opts = shuffle([p.titre, ...wrong]);
    questions.push({
      question: `Quel est le titre du prophète ${p.nom} ?`,
      options: opts,
      correctIndex: opts.indexOf(p.titre),
      category: 'prophetes',
    });
  }

  // Type 2: Quel prophète porte ce titre ?
  for (const p of props.slice(5, 10)) {
    const wrong = pick(prophetes.filter(x => x.nom !== p.nom), 3).map(x => x.nom);
    const opts = shuffle([p.nom, ...wrong]);
    questions.push({
      question: `Quel prophète est connu comme "${p.titre}" ?`,
      options: opts,
      correctIndex: opts.indexOf(p.nom),
      category: 'prophetes',
    });
  }

  return shuffle(questions);
}

function generateQuestions(category: Category, count: number): Question[] {
  let pool: Question[] = [];

  if (category === 'sourates' || category === 'mixte') {
    pool = [...pool, ...generateSurahQuestions()];
  }
  if (category === 'noms-allah' || category === 'mixte') {
    pool = [...pool, ...generateNomsAllahQuestions()];
  }
  if (category === 'prophetes' || category === 'mixte') {
    pool = [...pool, ...generateProphetesQuestions()];
  }

  return shuffle(pool).slice(0, count);
}

/* ── Categories config ── */
const CATEGORIES: { id: Category; label: string; labelAr: string; icon: typeof BookOpen; description: string }[] = [
  { id: 'sourates', label: 'Sourates', labelAr: 'السور', icon: BookOpen, description: 'Noms, numéros, versets, types' },
  { id: 'noms-allah', label: "Noms d'Allah", labelAr: 'أسماء الله', icon: Star, description: '99 Noms et leurs significations' },
  { id: 'prophetes', label: 'Prophètes', labelAr: 'الأنبياء', icon: Users, description: '25 Prophètes et leurs titres' },
  { id: 'mixte', label: 'Mixte', labelAr: 'مختلط', icon: Zap, description: 'Toutes les catégories mélangées' },
];

const QUESTION_COUNT = 10;

/* ── Component ── */
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
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
  }, []);

  const handleAnswer = useCallback((optionIdx: number) => {
    if (answered) return;
    setSelected(optionIdx);
    setAnswered(true);
    if (optionIdx === questions[currentIdx].correctIndex) {
      setScore(prev => prev + 1);
    }
  }, [answered, questions, currentIdx]);

  const nextQuestion = useCallback(() => {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIdx(prev => prev + 1);
      setSelected(null);
      setAnswered(false);
    }
  }, [currentIdx, questions.length]);

  const reset = useCallback(() => {
    setCategory(null);
    setQuestions([]);
    setFinished(false);
  }, []);

  const scorePercent = useMemo(() => Math.round((score / QUESTION_COUNT) * 100), [score]);

  // Category selection screen
  if (!category) {
    return (
      <div className="pt-32 pb-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-amiri text-2xl text-gold mb-4">اختبار</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold tracking-tight mb-4">
              Quiz islamique.
            </h1>
            <p className="text-[17px] text-muted max-w-lg mx-auto">
              Testez vos connaissances sur le Coran, les Noms d&apos;Allah et les Prophètes.
            </p>
          </div>

          <div className="grid-features">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => startQuiz(cat.id)}
                  className="card card-hover p-6 text-left"
                  style={{ cursor: 'pointer', border: 'none', width: '100%' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: 'rgba(201, 168, 76, 0.1)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={20} style={{ color: 'var(--color-gold)' }} />
                    </div>
                    <div>
                      <p className="font-outfit font-semibold text-[15px]">{cat.label}</p>
                      <p className="font-amiri text-gold text-[14px]">{cat.labelAr}</p>
                    </div>
                  </div>
                  <p className="text-[13px] text-muted">{cat.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '12px', fontSize: '13px', color: 'var(--color-gold)' }}>
                    Commencer <ChevronRight size={14} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Results screen
  if (finished) {
    const emoji = scorePercent >= 80 ? '🏆' : scorePercent >= 50 ? '👍' : '📖';
    const message = scorePercent >= 80
      ? 'Excellent ! Masha Allah !'
      : scorePercent >= 50
        ? 'Bien joué ! Continuez à apprendre.'
        : 'Continuez vos efforts, la connaissance est un chemin.';

    return (
      <div className="pt-32 pb-24">
        <div className="max-w-[500px] mx-auto px-6 text-center">
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>{emoji}</div>
          <h2 className="text-3xl font-outfit font-bold mb-2">
            {score} / {QUESTION_COUNT}
          </h2>
          <p className="text-[17px] text-muted mb-2">{scorePercent}% de bonnes réponses</p>
          <p className="text-[15px] text-foreground/80 mb-8">{message}</p>

          <div style={{
            width: '100%', height: '8px', borderRadius: '4px',
            background: 'var(--color-card)', marginBottom: '32px', overflow: 'hidden',
          }}>
            <div style={{
              width: `${scorePercent}%`, height: '100%', borderRadius: '4px',
              background: scorePercent >= 80 ? 'var(--color-emerald)' : scorePercent >= 50 ? 'var(--color-gold)' : 'var(--color-rose)',
              transition: 'width 1s ease',
            }} />
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={() => startQuiz(category)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RotateCcw size={16} />
              Rejouer
            </button>
            <button onClick={reset} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Catégories
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  const q = questions[currentIdx];
  if (!q) return null;

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[600px] mx-auto px-6">
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span className="text-[13px] text-muted">
            Question {currentIdx + 1} / {QUESTION_COUNT}
          </span>
          <span className="text-[13px] font-medium" style={{ color: 'var(--color-gold)' }}>
            Score : {score}
          </span>
        </div>
        <div style={{
          width: '100%', height: '4px', borderRadius: '2px',
          background: 'var(--color-card)', marginBottom: '32px', overflow: 'hidden',
        }}>
          <div style={{
            width: `${((currentIdx + 1) / QUESTION_COUNT) * 100}%`,
            height: '100%', borderRadius: '2px', background: 'var(--color-gold)',
            transition: 'width 0.3s ease',
          }} />
        </div>

        {/* Question */}
        <div className="card p-6 mb-6">
          <p className="text-[17px] font-medium font-outfit leading-relaxed">
            {q.question}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            const isCorrect = idx === q.correctIndex;
            const isSelected = idx === selected;

            let borderColor = 'var(--color-border)';
            let bgColor = 'transparent';
            let icon = null;

            if (answered) {
              if (isCorrect) {
                borderColor = 'var(--color-emerald)';
                bgColor = 'rgba(16, 185, 129, 0.1)';
                icon = <Check size={16} style={{ color: 'var(--color-emerald)' }} />;
              } else if (isSelected && !isCorrect) {
                borderColor = 'var(--color-rose)';
                bgColor = 'rgba(244, 63, 94, 0.1)';
                icon = <X size={16} style={{ color: 'var(--color-rose)' }} />;
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                disabled={answered}
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px', width: '100%',
                  padding: '14px 16px', borderRadius: '12px', textAlign: 'left',
                  border: `1px solid ${borderColor}`, background: bgColor,
                  cursor: answered ? 'default' : 'pointer', fontSize: '15px',
                  color: 'var(--color-foreground)', transition: 'all 0.2s',
                }}
              >
                <span style={{
                  width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0,
                  border: `1px solid ${borderColor}`,
                  background: isSelected && answered ? bgColor : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '13px', fontWeight: 600, color: 'var(--color-muted)',
                }}>
                  {icon || String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Next button */}
        {answered && (
          <button
            onClick={nextQuestion}
            className="btn-primary"
            style={{ width: '100%', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {currentIdx + 1 >= QUESTION_COUNT ? (
              <>
                <Trophy size={16} />
                Voir les résultats
              </>
            ) : (
              <>
                Question suivante
                <ChevronRight size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
