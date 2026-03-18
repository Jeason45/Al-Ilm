import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Sunnah Rawatib selon l'école Hanbali.
 *
 * En Hanbali, il y a 12 rak'at de sunnah rawatib mu'akkada :
 *
 *   - 2 rak'at AVANT le Fajr (les plus insistées de toutes les rawatib)
 *   - 4 rak'at AVANT le Dhuhr (2+2)
 *   - 2 rak'at APRÈS le Dhuhr
 *   - Pas de rawatib pour le Asr
 *   - 2 rak'at APRÈS le Maghrib
 *   - 2 rak'at APRÈS le Isha
 *
 * Total : 12 rak'at (2+4+2+0+2+2 = 12)
 * (Même distribution que Shafi'i)
 *
 * Référence : hadith d'Ibn 'Umar (Sahih Muslim), cité par Ibn Qudama dans al-Mughni.
 *
 * Ce fichier représente un cycle générique de 2 rak'at de prière sunnah
 * avec les spécificités hanbalites.
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi'.
 */
export const sunnahRawatib: PrayerDefinition = {
  id: 'sunnah-rawatib',
  name: 'Sunnah Rawatib',
  nameAr: 'السنن الرواتب',
  ruling: 'sunnah-muakkada',
  rakaatCount: 2,
  description: 'Prières surérogatoires régulières — 2 rak\'at à voix basse (sirr). En Hanbali, il y a 12 sunnah rawatib confirmées : 2 avant le Fajr (les plus insistées), 4 avant le Dhuhr (2+2) + 2 après, 2 après le Maghrib, 2 après le Isha. Pas de rawatib pour le Asr. Toutes sont sunnah mu\'akkada. Pour les 2 rak\'at avant le Fajr (les plus importantes de toutes les rawatib) : il est sunnah de réciter Sourate al-Kafirun dans la 1re et Sourate al-Ikhlas dans la 2e. Distribution similaire au Chafiite (12 rak\'at mu\'akkada). En Hanbalite, les 4 avant le Dhuhr se prient en 2+2 (deux paires séparées par un salam). Ce cycle de 2 rak\'at représente le modèle générique. Qabd sur la poitrine (\'ala as-sadr), thana « Subhanaka Allahumma… » dans la 1re rak\'a, ta\'awwudh dans la 1re rak\'a uniquement.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-rawatib-r1', { jahr: false }),
        ...rukuBlock('h-rawatib-r1'),
        ...sujudBlock('h-rawatib-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-rawatib-r2', { jahr: false }),
        ...rukuBlock('h-rawatib-r2'),
        ...sujudBlock('h-rawatib-r2'),
        // Iftirash pour le tashahhud final (prière de 2 rak'at = pas de tawarruk)
        ...finalBlock('h-rawatib-r2', { tawarruk: false }),
      ],
    },
  ],
};
