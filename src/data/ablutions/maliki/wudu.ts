import type { AblutionDefinition } from '../types';

/**
 * Wudu selon l'école Malikite — positions propres à l'école malikite.
 *
 * Fard du wudu Malikite (7) :
 *   1. Niyyah (FARD — contrairement à Hanafi où c'est sunnah)
 *   2. Laver le visage
 *   3. Laver les bras jusqu'aux coudes
 *   4. Essuyer la TÊTE ENTIÈRE (pas 1/4 comme Hanafi)
 *   5. Laver les pieds jusqu'aux chevilles
 *   6. Muwalat (continuité — FARD, contrairement à Hanafi où c'est sunnah)
 *   7. Dalk (frottement — UNIQUE Malikite, aucune autre école ne l'exige)
 *
 * Particularités Malikite :
 *   - Tartib (ordre) = sunnah mu'akkada en Malikite
 *   - Madmada/Istinshaq = sunnah (comme Hanafi dans le wudu)
 *   - Dalk = FARD (unique Malikite — frotter chaque membre avec la main)
 *   - Muwalat = FARD (si un membre sèche avant le suivant, wudu invalide)
 *   - Niyyah = FARD (doit accompagner le lavage du visage)
 *   - Tête ENTIÈRE doit être essuyée (pas partiel)
 *
 * Références : Al-Risala (Ibn Abi Zayd), Mukhtasar Khalil, Al-Mudawwana.
 */
