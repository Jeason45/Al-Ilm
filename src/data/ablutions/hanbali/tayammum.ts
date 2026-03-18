import type { AblutionDefinition } from '../types';

/**
 * Tayammum selon l'école Hanbalite — positions propres à l'école hanbalite.
 *
 * Fard du tayammum Hanbalite :
 *   1. Niyyah (FARD)
 *   2. UNE SEULE frappe (contrairement au Chafiite qui en fait deux !)
 *   3. Essuyer le visage
 *   4. Essuyer les mains jusqu'aux POIGNETS seulement (contrairement au Chafiite qui va aux coudes !)
 *   5. Tartib (FARD — visage avant mains)
 *   6. Muwalat (FARD — comme dans le wudu)
 *
 * Particularités Hanbalites MAJEURES :
 *   - UNE SEULE frappe (pas deux comme en Chafiite)
 *   - Mains jusqu'aux POIGNETS seulement (pas aux coudes comme en Chafiite)
 *   - Un tayammum = PLUSIEURS prières fard (contrairement au Chafiite : 1 tayammum = 1 fard)
 *   - Tartib = FARD
 *   - Muwalat = FARD
 *   - Surface : terre pure (turab) avec particules de poussière
 *   - Annulé par : tout ce qui annule le wudu + voir de l'eau (si fait pour absence) + fin de l'excuse
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi' (al-Buhuti),
 *              Kashaf al-Qina' (al-Buhuti).
 */
