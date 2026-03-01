'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PrayerAvatar } from '../avatar/PrayerAvatar';
import type { PrayerPoseConfig, Gender } from '../types';
import { AVATAR_MODELS } from '../constants';

interface PrayerSceneProps {
  pose: PrayerPoseConfig;
  gender: Gender;
}

function SceneContent({ pose, gender }: PrayerSceneProps) {
  return (
    <>
      {/* Soft lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 3]} intensity={0.6} />
      <directionalLight position={[-2, 2, -2]} intensity={0.2} />

      <Suspense fallback={null}>
        <PrayerAvatar
          modelUrl={AVATAR_MODELS[gender]}
          pose={pose}
          scale={1}
        />
      </Suspense>

      {/* Rotation only, no pan */}
      <OrbitControls
        makeDefault
        enablePan={false}
        minDistance={1.5}
        maxDistance={4}
        target={[0, 0.9, 0]}
        // Mobile: 2-finger rotate only (1-finger reserved for carousel swipe)
        touches={{ ONE: 0 as never, TWO: 2 as never }}
      />
    </>
  );
}

export function PrayerScene({ pose, gender }: PrayerSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 2.5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
      frameloop="demand"
      gl={{ alpha: true }}
    >
      <SceneContent pose={pose} gender={gender} />
    </Canvas>
  );
}