export const wudu: AblutionDefinition = {
  id: 'wudu',
  name: 'Wudu (Ablutions mineures)',
  nameAr: 'الوضوء',
  description: 'Purification rituelle obligatoire avant la prière. Selon l\'école malikite, le wudu comporte 7 fard : niyyah, lavage du visage, des bras, essuyage de la TÊTE ENTIÈRE, lavage des pieds, muwalat (continuité) et dalk (frottement avec la main). Parmi ces 7 fard, 5 sont des étapes distinctes (niyyah, visage, bras, tête, pieds) et 2 sont des obligations TRANSVERSALES qui s\'appliquent à toutes les étapes : le DALK (frottement — chaque membre doit être frotté, pas seulement arrosé) et la MUWALAT (continuité — ne pas laisser un membre sécher avant de passer au suivant). Le dalk est une obligation unique à l\'école malikite.',
  steps: [
    {
      id: 'm-wudu-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le wudu pour la purification. En Malikite, la niyyah est FARD — elle doit accompagner (muqarana) le DÉBUT du lavage du visage (premier acte fard). Une très légère anticipation (taqaddum yasir — quelques secondes) est tolérée, mais pas un écart prolongé.',
      ruling: 'fard',
    },
    {
      id: 'm-wudu-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: 'بسم الله',
      description: 'Prononcer « Bismillah » avant de commencer le wudu. Mandoub (recommandé) en Malikite.',
      ruling: 'mandoub',
    },
    {
      id: 'm-wudu-3-hands',
      order: 3,
      name: 'Laver les mains jusqu\'aux poignets',
      nameAr: 'غسل اليدين',
      description: 'Laver les deux mains jusqu\'aux poignets en faisant passer l\'eau entre les doigts. Sunnah en Malikite.',
      ruling: 'sunnah',
      position: 'wudu-hands',
      repetitions: 3,
    },
    {
      id: 'm-wudu-4-mouth',
      order: 4,
      name: 'Rincer la bouche (Madmada)',
      nameAr: 'المضمضة',
      description: 'Prendre de l\'eau dans la bouche, la faire circuler et la recracher. Si l\'eau est avalée, la sunnah n\'est pas accomplie. Sunnah mu\'akkada en Malikite.',
      ruling: 'sunnah-muakkada',
      position: 'wudu-mouth',
      repetitions: 3,
    },
    {
      id: 'm-wudu-5-nose',
      order: 5,
      name: 'Rincer le nez (Istinshaq + Istinthar)',
      nameAr: 'الاستنشاق والاستنثار',
      description: 'Aspirer de l\'eau dans les narines (istinshaq) puis se moucher avec la main gauche (istinthar). Sunnah mu\'akkada en Malikite. Peut être combiné avec la madmada ou fait séparément (séparément est meilleur).',
      ruling: 'sunnah-muakkada',
      position: 'wudu-nose',
      repetitions: 3,
    },
    {
      id: 'm-wudu-6-face',
      order: 6,
      name: 'Laver le visage',
      nameAr: 'غسل الوجه',
      description: 'Laver le visage en entier : de la ligne des cheveux au bas du menton, d\'une oreille à l\'autre. Inclut les tempes, les orbites des yeux, les plis du front et le bas du nez. Le premier lavage est fard, les suivants sont mandoub. FROTTER le visage avec la main pendant le lavage (dalk = fard en Malikite). Pour la barbe : si elle est légère/clairsemée, il faut laver la peau en dessous (fard). Si elle est épaisse/fournie, laver l\'extérieur suffit et passer les doigts mouillés à travers (takhlil) est sunnah.',
      ruling: 'fard',
      position: 'wudu-face',
      repetitions: 3,
    },
    {
      id: 'm-wudu-7-arms',
      order: 7,
      name: 'Laver les bras jusqu\'aux coudes',
      nameAr: 'غسل اليدين إلى المرفقين',
      description: 'Laver chaque bras du bout des doigts jusqu\'au coude inclus, en commençant par le bras droit (mandoub). Le premier lavage est fard, les suivants sont mandoub. FROTTER chaque bras avec la main (dalk = fard).',
      ruling: 'fard',
      position: 'wudu-arms',
      repetitions: 3,
    },
    {
      id: 'm-wudu-8-head',
      order: 8,
      name: 'Essuyer la TÊTE ENTIÈRE (Mash)',
      nameAr: 'مسح الرأس',
      description: 'Essuyer la TOTALITÉ de la tête avec les mains mouillées : placer les bouts des doigts joints avec les pouces aux tempes, aller de la ligne des cheveux vers la nuque, puis revenir au point de départ (le retour est sunnah, l\'aller est fard). En Malikite, la tête ENTIÈRE doit être essuyée (pas seulement 1/4 comme en Hanafite). Ne pas essuyer sur un couvre-chef.',
      ruling: 'fard',
      position: 'wudu-head',
      repetitions: 1,
    },
    {
      id: 'm-wudu-9-ears',
      order: 9,
      name: 'Essuyer les oreilles',
      nameAr: 'مسح الأذنين',
      description: 'Essuyer l\'intérieur des oreilles (côté visage) et l\'extérieur (côté tête) avec de l\'eau fraîche. Sunnah mu\'akkada en Malikite. Les oreilles ne font PAS partie du fard de l\'essuyage de la tête. Il est recommandé de remouiller les mains pour essuyer les oreilles.',
      ruling: 'sunnah-muakkada',
      position: 'wudu-ears',
      repetitions: 1,
    },
    {
      id: 'm-wudu-10-feet',
      order: 10,
      name: 'Laver les pieds jusqu\'aux chevilles',
      nameAr: 'غسل القدمين إلى الكعبين',
      description: 'Laver chaque pied jusqu\'à la cheville incluse, en commençant par le pied droit (mandoub). Passer l\'eau entre les orteils. FROTTER chaque pied avec la main (dalk = fard). Frotter un pied contre l\'autre seul ne suffit PAS en Malikite — il faut utiliser la main.',
      ruling: 'fard',
      position: 'wudu-feet',
      repetitions: 3,
    },
    {
      id: 'm-wudu-11-shahada',
      order: 11,
      name: 'Shahada après le wudu',
      nameAr: 'الشهادة بعد الوضوء',
      description: 'Prononcer la shahada après le wudu : « Ash-hadu an la ilaha illallah wahdahu la sharika lah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh. Allahumma ij\'alni min at-tawwabin wa ij\'alni min al-mutatahhirin. » Le Prophète ﷺ a dit que les huit portes du Paradis sont ouvertes à celui qui prononce cette invocation après le wudu (Muslim).',
      ruling: 'mandoub',
    },
  ],
};
