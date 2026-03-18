import type { AblutionDefinition } from '../types';

/**
 * Ghusl Homme selon l'école Chafiite — positions propres à l'école chafiite.
 *
 * Fard du ghusl Chafiite (2 SEULEMENT — le plus simple de toutes les écoles !) :
 *   1. Niyyah (FARD)
 *   2. Couvrir tout le corps d'eau (y compris les racines des cheveux)
 *
 * C'est tout. Pas de dalk, pas de muwalat, pas de tartib,
 * pas de madmada/istinshaq fard séparément.
 *
 * Différences clés :
 *   - Niyyah = FARD (Hanafi: sunnah)
 *   - Dalk = PAS requis (Malikite: fard)
 *   - Muwalat = PAS requise (Malikite: fard)
 *   - Madmada/Istinshaq = SUNNAH même dans le ghusl (FARD en Hanafite et Hanbalite dans le ghusl. Sunnah en Chafiite et Malikite.)
 *   - Conversion = sunnah mu'akkada selon une position, WAJIB selon Ibn Hajar al-Haytami (disputé dans l'école) (Malikite: obligatoire)
 *
 * Références : Al-Umm, Al-Majmu' (Nawawi), Minhaj at-Talibin, Tuhfat al-Muhtaj.
 */
export const ghuslMen: AblutionDefinition = {
  id: 'ghusl-men',
  name: 'Ghusl Homme',
  nameAr: 'الغسل للرجل',
  description: 'Purification majeure obligatoire pour l\'homme. L\'école chafiite a le ghusl le plus simple de toutes les écoles : SEULEMENT 2 fard — niyyah et couverture de tout le corps d\'eau (y compris les racines des cheveux). Pas de dalk, pas de muwalat, pas de tartib obligatoire. La madmada et l\'istinshaq restent sunnah même dans le ghusl.',
  conditions: [
    {
      id: 's-ghusl-men-janabah',
      title: 'Janabah (impureté majeure)',
      titleAr: 'الجنابة',
      description: 'Après un rapport sexuel (avec ou sans éjaculation — la pénétration seule suffit) ou après une éjaculation (mani) pendant le sommeil ou l\'éveil, avec ou sans plaisir.',
    },
    {
      id: 's-ghusl-men-islam',
      title: 'Entrée en Islam',
      titleAr: 'الدخول في الإسلام',
      description: 'Sunnah mu\'akkada selon une position, WAJIB selon la position forte d\'Ibn Hajar al-Haytami (Tuhfat al-Muhtaj). Le sujet est disputé dans l\'école. En Malikite c\'est obligatoire.',
    },
    {
      id: 's-ghusl-men-friday',
      title: 'Prière du vendredi',
      titleAr: 'صلاة الجمعة',
      description: 'Le ghusl du vendredi est sunnah mu\'akkada pour celui qui assiste à la prière du Jumu\'a.',
    },
    {
      id: 's-ghusl-men-eid',
      title: 'Jour de l\'Aïd',
      titleAr: 'يوم العيد',
      description: 'Le ghusl est sunnah avant la prière de l\'Aïd al-Fitr et de l\'Aïd al-Adha.',
    },
    {
      id: 's-ghusl-men-death',
      title: 'Lavage du mort',
      titleAr: 'غسل الميت',
      description: 'Le ghusl est sunnah après avoir lavé un défunt.',
    },
    {
      id: 's-ghusl-men-ihram',
      title: 'Entrée en ihram (Hajj/Umra)',
      titleAr: 'الإحرام',
      description: 'Le ghusl est sunnah mu\'akkada avant d\'entrer en état d\'ihram pour le Hajj ou la Umra.',
    },
  ],
  steps: [
    {
      id: 's-ghusl-men-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le ghusl pour lever l\'impureté majeure (janabah). En Chafiite, la niyyah est FARD — sans elle, le ghusl est invalide. L\'intention doit être présente au moment où l\'eau touche le corps.',
      ruling: 'fard',
    },
    {
      id: 's-ghusl-men-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer. Sunnah en Chafiite.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-men-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains jusqu\'aux poignets trois fois. Sunnah.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 's-ghusl-men-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: 'غسل الفرج',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impureté. Sunnah, mais facilite la purification.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-men-5-wudu',
      order: 5,
      name: 'Faire le wudu complet',
      nameAr: 'الوضوء',
      description: 'Effectuer un wudu complet comme pour la prière. Sunnah en Chafiite (pas fard). Le ghusl seul suffit pour lever les deux impuretés (majeure et mineure). Si on touche ses parties intimes avec l\'intérieur de la main pendant le ghusl après le wudu, il faudra refaire le wudu séparément.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-men-6-mouth',
      order: 6,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Rincer la bouche avec de l\'eau. SUNNAH en Chafiite même dans le ghusl. FARD en Hanafite et Hanbalite dans le ghusl. Sunnah en Chafiite et Malikite. Fortement recommandée.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-men-7-nose',
      order: 7,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: 'الاستنشاق',
      description: 'Aspirer de l\'eau dans les narines et se moucher. SUNNAH en Chafiite même dans le ghusl. FARD en Hanafite et Hanbalite dans le ghusl. Sunnah en Chafiite et Malikite. Fortement recommandée.',
      ruling: 'sunnah',
    },
    {
      id: 's-ghusl-men-8-head',
      order: 8,
      name: 'Verser l\'eau sur la tête et les cheveux',
      nameAr: 'إفاضة الماء على الرأس',
      description: 'Verser de l\'eau abondamment sur la tête trois fois en s\'assurant que l\'eau pénètre JUSQU\'AUX RACINES des cheveux et de la barbe (FARD — fait partie de la couverture de tout le corps). En Chafiite, il n\'est PAS nécessaire de frotter (pas de dalk) — l\'eau qui coule suffit, mais frotter reste recommandé.',
      ruling: 'fard',
      repetitions: 3,
    },
    {
      id: 's-ghusl-men-9-body',
      order: 9,
      name: 'Laver tout le corps',
      nameAr: 'غسل سائر الجسد',
      description: 'Laver le corps entier en commençant par le côté droit (sunnah) puis le côté gauche. S\'assurer que l\'eau atteigne CHAQUE partie du corps sans exception : aisselles, nombril, plis, entre les orteils. En Chafiite, le dalk (frottement) n\'est PAS fard — l\'eau qui couvre le corps suffit. La muwalat (continuité) n\'est PAS fard non plus — on peut s\'interrompre et reprendre.',
      ruling: 'fard',
    },
  ],
};
