'use client';

import { useState, useCallback, useMemo } from 'react';
import { Trophy, RotateCcw, ChevronRight, ChevronLeft, Check, X, Zap, BookOpen, Star, Users, BookMarked, Heart, Info, Eye, Swords, UserCheck, Sparkles, Atom, Shield, Clock, ScrollText } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import {
  generateQuestions,
  QUESTION_COUNTS,
  type QuizCategory,
  type Difficulty,
  type Question,
} from '@/lib/quiz-engine';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 'clamp(14px, 4vw, 24px)',
  paddingRight: 'clamp(14px, 4vw, 24px)',
};

/* ── Categories ── */
const CATEGORIES: {
  id: QuizCategory;
  label: string;
  labelAr: string;
  icon: typeof BookOpen;
  description: string;
}[] = [
  { id: 'sira', label: 'Sira du Prophète ﷺ', labelAr: 'السيرة النبوية', icon: Swords, description: 'Vie du Prophète, batailles, Hijra, événements clés' },
  { id: 'compagnons', label: 'Compagnons', labelAr: 'الصحابة', icon: UserCheck, description: 'Sahaba, leurs titres, mérites et rôles' },
  { id: 'revelation', label: 'Révélation & Coran', labelAr: 'الوحي والقرآن', icon: ScrollText, description: 'Compilation, sciences coraniques, écoles juridiques' },
  { id: 'prophetes', label: 'Prophètes', labelAr: 'الأنبياء', icon: Users, description: '25 Prophètes, titres et récits coraniques' },
  { id: 'femmes-islam', label: 'Femmes en Islam', labelAr: 'النساء في الإسلام', icon: Sparkles, description: 'Femmes citées dans le Coran et la Sunna' },
  { id: 'miracles', label: 'Miracles scientifiques', labelAr: 'الإعجاز العلمي', icon: Atom, description: 'Signes scientifiques dans le Coran et la Sunna' },
  { id: 'piliers', label: 'Piliers & Foi', labelAr: 'أركان الإسلام والإيمان', icon: Shield, description: "5 piliers de l'Islam et 6 piliers de la foi" },
  { id: 'akhira', label: 'Au-delà', labelAr: 'الآخرة', icon: Clock, description: 'Étapes de la vie après la mort' },
  { id: 'sourates', label: 'Sourates', labelAr: 'السور', icon: BookOpen, description: '114 sourates — noms, versets, thèmes, types' },
  { id: 'noms-allah', label: "Noms d'Allah", labelAr: 'أسماء الله', icon: Star, description: '99 Noms et leurs significations' },
  { id: 'glossaire', label: 'Glossaire', labelAr: 'المصطلحات', icon: BookMarked, description: 'Termes et vocabulaire islamique' },
  { id: 'invocations', label: 'Invocations', labelAr: 'الأدعية', icon: Heart, description: "Du'as, occasions et références" },
  { id: 'mixte', label: 'Mixte', labelAr: 'مختلط', icon: Zap, description: 'Toutes les catégories mélangées' },
];

const DIFFICULTIES: { id: Difficulty; label: string; description: string; color: string }[] = [
  { id: 'facile', label: 'Facile', description: '10 questions · types de base', color: 'var(--color-emerald)' },
  { id: 'moyen', label: 'Moyen', description: '15 questions · + arabe & détails', color: 'var(--color-gold)' },
  { id: 'difficile', label: 'Difficile', description: '20 questions · thèmes & références', color: 'var(--color-rose)' },
];

