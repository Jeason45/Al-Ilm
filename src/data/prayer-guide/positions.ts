import type { PrayerPosition } from './types';

// Each position is a complete side-view silhouette of a person praying.
// Designed in a 200x200 viewBox, facing right.
// Built with multiple sub-shapes combined into one path for crossfade.

export const positions: PrayerPosition[] = [
  {
    id: 'qiyam',
    name: 'Debout (Qiyam)',
    nameAr: 'قيام',
    // Standing straight, arms at sides
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm
      'M88 52 l-4 2 l-2 38 l-2 6 h6 l1-6 l3-34 Z',
      // Right arm
      'M112 52 l4 2 l2 38 l2 6 h-6 l-1-6 l-3-34 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'takbir',
    name: 'Takbir al-Ihram',
    nameAr: 'تكبيرة الإحرام',
    // Standing with hands raised to ear level
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm raised
      'M88 52 l-6-2 l-4-14 l-2-8 h6 l2 10 l3 10 Z',
      // Right arm raised
      'M112 52 l6-2 l4-14 l2-8 h-6 l-2 10 l-3 10 Z',
      // Left hand
      'M74 26 a3 4 0 1 1 6 2 a3 4 0 1 1-6-2 Z',
      // Right hand
      'M120 26 a3 4 0 1 1 6 2 a3 4 0 1 1-6-2 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'qiyam-hands',
    name: 'Debout mains croisées',
    nameAr: 'وضع اليدين',
    // Standing with hands folded on chest
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Arms folded on chest area
      'M86 56 l-4 6 l6 8 l12 2 l12-2 l6-8 l-4-6 l-6 4 l-8 2 l-8-2 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'ruku',
    name: 'Inclinaison (Ruku)',
    nameAr: 'ركوع',
    // Bowing at 90°, back flat, hands on knees
    svgPath: [
      // Head (forward)
      'M54 58 a10 10 0 1 1 0 20 a10 10 0 1 1 0-20 Z',
      // Back (horizontal)
      'M64 64 l56 0 l4 4 l0 10 l-4 4 l-56 0 l-4-4 l0-10 Z',
      // Arms going down to knees
      'M110 78 l4 8 l4 22 l4 4 h-8 l-2-4 l-4-20 Z',
      'M80 78 l-4 8 l-4 22 l-4 4 h8 l2-4 l4-20 Z',
      // Left leg
      'M108 78 l-2 44 l-4 20 l-6 12 h8 l4-10 l4-18 l2-42 Z',
      // Right leg
      'M124 78 l2 44 l4 20 l6 12 h-8 l-4-10 l-4-18 l-2-42 Z',
    ].join(' '),
  },
  {
    id: 'itidal',
    name: 'Redressement (I\'tidal)',
    nameAr: 'اعتدال',
    // Standing straight, arms relaxed at sides (same as qiyam but slightly different arms)
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm (relaxed, slightly away)
      'M88 52 l-6 4 l-1 36 l-2 6 h6 l1-6 l2-34 Z',
      // Right arm (relaxed, slightly away)
      'M112 52 l6 4 l1 36 l2 6 h-6 l-1-6 l-2-34 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'sujud',
    name: 'Prosternation (Sujud)',
    nameAr: 'سجود',
    // Full prostration: forehead on ground, body forming a triangle
    svgPath: [
      // Head (on ground, face down)
      'M42 128 a9 8 0 1 1 18 0 a9 8 0 1 1-18 0 Z',
      // Arms on ground
      'M58 124 l10-4 l4 2 l0 8 l-4 2 l-10-4 Z',
      'M38 124 l-10-4 l-4 2 l0 8 l4 2 l10-4 Z',
      // Back (angled up from head)
      'M58 120 l42-30 l14 0 l4 6 l-14 4 l-40 30 Z',
      // Hips
      'M114 90 a10 8 0 1 1 0 16 a10 8 0 1 1 0-16 Z',
      // Left shin (folded, knees on ground)
      'M108 102 l6 14 l12 12 l8 6 l-2 6 l-10-6 l-12-14 l-6-12 Z',
      // Right shin
      'M120 102 l6 14 l12 12 l8 6 l-2 6 l-10-6 l-12-14 l-6-12 Z',
      // Toes
      'M140 138 l4-2 l4 4 l-4 4 l-4-2 Z',
      'M152 138 l4-2 l4 4 l-4 4 l-4-2 Z',
    ].join(' '),
  },
  {
    id: 'julus',
    name: 'Assis (Julus)',
    nameAr: 'جلوس',
    // Sitting between two prostrations, upright torso, hands on thighs
    svgPath: [
      // Head
      'M100 28 a11 11 0 1 1 0 22 a11 11 0 1 1 0-22 Z',
      // Neck
      'M96 50 h8 v5 h-8 Z',
      // Torso (upright)
      'M88 55 h24 l2 40 h-28 Z',
      // Left arm on thigh
      'M88 60 l-6 6 l-6 26 l-2 10 h6 l2-10 l4-22 Z',
      // Right arm on thigh
      'M112 60 l6 6 l6 26 l2 10 h-6 l-2-10 l-4-22 Z',
      // Left leg folded under (sitting on it)
      'M86 95 l-16 10 l-20 8 l-8 4 l-2-6 l10-6 l20-8 l14-8 Z',
      // Right shin on ground
      'M114 95 l16 10 l20 8 l8 4 l2-6 l-10-6 l-20-8 l-14-8 Z',
      // Foot (tucked)
      'M38 114 a4 3 0 1 1 8 0 a4 3 0 1 1-8 0 Z',
      'M154 114 a4 3 0 1 1 8 0 a4 3 0 1 1-8 0 Z',
    ].join(' '),
  },
  {
    id: 'tashahud',
    name: 'Tashahud',
    nameAr: 'تشهد',
    // Sitting for tashahud, right index finger pointed
    svgPath: [
      // Head
      'M100 28 a11 11 0 1 1 0 22 a11 11 0 1 1 0-22 Z',
      // Neck
      'M96 50 h8 v5 h-8 Z',
      // Torso (upright)
      'M88 55 h24 l2 40 h-28 Z',
      // Left arm resting on thigh
      'M88 60 l-6 6 l-6 26 l-2 10 h6 l2-10 l4-22 Z',
      // Right arm with index pointed
      'M112 60 l6 6 l8 20 l14 0 l1-3 l-12-1 l-6-16 l-5-4 Z',
      // Pointed finger detail
      'M141 83 l6 0 l2-1 l-2-2 l-6 0 Z',
      // Left leg folded under
      'M86 95 l-16 10 l-20 8 l-8 4 l-2-6 l10-6 l20-8 l14-8 Z',
      // Right shin
      'M114 95 l16 10 l20 8 l8 4 l2-6 l-10-6 l-20-8 l-14-8 Z',
      // Feet
      'M38 114 a4 3 0 1 1 8 0 a4 3 0 1 1-8 0 Z',
      'M154 114 a4 3 0 1 1 8 0 a4 3 0 1 1-8 0 Z',
    ].join(' '),
  },
  {
    id: 'salam',
    name: 'Salutations (Salam)',
    nameAr: 'سلام',
    // Sitting, head turned to the right (shown as head slightly shifted)
    svgPath: [
      // Head turned right
      'M108 28 a11 11 0 1 1 0 22 a11 11 0 1 1 0-22 Z',
      // Neck (slightly angled)
      'M98 50 l10-2 l2 6 l-10 2 Z',
      // Torso (upright)
      'M88 55 h24 l2 40 h-28 Z',
      // Left arm
      'M88 60 l-6 6 l-6 26 l-2 10 h6 l2-10 l4-22 Z',
      // Right arm
      'M112 60 l6 6 l6 26 l2 10 h-6 l-2-10 l-4-22 Z',
      // Left leg folded
      'M86 95 l-16 10 l-20 8 l-8 4 l-2-6 l10-6 l20-8 l14-8 Z',
      // Right shin
      'M114 95 l16 10 l20 8 l8 4 l2-6 l-10-6 l-20-8 l-14-8 Z',
      // Feet
      'M38 114 a4 3 0 1 1 8 0 a4 3 0 1 1-8 0 Z',
      'M154 114 a4 3 0 1 1 8 0 a4 3 0 1 1-8 0 Z',
    ].join(' '),
  },
  {
    id: 'qunut',
    name: 'Qunut',
    nameAr: 'قنوت',
    // Standing with hands raised in supplication (palms up, chest level)
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm raised in du'a
      'M88 52 l-8-2 l-10 6 l-6 16 l2 4 h6 l4-14 l8-4 Z',
      // Right arm raised in du'a
      'M112 52 l8-2 l10 6 l6 16 l-2 4 h-6 l-4-14 l-8-4 Z',
      // Left palm (open, facing up)
      'M64 70 l-8 1 l-1 5 l10 0 Z',
      // Right palm (open, facing up)
      'M136 70 l8 1 l1 5 l-10 0 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  // ─── Wudu positions ───
  {
    id: 'wudu-hands',
    name: 'Lavage des mains',
    nameAr: 'غسل اليدين',
    // Standing, hands extended forward under water
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm extended forward
      'M88 54 l-6 2 l-14 16 l-4 2 h6 l12-14 l4-2 Z',
      // Right arm extended forward
      'M112 54 l6 2 l14 16 l4 2 h-6 l-12-14 l-4-2 Z',
      // Hands together with water drops
      'M68 74 a5 4 0 1 1 10 0 a5 4 0 1 1-10 0 Z',
      'M122 74 a5 4 0 1 1 10 0 a5 4 0 1 1-10 0 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'wudu-mouth',
    name: 'Rinçage de la bouche',
    nameAr: 'المضمضة',
    // Standing, right hand raised to mouth
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm at side
      'M88 52 l-4 2 l-2 38 l-2 6 h6 l1-6 l3-34 Z',
      // Right arm raised to mouth
      'M112 52 l4-2 l4-10 l-2-8 h-6 l1 8 l-2 8 Z',
      // Right hand near mouth
      'M116 28 a4 5 0 1 1 8 2 a4 5 0 1 1-8-2 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'wudu-nose',
    name: 'Rinçage du nez',
    nameAr: 'الاستنشاق',
    // Standing, right hand raised to nose
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm at side
      'M88 52 l-4 2 l-2 38 l-2 6 h6 l1-6 l3-34 Z',
      // Right arm raised to nose
      'M112 52 l6-4 l2-14 l-2-6 h-6 l2 8 l-3 12 Z',
      // Right hand near nose
      'M114 24 a4 4 0 1 1 8 0 a4 4 0 1 1-8 0 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'wudu-face',
    name: 'Lavage du visage',
    nameAr: 'غسل الوجه',
    // Standing, both hands on face
    svgPath: [
      // Head (partially covered by hands)
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left hand on face
      'M84 20 l-2 8 l4 14 l8-2 l0-14 l-4-8 Z',
      // Right hand on face
      'M116 20 l2 8 l-4 14 l-8-2 l0-14 l4-8 Z',
      // Left arm reaching up
      'M88 52 l-6-4 l-2-18 l4-8 l4 6 l1 16 l2 6 Z',
      // Right arm reaching up
      'M112 52 l6-4 l2-18 l-4-8 l-4 6 l-1 16 l-2 6 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'wudu-arms',
    name: 'Lavage des bras',
    nameAr: 'غسل اليدين إلى المرفقين',
    // Standing, left arm extended, right hand washing forearm
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm extended forward
      'M88 56 l-8 0 l-20 6 l-8 2 l0 6 l10-2 l20-6 l6 0 Z',
      // Right hand on left forearm
      'M72 58 a5 6 0 1 1 10 2 a5 6 0 1 1-10-2 Z',
      // Right arm reaching to left
      'M112 54 l-4 4 l-20 4 l-8 0 l0-6 l10-2 l16-4 l4-2 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'wudu-head',
    name: 'Essuyage de la tête',
    nameAr: 'مسح الرأس',
    // Standing, both hands on top of head
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Hands on head
      'M82 16 l4-4 l28 0 l4 4 l-2 6 l-32 0 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left arm raised to head
      'M88 52 l-6-6 l-2-16 l2-10 l6-2 l2 12 l2 16 Z',
      // Right arm raised to head
      'M112 52 l6-6 l2-16 l-2-10 l-6-2 l-2 12 l-2 16 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'wudu-ears',
    name: 'Essuyage des oreilles',
    nameAr: 'مسح الأذنين',
    // Standing, hands at ears
    svgPath: [
      // Head
      'M100 18 a12 12 0 1 1 0 24 a12 12 0 1 1 0-24 Z',
      // Neck
      'M96 42 h8 v6 h-8 Z',
      // Torso
      'M88 48 h24 l2 52 h-28 Z',
      // Left hand at left ear
      'M82 24 a4 5 0 1 1 6 1 a4 5 0 1 1-6-1 Z',
      // Right hand at right ear
      'M112 24 a4 5 0 1 1 6 1 a4 5 0 1 1-6-1 Z',
      // Left arm raised to ear
      'M88 52 l-6-4 l-2-14 l4-8 l4 4 l1 14 l2 6 Z',
      // Right arm raised to ear
      'M112 52 l6-4 l2-14 l-4-8 l-4 4 l-1 14 l-2 6 Z',
      // Left leg
      'M90 100 l-2 50 l-4 16 h8 l1-14 l3-46 Z',
      // Right leg
      'M110 100 l2 50 l4 16 h-8 l-1-14 l-3-46 Z',
    ].join(' '),
  },
  {
    id: 'wudu-feet',
    name: 'Lavage des pieds',
    nameAr: 'غسل القدمين',
    // Bent over, washing feet
    svgPath: [
      // Head (lower, bent over)
      'M72 48 a10 10 0 1 1 0 20 a10 10 0 1 1 0-20 Z',
      // Neck/back angled
      'M82 54 l28 4 l4 4 l0 10 l-4 4 l-28-6 l-4-4 l0-8 Z',
      // Arms reaching down to feet
      'M82 62 l-6 14 l-6 30 l-4 12 h6 l4-12 l4-28 l4-12 Z',
      'M106 68 l6 14 l6 30 l4 12 h-6 l-4-12 l-4-28 l-4-12 Z',
      // Left leg
      'M108 72 l-4 40 l-6 20 l-8 10 h8 l6-10 l6-18 l4-36 Z',
      // Right leg
      'M118 72 l4 40 l6 20 l8 10 h-8 l-6-10 l-6-18 l-4-36 Z',
      // Feet
      'M84 148 l-10 4 l0 6 l14 0 l0-6 Z',
      'M132 148 l10 4 l0 6 l-14 0 l0-6 Z',
    ].join(' '),
  },
];

export function getPosition(id: string): PrayerPosition | undefined {
  return positions.find(p => p.id === id);
}
