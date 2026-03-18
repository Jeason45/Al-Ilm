import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Tarawih selon l'école Hanbali.
 *
 * Position mashhur dans le madhhab : 20 rak'at.
 * Basé sur la pratique de 'Umar ibn al-Khattab qui a réuni les gens
 * derrière Ubayy ibn Ka'b pour 20 rak'at.
 *
 * Structure : cycles de 2 rak'at à voix haute (jahr),
 * avec salam à la fin de chaque cycle de 2.
 * Une pause (tarwiha) est sunnah toutes les 4 rak'at.
 *
 * Classée comme sunnah mu'akkada.
 *
 * Différences vs Shafi'i :
 *   - Qabd sur la poitrine (pas sous)
 *   - Thana = « Subhanaka Allahumma… » dans la 1re rak'a de chaque cycle
 *   - Ta'awwudh uniquement dans la 1re rak'a de chaque cycle
 *   - Bismillah pas partie de la Fatiha
 *   - Genoux d'abord pour le sujud
 *   - Rafa' al-yadayn à 3 endroits (pas 4)
 *   - Tashahhud Ibn Mas'ud
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi',
 *              al-Insaf (al-Mardawi).
 */
export const tarawih: PrayerDefinition = {
  id: 'tarawih',
  name: 'Tarawih',
  nameAr: 'التراويح',
  ruling: 'sunnah-muakkada',
  rakaatCount: 20,
  description: 'Prière nocturne du Ramadan — cycles de 2 rak\'at à voix haute (jahr). La position mashhur en Hanbali (Al-Mughni, Zad al-Mustaqni\') est 20 rak\'at, basée sur la pratique de \'Umar ibn al-Khattab. Sunnah mu\'akkada. Chaque cycle de 2 rak\'at se termine par un salam. Une pause (tarwiha) est sunnah toutes les 4 rak\'at. Qabd sur la poitrine (\'ala as-sadr), genoux d\'abord pour le sujud, tashahhud d\'Ibn Mas\'ud. Ce cycle de 2 rak\'at représente le modèle générique.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-tarawih-r1', { jahr: true }),
        ...rukuBlock('h-tarawih-r1'),
        ...sujudBlock('h-tarawih-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-tarawih-r2', { jahr: true }),
        ...rukuBlock('h-tarawih-r2'),
        ...sujudBlock('h-tarawih-r2'),
        // Iftirash pour le tashahhud final (cycle de 2 rak'at = pas de tawarruk)
        ...finalBlock('h-tarawih-r2', { tawarruk: false }),
      ],
    },
  ],
};
