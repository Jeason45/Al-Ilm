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

/**
 * Maghrib Hanbali — 3 rak'at fard, voix haute pour les 2 premières, voix basse pour la 3e.
 *
 * Rawatib Hanbali pour le Maghrib : 2 rak'at après la prière (sunnah mu'akkada).
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi'.
 */
export const maghrib: PrayerDefinition = {
  id: 'maghrib',
  name: 'Maghrib',
  nameAr: 'المغرب',
  ruling: 'fard',
  rakaatCount: 3,
  description: 'Prière du coucher du soleil — 3 rak\'at, voix haute (jahr) pour les 2 premières, voix basse (sirr) pour la 3e. Qabd sur la poitrine (\'ala as-sadr), bismillah silencieuse (pas partie de la Fatiha), amin à voix haute dans les 2 premières rak\'at, genoux d\'abord pour le sujud. Le tashahhud intermédiaire est WAJIB (= fard). Tawarruk dans le dernier tashahhud (prière de 3 rak\'at = 2 tashahhuds). Les rawatib du Maghrib sont 2 rak\'at après la prière.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-maghrib-r1', { jahr: true }),
        ...rukuBlock('h-maghrib-r1'),
        ...sujudBlock('h-maghrib-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-maghrib-r2', { jahr: true }),
        ...rukuBlock('h-maghrib-r2'),
        ...sujudBlock('h-maghrib-r2'),
        tashahudIntermediate('h-maghrib-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('h-maghrib-r3'),
        ...subsequentRakahFatihaOnly('h-maghrib-r3').slice(1),
        ...rukuBlock('h-maghrib-r3'),
        ...sujudBlock('h-maghrib-r3'),
        // Tawarruk dans le dernier tashahhud (2 tashahhuds dans une prière de 3 rak'at)
        ...finalBlock('h-maghrib-r3', { tawarruk: true }),
      ],
    },
  ],
};
