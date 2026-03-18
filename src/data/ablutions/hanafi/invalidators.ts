import type { WuduInvalidator } from '../types';

/**
 * Annulateurs du wudu selon l'école Hanafite — positions propres à l'école hanafite.
 *
 * Différences majeures avec les autres écoles :
 *   - Sang/pus qui coule = annule (spécifique Hanafi)
 *   - Vomissement abondant = annule (Hanafi + Hanbali)
 *   - Rire à voix haute dans la prière = annule le wudu ET la prière (UNIQUE Hanafi)
 *   - Toucher les parties intimes = N'ANNULE PAS (contrairement à Shafi'i/Hanbali)
 *   - Toucher le sexe opposé = N'ANNULE PAS (contrairement à Shafi'i)
 *   - Viande de chameau = N'ANNULE PAS (contrairement à Hanbali)
 *
 * Références : Nur al-Idah, Al-Hidayah, Radd al-Muhtar.
 */
export const hanafiInvalidators: WuduInvalidator[] = [
  {
    id: 'h-inv-exit-passages',
    title: 'Toute sortie des deux voies naturelles',
    titleAr: 'الخارج من السبيلين',
    description: 'Tout ce qui sort des voies naturelles (avant ou arrière) annule le wudu : urine, selles, gaz (vent), madhi (liquide pré-séminal), wadi (liquide post-urine), mani (sperme), sang menstruel, même un ver ou une pierre. Le madhi (liquide pré-séminal) annule uniquement le wudu. Le mani (sperme) nécessite le ghusl (ablution majeure), pas seulement le wudu.',
    consensus: 'unanime',
  },
  {
    id: 'h-inv-blood-flow',
    title: 'Écoulement de sang, pus ou sérosité',
    titleAr: 'سيلان الدم أو القيح',
    description: 'Le sang, le pus ou la sérosité (liquide clair d\'une plaie) qui COULE au-delà de son point de sortie annule le wudu. Un simple point de sang qui ne coule pas n\'annule pas. Le critère est : si la substance avait eu assez de force pour couler, même si elle a été essuyée avant de couler, le wudu est annulé.',
    consensus: 'majoritaire',
    madhabNote: 'ANNULE si abondant (kathir — qui coule au-delà du point de sortie) en Hanafite et Hanbalite. N\'annule PAS en Chafiite ni Malikite quelle que soit la quantité.',
  },
  {
    id: 'h-inv-vomiting',
    title: 'Vomissement abondant (bouche pleine)',
    titleAr: 'القيء ملء الفم',
    description: 'Vomir en quantité suffisante pour remplir la bouche (qu\'on ne pourrait retenir qu\'avec difficulté) annule le wudu, que le vomi soit de la nourriture, de la bile ou du sang. Un vomissement moindre n\'annule pas. Exception : le flegme (mucus) n\'annule pas le wudu quelle que soit la quantité.',
    consensus: 'dispute',
    madhabNote: 'L\'école hanafite et hanbalite l\'annulent. Les écoles malikite et chafiite ne l\'annulent pas.',
  },
  {
    id: 'h-inv-mouth-blood',
    title: 'Sang de la bouche égal ou supérieur à la salive',
    titleAr: 'الدم من الفم',
    description: 'Si du sang sort dans la bouche (gencives, dent arrachée) et qu\'il est en quantité égale ou supérieure à la salive, le wudu est annulé. On le reconnaît à la couleur du crachat : si le crachat est rouge ou rouge foncé, le sang prédomine et le wudu est annulé. Si le crachat est jaunâtre, la salive prédomine et le wudu reste valide.',
    consensus: 'dispute',
    madhabNote: 'Spécifique à l\'école hanafite.',
  },
  {
    id: 'h-inv-sleep',
    title: 'Sommeil en position non assise fermement',
    titleAr: 'النوم في غير حالة الاستقرار',
    description: 'Le sommeil annule le wudu SAUF si la personne est assise fermement (fesses bien posées au sol). En Hanafite : dormir assis fermement (même en s\'appuyant, tant que les fesses ne quittent pas le sol) n\'annule PAS le wudu. Dormir allongé, debout, en position de ruku\' ou de sujud, ou assis mais en s\'appuyant de telle sorte qu\'on tomberait si le support était retiré = annule le wudu.',
    consensus: 'majoritaire',
    madhabNote: 'Le critère hanafite : les fesses fermement posées au sol agissent comme un "sceau". Dans cette position, tout passage de vent serait ressenti, donc la présomption de pureté est maintenue.',
  },
  {
    id: 'h-inv-unconsciousness',
    title: 'Perte de conscience',
    titleAr: 'فقدان الوعي',
    description: 'Évanouissement, anesthésie générale, ivresse ou folie annulent le wudu dans tous les cas, quelle que soit la position du corps.',
    consensus: 'unanime',
  },
  {
    id: 'h-inv-laughing',
    title: 'Rire à voix haute dans la prière (Qahqaha)',
    titleAr: 'القهقهة في الصلاة',
    description: 'Rire à voix haute (qahqaha = rire que les autres pourraient entendre) dans une prière contenant ruku\' et sujud annule à la fois LA PRIÈRE et LE WUDU. Trois niveaux : (1) Tabassum (sourire) = n\'annule rien. (2) Dahik (rire pour soi, seul vous l\'entendez) = annule la prière seulement, pas le wudu. (3) Qahqaha (rire à voix haute) = annule la prière ET le wudu. Ne s\'applique pas dans la prière funéraire (janaza) ni la prosternation de récitation (sajda tilawa) car elles ne comportent pas à la fois ruku\' et sujud.',
    consensus: 'dispute',
    madhabNote: 'UNIQUE à l\'école hanafite. Aucune autre école ne considère que le rire annule le wudu. Basé sur le hadith de l\'aveugle qui est tombé dans un puits pendant la prière en groupe, provoquant des rires.',
  },
  {
    id: 'h-inv-apostasy',
    title: 'Apostasie (sortie de l\'Islam)',
    titleAr: 'الردة',
    description: 'L\'apostasie annule le wudu et toutes les adorations. Le retour à l\'Islam nécessite un renouvellement du wudu. L\'apostasie invalide toutes les adorations de manière générale. Elle n\'est pas traditionnellement listée parmi les nawaqid al-wudu dans les manuels hanafites classiques (Nur al-Idah, al-Hidayah), mais elle est mentionnée ici à titre informatif.',
    consensus: 'unanime',
  },
];

