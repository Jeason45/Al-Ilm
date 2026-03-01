import type { Gender } from './types';

/** Mixamo/RPM bone names */
export const BONE_NAMES = {
  hips: 'Hips',
  spine: 'Spine',
  spine1: 'Spine1',
  spine2: 'Spine2',
  neck: 'Neck',
  head: 'Head',
  rightShoulder: 'RightShoulder',
  rightArm: 'RightArm',
  rightForeArm: 'RightForeArm',
  rightHand: 'RightHand',
  leftShoulder: 'LeftShoulder',
  leftArm: 'LeftArm',
  leftForeArm: 'LeftForeArm',
  leftHand: 'LeftHand',
  rightUpLeg: 'RightUpLeg',
  rightLeg: 'RightLeg',
  rightFoot: 'RightFoot',
  rightToeBase: 'RightToeBase',
  leftUpLeg: 'LeftUpLeg',
  leftLeg: 'LeftLeg',
  leftFoot: 'LeftFoot',
  leftToeBase: 'LeftToeBase',
} as const;

export type BoneName = (typeof BONE_NAMES)[keyof typeof BONE_NAMES];

/** Bone groups for editor UI */
export const BONE_GROUPS = {
  head: {
    label: 'Tête',
    bones: ['neck', 'head'] as const,
  },
  torso: {
    label: 'Torse',
    bones: ['hips', 'spine', 'spine1', 'spine2'] as const,
  },
  rightArm: {
    label: 'Bras droit',
    bones: ['rightShoulder', 'rightArm', 'rightForeArm', 'rightHand'] as const,
  },
  leftArm: {
    label: 'Bras gauche',
    bones: ['leftShoulder', 'leftArm', 'leftForeArm', 'leftHand'] as const,
  },
  rightLeg: {
    label: 'Jambe droite',
    bones: ['rightUpLeg', 'rightLeg', 'rightFoot', 'rightToeBase'] as const,
  },
  leftLeg: {
    label: 'Jambe gauche',
    bones: ['leftUpLeg', 'leftLeg', 'leftFoot', 'leftToeBase'] as const,
  },
} as const;

export type BoneGroupId = keyof typeof BONE_GROUPS;

/** Bone display labels for editor UI */
export const BONE_LABELS: Record<string, string> = {
  hips: 'Hanches',
  spine: 'Colonne',
  spine1: 'Colonne 1',
  spine2: 'Colonne 2',
  neck: 'Cou',
  head: 'Tête',
  rightShoulder: 'Épaule D',
  rightArm: 'Bras D',
  rightForeArm: 'Avant-bras D',
  rightHand: 'Main D',
  leftShoulder: 'Épaule G',
  leftArm: 'Bras G',
  leftForeArm: 'Avant-bras G',
  leftHand: 'Main G',
  rightUpLeg: 'Cuisse D',
  rightLeg: 'Tibia D',
  rightFoot: 'Pied D',
  rightToeBase: 'Orteils D',
  leftUpLeg: 'Cuisse G',
  leftLeg: 'Tibia G',
  leftFoot: 'Pied G',
  leftToeBase: 'Orteils G',
};

/** Avatar model paths */
export const AVATAR_MODELS: Record<Gender, string> = {
  male: '/models/prayer-male.glb',
  female: '/models/prayer-female.glb',
};
