import type { CommonError } from '../types';

/**
 * Erreurs courantes du wudu selon l'école Hanbalite — positions propres à l'école hanbalite.
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi' (al-Buhuti),
 *              Kashaf al-Qina' (al-Buhuti).
 */
export const hanbaliErrors: CommonError[] = [
  {
    id: 'h-abl-err-no-bismillah',
    title: 'Ne pas dire Bismillah',
    titleAr: '\u062a\u0631\u0643 \u0627\u0644\u062a\u0633\u0645\u064a\u0629',
    description: 'Oublier ou n\u00e9gliger de prononcer \u00ab Bismillah \u00bb avant de commencer le wudu.',
    correction: 'La Bismillah est WAJIB en Hanbalite \u2014 c\'est UNIQUE \u00e0 cette \u00e9cole (dans les trois autres, c\'est sunnah). Bas\u00e9 sur le hadith \u00ab Pas de wudu pour celui qui ne mentionne pas le nom d\'Allah \u00bb (Abu Dawud, Ahmad). Celui qui l\'omet DÉLIBÉRÉMENT, son wudu est INVALIDE selon le mu\'tamad (Zad al-Mustaqni\'). Celui qui oublie involontairement, il est pardonné. Il faut prendre l\'habitude de la prononcer syst\u00e9matiquement.',
  },
  {
    id: 'h-abl-err-partial-head',
    title: 'Essuyer seulement une partie de la t\u00eate',
    titleAr: '\u0645\u0633\u062d \u0628\u0639\u0636 \u0627\u0644\u0631\u0623\u0633',
    description: 'N\'essuyer qu\'une partie de la t\u00eate en pensant que c\'est suffisant.',
    correction: 'En Hanbalite, essuyer la TOTALIT\u00c9 de la t\u00eate est FARD (comme en Malikite). Ne pas confondre avec l\'\u00e9cole chafiite o\u00f9 le partiel suffit. La mani\u00e8re correcte : placer les mains mouill\u00e9es sur le devant de la t\u00eate, les faire glisser vers l\'arri\u00e8re, puis revenir en avant. Cela garantit que toute la t\u00eate est couverte.',
  },
  {
    id: 'h-abl-err-forgetting-ears',
    title: 'Oublier d\'essuyer les oreilles',
    titleAr: '\u062a\u0631\u0643 \u0645\u0633\u062d \u0627\u0644\u0623\u0630\u0646\u064a\u0646',
    description: 'Ne pas essuyer les oreilles ou les consid\u00e9rer comme facultatives.',
    correction: 'En Hanbalite, les oreilles font PARTIE DE LA T\u00caTE \u2014 les essuyer est FARD, pas sunnah ! C\'est une particularit\u00e9 majeure de l\'\u00e9cole hanbalite. Il faut essuyer l\'int\u00e9rieur avec les index et l\'ext\u00e9rieur avec les pouces. On utilise la m\u00eame eau que celle de l\'essuyage de la t\u00eate.',
  },
  {
    id: 'h-abl-err-camel-meat',
    title: 'Manger de la viande de chameau sans renouveler le wudu',
    titleAr: '\u0623\u0643\u0644 \u0644\u062d\u0645 \u0627\u0644\u0625\u0628\u0644 \u0628\u062f\u0648\u0646 \u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0648\u0636\u0648\u0621',
    description: 'Manger de la viande de chameau (cuite ou crue) et prier sans refaire le wudu.',
    correction: 'En Hanbalite, la viande de chameau ANNULE le wudu ! C\'est la position la plus c\u00e9l\u00e8bre et la plus UNIQUE de l\'\u00e9cole hanbalite, bas\u00e9e sur le hadith de Jabir ibn Samura (Muslim). Cela s\'applique \u00e0 toute pr\u00e9paration de viande de chameau (cuite, grill\u00e9e, bouillie). Le lait et le bouillon de chameau n\'annulent pas selon la position retenue. Si vous mangez du chameau, refaites votre wudu avant de prier.',
  },
  {
    id: 'h-abl-err-touch-spouse-no-desire',
    title: 'Penser que tout contact avec le sexe oppos\u00e9 annule le wudu',
    titleAr: '\u0638\u0646 \u0623\u0646 \u0644\u0645\u0633 \u0627\u0644\u0632\u0648\u062c \u0628\u062f\u0648\u0646 \u0634\u0647\u0648\u0629 \u064a\u0646\u0642\u0636 \u0627\u0644\u0648\u0636\u0648\u0621',
    description: 'Croire que tout contact peau-\u00e0-peau avec le sexe oppos\u00e9 annule le wudu, m\u00eame sans d\u00e9sir.',
    correction: 'En Hanbalite, toucher une personne du sexe oppos\u00e9 N\'annule le wudu QUE s\'il y a shahwa (d\u00e9sir/plaisir). SANS d\u00e9sir, le wudu n\'est PAS annul\u00e9. Ne pas confondre avec la position chafiite qui annule DANS TOUS LES CAS (m\u00eame sans d\u00e9sir). Par exemple, serrer la main de son \u00e9pouse par habitude sans aucun d\u00e9sir ne casse pas le wudu en Hanbalite.',
  },
  {
    id: 'h-abl-err-no-muwalat',
    title: 'Ne pas respecter la continuit\u00e9 (Muwalat)',
    titleAr: '\u062a\u0631\u0643 \u0627\u0644\u0645\u0648\u0627\u0644\u0627\u0629',
    description: 'S\'interrompre longuement entre deux membres du wudu, au point qu\'un membre s\u00e8che avant de passer au suivant.',
    correction: 'La MUWALAT (continuit\u00e9) est FARD en Hanbalite (comme en Malikite, contrairement au Chafiite o\u00f9 c\'est sunnah). Le crit\u00e8re : si le membre pr\u00e9c\u00e9dent s\u00e8che avant le lavage du suivant (dans des conditions normales), le wudu est invalide et doit \u00eatre recommenc\u00e9. Il faut donc encha\u00eener les membres sans pause excessive.',
  },
  {
    id: 'h-abl-err-no-tartib',
    title: 'Ne pas respecter l\'ordre (Tartib)',
    titleAr: '\u062a\u0631\u0643 \u0627\u0644\u062a\u0631\u062a\u064a\u0628',
    description: 'Laver les membres dans le d\u00e9sordre (ex : bras avant le visage, pieds avant la t\u00eate).',
    correction: 'Le TARTIB (ordre) est FARD en Hanbalite (comme en Chafiite). L\'ordre obligatoire est : visage (incluant madmada et istinshaq) \u2192 bras \u2192 t\u00eate (incluant oreilles) \u2192 pieds. Si un membre est lav\u00e9 avant celui qui le pr\u00e9c\u00e8de dans l\'ordre, le lavage du membre avanc\u00e9 n\'est PAS compt\u00e9 et doit \u00eatre refait.',
  },
  {
    id: 'h-abl-err-elbows-ankles',
    title: 'Ne pas inclure les coudes et les chevilles',
    titleAr: '\u0639\u062f\u0645 \u063a\u0633\u0644 \u0627\u0644\u0645\u0631\u0641\u0642\u064a\u0646 \u0648\u0627\u0644\u0643\u0639\u0628\u064a\u0646',
    description: 'S\'arr\u00eater avant les coudes lors du lavage des bras ou avant les chevilles lors du lavage des pieds.',
    correction: 'Les coudes et les chevilles sont INCLUS dans la zone fard. La r\u00e8gle \u00ab jusqu\'aux coudes/chevilles \u00bb (\u00ab ila al-marafiq/al-ka\'bayn \u00bb) inclut les coudes et les chevilles eux-m\u00eames. Le Proph\u00e8te \u1e63 a dit : \u00ab Malheur aux talons du feu. \u00bb Il est recommand\u00e9 de laver un peu au-del\u00e0 pour \u00eatre certain (ghurra et tahjil).',
  },
  {
    id: 'h-abl-err-washing-dead',
    title: 'Ne pas renouveler le wudu apr\u00e8s avoir lav\u00e9 un mort',
    titleAr: '\u0639\u062f\u0645 \u062a\u062c\u062f\u064a\u062f \u0627\u0644\u0648\u0636\u0648\u0621 \u0628\u0639\u062f \u063a\u0633\u0644 \u0627\u0644\u0645\u064a\u062a',
    description: 'Laver un d\u00e9funt et prier sans refaire le wudu.',
    correction: 'En Hanbalite, le lavage d\'un mort est une cause qui n\u00e9cessite le wudu (voire le ghusl selon le mu\'tamad du Zad al-Mustaqni\'). Il faut donc renouveler le wudu apr\u00e8s avoir lav\u00e9 un d\u00e9funt avant de prier.',
  },
  {
    id: 'h-abl-err-blood-vomit',
    title: 'Ignorer que le sang ou le vomissement abondant annule le wudu',
    titleAr: '\u062a\u062c\u0627\u0647\u0644 \u0646\u0642\u0636 \u0627\u0644\u062f\u0645 \u0623\u0648 \u0627\u0644\u0642\u064a\u0621 \u0627\u0644\u0643\u062b\u064a\u0631 \u0644\u0644\u0648\u0636\u0648\u0621',
    description: 'Ne pas refaire le wudu apr\u00e8s un saignement de nez abondant, une blessure qui coule, ou un vomissement qui remplit la bouche.',
    correction: 'En Hanbalite (comme en Hanafite), le sang, le pus ou la s\u00e9rosit\u00e9 qui COULE ABONDAMMENT (kathir) au-del\u00e0 du point de sortie ANNULE le wudu. De m\u00eame, le vomissement abondant (qui remplit la bouche, mil\u2019 al-fam) annule le wudu. Un PETIT \u00e9coulement qui ne se propage pas au-del\u00e0 du point de sortie N\'annule PAS. Attention : c\'est une diff\u00e9rence majeure avec le Chafiite et le Malikite o\u00f9 ni le sang ni le vomissement n\'annulent le wudu quelle que soit la quantit\u00e9. R\u00e9f. : Zad al-Mustaqni\u2019 \u2014 \u00ab al-kharij al-kathir min ghayr as-sabilayn \u00bb.',
  },
];
