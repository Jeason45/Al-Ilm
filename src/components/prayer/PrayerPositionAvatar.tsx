'use client';

import { Suspense, useRef, useMemo, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useGraph, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, ContactShadows, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { clone as cloneSkeleton } from 'three/examples/jsm/utils/SkeletonUtils.js';
import type { PrayerPositionId } from '@/data/prayer-guide/types';
import { positions } from '@/data/prayer-guide/positions';

// ─── Default avatar URL (fallback) ───

const DEFAULT_AVATAR_URL = 'https://models.readyplayer.me/696ce18a29115399d7fe924c.glb';

// ─── Bone rotation config types ───

interface Vec3 {
  x: number;
  y: number;
  z: number;
}

interface PrayerPoseConfig {
  hips: { position: Vec3; rotation: Vec3 };
  spine: Vec3;
  spine1: Vec3;
  spine2: Vec3;
  neck: Vec3;
  head: Vec3;
  leftShoulder: Vec3;
  leftArm: Vec3;
  leftForeArm: Vec3;
  leftHand: Vec3;
  rightShoulder: Vec3;
  rightArm: Vec3;
  rightForeArm: Vec3;
  rightHand: Vec3;
  leftUpLeg: Vec3;
  leftLeg: Vec3;
  leftFoot: Vec3;
  rightUpLeg: Vec3;
  rightLeg: Vec3;
  rightFoot: Vec3;
}

// ─── Helper ───

const D = Math.PI / 180;
const v = (x: number, y: number, z: number): Vec3 => ({ x, y, z });
const ZERO: Vec3 = { x: 0, y: 0, z: 0 };

// ─── Prayer poses — bone rotations relative to T-pose initial ───

const PRAYER_POSES: Record<PrayerPositionId, PrayerPoseConfig> = {
  // Standing straight, arms at sides
  qiyam: {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: ZERO,
    head: v(-5 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.2, 0, 0.15),
    leftForeArm: v(0.05, 0, 0),
    leftHand: ZERO,
    rightShoulder: ZERO,
    rightArm: v(0.2, 0, -0.15),
    rightForeArm: v(0.05, 0, 0),
    rightHand: ZERO,
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  // Hands raised to ear level (opening takbir)
  takbir: {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: ZERO,
    head: v(-5 * D, 0, 0),
    leftShoulder: v(0, 0, 0.1),
    leftArm: v(-0.6, 0.3, 0.8),
    leftForeArm: v(-0.4, 0.6, 0),
    leftHand: v(0, 0.2, 0),
    rightShoulder: v(0, 0, -0.1),
    rightArm: v(-0.6, -0.3, -0.8),
    rightForeArm: v(-0.4, -0.6, 0),
    rightHand: v(0, -0.2, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  // Standing with hands folded on chest (right over left)
  'qiyam-hands': {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: v(-3 * D, 0, 0),
    spine2: ZERO,
    neck: ZERO,
    head: v(-8 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.4, 0, 0.55),
    leftForeArm: v(-1.2, 0.3, -0.2),
    leftHand: v(0, 0.3, 0),
    rightShoulder: ZERO,
    rightArm: v(0.4, 0, -0.55),
    rightForeArm: v(-1.2, -0.3, 0.2),
    rightHand: v(0, -0.3, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  // Bowing — back flat at ~90°, hands on knees
  ruku: {
    hips: { position: v(0, -0.15, 0.05), rotation: v(55 * D, 0, 0) },
    spine: v(10 * D, 0, 0),
    spine1: v(5 * D, 0, 0),
    spine2: v(5 * D, 0, 0),
    neck: v(-15 * D, 0, 0),
    head: v(-10 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.15, 0, 0.2),
    leftForeArm: v(0.1, 0, 0),
    leftHand: v(0.2, 0, 0),
    rightShoulder: ZERO,
    rightArm: v(0.15, 0, -0.2),
    rightForeArm: v(0.1, 0, 0),
    rightHand: v(0.2, 0, 0),
    leftUpLeg: v(-55 * D, 0, 0.02),
    leftLeg: v(5 * D, 0, 0),
    leftFoot: v(10 * D, 0, 0),
    rightUpLeg: v(-55 * D, 0, -0.02),
    rightLeg: v(5 * D, 0, 0),
    rightFoot: v(10 * D, 0, 0),
  },

  // Standing straight after ruku
  itidal: {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: ZERO,
    head: v(-3 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.2, 0, 0.18),
    leftForeArm: v(0.05, 0, 0),
    leftHand: ZERO,
    rightShoulder: ZERO,
    rightArm: v(0.2, 0, -0.18),
    rightForeArm: v(0.05, 0, 0),
    rightHand: ZERO,
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  // Full prostration — forehead on ground
  sujud: {
    hips: { position: v(0, -0.55, 0.25), rotation: v(80 * D, 0, 0) },
    spine: v(20 * D, 0, 0),
    spine1: v(10 * D, 0, 0),
    spine2: v(5 * D, 0, 0),
    neck: v(-20 * D, 0, 0),
    head: v(-15 * D, 0, 0),
    leftShoulder: v(0, 0, 0.1),
    leftArm: v(-0.2, 0.3, 0.6),
    leftForeArm: v(-0.5, 0, 0),
    leftHand: v(-0.3, 0, 0),
    rightShoulder: v(0, 0, -0.1),
    rightArm: v(-0.2, -0.3, -0.6),
    rightForeArm: v(-0.5, 0, 0),
    rightHand: v(-0.3, 0, 0),
    leftUpLeg: v(-80 * D, 0, 0.05),
    leftLeg: v(110 * D, 0, 0),
    leftFoot: v(-30 * D, 0, 0),
    rightUpLeg: v(-80 * D, 0, -0.05),
    rightLeg: v(110 * D, 0, 0),
    rightFoot: v(-30 * D, 0, 0),
  },

  // Sitting between two prostrations
  julus: {
    hips: { position: v(0, -0.55, 0), rotation: v(10 * D, 0, 0) },
    spine: v(-5 * D, 0, 0),
    spine1: v(-3 * D, 0, 0),
    spine2: ZERO,
    neck: ZERO,
    head: v(-5 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.35, 0, 0.3),
    leftForeArm: v(-0.7, 0, -0.1),
    leftHand: v(-0.2, 0, 0),
    rightShoulder: ZERO,
    rightArm: v(0.35, 0, -0.3),
    rightForeArm: v(-0.7, 0, 0.1),
    rightHand: v(-0.2, 0, 0),
    leftUpLeg: v(-90 * D, 0.2, 0.1),
    leftLeg: v(100 * D, 0, 0),
    leftFoot: v(-15 * D, 0, 0.3),
    rightUpLeg: v(-90 * D, -0.2, -0.1),
    rightLeg: v(100 * D, 0, 0),
    rightFoot: v(-15 * D, 0, -0.3),
  },

  // Sitting for tashahud — right index finger pointed
  tashahud: {
    hips: { position: v(0, -0.55, 0), rotation: v(10 * D, 0, 0) },
    spine: v(-5 * D, 0, 0),
    spine1: v(-3 * D, 0, 0),
    spine2: ZERO,
    neck: ZERO,
    head: v(-5 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.35, 0, 0.3),
    leftForeArm: v(-0.7, 0, -0.1),
    leftHand: v(-0.2, 0, 0),
    rightShoulder: ZERO,
    rightArm: v(0.5, -0.2, -0.35),
    rightForeArm: v(-0.9, -0.15, 0.1),
    rightHand: v(-0.1, -0.1, 0),
    leftUpLeg: v(-90 * D, 0.2, 0.1),
    leftLeg: v(100 * D, 0, 0),
    leftFoot: v(-15 * D, 0, 0.3),
    rightUpLeg: v(-90 * D, -0.2, -0.1),
    rightLeg: v(100 * D, 0, 0),
    rightFoot: v(-15 * D, 0, -0.3),
  },

  // Sitting, head turned right for salam
  salam: {
    hips: { position: v(0, -0.55, 0), rotation: v(10 * D, 0, 0) },
    spine: v(-5 * D, 0, 0),
    spine1: v(-3 * D, 0, 0),
    spine2: ZERO,
    neck: v(0, -35 * D, 0),
    head: v(-5 * D, -20 * D, 0),
    leftShoulder: ZERO,
    leftArm: v(0.35, 0, 0.3),
    leftForeArm: v(-0.7, 0, -0.1),
    leftHand: v(-0.2, 0, 0),
    rightShoulder: ZERO,
    rightArm: v(0.35, 0, -0.3),
    rightForeArm: v(-0.7, 0, 0.1),
    rightHand: v(-0.2, 0, 0),
    leftUpLeg: v(-90 * D, 0.2, 0.1),
    leftLeg: v(100 * D, 0, 0),
    leftFoot: v(-15 * D, 0, 0.3),
    rightUpLeg: v(-90 * D, -0.2, -0.1),
    rightLeg: v(100 * D, 0, 0),
    rightFoot: v(-15 * D, 0, -0.3),
  },

  // Standing with hands raised in du'a (qunut)
  qunut: {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: v(-3 * D, 0, 0),
    spine2: ZERO,
    neck: ZERO,
    head: v(-10 * D, 0, 0),
    leftShoulder: v(0, 0, 0.1),
    leftArm: v(-0.4, 0.2, 0.6),
    leftForeArm: v(-1.0, 0.3, 0),
    leftHand: v(-0.4, 0.2, 0),
    rightShoulder: v(0, 0, -0.1),
    rightArm: v(-0.4, -0.2, -0.6),
    rightForeArm: v(-1.0, -0.3, 0),
    rightHand: v(-0.4, -0.2, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  // ─── Wudu poses ───

  'wudu-hands': {
    hips: { position: v(0, 0, 0), rotation: v(5 * D, 0, 0) },
    spine: v(5 * D, 0, 0),
    spine1: ZERO,
    spine2: ZERO,
    neck: v(-15 * D, 0, 0),
    head: v(-10 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.5, 0.2, 0.4),
    leftForeArm: v(-0.8, 0.2, -0.2),
    leftHand: v(-0.3, 0.1, 0),
    rightShoulder: ZERO,
    rightArm: v(0.5, -0.2, -0.4),
    rightForeArm: v(-0.8, -0.2, 0.2),
    rightHand: v(-0.3, -0.1, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  'wudu-mouth': {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: v(-5 * D, 0, 0),
    head: v(-5 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.2, 0, 0.15),
    leftForeArm: v(0.05, 0, 0),
    leftHand: ZERO,
    rightShoulder: ZERO,
    rightArm: v(-0.3, -0.2, -0.6),
    rightForeArm: v(-1.2, -0.4, 0),
    rightHand: v(-0.2, -0.2, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  'wudu-nose': {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: v(-5 * D, 0, 0),
    head: v(-5 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.2, 0, 0.15),
    leftForeArm: v(0.05, 0, 0),
    leftHand: ZERO,
    rightShoulder: ZERO,
    rightArm: v(-0.5, -0.15, -0.5),
    rightForeArm: v(-1.3, -0.3, 0.1),
    rightHand: v(-0.1, -0.15, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  'wudu-face': {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: v(-5 * D, 0, 0),
    head: v(-5 * D, 0, 0),
    leftShoulder: v(0, 0, 0.1),
    leftArm: v(-0.5, 0.3, 0.7),
    leftForeArm: v(-1.2, 0.4, 0),
    leftHand: v(-0.2, 0.2, 0),
    rightShoulder: v(0, 0, -0.1),
    rightArm: v(-0.5, -0.3, -0.7),
    rightForeArm: v(-1.2, -0.4, 0),
    rightHand: v(-0.2, -0.2, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  'wudu-arms': {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: v(-10 * D, 0, 0),
    head: v(-10 * D, 0, 0),
    leftShoulder: v(0, 0, 0.15),
    leftArm: v(0.3, 0.4, 0.6),
    leftForeArm: v(-0.3, 0.2, -0.1),
    leftHand: v(-0.1, 0, 0),
    rightShoulder: ZERO,
    rightArm: v(0.3, -0.1, -0.3),
    rightForeArm: v(-0.6, -0.3, 0.2),
    rightHand: v(-0.2, -0.1, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  'wudu-head': {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: v(-5 * D, 0, 0),
    head: v(-8 * D, 0, 0),
    leftShoulder: v(0, 0, 0.15),
    leftArm: v(-0.7, 0.3, 0.7),
    leftForeArm: v(-0.9, 0.5, 0),
    leftHand: v(-0.3, 0.2, 0),
    rightShoulder: v(0, 0, -0.15),
    rightArm: v(-0.7, -0.3, -0.7),
    rightForeArm: v(-0.9, -0.5, 0),
    rightHand: v(-0.3, -0.2, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  'wudu-ears': {
    hips: { position: v(0, 0, 0), rotation: ZERO },
    spine: ZERO,
    spine1: ZERO,
    spine2: ZERO,
    neck: ZERO,
    head: v(-5 * D, 0, 0),
    leftShoulder: v(0, 0, 0.15),
    leftArm: v(-0.6, 0.4, 0.8),
    leftForeArm: v(-0.6, 0.5, 0),
    leftHand: v(-0.1, 0.2, 0),
    rightShoulder: v(0, 0, -0.15),
    rightArm: v(-0.6, -0.4, -0.8),
    rightForeArm: v(-0.6, -0.5, 0),
    rightHand: v(-0.1, -0.2, 0),
    leftUpLeg: v(0, 0, 0.02),
    leftLeg: ZERO,
    leftFoot: ZERO,
    rightUpLeg: v(0, 0, -0.02),
    rightLeg: ZERO,
    rightFoot: ZERO,
  },

  'wudu-feet': {
    hips: { position: v(0, -0.1, 0.05), rotation: v(40 * D, 0, 0) },
    spine: v(15 * D, 0, 0),
    spine1: v(10 * D, 0, 0),
    spine2: v(5 * D, 0, 0),
    neck: v(-15 * D, 0, 0),
    head: v(-10 * D, 0, 0),
    leftShoulder: ZERO,
    leftArm: v(0.15, 0, 0.2),
    leftForeArm: v(0.1, 0, 0),
    leftHand: v(0.2, 0, 0),
    rightShoulder: ZERO,
    rightArm: v(0.15, 0, -0.2),
    rightForeArm: v(0.1, 0, 0),
    rightHand: v(0.2, 0, 0),
    leftUpLeg: v(-40 * D, 0, 0.02),
    leftLeg: v(15 * D, 0, 0),
    leftFoot: v(10 * D, 0, 0),
    rightUpLeg: v(-40 * D, 0, -0.02),
    rightLeg: v(15 * D, 0, 0),
    rightFoot: v(10 * D, 0, 0),
  },
};

// ─── Lerp helpers ───

function lerpNum(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function lerpVec3(a: Vec3, b: Vec3, t: number): Vec3 {
  return { x: lerpNum(a.x, b.x, t), y: lerpNum(a.y, b.y, t), z: lerpNum(a.z, b.z, t) };
}

function lerpPose(a: PrayerPoseConfig, b: PrayerPoseConfig, t: number): PrayerPoseConfig {
  return {
    hips: {
      position: lerpVec3(a.hips.position, b.hips.position, t),
      rotation: lerpVec3(a.hips.rotation, b.hips.rotation, t),
    },
    spine: lerpVec3(a.spine, b.spine, t),
    spine1: lerpVec3(a.spine1, b.spine1, t),
    spine2: lerpVec3(a.spine2, b.spine2, t),
    neck: lerpVec3(a.neck, b.neck, t),
    head: lerpVec3(a.head, b.head, t),
    leftShoulder: lerpVec3(a.leftShoulder, b.leftShoulder, t),
    leftArm: lerpVec3(a.leftArm, b.leftArm, t),
    leftForeArm: lerpVec3(a.leftForeArm, b.leftForeArm, t),
    leftHand: lerpVec3(a.leftHand, b.leftHand, t),
    rightShoulder: lerpVec3(a.rightShoulder, b.rightShoulder, t),
    rightArm: lerpVec3(a.rightArm, b.rightArm, t),
    rightForeArm: lerpVec3(a.rightForeArm, b.rightForeArm, t),
    rightHand: lerpVec3(a.rightHand, b.rightHand, t),
    leftUpLeg: lerpVec3(a.leftUpLeg, b.leftUpLeg, t),
    leftLeg: lerpVec3(a.leftLeg, b.leftLeg, t),
    leftFoot: lerpVec3(a.leftFoot, b.leftFoot, t),
    rightUpLeg: lerpVec3(a.rightUpLeg, b.rightUpLeg, t),
    rightLeg: lerpVec3(a.rightLeg, b.rightLeg, t),
    rightFoot: lerpVec3(a.rightFoot, b.rightFoot, t),
  };
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

// ─── Bone names mapping (Mixamo convention used by Ready Player Me) ───

const BONE_MAP: Record<keyof Omit<PrayerPoseConfig, 'hips'>, string> = {
  spine: 'Spine',
  spine1: 'Spine1',
  spine2: 'Spine2',
  neck: 'Neck',
  head: 'Head',
  leftShoulder: 'LeftShoulder',
  leftArm: 'LeftArm',
  leftForeArm: 'LeftForeArm',
  leftHand: 'LeftHand',
  rightShoulder: 'RightShoulder',
  rightArm: 'RightArm',
  rightForeArm: 'RightForeArm',
  rightHand: 'RightHand',
  leftUpLeg: 'LeftUpLeg',
  leftLeg: 'LeftLeg',
  leftFoot: 'LeftFoot',
  rightUpLeg: 'RightUpLeg',
  rightLeg: 'RightLeg',
  rightFoot: 'RightFoot',
};

// ─── Auto-frame camera to fit model bounding box ───

function CameraFramer({ clone }: { clone: THREE.Object3D }) {
  const { camera } = useThree();
  const targetPos = useRef(new THREE.Vector3(0, 0.85, 2.8));
  const targetLookAt = useRef(new THREE.Vector3(0, 0.85, 0));
  const currentLookAt = useRef(new THREE.Vector3(0, 0.85, 0));
  const initialized = useRef(false);

  const reframe = useCallback(() => {
    const box = new THREE.Box3().setFromObject(clone);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    // Camera distance based on model height
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = (camera as THREE.PerspectiveCamera).fov * (Math.PI / 180);
    const dist = (maxDim / 2) / Math.tan(fov / 2) * 1.15;

    targetPos.current.set(0, center.y, Math.max(dist, 2.2));
    targetLookAt.current.copy(center);
  }, [clone, camera]);

  // Initial frame
  useEffect(() => {
    reframe();
    // Snap camera immediately on first frame
    camera.position.copy(targetPos.current);
    currentLookAt.current.copy(targetLookAt.current);
    camera.lookAt(currentLookAt.current);
    initialized.current = true;
  }, [reframe, camera]);

  // Smooth camera transition every frame
  useFrame((_, delta) => {
    if (!initialized.current) return;

    // Recompute target from bounding box
    reframe();

    // Smoothly lerp camera position
    const speed = 3;
    const t = 1 - Math.exp(-speed * delta);

    camera.position.lerp(targetPos.current, t);
    currentLookAt.current.lerp(targetLookAt.current, t);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}

// ─── Avatar model component ───

function AvatarModel({ targetPose, avatarUrl }: { targetPose: PrayerPositionId; avatarUrl: string }) {
  const { scene } = useGLTF(avatarUrl);
  const clone = useMemo(() => cloneSkeleton(scene), [scene]);
  const { nodes } = useGraph(clone);

  // Store initial bone rotations to prevent drift
  const initialRotations = useRef<Record<string, THREE.Euler>>({});
  const initialHipsPos = useRef<THREE.Vector3>(new THREE.Vector3());

  // Transition state
  const prevPoseRef = useRef<PrayerPoseConfig>(PRAYER_POSES[targetPose]);
  const currentPoseRef = useRef<PrayerPoseConfig>(PRAYER_POSES[targetPose]);
  const progressRef = useRef(1);
  const prevTargetRef = useRef(targetPose);

  // Capture initial rotations on mount
  useEffect(() => {
    const allBones = ['Hips', ...Object.values(BONE_MAP)];
    allBones.forEach(boneName => {
      const bone = nodes[boneName] as THREE.Bone | undefined;
      if (bone) {
        initialRotations.current[boneName] = bone.rotation.clone();
      }
    });
    const hips = nodes['Hips'] as THREE.Bone | undefined;
    if (hips) {
      initialHipsPos.current.copy(hips.position);
    }
  }, [nodes]);

  useFrame((_, delta) => {
    const target = PRAYER_POSES[targetPose];

    // Detect pose change → start transition
    if (targetPose !== prevTargetRef.current) {
      prevPoseRef.current = { ...currentPoseRef.current };
      progressRef.current = 0;
      prevTargetRef.current = targetPose;
    }

    // Advance transition
    const speed = 2.5;
    progressRef.current = Math.min(1, progressRef.current + delta * speed);
    const t = easeOutCubic(progressRef.current);

    const cur = lerpPose(prevPoseRef.current, target, t);
    currentPoseRef.current = cur;

    // Apply hips position + rotation
    const hips = nodes['Hips'] as THREE.Bone | undefined;
    const initHipsRot = initialRotations.current['Hips'];
    if (hips && initHipsRot) {
      hips.position.set(
        initialHipsPos.current.x + cur.hips.position.x,
        initialHipsPos.current.y + cur.hips.position.y,
        initialHipsPos.current.z + cur.hips.position.z,
      );
      hips.rotation.set(
        initHipsRot.x + cur.hips.rotation.x,
        initHipsRot.y + cur.hips.rotation.y,
        initHipsRot.z + cur.hips.rotation.z,
      );
    }

    // Apply rotations to all other bones
    for (const [poseKey, boneName] of Object.entries(BONE_MAP)) {
      const bone = nodes[boneName] as THREE.Bone | undefined;
      const init = initialRotations.current[boneName];
      if (!bone || !init) continue;

      const rot = cur[poseKey as keyof Omit<PrayerPoseConfig, 'hips'>];

      // Arms need YZX order for correct rotation
      if (boneName.includes('Arm') || boneName.includes('ForeArm') || boneName.includes('Hand')) {
        bone.rotation.order = 'YZX';
      }

      bone.rotation.set(
        init.x + rot.x,
        init.y + rot.y,
        init.z + rot.z,
      );
    }
  });

  return (
    <>
      <primitive object={clone} />
      <CameraFramer clone={clone} />
    </>
  );
}

// ─── Loading spinner ───

function LoadingFallback() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 2;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0.85, 0]}>
      <torusGeometry args={[0.3, 0.05, 8, 32]} />
      <meshStandardMaterial color="#C9A84C" transparent opacity={0.6} />
    </mesh>
  );
}

// ─── Main component ───

interface PrayerPositionAvatarProps {
  activePosition: PrayerPositionId;
  avatarUrl?: string;
}

export function PrayerPositionAvatar({ activePosition, avatarUrl = DEFAULT_AVATAR_URL }: PrayerPositionAvatarProps) {
  const active = positions.find(p => p.id === activePosition);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
      <div
        style={{
          width: '100%',
          maxWidth: '340px',
          aspectRatio: '3 / 4',
          borderRadius: '20px',
          background: 'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.02) 50%, transparent 100%)',
          border: '1px solid rgba(201, 168, 76, 0.12)',
          boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(201, 168, 76, 0.04)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Canvas
          camera={{ position: [0, 0.85, 2.8], fov: 35, near: 0.1, far: 100 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
          shadows
        >
          {/* Lighting — soft studio setup */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[3, 6, 4]}
            intensity={1.2}
            color="#fff8e8"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-3, 4, -2]} intensity={0.4} color="#e8e0ff" />
          <pointLight position={[0, 3, 2]} intensity={0.4} color="#C9A84C" distance={8} />
          <pointLight position={[-2, 1, 0]} intensity={0.2} color="#fff" distance={6} />

          {/* Environment for reflections */}
          <Environment preset="studio" environmentIntensity={0.3} />

          {/* OrbitControls — rotate only, no pan, limited angles */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI * 0.2}
            maxPolarAngle={Math.PI * 0.65}
            target={[0, 0.85, 0]}
            enableDamping
            dampingFactor={0.08}
          />

          <Suspense fallback={<LoadingFallback />}>
            <AvatarModel key={avatarUrl} targetPose={activePosition} avatarUrl={avatarUrl} />
          </Suspense>

          {/* Contact shadow — soft ground shadow */}
          <ContactShadows
            position={[0, 0, 0]}
            opacity={0.4}
            scale={3}
            blur={2.5}
            far={2}
            color="#000000"
          />
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

// Preload the default GLB model
useGLTF.preload(DEFAULT_AVATAR_URL);
