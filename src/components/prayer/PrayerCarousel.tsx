'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import type { PrayerPositionId, RulingType } from '@/data/prayer-guide/types';
import { PrayerPositionImage } from './PrayerPositionImage';
import { ClassificationBadge } from './ClassificationBadge';

export interface CarouselStep {
  position: PrayerPositionId;
  ruling: RulingType;
  name: string;
  nameAr: string;
  dhikr?: string;
  dhikrAr?: string;
  dhikrTranslit?: string;
  repetitions?: number;
  notes?: string;
}

interface PrayerCarouselProps {
  steps: CarouselStep[];
  rakaatBoundaries?: number[];
}

export function PrayerCarousel({ steps, rakaatBoundaries }: PrayerCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);
  const [textKey, setTextKey] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const step = steps[activeIndex];
  const total = steps.length;

  const currentRakaa = rakaatBoundaries
    ? rakaatBoundaries.filter(b => activeIndex >= b).length
    : undefined;

  const goTo = useCallback((index: number, dir?: 'left' | 'right') => {
    if (index < 0 || index >= total || index === activeIndex || isAnimating) return;
    setDirection(dir ?? (index > activeIndex ? 'right' : 'left'));
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTextKey(k => k + 1);
      setTimeout(() => setIsAnimating(false), 50);
    }, 200);
  }, [activeIndex, total, isAnimating]);

  const goNext = useCallback(() => goTo(activeIndex + 1, 'right'), [goTo, activeIndex]);
  const goPrev = useCallback(() => goTo(activeIndex - 1, 'left'), [goTo, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Touch events
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) goNext();
      else goPrev();
    }
  }, [goNext, goPrev]);

  if (!step) return null;

  // Dots: compress if > 12 steps
  const renderDots = () => {
    if (total <= 12) {
      return steps.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`Étape ${i + 1}`}
          style={{
            width: i === activeIndex ? '20px' : '8px',
            height: '8px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            background: i === activeIndex
              ? 'var(--color-gold)'
              : 'rgba(201, 168, 76, 0.2)',
            transition: 'all 0.3s ease',
          }}
        />
      ));
    }

    // Compressed dots: show 2 before, active, 2 after + ellipsis
    const dots: React.ReactNode[] = [];
    const window = 2;
    const start = Math.max(0, activeIndex - window);
    const end = Math.min(total - 1, activeIndex + window);

    if (start > 0) {
      dots.push(
        <button key={0} onClick={() => goTo(0)} style={dotStyle(0 === activeIndex)} aria-label="Étape 1" />,
      );
      if (start > 1) {
        dots.push(<span key="el" style={{ color: 'var(--color-muted)', fontSize: '0.625rem', lineHeight: 1 }}>···</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      dots.push(
        <button key={i} onClick={() => goTo(i)} style={dotStyle(i === activeIndex)} aria-label={`Étape ${i + 1}`} />,
      );
    }

    if (end < total - 1) {
      if (end < total - 2) {
        dots.push(<span key="er" style={{ color: 'var(--color-muted)', fontSize: '0.625rem', lineHeight: 1 }}>···</span>);
      }
      dots.push(
        <button key={total - 1} onClick={() => goTo(total - 1)} style={dotStyle(total - 1 === activeIndex)} aria-label={`Étape ${total}`} />,
      );
    }

    return dots;
  };

  return (
    <div ref={containerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      {/* ── Image zone ── */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '400px',
        }}
      >
        {/* Image with slide transition */}
        <div style={{
          transition: isAnimating ? 'opacity 0.2s ease, transform 0.2s ease' : 'none',
          opacity: isAnimating ? 0 : 1,
          transform: isAnimating
            ? `translateX(${direction === 'right' ? '-20px' : '20px'})`
            : 'translateX(0)',
        }}>
          <PrayerPositionImage activePosition={step.position} showLabel={false} />
        </div>

        {/* Arrow left */}
        {activeIndex > 0 && (
          <button
            onClick={goPrev}
            aria-label="Étape précédente"
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(201, 168, 76, 0.25)',
              background: 'rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(8px)',
              color: 'var(--color-gold)',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              padding: 0,
            }}
          >
            ◀
          </button>
        )}

        {/* Arrow right */}
        {activeIndex < total - 1 && (
          <button
            onClick={goNext}
            aria-label="Étape suivante"
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(201, 168, 76, 0.25)',
              background: 'rgba(0, 0, 0, 0.45)',
              backdropFilter: 'blur(8px)',
              color: 'var(--color-gold)',
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2,
              padding: 0,
            }}
          >
            ▶
          </button>
        )}
      </div>

      {/* ── Progress indicator ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        {/* Dots */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {renderDots()}
        </div>

        {/* Counter */}
        <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>
          Étape {activeIndex + 1}/{total}
          {currentRakaa !== undefined && ` — Rak'a ${currentRakaa}`}
        </span>
      </div>

      {/* ── Text zone with fade-up ── */}
      <div
        key={textKey}
        style={{
          width: '100%',
          animation: 'carouselFadeUp 0.35s ease forwards',
        }}
      >
        {/* Step name + badge */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
            <span className="font-outfit" style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-foreground)' }}>
              {step.name}
            </span>
            <span className="font-amiri" style={{ fontSize: '1rem', color: 'var(--color-muted)', opacity: 0.5 }}>
              {step.nameAr}
            </span>
            <ClassificationBadge ruling={step.ruling} />
          </div>
        </div>

        {/* Notes */}
        {step.notes && (
          <p style={{
            fontSize: '0.8125rem',
            color: 'var(--color-muted)',
            lineHeight: 1.6,
            textAlign: 'center',
            marginBottom: '10px',
          }}>
            {step.notes}
          </p>
        )}

        {/* Dhikr block */}
        {step.dhikrAr && (
          <div style={{
            marginTop: '4px',
            padding: '12px 16px',
            borderRadius: '12px',
            background: 'rgba(201, 168, 76, 0.04)',
            border: '1px solid rgba(201, 168, 76, 0.08)',
          }}>
            <p className="font-amiri" style={{
              fontSize: '1.125rem',
              lineHeight: 1.8,
              color: 'var(--color-gold)',
              textAlign: 'right',
              marginBottom: '6px',
            }}>
              {step.dhikrAr}
            </p>
            {step.dhikrTranslit && (
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', fontStyle: 'italic', marginBottom: '4px' }}>
                {step.dhikrTranslit}
              </p>
            )}
            {step.dhikr && (
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
                {step.dhikr}
              </p>
            )}
            {step.repetitions && step.repetitions > 1 && (
              <p style={{ fontSize: '0.6875rem', color: 'var(--color-gold)', opacity: 0.7, marginTop: '4px' }}>
                {step.repetitions}x
              </p>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes carouselFadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function dotStyle(isActive: boolean): React.CSSProperties {
  return {
    width: isActive ? '20px' : '8px',
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    background: isActive
      ? 'var(--color-gold)'
      : 'rgba(201, 168, 76, 0.2)',
    transition: 'all 0.3s ease',
  };
}
