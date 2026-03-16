/**
 * Theatre.js setup for prayer pose editing.
 * DEV-ONLY — Theatre.js Studio is a devDependency.
 */
import { getProject, types } from '@theatre/core';
import type { ISheetObject } from '@theatre/core';
import type { PrayerPoseConfig, Vector3Config } from '../types';
import { ZERO_POSE } from '../poses/defaults';

// --- Project & Sheet (singleton) ---
export const theatreProject = getProject('PrayerPoses');
export const poseSheet = theatreProject.sheet('Pose');

const R = { range: [-Math.PI, Math.PI] as [number, number] };

function vec3Props(def: Vector3Config = { x: 0, y: 0, z: 0 }) {
  return {
    x: types.number(def.x, R),
    y: types.number(def.y, R),
    z: types.number(def.z, R),
  };
}

// --- Create sheet objects for each bone (grouped like PrayerPoseConfig) ---

// Spine group
export const spineHipsObj = poseSheet.object('Spine / Hips', vec3Props());
export const spineSpineObj = poseSheet.object('Spine / Spine', vec3Props());
export const spineSpine1Obj = poseSheet.object('Spine / Spine1', vec3Props());
export const spineSpine2Obj = poseSheet.object('Spine / Spine2', vec3Props());

// Head group
export const headNeckObj = poseSheet.object('Head / Neck', vec3Props());
export const headHeadObj = poseSheet.object('Head / Head', vec3Props());

// Right arm
export const rightShoulderObj = poseSheet.object('RightArm / Shoulder', vec3Props());
export const rightArmObj = poseSheet.object('RightArm / Arm', vec3Props());
export const rightForeArmObj = poseSheet.object('RightArm / ForeArm', vec3Props());
export const rightHandObj = poseSheet.object('RightArm / Hand', vec3Props());

// Left arm
export const leftShoulderObj = poseSheet.object('LeftArm / Shoulder', vec3Props());
export const leftArmObj = poseSheet.object('LeftArm / Arm', vec3Props());
export const leftForeArmObj = poseSheet.object('LeftArm / ForeArm', vec3Props());
export const leftHandObj = poseSheet.object('LeftArm / Hand', vec3Props());

// Right leg
export const rightUpLegObj = poseSheet.object('RightLeg / UpLeg', vec3Props());
export const rightLegObj = poseSheet.object('RightLeg / Leg', vec3Props());
export const rightFootObj = poseSheet.object('RightLeg / Foot', vec3Props());
export const rightToeBaseObj = poseSheet.object('RightLeg / ToeBase', vec3Props());

// Left leg
export const leftUpLegObj = poseSheet.object('LeftLeg / UpLeg', vec3Props());
export const leftLegObj = poseSheet.object('LeftLeg / Leg', vec3Props());
export const leftFootObj = poseSheet.object('LeftLeg / Foot', vec3Props());
export const leftToeBaseObj = poseSheet.object('LeftLeg / ToeBase', vec3Props());

// Root position
export const hipsPositionObj = poseSheet.object('Root / HipsPositionY', {
  y: types.number(0, { range: [-2, 0.5] }),
});

// --- All objects in order for iteration ---
interface BoneMapping {
  obj: ISheetObject<ReturnType<typeof vec3Props>>;
  path: [keyof PrayerPoseConfig, string]; // e.g. ['spine', 'hips']
}

export const ALL_BONE_OBJECTS: BoneMapping[] = [
  { obj: spineHipsObj, path: ['spine', 'hips'] },
  { obj: spineSpineObj, path: ['spine', 'spine'] },
  { obj: spineSpine1Obj, path: ['spine', 'spine1'] },
  { obj: spineSpine2Obj, path: ['spine', 'spine2'] },
  { obj: headNeckObj, path: ['head', 'neck'] },
  { obj: headHeadObj, path: ['head', 'head'] },
  { obj: rightShoulderObj, path: ['rightArm', 'shoulder'] },
  { obj: rightArmObj, path: ['rightArm', 'arm'] },
  { obj: rightForeArmObj, path: ['rightArm', 'foreArm'] },
  { obj: rightHandObj, path: ['rightArm', 'hand'] },
  { obj: leftShoulderObj, path: ['leftArm', 'shoulder'] },
  { obj: leftArmObj, path: ['leftArm', 'arm'] },
  { obj: leftForeArmObj, path: ['leftArm', 'foreArm'] },
  { obj: leftHandObj, path: ['leftArm', 'hand'] },
  { obj: rightUpLegObj, path: ['rightLeg', 'upLeg'] },
  { obj: rightLegObj, path: ['rightLeg', 'leg'] },
  { obj: rightFootObj, path: ['rightLeg', 'foot'] },
  { obj: rightToeBaseObj, path: ['rightLeg', 'toeBase'] },
  { obj: leftUpLegObj, path: ['leftLeg', 'upLeg'] },
  { obj: leftLegObj, path: ['leftLeg', 'leg'] },
  { obj: leftFootObj, path: ['leftLeg', 'foot'] },
  { obj: leftToeBaseObj, path: ['leftLeg', 'toeBase'] },
];

// --- Read current Theatre.js values into PrayerPoseConfig ---
export function readCurrentPose(): PrayerPoseConfig {
  // We need val() from @theatre/core
  const { val } = require('@theatre/core');

  const pose = structuredClone(ZERO_POSE);

  for (const { obj, path } of ALL_BONE_OBJECTS) {
    const values = val(obj.props);
    const [group, bone] = path;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (pose[group] as any)[bone] = { x: values.x, y: values.y, z: values.z };
  }

  pose.hipsPositionY = val(hipsPositionObj.props).y;

  return pose;
}

// --- Load a PrayerPoseConfig into Theatre.js ---
export async function loadPoseIntoTheatre(pose: PrayerPoseConfig): Promise<void> {
  const studioModule = await import('@theatre/studio');
  const studio = studioModule.default;

  studio.transaction(({ set }) => {
    for (const { obj, path } of ALL_BONE_OBJECTS) {
      const [group, bone] = path;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const vec = (pose[group] as any)[bone] as Vector3Config;
      set(obj.props.x, vec.x);
      set(obj.props.y, vec.y);
      set(obj.props.z, vec.z);
    }
    set(hipsPositionObj.props.y, pose.hipsPositionY);
  });
}
