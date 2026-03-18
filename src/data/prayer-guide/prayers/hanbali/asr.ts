import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  subsequentRakahFatihaOnly,
  rukuBlock,
  sujudBlock,
  tashahudIntermediate,
  riseFromTashahud,
  finalBlock,
} from './_helpers';

/**
 * Asr Hanbali — 4 rak'at fard à voix basse (sirr).
 *
 * Le temps du Asr en Hanbali commence quand l'ombre d'un objet est égale
 * à sa taille (mithl — comme Shafi'i et Maliki), PAS au double (position hanafite).
 *
 * Pas de rawatib confirmées pour le Asr (comme dans les autres écoles).
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi'.
 */
export const asr: PrayerDefinition = {
  id: 'asr',
  name: 'Asr',
  nameAr: 'العصر',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière de l\'après-midi — 4 rak\'at à voix basse (sirr). En Hanbali, le temps du Asr commence quand l\'ombre d\'un objet est égale à sa taille (mithl — comme Shafi\'i/Maliki, PAS au double comme chez les Hanafi). Il n\'y a pas de rawatib confirmées pour le Asr. Qabd sur la poitrine, tashahhud intermédiaire WAJIB, rafa\' al-yadayn à 3 endroits, genoux d\'abord pour le sujud.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-asr-r1', { jahr: false }),
        ...rukuBlock('h-asr-r1'),
        ...sujudBlock('h-asr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-asr-r2', { jahr: false }),
        ...rukuBlock('h-asr-r2'),
        ...sujudBlock('h-asr-r2'),
        tashahudIntermediate('h-asr-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('h-asr-r3'),
        ...subsequentRakahFatihaOnly('h-asr-r3').slice(1),
        ...rukuBlock('h-asr-r3'),
        ...sujudBlock('h-asr-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('h-asr-r4'),
        ...rukuBlock('h-asr-r4'),
        ...sujudBlock('h-asr-r4'),
        ...finalBlock('h-asr-r4', { tawarruk: true }),
      ],
    },
  ],
};
