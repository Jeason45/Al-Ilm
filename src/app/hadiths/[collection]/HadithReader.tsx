'use client';

import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Search, ArrowUp, X, Info, Copy, Check } from 'lucide-react';
import {
  getCollectionSections,
  fetchSectionHadiths,
  fetchFullCollection,
  isSmallCollection,
  type Hadith,
  type HadithSection,
} from '@/lib/hadith-api';
import { GradeBadge, getPrimaryGrade, getGradeLevel } from '@/components/GradeBadge';

interface HadithReaderProps {
  collectionId: string;
  allSahih: boolean;
}

type GradeFilter = 'all' | 'sahih' | 'hasan' | 'daif';

const INITIAL_DISPLAY = 30;
const LOAD_MORE_STEP = 30;

export function HadithReader({ collectionId, allSahih }: HadithReaderProps) {
  const isSmall = isSmallCollection(collectionId);

  // State
  const [sections, setSections] = useState<HadithSection[]>([]);
  const [currentSection, setCurrentSection] = useState<number>(0);
  const [hadiths, setHadiths] = useState<Hadith[]>([]);
  const [loading, setLoading] = useState(true);
  const [hadithsLoading, setHadithsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [gradeFilter, setGradeFilter] = useState<GradeFilter>('all');
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY);
  const [legendOpen, setLegendOpen] = useState(false);
  const [globalSearch, setGlobalSearch] = useState(false);
  const [allHadiths, setAllHadiths] = useState<Hadith[]>([]);
  const [globalLoading, setGlobalLoading] = useState(false);

  // Cache for loaded sections
  const sectionCache = useRef<Map<number, Hadith[]>>(new Map());

  // Load sections (statique) or full collection on mount
  useEffect(() => {
    let cancelled = false;

    if (isSmall) {
      setLoading(true);
      setError(null);
      fetchFullCollection(collectionId)
        .then((data) => {
          if (cancelled) return;
          setHadiths(data);
          setLoading(false);
        })
        .catch(() => {
          if (cancelled) return;
          setError('Impossible de charger les hadiths. Vérifiez votre connexion internet.');
          setLoading(false);
        });
    } else {
      // Sections chargées instantanément (données statiques)
      const staticSections = getCollectionSections(collectionId);
      setSections(staticSections);
      setLoading(false);
      if (staticSections.length > 0) {
        setCurrentSection(staticSections[0].number);
      }
    }

    return () => { cancelled = true; };
  }, [collectionId, isSmall]);

  // Load hadiths when section changes (non-small collections)
  const loadSection = useCallback(async (sectionNum: number) => {
    if (isSmall || sectionNum === 0) return;

    // Check cache
    const cached = sectionCache.current.get(sectionNum);
    if (cached) {
      setHadiths(cached);
      setDisplayCount(INITIAL_DISPLAY);
      return;
    }

    const section = sections.find((s) => s.number === sectionNum);
    if (!section) return;

    setHadithsLoading(true);
    try {
      const data = await fetchSectionHadiths(collectionId, sectionNum, section.name);
      sectionCache.current.set(sectionNum, data);
      setHadiths(data);
      setDisplayCount(INITIAL_DISPLAY);
    } catch {
      setHadiths([]);
    } finally {
      setHadithsLoading(false);
    }
  }, [collectionId, sections, isSmall]);

  useEffect(() => {
    if (currentSection > 0 && !isSmall) {
      loadSection(currentSection);
    }
  }, [currentSection, loadSection, isSmall]);

  // Global search: fetch all hadiths when toggled
  const loadAllHadiths = useCallback(async () => {
    if (allHadiths.length > 0 || isSmall) return;
    setGlobalLoading(true);
    try {
      const data = await fetchFullCollection(collectionId);
      setAllHadiths(data);
    } catch {
      // fallback: stay on section search
    } finally {
      setGlobalLoading(false);
    }
  }, [collectionId, allHadiths.length, isSmall]);

  const toggleGlobalSearch = () => {
    if (!globalSearch && allHadiths.length === 0) loadAllHadiths();
    setGlobalSearch(!globalSearch);
    setDisplayCount(INITIAL_DISPLAY);
  };

  // Filtered hadiths
  const sourceHadiths = (!isSmall && globalSearch) ? allHadiths : hadiths;

  const filteredHadiths = useMemo(() => {
    let result = sourceHadiths;

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (h) =>
          h.textFr.toLowerCase().includes(q) ||
          h.textAr.includes(searchQuery) ||
          String(h.number).includes(q)
      );
    }

    // Grade filter (only if not allSahih)
    if (!allSahih && gradeFilter !== 'all') {
      result = result.filter((h) => {
        const primary = getPrimaryGrade(h.grades);
        if (!primary) return gradeFilter === 'sahih';
        const level = getGradeLevel(primary);
        return level === gradeFilter;
      });
    }

    return result;
  }, [sourceHadiths, searchQuery, gradeFilter, allSahih]);

  const displayedHadiths = filteredHadiths.slice(0, displayCount);
  const hasMore = displayCount < filteredHadiths.length;

  // Section navigation
  const currentSectionIndex = sections.findIndex((s) => s.number === currentSection);
  const currentSectionData = sections[currentSectionIndex];
  const hasPrev = currentSectionIndex > 0;
  const hasNext = currentSectionIndex < sections.length - 1;

  const goToPrev = () => {
    if (hasPrev) setCurrentSection(sections[currentSectionIndex - 1].number);
  };
  const goToNext = () => {
    if (hasNext) setCurrentSection(sections[currentSectionIndex + 1].number);
  };

  // Loading skeleton
  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="surah-card" style={{ padding: '1.5rem', opacity: 0.4 }}>
            <div style={{ height: '14px', width: '30%', background: 'var(--color-surface-elevated)', borderRadius: '6px', marginBottom: '1rem' }} />
            <div style={{ height: '32px', width: '70%', background: 'var(--color-surface-elevated)', borderRadius: '8px', marginBottom: '1rem', marginLeft: 'auto' }} />
            <div style={{ height: '14px', width: '90%', background: 'var(--color-surface-elevated)', borderRadius: '6px', marginBottom: '0.75rem' }} />
            <div style={{ height: '14px', width: '80%', background: 'var(--color-surface-elevated)', borderRadius: '6px' }} />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="surah-card" style={{ padding: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>{error}</p>
        <button onClick={() => window.location.reload()} className="btn-secondary" style={{ marginTop: '1rem' }}>
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Controls bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {/* Section dropdown (non-small only) */}
        {!isSmall && sections.length > 0 && (
          <div style={{ position: 'relative', flex: '1 1 auto', minWidth: '200px' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="surah-card"
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 16px', fontSize: '0.8125rem', cursor: 'pointer',
                border: 'none', background: 'var(--color-surface-elevated)',
                color: 'var(--color-foreground)', borderRadius: '8px',
                width: '100%', overflow: 'hidden',
              }}
            >
              <span style={{ color: 'var(--color-muted)', flexShrink: 0 }}>Livre :</span>
              <span style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentSectionData ? `${currentSectionData.number}. ${currentSectionData.name}` : 'Sélectionner...'}
              </span>
              <ChevronDown style={{
                width: '14px', height: '14px', color: 'var(--color-muted)',
                transform: dropdownOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s', marginLeft: 'auto', flexShrink: 0,
              }} />
            </button>
            {dropdownOpen && (
              <>
                <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setDropdownOpen(false)} />
                <div style={{
                  position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 50,
                  maxHeight: '320px', overflowY: 'auto',
                  background: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)',
                  borderRadius: '10px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                }}>
                  {sections.map((s) => (
                    <button
                      key={s.number}
                      onClick={() => { setCurrentSection(s.number); setDropdownOpen(false); }}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        width: '100%', textAlign: 'left', padding: '10px 16px', fontSize: '0.8125rem',
                        border: 'none', cursor: 'pointer', transition: 'background 0.15s',
                        background: s.number === currentSection ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                        color: s.number === currentSection ? 'var(--color-gold)' : 'var(--color-foreground)',
                        fontWeight: s.number === currentSection ? 600 : 400,
                      }}
                      onMouseEnter={(e) => { if (s.number !== currentSection) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                      onMouseLeave={(e) => { if (s.number !== currentSection) e.currentTarget.style.background = 'transparent'; }}
                    >
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {s.number}. {s.name}
                      </span>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', flexShrink: 0, marginLeft: '8px' }}>
                        {s.count}
                      </span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Search input */}
        <div style={{ position: 'relative', flex: '0 1 240px', minWidth: '160px' }}>
          <Search style={{
            position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
            width: '14px', height: '14px', color: 'var(--color-muted)', pointerEvents: 'none',
          }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setDisplayCount(INITIAL_DISPLAY); }}
            placeholder="Rechercher..."
            style={{
              width: '100%', padding: '10px 36px 10px 36px', fontSize: '0.8125rem',
              borderRadius: '8px', border: '1px solid var(--color-border)',
              background: 'var(--color-surface-elevated)', color: 'var(--color-foreground)',
              outline: 'none',
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '18px', height: '18px', borderRadius: '50%', border: 'none',
                background: 'rgba(255,255,255,0.1)', color: 'var(--color-muted)', cursor: 'pointer',
              }}
            >
              <X style={{ width: '10px', height: '10px' }} />
            </button>
          )}
        </div>

        {/* Global search toggle (large collections only) */}
        {!isSmall && (
          <button
            onClick={toggleGlobalSearch}
            style={{
              padding: '8px 14px', fontSize: '0.75rem', fontWeight: 500,
              borderRadius: '6px', cursor: 'pointer', transition: 'all 0.15s',
              border: globalSearch ? '1px solid rgba(201, 168, 76, 0.3)' : '1px solid var(--color-border)',
              background: globalSearch ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
              color: globalSearch ? 'var(--color-gold)' : 'var(--color-muted)',
              flexShrink: 0, whiteSpace: 'nowrap',
            }}
          >
            {globalLoading ? 'Chargement...' : globalSearch ? 'Recherche globale' : 'Toute la collection'}
          </button>
        )}

        {/* Grade filter (only for non-allSahih collections) */}
        {!allSahih && (
          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            {([
              { value: 'all', label: 'Tous' },
              { value: 'sahih', label: 'Sahih' },
              { value: 'hasan', label: 'Hasan' },
              { value: 'daif', label: "Da'if" },
            ] as { value: GradeFilter; label: string }[]).map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setGradeFilter(opt.value); setDisplayCount(INITIAL_DISPLAY); }}
                style={{
                  padding: '8px 14px', fontSize: '0.75rem', fontWeight: 500,
                  borderRadius: '6px', cursor: 'pointer', transition: 'all 0.15s',
                  border: gradeFilter === opt.value ? '1px solid rgba(201, 168, 76, 0.3)' : '1px solid var(--color-border)',
                  background: gradeFilter === opt.value ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                  color: gradeFilter === opt.value ? 'var(--color-gold)' : 'var(--color-muted)',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Legend toggle */}
        <button
          onClick={() => setLegendOpen(!legendOpen)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            padding: '8px 12px', fontSize: '0.75rem', fontWeight: 500,
            borderRadius: '6px', cursor: 'pointer', transition: 'all 0.15s',
            border: legendOpen ? '1px solid rgba(201, 168, 76, 0.3)' : '1px solid var(--color-border)',
            background: legendOpen ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
            color: legendOpen ? 'var(--color-gold)' : 'var(--color-muted)',
            flexShrink: 0,
          }}
        >
          <Info style={{ width: '13px', height: '13px' }} />
          Grades
        </button>
      </div>

      {/* Grade legend */}
      {legendOpen && (
        <div style={{
          marginBottom: '1.25rem', padding: '1rem 1.25rem', borderRadius: '10px',
          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
          fontSize: '0.8125rem', lineHeight: 1.7,
        }}>
          <p className="font-outfit font-semibold" style={{ fontSize: '0.8125rem', marginBottom: '0.75rem', color: 'var(--color-foreground)' }}>
            Classification des hadiths (par fiabilité)
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, color: 'var(--color-emerald)', fontWeight: 600 }}>1. Sahih</span>
              <span style={{ color: 'var(--color-muted)' }}>— « Authentique ». Chaîne de transmission continue, narrateurs fiables et de bonne mémoire, aucune contradiction ni défaut caché. C&apos;est le plus haut degré de fiabilité.</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, color: 'var(--color-amber)', fontWeight: 600 }}>2. Hasan</span>
              <span style={{ color: 'var(--color-muted)' }}>— « Bon ». Similaire au Sahih mais un degré en dessous — un narrateur a une mémoire légèrement moins solide, par exemple. Reste une preuve valide en jurisprudence.</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, color: 'var(--color-rose)', fontWeight: 600 }}>3. Da&apos;if</span>
              <span style={{ color: 'var(--color-muted)' }}>— « Faible ». La chaîne de transmission est incomplète, un narrateur est peu fiable, ou le texte présente des anomalies. Non utilisé comme preuve juridique.</span>
            </div>
          </div>
          {allSahih && (
            <p style={{ marginTop: '0.75rem', padding: '0.625rem 0.75rem', borderRadius: '6px', background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.12)', color: 'var(--color-muted)', fontSize: '0.75rem' }}>
              <span style={{ color: 'var(--color-emerald)', fontWeight: 600 }}>Sahih (consensus)</span> — Les savants sont unanimes : chaque hadith de cette collection est authentique. Aucun grade individuel n&apos;est nécessaire.
            </p>
          )}
          {!allSahih && (
            <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--color-muted)', opacity: 0.7 }}>
              Les grades sont attribués par des savants spécialistes (Al-Albani, Shuaib Al-Arnaut, etc.). Un même hadith peut recevoir des évaluations différentes.
            </p>
          )}
        </div>
      )}

      {/* Sticky bar (non-small collections only) */}
      {!isSmall && currentSectionData && (
        <div style={{
          position: 'sticky', top: '64px', zIndex: 30,
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '8px 12px', marginBottom: '1rem', borderRadius: '10px',
          background: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)',
          backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        }}>
          {/* Prev */}
          <button
            onClick={goToPrev}
            disabled={!hasPrev}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '28px', height: '28px', borderRadius: '6px',
              border: '1px solid var(--color-border)', background: 'transparent',
              color: hasPrev ? 'var(--color-foreground)' : 'var(--color-border)',
              cursor: hasPrev ? 'pointer' : 'default', flexShrink: 0,
            }}
          >
            <ChevronLeft style={{ width: '14px', height: '14px' }} />
          </button>

          {/* Section indicator */}
          <span style={{
            flex: 1, fontSize: '0.75rem', fontWeight: 600,
            color: 'var(--color-foreground)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            textAlign: 'center',
          }}>
            Livre {currentSectionData.number} — {currentSectionData.count} hadith{currentSectionData.count > 1 ? 's' : ''}
          </span>

          {/* Next */}
          <button
            onClick={goToNext}
            disabled={!hasNext}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '28px', height: '28px', borderRadius: '6px',
              border: '1px solid var(--color-border)', background: 'transparent',
              color: hasNext ? 'var(--color-foreground)' : 'var(--color-border)',
              cursor: hasNext ? 'pointer' : 'default', flexShrink: 0,
            }}
          >
            <ChevronRight style={{ width: '14px', height: '14px' }} />
          </button>

          {/* Divider + scroll to top */}
          <div style={{ width: '1px', height: '20px', background: 'var(--color-border)', flexShrink: 0 }} />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '28px', height: '28px', borderRadius: '6px',
              border: '1px solid var(--color-border)', background: 'transparent',
              color: 'var(--color-muted)', cursor: 'pointer', flexShrink: 0,
              transition: 'all 0.15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--color-foreground)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-muted)'; }}
          >
            <ArrowUp style={{ width: '12px', height: '12px' }} />
          </button>
        </div>
      )}

      {/* Result count */}
      <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '1rem' }}>
        {filteredHadiths.length} hadith{filteredHadiths.length > 1 ? 's' : ''}
        {searchQuery && ` pour « ${searchQuery} »`}
      </p>

      {/* Hadiths loading */}
      {hadithsLoading ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="surah-card" style={{ padding: '1.5rem', opacity: 0.4 }}>
              <div style={{ height: '14px', width: '30%', background: 'var(--color-surface-elevated)', borderRadius: '6px', marginBottom: '1rem' }} />
              <div style={{ height: '32px', width: '70%', background: 'var(--color-surface-elevated)', borderRadius: '8px', marginBottom: '1rem', marginLeft: 'auto' }} />
              <div style={{ height: '14px', width: '90%', background: 'var(--color-surface-elevated)', borderRadius: '6px' }} />
            </div>
          ))}
        </div>
      ) : displayedHadiths.length === 0 ? (
        <div className="surah-card" style={{ padding: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-muted)' }}>Aucun hadith trouvé.</p>
          {searchQuery && (
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '0.5rem', opacity: 0.6 }}>
              Essayez un autre terme de recherche.
            </p>
          )}
        </div>
      ) : (
        <>
          {/* Hadith cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {displayedHadiths.map((hadith) => (
              <HadithCard key={hadith.number} hadith={hadith} allSahih={allSahih} />
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                onClick={() => setDisplayCount((c) => c + LOAD_MORE_STEP)}
                className="btn-secondary"
                style={{ fontSize: '0.8125rem' }}
              >
                Afficher plus ({filteredHadiths.length - displayCount} restants)
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ── Hadith Card ──

function HadithCard({ hadith, allSahih }: { hadith: Hadith; allSahih: boolean }) {
  const primaryGrade = getPrimaryGrade(hadith.grades);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const ref = hadith.reference ? `\n\n— Livre ${hadith.reference.book}, Hadith ${hadith.reference.hadith}` : '';
    const text = `${hadith.textAr}\n\n${hadith.textFr}${ref}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="surah-card" style={{ padding: '1.5rem' }}>
      {/* Header: number + grade + copy */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          minWidth: '28px', height: '28px', padding: '0 8px', borderRadius: '6px',
          background: 'rgba(201, 168, 76, 0.1)', border: '1px solid rgba(201, 168, 76, 0.2)',
          fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-gold)',
          fontFamily: 'var(--font-outfit)',
        }}>
          n°{hadith.number}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <GradeBadge grade={primaryGrade} allSahih={allSahih} />
          <button
            onClick={handleCopy}
            title="Copier le hadith"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '28px', height: '28px', borderRadius: '6px',
              border: '1px solid var(--color-border)', background: 'transparent',
              color: copied ? 'var(--color-emerald)' : 'var(--color-muted)',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            }}
          >
            {copied ? <Check style={{ width: '14px', height: '14px' }} /> : <Copy style={{ width: '14px', height: '14px' }} />}
          </button>
        </div>
      </div>

      {/* Arabic text */}
      {hadith.textAr && (
        <>
          <p className="font-amiri" style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
            color: 'var(--color-gold)',
            lineHeight: 1.9,
            textAlign: 'right',
            direction: 'rtl',
            marginBottom: '1.25rem',
          }}>
            {hadith.textAr}
          </p>
          <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1rem', opacity: 0.5 }} />
        </>
      )}

      {/* French text */}
      <p style={{
        fontSize: '0.9375rem',
        lineHeight: 1.75,
        marginBottom: '1.25rem',
      }}>
        {hadith.textFr}
      </p>

      {/* Footer: reference + grades */}
      <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1rem', opacity: 0.3 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {hadith.reference && (
          <p style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
            Livre {hadith.reference.book}, Hadith {hadith.reference.hadith}
          </p>
        )}
        {hadith.grades.length > 0 && (
          <p style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', opacity: 0.7 }}>
            {hadith.grades.map((g, i) => (
              <span key={i}>
                {i > 0 && ' · '}
                {g.name}: {g.grade}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
