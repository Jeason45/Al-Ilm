import type { Vector3Config, ArmPoseConfig, LegPoseConfig, SpinePoseConfig, HeadPoseConfig, PrayerPoseConfig } from '../types';

export function lerpScalar(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function lerpVector3(a: Vector3Config, b: Vector3Config, t: number): Vector3Config {
  return {
    x: lerpScalar(a.x, b.x, t),
    y: lerpScalar(a.y, b.y, t),
    z: lerpScalar(a.z, b.z, t),
  };
}

export function lerpSpinePoseConfig(a: SpinePoseConfig, b: SpinePoseConfig, t: number): SpinePoseConfig {
  return {
    hips: lerpVector3(a.hips, b.hips, t),
    spine: lerpVector3(a.spine, b.spine, t),
    spine1: lerpVector3(a.spine1, b.spine1, t),
    spine2: lerpVector3(a.spine2, b.spine2, t),
  };
}

export function lerpHeadPoseConfig(a: HeadPoseConfig, b: HeadPoseConfig, t: number): HeadPoseConfig {
  return {
    neck: lerpVector3(a.neck, b.neck, t),
    head: lerpVector3(a.head, b.head, t),
  };
}

export function lerpArmPoseConfig(a: ArmPoseConfig, b: ArmPoseConfig, t: number): ArmPoseConfig {
  return {
    shoulder: lerpVector3(a.shoulder, b.shoulder, t),
    arm: lerpVector3(a.arm, b.arm, t),
    foreArm: lerpVector3(a.foreArm, b.foreArm, t),
    hand: lerpVector3(a.hand, b.hand, t),
  };
}

export function lerpLegPoseConfig(a: LegPoseConfig, b: LegPoseConfig, t: number): LegPoseConfig {
  return {
    upLeg: lerpVector3(a.upLeg, b.upLeg, t),
    leg: lerpVector3(a.leg, b.leg, t),
    foot: lerpVector3(a.foot, b.foot, t),
    toeBase: lerpVector3(a.toeBase, b.toeBase, t),
  };
}

export function lerpPrayerPoseConfig(a: PrayerPoseConfig, b: PrayerPoseConfig, t: number): PrayerPoseConfig {
  return {
    spine: lerpSpinePoseConfig(a.spine, b.spine, t),
    head: lerpHeadPoseConfig(a.head, b.head, t),
    rightArm: lerpArmPoseConfig(a.rightArm, b.rightArm, t),
    leftArm: lerpArmPoseConfig(a.leftArm, b.leftArm, t),
    rightLeg: lerpLegPoseConfig(a.rightLeg, b.rightLeg, t),
    leftLeg: lerpLegPoseConfig(a.leftLeg, b.leftLeg, t),
    hipsPositionY: lerpScalar(a.hipsPositionY, b.hipsPositionY, t),
  };
}