export const tayammum: AblutionDefinition = {
  id: 'tayammum',
  name: 'Tayammum (Ablutions s\u00e8ches)',
  nameAr: '\u0627\u0644\u062a\u064a\u0645\u0645',
  description: 'Purification rituelle de substitution avec de la terre propre. En Hanbalite : UNE SEULE frappe, mains essuy\u00e9es jusqu\'aux POIGNETS seulement (pas aux coudes comme en Chafiite). Un tayammum vaut pour PLUSIEURS pri\u00e8res fard (contrairement au Chafiite o\u00f9 1 tayammum = 1 fard). Le tartib et la muwalat sont FARD.',
  conditions: [
    {
      id: 'h-tayammum-no-water',
      title: 'Absence d\'eau',
      titleAr: '\u0639\u062f\u0645 \u0648\u062c\u0648\u062f \u0627\u0644\u0645\u0627\u0621',
      description: 'Lorsqu\'il n\'y a pas d\'eau disponible apr\u00e8s une recherche raisonnable. Si de l\'eau est trouv\u00e9e apr\u00e8s le tayammum, celui-ci est annul\u00e9. En Hanbalite, le tayammum fait pour absence d\'eau est annul\u00e9 d\u00e8s que l\'eau est trouv\u00e9e \u2014 m\u00eame si on est en pleine pri\u00e8re, la pri\u00e8re est invalid\u00e9e (sauf si l\'eau est trouv\u00e9e apr\u00e8s la pri\u00e8re, auquel cas la pri\u00e8re reste valide).',
    },
    {
      id: 'h-tayammum-illness',
      title: 'Maladie ou blessure',
      titleAr: '\u0627\u0644\u0645\u0631\u0636 \u0623\u0648 \u0627\u0644\u062c\u0631\u062d',
      description: 'Lorsque l\'utilisation de l\'eau risque d\'aggraver une maladie, retarder la gu\u00e9rison, ou causer un pr\u00e9judice corporel. Le tayammum reste valide tant que l\'excuse persiste.',
    },
    {
      id: 'h-tayammum-cold',
      title: 'Froid extr\u00eame',
      titleAr: '\u0634\u062f\u0629 \u0627\u0644\u0628\u0631\u062f',
      description: 'Lorsque l\'eau froide risque de causer un tort grave et qu\'il n\'y a aucun moyen de la chauffer. Condition : il faut que le froid soit r\u00e9ellement dangereux pour la sant\u00e9.',
    },
    {
      id: 'h-tayammum-access',
      title: 'Eau inaccessible',
      titleAr: '\u062a\u0639\u0630\u0631 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u0627\u0621',
      description: 'Lorsque l\'eau existe mais est inaccessible (danger sur le chemin, prix excessif, besoin vital de boire). Le besoin de boire prime sur l\'utilisation pour le wudu.',
    },
  ],
  steps: [
    {
      id: 'h-tayammum-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: '\u0627\u0644\u0646\u064a\u0629',
      description: 'Formuler l\'intention de faire le tayammum pour rendre permise la pri\u00e8re (istibahat as-salat). FARD en Hanbalite. Contrairement au Chafiite, un seul tayammum permet de prier PLUSIEURS pri\u00e8res fard \u2014 il n\'est pas n\u00e9cessaire de refaire le tayammum pour chaque pri\u00e8re obligatoire. Le tayammum reste valide tant qu\'aucun annulateur ne survient.',
      ruling: 'fard',
      madhabNote: 'Un tayammum = PLUSIEURS pri\u00e8res fard en Hanbalite (et dans les trois autres \u00e9coles). Le Chafiite est la SEULE \u00e9cole qui limite un tayammum \u00e0 une seule pri\u00e8re fard.',
    },
    {
      id: 'h-tayammum-2-bismillah',
      order: 2,
      name: 'Dire Bismillah',
      nameAr: '\u0628\u0633\u0645 \u0627\u0644\u0644\u0647',
      description: 'Prononcer \u00ab Bismillah \u00bb avant de commencer. WAJIB en Hanbalite, comme dans le wudu et le ghusl. La bismillah est obligatoire dans toutes les purifications en Hanbalite.',
      ruling: 'wajib',
    },
    {
      id: 'h-tayammum-3-strike',
      order: 3,
      name: 'Frappe unique \u2014 Essuyer le visage puis les mains',
      nameAr: '\u0627\u0644\u0636\u0631\u0628\u0629 \u0627\u0644\u0648\u0627\u062d\u062f\u0629 \u2014 \u0645\u0633\u062d \u0627\u0644\u0648\u062c\u0647 \u062b\u0645 \u0627\u0644\u064a\u062f\u064a\u0646',
      description: 'Frapper l\u00e9g\u00e8rement la surface de la terre propre (turab \u2014 terre avec particules de poussi\u00e8re) avec les deux paumes ouvertes, doigts \u00e9cart\u00e9s. Secouer l\u00e9g\u00e8rement les mains pour enlever l\'exc\u00e8s (sunnah). UNE SEULE frappe en Hanbalite (contrairement au Chafiite qui fait DEUX frappes). Surfaces valides : terre pure (turab) qui a des particules de poussi\u00e8re. En Hanbalite, le sable sans particules de poussi\u00e8re (turab) N\'est PAS valide pour le tayammum. La surface doit avoir de la poussi\u00e8re qui adh\u00e8re aux mains. C\'est plus restrictif que les \u00e9coles hanafite et malikite qui acceptent toute surface min\u00e9rale terrestre.',
      ruling: 'fard',
      madhabNote: 'UNE seule frappe en Hanbalite et Malikite. DEUX frappes en Chafiite (position mu\'tamad de Nawawi). En Hanafite, deux frappes \u00e9galement. Bas\u00e9 sur le hadith d\'Ammar ibn Yasir (Bukhari/Muslim) : \u00ab Il te suffit de frapper la terre une fois, puis d\'essuyer ton visage et tes mains. \u00bb',
    },
    {
      id: 'h-tayammum-4-face',
      order: 4,
      name: 'Essuyer le visage',
      nameAr: '\u0645\u0633\u062d \u0627\u0644\u0648\u062c\u0647',
      description: 'Essuyer l\'ensemble du visage avec les paumes. Le TARTIB est FARD en Hanbalite : le visage DOIT \u00eatre essuy\u00e9 AVANT les mains. La MUWALAT est \u00e9galement FARD : ne pas laisser un long d\u00e9lai entre l\'essuyage du visage et celui des mains.',
      ruling: 'fard',
    },
    {
      id: 'h-tayammum-5-hands',
      order: 5,
      name: 'Essuyer les mains jusqu\'aux POIGNETS',
      nameAr: '\u0645\u0633\u062d \u0627\u0644\u064a\u062f\u064a\u0646 \u0625\u0644\u0649 \u0627\u0644\u0643\u0641\u064a\u0646',
      description: 'Essuyer la main droite puis la main gauche jusqu\'aux POIGNETS seulement. C\'est une position UNIQUE au Hanbalite \u2014 en Chafiite, l\'essuyage va jusqu\'aux COUDES. La position hanbalite est bas\u00e9e sur le hadith d\'Ammar ibn Yasir o\u00f9 le Proph\u00e8te \u1e63 a mentionn\u00e9 les mains (kaffayn) sans mentionner les avant-bras. Passer les doigts d\'une main entre ceux de l\'autre et essuyer entre les doigts.',
      ruling: 'fard',
      madhabNote: 'Jusqu\'aux POIGNETS en Hanbalite et Malikite. Jusqu\'aux COUDES en Chafiite (position mu\'tamad de Nawawi) et Hanafite. La divergence porte sur l\'interpr\u00e9tation du mot \u00ab yadayn \u00bb (mains ou avant-bras ?).',
    },
  ],
};
