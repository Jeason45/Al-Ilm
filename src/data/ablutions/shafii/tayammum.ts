import type { AblutionDefinition } from '../types';

/**
 * Tayammum selon l'école Chafiite — positions propres à l'école chafiite.
 *
 * Fard du tayammum Chafiite :
 *   1. Niyyah (FARD — doit spécifier pour quelle prière ou quel type de permission)
 *   2. Frapper la terre propre (sa'id tahur)
 *   3. Essuyer le visage
 *   4. Essuyer les bras jusqu'aux coudes (position mu'tamad selon Nawawi)
 *   5. Tartib (ordre visage → bras — FARD)
 *
 * Particularités Chafiites MAJEURES :
 *   - UN tayammum = UNE prière fard UNIQUEMENT ! (UNIQUE au Chafiite)
 *     Il faut refaire le tayammum pour chaque nouvelle prière fard.
 *     Avec un seul tayammum on peut prier une fard + autant de nafl qu'on veut.
 *   - DEUX frappes (position retenue dans al-jadid/nouveau madhhab)
 *   - Bras jusqu'aux COUDES (position mu'tamad de Nawawi dans Al-Majmu')
 *   - Tartib = FARD (visage avant bras)
 *   - Muwalat = PAS fard (contrairement au Malikite)
 *   - Annulé par : tout ce qui annule le wudu + voir de l'eau (si fait pour absence d'eau)
 *     + fin de l'excuse (guérison de la maladie, fin du froid extrême, etc.)
 *   - Surface valide : terre pure (turab) qui a des particules de poussière.
 *     Le sable avec poussière est accepté. Les pierres pures sans poussière sont débattues.
 *
 * Références : Al-Umm, Al-Majmu' (Nawawi), Minhaj at-Talibin, Tuhfat al-Muhtaj.
 */
export const tayammum: AblutionDefinition = {
  id: 'tayammum',
  name: 'Tayammum (Ablutions sèches)',
  nameAr: 'التيمم',
  description: 'Purification rituelle de substitution avec de la terre propre. ATTENTION en Chafiite : un tayammum ne vaut que pour UNE SEULE prière fard ! Il faut en refaire un pour chaque nouvelle prière fard (on peut cependant prier autant de nafl qu\'on veut avec). Deux frappes, bras essuyés jusqu\'aux coudes. Le tartib est FARD, la muwalat n\'est PAS fard. Le tayammum est également annulé si le temps de la prière visée expire sans avoir prié.',
  conditions: [
    {
      id: 's-tayammum-no-water',
      title: 'Absence d\'eau',
      titleAr: 'عدم وجود الماء',
      description: 'Lorsqu\'il n\'y a pas d\'eau disponible après une recherche raisonnable. Si de l\'eau est trouvée après le tayammum mais AVANT la prière, le tayammum est annulé. De même, si l\'excuse cesse (guérison, fin du froid, accès retrouvé à l\'eau), le tayammum est annulé même si on n\'a pas encore prié.',
    },
    {
      id: 's-tayammum-illness',
      title: 'Maladie ou blessure',
      titleAr: 'المرض أو الجرح',
      description: 'Lorsque l\'utilisation de l\'eau risque d\'aggraver une maladie, retarder la guérison, ou causer un préjudice corporel.',
    },
    {
      id: 's-tayammum-cold',
      title: 'Froid extrême',
      titleAr: 'شدة البرد',
      description: 'Lorsque l\'eau froide risque de causer un tort grave et qu\'il n\'y a aucun moyen de la chauffer. Condition : il faut que le froid soit réellement dangereux pour la santé.',
    },
    {
      id: 's-tayammum-access',
      title: 'Eau inaccessible',
      titleAr: 'تعذر الوصول إلى الماء',
      description: 'Lorsque l\'eau existe mais est inaccessible (danger sur le chemin, prix excessif, besoin vital de boire).',
    },
  ],
  steps: [
    {
      id: 's-tayammum-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention de faire le tayammum pour rendre permise la prière (istibahat as-salat). FARD en Chafiite. La position mu\'tamad est qu\'il suffit d\'avoir l\'intention de « rendre permise une prière fard » sans nécessairement nommer la prière spécifique. Cependant, un tayammum ne vaut que pour UNE seule prière fard — il faudra en refaire un pour la prière suivante. Pour les nafl, une intention générale suffit. ATTENTION : Si l\'on fait l\'intention de tayammum pour une prière surérogatoire (nafl) uniquement, on ne peut PAS accomplir une prière obligatoire (fard) avec ce tayammum. L\'intention doit viser au minimum « rendre permise une prière fard » (istibahat as-salat al-fard) pour pouvoir prier le fard.',
      ruling: 'fard',
    },
    {
      id: 's-tayammum-2-strike-face',
      order: 2,
      name: 'Première frappe — Essuyer le visage',
      nameAr: 'الضربة الأولى — مسح الوجه',
      description: 'Frapper légèrement la surface de la terre propre (turab — terre avec particules de poussière) avec les deux paumes ouvertes, doigts écartés. Secouer légèrement les mains pour enlever l\'excès (sunnah). Essuyer l\'ensemble du visage. La position mu\'tamad (al-jadid) requiert de la terre (turab) avec des particules de poussière. La position ancienne (al-qadim) accepte toute surface minérale de la terre (pierre, sable). Beaucoup de fuqaha acceptent la pierre (hajar) car elle est d\'origine terrestre. Le sable avec poussière est accepté.',
      ruling: 'fard',
    },
    {
      id: 's-tayammum-3-strike-arms',
      order: 3,
      name: 'Deuxième frappe — Essuyer les bras',
      nameAr: 'الضربة الثانية — مسح اليدين إلى المرفقين',
      description: 'Frapper la terre une deuxième fois. Essuyer le bras droit puis le bras gauche jusqu\'aux COUDES inclus (position mu\'tamad retenue par Nawawi dans Al-Majmu\'). Le tartib (visage AVANT bras) est FARD. La muwalat (continuité) n\'est PAS fard en Chafiite (contrairement au Malikite) — on peut s\'interrompre et reprendre.',
      ruling: 'fard',
    },
  ],
};