/* ── Page ── */
export default function QuizPage() {
  const [category, setCategory] = useState<QuizCategory | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const questionCount = difficulty ? QUESTION_COUNTS[difficulty] : 10;

  const startQuiz = useCallback((cat: QuizCategory, diff: Difficulty) => {
    setCategory(cat);
    setDifficulty(diff);
    const count = QUESTION_COUNTS[diff];
    setQuestions(generateQuestions(cat, count, diff));
    setCurrentIdx(0);
    setSelected(null);
    setScore(0);
    setAnswered(false);
    setFinished(false);
    setShowExplanation(false);
    setReviewMode(false);
    setAnswers([]);
  }, []);

  const handleAnswer = useCallback((optionIdx: number) => {
    if (answered) return;
    setSelected(optionIdx);
    setAnswered(true);
    setShowExplanation(true);
    setAnswers(prev => [...prev, optionIdx]);
    if (optionIdx === questions[currentIdx].correctIndex) setScore(prev => prev + 1);
  }, [answered, questions, currentIdx]);

  const nextQuestion = useCallback(() => {
    if (currentIdx + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIdx(prev => prev + 1);
      setSelected(null);
      setAnswered(false);
      setShowExplanation(false);
    }
  }, [currentIdx, questions.length]);

  const reset = useCallback(() => {
    setCategory(null);
    setDifficulty(null);
    setQuestions([]);
    setFinished(false);
    setReviewMode(false);
  }, []);

  const scorePercent = useMemo(() => Math.round((score / Math.max(questions.length, 1)) * 100), [score, questions.length]);

  const categoryBreakdown = useMemo(() => {
    if (!questions.length || !answers.length) return [];
    const map = new Map<string, { total: number; correct: number }>();
    questions.forEach((q, i) => {
      const cat = q.category;
      if (!map.has(cat)) map.set(cat, { total: 0, correct: 0 });
      const entry = map.get(cat)!;
      entry.total++;
      if (answers[i] === q.correctIndex) entry.correct++;
    });
    return Array.from(map.entries())
      .map(([cat, { total, correct }]) => {
        const info = CATEGORIES.find(c => c.id === cat);
        return { id: cat, label: info?.label ?? cat, correct, total, percent: Math.round((correct / total) * 100) };
      })
      .sort((a, b) => b.percent - a.percent);
  }, [questions, answers]);

  // ─── Step 1: Category selection ───
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
              <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '36rem', margin: '0 auto' }}>
                Testez vos connaissances sur la Sira, les Compagnons, la révélation, les miracles scientifiques, les Prophètes et bien plus.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="quiz-grid">
            {CATEGORIES.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.id} delay={i * 60}>
                  <button
                    onClick={() => setCategory(cat.id)}
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
                      Choisir <ChevronRight size={14} />
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

  // ─── Step 2: Difficulty selection ───
  if (!difficulty) {
    const catInfo = CATEGORIES.find(c => c.id === category);
    return (
      <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
        <div style={{ ...center, maxWidth: '500px' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="font-amiri text-gold" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', opacity: 0.5 }}>
                {catInfo?.labelAr}
              </p>
              <h2 className="font-outfit font-bold" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                {catInfo?.label}
              </h2>
              <p className="text-muted" style={{ fontSize: '0.9375rem' }}>
                Choisissez votre niveau de difficulté.
              </p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {DIFFICULTIES.map((diff, i) => (
              <ScrollReveal key={diff.id} delay={i * 60}>
                <button
                  onClick={() => startQuiz(category, diff.id)}
                  className="surah-card"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '1.25rem 1.5rem', cursor: 'pointer',
                    textAlign: 'left', border: 'none',
                  }}
                >
                  <div>
                    <p className="font-outfit font-semibold" style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>
                      <span style={{ color: diff.color, marginRight: '8px' }}>●</span>
                      {diff.label}
                    </p>
                    <p className="text-muted" style={{ fontSize: '0.8125rem' }}>{diff.description}</p>
                  </div>
                  <ChevronRight size={16} className="text-muted" />
                </button>
              </ScrollReveal>
            ))}
          </div>

          <button
            onClick={() => { setCategory(null); }}
            className="text-muted"
            style={{
              display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto',
              fontSize: '0.8125rem', background: 'none', border: 'none', cursor: 'pointer',
            }}
          >
            <ChevronLeft size={14} /> Retour aux catégories
          </button>
        </div>
      </div>
    );
  }

  // ─── Review mode ───
  if (reviewMode) {
    return (
      <div style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
        <div style={{ ...center, maxWidth: '650px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h2 className="font-outfit font-bold" style={{ fontSize: '1.5rem' }}>
              Révision — {score}/{questions.length}
            </h2>
            <button onClick={reset} className="btn-secondary" style={{ fontSize: '0.8125rem', padding: '6px 14px' }}>
              Catégories
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {questions.map((q, qIdx) => {
              const userAnswer = answers[qIdx];
              const isCorrect = userAnswer === q.correctIndex;
              return (
                <div
                  key={qIdx}
                  className="surah-card"
                  style={{
                    padding: '1.25rem',
                    borderColor: isCorrect ? 'rgba(52, 211, 153, 0.3)' : 'rgba(251, 113, 133, 0.3)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                    <span style={{
                      width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700,
                      background: isCorrect ? 'rgba(52, 211, 153, 0.15)' : 'rgba(251, 113, 133, 0.15)',
                      color: isCorrect ? 'var(--color-emerald)' : 'var(--color-rose)',
                    }}>
                      {isCorrect ? <Check size={12} /> : <X size={12} />}
                    </span>
                    <p className="font-outfit font-semibold" style={{ fontSize: '0.9375rem', lineHeight: 1.5 }}>
                      {q.question}
                    </p>
                  </div>

                  {/* Show user answer if wrong */}
                  {!isCorrect && userAnswer !== null && userAnswer !== undefined && (
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-rose)', marginBottom: '0.25rem' }}>
                      Votre réponse : {q.options[userAnswer]}
                    </p>
                  )}
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-emerald)', marginBottom: '0.75rem' }}>
                    Réponse correcte : {q.options[q.correctIndex]}
                  </p>

                  <div style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    background: 'rgba(201, 168, 76, 0.04)',
                    border: '1px solid rgba(201, 168, 76, 0.1)',
                  }}>
                    <p className="text-muted" style={{ fontSize: '0.8125rem', lineHeight: 1.6 }}>
                      <Info size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle', color: 'var(--color-gold)' }} />
                      {q.explanation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '2rem' }}>
            <button onClick={() => startQuiz(category, difficulty)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <RotateCcw size={16} /> Rejouer
            </button>
            <button onClick={reset} className="btn-secondary">
              Catégories
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Results ───
  if (finished) {
    const message = scorePercent >= 80
      ? 'Excellent ! Masha Allah !'
      : scorePercent >= 50
        ? 'Bien joué ! Continuez à apprendre.'
        : 'Continuez vos efforts, la connaissance est un chemin.';

    const diffInfo = DIFFICULTIES.find(d => d.id === difficulty);

    return (
      <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
        <div style={{ ...center, maxWidth: '550px', textAlign: 'center' }}>
          <ScrollReveal>
            <div className="surah-card" style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <p className="font-amiri text-gold" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {scorePercent >= 80 ? '🏆' : scorePercent >= 50 ? '👍' : '📖'}
              </p>
              <h2 className="font-outfit font-bold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {score} / {questions.length}
              </h2>
              <p className="text-muted" style={{ fontSize: '1.0625rem', marginBottom: '0.25rem' }}>
                {scorePercent}% de bonnes réponses
              </p>
              <p className="text-muted" style={{ fontSize: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ color: diffInfo?.color }}>●</span> {diffInfo?.label}
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

              {/* Category breakdown */}
              {categoryBreakdown.length > 1 && (
                <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
                  <p className="font-outfit font-semibold" style={{ fontSize: '0.8125rem', marginBottom: '0.75rem', textAlign: 'center', opacity: 0.7 }}>
                    Par catégorie
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {categoryBreakdown.map(cat => (
                      <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="text-muted" style={{ fontSize: '0.75rem', width: '90px', flexShrink: 0, textAlign: 'right' }}>
                          {cat.label}
                        </span>
                        <div style={{
                          flex: 1, height: '6px', borderRadius: '3px',
                          background: 'var(--color-surface-elevated)', overflow: 'hidden',
                        }}>
                          <div style={{
                            width: `${cat.percent}%`, height: '100%', borderRadius: '3px',
                            background: cat.percent >= 80 ? 'var(--color-emerald)' : cat.percent >= 50 ? 'var(--color-gold)' : 'var(--color-rose)',
                            transition: 'width 0.5s ease',
                          }} />
                        </div>
                        <span style={{
                          fontSize: '0.75rem', fontWeight: 600, width: '42px', flexShrink: 0,
                          color: cat.percent >= 80 ? 'var(--color-emerald)' : cat.percent >= 50 ? 'var(--color-gold)' : 'var(--color-rose)',
                        }}>
                          {cat.correct}/{cat.total}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button onClick={() => startQuiz(category, difficulty)} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <RotateCcw size={16} /> Rejouer
                  </button>
                  <button onClick={reset} className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Catégories
                  </button>
                </div>
                <button
                  onClick={() => setReviewMode(true)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '10px 20px', fontSize: '0.875rem', fontWeight: 600,
                    borderRadius: '10px', cursor: 'pointer',
                    border: '1px solid rgba(201, 168, 76, 0.2)',
                    background: 'rgba(201, 168, 76, 0.06)',
                    color: 'var(--color-gold)',
                  }}
                >
                  <Eye size={16} /> Réviser les réponses
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    );
  }

  // ─── Question ───
  const q = questions[currentIdx];
  if (!q) return null;

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ ...center, maxWidth: '600px' }}>
        {/* Progress */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span className="text-muted" style={{ fontSize: '0.8125rem' }}>
            Question {currentIdx + 1} / {questions.length}
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
            width: `${((currentIdx + 1) / questions.length) * 100}%`,
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

        {/* Explanation */}
        {answered && showExplanation && (
          <div style={{
            marginTop: '1rem', padding: '1rem 1.25rem', borderRadius: '12px',
            background: 'rgba(201, 168, 76, 0.04)',
            border: '1px solid rgba(201, 168, 76, 0.15)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Info size={16} style={{ color: 'var(--color-gold)', flexShrink: 0, marginTop: '2px' }} />
              <p className="text-muted" style={{ fontSize: '0.8625rem', lineHeight: 1.7 }}>
                {q.explanation}
              </p>
            </div>
          </div>
        )}

        {answered && (
          <button
            onClick={nextQuestion}
            className="btn-primary"
            style={{ width: '100%', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            {currentIdx + 1 >= questions.length ? (
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
