/** Euler rotation in radians */
export interface Vector3Config {
  x: number;
  y: number;
  z: number;
}

export interface SpinePoseConfig {
  hips: Vector3Config;
  spine: Vector3Config;
  spine1: Vector3Config;
  spine2: Vector3Config;
}

export interface HeadPoseConfig {
  neck: Vector3Config;
  head: Vector3Config;
}

export interface ArmPoseConfig {
  shoulder: Vector3Config;
  arm: Vector3Config;
  foreArm: Vector3Config;
  hand: Vector3Config;
}

export interface LegPoseConfig {
  upLeg: Vector3Config;
  leg: Vector3Config;
  foot: Vector3Config;
  toeBase: Vector3Config;
}

export interface PrayerPoseConfig {
  spine: SpinePoseConfig;
  head: HeadPoseConfig;
  rightArm: ArmPoseConfig;
  leftArm: ArmPoseConfig;
  rightLeg: LegPoseConfig;
  leftLeg: LegPoseConfig;
  /** Vertical offset for hips position (sitting/prostration) */
  hipsPositionY: number;
}

export type Gender = 'male' | 'female';
