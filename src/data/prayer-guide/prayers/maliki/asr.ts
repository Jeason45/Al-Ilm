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
  description: 'Prière de l\'après-midi — 4 rak\'at à voix basse (sirr). En Malikite, le temps du Asr commence quand l\'ombre d\'un objet est égale à sa taille (comme chez les Chafiites), pas au double de sa taille (position hanafite). L\'ombre est mesurée AU-DELÀ de l\'ombre du zénith (fay\' az-zawal).',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-asr-r1', { jahr: false }),
        ...rukuBlock('m-asr-r1'),
        ...sujudBlock('m-asr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-asr-r2', { jahr: false }),
        ...rukuBlock('m-asr-r2'),
        ...sujudBlock('m-asr-r2'),
        tashahudIntermediate('m-asr-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('m-asr-r3'),
        ...subsequentRakahFatihaOnly('m-asr-r3').slice(1),
        ...rukuBlock('m-asr-r3'),
        ...sujudBlock('m-asr-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('m-asr-r4'),
        ...rukuBlock('m-asr-r4'),
        ...sujudBlock('m-asr-r4'),
        ...finalBlock('m-asr-r4'),
      ],
    },
  ],
};
