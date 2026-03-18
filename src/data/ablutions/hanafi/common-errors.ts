import type { CommonError } from '../types';

/**
 * Erreurs courantes du wudu selon l'école Hanafite — positions propres à l'école hanafite.
 *
 * Certaines erreurs ont une perspective spécifiquement hanafite
 * (ex: l'essuyage partiel de la tête est VALIDE en Hanafite si ≥ 1/4).
 *
 * Références : Nur al-Idah, Al-Hidayah.
 */
export const hanafiErrors: CommonError[] = [
  {
    id: 'h-abl-err-rushing',
    title: 'Précipiter le wudu',
    titleAr: 'العجلة في الوضوء',
    description: 'Faire le wudu trop rapidement sans s\'assurer que l\'eau atteint chaque partie correctement.',
    correction: 'Prendre le temps de bien couvrir chaque zone. Le Prophète ﷺ a dit : « Malheur aux talons du feu » en voyant des gens qui ne lavaient pas correctement leurs pieds. Même si le wudu minimum (1 lavage) est valide en Hanafite, il faut que l\'eau couvre entièrement chaque membre fard.',
  },
  {
    id: 'h-abl-err-between-fingers',
    title: 'Oublier entre les doigts et orteils (Khilal)',
    titleAr: 'ترك ما بين الأصابع',
    description: 'Ne pas faire passer l\'eau entre les doigts des mains et entre les orteils des pieds.',
    correction: 'Entrelacer les doigts des mains et utiliser le petit doigt de la main gauche pour passer entre les orteils. Le khilal est sunnah en Hanafite mais très recommandé pour s\'assurer que l\'eau atteint partout.',
  },
  {
    id: 'h-abl-err-water-waste',
    title: 'Gaspiller l\'eau',
    titleAr: 'الإسراف في الماء',
    description: 'Utiliser beaucoup plus d\'eau que nécessaire pendant le wudu.',
    correction: 'Le Prophète ﷺ faisait le wudu avec environ un mudd (≈ 0,688 litre) d\'eau. Le gaspillage est interdit même au bord d\'une rivière. Le troisième lavage est le maximum — dépasser 3 lavages est makruh (blâmable).',
  },
  {
    id: 'h-abl-err-head-wipe',
    title: 'Essuyer la tête insuffisamment',
    titleAr: 'عدم استيعاب ربع الرأس بالمسح',
    description: 'N\'essuyer qu\'un tout petit bout de la tête, moins d\'un quart.',
    correction: 'En Hanafite, le minimum fard est d\'essuyer UN QUART de la tête (la surface de 3 doigts joints environ). Essuyer moins que cela invalide le wudu. Essuyer la tête entière (aller-retour) est sunnah mu\'akkada.',
  },
  {
    id: 'h-abl-err-elbows',
    title: 'Ne pas inclure les coudes',
    titleAr: 'عدم غسل المرفقين',
    description: 'S\'arrêter avant les coudes lors du lavage des bras.',
    correction: 'Les coudes sont INCLUS dans la zone fard. Il est sunnah d\'aller légèrement au-delà (tahajjul) pour être certain de couvrir la zone obligatoire.',
  },
  {
    id: 'h-abl-err-ankles',
    title: 'Oublier les chevilles',
    titleAr: 'ترك الكعبين',
    description: 'Ne pas laver correctement les chevilles et les zones autour lors du lavage des pieds.',
    correction: 'Les chevilles sont INCLUSES dans la zone fard. S\'assurer que l\'eau coule sur et autour des deux os saillants de la cheville. Le hadith « Malheur aux talons du feu » concerne spécifiquement cette zone.',
  },
  {
    id: 'h-abl-err-wiping-neck',
    title: 'Essuyer la gorge',
    titleAr: 'مسح الحلق',
    description: 'Essuyer la gorge (devant du cou) en pensant que c\'est une sunnah du wudu.',
    correction: 'Essuyer la NUQUE (arrière du cou) est sunnah en Hanafite. Mais essuyer la GORGE (devant du cou) est considéré comme bid\'a (innovation). Ne pas confondre les deux.',
  },
  {
    id: 'h-abl-err-continuity',
    title: 'Interrompre le wudu longtemps',
    titleAr: 'عدم الموالاة',
    description: 'Faire de longues pauses entre les étapes du wudu, au point que le membre précédent sèche avant de laver le suivant.',
    correction: 'En Hanafite, la muwalat (continuité) est sunnah, pas fard — donc le wudu reste valide même avec une longue pause. Mais c\'est contraire à la sunnah du Prophète ﷺ et il est fortement recommandé d\'enchaîner sans interruption.',
  },
];
