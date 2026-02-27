import type { CommonError } from './types';

export const ablutionErrors: CommonError[] = [
  {
    id: 'abl-err-rushing',
    title: 'Précipiter le wudu',
    titleAr: 'العجلة في الوضوء',
    description: 'Faire le wudu trop rapidement sans s\'assurer que l\'eau atteint chaque partie correctement.',
    correction: 'Prendre le temps de bien couvrir chaque zone. Le Prophète ﷺ a dit : « Malheur aux talons du feu » en voyant des gens qui ne lavaient pas correctement leurs pieds.',
  },
  {
    id: 'abl-err-between-fingers',
    title: 'Oublier entre les doigts et orteils',
    titleAr: 'ترك ما بين الأصابع',
    description: 'Ne pas faire passer l\'eau entre les doigts des mains et entre les orteils des pieds.',
    correction: 'Entrelacer les doigts des mains et utiliser le petit doigt pour passer entre les orteils, comme le recommande la sunnah.',
  },
  {
    id: 'abl-err-water-waste',
    title: 'Gaspiller l\'eau',
    titleAr: 'الإسراف في الماء',
    description: 'Utiliser beaucoup plus d\'eau que nécessaire pendant le wudu.',
    correction: 'Le Prophète ﷺ faisait le wudu avec environ un mudd (environ 0.688 litre) d\'eau. L\'Islam interdit le gaspillage même au bord d\'une rivière.',
  },
  {
    id: 'abl-err-order',
    title: 'Ne pas respecter l\'ordre',
    titleAr: 'عدم الترتيب',
    description: 'Laver les membres dans un ordre différent de celui prescrit (par exemple, laver les pieds avant le visage).',
    correction: 'L\'ordre (tartib) est obligatoire selon la majorité des savants. Suivre la séquence : visage, bras, tête, pieds.',
  },
  {
    id: 'abl-err-continuity',
    title: 'Interrompre le wudu longtemps',
    titleAr: 'عدم الموالاة',
    description: 'Faire de longues pauses entre les étapes du wudu, au point que le membre précédent sèche avant de laver le suivant.',
    correction: 'Les étapes du wudu doivent être enchaînées sans interruption excessive (muwalat). Si un membre sèche avant le suivant, il faut recommencer selon l\'école malikite.',
  },
  {
    id: 'abl-err-elbows',
    title: 'Ne pas inclure les coudes',
    titleAr: 'عدم غسل المرفقين',
    description: 'S\'arrêter avant les coudes lors du lavage des bras.',
    correction: 'Les coudes doivent être inclus dans le lavage (ils font partie de la zone obligatoire). Laver un peu au-delà pour être sûr.',
  },
  {
    id: 'abl-err-head-wipe',
    title: 'Essuyer partiellement la tête',
    titleAr: 'عدم استيعاب الرأس بالمسح',
    description: 'N\'essuyer qu\'une petite partie de la tête ou seulement le devant.',
    correction: 'Selon la majorité des savants, il faut essuyer toute la tête de l\'avant vers l\'arrière puis de l\'arrière vers l\'avant en un seul mouvement.',
  },
  {
    id: 'abl-err-ankles',
    title: 'Oublier les chevilles',
    titleAr: 'ترك الكعبين',
    description: 'Ne pas laver correctement les chevilles et les zones autour lors du lavage des pieds.',
    correction: 'Les chevilles font partie de la zone obligatoire. S\'assurer que l\'eau coule sur et autour des chevilles complètement.',
  },
];
