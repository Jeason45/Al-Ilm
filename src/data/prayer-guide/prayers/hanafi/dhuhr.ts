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

export const dhuhr: PrayerDefinition = {
  id: 'dhuhr',
  name: 'Dhuhr',
  nameAr: 'الظهر',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière du midi — 4 rak\'at à voix basse (sirr).',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-dhuhr-r1', { jahr: false }),
        ...rukuBlock('h-dhuhr-r1'),
        ...sujudBlock('h-dhuhr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-dhuhr-r2', { jahr: false }),
        ...rukuBlock('h-dhuhr-r2'),
        ...sujudBlock('h-dhuhr-r2'),
        tashahudIntermediate('h-dhuhr-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('h-dhuhr-r3'),
        ...subsequentRakahFatihaOnly('h-dhuhr-r3').slice(1), // skip duplicate takbir
        ...rukuBlock('h-dhuhr-r3'),
        ...sujudBlock('h-dhuhr-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('h-dhuhr-r4'),
        ...rukuBlock('h-dhuhr-r4'),
        ...sujudBlock('h-dhuhr-r4'),
        ...finalBlock('h-dhuhr-r4'),
      ],
    },
  ],
};
