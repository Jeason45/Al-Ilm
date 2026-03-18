import type { CommonError } from '../types';

/**
 * Erreurs courantes du wudu selon l'école Chafiite — positions propres à l'école chafiite.
 * Références : Al-Umm, Al-Majmu' (Nawawi), Minhaj at-Talibin, Tuhfat al-Muhtaj.
 */
export const shafiiErrors: CommonError[] = [
  {
    id: 's-abl-err-no-tartib',
    title: 'Ne pas respecter l\'ordre (Tartib)',
    titleAr: 'ترك الترتيب',
    description: 'Laver les membres dans le désordre (ex : bras avant le visage, pieds avant la tête).',
    correction: 'Le TARTIB (ordre) est FARD en Chafiite — c\'est la particularité majeure de cette école pour le wudu. L\'ordre obligatoire est : visage → bras → tête → pieds. Si un membre est lavé avant celui qui le précède dans l\'ordre, le lavage du membre avancé n\'est PAS compté et doit être refait après avoir lavé les membres précédents.',
  },
  {
    id: 's-abl-err-partial-head-thinking-invalid',
    title: 'Croire qu\'il faut essuyer toute la tête',
    titleAr: 'ظن وجوب مسح كل الرأس',
    description: 'Penser que le wudu est invalide si on n\'a pas essuyé la totalité de la tête.',
    correction: 'En Chafiite, essuyer une PARTIE de la tête suffit pour le fard (même quelques cheveux — Al-Majmu\' de Nawawi). Cependant, essuyer la totalité reste sunnah mu\'akkada et est fortement recommandé. Ne pas confondre avec l\'école malikite où la totalité est fard.',
  },
  {
    id: 's-abl-err-touch-spouse',
    title: 'Toucher son conjoint et ne pas refaire le wudu',
    titleAr: 'لمس الزوج أو الزوجة بدون إعادة الوضوء',
    description: 'Toucher la peau de son conjoint (ou tout non-mahram) sans refaire le wudu.',
    correction: 'En Chafiite, TOUT contact peau-à-peau entre homme et femme non-mahram annule le wudu des DEUX, même sans désir ni plaisir. Si vous touchez la main de votre conjoint(e) directement, le wudu est annulé. Solution : toucher à travers un tissu (gant, manche) ne casse PAS le wudu. Toucher une personne mahram (mère, soeur, fille) N\'annule PAS le wudu même peau-à-peau. Seul le contact avec une personne non-mahram du sexe opposé annule.',
  },
  {
    id: 's-abl-err-touch-private',
    title: 'Toucher ses parties intimes sans refaire le wudu',
    titleAr: 'مس الفرج بدون إعادة الوضوء',
    description: 'Toucher ses propres parties intimes (avant ou arrière) avec l\'intérieur de la main et continuer à prier.',
    correction: 'En Chafiite, toucher ses parties intimes avec l\'intérieur de la paume ou des doigts annule le wudu, que l\'on soit HOMME OU FEMME (contrairement au Malikite qui ne concerne que l\'homme). Il faut refaire le wudu. Le toucher avec le dos de la main n\'annule pas.',
  },
  {
    id: 's-abl-err-tayammum-multiple',
    title: 'Faire un seul tayammum pour plusieurs prières fard',
    titleAr: 'التيمم مرة واحدة لعدة فروض',
    description: 'Faire un seul tayammum et prier plusieurs prières obligatoires avec.',
    correction: 'En Chafiite, UN tayammum ne vaut que pour UNE SEULE prière fard ! Il faut refaire le tayammum pour chaque nouvelle prière obligatoire. Avec un seul tayammum, on peut cependant prier une fard + autant de nafl qu\'on veut. C\'est une particularité de l\'école chafiite (les autres écoles permettent plusieurs fard avec un seul tayammum).',
  },
  {
    id: 's-abl-err-elbows',
    title: 'Ne pas inclure les coudes',
    titleAr: 'عدم غسل المرفقين',
    description: 'S\'arrêter avant les coudes lors du lavage des bras.',
    correction: 'Les coudes sont INCLUS dans la zone fard. La règle « jusqu\'aux coudes » (ila al-marafiq) inclut les coudes eux-mêmes. Il est recommandé de laver un peu au-delà pour être certain.',
  },
  {
    id: 's-abl-err-ankles',
    title: 'Oublier les chevilles',
    titleAr: 'ترك الكعبين',
    description: 'Ne pas laver correctement les chevilles ou s\'arrêter juste avant.',
    correction: 'Les chevilles (les deux os saillants) sont INCLUSES dans la zone fard. Le Prophète ﷺ a dit : « Malheur aux talons du feu. » S\'assurer que l\'eau couvre bien les deux os saillants de chaque cheville.',
  },
  {
    id: 's-abl-err-muwalat-worry',
    title: 'Croire que l\'interruption du wudu l\'invalide',
    titleAr: 'ظن بطلان الوضوء بالانقطاع',
    description: 'Penser que s\'arrêter longtemps en plein wudu invalide la purification.',
    correction: 'En Chafiite, la muwalat (continuité) est SUNNAH, pas fard. On peut s\'interrompre et reprendre son wudu même après un long moment, sans le recommencer. C\'est une différence majeure avec l\'école malikite où la muwalat est fard (si un membre sèche avant le suivant, le wudu est invalide).',
  },
];
