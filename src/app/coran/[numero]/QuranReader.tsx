'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import { Play, Pause, Square, ChevronDown, ChevronUp, Settings2, Eye, EyeOff, Rows3, AlignJustify, LayoutList, ArrowUp } from 'lucide-react';
import { fetchVerses, fetchAudio, fetchTafsir, RECITERS, type QuranVerse } from '@/lib/quran-api';
import { useReciterPreference } from '@/hooks/useReciterPreference';
import { useAudioPlayer } from '@/hooks/useAudioPlayer';
import { useReaderSettings, type LayerId, type DisplayMode } from '@/hooks/useReaderSettings';

interface QuranReaderProps {
  chapterNumber: number;
  verseCount: number;
}

const GROUP_SIZE = 5;

const DISPLAY_MODES: { id: DisplayMode; label: string; icon: typeof Rows3 }[] = [
  { id: 'verse', label: 'Verset par verset', icon: Rows3 },
  { id: 'continuous', label: 'Lecture continue', icon: AlignJustify },
  { id: 'group', label: 'Par groupe de 5', icon: LayoutList },
];

/* ── Inline translation layer ── */
function VerseLayer({ verse, layerId, tafsirMap }: { verse: QuranVerse; layerId: LayerId; tafsirMap?: Map<number, string> }) {
  switch (layerId) {
    case 'transliteration':
      return verse.transliteration ? (
        <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          {verse.transliteration}
        </p>
      ) : null;
    case 'french':
      return (
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
          {verse.translation_fr}
        </p>
      );
    case 'english':
      return (
        <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--color-muted)', opacity: 0.7, marginBottom: '0.5rem' }}>
          {verse.translation_en}
        </p>
      );
    case 'tafsir': {
      const text = tafsirMap?.get(verse.verse_number);
      return text ? (
        <p className="font-amiri" style={{ fontSize: '0.9375rem', lineHeight: 1.9, color: 'var(--color-muted)', direction: 'rtl', textAlign: 'right', marginBottom: '0.5rem', padding: '0.5rem 0.75rem', borderRadius: '6px', background: 'rgba(201, 168, 76, 0.04)', borderRight: '2px solid rgba(201, 168, 76, 0.2)' }}>
          {text}
        </p>
      ) : null;
    }
  }
}

/* ── Verse number badge (small, inline) ── */
function VerseBadge({ n }: { n: number }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: '22px', height: '22px', borderRadius: '50%',
      background: 'rgba(201, 168, 76, 0.1)', border: '1px solid rgba(201, 168, 76, 0.2)',
      fontSize: '0.625rem', fontWeight: 600, color: 'var(--color-gold)',
      fontFamily: 'var(--font-outfit)', flexShrink: 0,
    }}>
      {n}
    </span>
  );
}

/* ── Play button (small, inline) ── */
function PlayBtn({ playing, onClick }: { playing: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: '26px', height: '26px', borderRadius: '50%',
        border: '1px solid var(--color-border)',
        background: playing ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
        cursor: 'pointer', color: playing ? 'var(--color-gold)' : 'var(--color-muted)',
        transition: 'all 0.2s', flexShrink: 0,
      }}
    >
      {playing ? <Pause style={{ width: '12px', height: '12px' }} /> : <Play style={{ width: '12px', height: '12px', marginLeft: '1px' }} />}
    </button>
  );
}