/**
 * Ce qui N'ANNULE PAS le wudu en Hanafite (contrairement à d'autres écoles).
 * Affiché séparément pour clarifier les confusions fréquentes.
 */
export const hanafiNonInvalidators: WuduInvalidator[] = [
  {
    id: 'h-non-inv-touching-private',
    title: 'Toucher ses parties intimes',
    titleAr: 'مس الفرج',
    description: 'Toucher ses parties intimes directement (sans barrière) avec la main N\'ANNULE PAS le wudu en Hanafite. Les hanafites interprètent les hadiths sur ce sujet comme une recommandation (istihbab) de refaire le wudu, pas une obligation.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Hanafite. Annule selon les écoles malikite (avec désir), chafiite et hanbalite.',
  },
  {
    id: 'h-non-inv-touching-woman',
    title: 'Contact peau à peau avec le sexe opposé',
    titleAr: 'لمس المرأة',
    description: 'Toucher une personne du sexe opposé (non-mahram) directement, peau contre peau, N\'ANNULE PAS le wudu en Hanafite. Les hanafites interprètent « lamastum » dans le Coran (4:43) comme le rapport sexuel, pas le simple toucher.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Hanafite. Annule selon l\'école chafiite (tout contact). Annule selon malikite et hanbalite (si avec désir).',
  },
  {
    id: 'h-non-inv-camel-meat',
    title: 'Manger de la viande de chameau',
    titleAr: 'أكل لحم الإبل',
    description: 'Manger de la viande de chameau N\'ANNULE PAS le wudu en Hanafite. Les hanafites considèrent que le hadith de Jabir ibn Samura est soit abrogé, soit une recommandation (istihbab), pas une obligation.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Hanafite, malikite ni chafiite. Seule l\'école hanbalite considère que cela annule obligatoirement le wudu.',
  },
];
