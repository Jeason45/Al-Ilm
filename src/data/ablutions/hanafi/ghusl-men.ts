import type { AblutionDefinition } from '../types';

/**
 * Ghusl Homme selon l'école Hanafite — positions propres à l'école hanafite.
 *
 * Fard du ghusl Hanafi (3 seulement) :
 *   1. Madmada (rincer la bouche) — FARD ici (sunnah dans le wudu)
 *   2. Istinshaq (rincer le nez) — FARD ici (sunnah dans le wudu)
 *   3. Laver l'intégralité du corps (pas un cm² sec)
 *
 * Particularités Hanafi :
 *   - Niyyah = sunnah (PAS fard, même pour le ghusl)
 *   - Le wudu dans le ghusl = sunnah mu'akkada (PAS fard)
 *   - Madmada et Istinshaq passent de sunnah (wudu) à FARD (ghusl)
 *
 * Références : Nur al-Idah, Al-Hidayah, Radd al-Muhtar.
 */
export const ghuslMen: AblutionDefinition = {
  id: 'ghusl-men',
  name: 'Ghusl Homme',
  nameAr: 'الغسل للرجل',
  description: 'Purification majeure (bain rituel) obligatoire pour l\'homme. Selon l\'école hanafite, le ghusl ne comporte que 3 fard : la madmada, l\'istinshaq et le lavage intégral du corps. La niyyah et le wudu complet ne sont pas fard mais sunnah mu\'akkada.',
  conditions: [
    {
      id: 'h-ghusl-men-janabah',
      title: 'Janabah (impureté majeure)',
      titleAr: 'الجنابة',
      description: 'Après un rapport sexuel (avec ou sans éjaculation) ou après une éjaculation (pendant le sommeil ou l\'éveil).',
    },
    {
      id: 'h-ghusl-men-islam',
      title: 'Entrée en Islam',
      titleAr: 'الدخول في الإسلام',
      description: 'Sunnah (mustahabb) selon la position mu\'tamad hanafite. Certains savants disent wajib. Le ghusl est recommandé lors de la conversion à l\'Islam.',
    },
    {
      id: 'h-ghusl-men-friday',
      title: 'Prière du vendredi',
      titleAr: 'صلاة الجمعة',
      description: 'Le ghusl du vendredi est sunnah mu\'akkada avant la prière du Jumu\'a.',
    },
    {
      id: 'h-ghusl-men-eid',
      title: 'Jour de l\'Aïd',
      titleAr: 'يوم العيد',
      description: 'Il est sunnah de faire le ghusl avant la prière de l\'Aïd al-Fitr et de l\'Aïd al-Adha.',
    },
    {
      id: 'h-ghusl-men-death',
      title: 'Lavage du mort',
      titleAr: 'غسل الميت',
      description: 'Il est recommandé de faire le ghusl après avoir lavé un défunt.',
    },
  ],
  steps: [
    {
      id: 'h-ghusl-men-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le ghusl pour lever l\'impureté majeure (janabah). En Hanafite, la niyyah est sunnah mu\'akkada — le ghusl serait valide même sans elle (si quelqu\'un tombait dans l\'eau et que tout le corps était lavé, le ghusl serait techniquement valide).',
      ruling: 'sunnah-muakkada',
    },
    {
      id: 'h-ghusl-men-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-men-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains trois fois jusqu\'aux poignets.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 'h-ghusl-men-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: 'غسل الفرج',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impureté et toute trace de najasa.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-men-5-wudu',
      order: 5,
      name: 'Faire le wudu complet',
      nameAr: 'الوضوء',
      description: 'Effectuer un wudu complet comme pour la prière. En Hanafite, le wudu dans le ghusl est sunnah mu\'akkada, pas fard. Certains savants recommandent de retarder le lavage des pieds à la fin du ghusl si l\'eau stagne au sol.',
      ruling: 'sunnah-muakkada',
    },
    {
      id: 'h-ghusl-men-6-mouth',
      order: 6,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Faire parvenir l\'eau à chaque recoin de la bouche : derrière les molaires, les plis des joues, les espaces entre les dents, la surface de la langue. En Hanafite, la madmada est FARD dans le ghusl (contrairement au wudu où elle est sunnah). Si elle est omise, le ghusl est invalide.',
      ruling: 'fard',
      madhabNote: 'Si la madmada a déjà été effectuée lors du wudu complet (étape 5), cette obligation est déjà remplie. Cette étape est listée séparément car elle constitue un FARD du ghusl — le wudu lui-même étant sunnah.',
    },
    {
      id: 'h-ghusl-men-7-nose',
      order: 7,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: 'الاستنشاق',
      description: 'Aspirer l\'eau jusqu\'à la partie cartilagineuse du nez. En Hanafite, l\'istinshaq est FARD dans le ghusl (contrairement au wudu où il est sunnah). S\'il est omis, le ghusl est invalide.',
      ruling: 'fard',
      madhabNote: 'Si l\'istinshaq a déjà été effectué lors du wudu complet (étape 5), cette obligation est déjà remplie. Cette étape est listée séparément car elle constitue un FARD du ghusl — le wudu lui-même étant sunnah.',
    },
    {
      id: 'h-ghusl-men-8-head',
      order: 8,
      name: 'Verser l\'eau sur la tête',
      nameAr: 'إفاضة الماء على الرأس',
      description: 'Verser de l\'eau abondamment sur la tête trois fois en s\'assurant que l\'eau pénètre jusqu\'aux racines des cheveux et de la barbe. Passer les doigts dans la barbe épaisse pour que l\'eau atteigne la peau. (Ceci fait partie du 3e fard — lavage intégral du corps. La tête est mentionnée séparément car la sunnah est de commencer par elle.)',
      ruling: 'fard',
      repetitions: 3,
    },
    {
      id: 'h-ghusl-men-9-body',
      order: 9,
      name: 'Laver tout le corps',
      nameAr: 'غسل سائر الجسد',
      description: 'Laver le corps entier sans exception, en commençant par le côté droit (sunnah) puis le côté gauche. S\'assurer que l\'eau atteint chaque partie : aisselles, nombril (intérieur), entre les orteils, derrière les oreilles, sous les sourcils, sous la moustache. Pas un seul cm² de peau ne doit rester sec.',
      ruling: 'fard',
    },
  ],
};
