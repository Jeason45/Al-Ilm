import type { AblutionDefinition } from '../types';

/**
 * Ghusl Homme selon l'école Malikite — positions propres à l'école malikite.
 *
 * Fard du ghusl Malikite (5) :
 *   1. Niyyah (FARD)
 *   2. Couvrir tout le corps d'eau
 *   3. Dalk (frottement — FARD, unique Malikite)
 *   4. Muwalat (continuité — FARD)
 *   5. Faire pénétrer l'eau dans les cheveux (jusqu'aux racines)
 *
 * Différences clés vs Hanafi :
 *   - Niyyah = FARD (Hanafi: sunnah)
 *   - Dalk = FARD (Hanafi: pas requis)
 *   - Muwalat = FARD (Hanafi: pas requis)
 *   - Madmada/Istinshaq = SUNNAH même dans le ghusl (Hanafi: FARD dans le ghusl)
 *
 * Références : Al-Risala, Mukhtasar Khalil, Al-Mudawwana.
 */
export const ghuslMen: AblutionDefinition = {
  id: 'ghusl-men',
  name: 'Ghusl Homme',
  nameAr: 'الغسل للرجل',
  description: 'Purification majeure obligatoire pour l\'homme. Selon l\'école malikite, le ghusl comporte 5 fard : niyyah, couverture de tout le corps, dalk (frottement), muwalat (continuité), et pénétration de l\'eau dans les cheveux. La madmada et l\'istinshaq restent sunnah même dans le ghusl (contrairement à l\'école hanafite).',
  conditions: [
    {
      id: 'm-ghusl-men-janabah',
      title: 'Janabah (impureté majeure)',
      titleAr: 'الجنابة',
      description: 'Après un rapport sexuel (avec ou sans éjaculation) ou après une éjaculation (pendant le sommeil ou l\'éveil).',
    },
    {
      id: 'm-ghusl-men-islam',
      title: 'Entrée en Islam',
      titleAr: 'الدخول في الإسلام',
      description: 'Le ghusl est obligatoire lors de la conversion à l\'Islam selon la majorité des savants malikites (Al-Risala).',
    },
    {
      id: 'm-ghusl-men-friday',
      title: 'Prière du vendredi',
      titleAr: 'صلاة الجمعة',
      description: 'Le ghusl du vendredi est sunnah mu\'akkada avant la prière du Jumu\'a.',
    },
    {
      id: 'm-ghusl-men-eid',
      title: 'Jour de l\'Aïd',
      titleAr: 'يوم العيد',
      description: 'Il est recommandé de faire le ghusl avant la prière de l\'Aïd al-Fitr et de l\'Aïd al-Adha.',
    },
    {
      id: 'm-ghusl-men-death',
      title: 'Lavage du mort',
      titleAr: 'غسل الميت',
      description: 'Il est recommandé de faire le ghusl après avoir lavé un défunt.',
    },
  ],
  steps: [
    {
      id: 'm-ghusl-men-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le ghusl pour lever l\'impureté majeure (janabah). En Malikite, la niyyah est FARD — sans elle le ghusl est invalide.',
      ruling: 'fard',
    },
    {
      id: 'm-ghusl-men-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer. Mandoub (recommandé) en Malikite.',
      ruling: 'mandoub',
    },
    {
      id: 'm-ghusl-men-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains jusqu\'aux poignets.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 'm-ghusl-men-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: 'غسل الفرج',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impureté.',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-men-5-mouth',
      order: 5,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Rincer la bouche avec de l\'eau. En Malikite, la madmada reste SUNNAH même dans le ghusl (contrairement à l\'école hanafite où elle est fard dans le ghusl).',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-men-6-nose',
      order: 6,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: 'الاستنشاق',
      description: 'Aspirer de l\'eau dans les narines et se moucher. En Malikite, l\'istinshaq reste SUNNAH même dans le ghusl (contrairement à l\'école hanafite où il est fard dans le ghusl).',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-men-7-wudu',
      order: 7,
      name: 'Faire le wudu complet',
      nameAr: 'الوضوء',
      description: 'Effectuer un wudu complet. Sunnah en Malikite (pas fard). Le ghusl seul suffit pour lever l\'impureté majeure ET mineure. Si on touche ses parties intimes pendant le ghusl après le wudu, il faudra refaire le wudu séparément après.',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-men-8-head',
      order: 8,
      name: 'Verser l\'eau sur la tête et les cheveux',
      nameAr: 'إفاضة الماء على الرأس',
      description: 'Verser de l\'eau abondamment sur la tête trois fois en s\'assurant que l\'eau pénètre JUSQU\'AUX RACINES des cheveux et de la barbe. Faire pénétrer l\'eau dans les cheveux est FARD en Malikite, même si les cheveux sont épais ou en tresses. FROTTER la tête avec les mains (dalk).',
      ruling: 'fard',
      repetitions: 3,
    },
    {
      id: 'm-ghusl-men-9-body',
      order: 9,
      name: 'Laver et FROTTER tout le corps',
      nameAr: 'غسل ودلك سائر الجسد',
      description: 'Laver le corps entier en commençant par le côté droit (sunnah) puis le côté gauche. FROTTER chaque partie du corps avec la main pendant le lavage (dalk = FARD). S\'assurer que l\'eau atteigne chaque partie sans exception. La muwalat (continuité sans longue pause) est aussi FARD. Le tartib (ordre) n\'est PAS fard dans le ghusl en Malikite (contrairement au tayammum où il est fard). On peut commencer par n\'importe quelle partie du corps.',
      ruling: 'fard',
    },
  ],
};
