import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Sunnah Rawatib selon l'école Malikite — positions propres à l'école malikite.
 *
 * En Malikite, il n'y a PAS de liste rigide de "12 sunnah rawatib" comme
 * en Hanafite. Les prières surérogatoires régulières sont classées comme
 * "nafilah mu'akkada" (nafilah appuyée), sauf les 2 rak'at avant le Fajr
 * qui ont un statut unique : "raghibah" (entre nafilah et sunnah mu'akkada).
 *
 * Ce fichier représente un cycle générique de 2 rak'at de prière nafilah
 * avec les spécificités malikites.
 */
export const sunnahRawatib: PrayerDefinition = {
  id: 'sunnah-rawatib',
  name: 'Sunnah Rawatib',
  nameAr: 'السنن الرواتب',
  ruling: 'sunnah',
  rakaatCount: 2,
  description: 'Prières surérogatoires régulières — 2 rak\'at à voix basse (sirr). En Malikite, il n\'y a pas de liste fixe de rawatib. Les 2 rak\'at avant le Fajr ont un statut spécial « raghibah » (unique à l\'école malikite). Les autres prières surérogatoires sont « nafilah mu\'akkada ». Le qabd (mains jointes) est permis dans les prières nafilah même si le sadl est préféré en fard.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-rawatib-r1', { jahr: false }),
        ...rukuBlock('m-rawatib-r1'),
        ...sujudBlock('m-rawatib-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-rawatib-r2', { jahr: false }),
        ...rukuBlock('m-rawatib-r2'),
        ...sujudBlock('m-rawatib-r2'),
        ...finalBlock('m-rawatib-r2'),
      ],
    },
  ],
};
