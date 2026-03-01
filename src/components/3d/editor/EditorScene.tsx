'use client';

import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { PrayerAvatar } from '../avatar/PrayerAvatar';
import type { PrayerPoseConfig, Gender } from '../types';
import { AVATAR_MODELS } from '../constants';

interface EditorSceneProps {
  pose: PrayerPoseConfig;
  gender: Gender;
}

function SceneContent({ poseRef, gender }: { poseRef: React.RefObject<PrayerPoseConfig>; gender: Gender }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 3]} intensity={0.8} />
      <directionalLight position={[-3, 3, -3]} intensity={0.3} />

      {/* Ground grid */}
      <Grid
        args={[10, 10]}
        position={[0, 0, 0]}
        cellColor="rgba(201, 168, 76, 0.15)"
        sectionColor="rgba(201, 168, 76, 0.3)"
        fadeDistance={8}
        infiniteGrid
      />

      {/* Avatar — pass poseRef to cross DOM↔R3F reconciler boundary */}
      <PrayerAvatar
        modelUrl={AVATAR_MODELS[gender]}
        poseRef={poseRef}
        scale={1}
      />

      {/* Controls */}
      <OrbitControls
        makeDefault
        minDistance={1}
        maxDistance={6}
        target={[0, 0.9, 0]}
      />
    </>
  );
}

export function EditorScene({ pose, gender }: EditorSceneProps) {
  // Ref bridge: DOM state → R3F scene (avoids reconciler boundary stale props)
  const poseRef = useRef<PrayerPoseConfig>(pose);
  poseRef.current = pose;

  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '500px',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(201, 168, 76, 0.1)',
      background: '#0d0d1a',
    }}>
      <Canvas
        camera={{ position: [0, 1.2, 2.5], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <SceneContent poseRef={poseRef} gender={gender} />
      </Canvas>
    </div>
  );
}
