import type { SpecialCase } from './types';

export const specialCases: SpecialCase[] = [
  {
    id: 'travel',
    title: 'Prière du voyageur (Qasr)',
    titleAr: 'صلاة المسافر (القصر)',
    description: 'Le voyageur peut raccourcir les prières de 4 rak\'at à 2 rak\'at pendant la durée de son voyage.',
    rules: [
      'Concerne uniquement Dhuhr, Asr et Isha (pas Fajr ni Maghrib)',
      'La distance minimale de voyage est d\'environ 80 km selon la majorité des savants',
      'Les 4 rak\'at sont réduites à 2 rak\'at',
      'Le raccourcissement est permis tant que le voyageur n\'a pas l\'intention de résider plus de 4 jours à destination',
      'Il est permis de prier derrière un imam résident en prière complète — dans ce cas, il faut compléter 4 rak\'at',
    ],
  },
  {
    id: 'illness',
    title: 'Prière du malade',
    titleAr: 'صلاة المريض',
    description: 'Le malade adapte sa prière selon sa capacité, l\'obligation de prier ne tombe jamais tant que la raison est présente.',
    rules: [
      'Prier debout si possible, sinon assis, sinon couché sur le côté droit, sinon sur le dos',
      'Si impossible de faire le ruku ou le sujud, incliner la tête (plus bas pour le sujud que pour le ruku)',
      'Si impossible de bouger, prier avec les yeux ou l\'intention du cœur',
      'Ne pas retarder la prière à cause de la maladie — la faire à l\'heure dans tous les cas',
      'Le malade peut faire ses ablutions avec le tayammum s\'il ne peut pas utiliser l\'eau',
    ],
  },
  {
    id: 'combining',
    title: 'Combinaison de prières (Jam\')',
    titleAr: 'الجمع بين الصلاتين',
    description: 'Il est permis de combiner deux prières consécutives en les priant ensemble au temps de l\'une d\'elles.',
    rules: [
      'Seules ces paires peuvent être combinées : Dhuhr + Asr, et Maghrib + Isha',
      'Jam\' taqdim : prier les deux au temps de la première (ex. Dhuhr + Asr au temps de Dhuhr)',
      'Jam\' ta\'khir : prier les deux au temps de la deuxième (ex. Dhuhr + Asr au temps d\'Asr)',
      'Autorisé en voyage, en cas de pluie forte, ou de maladie selon certains savants',
      'Le Fajr ne se combine jamais avec une autre prière',
    ],
  },
  {
    id: 'makeup',
    title: 'Prière de rattrapage (Qada\')',
    titleAr: 'القضاء',
    description: 'Rattraper une prière manquée en la priant dès que possible, dans l\'ordre si possible.',
    rules: [
      'Le rattrapage est obligatoire pour les prières manquées par oubli ou sommeil',
      'Prier la prière manquée dès qu\'on s\'en souvient, même si c\'est le temps d\'une autre prière',
      'Respecter l\'ordre chronologique si on rattrape plusieurs prières (Dhuhr avant Asr, etc.)',
      'La prière de rattrapage se fait de la même manière que la prière originale (même nombre de rak\'at)',
      'Il est recommandé de faire l\'adhan et l\'iqama avant le rattrapage',
    ],
  },
];
