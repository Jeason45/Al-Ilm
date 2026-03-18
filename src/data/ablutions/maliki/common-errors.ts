import type { CommonError } from '../types';

/**
 * Erreurs courantes du wudu selon l'école Malikite — positions propres à l'école malikite.
 * Références : Al-Risala, Mukhtasar Khalil.
 */
export const malikiErrors: CommonError[] = [
  {
    id: 'm-abl-err-no-dalk',
    title: 'Oublier le dalk (frottement)',
    titleAr: 'ترك الدلك',
    description: 'Ne pas frotter les membres avec la main pendant le lavage.',
    correction: 'Le dalk (frotter chaque membre avec la main pendant que l\'eau y coule) est FARD en Malikite. Il ne suffit pas de verser l\'eau — il faut passer la main sur chaque partie. Frotter un pied contre l\'autre seul ne suffit pas, il faut utiliser la main.',
  },
  {
    id: 'm-abl-err-partial-head',
    title: 'Essuyer partiellement la tête',
    titleAr: 'عدم استيعاب الرأس بالمسح',
    description: 'N\'essuyer qu\'une partie de la tête au lieu de la totalité.',
    correction: 'En Malikite, la TOTALITÉ de la tête doit être essuyée (contrairement à l\'école hanafite qui accepte 1/4). Méthode : doigts joints aux tempes, aller de la ligne des cheveux vers la nuque, puis revenir.',
  },
  {
    id: 'm-abl-err-muwalat',
    title: 'Interrompre le wudu longtemps',
    titleAr: 'عدم الموالاة',
    description: 'Faire de longues pauses entre les étapes du wudu.',
    correction: 'La muwalat (continuité) est FARD en Malikite. Si un membre sèche avant que le suivant ne soit lavé (dans des conditions normales), le wudu est INVALIDE et doit être recommencé entièrement. Ne pas confondre avec l\'école hanafite où la muwalat est seulement sunnah.',
  },
  {
    id: 'm-abl-err-niyyah-late',
    title: 'Oublier la niyyah ou la formuler trop tôt',
    titleAr: 'عدم النية أو تقديمها',
    description: 'Ne pas formuler l\'intention au bon moment.',
    correction: 'La niyyah est FARD en Malikite et doit être formulée au moment de commencer le lavage du visage (premier fard). Elle doit accompagner (muqarana) le début de cet acte. Une très légère anticipation (taqaddum yasir — quelques secondes) est tolérée, mais pas un écart prolongé.',
  },
  {
    id: 'm-abl-err-rushing',
    title: 'Précipiter le wudu',
    titleAr: 'العجلة في الوضوء',
    description: 'Faire le wudu trop rapidement sans s\'assurer que l\'eau atteint chaque partie.',
    correction: 'Le Prophète ﷺ a dit : « Malheur aux talons du feu. » Le dalk obligatoire en Malikite oblige naturellement à ralentir — il faut frotter chaque partie pendant le lavage.',
  },
  {
    id: 'm-abl-err-elbows',
    title: 'Ne pas inclure les coudes',
    titleAr: 'عدم غسل المرفقين',
    description: 'S\'arrêter avant les coudes lors du lavage des bras.',
    correction: 'Les coudes sont INCLUS dans la zone fard. Laver un peu au-delà pour être sûr.',
  },
  {
    id: 'm-abl-err-ankles',
    title: 'Oublier les chevilles',
    titleAr: 'ترك الكعبين',
    description: 'Ne pas laver correctement les chevilles.',
    correction: 'Les chevilles sont INCLUSES dans la zone fard. S\'assurer que l\'eau et le dalk (frottement) couvrent bien les deux os saillants.',
  },
  {
    id: 'm-abl-err-head-repeat',
    title: 'Essuyer la tête plusieurs fois',
    titleAr: 'تكرار مسح الرأس',
    description: 'Répéter l\'essuyage de la tête trois fois par analogie avec le lavage des autres membres.',
    correction: 'En Malikite, l\'essuyage de la tête se fait UNE SEULE FOIS (pas trois). La tête est essuyée, pas lavée — la répétition n\'est pas prescrite.',
  },
  {
    id: 'm-abl-err-water-waste',
    title: 'Gaspiller l\'eau pendant le wudu',
    titleAr: 'الإسراف في الماء',
    description: 'Utiliser des quantités excessives d\'eau lors du wudu.',
    correction: 'Le gaspillage d\'eau (israf) est makrouh en Malikite. Le Prophète \uFDFA faisait le wudu avec un mudd (environ 0,7 litre) et le ghusl avec un sa\' (environ 2,7 litres).',
  },
];
