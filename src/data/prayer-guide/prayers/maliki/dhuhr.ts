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
  description: 'Prière du midi — 4 rak\'at à voix basse (sirr). Mains le long du corps (sadl), Fatiha fard dans chaque rak\'a, pas de sourate en R3/R4.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-dhuhr-r1', { jahr: false }),
        ...rukuBlock('m-dhuhr-r1'),
        ...sujudBlock('m-dhuhr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-dhuhr-r2', { jahr: false }),
        ...rukuBlock('m-dhuhr-r2'),
        ...sujudBlock('m-dhuhr-r2'),
        tashahudIntermediate('m-dhuhr-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('m-dhuhr-r3'),
        ...subsequentRakahFatihaOnly('m-dhuhr-r3').slice(1),
        ...rukuBlock('m-dhuhr-r3'),
        ...sujudBlock('m-dhuhr-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('m-dhuhr-r4'),
        ...rukuBlock('m-dhuhr-r4'),
        ...sujudBlock('m-dhuhr-r4'),
        ...finalBlock('m-dhuhr-r4'),
      ],
    },
  ],
};
