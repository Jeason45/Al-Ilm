import type { AblutionDefinition } from '../types';

/**
 * Wudu selon l'école Chafiite — positions propres à l'école chafiite.
 *
 * Fard du wudu Chafiite (6) :
 *   1. Niyyah (FARD — comme Malikite, contrairement à Hanafi où c'est sunnah)
 *   2. Laver le visage (la madmada et l'istinshaq sont sunnah — l'intérieur de la bouche et du nez NE fait PAS partie du visage à laver obligatoirement)
 *   3. Laver les bras jusqu'aux coudes (inclus)
 *   4. Essuyer UNE PARTIE de la tête (même quelques cheveux suffisent — contrairement à Malikite qui exige la totalité)
 *   5. Laver les pieds jusqu'aux chevilles (incluses)
 *   6. Tartib (ORDRE — FARD, partagé avec le Hanbalite ! En Malikite et Hanafite c'est sunnah dans le wudu)
 *
 * Ce qui N'EST PAS fard en Chafiite (contrairement à Malikite) :
 *   - PAS de dalk requis (Malikite : fard)
 *   - PAS de muwalat requise (Malikite : fard). On peut s'interrompre et reprendre.
 *   - Madmada/Istinshaq = sunnah (pas fard, même si elles sont fortement recommandées)
 *
 * Particularités Chafiites :
 *   - Le TARTIB (ordre) est FARD — si on lave les bras avant le visage, c'est invalide
 *   - L'essuyage PARTIEL de la tête suffit (même un seul cheveu selon certains, mais la position retenue est au moins quelques cheveux)
 *   - La muwalat est sunnah — on peut interrompre le wudu et reprendre même longtemps après
 *   - Le dalk n'est pas requis — verser l'eau suffit si elle couvre le membre
 *
 * Références : Al-Umm (Imam al-Shafi'i), Al-Majmu' (Nawawi), Minhaj at-Talibin, Tuhfat al-Muhtaj.
 */
