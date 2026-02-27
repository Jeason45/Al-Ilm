import type { CommonError } from './types';

export const commonErrors: CommonError[] = [
  {
    id: 'rushing',
    title: 'Précipiter les mouvements',
    titleAr: 'العجلة في الصلاة',
    description: 'Ne pas marquer de pause entre les positions (ruku, sujud, etc.) et enchaîner trop rapidement.',
    correction: 'Chaque position doit être tenue avec sérénité (tuma\'nina). Attendez que chaque membre retrouve sa place avant de passer à la position suivante.',
  },
  {
    id: 'fatiha-omitted',
    title: 'Omettre Al-Fatiha',
    titleAr: 'ترك الفاتحة',
    description: 'Ne pas réciter la sourate Al-Fatiha dans une rak\'a, alors qu\'elle est un pilier de la prière.',
    correction: 'Al-Fatiha est obligatoire dans chaque rak\'a. Le Prophète ﷺ a dit : « Pas de prière pour celui qui ne récite pas l\'Ouverture du Livre. »',
  },
  {
    id: 'wandering-gaze',
    title: 'Regard qui se balade',
    titleAr: 'الالتفات في الصلاة',
    description: 'Tourner la tête ou regarder autour de soi pendant la prière.',
    correction: 'Le regard doit rester fixé sur le lieu de prosternation. Se tourner diminue la récompense et la concentration (khushu\').',
  },
  {
    id: 'back-not-straight-ruku',
    title: 'Dos non droit au ruku',
    titleAr: 'عدم استواء الظهر في الركوع',
    description: 'Ne pas aligner le dos avec la tête lors de l\'inclinaison, le dos est courbé ou la tête trop basse.',
    correction: 'Le dos doit être plat et parallèle au sol, la tête dans l\'alignement du dos, les mains sur les genoux.',
  },
  {
    id: 'forearms-ground-sujud',
    title: 'Avant-bras au sol au sujud',
    titleAr: 'وضع الذراعين على الأرض في السجود',
    description: 'Poser les avant-bras et les coudes au sol pendant la prosternation.',
    correction: 'Seules les paumes touchent le sol. Les bras doivent être écartés du corps, les coudes relevés du sol.',
  },
  {
    id: 'fidgeting',
    title: 'Mouvements inutiles',
    titleAr: 'كثرة الحركة',
    description: 'Toucher son visage, ajuster ses vêtements, jouer avec ses doigts de manière excessive.',
    correction: 'Les mouvements inutiles répétés annulent la prière selon certains savants. Restez immobile et concentré.',
  },
  {
    id: 'late-joining',
    title: 'Mauvaise gestion du rattrapage',
    titleAr: 'خطأ في إدراك الركعة',
    description: 'Considérer qu\'on a attrapé la rak\'a alors qu\'on n\'a pas rejoint l\'imam au ruku.',
    correction: 'La rak\'a n\'est comptée que si vous rejoignez l\'imam avant qu\'il ne se relève du ruku. Sinon, cette rak\'a est à rattraper.',
  },
  {
    id: 'tashahud-finger',
    title: 'Mauvais mouvement du doigt au tashahud',
    titleAr: 'خطأ في تحريك الإصبع',
    description: 'Bouger l\'index de haut en bas de manière continue au lieu de le pointer.',
    correction: 'L\'index droit est pointé en direction de la qibla et légèrement bougé lors de l\'invocation. Il ne doit pas faire de cercles ou bouger de manière excessive.',
  },
  {
    id: 'sujud-sequence',
    title: 'Mauvais ordre de descente au sujud',
    titleAr: 'ترتيب النزول للسجود',
    description: 'Poser les mains avant les genoux en descendant vers la prosternation.',
    correction: 'Selon l\'avis majoritaire, on pose d\'abord les genoux, puis les mains, puis le front et le nez. Certains savants autorisent les deux ordres.',
  },
  {
    id: 'no-sutrah',
    title: 'Prier sans sutrah',
    titleAr: 'ترك السترة',
    description: 'Prier sans obstacle devant soi dans un lieu de passage.',
    correction: 'Il est recommandé (sunnah) de placer un objet (mur, pilier, chaise) devant soi comme sutrah, surtout dans les lieux publics.',
  },
];
