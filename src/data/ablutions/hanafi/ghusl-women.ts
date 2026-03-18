import type { AblutionDefinition } from '../types';

/**
 * Ghusl Femme selon l'école Hanafite — positions propres à l'école hanafite.
 *
 * Mêmes fard que le ghusl homme (3) :
 *   1. Madmada (FARD dans le ghusl)
 *   2. Istinshaq (FARD dans le ghusl)
 *   3. Laver l'intégralité du corps
 *
 * Notes spécifiques femme :
 *   - Les tresses n'ont PAS besoin d'être défaites si l'eau atteint les racines
 *     (hadith d'Umm Salama, Muslim). Mais si l'eau ne peut pas atteindre les
 *     racines, il FAUT les défaire.
 *   - Après les menstrues/lochies : utiliser du musc/parfum sur les parties
 *     intimes (sunnah, hadith d'Aïcha, Muslim).
 *
 * Références : Nur al-Idah, Al-Hidayah, Radd al-Muhtar.
 */
export const ghuslWomen: AblutionDefinition = {
  id: 'ghusl-women',
  name: 'Ghusl Femme',
  nameAr: 'الغسل للمرأة',
  description: 'Purification majeure (bain rituel) obligatoire pour la femme. Selon l\'école hanafite, les fard sont identiques au ghusl de l\'homme : madmada, istinshaq et lavage intégral du corps. Des notes spécifiques concernent les cheveux tressés et les situations propres aux femmes.',
  conditions: [
    {
      id: 'h-ghusl-women-janabah',
      title: 'Janabah (impureté majeure)',
      titleAr: 'الجنابة',
      description: 'Après un rapport sexuel (avec ou sans orgasme) ou après un rêve érotique accompagné de sécrétions (mani).',
    },
    {
      id: 'h-ghusl-women-menstruation',
      title: 'Fin des menstrues (Hayd)',
      titleAr: 'انتهاء الحيض',
      description: 'Le ghusl est obligatoire après la fin des règles (hayd). La fin est connue par l\'arrêt complet du sang ou par l\'apparition de la sécheresse blanche (qassa blanche). En Hanafite, la durée maximale du hayd est de 10 jours et la durée minimale est de 3 jours.',
    },
    {
      id: 'h-ghusl-women-postpartum',
      title: 'Fin des lochies (Nifas)',
      titleAr: 'انتهاء النفاس',
      description: 'Le ghusl est obligatoire après la fin des saignements post-accouchement (nifas). En Hanafite, la durée maximale du nifas est de 40 jours. Il n\'y a pas de durée minimale (le nifas peut s\'arrêter dès le premier jour).',
    },
    {
      id: 'h-ghusl-women-islam',
      title: 'Entrée en Islam',
      titleAr: 'الدخول في الإسلام',
      description: 'Le ghusl est recommandé (voire obligatoire selon certains savants hanafites) lors de la conversion à l\'Islam.',
    },
    {
      id: 'h-ghusl-women-friday',
      title: 'Prière du vendredi',
      titleAr: 'صلاة الجمعة',
      description: 'Le ghusl du vendredi est sunnah mu\'akkada pour celles qui se rendent à la prière du Jumu\'a.',
    },
  ],
  steps: [
    {
      id: 'h-ghusl-women-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le ghusl pour lever l\'impureté majeure. En Hanafite, la niyyah est sunnah mu\'akkada, pas fard.',
      ruling: 'sunnah-muakkada',
    },
    {
      id: 'h-ghusl-women-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-women-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains trois fois jusqu\'aux poignets.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 'h-ghusl-women-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: 'غسل الفرج',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impureté et toute trace de sang.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-women-5-wudu',
      order: 5,
      name: 'Faire le wudu complet',
      nameAr: 'الوضوء',
      description: 'Effectuer un wudu complet comme pour la prière. En Hanafite, le wudu dans le ghusl est sunnah mu\'akkada, pas fard.',
      ruling: 'sunnah-muakkada',
    },
    {
      id: 'h-ghusl-women-6-mouth',
      order: 6,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Faire parvenir l\'eau à chaque recoin de la bouche. En Hanafite, la madmada est FARD dans le ghusl. Si elle est omise, le ghusl est invalide.',
      ruling: 'fard',
      madhabNote: 'Si la madmada a déjà été effectuée lors du wudu complet (étape 5), cette obligation est déjà remplie. Cette étape est listée séparément car elle constitue un FARD du ghusl — le wudu lui-même étant sunnah.',
    },
    {
      id: 'h-ghusl-women-7-nose',
      order: 7,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: 'الاستنشاق',
      description: 'Aspirer l\'eau jusqu\'à la partie cartilagineuse du nez. En Hanafite, l\'istinshaq est FARD dans le ghusl. S\'il est omis, le ghusl est invalide.',
      ruling: 'fard',
      madhabNote: 'Si l\'istinshaq a déjà été effectué lors du wudu complet (étape 5), cette obligation est déjà remplie. Cette étape est listée séparément car elle constitue un FARD du ghusl — le wudu lui-même étant sunnah.',
    },
    {
      id: 'h-ghusl-women-8-head',
      order: 8,
      name: 'Verser l\'eau sur la tête',
      nameAr: 'إفاضة الماء على الرأس',
      description: 'Verser de l\'eau abondamment sur la tête trois fois en s\'assurant que l\'eau pénètre jusqu\'aux racines des cheveux. Il n\'est PAS nécessaire de défaire les tresses si l\'eau atteint les racines (hadith d\'Umm Salama, Muslim). Mais si les tresses empêchent l\'eau d\'atteindre les racines, il faut les défaire. (Ceci fait partie du 3e fard — lavage intégral du corps. La tête est mentionnée séparément car la sunnah est de commencer par elle.)',
      ruling: 'fard',
      repetitions: 3,
    },
    {
      id: 'h-ghusl-women-9-body',
      order: 9,
      name: 'Laver tout le corps',
      nameAr: 'غسل سائر الجسد',
      description: 'Laver le corps entier en commençant par le côté droit (sunnah) puis le gauche. Porter une attention particulière aux plis du corps, aux aisselles, au nombril (intérieur), derrière les genoux et entre les orteils. Pas un seul cm² de peau ne doit rester sec.',
      ruling: 'fard',
    },
    {
      id: 'h-ghusl-women-10-traces',
      order: 10,
      name: 'Vérifier les traces de sang (après menstrues/lochies)',
      nameAr: 'التأكد من زوال أثر الدم',
      description: 'Après les menstrues ou les lochies, il est sunnah de frotter un morceau de coton ou tissu parfumé au musc sur les parties intimes pour enlever toute trace résiduelle (hadith d\'Aïcha, Muslim). Si le musc n\'est pas disponible, un parfum ou de l\'eau seule suffit.',
      ruling: 'sunnah',
    },
  ],
};
