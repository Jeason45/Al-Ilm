import type { AblutionDefinition } from '../types';

/**
 * Wudu selon l'école Hanafite — positions propres à l'école hanafite.
 *
 * Fard du wudu Hanafi (4 seulement) :
 *   1. Laver le visage
 *   2. Laver les bras jusqu'aux coudes (inclus)
 *   3. Essuyer 1/4 de la tête
 *   4. Laver les pieds jusqu'aux chevilles (incluses)
 *
 * Particularités Hanafi :
 *   - Niyyah = sunnah (PAS fard)
 *   - Tartib (ordre) = sunnah (PAS fard)
 *   - Muwalat (continuité) = sunnah (PAS fard)
 *   - Madmada et Istinshaq = sunnah dans le wudu (FARD uniquement dans le ghusl)
 *
 * Références : Nur al-Idah (al-Shurunbulali), Al-Hidayah (al-Marghinani),
 * Radd al-Muhtar / Hashiyat Ibn Abidin.
 */
export const wudu: AblutionDefinition = {
  id: 'wudu',
  name: 'Wudu (Ablutions mineures)',
  nameAr: 'الوضوء',
  description: 'Purification rituelle obligatoire avant la prière, le tawaf et le toucher du Coran. Selon l\'école hanafite, le wudu ne comporte que 4 actes obligatoires (fard), dérivés strictement du verset coranique (5:6). La niyyah, l\'ordre des membres et la continuité sont sunnah, pas fard.',
  steps: [
    {
      id: 'h-wudu-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le wudu pour la purification. En Hanafite, la niyyah est sunnah mu\'akkada — le wudu est valide sans elle, car c\'est un acte physique de lavage qui ne nécessite pas d\'intention pour être valide selon cette école.',
      ruling: 'sunnah-muakkada',
    },
    {
      id: 'h-wudu-2-bismillah',
      order: 2,
      name: 'Dire Bismillah (Tasmiya)',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » (Au nom d\'Allah) au début du wudu. C\'est une sunnah mu\'akkada selon l\'école hanafite.',
      ruling: 'sunnah-muakkada',
    },
    {
      id: 'h-wudu-3-hands',
      order: 3,
      name: 'Laver les mains jusqu\'aux poignets',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains trois fois jusqu\'aux poignets en faisant passer l\'eau entre les doigts (khilal). Le khilal des doigts est aussi sunnah. Il est sunnah d\'utiliser le siwak (miswak) au début du wudu.',
      ruling: 'sunnah',
      position: 'wudu-hands',
      repetitions: 3,
    },
    {
      id: 'h-wudu-4-mouth',
      order: 4,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Prendre de l\'eau dans la main droite, la mettre dans la bouche, la faire circuler et la recracher, trois fois. En Hanafite, la madmada est sunnah dans le wudu (la bouche est une cavité interne, pas une partie du visage). Elle est en revanche FARD dans le ghusl.',
      ruling: 'sunnah-muakkada',
      position: 'wudu-mouth',
      repetitions: 3,
    },
    {
      id: 'h-wudu-5-nose',
      order: 5,
      name: 'Rincer le nez (Istinshaq + Istinthar)',
      nameAr: 'الاستنشاق والاستنثار',
      description: 'Aspirer de l\'eau dans les narines avec la main droite (istinshaq), puis se moucher avec la main gauche (istinthar), trois fois. En Hanafite, l\'istinshaq est sunnah dans le wudu (le nez interne est une cavité, pas une partie du visage). Il est FARD dans le ghusl.',
      ruling: 'sunnah-muakkada',
      position: 'wudu-nose',
      repetitions: 3,
    },
    {
      id: 'h-wudu-6-face',
      order: 6,
      name: 'Laver le visage',
      nameAr: 'غسل الوجه',
      description: 'Laver le visage en entier : du haut du front (ligne des cheveux) au bas du menton, et d\'une oreille à l\'autre. Le premier lavage est fard, les deuxième et troisième sont sunnah. Le khilal de la barbe épaisse (passer les doigts mouillés à travers) est sunnah.',
      ruling: 'fard',
      position: 'wudu-face',
      repetitions: 3,
    },
    {
      id: 'h-wudu-7-arms',
      order: 7,
      name: 'Laver les bras jusqu\'aux coudes',
      nameAr: 'غسل اليدين إلى المرفقين',
      description: 'Laver chaque bras du bout des doigts jusqu\'au coude inclus, en commençant par le bras droit. Le premier lavage est fard, les suivants sont sunnah. Il est sunnah d\'allonger le ghurra (laver légèrement au-delà de la limite obligatoire).',
      ruling: 'fard',
      position: 'wudu-arms',
      repetitions: 3,
    },
    {
      id: 'h-wudu-8-head',
      order: 8,
      name: 'Essuyer la tête (Mash)',
      nameAr: 'مسح الرأس',
      description: 'Passer les mains mouillées sur la tête. En Hanafite, le fard minimum est d\'essuyer UN QUART de la tête (soit la surface de 3 doigts). Essuyer la tête entière (de l\'avant vers l\'arrière puis retour) est sunnah mu\'akkada. On utilise de l\'eau fraîche, pas l\'eau restante des bras.',
      ruling: 'fard',
      position: 'wudu-head',
      repetitions: 1,
    },
    {
      id: 'h-wudu-9-ears',
      order: 9,
      name: 'Essuyer les oreilles',
      nameAr: 'مسح الأذنين',
      description: 'Essuyer l\'intérieur des oreilles avec les index et l\'extérieur avec les pouces, avec de l\'eau fraîche. C\'est une sunnah. Le mashu de la nuque (avec le dos des mains mouillées) est aussi sunnah — mais essuyer la gorge est considéré comme bid\'a.',
      ruling: 'sunnah',
      position: 'wudu-ears',
      repetitions: 1,
    },
    {
      id: 'h-wudu-10-feet',
      order: 10,
      name: 'Laver les pieds jusqu\'aux chevilles',
      nameAr: 'غسل القدمين إلى الكعبين',
      description: 'Laver chaque pied jusqu\'à la cheville incluse, en commençant par le pied droit. Passer l\'eau entre les orteils avec le petit doigt de la main gauche (khilal). Le premier lavage est fard, les suivants sont sunnah.',
      ruling: 'fard',
      position: 'wudu-feet',
      repetitions: 3,
    },
    {
      id: 'h-wudu-11-dua',
      order: 11,
      name: 'Du\'a après le wudu',
      nameAr: 'الدعاء بعد الوضوء',
      description: 'Prononcer la shahada après le wudu : « Ashhadu an la ilaha illa Allah wahdahu la sharika lah, wa ashhadu anna Muhammadan \'abduhu wa rasuluh » (J\'atteste qu\'il n\'y a de divinité qu\'Allah, Unique et sans associé, et j\'atteste que Muhammad est Son serviteur et Son messager).',
      ruling: 'sunnah',
    },
  ],
};
