'use client';

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import type { PrayerPositionId } from '@/data/prayer-guide/types';
import { positions } from '@/data/prayer-guide/positions';

// ─── Pose data: each body part has [x, y, z] position and [rx, ry, rz] rotation ───

interface BodyPose {
  // root offset
  root: [number, number, number];
  // head
  head: { pos: [number, number, number]; rot: [number, number, number] };
  // torso
  torso: { pos: [number, number, number]; rot: [number, number, number] };
  // upper arms
  leftUpperArm: { rot: [number, number, number] };
  rightUpperArm: { rot: [number, number, number] };
  // forearms
  leftForearm: { rot: [number, number, number] };
  rightForearm: { rot: [number, number, number] };
  // upper legs
  leftUpperLeg: { rot: [number, number, number] };
  rightUpperLeg: { rot: [number, number, number] };
  // lower legs
  leftLowerLeg: { rot: [number, number, number] };
  rightLowerLeg: { rot: [number, number, number] };
}

const DEG = Math.PI / 180;

const POSES: Record<PrayerPositionId, BodyPose> = {
  qiyam: {
    root: [0, 0, 0],
    head: { pos: [0, 1.65, 0], rot: [0, 0, 0] },
    torso: { pos: [0, 1.1, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [0, 0, 5 * DEG] },
    rightUpperArm: { rot: [0, 0, -5 * DEG] },
    leftForearm: { rot: [0, 0, 0] },
    rightForearm: { rot: [0, 0, 0] },
    leftUpperLeg: { rot: [0, 0, 0] },
    rightUpperLeg: { rot: [0, 0, 0] },
    leftLowerLeg: { rot: [0, 0, 0] },
    rightLowerLeg: { rot: [0, 0, 0] },
  },
  takbir: {
    root: [0, 0, 0],
    head: { pos: [0, 1.65, 0], rot: [0, 0, 0] },
    torso: { pos: [0, 1.1, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [-10 * DEG, 0, 80 * DEG] },
    rightUpperArm: { rot: [-10 * DEG, 0, -80 * DEG] },
    leftForearm: { rot: [-120 * DEG, 0, 0] },
    rightForearm: { rot: [-120 * DEG, 0, 0] },
    leftUpperLeg: { rot: [0, 0, 0] },
    rightUpperLeg: { rot: [0, 0, 0] },
    leftLowerLeg: { rot: [0, 0, 0] },
    rightLowerLeg: { rot: [0, 0, 0] },
  },
  'qiyam-hands': {
    root: [0, 0, 0],
    head: { pos: [0, 1.65, 0], rot: [5 * DEG, 0, 0] },
    torso: { pos: [0, 1.1, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [20 * DEG, 0, 30 * DEG] },
    rightUpperArm: { rot: [20 * DEG, 0, -30 * DEG] },
    leftForearm: { rot: [-80 * DEG, 0, -20 * DEG] },
    rightForearm: { rot: [-80 * DEG, 0, 20 * DEG] },
    leftUpperLeg: { rot: [0, 0, 0] },
    rightUpperLeg: { rot: [0, 0, 0] },
    leftLowerLeg: { rot: [0, 0, 0] },
    rightLowerLeg: { rot: [0, 0, 0] },
  },
  ruku: {
    root: [0, -0.35, 0],
    head: { pos: [0, 1.2, -0.5], rot: [0, 0, 0] },
    torso: { pos: [0, 0.95, -0.2], rot: [80 * DEG, 0, 0] },
    leftUpperArm: { rot: [10 * DEG, 0, 10 * DEG] },
    rightUpperArm: { rot: [10 * DEG, 0, -10 * DEG] },
    leftForearm: { rot: [0, 0, 0] },
    rightForearm: { rot: [0, 0, 0] },
    leftUpperLeg: { rot: [0, 0, 0] },
    rightUpperLeg: { rot: [0, 0, 0] },
    leftLowerLeg: { rot: [0, 0, 0] },
    rightLowerLeg: { rot: [0, 0, 0] },
  },
  itidal: {
    root: [0, 0, 0],
    head: { pos: [0, 1.65, 0], rot: [0, 0, 0] },
    torso: { pos: [0, 1.1, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [0, 0, 8 * DEG] },
    rightUpperArm: { rot: [0, 0, -8 * DEG] },
    leftForearm: { rot: [0, 0, 0] },
    rightForearm: { rot: [0, 0, 0] },
    leftUpperLeg: { rot: [0, 0, 0] },
    rightUpperLeg: { rot: [0, 0, 0] },
    leftLowerLeg: { rot: [0, 0, 0] },
    rightLowerLeg: { rot: [0, 0, 0] },
  },
  sujud: {
    root: [0, -0.9, 0.2],
    head: { pos: [0, 0.15, -0.7], rot: [40 * DEG, 0, 0] },
    torso: { pos: [0, 0.45, -0.25], rot: [110 * DEG, 0, 0] },
    leftUpperArm: { rot: [30 * DEG, 0, 30 * DEG] },
    rightUpperArm: { rot: [30 * DEG, 0, -30 * DEG] },
    leftForearm: { rot: [-20 * DEG, 0, 0] },
    rightForearm: { rot: [-20 * DEG, 0, 0] },
    leftUpperLeg: { rot: [-60 * DEG, 0, 0] },
    rightUpperLeg: { rot: [-60 * DEG, 0, 0] },
    leftLowerLeg: { rot: [-110 * DEG, 0, 0] },
    rightLowerLeg: { rot: [-110 * DEG, 0, 0] },
  },
  julus: {
    root: [0, -0.65, 0],
    head: { pos: [0, 1.1, 0], rot: [5 * DEG, 0, 0] },
    torso: { pos: [0, 0.6, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [15 * DEG, 0, 10 * DEG] },
    rightUpperArm: { rot: [15 * DEG, 0, -10 * DEG] },
    leftForearm: { rot: [-20 * DEG, 0, 0] },
    rightForearm: { rot: [-20 * DEG, 0, 0] },
    leftUpperLeg: { rot: [-90 * DEG, 0, 0] },
    rightUpperLeg: { rot: [-90 * DEG, 0, 0] },
    leftLowerLeg: { rot: [-90 * DEG, 0, 0] },
    rightLowerLeg: { rot: [-90 * DEG, 0, 0] },
  },
  tashahud: {
    root: [0, -0.65, 0],
    head: { pos: [0, 1.1, 0], rot: [5 * DEG, 0, 0] },
    torso: { pos: [0, 0.6, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [15 * DEG, 0, 10 * DEG] },
    rightUpperArm: { rot: [30 * DEG, 0, -15 * DEG] },
    leftForearm: { rot: [-20 * DEG, 0, 0] },
    rightForearm: { rot: [-60 * DEG, 10 * DEG, 0] },
    leftUpperLeg: { rot: [-90 * DEG, 0, 0] },
    rightUpperLeg: { rot: [-90 * DEG, 0, 0] },
    leftLowerLeg: { rot: [-90 * DEG, 0, 0] },
    rightLowerLeg: { rot: [-90 * DEG, 0, 0] },
  },
  salam: {
    root: [0, -0.65, 0],
    head: { pos: [0, 1.1, 0], rot: [0, -45 * DEG, 0] },
    torso: { pos: [0, 0.6, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [15 * DEG, 0, 10 * DEG] },
    rightUpperArm: { rot: [15 * DEG, 0, -10 * DEG] },
    leftForearm: { rot: [-20 * DEG, 0, 0] },
    rightForearm: { rot: [-20 * DEG, 0, 0] },
    leftUpperLeg: { rot: [-90 * DEG, 0, 0] },
    rightUpperLeg: { rot: [-90 * DEG, 0, 0] },
    leftLowerLeg: { rot: [-90 * DEG, 0, 0] },
    rightLowerLeg: { rot: [-90 * DEG, 0, 0] },
  },
  qunut: {
    root: [0, 0, 0],
    head: { pos: [0, 1.65, 0], rot: [10 * DEG, 0, 0] },
    torso: { pos: [0, 1.1, 0], rot: [0, 0, 0] },
    leftUpperArm: { rot: [-40 * DEG, 0, 30 * DEG] },
    rightUpperArm: { rot: [-40 * DEG, 0, -30 * DEG] },
    leftForearm: { rot: [-70 * DEG, 20 * DEG, 0] },
    rightForearm: { rot: [-70 * DEG, -20 * DEG, 0] },
    leftUpperLeg: { rot: [0, 0, 0] },
    rightUpperLeg: { rot: [0, 0, 0] },
    leftLowerLeg: { rot: [0, 0, 0] },
    rightLowerLeg: { rot: [0, 0, 0] },
  },
};

// ─── Lerp helpers ───

function lerpVal(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpArr(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [lerpVal(a[0], b[0], t), lerpVal(a[1], b[1], t), lerpVal(a[2], b[2], t)];
}

// ─── Humanoid body ───

const GOLD = '#C9A84C';

function Humanoid({ targetPose }: { targetPose: PrayerPositionId }) {
  const pose = POSES[targetPose];
  const prevRef = useRef<BodyPose>(pose);
  const currentRef = useRef<BodyPose>(pose);
  const progressRef = useRef(1);
  const prevTargetRef = useRef(targetPose);

  // Body part refs
  const rootRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const torsoRef = useRef<THREE.Mesh>(null);
  const lUpperArmRef = useRef<THREE.Mesh>(null);
  const rUpperArmRef = useRef<THREE.Mesh>(null);
  const lForearmRef = useRef<THREE.Mesh>(null);
  const rForearmRef = useRef<THREE.Mesh>(null);
  const lUpperLegRef = useRef<THREE.Mesh>(null);
  const rUpperLegRef = useRef<THREE.Mesh>(null);
  const lLowerLegRef = useRef<THREE.Mesh>(null);
  const rLowerLegRef = useRef<THREE.Mesh>(null);

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: GOLD,
    roughness: 0.45,
    metalness: 0.15,
  }), []);

  useFrame((_, delta) => {
    const target = POSES[targetPose];

    // Detect pose change
    if (targetPose !== prevTargetRef.current) {
      prevRef.current = { ...currentRef.current };
      progressRef.current = 0;
      prevTargetRef.current = targetPose;
    }

    // Animate
    const speed = 3;
    progressRef.current = Math.min(1, progressRef.current + delta * speed);
    const t = 1 - Math.pow(1 - progressRef.current, 3); // ease-out cubic

    const prev = prevRef.current;

    // Interpolate current pose
    const cur: BodyPose = {
      root: lerpArr(prev.root, target.root, t),
      head: { pos: lerpArr(prev.head.pos, target.head.pos, t), rot: lerpArr(prev.head.rot, target.head.rot, t) },
      torso: { pos: lerpArr(prev.torso.pos, target.torso.pos, t), rot: lerpArr(prev.torso.rot, target.torso.rot, t) },
      leftUpperArm: { rot: lerpArr(prev.leftUpperArm.rot, target.leftUpperArm.rot, t) },
      rightUpperArm: { rot: lerpArr(prev.rightUpperArm.rot, target.rightUpperArm.rot, t) },
      leftForearm: { rot: lerpArr(prev.leftForearm.rot, target.leftForearm.rot, t) },
      rightForearm: { rot: lerpArr(prev.rightForearm.rot, target.rightForearm.rot, t) },
      leftUpperLeg: { rot: lerpArr(prev.leftUpperLeg.rot, target.leftUpperLeg.rot, t) },
      rightUpperLeg: { rot: lerpArr(prev.rightUpperLeg.rot, target.rightUpperLeg.rot, t) },
      leftLowerLeg: { rot: lerpArr(prev.leftLowerLeg.rot, target.leftLowerLeg.rot, t) },
      rightLowerLeg: { rot: lerpArr(prev.rightLowerLeg.rot, target.rightLowerLeg.rot, t) },
    };
    currentRef.current = cur;

    // Apply to refs
    if (rootRef.current) rootRef.current.position.set(...cur.root);
    if (headRef.current) {
      headRef.current.position.set(...cur.head.pos);
      headRef.current.rotation.set(...cur.head.rot);
    }
    if (torsoRef.current) {
      torsoRef.current.position.set(...cur.torso.pos);
      torsoRef.current.rotation.set(...cur.torso.rot);
    }

    // Arms — positioned relative to shoulders
    const shoulderY = cur.torso.pos[1] + 0.35;
    if (lUpperArmRef.current) {
      lUpperArmRef.current.position.set(-0.28, shoulderY, cur.torso.pos[2]);
      lUpperArmRef.current.rotation.set(...cur.leftUpperArm.rot);
    }
    if (rUpperArmRef.current) {
      rUpperArmRef.current.position.set(0.28, shoulderY, cur.torso.pos[2]);
      rUpperArmRef.current.rotation.set(...cur.rightUpperArm.rot);
    }
    if (lForearmRef.current) {
      lForearmRef.current.position.set(-0.28, shoulderY - 0.3, cur.torso.pos[2]);
      lForearmRef.current.rotation.set(...cur.leftForearm.rot);
    }
    if (rForearmRef.current) {
      rForearmRef.current.position.set(0.28, shoulderY - 0.3, cur.torso.pos[2]);
      rForearmRef.current.rotation.set(...cur.rightForearm.rot);
    }

    // Legs — positioned relative to hips
    const hipY = cur.torso.pos[1] - 0.35;
    if (lUpperLegRef.current) {
      lUpperLegRef.current.position.set(-0.12, hipY, cur.torso.pos[2]);
      lUpperLegRef.current.rotation.set(...cur.leftUpperLeg.rot);
    }
    if (rUpperLegRef.current) {
      rUpperLegRef.current.position.set(0.12, hipY, cur.torso.pos[2]);
      rUpperLegRef.current.rotation.set(...cur.rightUpperLeg.rot);
    }
    if (lLowerLegRef.current) {
      lLowerLegRef.current.position.set(-0.12, hipY - 0.4, cur.torso.pos[2]);
      lLowerLegRef.current.rotation.set(...cur.leftLowerLeg.rot);
    }
    if (rLowerLegRef.current) {
      rLowerLegRef.current.position.set(0.12, hipY - 0.4, cur.torso.pos[2]);
      rLowerLegRef.current.rotation.set(...cur.rightLowerLeg.rot);
    }
  });

  return (
    <group ref={rootRef}>
      {/* Head */}
      <mesh ref={headRef} material={material}>
        <sphereGeometry args={[0.12, 16, 16]} />
      </mesh>

      {/* Torso */}
      <mesh ref={torsoRef} material={material}>
        <capsuleGeometry args={[0.16, 0.45, 8, 16]} />
      </mesh>

      {/* Upper Arms */}
      <mesh ref={lUpperArmRef} material={material}>
        <capsuleGeometry args={[0.05, 0.22, 6, 12]} />
      </mesh>
      <mesh ref={rUpperArmRef} material={material}>
        <capsuleGeometry args={[0.05, 0.22, 6, 12]} />
      </mesh>

      {/* Forearms */}
      <mesh ref={lForearmRef} material={material}>
        <capsuleGeometry args={[0.04, 0.2, 6, 12]} />
      </mesh>
      <mesh ref={rForearmRef} material={material}>
        <capsuleGeometry args={[0.04, 0.2, 6, 12]} />
      </mesh>

      {/* Upper Legs */}
      <mesh ref={lUpperLegRef} material={material}>
        <capsuleGeometry args={[0.065, 0.3, 6, 12]} />
      </mesh>
      <mesh ref={rUpperLegRef} material={material}>
        <capsuleGeometry args={[0.065, 0.3, 6, 12]} />
      </mesh>

      {/* Lower Legs */}
      <mesh ref={lLowerLegRef} material={material}>
        <capsuleGeometry args={[0.05, 0.3, 6, 12]} />
      </mesh>
      <mesh ref={rLowerLegRef} material={material}>
        <capsuleGeometry args={[0.05, 0.3, 6, 12]} />
      </mesh>
    </group>
  );
}

// ─── Ground plane ───

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]} receiveShadow>
      <circleGeometry args={[1.2, 32]} />
      <meshStandardMaterial
        color="#1a1a1a"
        transparent
        opacity={0.3}
        roughness={1}
      />
    </mesh>
  );
}

// ─── Main component ───

interface PrayerPositionAvatarProps {
  activePosition: PrayerPositionId;
}

export function PrayerPositionAvatar({ activePosition }: PrayerPositionAvatarProps) {
  const active = positions.find(p => p.id === activePosition);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
      <div
        style={{
          width: '220px',
          height: '220px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 70%, transparent 100%)',
          border: '1.5px solid rgba(201, 168, 76, 0.18)',
          boxShadow: '0 0 40px rgba(201, 168, 76, 0.06)',
          overflow: 'hidden',
        }}
      >
        <Canvas
          camera={{ position: [0, 0.6, 3], fov: 35 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 3, 2]} intensity={0.8} color="#fff5e0" />
          <directionalLight position={[-1, 1, -1]} intensity={0.3} color="#e0d8ff" />
          <Suspense fallback={null}>
            <Humanoid targetPose={activePosition} />
            <Ground />
          </Suspense>
        </Canvas>
      </div>

      {active && (
        <div style={{ textAlign: 'center' }}>
          <p className="font-amiri" style={{ fontSize: '1.125rem', color: 'var(--color-gold)', opacity: 0.85 }}>
            {active.nameAr}
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
            {active.name}
          </p>
        </div>
      )}
    </div>
  );
}