/* ═══════════════════ MAIN COMPONENT ═══════════════════ */
export function QuranReader({ chapterNumber, verseCount }: QuranReaderProps) {
  const [verses, setVerses] = useState<QuranVerse[]>([]);
  const [audioUrls, setAudioUrls] = useState<Map<string, string>>(new Map());
  const [loading, setLoading] = useState(true);
  const [audioLoading, setAudioLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [tafsirMap, setTafsirMap] = useState<Map<number, string>>(new Map());

  const { reciterId, setReciterId } = useReciterPreference();
  const { currentVerseKey, isPlaying, isPlayingAll, playVerse, playAll, stop } = useAudioPlayer();
  const { layers, toggleLayer, moveLayer, displayMode, setDisplayMode } = useReaderSettings();

  // Fetch verses
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchVerses(chapterNumber)
      .then((data) => { if (!cancelled) { setVerses(data); setLoading(false); } })
      .catch(() => { if (!cancelled) { setError('Impossible de charger les versets. Vérifiez votre connexion internet.'); setLoading(false); } });
    return () => { cancelled = true; };
  }, [chapterNumber]);

  // Fetch audio
  const loadAudio = useCallback((recId: number) => {
    setAudioLoading(true);
    stop();
    fetchAudio(chapterNumber, recId)
      .then((map) => { setAudioUrls(map); setAudioLoading(false); })
      .catch(() => { setAudioUrls(new Map()); setAudioLoading(false); });
  }, [chapterNumber, stop]);

  useEffect(() => { loadAudio(reciterId); }, [reciterId, loadAudio]);

  // Load tafsir when layer is enabled
  const tafsirEnabled = layers.find(l => l.id === 'tafsir')?.enabled ?? false;
  useEffect(() => {
    if (!tafsirEnabled || tafsirMap.size > 0) return;
    fetchTafsir(chapterNumber)
      .then(setTafsirMap)
      .catch(() => {}); // silent fail
  }, [tafsirEnabled, chapterNumber, tafsirMap.size]);

  const handleReciterChange = (id: number) => { setReciterId(id); setDropdownOpen(false); };

  const handlePlayAll = () => {
    if (isPlayingAll) { stop(); return; }
    const validKeys = verses.filter(v => audioUrls.has(v.verse_key)).map(v => v.verse_key);
    const validUrls = validKeys.map(k => audioUrls.get(k)!);
    if (validUrls.length > 0) playAll(validKeys, validUrls);
  };

  const currentReciter = RECITERS.find(r => r.id === reciterId) || RECITERS[0];
  const enabledLayers = layers.filter(l => l.enabled);

  // Auto-scroll to current verse during playback
  const autoScrollRef = useRef(true);
  useEffect(() => {
    if (!currentVerseKey || !isPlaying || !autoScrollRef.current) return;
    const el = document.querySelector(`[data-verse-key="${currentVerseKey}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [currentVerseKey, isPlaying]);

  // Loading skeleton
  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {Array.from({ length: Math.min(verseCount, 7) }).map((_, i) => (
          <div key={i} className="surah-card" style={{ padding: '1.5rem', opacity: 0.4 }}>
            <div style={{ height: '32px', width: '60%', background: 'var(--color-surface-elevated)', borderRadius: '8px', marginBottom: '1rem', marginLeft: 'auto', direction: 'rtl' }} />
            <div style={{ height: '14px', width: '80%', background: 'var(--color-surface-elevated)', borderRadius: '6px', marginBottom: '0.75rem' }} />
            <div style={{ height: '14px', width: '90%', background: 'var(--color-surface-elevated)', borderRadius: '6px', marginBottom: '0.75rem' }} />
            <div style={{ height: '12px', width: '85%', background: 'var(--color-surface-elevated)', borderRadius: '6px' }} />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="surah-card" style={{ padding: '3rem', textAlign: 'center' }}>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-muted)', marginBottom: '0.5rem' }}>{error}</p>
        <button onClick={() => window.location.reload()} className="btn-secondary" style={{ marginTop: '1rem' }}>Réessayer</button>
      </div>
    );
  }

  /* ── Render helpers for each mode ── */

  function renderVerseMode() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {verses.map((verse) => {
          const isCurrent = currentVerseKey === verse.verse_key;
          const url = audioUrls.get(verse.verse_key);
          return (
            <div key={verse.verse_key} data-verse-key={verse.verse_key} className="surah-card" style={{
              padding: '1.5rem',
              borderColor: isCurrent && isPlaying ? 'var(--color-gold)' : undefined,
              boxShadow: isCurrent && isPlaying ? '0 0 0 1px var(--color-gold), 0 4px 20px rgba(201, 168, 76, 0.15)' : undefined,
              transition: 'border-color 0.3s, box-shadow 0.3s',
              scrollMarginTop: '120px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <VerseBadge n={verse.verse_number} />
                {url && <PlayBtn playing={isCurrent && isPlaying} onClick={() => playVerse(verse.verse_key, url)} />}
              </div>
              <p className="font-amiri" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--color-gold)', lineHeight: 1.8, textAlign: 'right', direction: 'rtl', marginBottom: '1.25rem' }}>
                {verse.text_uthmani}
              </p>
              {enabledLayers.length > 0 && <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1rem', opacity: 0.5 }} />}
              {enabledLayers.map((layer) => <VerseLayer key={layer.id} verse={verse} layerId={layer.id} tafsirMap={tafsirMap} />)}
            </div>
          );
        })}
      </div>
    );
  }

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderContinuousMode() {
    return (
      <div>
        <div className="surah-card" style={{ padding: '2rem' }}>
          {/* Arabic block */}
          <div id="continuous-arabe" style={{ direction: 'rtl', textAlign: 'right', marginBottom: '2rem', scrollMarginTop: '120px' }}>
            {verses.map((verse) => {
              const isCurrent = currentVerseKey === verse.verse_key;
              const url = audioUrls.get(verse.verse_key);
              return (
                <span
                  key={verse.verse_key}
                  data-verse-key={verse.verse_key}
                  onClick={() => url && playVerse(verse.verse_key, url)}
                  style={{ cursor: url ? 'pointer' : 'default', transition: 'color 0.2s', scrollMarginTop: '120px' }}
                >
                  <span className="font-amiri" style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    color: 'var(--color-gold)',
                    opacity: isCurrent && isPlaying ? 1 : 0.85,
                    lineHeight: 2.2,
                    textShadow: isCurrent && isPlaying ? '0 0 12px rgba(201, 168, 76, 0.4)' : 'none',
                  }}>
                    {verse.text_uthmani}
                  </span>
                  <span className="font-amiri" style={{ fontSize: '0.875rem', color: 'var(--color-gold)', opacity: 0.4, margin: '0 4px' }}>
                    ﴿{verse.verse_number}﴾
                  </span>
                </span>
              );
            })}
          </div>

          {/* Translations blocks */}
          {enabledLayers.length > 0 && (
            <>
              <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1.5rem', opacity: 0.5 }} />
              {enabledLayers.map((layer) => (
                <div key={layer.id} id={`continuous-${layer.id}`} style={{ marginBottom: '1.5rem', scrollMarginTop: '120px' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    {layer.label}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {verses.map((verse) => {
                      const isCurrent = currentVerseKey === verse.verse_key;
                      const text = layer.id === 'transliteration' ? verse.transliteration
                        : layer.id === 'french' ? verse.translation_fr
                        : layer.id === 'tafsir' ? (tafsirMap.get(verse.verse_number) || '')
                        : verse.translation_en;
                      if (!text) return null;
                      const isTafsir = layer.id === 'tafsir';
                      return (
                        <p key={verse.verse_key} className={isTafsir ? 'font-amiri' : undefined} style={{
                          fontSize: layer.id === 'english' ? '0.8125rem' : '0.9375rem',
                          lineHeight: isTafsir ? 1.9 : 1.7,
                          fontStyle: layer.id === 'transliteration' ? 'italic' : 'normal',
                          direction: isTafsir ? 'rtl' : undefined,
                          textAlign: isTafsir ? 'right' : undefined,
                          color: layer.id === 'english' ? 'var(--color-muted)' : isCurrent && isPlaying ? 'var(--color-gold)' : 'inherit',
                          opacity: layer.id === 'english' ? 0.7 : 1,
                          transition: 'color 0.3s',
                        }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--color-gold)', opacity: 0.5, marginRight: '6px' }}>{verse.verse_number}.</span>
                          {text}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }

  function renderGroupMode() {
    const groups: QuranVerse[][] = [];
    for (let i = 0; i < verses.length; i += GROUP_SIZE) {
      groups.push(verses.slice(i, i + GROUP_SIZE));
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {groups.map((group, gi) => {
          const from = group[0].verse_number;
          const to = group[group.length - 1].verse_number;
          const hasCurrentVerse = group.some(v => currentVerseKey === v.verse_key && isPlaying);
          return (
            <div key={gi} data-verse-key={group[0].verse_key} className="surah-card" style={{
              padding: '1.5rem',
              borderColor: hasCurrentVerse ? 'var(--color-gold)' : undefined,
              boxShadow: hasCurrentVerse ? '0 0 0 1px var(--color-gold), 0 4px 20px rgba(201, 168, 76, 0.15)' : undefined,
              transition: 'border-color 0.3s, box-shadow 0.3s',
              scrollMarginTop: '120px',
            }}>
              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', fontFamily: 'var(--font-outfit)' }}>
                  Versets {from}–{to}
                </span>
              </div>

              {/* Arabic lines */}
              <div style={{ direction: 'rtl', textAlign: 'right', marginBottom: '1.25rem' }}>
                {group.map((verse) => {
                  const isCurrent = currentVerseKey === verse.verse_key;
                  const url = audioUrls.get(verse.verse_key);
                  return (
                    <div key={verse.verse_key} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '0.5rem', direction: 'rtl' }}>
                      <p className="font-amiri" onClick={() => url && playVerse(verse.verse_key, url)} style={{
                        flex: 1, fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', color: 'var(--color-gold)',
                        lineHeight: 1.8, cursor: url ? 'pointer' : 'default',
                        textShadow: isCurrent && isPlaying ? '0 0 12px rgba(201, 168, 76, 0.4)' : 'none',
                        opacity: isCurrent && isPlaying ? 1 : 0.85,
                      }}>
                        {verse.text_uthmani}
                        <span style={{ fontSize: '0.75rem', opacity: 0.4, marginRight: '6px' }}>﴿{verse.verse_number}﴾</span>
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Translations per verse */}
              {enabledLayers.length > 0 && (
                <>
                  <div style={{ height: '1px', background: 'var(--color-border)', marginBottom: '1rem', opacity: 0.5 }} />
                  {group.map((verse) => (
                    <div key={verse.verse_key} style={{ marginBottom: '0.75rem', paddingLeft: '4px' }}>
                      <span style={{ fontSize: '0.6875rem', color: 'var(--color-gold)', opacity: 0.5, marginRight: '4px' }}>{verse.verse_number}.</span>
                      {enabledLayers.map((layer) => {
                        const text = layer.id === 'transliteration' ? verse.transliteration
                          : layer.id === 'french' ? verse.translation_fr
                          : layer.id === 'tafsir' ? (tafsirMap.get(verse.verse_number) || '')
                          : verse.translation_en;
                        if (!text) return null;
                        return (
                          <span key={layer.id} style={{
                            fontSize: layer.id === 'english' ? '0.8125rem' : '0.875rem',
                            lineHeight: 1.6,
                            fontStyle: layer.id === 'transliteration' ? 'italic' : 'normal',
                            color: layer.id === 'english' ? 'var(--color-muted)' : layer.id === 'transliteration' ? 'var(--color-muted)' : 'inherit',
                            opacity: layer.id === 'english' ? 0.7 : 1,
                          }}>
                            {text}{' '}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      {/* Controls bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* Reciter dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => { setDropdownOpen(!dropdownOpen); setSettingsOpen(false); }}
              className="surah-card"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', fontSize: '0.8125rem', cursor: 'pointer', border: 'none', background: 'var(--color-surface-elevated)', color: 'var(--color-foreground)', borderRadius: '8px', maxWidth: '100%', overflow: 'hidden' }}
            >
              <span style={{ color: 'var(--color-muted)', flexShrink: 0 }}>Réciteur :</span>
              <span style={{ fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentReciter.name}</span>
              <ChevronDown style={{ width: '14px', height: '14px', color: 'var(--color-muted)', transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
            {dropdownOpen && (
              <>
                <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setDropdownOpen(false)} />
                <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 50, minWidth: '250px', maxWidth: 'calc(100vw - 48px)', background: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                  {RECITERS.map((r) => (
                    <button key={r.id} onClick={() => handleReciterChange(r.id)}
                      style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', fontSize: '0.8125rem', border: 'none', background: r.id === reciterId ? 'rgba(201, 168, 76, 0.1)' : 'transparent', color: r.id === reciterId ? 'var(--color-gold)' : 'var(--color-foreground)', fontWeight: r.id === reciterId ? 600 : 400, cursor: 'pointer', transition: 'background 0.15s' }}
                      onMouseEnter={(e) => { if (r.id !== reciterId) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                      onMouseLeave={(e) => { if (r.id !== reciterId) e.currentTarget.style.background = 'transparent'; }}
                    >
                      {r.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Settings button */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => { setSettingsOpen(!settingsOpen); setDropdownOpen(false); }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px 14px', fontSize: '0.8125rem', cursor: 'pointer', border: '1px solid var(--color-border)', background: settingsOpen ? 'rgba(201, 168, 76, 0.1)' : 'var(--color-surface-elevated)', color: settingsOpen ? 'var(--color-gold)' : 'var(--color-foreground)', borderRadius: '8px', transition: 'all 0.2s' }}
            >
              <Settings2 style={{ width: '15px', height: '15px' }} />
              <span>Affichage</span>
            </button>
            {settingsOpen && (
              <>
                <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setSettingsOpen(false)} />
                <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, zIndex: 50, minWidth: '250px', maxWidth: 'calc(100vw - 48px)', background: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', padding: '8px 0' }}>

                  {/* Display mode section */}
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '8px 16px 4px' }}>
                    Mode d&apos;affichage
                  </p>
                  {DISPLAY_MODES.map((mode) => {
                    const Icon = mode.icon;
                    const active = displayMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => setDisplayMode(mode.id)}
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', textAlign: 'left', padding: '10px 16px', fontSize: '0.8125rem', border: 'none', background: active ? 'rgba(201, 168, 76, 0.1)' : 'transparent', color: active ? 'var(--color-gold)' : 'var(--color-foreground)', fontWeight: active ? 600 : 400, cursor: 'pointer', transition: 'background 0.15s' }}
                        onMouseEnter={(e) => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                        onMouseLeave={(e) => { if (!active) e.currentTarget.style.background = 'transparent'; }}
                      >
                        <Icon style={{ width: '15px', height: '15px', opacity: 0.7 }} />
                        {mode.label}
                      </button>
                    );
                  })}

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'var(--color-border)', margin: '8px 0' }} />

                  {/* Translation layers section */}
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '8px 16px 4px' }}>
                    Traductions affichées
                  </p>
                  {layers.map((layer, idx) => (
                    <div key={layer.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px' }}>
                      <button onClick={() => toggleLayer(layer.id)}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '6px', border: 'none', background: layer.enabled ? 'rgba(201, 168, 76, 0.15)' : 'rgba(255,255,255,0.05)', color: layer.enabled ? 'var(--color-gold)' : 'var(--color-muted)', cursor: 'pointer', transition: 'all 0.15s', flexShrink: 0 }}
                      >
                        {layer.enabled ? <Eye style={{ width: '14px', height: '14px' }} /> : <EyeOff style={{ width: '14px', height: '14px' }} />}
                      </button>
                      <span style={{ flex: 1, fontSize: '0.8125rem', fontWeight: 500, color: layer.enabled ? 'var(--color-foreground)' : 'var(--color-muted)', opacity: layer.enabled ? 1 : 0.5 }}>
                        {layer.label}
                      </span>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                        <button onClick={() => moveLayer(layer.id, 'up')} disabled={idx === 0}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '16px', border: 'none', background: 'transparent', color: idx === 0 ? 'var(--color-border)' : 'var(--color-muted)', cursor: idx === 0 ? 'default' : 'pointer', borderRadius: '3px' }}
                        >
                          <ChevronUp style={{ width: '12px', height: '12px' }} />
                        </button>
                        <button onClick={() => moveLayer(layer.id, 'down')} disabled={idx === layers.length - 1}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '16px', border: 'none', background: 'transparent', color: idx === layers.length - 1 ? 'var(--color-border)' : 'var(--color-muted)', cursor: idx === layers.length - 1 ? 'default' : 'pointer', borderRadius: '3px' }}
                        >
                          <ChevronDown style={{ width: '12px', height: '12px' }} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Play all / Stop */}
        <button onClick={handlePlayAll} disabled={audioLoading || audioUrls.size === 0} className="btn-secondary"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8125rem', opacity: audioLoading ? 0.5 : 1 }}
        >
          {isPlayingAll ? (<><Square style={{ width: '14px', height: '14px' }} />Arrêter</>) : (<><Play style={{ width: '14px', height: '14px' }} />{audioLoading ? 'Chargement...' : 'Écouter la sourate'}</>)}
        </button>
      </div>

      {/* Universal sticky bar — all modes, all surahs */}
      <div style={{
        position: 'sticky', top: '64px', zIndex: 30,
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 12px', marginBottom: '1rem', borderRadius: '10px',
        background: 'var(--color-surface-elevated)', border: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        overflowX: 'auto',
      }}>
        {/* Audio controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginRight: '6px', flexShrink: 0 }}>
          <button
            onClick={handlePlayAll}
            disabled={audioLoading || audioUrls.size === 0}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '28px', height: '28px', borderRadius: '50%',
              border: '1px solid var(--color-border)',
              background: isPlayingAll ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
              color: isPlayingAll ? 'var(--color-gold)' : 'var(--color-foreground)',
              cursor: audioLoading ? 'default' : 'pointer',
              opacity: audioLoading ? 0.4 : 1,
              transition: 'all 0.2s', flexShrink: 0,
            }}
          >
            {isPlayingAll ? <Pause style={{ width: '12px', height: '12px' }} /> : <Play style={{ width: '12px', height: '12px', marginLeft: '1px' }} />}
          </button>
          {(isPlaying || isPlayingAll) && (
            <button
              onClick={stop}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '28px', height: '28px', borderRadius: '50%',
                border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)',
                color: '#ef4444', cursor: 'pointer', flexShrink: 0,
              }}
            >
              <Square style={{ width: '10px', height: '10px' }} />
            </button>
          )}
          {currentVerseKey && isPlaying && (
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-gold)', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '2px' }}>
              v.{currentVerseKey.split(':')[1]}
            </span>
          )}
        </div>

        {/* Section anchors — continuous mode only */}
        {displayMode === 'continuous' && enabledLayers.length > 0 && (
          <>
            <div style={{ width: '1px', height: '20px', background: 'var(--color-border)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', fontWeight: 600, marginRight: '4px', whiteSpace: 'nowrap' }}>Aller à :</span>
            {[
              { id: 'continuous-arabe', label: 'Arabe' },
              ...enabledLayers.map((l) => ({ id: `continuous-${l.id}`, label: l.label })),
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
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
          </>
        )}

        {/* Scroll to top — pushed to right */}
        <div style={{ width: '1px', height: '20px', background: 'var(--color-border)', flexShrink: 0, marginLeft: 'auto' }} />
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px',
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

      {/* Render based on display mode */}
      {displayMode === 'verse' && renderVerseMode()}
      {displayMode === 'continuous' && renderContinuousMode()}
      {displayMode === 'group' && renderGroupMode()}
    </div>
  );
}
