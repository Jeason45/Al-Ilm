import type { AblutionDefinition } from '../types';

/**
 * Ghusl Femme selon l'école Malikite — positions propres à l'école malikite.
 * Mêmes fard que le ghusl homme (5).
 * Références : Al-Risala, Mukhtasar Khalil.
 */
export const ghuslWomen: AblutionDefinition = {
  id: 'ghusl-women',
  name: 'Ghusl Femme',
  nameAr: 'الغسل للمرأة',
  description: 'Purification majeure obligatoire pour la femme. Mêmes fard que le ghusl de l\'homme en Malikite : niyyah, couverture du corps, dalk, muwalat, pénétration de l\'eau dans les cheveux. Pour la janabah, il n\'est pas obligatoire de défaire les tresses si l\'eau atteint les racines. Pour le hayd, il est obligatoire (mu\'tamad) de défaire les tresses.',
  conditions: [
    {
      id: 'm-ghusl-women-janabah',
      title: 'Janabah (impureté majeure)',
      titleAr: 'الجنابة',
      description: 'Après un rapport sexuel (avec ou sans orgasme) ou après un rêve érotique accompagné de sécrétions (mani).',
    },
    {
      id: 'm-ghusl-women-menstruation',
      title: 'Fin des menstrues (Hayd)',
      titleAr: 'انتهاء الحيض',
      description: 'Le ghusl est obligatoire après la fin des règles (hayd). En Malikite, la durée maximale du hayd est de 15 jours et la durée minimale n\'a pas de limite fixe (elle peut être d\'un seul jet de sang). Pour distinguer hayd et istihadha : la mu\'tada (femme au cycle régulier) suit son habitude. Au-delà de 15 jours, le sang est considéré comme istihadha. La femme vérifie la fin des menstrues par la qassa bayda\' (sécrétion blanche) ou le jufuf (assèchement complet). Il est sunnah d\'insérer un morceau de coton (kursuf) pour vérifier.',
    },
    {
      id: 'm-ghusl-women-postpartum',
      title: 'Fin des lochies (Nifas)',
      titleAr: 'انتهاء النفاس',
      description: 'Le ghusl est obligatoire après la fin des saignements post-accouchement (nifas). En Malikite, la durée maximale du nifas est de 60 jours.',
    },
    {
      id: 'm-ghusl-women-islam',
      title: 'Entrée en Islam',
      titleAr: 'الدخول في الإسلام',
      description: 'Le ghusl est obligatoire lors de la conversion à l\'Islam selon la majorité des savants malikites (Al-Risala).',
    },
    {
      id: 'm-ghusl-women-friday',
      title: 'Prière du vendredi',
      titleAr: 'صلاة الجمعة',
      description: 'Le ghusl est sunnah mu\'akkada pour celles qui se rendent à la prière du Jumu\'a.',
    },
    {
      id: 'm-ghusl-women-eid',
      title: 'Jour de l\'Aïd',
      titleAr: 'يوم العيد',
      description: 'Il est recommandé de faire le ghusl avant la prière de l\'Aïd al-Fitr et de l\'Aïd al-Adha.',
    },
    {
      id: 'm-ghusl-women-death',
      title: 'Lavage du mort',
      titleAr: 'غسل الميت',
      description: 'Il est recommandé de faire le ghusl après avoir lavé une défunte.',
    },
  ],
  steps: [
    {
      id: 'm-ghusl-women-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le ghusl pour lever l\'impureté majeure. FARD en Malikite.',
      ruling: 'fard',
    },
    {
      id: 'm-ghusl-women-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer.',
      ruling: 'mandoub',
    },
    {
      id: 'm-ghusl-women-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains jusqu\'aux poignets.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 'm-ghusl-women-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: 'غسل الفرج',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impureté et trace de sang.',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-women-5-mouth',
      order: 5,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Rincer la bouche. SUNNAH même dans le ghusl en Malikite.',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-women-6-nose',
      order: 6,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: 'الاستنشاق',
      description: 'Aspirer de l\'eau dans les narines et se moucher. SUNNAH même dans le ghusl en Malikite.',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-women-7-wudu',
      order: 7,
      name: 'Faire le wudu complet',
      nameAr: 'الوضوء',
      description: 'Effectuer un wudu complet. Sunnah en Malikite.',
      ruling: 'sunnah',
    },
    {
      id: 'm-ghusl-women-8-head',
      order: 8,
      name: 'Verser l\'eau sur la tête et les cheveux',
      nameAr: 'إفاضة الماء على الرأس',
      description: 'Verser de l\'eau abondamment sur la tête trois fois. L\'eau DOIT pénétrer jusqu\'aux racines des cheveux (fard). FROTTER la tête et les cheveux avec les mains (dalk). Pour le ghusl de JANABAH : il n\'est PAS obligatoire de défaire les tresses si l\'eau atteint les racines (hadith d\'Umm Salama, Muslim). Pour le ghusl de HAYD : il est OBLIGATOIRE (mu\'tamad) de défaire les tresses pour s\'assurer de la pureté complète après les menstrues.',
      ruling: 'fard',
      repetitions: 3,
    },
    {
      id: 'm-ghusl-women-9-body',
      order: 9,
      name: 'Laver et FROTTER tout le corps',
      nameAr: 'غسل ودلك سائر الجسد',
      description: 'Laver le corps entier en commençant par le côté droit. FROTTER chaque partie du corps avec la main (dalk = FARD). Attention aux plis du corps, aisselles, nombril, derrière les genoux, entre les orteils. Continuité (muwalat) = FARD. Le tartib (ordre) n\'est PAS fard dans le ghusl en Malikite (contrairement au tayammum où il est fard). On peut commencer par n\'importe quelle partie du corps.',
      ruling: 'fard',
    },
    {
      id: 'm-ghusl-women-10-traces',
      order: 10,
      name: 'Vérifier les traces de sang (après menstrues/lochies)',
      nameAr: 'التأكد من زوال أثر الدم',
      description: 'Après les menstrues ou les lochies, il est recommandé d\'utiliser un morceau de coton parfumé au musc sur les parties intimes (hadith d\'Aïcha, Muslim).',
      ruling: 'sunnah',
    },
  ],
};
