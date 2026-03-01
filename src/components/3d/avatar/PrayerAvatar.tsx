'use client';

import { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { BONE_NAMES } from '../constants';
import type { PrayerPoseConfig, Vector3Config } from '../types';
import { ZERO_POSE } from '../poses/defaults';

interface PrayerAvatarProps {
  modelUrl: string;
  pose?: PrayerPoseConfig;
  /** Scale factor for the avatar */
  scale?: number;
}

type BoneKey = keyof typeof BONE_NAMES;

/** Map from pose config path to Mixamo bone name */
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
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef<THREE.Group>(null);
  const initialRotations = useRef<Map<string, THREE.Euler>>(new Map());
  const initialHipsY = useRef<number>(0);
  const bonesRef = useRef<Map<string, THREE.Bone>>(new Map());

  const clonedScene = useMemo(() => {
    return SkeletonUtils.clone(scene);
  }, [scene]);

  // Capture initial rotations and bone references on mount
  useEffect(() => {
    if (!groupRef.current) return;

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

    bonesRef.current = bones;
    initialRotations.current = rotations;
  }, [clonedScene]);

  // Apply pose each frame
  useFrame(() => {
    const bones = bonesRef.current;
    const initRots = initialRotations.current;
    if (bones.size === 0) return;

    for (const [posePath, boneKey] of Object.entries(POSE_TO_BONE)) {
      const boneName = BONE_NAMES[boneKey];
      const bone = bones.get(boneName);
      const initRot = initRots.get(boneName);
      if (!bone || !initRot) continue;

      const rot = getPoseRotation(pose, posePath);
      bone.rotation.set(
        initRot.x + rot.x,
        initRot.y + rot.y,
        initRot.z + rot.z,
      );
    }

    // Apply hips Y offset
    const hipsBone = bones.get(BONE_NAMES.hips);
    if (hipsBone) {
      hipsBone.position.y = initialHipsY.current + pose.hipsPositionY;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}