export const wudu: AblutionDefinition = {
  id: 'wudu',
  name: 'Wudu (Ablutions mineures)',
  nameAr: 'الوضوء',
  description: 'Purification rituelle obligatoire avant la prière. Selon l\'école chafiite, le wudu comporte 6 fard : niyyah, lavage du visage, des bras, essuyage d\'une PARTIE de la tête (même minime), lavage des pieds, et tartib (ORDRE obligatoire — partagé avec le Hanbalite). Ni le dalk ni la muwalat ne sont fard.',
  steps: [
    {
      id: 's-wudu-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le wudu au moment de laver le premier membre fard (le visage). En Chafiite, la niyyah est FARD — elle doit coïncider avec le lavage du visage. Si l\'intention est formulée avant (par exemple pendant le lavage des mains), elle reste valide à condition qu\'il n\'y ait pas eu une longue interruption.',
      ruling: 'fard',
    },
    {
      id: 's-wudu-2-hands',
      order: 3,
      name: 'Laver les mains jusqu\'aux poignets',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains jusqu\'aux poignets en passant l\'eau entre les doigts. Sunnah en Chafiite (pas fard). Il est sunnah de le faire trois fois.',
      ruling: 'sunnah',
      position: 'wudu-hands',
      repetitions: 3,
    },
    {
      id: 's-wudu-2b-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer le lavage. Sunnah en Chafiite. Certains savants chafiites la considèrent sunnah mu\'akkada.',
      ruling: 'sunnah',
    },
    {
      id: 's-wudu-3-mouth',
      order: 4,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Prendre de l\'eau dans la bouche, la faire circuler et la recracher. Sunnah en Chafiite mais FORTEMENT recommandée. L\'intérieur de la bouche ne fait PAS partie du visage à laver obligatoirement (zahir al-wajh), donc la madmada est sunnah, pas fard.',
      ruling: 'sunnah',
      position: 'wudu-mouth',
      repetitions: 3,
    },
    {
      id: 's-wudu-4-nose',
      order: 5,
      name: 'Rincer le nez (Istinshaq + Istinthar)',
      nameAr: 'الاستنشاق والاستنثار',
      description: 'Aspirer de l\'eau dans les narines (istinshaq) puis se moucher avec la main gauche (istinthar). Sunnah en Chafiite mais FORTEMENT recommandée. Comme la madmada, l\'intérieur du nez ne fait PAS partie du visage à laver obligatoirement.',
      ruling: 'sunnah',
      position: 'wudu-nose',
      repetitions: 3,
    },
    {
      id: 's-wudu-5-face',
      order: 6,
      name: 'Laver le visage',
      nameAr: 'غسل الوجه',
      description: 'Laver le visage en entier : de la ligne des cheveux au bas du menton, d\'une oreille à l\'autre. Le premier lavage est fard, les deuxième et troisième sont sunnah. En Chafiite, il n\'est PAS requis de frotter (pas de dalk) — faire couler l\'eau sur le visage suffit. Pour l\'homme à barbe épaisse, passer les doigts mouillés dans la barbe (takhlil) est sunnah mu\'akkada.',
      ruling: 'fard',
      position: 'wudu-face',
      repetitions: 3,
    },
    {
      id: 's-wudu-6-arms',
      order: 7,
      name: 'Laver les bras jusqu\'aux coudes',
      nameAr: 'غسل اليدين إلى المرفقين',
      description: 'Laver chaque bras du bout des doigts jusqu\'au coude INCLUS, en commençant par le bras droit (sunnah). Le premier lavage est fard, les deuxième et troisième sont sunnah. Pas de dalk requis — l\'eau qui couvre le membre suffit. Le TARTIB est FARD en Chafiite : ce lavage DOIT être fait après le visage.',
      ruling: 'fard',
      position: 'wudu-arms',
      repetitions: 3,
    },
    {
      id: 's-wudu-7-head',
      order: 8,
      name: 'Essuyer une PARTIE de la tête (Mash)',
      nameAr: 'مسح الرأس',
      description: 'Essuyer la tête avec les mains mouillées. En Chafiite, essuyer une PARTIE de la tête suffit pour le fard — même une petite zone suffit (Al-Majmu\' de Nawawi précise qu\'il suffit que l\'eau touche une partie, même minime). Cependant, essuyer la TOTALITÉ de la tête d\'avant en arrière puis revenir est sunnah mu\'akkada. Le TARTIB est FARD : l\'essuyage de la tête DOIT être fait après le lavage des bras.',
      ruling: 'fard',
      position: 'wudu-head',
      repetitions: 1,
    },
    {
      id: 's-wudu-8-ears',
      order: 9,
      name: 'Essuyer les oreilles',
      nameAr: 'مسح الأذنين',
      description: 'Essuyer l\'intérieur des oreilles avec les index et l\'extérieur avec les pouces. Sunnah en Chafiite. Les oreilles ne font PAS partie du fard de l\'essuyage de la tête. Il est sunnah de prendre de l\'eau nouvelle (distincte de celle utilisée pour la tête) pour les oreilles.',
      ruling: 'sunnah',
      position: 'wudu-ears',
      repetitions: 1,
    },
    {
      id: 's-wudu-9-feet',
      order: 10,
      name: 'Laver les pieds jusqu\'aux chevilles',
      nameAr: 'غسل القدمين إلى الكعبين',
      description: 'Laver chaque pied jusqu\'à la cheville INCLUSE, en commençant par le pied droit (sunnah). Passer l\'eau entre les orteils (takhlil = sunnah). Pas de dalk requis — l\'eau qui couvre le membre suffit. Le TARTIB est FARD : le lavage des pieds DOIT être fait en dernier parmi les membres fard.',
      ruling: 'fard',
      position: 'wudu-feet',
      repetitions: 3,
    },
  ],
};
