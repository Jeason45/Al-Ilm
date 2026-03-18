import type { AblutionDefinition } from '../types';

/**
 * Wudu selon l'école Hanbalite — positions propres à l'école hanbalite.
 *
 * Fard du wudu Hanbalite (7) :
 *   1. Niyyah (FARD — comme Chafiite/Malikite, contrairement à Hanafi où c'est sunnah)
 *   2. Laver le visage — INCLUT la madmada (rinçage bouche) et l'istinshaq (rinçage nez) qui sont FARD !
 *      C'est UNIQUE au Hanbalite : dans les autres écoles, elles sont sunnah dans le wudu.
 *   3. Laver les bras jusqu'aux coudes (inclus)
 *   4. Essuyer la TOTALITÉ de la tête — comme Malikite, contrairement à Chafiite (partiel).
 *      Les oreilles font PARTIE de la tête en Hanbalite → les essuyer est FARD (pas sunnah).
 *   5. Laver les pieds jusqu'aux chevilles (incluses)
 *   6. Tartib (ORDRE — FARD, partagé avec le Chafiite)
 *   7. Muwalat (CONTINUITÉ — FARD ! Comme Malikite, contrairement à Chafiite où c'est sunnah)
 *
 * Ce qui N'EST PAS fard en Hanbalite :
 *   - PAS de dalk requis (comme Chafiite, contrairement à Malikite)
 *
 * Wajib en Hanbalite (distinct de fard et sunnah) :
 *   - Bismillah = WAJIB ! (UNIQUE au Hanbalite — dans les autres écoles c'est sunnah)
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi' (al-Buhuti),
 *              Kashaf al-Qina' (al-Buhuti).
 */
