'use client';

import { useRef, useEffect, useMemo } from 'react';
import { useFrame, useLoader, invalidate } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { val } from '@theatre/core';
import { BONE_SUFFIXES, detectBonePrefix, buildBoneNames, type BoneSuffixKey } from '../constants';
import type { Vector3Config } from '../types';
import {
  ALL_BONE_OBJECTS,
  hipsPositionObj,
} from './theatreSetup';

/** Map from pose config path to bone suffix key */
const POSE_PATH_TO_BONE: Record<string, BoneSuffixKey> = {
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

interface TheatreAvatarProps {
  modelUrl: string;
  scale?: number;
}

export function TheatreAvatar({ modelUrl, scale = 1 }: TheatreAvatarProps) {
  const gltf = useLoader(GLTFLoader, modelUrl, (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });

  const groupRef = useRef<THREE.Group>(null);
  const initialRotations = useRef<Map<string, THREE.Euler>>(new Map());
  const initialHipsY = useRef<number>(0);
  const bonesRef = useRef<Map<string, THREE.Bone>>(new Map());
  const boneNamesRef = useRef<Record<BoneSuffixKey, string> | null>(null);

  const clonedScene = useMemo(() => {
    return SkeletonUtils.clone(gltf.scene);
  }, [gltf.scene]);

  useEffect(() => {
    bonesRef.current = new Map();
    initialRotations.current = new Map();
    boneNamesRef.current = null;
  }, [clonedScene]);

  useFrame(() => {
    // Lazy bone capture on first frame
    if (bonesRef.current.size === 0 && groupRef.current) {
      const bones = new Map<string, THREE.Bone>();
      const rotations = new Map<string, THREE.Euler>();
      const allBoneNames: string[] = [];

      groupRef.current.traverse((child) => {
        if ((child as THREE.Bone).isBone) {
          const bone = child as THREE.Bone;
          bones.set(bone.name, bone);
          rotations.set(bone.name, bone.rotation.clone());
          allBoneNames.push(bone.name);
        }
      });

      if (bones.size > 0) {
        const prefix = detectBonePrefix(allBoneNames);
        boneNamesRef.current = buildBoneNames(prefix);

        const hipsName = boneNamesRef.current.hips;
        const hipsBone = bones.get(hipsName);
        if (hipsBone) {
          initialHipsY.current = hipsBone.position.y;
        }

        bonesRef.current = bones;
        initialRotations.current = rotations;
      }
    }

    const bones = bonesRef.current;
    const initRots = initialRotations.current;
    const boneNames = boneNamesRef.current;
    if (bones.size === 0 || !boneNames) return;

    // Read values from Theatre.js objects and apply to bones
    for (const { obj, path } of ALL_BONE_OBJECTS) {
      const posePath = `${path[0]}.${path[1]}`;
      const suffixKey = POSE_PATH_TO_BONE[posePath];
      if (!suffixKey) continue;

      const boneName = boneNames[suffixKey];
      const bone = bones.get(boneName);
      const initRot = initRots.get(boneName);
      if (!bone || !initRot) continue;

      const theatreVal = val(obj.props) as Vector3Config;
      bone.rotation.set(
        initRot.x + theatreVal.x,
        initRot.y + theatreVal.y,
        initRot.z + theatreVal.z,
      );
    }

    // Hips position Y
    const hipsBone = bones.get(boneNames.hips);
    if (hipsBone) {
      const hipsY = val(hipsPositionObj.props) as { y: number };
      hipsBone.position.y = initialHipsY.current + hipsY.y;
    }

    invalidate();
  });

  return (
    <group ref={groupRef} scale={scale}>
      <primitive object={clonedScene} />
    </group>
  );
}
