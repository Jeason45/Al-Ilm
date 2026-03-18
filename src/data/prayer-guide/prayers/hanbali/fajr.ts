import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Fajr Hanbali — 2 rak'at fard à voix haute (jahr).
 *
 * Différences clés vs Shafi'i :
 *   - PAS de qunut dans le Fajr (Shafi'i : qunut sunnah mu'akkada après le ruku' de la 2e rak'a)
 *   - Thana = « Subhanaka Allahumma… » (pas « Wajjahtu »)
 *   - Ta'awwudh uniquement dans la 1re rak'a
 *   - Bismillah n'est pas partie de la Fatiha
 *   - Qabd sur la poitrine (pas sous)
 *   - Genoux d'abord pour la prosternation
 *   - Rafa' al-yadayn à 3 endroits (pas 4)
 *   - Tashahhud version Ibn Mas'ud
 *   - Assise finale en IFTIRASH (pas tawarruk — car prière de 2 rak'at, un seul tashahhud)
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi'.
 */
export const fajr: PrayerDefinition = {
  id: 'fajr',
  name: 'Fajr (Subh)',
  nameAr: 'الفجر (الصبح)',
  ruling: 'fard',
  rakaatCount: 2,
  description: 'Prière de l\'aube — 2 rak\'at à voix haute (jahr). En Hanbali, il n\'y a PAS de qunut dans le Fajr (contrairement à Shafi\'i qui le fait comme sunnah mu\'akkada). Qabd sur la poitrine (\'ala as-sadr), bismillah silencieuse (pas partie de la Fatiha), amin à voix haute, genoux d\'abord pour le sujud. Tashahhud final en IFTIRASH (pas de tawarruk car un seul tashahhud). Version d\'Ibn Mas\'ud pour le tashahhud.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-fajr-r1', { jahr: true }),
        ...rukuBlock('h-fajr-r1'),
        ...sujudBlock('h-fajr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-fajr-r2', { jahr: true }),
        ...rukuBlock('h-fajr-r2'),
        // PAS de qunut dans le Fajr en Hanbali (contrairement à Shafi'i)
        ...sujudBlock('h-fajr-r2'),
        // Iftirash pour le tashahhud final (prière de 2 rak'at = pas de tawarruk)
        ...finalBlock('h-fajr-r2', { tawarruk: false }),
      ],
    },
  ],
};