export const wudu: AblutionDefinition = {
  id: 'wudu',
  name: 'Wudu (Ablutions mineures)',
  nameAr: '\u0627\u0644\u0648\u0636\u0648\u0621',
  description: 'Purification rituelle obligatoire avant la pri\u00e8re. Selon l\'\u00e9cole hanbalite, le wudu comporte 7 fard : niyyah, lavage du visage (INCLUANT madmada et istinshaq qui sont FARD), lavage des bras, essuyage de la TOTALIT\u00c9 de la t\u00eate (y compris les oreilles qui en font partie), lavage des pieds, tartib (ORDRE obligatoire) et muwalat (CONTINUIT\u00c9 obligatoire). La bismillah est WAJIB (unique au Hanbalite). Le dalk n\'est pas requis.',
  steps: [
    {
      id: 'h-wudu-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: '\u0627\u0644\u0646\u064a\u0629',
      description: 'Formuler l\'intention dans le c\u0153ur de faire le wudu au moment de laver le premier membre fard. En Hanbalite, la niyyah est FARD \u2014 elle doit co\u00efncider avec le d\u00e9but du lavage. L\'intention de lever le hadath (impuret\u00e9 rituelle) ou de rendre permise la pri\u00e8re est valide.',
      ruling: 'fard',
    },
    {
      id: 'h-wudu-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: '\u0628\u0633\u0645 \u0627\u0644\u0644\u0647',
      description: 'Prononcer \u00ab Bismillah \u00bb avant de commencer le lavage. WAJIB en Hanbalite ! C\'est UNIQUE \u00e0 cette \u00e9cole \u2014 dans les trois autres \u00e9coles, c\'est sunnah. Celui qui l\'omet DÉLIBÉRÉMENT, son wudu est INVALIDE selon le mu\'tamad hanbalite (Zad al-Mustaqni\' : « fa-in tarakaha \'amdan batala »). Celui qui oublie involontairement, il est pardonné et le wudu reste valide.',
      ruling: 'wajib',
      madhabNote: 'WAJIB en Hanbalite (position unique). Sunnah dans les trois autres \u00e9coles. Bas\u00e9 sur le hadith \u00ab Pas de wudu pour celui qui ne mentionne pas le nom d\'Allah \u00bb (Abu Dawud, Ahmad). L\'\u00e9cole hanbalite le prend au sens apparent.',
    },
    {
      id: 'h-wudu-3-hands',
      order: 3,
      name: 'Laver les mains jusqu\'aux poignets',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u064a\u062f\u064a\u0646',
      description: 'Laver les deux mains jusqu\'aux poignets en passant l\'eau entre les doigts. Sunnah en Hanbalite. Il est sunnah de le faire trois fois. Il est sunnah mu\'akkada d\'utiliser le siwak (miswak) au d\u00e9but du wudu.',
      ruling: 'sunnah',
      position: 'wudu-hands',
      repetitions: 3,
    },
    {
      id: 'h-wudu-4-mouth',
      order: 4,
      name: 'Rincer la bouche (Madmada)',
      nameAr: '\u0627\u0644\u0645\u0636\u0645\u0636\u0629',
      description: 'Prendre de l\'eau dans la bouche, la faire circuler et la recracher. FARD en Hanbalite car la madmada fait PARTIE du lavage du visage ! C\'est une particularit\u00e9 UNIQUE au Hanbalite \u2014 dans les autres \u00e9coles (Chafiite, Malikite, Hanafite), la madmada est sunnah dans le wudu. Il est sunnah de le faire trois fois et d\'exag\u00e9rer le rin\u00e7age (muballagha) sauf en \u00e9tat de je\u00fbne.',
      ruling: 'fard',
      position: 'wudu-mouth',
      repetitions: 3,
      madhabNote: 'FARD en Hanbalite (fait partie du visage). Sunnah en Chafiite, Malikite et Hanafite dans le wudu. Sunnah en Malikite (dans le wudu et le ghusl). En Hanafite, la madmada est fard uniquement dans le ghusl, pas dans le wudu.',
    },
    {
      id: 'h-wudu-5-nose',
      order: 5,
      name: 'Rincer le nez (Istinshaq + Istinthar)',
      nameAr: '\u0627\u0644\u0627\u0633\u062a\u0646\u0634\u0627\u0642 \u0648\u0627\u0644\u0627\u0633\u062a\u0646\u062b\u0627\u0631',
      description: 'Aspirer de l\'eau dans les narines (istinshaq) puis se moucher avec la main gauche (istinthar). FARD en Hanbalite car l\'istinshaq fait PARTIE du lavage du visage ! C\'est une particularit\u00e9 UNIQUE au Hanbalite \u2014 dans les autres \u00e9coles, c\'est sunnah dans le wudu. Il est sunnah de le faire trois fois et d\'exag\u00e9rer l\'aspiration (muballagha) sauf en \u00e9tat de je\u00fbne.',
      ruling: 'fard',
      position: 'wudu-nose',
      repetitions: 3,
      madhabNote: 'FARD en Hanbalite (fait partie du visage). Sunnah en Chafiite, Malikite et Hanafite dans le wudu. En Hanafite, l\'istinshaq est fard uniquement dans le ghusl.',
    },
    {
      id: 'h-wudu-6-face',
      order: 6,
      name: 'Laver le visage',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u0648\u062c\u0647',
      description: 'Laver le visage en entier : de la ligne des cheveux au bas du menton, d\'une oreille \u00e0 l\'autre. Le premier lavage est fard, les deuxi\u00e8me et troisi\u00e8me sont sunnah. En Hanbalite, il n\'est PAS requis de frotter (pas de dalk) \u2014 faire couler l\'eau sur le visage suffit. Pour l\'homme \u00e0 barbe \u00e9paisse, passer les doigts mouill\u00e9s dans la barbe (takhlil) est sunnah. La madmada et l\'istinshaq font PARTIE de ce fard.',
      ruling: 'fard',
      position: 'wudu-face',
      repetitions: 3,
    },
    {
      id: 'h-wudu-7-arms',
      order: 7,
      name: 'Laver les bras jusqu\'aux coudes',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u064a\u062f\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u0645\u0631\u0641\u0642\u064a\u0646',
      description: 'Laver chaque bras du bout des doigts jusqu\'au coude INCLUS, en commen\u00e7ant par le bras droit (sunnah). Le premier lavage est fard, les deuxi\u00e8me et troisi\u00e8me sont sunnah. Pas de dalk requis \u2014 l\'eau qui couvre le membre suffit. Le TARTIB est FARD en Hanbalite : ce lavage DOIT \u00eatre fait apr\u00e8s le visage. La MUWALAT est \u00e9galement FARD : ne pas laisser un membre s\u00e9cher avant de passer au suivant.',
      ruling: 'fard',
      position: 'wudu-arms',
      repetitions: 3,
    },
    {
      id: 'h-wudu-8-head',
      order: 8,
      name: 'Essuyer la TOTALIT\u00c9 de la t\u00eate (Mash)',
      nameAr: '\u0645\u0633\u062d \u0627\u0644\u0631\u0623\u0633',
      description: 'Essuyer la t\u00eate enti\u00e8re avec les mains mouill\u00e9es, d\'avant en arri\u00e8re puis revenir en avant. En Hanbalite, essuyer la TOTALIT\u00c9 de la t\u00eate est FARD (comme en Malikite, contrairement au Chafiite o\u00f9 le partiel suffit). Commencer du devant de la t\u00eate vers l\'arri\u00e8re, puis revenir en avant. Le TARTIB est FARD : l\'essuyage de la t\u00eate DOIT \u00eatre fait apr\u00e8s le lavage des bras.',
      ruling: 'fard',
      position: 'wudu-head',
      repetitions: 1,
      madhabNote: 'La TOTALIT\u00c9 de la t\u00eate est FARD en Hanbalite et Malikite. En Chafiite, le partiel suffit (m\u00eame quelques cheveux). En Hanafite, un quart de la t\u00eate suffit.',
    },
    {
      id: 'h-wudu-9-ears',
      order: 9,
      name: 'Essuyer les oreilles',
      nameAr: '\u0645\u0633\u062d \u0627\u0644\u0623\u0630\u0646\u064a\u0646',
      description: 'Essuyer l\'int\u00e9rieur des oreilles avec les index et l\'ext\u00e9rieur avec les pouces. FARD en Hanbalite car les oreilles font PARTIE DE LA T\u00caTE ! C\'est une particularit\u00e9 hanbalite \u2014 dans les autres écoles, les oreilles sont sunnah (Chafiite, Hanafite et Malikite). On utilise la m\u00eame eau que celle de l\'essuyage de la t\u00eate (pas besoin d\'eau fra\u00eeche).',
      ruling: 'fard',
      position: 'wudu-ears',
      repetitions: 1,
      madhabNote: 'FARD en Hanbalite (les oreilles font partie de la t\u00eate). Sunnah en Chafiite, Hanafite et Malikite. En Chafiite, il est m\u00eame sunnah de prendre de l\'eau fra\u00eeche pour les oreilles ; en Hanbalite, on utilise la m\u00eame eau que la t\u00eate.',
    },
    {
      id: 'h-wudu-10-feet',
      order: 10,
      name: 'Laver les pieds jusqu\'aux chevilles',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u0642\u062f\u0645\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u0643\u0639\u0628\u064a\u0646',
      description: 'Laver chaque pied jusqu\'\u00e0 la cheville INCLUSE, en commen\u00e7ant par le pied droit (sunnah). Passer l\'eau entre les orteils (takhlil = sunnah). Pas de dalk requis \u2014 l\'eau qui couvre le membre suffit. Le TARTIB est FARD : le lavage des pieds DOIT \u00eatre fait en dernier parmi les membres fard. La MUWALAT est FARD : ne pas laisser un long d\u00e9lai entre les membres.',
      ruling: 'fard',
      position: 'wudu-feet',
      repetitions: 3,
    },
    {
      id: 'h-wudu-11-dua',
      order: 11,
      name: 'Shahada et du\'a apr\u00e8s le wudu',
      nameAr: '\u0627\u0644\u0634\u0647\u0627\u062f\u0629 \u0648\u0627\u0644\u062f\u0639\u0627\u0621 \u0628\u0639\u062f \u0627\u0644\u0648\u0636\u0648\u0621',
      description: 'Prononcer la shahada : \u00ab Ashhadu an la ilaha illa Allah wahdahu la sharika lah, wa ashhadu anna Muhammadan \'abduhu wa rasuluh. Allahumma-j\'alni min at-tawwabin waj\'alni min al-mutatahhirin \u00bb (Je t\u00e9moigne qu\'il n\'y a de divinit\u00e9 qu\'Allah seul sans associ\u00e9, et que Muhammad est Son serviteur et messager. \u00d4 Allah, fais de moi un de ceux qui se repentent et un de ceux qui se purifient).',
      ruling: 'sunnah',
    },
  ],
};
