import type { Gender } from './types';

/** Mixamo bone name prefix (varies by export tool: mixamorig, mixamorig7, etc.) */
const P = 'mixamorig7:';

/** Mixamo bone names with prefix */
export const BONE_NAMES = {
  hips: `${P}Hips`,
  spine: `${P}Spine`,
  spine1: `${P}Spine1`,
  spine2: `${P}Spine2`,
  neck: `${P}Neck`,
  head: `${P}Head`,
  rightShoulder: `${P}RightShoulder`,
  rightArm: `${P}RightArm`,
  rightForeArm: `${P}RightForeArm`,
  rightHand: `${P}RightHand`,
  leftShoulder: `${P}LeftShoulder`,
  leftArm: `${P}LeftArm`,
  leftForeArm: `${P}LeftForeArm`,
  leftHand: `${P}LeftHand`,
  rightUpLeg: `${P}RightUpLeg`,
  rightLeg: `${P}RightLeg`,
  rightFoot: `${P}RightFoot`,
  rightToeBase: `${P}RightToeBase`,
  leftUpLeg: `${P}LeftUpLeg`,
  leftLeg: `${P}LeftLeg`,
  leftFoot: `${P}LeftFoot`,
  leftToeBase: `${P}LeftToeBase`,
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
