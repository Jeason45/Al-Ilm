import type { AblutionDefinition } from '../types';

/**
 * Tayammum selon l'école Hanafite — positions propres à l'école hanafite.
 *
 * Fard du tayammum Hanafi (3) :
 *   1. Niyyah (FARD ici — contrairement au wudu/ghusl où c'est sunnah)
 *   2. Frapper la terre + essuyer le visage
 *   3. Frapper la terre + essuyer les bras jusqu'aux coudes (inclus)
 *
 * Particularités Hanafi :
 *   - Niyyah = FARD (unique cas où elle est fard, car l'acte extérieur
 *     est indistinguable d'un geste ordinaire sans intention)
 *   - DEUX frappes sur la terre (pas une seule)
 *   - Bras essuyés JUSQU'AUX COUDES (pas seulement les poignets)
 *
 * Références : Nur al-Idah, Al-Hidayah, Radd al-Muhtar.
 */
export const tayammum: AblutionDefinition = {
  id: 'tayammum',
  name: 'Tayammum (Ablutions sèches)',
  nameAr: 'التيمم',
  description: 'Purification rituelle de substitution avec de la terre propre lorsque l\'eau n\'est pas disponible ou ne peut pas être utilisée. Selon l\'école hanafite, le tayammum nécessite DEUX frappes sur la terre et l\'essuyage des bras va jusqu\'aux coudes (inclus). La niyyah est FARD (seul cas en Hanafite où elle est obligatoire pour la purification).',
  conditions: [
    {
      id: 'h-tayammum-no-water',
      title: 'Absence d\'eau',
      titleAr: 'عدم وجود الماء',
      description: 'Lorsqu\'il n\'y a pas d\'eau disponible après une recherche raisonnable (environ 200 mètres dans chaque direction), ou que la quantité d\'eau est insuffisante pour le wudu.',
    },
    {
      id: 'h-tayammum-illness',
      title: 'Maladie ou blessure',
      titleAr: 'المرض أو الجرح',
      description: 'Lorsque l\'utilisation de l\'eau risque d\'aggraver une maladie, de retarder la guérison, ou de causer un préjudice sur une blessure (avis médical ou expérience personnelle fiable).',
    },
    {
      id: 'h-tayammum-cold',
      title: 'Froid extrême',
      titleAr: 'شدة البرد',
      description: 'Lorsque l\'utilisation de l\'eau froide risque de causer un tort grave (maladie, hypothermie) et qu\'il n\'y a aucun moyen de la chauffer ni d\'accéder à un abri chauffé.',
    },
    {
      id: 'h-tayammum-access',
      title: 'Eau inaccessible',
      titleAr: 'تعذر الوصول إلى الماء',
      description: 'Lorsque l\'eau existe mais qu\'on ne peut pas y accéder : danger sur le chemin, prix excessif, besoin vital de la conserver pour boire, ou eau détenue par quelqu\'un qui refuse de la donner.',
    },
  ],
  steps: [
    {
      id: 'h-tayammum-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le cœur de faire le tayammum pour se purifier afin de pouvoir prier. En Hanafite, la niyyah est FARD pour le tayammum (contrairement au wudu et au ghusl où elle est sunnah). La niyyah doit spécifier la purification (lever le hadath) ou la permission de prier.',
      ruling: 'fard',
    },
    {
      id: 'h-tayammum-2-strike-face',
      order: 2,
      name: 'Première frappe — Essuyer le visage',
      nameAr: 'الضربة الأولى — مسح الوجه',
      description: 'Frapper légèrement la surface de la terre propre (sable, pierre, mur naturel, sol) avec les deux paumes des mains ouvertes, doigts écartés. Souffler l\'excès de poussière. Puis essuyer l\'ensemble du visage avec les deux paumes, comme pour le wudu.',
      ruling: 'fard',
    },
    {
      id: 'h-tayammum-3-strike-arms',
      order: 3,
      name: 'Deuxième frappe — Essuyer les bras',
      nameAr: 'الضربة الثانية — مسح اليدين إلى المرفقين',
      description: 'Frapper la terre une DEUXIÈME fois avec les deux paumes. Puis essuyer le dos de la main droite et l\'avant-bras droit jusqu\'au coude inclus avec la paume gauche. Faire de même pour le bras gauche avec la paume droite. En Hanafite, les bras sont essuyés JUSQU\'AUX COUDES (pas seulement les poignets). Passer entre les doigts et retirer les bagues avant d\'essuyer.',
      ruling: 'fard',
    },
  ],
};
