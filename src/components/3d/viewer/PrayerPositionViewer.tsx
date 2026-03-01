'use client';

import { lazy, Suspense, useMemo } from 'react';
import type { PrayerPositionId } from '@/data/prayer-guide/types';
import type { Gender } from '../types';
import { getPoseForPosition } from '../poses';
import { usePoseTransition } from '../animation/usePoseTransition';
import { ZERO_POSE } from '../poses/defaults';
import { AvatarErrorBoundary } from '../avatar/AvatarErrorBoundary';

const PrayerScene = lazy(() =>
  import('./PrayerScene').then((m) => ({ default: m.PrayerScene })),
);

interface PrayerPositionViewerProps {
  positionId: PrayerPositionId;
  showLabel?: boolean;
  gender?: Gender;
}

function LoadingShimmer() {
  return (
    <>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(110deg, transparent 30%, rgba(201, 168, 76, 0.06) 50%, transparent 70%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer3d 1.5s infinite',
      }} />
      <style>{`
        @keyframes shimmer3d {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}

export function PrayerPositionViewer({ positionId, gender = 'male' }: PrayerPositionViewerProps) {
  const targetPose = useMemo(
    () => getPoseForPosition(positionId) ?? ZERO_POSE,
    [positionId],
  );

  const { currentPose } = usePoseTransition(targetPose);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      touchAction: 'none',
    }}>
      <AvatarErrorBoundary>
        <Suspense fallback={<LoadingShimmer />}>
          <PrayerScene pose={currentPose} gender={gender} />
        </Suspense>
      </AvatarErrorBoundary>
    </div>
  );
}
