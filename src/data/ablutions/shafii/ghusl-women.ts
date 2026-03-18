import type { AblutionDefinition } from '../types';

/**
 * Ghusl Femme selon l'école Chafiite — positions propres à l'école chafiite.
 * Mêmes 2 fard que le ghusl homme (niyyah + couvrir tout le corps d'eau).
 *
 * Particularités femme :
 *   - Hayd (menstrues) : min 1 jour et 1 nuit (24h), max 15 jours
 *   - Nifas (lochies) : max 60 jours
 *   - Tresses : PAS obligatoire de les défaire si l'eau atteint les racines
 *
 * Références : Al-Umm, Al-Majmu' (Nawawi), Minhaj at-Talibin, Tuhfat al-Muhtaj.
 */
export const ghuslWomen: AblutionDefinition = {
  id: 'ghusl-women',
  name: 'Ghusl Femme',
  nameAr: 'الغسل للمرأة',
  description: 'Purification majeure obligatoire pour la femme. Mêmes 2 fard que le ghusl de l\'homme en Chafiite : niyyah et couverture de tout le corps d\'eau. Pas de dalk ni de muwalat obligatoire. La femme n\'est PAS obligée de défaire ses tresses si l\'eau atteint les racines des cheveux — que ce soit pour janabah, hayd ou nifas (position retenue en Chafiite, basée sur le hadith d\'Umm Salama).',
  conditions: [
    {
      id: 's-ghusl-women-janabah',
      title: 'Janabah (impureté majeure)',
      titleAr: 'الجنابة',
      description: 'Après un rapport sexuel (avec ou sans orgasme — la pénétration seule suffit) ou après un rêve érotique accompagné de sécrétions (mani).',
    },
    {
      id: 's-ghusl-women-menstruation',
      title: 'Fin des menstrues (Hayd)',
      titleAr: 'انتهاء الحيض',
      description: 'Le ghusl est obligatoire après la fin des règles (hayd). En Chafiite, la durée minimale du hayd est de 1 jour et 1 nuit (24 heures) et la durée maximale est de 15 jours. La durée la plus courante (ghalib) est de 6 à 7 jours. Ce chiffre est important pour le calcul de l\'istihadha chez la mubtadi\'a (femme sans cycle établi). Le sang qui dure moins de 24h ou plus de 15 jours est considéré comme istihadha (métrorragie).',
    },
    {
      id: 's-ghusl-women-postpartum',
      title: 'Fin des lochies (Nifas)',
      titleAr: 'انتهاء النفاس',
      description: 'Le ghusl est obligatoire après la fin des saignements post-accouchement (nifas). En Chafiite, la durée maximale du nifas est de 60 jours (comme en Malikite, contrairement aux 40 jours en Hanafite). Il n\'y a PAS de durée minimale pour le nifas en Chafiite — même un instant de saignement post-accouchement compte comme nifas.',
    },
    {
      id: 's-ghusl-women-islam',
      title: 'Entrée en Islam',
      titleAr: 'الدخول في الإسلام',
      description: 'Le ghusl lors de la conversion est sunnah mu\'akkada selon la position retenue en Chafiite.',
    },
    {
      id: 's-ghusl-women-friday',
      title: 'Prière du vendredi',
      titleAr: 'صلاة الجمعة',
      description: 'Le ghusl est sunnah mu\'akkada pour celles qui se rendent à la prière du Jumu\'a.',
    },
    {
      id: 's-ghusl-women-eid',
      title: 'Jour de l\'Aïd',
      titleAr: 'يوم العيد',
      description: 'Le ghusl est sunnah avant la prière de l\'Aïd al-Fitr et de l\'Aïd al-Adha.',
    },
    {
      id: 's-ghusl-women-death',
      title: 'Lavage du mort',
      titleAr: 'غسل الميت',
      description: 'Le ghusl est sunnah après avoir lavé une défunte.',
    },
    {
      id: 's-ghusl-women-ihram',
      title: 'Entrée en ihram (Hajj/Umra)',
      titleAr: 'الإحرام',
      description: 'Le ghusl est sunnah mu\'akkada avant d\'entrer en état d\'ihram pour le Hajj ou la Umra.',
    },
  ],
  steps: [
    {
      id: 's-ghusl-women-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le ghusl pour lever l\'impureté majeure (janabah, hayd ou nifas selon le cas). En Chafiite, la niyyah est FARD — sans elle, le ghusl est invalide.',
      ruling: 'fard',
    },
    {
      id: 's-ghusl-women-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer. Sunnah en Chafiite.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-women-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains jusqu\'aux poignets trois fois.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 's-ghusl-women-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: 'غسل الفرج',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impureté et trace de sang.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-women-5-wudu',
      order: 5,
      name: 'Faire le wudu complet',
      nameAr: 'الوضوء',
      description: 'Effectuer un wudu complet. Sunnah en Chafiite. Le ghusl seul suffit pour lever les deux impuretés. Si on touche ses parties intimes avec l\'intérieur de la main pendant le ghusl après le wudu, il faudra refaire le wudu séparément (car toucher les parties intimes annule le wudu en Chafiite pour homme ET femme).',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-women-6-mouth',
      order: 6,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Rincer la bouche. SUNNAH même dans le ghusl en Chafiite. Fortement recommandée.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-women-7-nose',
      order: 7,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: 'الاستنشاق',
      description: 'Aspirer de l\'eau dans les narines et se moucher. SUNNAH même dans le ghusl en Chafiite.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-women-8-head',
      order: 8,
      name: 'Verser l\'eau sur la tête et les cheveux',
      nameAr: 'إفاضة الماء على الرأس',
      description: 'Verser de l\'eau abondamment sur la tête trois fois. L\'eau DOIT pénétrer jusqu\'aux racines des cheveux (fard). En Chafiite, la femme n\'est PAS obligée de défaire ses tresses si l\'eau atteint les racines. Pas de dalk requis — l\'eau qui couvre suffit.',
      ruling: 'fard',
      repetitions: 3,
    },
    {
      id: 's-ghusl-women-9-body',
      order: 9,
      name: 'Laver tout le corps',
      nameAr: 'غسل سائر الجسد',
      description: 'Laver le corps entier en commençant par le côté droit (sunnah) puis le gauche. S\'assurer que l\'eau atteigne chaque partie du corps. Attention aux plis, aisselles, nombril, derrière les genoux, entre les orteils. En Chafiite, le dalk (frottement) n\'est PAS fard. La muwalat (continuité) n\'est PAS fard non plus.',
      ruling: 'fard',
    },
    {
      id: 's-ghusl-women-10-traces',
      order: 10,
      name: 'Vérifier les traces de sang (après menstrues/lochies)',
      nameAr: 'التأكد من زوال أثر الدم',
      description: 'Après les menstrues ou les lochies, il est recommandé d\'utiliser un morceau de coton parfumé au musc sur les parties intimes (hadith d\'Aïcha, Muslim). S\'assurer que toute trace de sang est bien nettoyée.',
      ruling: 'sunnah',
    },
  ],
};
