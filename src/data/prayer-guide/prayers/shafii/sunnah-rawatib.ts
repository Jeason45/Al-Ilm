import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Sunnah Rawatib selon l'ecole Shafi'i.
 *
 * En Shafi'i, il y a une liste FIXE de 12 sunnah rawatib confirmees
 * (contrairement au Maliki qui n'a pas de liste rigide) :
 *
 *   - 2 rak'at AVANT le Fajr (sunnah mu'akkada — la plus insistee de toutes les rawatib)
 *   - 4 rak'at AVANT le Dhuhr (2+2 ou 4 d'affilee)
 *   - 2 rak'at APRES le Dhuhr
 *   - Pas de rawatib pour le Asr
 *   - 2 rak'at APRES le Maghrib
 *   - 2 rak'at APRES le Isha
 *
 * Total : 12 rak'at (2+4+2+0+2+2 = 12)
 *
 * Reference : hadith d'Ibn 'Umar (Sahih Muslim), cite par an-Nawawi dans al-Majmu'.
 *
 * Ce fichier represente un cycle generique de 2 rak'at de priere sunnah
 * avec les specificites shafi'ites. Chaque paire de rawatib suit ce meme schema.
 */
export const sunnahRawatib: PrayerDefinition = {
  id: 'sunnah-rawatib',
  name: 'Sunnah Rawatib',
  nameAr: 'السنن الرواتب',
  ruling: 'sunnah-muakkada',
  rakaatCount: 2,
  description: 'Prières surérogatoires régulières — 2 rak\'at à voix basse (sirr). En Shafi\'i, il y a 12 sunnah rawatib confirmées : 2 avant le Fajr (les plus insistées), 4 avant le Dhuhr (2+2 ou 4 d\'affilée) + 2 après, 2 après le Maghrib, 2 après le Isha. Pas de rawatib pour le Asr. Toutes sont sunnah mu\'akkada. Ce cycle de 2 rak\'at représente le modèle générique applicable à chaque paire. Qabd (sous la poitrine, au-dessus du nombril). Pour les 2 rak\'at avant le Fajr : il est sunnah de réciter Sourate al-Kafirun dans la 1re et Sourate al-Ikhlas dans la 2e (Muslim). Les 4 avant le Dhuhr se prient en 2+2 (deux paires séparées par un salam).',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-rawatib-r1', { jahr: false }),
        ...rukuBlock('s-rawatib-r1'),
        ...sujudBlock('s-rawatib-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-rawatib-r2', { jahr: false }),
        ...rukuBlock('s-rawatib-r2'),
        ...sujudBlock('s-rawatib-r2'),
        ...finalBlock('s-rawatib-r2'),
      ],
    },
  ],
};
