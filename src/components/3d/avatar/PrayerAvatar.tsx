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
  /** Pass either a pose object or a ref to a pose (ref avoids DOM↔R3F boundary issues) */
  pose?: PrayerPoseConfig;
  poseRef?: React.RefObject<PrayerPoseConfig>;
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

export function PrayerAvatar({ modelUrl, pose, poseRef: externalPoseRef, scale = 1 }: PrayerAvatarProps) {
  const gltf = useLoader(GLTFLoader, modelUrl, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });

  const groupRef = useRef<THREE.Group>(null);
  const initialRotations = useRef<Map<string, THREE.Euler>>(new Map());
  const initialHipsY = useRef<number>(0);
  const bonesRef = useRef<Map<string, THREE.Bone>>(new Map());

  // Internal ref fallback when pose is passed as value prop
  const internalPoseRef = useRef<PrayerPoseConfig>(pose ?? ZERO_POSE);
  if (pose) internalPoseRef.current = pose;

  // Use external ref if provided, otherwise use internal
  const activePoseRef = externalPoseRef ?? internalPoseRef;

  const clonedScene = useMemo(() => {
    return SkeletonUtils.clone(gltf.scene);
  }, [gltf.scene]);

  useEffect(() => {
    bonesRef.current = new Map();
    initialRotations.current = new Map();
  }, [clonedScene]);

  useFrame(() => {
    // Lazy bone capture on first frame
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
        console.log(`[PrayerAvatar] Captured ${bones.size} bones:`, [...bones.keys()].join(', '));
      } else {
        console.warn('[PrayerAvatar] No bones found in scene');
      }
    }

    const bones = bonesRef.current;
    const initRots = initialRotations.current;
    if (bones.size === 0) return;

    const currentPose = activePoseRef.current;

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

    invalidate();
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}
