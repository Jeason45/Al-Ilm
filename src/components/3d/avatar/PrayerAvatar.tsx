'use client';

import { useRef, useEffect, useMemo } from 'react';
import { useFrame, useLoader, invalidate } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { BONE_NAMES } from '../constants';
import type { PrayerPoseConfig, Vector3Config } from '../types';
import { ZERO_POSE } from '../poses/defaults';

interface PrayerAvatarProps {
  modelUrl: string;
  pose?: PrayerPoseConfig;
  scale?: number;
}

type BoneKey = keyof typeof BONE_NAMES;

const POSE_TO_BONE: Record<string, BoneKey> = {
  'spine.hips': 'hips',
  'spine.spine': 'spine',
  'spine.spine1': 'spine1',
  'spine.spine2': 'spine2',
  'head.neck': 'neck',
  'head.head': 'head',
  'rightArm.shoulder': 'rightShoulder',
  'rightArm.arm': 'rightArm',
  'rightArm.foreArm': 'rightForeArm',
  'rightArm.hand': 'rightHand',
  'leftArm.shoulder': 'leftShoulder',
  'leftArm.arm': 'leftArm',
  'leftArm.foreArm': 'leftForeArm',
  'leftArm.hand': 'leftHand',
  'rightLeg.upLeg': 'rightUpLeg',
  'rightLeg.leg': 'rightLeg',
  'rightLeg.foot': 'rightFoot',
  'rightLeg.toeBase': 'rightToeBase',
  'leftLeg.upLeg': 'leftUpLeg',
  'leftLeg.leg': 'leftLeg',
  'leftLeg.foot': 'leftFoot',
  'leftLeg.toeBase': 'leftToeBase',
};

function getPoseRotation(pose: PrayerPoseConfig, path: string): Vector3Config {
  const [group, bone] = path.split('.');
  const groupData = pose[group as keyof PrayerPoseConfig];
  if (typeof groupData === 'number') return { x: 0, y: 0, z: 0 };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ((groupData as any)[bone] as Vector3Config | undefined) ?? { x: 0, y: 0, z: 0 };
}

export function PrayerAvatar({ modelUrl, pose = ZERO_POSE, scale = 1 }: PrayerAvatarProps) {
  const gltf = useLoader(GLTFLoader, modelUrl, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });

  const groupRef = useRef<THREE.Group>(null);
  const initialRotations = useRef<Map<string, THREE.Euler>>(new Map());
  const initialHipsY = useRef<number>(0);
  const bonesRef = useRef<Map<string, THREE.Bone>>(new Map());
  // Keep pose in a ref so useFrame always reads the latest value
  const poseRef = useRef<PrayerPoseConfig>(pose);
  poseRef.current = pose;

  const clonedScene = useMemo(() => {
    return SkeletonUtils.clone(gltf.scene);
  }, [gltf.scene]);

  // Capture bones — try in useEffect, retry in first useFrame if needed
  useEffect(() => {
    // Reset for new scene
    bonesRef.current = new Map();
    initialRotations.current = new Map();
  }, [clonedScene]);

  useFrame(() => {
    // Lazy bone capture: try on first frame if not yet captured
    if (bonesRef.current.size === 0 && groupRef.current) {
      const bones = new Map<string, THREE.Bone>();
      const rotations = new Map<string, THREE.Euler>();

      groupRef.current.traverse((child) => {
        if ((child as THREE.Bone).isBone) {
          const bone = child as THREE.Bone;
          bones.set(bone.name, bone);
          rotations.set(bone.name, bone.rotation.clone());

          if (bone.name === BONE_NAMES.hips) {
            initialHipsY.current = bone.position.y;
          }
        }
      });

      if (bones.size > 0) {
        bonesRef.current = bones;
        initialRotations.current = rotations;
        console.log(`[PrayerAvatar] Captured ${bones.size} bones`);
      }
    }

    const bones = bonesRef.current;
    const initRots = initialRotations.current;
    if (bones.size === 0) return;

    const currentPose = poseRef.current;

    for (const [posePath, boneKey] of Object.entries(POSE_TO_BONE)) {
      const boneName = BONE_NAMES[boneKey];
      const bone = bones.get(boneName);
      const initRot = initRots.get(boneName);
      if (!bone || !initRot) continue;

      const rot = getPoseRotation(currentPose, posePath);
      bone.rotation.set(
        initRot.x + rot.x,
        initRot.y + rot.y,
        initRot.z + rot.z,
      );
    }

    const hipsBone = bones.get(BONE_NAMES.hips);
    if (hipsBone) {
      hipsBone.position.y = initialHipsY.current + currentPose.hipsPositionY;
    }

    // Force frame invalidation (needed for "demand" frameloop)
    invalidate();
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}
