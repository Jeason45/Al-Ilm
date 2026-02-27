'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, Pause, Square, ChevronDown, SkipBack, SkipForward, Minus, Plus } from 'lucide-react';

export interface TextSection {
  title: string;
  text: string;
}

interface TextReaderProps {
  sections: TextSection[];
}

export function TextReader({ sections }: TextReaderProps) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentSection, setCurrentSection] = useState(-1);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [voiceDropdownOpen, setVoiceDropdownOpen] = useState(false);

  const sectionIndexRef = useRef(-1);
  const stoppedRef = useRef(false);

  // Check support & load voices
  useEffect(() => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;
    setSupported(true);

    function loadVoices() {
      const all = speechSynthesis.getVoices();
      const fr = all.filter(v => v.lang.startsWith('fr'));
      const useful = fr.length > 0 ? fr : all.filter(v => v.lang.startsWith('en'));
      setVoices(useful.length > 0 ? useful : all);
      if (!selectedVoice) {
        // Prefer premium/enhanced French voices (macOS Siri, Google Neural)
        const premium = fr.find(v =>
          /enhanced|premium|neural|siri/i.test(v.name) && /audrey|thomas|amelie/i.test(v.name)
        ) || fr.find(v =>
          /enhanced|premium|neural|siri/i.test(v.name)
        ) || fr.find(v =>
          /google|microsoft/i.test(v.name)
        ) || fr.find(v => v.default) || fr[0];
        if (premium) setSelectedVoice(premium);
        else if (useful[0]) setSelectedVoice(useful[0]);
      }
    }

    loadVoices();
    speechSynthesis.addEventListener('voiceschanged', loadVoices);
    return () => speechSynthesis.removeEventListener('voiceschanged', loadVoices);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stop = useCallback(() => {
    stoppedRef.current = true;
    speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
    setCurrentSection(-1);
    sectionIndexRef.current = -1;
  }, []);

  const speakSection = useCallback((index: number) => {
    if (index >= sections.length) {
      setSpeaking(false);
      setPaused(false);
      setCurrentSection(-1);
      sectionIndexRef.current = -1;
      return;
    }

    const section = sections[index];
    // Read title, then content
    const fullText = `${section.title}. ${section.text}`;

    const utterance = new SpeechSynthesisUtterance(fullText);
    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = rate;
    utterance.pitch = 1;

    sectionIndexRef.current = index;
    setCurrentSection(index);

    utterance.onend = () => {
      if (!stoppedRef.current) {
        speakSection(index + 1);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled') {
        speakSection(index + 1);
      }
    };

    speechSynthesis.speak(utterance);
  }, [sections, selectedVoice, rate]);

  function handlePlay() {
    if (paused) {
      speechSynthesis.resume();
      setPaused(false);
      return;
    }

    stop();
    stoppedRef.current = false;
    setSpeaking(true);
    setPaused(false);

    const startIndex = currentSection >= 0 ? currentSection : 0;
    speakSection(startIndex);
  }

  function handlePause() {
    speechSynthesis.pause();
    setPaused(true);
  }

  function handlePrev() {
    const idx = sectionIndexRef.current;
    const prevIdx = Math.max(0, idx - 1);
    speechSynthesis.cancel();
    stoppedRef.current = false;
    setSpeaking(true);
    setPaused(false);
    speakSection(prevIdx);
  }

  function handleNext() {
    const idx = sectionIndexRef.current;
    const nextIdx = idx + 1;
    if (nextIdx >= sections.length) {
      stop();
      return;
    }
    speechSynthesis.cancel();
    stoppedRef.current = false;
    setSpeaking(true);
    setPaused(false);
    speakSection(nextIdx);
  }

  function adjustRate(delta: number) {
    const newRate = Math.min(2, Math.max(0.5, Math.round((rate + delta) * 10) / 10));
    setRate(newRate);
    // If currently speaking, restart current section with new rate
    if (speaking && !paused) {
      const idx = sectionIndexRef.current;
      speechSynthesis.cancel();
      stoppedRef.current = false;
      // Small delay to let cancel propagate
      setTimeout(() => speakSection(idx >= 0 ? idx : 0), 50);
    }
  }

  if (!supported) return null;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 14px',
      borderRadius: '12px',
      background: 'var(--color-surface-elevated)',
      border: '1px solid var(--color-border)',
      flexWrap: 'wrap',
    }}>
      {/* Playback controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
        <button
          onClick={handlePrev}
          disabled={!speaking || currentSection <= 0}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '30px', height: '30px', borderRadius: '50%',
            border: 'none', background: 'transparent',
            color: !speaking || currentSection <= 0 ? 'var(--color-border)' : 'var(--color-muted)',
            cursor: !speaking || currentSection <= 0 ? 'default' : 'pointer',
          }}
        >
          <SkipBack style={{ width: '13px', height: '13px' }} />
        </button>

        <button
          onClick={speaking && !paused ? handlePause : handlePlay}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '34px', height: '34px', borderRadius: '50%',
            border: '1px solid var(--color-border)',
            background: speaking ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
            color: speaking ? 'var(--color-gold)' : 'var(--color-foreground)',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
        >
          {speaking && !paused ? (
            <Pause style={{ width: '14px', height: '14px' }} />
          ) : (
            <Volume2 style={{ width: '14px', height: '14px' }} />
          )}
        </button>

        <button
          onClick={handleNext}
          disabled={!speaking || currentSection >= sections.length - 1}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '30px', height: '30px', borderRadius: '50%',
            border: 'none', background: 'transparent',
            color: !speaking || currentSection >= sections.length - 1 ? 'var(--color-border)' : 'var(--color-muted)',
            cursor: !speaking || currentSection >= sections.length - 1 ? 'default' : 'pointer',
          }}
        >
          <SkipForward style={{ width: '13px', height: '13px' }} />
        </button>
      </div>

      {/* Current section label */}
      <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', minWidth: '80px' }}>
        {speaking && currentSection >= 0 ? (
          <>
            <span style={{ color: 'var(--color-gold)', fontWeight: 600 }}>{sections[currentSection]?.title}</span>
          </>
        ) : (
          'Lire le texte'
        )}
      </span>

      <div style={{ flex: 1 }} />

      {/* Speed control */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <button
          onClick={() => adjustRate(-0.1)}
          disabled={rate <= 0.5}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '24px', height: '24px', borderRadius: '6px',
            border: 'none', background: 'transparent',
            color: rate <= 0.5 ? 'var(--color-border)' : 'var(--color-muted)',
            cursor: rate <= 0.5 ? 'default' : 'pointer',
          }}
        >
          <Minus style={{ width: '12px', height: '12px' }} />
        </button>
        <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--color-muted)', minWidth: '32px', textAlign: 'center' }}>
          {rate.toFixed(1)}x
        </span>
        <button
          onClick={() => adjustRate(0.1)}
          disabled={rate >= 2}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '24px', height: '24px', borderRadius: '6px',
            border: 'none', background: 'transparent',
            color: rate >= 2 ? 'var(--color-border)' : 'var(--color-muted)',
            cursor: rate >= 2 ? 'default' : 'pointer',
          }}
        >
          <Plus style={{ width: '12px', height: '12px' }} />
        </button>
      </div>

      {/* Voice selector */}
      {voices.length > 1 && (
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setVoiceDropdownOpen(!voiceDropdownOpen)}
            style={{
              display: 'flex', alignItems: 'center', gap: '4px',
              padding: '5px 10px', fontSize: '0.6875rem',
              cursor: 'pointer', border: '1px solid var(--color-border)',
              background: 'transparent', color: 'var(--color-muted)',
              borderRadius: '6px', maxWidth: '140px',
            }}
          >
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {selectedVoice?.name.replace(/Microsoft |Google |Apple /gi, '') || 'Voix'}
            </span>
            <ChevronDown style={{ width: '10px', height: '10px', flexShrink: 0, transform: voiceDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
          </button>

          {voiceDropdownOpen && (
            <>
              <div style={{ position: 'fixed', inset: 0, zIndex: 40 }} onClick={() => setVoiceDropdownOpen(false)} />
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', right: 0, zIndex: 50,
                minWidth: '220px', maxHeight: '240px', overflowY: 'auto',
                background: 'var(--color-surface-elevated)',
                border: '1px solid var(--color-border)', borderRadius: '10px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
              }}>
                {voices.map((v, i) => (
                  <button
                    key={`${v.name}-${i}`}
                    onClick={() => { setSelectedVoice(v); setVoiceDropdownOpen(false); }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '8px 12px', fontSize: '0.75rem', border: 'none',
                      background: v.name === selectedVoice?.name ? 'rgba(201, 168, 76, 0.1)' : 'transparent',
                      color: v.name === selectedVoice?.name ? 'var(--color-gold)' : 'var(--color-foreground)',
                      fontWeight: v.name === selectedVoice?.name ? 600 : 400,
                      cursor: 'pointer', transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => { if (v.name !== selectedVoice?.name) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                    onMouseLeave={(e) => { if (v.name !== selectedVoice?.name) e.currentTarget.style.background = 'transparent'; }}
                  >
                    {v.name.replace(/Microsoft |Google |Apple /gi, '')}
                    <span style={{ color: 'var(--color-muted)', marginLeft: '6px' }}>({v.lang})</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Stop */}
      {speaking && (
        <button
          onClick={stop}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '30px', height: '30px', borderRadius: '50%',
            border: '1px solid rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)',
            color: '#ef4444', cursor: 'pointer', transition: 'all 0.2s',
          }}
        >
          <Square style={{ width: '11px', height: '11px' }} />
        </button>
      )}
    </div>
  );
}
