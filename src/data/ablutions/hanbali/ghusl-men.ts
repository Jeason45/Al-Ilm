import type { AblutionDefinition } from '../types';

/**
 * Ghusl Homme selon l'école Hanbalite — positions propres à l'école hanbalite.
 *
 * Fard du ghusl Hanbalite (3) :
 *   1. Niyyah (FARD)
 *   2. Madmada + Istinshaq (FARD — comme dans le wudu, elles sont fard dans le ghusl aussi)
 *   3. Couvrir tout le corps d'eau (y compris les racines des cheveux)
 *
 * Ce qui N'EST PAS fard dans le ghusl Hanbalite :
 *   - Dalk = PAS requis (comme Chafiite, contrairement à Malikite)
 *   - Muwalat = PAS requise dans le ghusl (contrairement au wudu où elle est fard !)
 *   - Tartib = PAS requis dans le ghusl (contrairement au wudu où il est fard !)
 *
 * Différences clés :
 *   - Niyyah = FARD (Hanafi: sunnah)
 *   - Madmada/Istinshaq = FARD même dans le ghusl (Chafiite: sunnah même dans le ghusl)
 *   - Dalk = PAS requis (Malikite: fard)
 *   - Muwalat = PAS requise (Malikite: fard uniquement dans le wudu, PAS dans le ghusl)
 *   - Tartib = PAS requis (Malikite: PAS fard dans le ghusl non plus)
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi' (al-Buhuti),
 *              Kashaf al-Qina' (al-Buhuti).
 */
