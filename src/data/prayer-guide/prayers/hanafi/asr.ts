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

// Asr est identique au Dhuhr en structure (4 rak'at, voix basse).
export const asr: PrayerDefinition = {
  id: 'asr',
  name: 'Asr',
  nameAr: 'العصر',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière de l\'après-midi — 4 rak\'at à voix basse (sirr).',
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
        ...finalBlock('h-asr-r4'),
      ],
    },
  ],
};
