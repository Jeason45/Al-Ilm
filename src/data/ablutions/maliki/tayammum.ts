import type { AblutionDefinition } from '../types';

/**
 * Tayammum selon l'école Malikite — positions propres à l'école malikite.
 *
 * Fard du tayammum Malikite :
 *   1. Niyyah (FARD)
 *   2. Frapper la terre propre (sa'id)
 *   3. Essuyer le visage entier
 *   4. Essuyer les bras jusqu'aux coudes
 *   5. Tartib (ordre face → bras — FARD dans le tayammum, contrairement au wudu où c'est sunnah)
 *   6. Muwalat (continuité — FARD, comme dans le wudu)
 *
 * Particularités Malikite :
 *   - Un tayammum n'est valide que pour UNE SEULE prière fard (renouvelé pour chaque prière obligatoire)
 *   - Deux frappes (une pour le visage, une pour les bras)
 *   - Bras jusqu'aux coudes (position mashhur)
 *   - Tartib = FARD dans le tayammum (alors que sunnah dans le wudu)
 *   - Muwalat = FARD dans le tayammum
 *   - Le tayammum ne lève PAS l'impureté — il permet seulement la prière
 *   - Rapport sexuel interdit après les menstrues si seul tayammum fait (doit faire ghusl avec eau)
 *   - IMPORTANT : le tayammum après les menstrues (hayd) permet la prière mais ne PERMET PAS les rapports conjugaux
 *   - Surfaces valides : terre, sable, pierres. Pas : bois, herbe, briques cuites.
 *
 * Références : Al-Risala, Mukhtasar Khalil.
 */
export const tayammum: AblutionDefinition = {
  id: 'tayammum',
  name: 'Tayammum (Ablutions sèches)',
  nameAr: 'التيمم',
  description: 'Purification rituelle de substitution avec de la terre propre. Selon l\'école malikite, le tayammum NE LÈVE PAS l\'impureté — il permet seulement de prier. En Malikite, un tayammum n\'est valide que pour UNE SEULE prière fard. Il faut renouveler le tayammum pour chaque prière obligatoire. C\'est une particularité partagée avec le Chafiite. En Hanafite et Hanbalite, un tayammum suffit pour plusieurs prières fard. Deux frappes sur la terre, bras essuyés jusqu\'aux coudes. Le tartib (ordre) et la muwalat (continuité) sont FARD dans le tayammum. En Malikite, le tayammum doit être effectué APRÈS l\'entrée du temps de la prière (pas avant). Un tayammum fait avant l\'entrée du temps n\'est pas valide pour cette prière. IMPORTANT : Le tayammum après les menstrues (hayd) permet la prière mais ne PERMET PAS les rapports conjugaux. L\'époux doit attendre que la femme fasse le ghusl avec de l\'eau.',
  conditions: [
    {
      id: 'm-tayammum-no-water',
      title: 'Absence d\'eau',
      titleAr: 'عدم وجود الماء',
      description: 'Lorsqu\'il n\'y a pas d\'eau disponible après une recherche raisonnable.',
    },
    {
      id: 'm-tayammum-illness',
      title: 'Maladie ou blessure',
      titleAr: 'المرض أو الجرح',
      description: 'Lorsque l\'utilisation de l\'eau risque d\'aggraver une maladie, retarder la guérison, ou causer un préjudice.',
    },
    {
      id: 'm-tayammum-cold',
      title: 'Froid extrême',
      titleAr: 'شدة البرد',
      description: 'Lorsque l\'eau froide risque de causer un tort grave et qu\'il n\'y a aucun moyen de la chauffer.',
    },
    {
      id: 'm-tayammum-access',
      title: 'Eau inaccessible',
      titleAr: 'تعذر الوصول إلى الماء',
      description: 'Lorsque l\'eau existe mais est inaccessible (danger, prix excessif, besoin vital de boire).',
    },
  ],
  steps: [
    {
      id: 'm-tayammum-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention de faire le tayammum pour rendre la prière permise. FARD en Malikite. La niyyah doit spécifier la permission de prier (pas la levée d\'impureté, car le tayammum ne lève pas l\'impureté en Malikite).',
      ruling: 'fard',
      madhabNote: 'En Malikite, un tayammum n\'est valide que pour UNE SEULE prière fard. Il faut renouveler le tayammum pour chaque prière obligatoire. C\'est une particularité partagée avec le Chafiite. En Hanafite et Hanbalite, un tayammum suffit pour plusieurs prières fard.',
    },
    {
      id: 'm-tayammum-2-strike-face',
      order: 2,
      name: 'Première frappe — Essuyer le visage',
      nameAr: 'الضربة الأولى — مسح الوجه',
      description: 'Frapper légèrement la surface de la terre propre (terre, sable, pierre) avec les deux paumes, doigts écartés. Secouer légèrement les mains pour enlever l\'excès de poussière (sunnah). Puis essuyer l\'ensemble du visage. Le dalk (frottement) est inhérent dans l\'essuyage du tayammum — le fait de frotter le visage et les bras avec les mains constitue naturellement le dalk. Surfaces non valides : bois, herbe, briques cuites, chaux.',
      ruling: 'fard',
    },
    {
      id: 'm-tayammum-3-strike-arms',
      order: 3,
      name: 'Deuxième frappe — Essuyer les bras',
      nameAr: 'الضربة الثانية — مسح اليدين إلى المرفقين',
      description: 'Frapper la terre une deuxième fois. Essuyer le bras droit puis le bras gauche jusqu\'aux coudes inclus (position mashhur). Essuyer les pouces spécifiquement. Le tartib (visage AVANT bras) est FARD dans le tayammum. La muwalat (continuité) est aussi FARD.',
      ruling: 'fard',
    },
  ],
};
