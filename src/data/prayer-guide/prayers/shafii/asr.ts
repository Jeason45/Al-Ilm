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

export const asr: PrayerDefinition = {
  id: 'asr',
  name: 'Asr',
  nameAr: 'العصر',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière de l\'après-midi — 4 rak\'at à voix basse (sirr). En Shafi\'i, le temps du Asr commence quand l\'ombre d\'un objet est égale à sa taille (mithl — comme chez les Maliki), PAS au double de sa taille (position hanafite). Il n\'y a pas de rawatib mu\'akkada pour le Asr en Shafi\'i (contrairement au Dhuhr, Maghrib et Isha qui en ont). Il est toutefois recommandé de prier 4 rak\'at avant le Asr (sunnah ghayr mu\'akkada).',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-asr-r1', { jahr: false }),
        ...rukuBlock('s-asr-r1'),
        ...sujudBlock('s-asr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-asr-r2', { jahr: false }),
        ...rukuBlock('s-asr-r2'),
        ...sujudBlock('s-asr-r2'),
        tashahudIntermediate('s-asr-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('s-asr-r3'),
        ...subsequentRakahFatihaOnly('s-asr-r3').slice(1),
        ...rukuBlock('s-asr-r3'),
        ...sujudBlock('s-asr-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('s-asr-r4'),
        ...rukuBlock('s-asr-r4'),
        ...sujudBlock('s-asr-r4'),
        ...finalBlock('s-asr-r4'),
      ],
    },
  ],
};