export const ghuslMen: AblutionDefinition = {
  id: 'ghusl-men',
  name: 'Ghusl Homme',
  nameAr: '\u0627\u0644\u063a\u0633\u0644 \u0644\u0644\u0631\u062c\u0644',
  description: 'Purification majeure obligatoire pour l\'homme. L\'\u00e9cole hanbalite a 3 fard dans le ghusl : niyyah, madmada + istinshaq (FARD comme dans le wudu), et couvrir tout le corps d\'eau (y compris les racines des cheveux). Ni le dalk, ni la muwalat, ni le tartib ne sont fard dans le ghusl (contrairement au wudu o\u00f9 tartib et muwalat sont fard).',
  conditions: [
    {
      id: 'h-ghusl-men-janabah',
      title: 'Janabah (impuret\u00e9 majeure)',
      titleAr: '\u0627\u0644\u062c\u0646\u0627\u0628\u0629',
      description: 'Apr\u00e8s un rapport sexuel (avec ou sans \u00e9jaculation \u2014 la p\u00e9n\u00e9tration seule suffit) ou apr\u00e8s une \u00e9mission de mani (sperme). Pendant l\'\u00e9veil, l\'\u00e9mission de mani n\u00e9cessite le ghusl uniquement si elle s\'accompagne de shahwa (plaisir/d\u00e9sir). Si le mani sort sans shahwa pendant l\'\u00e9veil (maladie, froid), le ghusl n\'est PAS obligatoire. Pendant le sommeil, toute d\u00e9couverte de mani n\u00e9cessite le ghusl, que la shahwa ait \u00e9t\u00e9 ressentie ou non.',
    },
    {
      id: 'h-ghusl-men-islam',
      title: 'Entr\u00e9e en Islam',
      titleAr: '\u0627\u0644\u062f\u062e\u0648\u0644 \u0641\u064a \u0627\u0644\u0625\u0633\u0644\u0627\u0645',
      description: 'Le ghusl lors de la conversion à l\'Islam est WAJIB (obligatoire) selon le mu\'tamad hanbalite. Zad al-Mustaqni\' liste l\'entrée en Islam parmi les causes qui obligent le ghusl. Le Prophète ﷺ a ordonné à plusieurs compagnons de faire le ghusl lors de leur conversion.',
    },
    {
      id: 'h-ghusl-men-friday',
      title: 'Pri\u00e8re du vendredi',
      titleAr: '\u0635\u0644\u0627\u0629 \u0627\u0644\u062c\u0645\u0639\u0629',
      description: 'Le ghusl du vendredi est sunnah mu\'akkada pour celui qui assiste \u00e0 la pri\u00e8re du Jumu\'a. Le hadith \u00ab Le ghusl du vendredi est obligatoire pour tout pubescent \u00bb (Bukhari/Muslim) est interpr\u00e9t\u00e9 comme une forte recommandation.',
    },
    {
      id: 'h-ghusl-men-eid',
      title: 'Jour de l\'A\u00efd',
      titleAr: '\u064a\u0648\u0645 \u0627\u0644\u0639\u064a\u062f',
      description: 'Le ghusl est sunnah avant la pri\u00e8re de l\'A\u00efd al-Fitr et de l\'A\u00efd al-Adha.',
    },
    {
      id: 'h-ghusl-men-death',
      title: 'Lavage du mort',
      titleAr: '\u063a\u0633\u0644 \u0627\u0644\u0645\u064a\u062a',
      description: 'Le ghusl apr\u00e8s avoir lav\u00e9 un d\u00e9funt est WAJIB selon la lecture litt\u00e9rale du Zad al-Mustaqni\u2019. Toutefois, certains muhaqqiqin hanbalites (dont Ibn Taymiyyah) le consid\u00e8rent sunnah mu\u2019akkada. La position retenue (mu\u2019tamad) dans les manuels tardifs est le wujub.',
    },
  ],
  steps: [
    {
      id: 'h-ghusl-men-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: '\u0627\u0644\u0646\u064a\u0629',
      description: 'Formuler l\'intention dans le c\u0153ur de faire le ghusl pour lever l\'impuret\u00e9 majeure (janabah). En Hanbalite, la niyyah est FARD \u2014 sans elle, le ghusl est invalide. L\'intention doit \u00eatre pr\u00e9sente au moment o\u00f9 l\'eau touche le corps.',
      ruling: 'fard',
    },
    {
      id: 'h-ghusl-men-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: '\u0628\u0633\u0645 \u0627\u0644\u0644\u0647',
      description: 'Prononcer \u00ab Bismillah \u00bb avant de commencer. WAJIB en Hanbalite (comme dans le wudu). Les autres \u00e9coles la consid\u00e8rent sunnah.',
      ruling: 'wajib',
    },
    {
      id: 'h-ghusl-men-3-hands',
      order: 3,
      name: 'Laver les mains',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u064a\u062f\u064a\u0646',
      description: 'Laver les deux mains jusqu\'aux poignets trois fois. Sunnah.',
      ruling: 'sunnah',
      repetitions: 3,
    },
    {
      id: 'h-ghusl-men-4-private',
      order: 4,
      name: 'Laver les parties intimes',
      nameAr: '\u063a\u0633\u0644 \u0627\u0644\u0641\u0631\u062c',
      description: 'Laver les parties intimes avec la main gauche pour enlever toute impuret\u00e9. Sunnah, mais facilite la purification.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-men-5-wudu',
      order: 5,
      name: 'Faire le wudu complet',
      nameAr: '\u0627\u0644\u0648\u0636\u0648\u0621',
      description: 'Effectuer un wudu complet comme pour la pri\u00e8re. Sunnah en Hanbalite (pas fard). Le ghusl seul suffit pour lever les deux impuret\u00e9s (majeure et mineure) \u00e0 condition d\'avoir fait la madmada et l\'istinshaq (qui sont fard). Il est recommand\u00e9 de retarder le lavage des pieds \u00e0 la fin du ghusl.',
      ruling: 'sunnah',
    },
    {
      id: 'h-ghusl-men-6-mouth',
      order: 6,
      name: 'Rincer la bouche (Madmada)',
      nameAr: '\u0627\u0644\u0645\u0636\u0645\u0636\u0629',
      description: 'Rincer la bouche avec de l\'eau. FARD en Hanbalite m\u00eame dans le ghusl ! La madmada fait partie des obligations du ghusl car l\'int\u00e9rieur de la bouche fait partie du visage en Hanbalite. Si le wudu complet (sunnah) a d\u00e9j\u00e0 \u00e9t\u00e9 fait \u00e0 l\'\u00e9tape 5, cette obligation est d\u00e9j\u00e0 remplie.',
      ruling: 'fard',
      madhabNote: 'FARD en Hanbalite (dans le wudu ET le ghusl). Sunnah en Chafiite m\u00eame dans le ghusl. FARD dans le ghusl uniquement en Hanafite (sunnah dans le wudu). Sunnah en Malikite.',
    },
    {
      id: 'h-ghusl-men-7-nose',
      order: 7,
      name: 'Rincer le nez (Istinshaq)',
      nameAr: '\u0627\u0644\u0627\u0633\u062a\u0646\u0634\u0627\u0642',
      description: 'Aspirer de l\'eau dans les narines et se moucher. FARD en Hanbalite m\u00eame dans le ghusl ! L\'istinshaq fait partie des obligations car l\'int\u00e9rieur du nez fait partie du visage en Hanbalite. Si le wudu complet (sunnah) a d\u00e9j\u00e0 \u00e9t\u00e9 fait \u00e0 l\'\u00e9tape 5, cette obligation est d\u00e9j\u00e0 remplie.',
      ruling: 'fard',
      madhabNote: 'FARD en Hanbalite (dans le wudu ET le ghusl). Sunnah en Chafiite m\u00eame dans le ghusl. FARD dans le ghusl uniquement en Hanafite (sunnah dans le wudu). Sunnah en Malikite.',
    },
    {
      id: 'h-ghusl-men-8-head',
      order: 8,
      name: 'Verser l\'eau sur la t\u00eate et les cheveux',
      nameAr: '\u0625\u0641\u0627\u0636\u0629 \u0627\u0644\u0645\u0627\u0621 \u0639\u0644\u0649 \u0627\u0644\u0631\u0623\u0633',
      description: 'Verser de l\'eau abondamment sur la t\u00eate trois fois en s\'assurant que l\'eau p\u00e9n\u00e8tre JUSQU\'AUX RACINES des cheveux et de la barbe (FARD \u2014 fait partie de la couverture de tout le corps). En Hanbalite, il n\'est PAS n\u00e9cessaire de frotter (pas de dalk) \u2014 l\'eau qui coule suffit.',
      ruling: 'fard',
      repetitions: 3,
    },
    {
      id: 'h-ghusl-men-9-body',
      order: 9,
      name: 'Laver tout le corps',
      nameAr: '\u063a\u0633\u0644 \u0633\u0627\u0626\u0631 \u0627\u0644\u062c\u0633\u062f',
      description: 'Laver le corps entier en commen\u00e7ant par le c\u00f4t\u00e9 droit (sunnah) puis le c\u00f4t\u00e9 gauche. S\'assurer que l\'eau atteigne CHAQUE partie du corps sans exception : aisselles, nombril, plis, entre les orteils. En Hanbalite, le dalk (frottement) n\'est PAS fard \u2014 l\'eau qui couvre le corps suffit. La muwalat (continuit\u00e9) n\'est PAS fard dans le ghusl (contrairement au wudu !). Le tartib (ordre) n\'est PAS non plus fard dans le ghusl.',
      ruling: 'fard',
      madhabNote: 'En Hanbalite, ni le dalk, ni la muwalat, ni le tartib ne sont fard dans le ghusl. En Malikite, le dalk est fard dans le ghusl mais la muwalat N\'est PAS fard dans le ghusl (elle est fard uniquement dans le wudu). Le tartib n\'est PAS fard dans le ghusl en Malikite. En Chafiite, aucun des trois n\'est fard. En Hanafite, aucun des trois n\'est fard non plus.',
    },
  ],
};
