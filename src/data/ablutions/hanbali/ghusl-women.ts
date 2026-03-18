import type { AblutionDefinition } from '../types';

/**
 * Ghusl Femme selon l'école Hanbalite — positions propres à l'école hanbalite.
 * Mêmes 3 fard que le ghusl homme (niyyah, madmada + istinshaq, couvrir tout le corps d'eau).
 *
 * Particularités femme :
 *   - Hayd (menstrues) : min 1 jour (24h), max 15 jours
 *   - Nifas (lochies) : max 40 jours (DIFFÉRENT du Chafiite/Malikite : 60 jours)
 *   - Tresses (ghusl janabah) : PAS obligatoire de les défaire si l'eau atteint les racines
 *   - Tresses (ghusl hayd) : WAJIB (obligatoire) selon le mu'tamad de les défaire (certains savants disent sunnah mu'akkada)
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi' (al-Buhuti),
 *              Kashaf al-Qina' (al-Buhuti).
 */
export const ghuslWomen: AblutionDefinition = {
  id: 'ghusl-women',
  name: 'Ghusl Femme',
  nameAr: '\u0627\u0644\u063a\u0633\u0644 \u0644\u0644\u0645\u0631\u0623\u0629',
  description: 'Purification majeure obligatoire pour la femme. M\u00eames 3 fard que le ghusl de l\'homme en Hanbalite : niyyah, madmada + istinshaq (FARD), et couverture de tout le corps d\'eau. Pas de dalk, pas de muwalat, pas de tartib obligatoire dans le ghusl. Pour le ghusl de janabah, il n\'est PAS obligatoire de d\u00e9faire les tresses si l\'eau atteint les racines. Pour le ghusl des menstrues (hayd), il est WAJIB (obligatoire) selon le mu\'tamad de d\u00e9faire les tresses (certains savants disent sunnah mu\'akkada).',
  conditions: [
    {
      id: 'h-ghusl-women-janabah',
      title: 'Janabah (impuret\u00e9 majeure)',
      titleAr: '\u0627\u0644\u062c\u0646\u0627\u0628\u0629',
      description: 'Apr\u00e8s un rapport sexuel (avec ou sans orgasme \u2014 la p\u00e9n\u00e9tration seule suffit) ou apr\u00e8s une \u00e9mission de mani. Pendant l\'\u00e9veil, l\'\u00e9mission de mani n\u00e9cessite le ghusl uniquement si elle s\'accompagne de shahwa (plaisir/d\u00e9sir). Si le mani sort sans shahwa pendant l\'\u00e9veil (maladie, froid), le ghusl n\'est PAS obligatoire. Pendant le sommeil, toute d\u00e9couverte de mani n\u00e9cessite le ghusl, que la shahwa ait \u00e9t\u00e9 ressentie ou non.',
    },
    {
      id: 'h-ghusl-women-menstruation',
      title: 'Fin des menstrues (Hayd)',
      titleAr: '\u0627\u0646\u062a\u0647\u0627\u0621 \u0627\u0644\u062d\u064a\u0636',
      description: 'Le ghusl est obligatoire apr\u00e8s la fin des r\u00e8gles (hayd). En Hanbalite, la dur\u00e9e minimale du hayd est de 1 jour (24 heures) et la dur\u00e9e maximale est de 15 jours. Le sang qui dure moins de 24h ou plus de 15 jours est consid\u00e9r\u00e9 comme istihadha (m\u00e9trorragie). Il est RECOMMAND\u00c9 (certains disent wajib) de d\u00e9faire les tresses lors du ghusl des menstrues pour s\'assurer que l\'eau atteigne les racines.',
    },
    {
      id: 'h-ghusl-women-postpartum',
      title: 'Fin des lochies (Nifas)',
      titleAr: '\u0627\u0646\u062a\u0647\u0627\u0621 \u0627\u0644\u0646\u0641\u0627\u0633',
      description: 'Le ghusl est obligatoire apr\u00e8s la fin des saignements post-accouchement (nifas). En Hanbalite, la dur\u00e9e maximale du nifas est de 40 jours. En Hanafite aussi, le maximum est de 40 jours (m\u00eame position que le Hanbalite). Seuls le Chafiite et le Malikite fixent 60 jours. Au-del\u00e0 de 40 jours, les saignements sont consid\u00e9r\u00e9s comme istihadha.',
    },
    {
      id: 'h-ghusl-women-islam',
      title: 'Entr\u00e9e en Islam',
      titleAr: '\u0627\u0644\u062f\u062e\u0648\u0644 \u0641\u064a \u0627\u0644\u0625\u0633\u0644\u0627\u0645',
      description: 'Le ghusl lors de la conversion à l\'Islam est WAJIB (obligatoire) selon le mu\'tamad hanbalite (Zad al-Mustaqni\').',
    },
    {
      id: 'h-ghusl-women-friday',
      title: 'Pri\u00e8re du vendredi',
      titleAr: '\u0635\u0644\u0627\u0629 \u0627\u0644\u062c\u0645\u0639\u0629',
      description: 'Le ghusl est sunnah mu\'akkada pour celles qui se rendent \u00e0 la pri\u00e8re du Jumu\'a.',
    },
    {
      id: 'h-ghusl-women-eid',
      title: 'Jour de l\'A\u00efd',
      titleAr: '\u064a\u0648\u0645 \u0627\u0644\u0639\u064a\u062f',
      description: 'Le ghusl est sunnah avant la pri\u00e8re de l\'A\u00efd al-Fitr et de l\'A\u00efd al-Adha.',
    },
    {
      id: 'h-ghusl-women-death',
      title: 'Lavage du mort',
      titleAr: '\u063a\u0633\u0644 \u0627\u0644\u0645\u064a\u062a',
      description: 'Le ghusl apr\u00e8s avoir lav\u00e9 une d\u00e9funte est WAJIB selon la lecture litt\u00e9rale du Zad al-Mustaqni\u2019. Toutefois, certains muhaqqiqin hanbalites (dont Ibn Taymiyyah) le consid\u00e8rent sunnah mu\u2019akkada. La position retenue (mu\u2019tamad) dans les manuels tardifs est le wujub.',
    },
  ],
  steps: [
    {
      id: 'h-ghusl-women-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: '\u0627\u0644\u0646\u064a\u0629',
      description: 'Formuler l\'intention dans le c\u0153ur de faire le ghusl pour lever l\'impuret\u00e9 majeure (janabah, hayd ou nifas selon le cas). En Hanbalite, la niyyah est FARD \u2014 sans elle, le ghusl est invalide.',
      ruling: 'fard',
    },
    {
      id: 'h-ghusl-women-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: '\u0628\u0633\u0645 \u0627\u0644\u0644\u0647',
      description: 'Prononcer \u00ab Bismillah \u00bb avant de commencer. WAJIB en Hanbalite.',
      ruling: 'wajib',
    },
    {
      id: 'h-ghusl-women-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u064a\u062f\u064a\u0646',
      description: 'Laver les deux mains jusqu\'aux poignets trois fois.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 'h-ghusl-women-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u0641\u0631\u062c',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impuret\u00e9 et trace de sang.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-women-5-wudu',
      order: 5,
      name: 'Faire le wudu complet',
      nameAr: '\u0627\u0644\u0648\u0636\u0648\u0621',
      description: 'Effectuer un wudu complet. Sunnah en Hanbalite. Le ghusl seul suffit pour lever les deux impuret\u00e9s \u00e0 condition d\'avoir fait la madmada et l\'istinshaq (qui sont fard). Il est recommand\u00e9 de retarder le lavage des pieds \u00e0 la fin du ghusl.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-women-6-mouth',
      order: 6,
      name: 'Rincer la bouche (Madmada)',
      nameAr: '\u0627\u0644\u0645\u0636\u0645\u0636\u0629',
      description: 'Rincer la bouche. FARD en Hanbalite m\u00eame dans le ghusl. Si le wudu complet (sunnah) a d\u00e9j\u00e0 \u00e9t\u00e9 fait \u00e0 l\'\u00e9tape 5, cette obligation est d\u00e9j\u00e0 remplie.',
      ruling: 'fard',
    },
    {
      id: 'h-ghusl-women-7-nose',
      order: 7,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: '\u0627\u0644\u0627\u0633\u062a\u0646\u0634\u0627\u0642',
      description: 'Aspirer de l\'eau dans les narines et se moucher. FARD en Hanbalite m\u00eame dans le ghusl. Si le wudu complet (sunnah) a d\u00e9j\u00e0 \u00e9t\u00e9 fait \u00e0 l\'\u00e9tape 5, cette obligation est d\u00e9j\u00e0 remplie.',
      ruling: 'fard',
    },
    {
      id: 'h-ghusl-women-8-head',
      order: 8,
      name: 'Verser l\'eau sur la t\u00eate et les cheveux',
      nameAr: '\u0625\u0641\u0627\u0636\u0629 \u0627\u0644\u0645\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0631\u0623\u0633',
      description: 'Verser de l\'eau abondamment sur la t\u00eate trois fois. L\'eau DOIT p\u00e9n\u00e9trer jusqu\'aux racines des cheveux (fard). Pour le ghusl de JANABAH : il n\'est PAS obligatoire de d\u00e9faire les tresses si l\'eau atteint les racines (hadith d\'Umm Salama, Muslim). Pour le ghusl de HAYD : il est WAJIB (obligatoire) selon le mu\'tamad de d\u00e9faire les tresses pour s\'assurer de la puret\u00e9 compl\u00e8te apr\u00e8s les menstrues. Certains savants disent sunnah mu\'akkada. (Hadith d\'\u00c2\u00efcha, Muslim).',
      ruling: 'fard',
      repetitions: 3,
      madhabNote: 'En Hanbalite, d\u00e9faire les tresses est WAJIB (obligatoire selon le mu\'tamad) pour le ghusl de hayd, mais PAS obligatoire pour le ghusl de janabah. Certains savants hanbalites disent sunnah mu\'akkada. En Chafiite, ce n\'est obligatoire dans aucun cas. En Malikite, c\'est recommand\u00e9 dans les deux cas.',
    },
    {
      id: 'h-ghusl-women-9-body',
      order: 9,
      name: 'Laver tout le corps',
      nameAr: '\u063a\u0633\u0644 \u0633\u0627\u0626\u0631 \u0627\u0644\u062c\u0633\u062f',
      description: 'Laver le corps entier en commen\u00e7ant par le c\u00f4t\u00e9 droit (sunnah) puis le gauche. S\'assurer que l\'eau atteigne chaque partie du corps. Attention aux plis, aisselles, nombril, derri\u00e8re les genoux, entre les orteils. En Hanbalite, le dalk (frottement) n\'est PAS fard. La muwalat (continuit\u00e9) n\'est PAS fard dans le ghusl. Le tartib (ordre) n\'est PAS non plus fard dans le ghusl.',
      ruling: 'fard',
    },
    {
      id: 'h-ghusl-women-10-traces',
      order: 10,
      name: 'V\u00e9rifier les traces de sang (apr\u00e8s menstrues/lochies)',
      nameAr: '\u0627\u0644\u062a\u0623\u0643\u062f \u0645\u0646 \u0632\u0648\u0627\u0644 \u0623\u062b\u0631 \u0627\u0644\u062f\u0645',
      description: 'Apr\u00e8s les menstrues ou les lochies, il est recommand\u00e9 d\'utiliser un morceau de coton parfum\u00e9 au musc sur les parties intimes (hadith d\'A\u00efcha, Muslim). S\'assurer que toute trace de sang est bien nettoy\u00e9e.',
      ruling: 'sunnah',
    },
  ],
};
