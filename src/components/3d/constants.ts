import type { Gender } from './types';

/**
 * Mixamo bone suffixes (without prefix).
 * The actual prefix varies per model (mixamorig7, mixamorig2, mixamorig, etc.)
 * and Three.js strips colons from names. We detect the prefix dynamically.
 */
export const BONE_SUFFIXES = {
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

export type BoneSuffixKey = keyof typeof BONE_SUFFIXES;

/**
 * Detect the Mixamo prefix from a list of bone names.
 * Looks for any bone ending with "Hips" and extracts the prefix.
 */
export function detectBonePrefix(boneNames: string[]): string {
  const hipsBone = boneNames.find((n) => n.endsWith('Hips'));
  if (!hipsBone) return '';
  return hipsBone.slice(0, -4); // Remove "Hips"
}

/** Build full bone name map with a detected prefix */
export function buildBoneNames(prefix: string): Record<BoneSuffixKey, string> {
  const result = {} as Record<BoneSuffixKey, string>;
  for (const [key, suffix] of Object.entries(BONE_SUFFIXES)) {
    result[key as BoneSuffixKey] = `${prefix}${suffix}`;
  }
  return result;
}

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
