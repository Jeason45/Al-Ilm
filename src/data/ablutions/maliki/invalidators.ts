import type { WuduInvalidator } from '../types';

/**
 * Annulateurs du wudu selon l'école Malikite — positions propres à l'école malikite.
 *
 * Différences majeures vs Hanafi :
 *   - Toucher son pénis directement = ANNULE (Hanafi: non)
 *   - Toucher sexe opposé avec désir/plaisir = ANNULE (Hanafi: non)
 *   - Sang/pus qui coule = N'ANNULE PAS (Hanafi: oui !)
 *   - Vomissement = N'ANNULE PAS (Hanafi: oui !)
 *   - Rire dans la prière = N'ANNULE PAS le wudu (Hanafi: oui !)
 *   - Sommeil : basé sur la PROFONDEUR, pas la position (Hanafi: position)
 *
 * Références : Al-Risala, Mukhtasar Khalil, Al-Mudawwana.
 */
export const malikiInvalidators: WuduInvalidator[] = [
  {
    id: 'm-inv-exit-passages',
    title: 'Toute sortie des deux voies naturelles',
    titleAr: 'الخارج من السبيلين',
    description: 'Tout ce qui sort des voies naturelles (avant ou arrière) annule le wudu : urine, selles, gaz, madhi, wadi. L\'émission de mani (sperme) nécessite le ghusl, pas seulement le wudu.',
    consensus: 'unanime',
  },
  {
    id: 'm-inv-touching-penis',
    title: 'Toucher son pénis directement',
    titleAr: 'مس الذكر',
    description: 'Un homme qui touche son propre pénis avec l\'intérieur de la main (paume, intérieur des doigts) directement (sans barrière) annule son wudu. Pour la femme touchant sa propre vulve, la position de la Mudawwana est que cela n\'annule PAS le wudu. Selon la position d\'Ibn al-Qasim, toucher son propre anus (dubur) avec l\'intérieur de la main annule également le wudu. Cette position est retenue par certains savants malikites.',
    consensus: 'majoritaire',
    madhabNote: 'ANNULE en Malikite (homme uniquement). N\'annule PAS en Hanafite. Position basée sur le hadith de Busra bint Safwan.',
  },
  {
    id: 'm-inv-touching-opposite',
    title: 'Contact avec le sexe opposé avec désir ou plaisir',
    titleAr: 'لمس المرأة بشهوة',
    description: 'Toucher une personne du sexe opposé (non-mahram) annule le wudu SI : (1) il y a intention de plaisir, OU (2) du plaisir est ressenti, même sans intention. Un toucher sans intention NI plaisir n\'annule PAS. Le baiser sur la bouche annule dans tous les cas. S\'applique généralement même à travers un tissu fin si du plaisir est ressenti.',
    consensus: 'dispute',
    madhabNote: 'Position nuancée en Malikite (dépend du désir/plaisir). N\'annule JAMAIS en Hanafite.',
  },
  {
    id: 'm-inv-deep-sleep',
    title: 'Sommeil profond',
    titleAr: 'النوم الثقيل',
    description: 'Le sommeil PROFOND annule le wudu QUELLE QUE SOIT LA POSITION (même assis). Le sommeil léger/somnolence N\'annule PAS, même allongé. En Malikite, le critère est la PROFONDEUR du sommeil, pas la position du corps. Sommeil profond = ne pas remarquer les sons, ne pas sentir un objet qui tombe de la main, ou ne pas remarquer la salive qui coule.',
    consensus: 'majoritaire',
    madhabNote: 'Le critère malikite est la profondeur, pas la position. En Hanafite, c\'est la position qui compte (assis fermement = ne casse pas, même en dormant profondément).',
  },
  {
    id: 'm-inv-unconsciousness',
    title: 'Perte de conscience',
    titleAr: 'فقدان الوعي',
    description: 'Évanouissement, anesthésie générale, ivresse ou folie annulent le wudu dans tous les cas.',
    consensus: 'unanime',
  },
  // NOTE : Le zhann (doute proche de la certitude) a été déplacé dans les non-annulateurs.
  // La position mu'tamad (retenue) en Malikite est que le doute n'annule PAS le wudu
  // (al-yaqin la yazulu bi-sh-shakk). Voir malikiNonInvalidators ci-dessous.
  {
    id: 'm-inv-apostasy',
    title: 'Apostasie (sortie de l\'Islam)',
    titleAr: 'الردة',
    description: 'L\'apostasie annule le wudu et toutes les adorations.',
    consensus: 'unanime',
  },
];

/**
 * Ce qui N'ANNULE PAS le wudu en Malikite (mais annule dans d'autres écoles).
 */
export const malikiNonInvalidators: WuduInvalidator[] = [
  {
    id: 'm-non-inv-blood',
    title: 'Écoulement de sang, pus ou sérosité',
    titleAr: 'خروج الدم أو القيح',
    description: 'Le sang, le pus, les saignements de nez, la pose de ventouses — rien de cela N\'annule le wudu en Malikite, quelle que soit la quantité. L\'impureté doit être lavée du corps/vêtements avant la prière, mais le wudu reste valide.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Malikite ni Chafiite. ANNULE en Hanafite (si coule au-delà du point de sortie).',
  },
  {
    id: 'm-non-inv-vomiting',
    title: 'Vomissement',
    titleAr: 'القيء',
    description: 'Le vomissement N\'annule PAS le wudu en Malikite, quelle que soit la quantité. Si le vomi a changé d\'aspect (couleur, goût, odeur différents de la nourriture originale), il est considéré comme najis et doit être lavé du corps/vêtements.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Malikite ni Chafiite. ANNULE en Hanafite (bouche pleine).',
  },
  {
    id: 'm-non-inv-laughing',
    title: 'Rire dans la prière',
    titleAr: 'الضحك في الصلاة',
    description: 'Rire à voix haute dans la prière N\'annule PAS le wudu en Malikite. Cela annule la prière elle-même, mais pas le wudu. Le rire qui annule le wudu est une position UNIQUE à l\'école hanafite.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS le wudu en Malikite. ANNULE le wudu uniquement en Hanafite (qahqaha dans une prière avec ruku\'/sujud).',
  },
  {
    id: 'm-non-inv-doubt',
    title: 'Doute sur la perte du wudu (y compris zhann)',
    titleAr: 'الشك في الحدث',
    description: 'La position mu\'tamad (retenue) en Malikite est que le DOUTE n\'annule PAS le wudu (al-yaqin la yazulu bi-sh-shakk — la certitude n\'est pas levée par le doute). La position attribuée à Ibn Habib (minoritaire) est que si le doute atteint un niveau proche de la certitude (zhann), le wudu est annulé. La position retenue est la première. Le simple waswas (chuchotement obsessionnel) n\'annule évidemment PAS.',
    consensus: 'dispute',
    madhabNote: 'Position mu\'tamad Malikite (Khalil, ad-Dardir) : le doute n\'annule PAS. Position minoritaire (Ibn Habib) : le zhann (quasi-certitude) annule. La position retenue et enseignée est celle de Khalil et ad-Dardir.',
  },
  {
    id: 'm-non-inv-camel-meat',
    title: 'Manger de la viande de chameau',
    titleAr: 'أكل لحم الإبل',
    description: 'Manger de la viande de chameau N\'annule PAS le wudu en Malikite.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Malikite, Hanafite ni Chafiite. Seule l\'école hanbalite l\'annule.',
  },
];
