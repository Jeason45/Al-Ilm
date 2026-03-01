'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import type { PrayerPoseConfig } from '../types';
import { lerpPrayerPoseConfig } from './lerpUtils';
import { ZERO_POSE } from '../poses/defaults';

function easeInOutCubic(t: number): number {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

interface UsePoseTransitionOptions {
  duration?: number;
}

interface UsePoseTransitionResult {
  currentPose: PrayerPoseConfig;
  isTransitioning: boolean;
  /** Call to invalidate the R3F frame loop during transition */
  onFrame: () => void;
}

export function usePoseTransition(
  targetPose: PrayerPoseConfig,
  { duration = 600 }: UsePoseTransitionOptions = {},
): UsePoseTransitionResult {
  const [currentPose, setCurrentPose] = useState<PrayerPoseConfig>(targetPose);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const fromPoseRef = useRef<PrayerPoseConfig>(ZERO_POSE);
  const toPoseRef = useRef<PrayerPoseConfig>(targetPose);
  const startTimeRef = useRef<number>(0);
  const animatingRef = useRef(false);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    if (!animatingRef.current) return;

    const elapsed = performance.now() - startTimeRef.current;
    const rawT = Math.min(elapsed / duration, 1);
    const t = easeInOutCubic(rawT);

    const interpolated = lerpPrayerPoseConfig(fromPoseRef.current, toPoseRef.current, t);
    setCurrentPose(interpolated);

    if (rawT >= 1) {
      animatingRef.current = false;
      setIsTransitioning(false);
    } else {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [duration]);

  useEffect(() => {
    // Start transition to new target
    fromPoseRef.current = currentPose;
    toPoseRef.current = targetPose;
    startTimeRef.current = performance.now();
    animatingRef.current = true;
    setIsTransitioning(true);

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetPose, animate]);

  const onFrame = useCallback(() => {
    // No-op: we use rAF internally. This exists for R3F invalidateFrameloop compat.
  }, []);

  return { currentPose, isTransitioning, onFrame };
}
