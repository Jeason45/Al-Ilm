import type { AblutionDefinition } from './types';

export const tayammum: AblutionDefinition = {
  id: 'tayammum',
  name: 'Tayammum (Ablutions sèches)',
  nameAr: 'التيمم',
  description: 'Purification rituelle de substitution avec de la terre propre (ou toute surface naturelle) lorsque l\'eau n\'est pas disponible ou ne peut pas être utilisée.',
  conditions: [
    {
      id: 'tayammum-no-water',
      title: 'Absence d\'eau',
      titleAr: 'عدم وجود الماء',
      description: 'Lorsqu\'il n\'y a pas d\'eau disponible après une recherche raisonnable, ou que la quantité d\'eau est insuffisante pour le wudu.',
    },
    {
      id: 'tayammum-illness',
      title: 'Maladie ou blessure',
      titleAr: 'المرض أو الجرح',
      description: 'Lorsque l\'utilisation de l\'eau risque d\'aggraver une maladie, de retarder la guérison, ou de causer un préjudice sur une blessure.',
    },
    {
      id: 'tayammum-cold',
      title: 'Froid extrême',
      titleAr: 'شدة البرد',
      description: 'Lorsque l\'utilisation de l\'eau froide risque de causer un tort grave et qu\'il n\'y a aucun moyen de la chauffer.',
    },
    {
      id: 'tayammum-access',
      title: 'Eau inaccessible',
      titleAr: 'تعذر الوصول إلى الماء',
      description: 'Lorsque l\'eau existe mais qu\'on ne peut pas y accéder (danger, prix excessif, ou besoin vital de la conserver pour boire).',
    },
  ],
  steps: [
    {
      id: 'tayammum-1-niyyah',
      order: 1,
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      description: 'Formuler l\'intention dans le coeur de faire le tayammum pour se purifier afin de pouvoir prier.',
      ruling: 'fard',
    },
    {
      id: 'tayammum-2-strike',
      order: 2,
      name: 'Frapper la terre',
      nameAr: 'ضرب الأرض',
      description: 'Frapper légèrement la surface de la terre propre (sable, pierre, mur, sol naturel) avec les deux paumes des mains, une seule fois. Souffler l\'excès de poussière des mains.',
      ruling: 'fard',
      madhabNote: 'L\'école hanafite et chafiite exigent deux frappes : une pour le visage et une pour les bras. L\'école malikite et hanbalite acceptent une seule frappe.',
    },
    {
      id: 'tayammum-3-face',
      order: 3,
      name: 'Essuyer le visage',
      nameAr: 'مسح الوجه',
      description: 'Passer les deux paumes sur l\'ensemble du visage, comme pour le wudu, en couvrant toute la surface du front au menton.',
      ruling: 'fard',
    },
    {
      id: 'tayammum-4-hands',
      order: 4,
      name: 'Essuyer les mains et avant-bras',
      nameAr: 'مسح اليدين',
      description: 'Passer la paume gauche sur le dos de la main droite et l\'avant-bras droit jusqu\'au coude, puis faire la même chose avec la paume droite sur la main et l\'avant-bras gauches.',
      ruling: 'fard',
      madhabNote: 'L\'école malikite et hanbalite limitent l\'essuyage aux poignets uniquement. L\'école hanafite et chafiite incluent les avant-bras jusqu\'aux coudes.',
    },
  ],
};
