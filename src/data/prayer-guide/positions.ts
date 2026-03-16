import type { PrayerPosition } from './types';

export const positions: PrayerPosition[] = [
  // ─── Positions de prière ───
  {
    id: 'qiyam',
    name: 'Debout (Qiyam)',
    nameAr: 'قيام',
    imagePath: '/images/prayer/qiyam.png',
    description: 'Le prieur se tient debout, parfaitement droit, le corps aligné verticalement. Les pieds sont écartés de la largeur des épaules environ, parallèles, les orteils orientés vers la qibla (direction de la Mecque). Le regard est dirigé vers le sol, à l\'endroit où le front touchera lors de la prosternation. Les bras pendent naturellement le long du corps. Le dos est droit, les épaules détendues, la tête dans le prolongement de la colonne vertébrale sans inclinaison.',
  },
  {
    id: 'takbir',
    name: 'Takbir al-Ihram',
    nameAr: 'تكبيرة الإحرام',
    imagePath: '/images/prayer/takbir.png',
    description: 'Le prieur est debout, droit. Les deux mains sont levées de chaque côté de la tête, paumes ouvertes face à la qibla, les doigts légèrement écartés et détendus. Les coudes sont fléchis. Le regard est dirigé vers le sol. Ce geste accompagne la prononciation de « Allahu Akbar ».',
    madhabNotes: [
      'Hanafites : les pouces au niveau des lobes des oreilles.',
      'Shafi\'ites : les mains au niveau des épaules (doigts au niveau du haut des oreilles, paumes au niveau des épaules).',
      'Malikites : les mains au niveau des épaules ou de la poitrine. Certains savants malikites considèrent que lever les mains n\'est pas obligatoire.',
      'Hanbalites : les mains au niveau des épaules.',
    ],
  },
  {
    id: 'qiyam-hands',
    name: 'Debout mains croisées',
    nameAr: 'وضع اليدين',
    imagePath: '/images/prayer/qiyam-hands.png',
    description: 'Le prieur est debout, droit. La main droite est posée sur le dos de la main gauche (ou saisit le poignet gauche). Le regard est dirigé vers le sol, au point de prosternation. Le dos est parfaitement droit.',
    madhabNotes: [
      'Hanafites : les mains sont placées sous le nombril.',
      'Shafi\'ites et Hanbalites : les mains sont placées sur la poitrine.',
      'Malikites : dans la prière obligatoire, l\'imam Malik considérait le sadl (bras le long du corps) comme préférable. Le qabd (mains croisées) reste permis et est pratiqué par certains malikites, notamment dans les prières surérogatoires.',
    ],
  },
  {
    id: 'ruku',
    name: 'Inclinaison (Ruku)',
    nameAr: 'ركوع',
    imagePath: '/images/prayer/ruku.png',
    description: 'Le prieur s\'incline vers l\'avant à partir des hanches, le dos plat et horizontal. Le dos forme un angle d\'environ 90° avec les jambes. Les jambes sont droites, sans fléchir les genoux. Les mains saisissent fermement les genoux, les doigts écartés enveloppant les rotules. Les bras sont tendus. La tête est dans le prolongement du dos, ni relevée ni baissée — le regard est dirigé vers les pieds. Le cou est détendu et aligné avec la colonne vertébrale.',
  },
  {
    id: 'itidal',
    name: 'Redressement (I\'tidal)',
    nameAr: 'اعتدال',
    imagePath: '/images/prayer/itidal.png',
    description: 'Le prieur se redresse complètement après l\'inclinaison (ruku) pour revenir à la position debout. Le corps est droit et immobile (tuma\'nina — quiétude). Les bras retombent naturellement le long du corps. Le dos est droit, les épaules en arrière. Le regard est dirigé vers le sol. C\'est une position de transition brève mais distincte — le prieur doit marquer un arrêt complet avant de descendre en prosternation.',
  },
  {
    id: 'sujud',
    name: 'Prosternation (Sujud)',
    nameAr: 'سجود',
    imagePath: '/images/prayer/sujud.png',
    description: 'Le prieur est au sol, prosterné. Sept parties du corps touchent le sol simultanément : le front avec le nez, les deux paumes des mains, les deux genoux, et les orteils des deux pieds (repliés vers la qibla). Les mains sont posées à plat, au niveau des épaules ou des oreilles, les doigts joints et dirigés vers la qibla. Les pieds sont dressés sur les orteils, les talons vers le ciel. Le front et le nez touchent directement le sol.',
    madhabNotes: [
      'L\'ordre pour descendre au sol est discuté : les Hanafites et Malikites préconisent les genoux d\'abord, puis les mains. Les Hanbalites et certains Shafi\'ites préconisent les mains d\'abord.',
    ],
  },
  {
    id: 'julus',
    name: 'Assis (Julus)',
    nameAr: 'جلوس',
    imagePath: '/images/prayer/julus.png',
    description: 'Le prieur est assis entre les deux prosternations. Les mains sont posées à plat sur les cuisses, près des genoux, les doigts détendus et orientés vers les genoux. Le dos est droit, le regard dirigé vers le sol. C\'est la position d\'assise brève entre les deux prosternations.',
    madhabNotes: [
      'Position iftirash (consensus majoritaire) : le pied gauche est couché et on s\'assied dessus, le pied droit est dressé verticalement sur les orteils.',
    ],
  },
  {
    id: 'tashahud',
    name: 'Tashahud',
    nameAr: 'تشهد',
    imagePath: '/images/prayer/tashahud.png',
    description: 'Le prieur est assis, le dos droit. La main gauche est posée à plat sur la cuisse gauche. La main droite est posée sur la cuisse droite : le poing est légèrement fermé sauf l\'index qui est tendu et pointé vers la qibla. L\'index est levé au moment de la shahada (attestation de foi). Le regard est fixé sur l\'index pointé.',
    madhabNotes: [
      'Pour le tashahud final (dernier) : la position tawarruk est recommandée par les Hanbalites et certains Shafi\'ites — le pied gauche sort du côté droit sous la jambe droite, on s\'assied sur le sol. Les Hanafites et Malikites gardent la position iftirash pour tous les tashahud.',
      'Pour le premier tashahud (dans les prières de 3 ou 4 rak\'at) : toutes les écoles s\'accordent sur la position iftirash.',
      'La manière de pointer l\'index varie : les Hanafites lèvent l\'index à « la ilaha » et le baissent à « illallah ». Les Shafi\'ites le lèvent à « illallah » uniquement. Les Malikites le bougent de droite à gauche pendant tout le tashahud.',
    ],
  },
  {
    id: 'salam',
    name: 'Salutations (Salam)',
    nameAr: 'سلام',
    imagePath: '/images/prayer/salam.png',
    description: 'Le prieur est en position assise (même position que le tashahud). Il tourne la tête vers la droite en prononçant le premier salam — le visage se tourne suffisamment pour que la joue droite soit visible de derrière. Puis il tourne la tête vers la gauche pour le second salam. Le reste du corps ne bouge pas, seule la tête pivote. Le regard suit le mouvement de la tête.',
    madhabNotes: [
      'Les Malikites considèrent qu\'un seul salam (vers la droite) suffit comme obligation. Le second salam à gauche est sunnah.',
      'Les Hanafites, Shafi\'ites et Hanbalites considèrent les deux salams comme partie intégrante de la prière.',
    ],
  },
  {
    id: 'qunut',
    name: 'Qunut',
    nameAr: 'قنوت',
    imagePath: '/images/prayer/qunut.png',
    description: 'Le prieur est debout (qiyam), droit. Les deux mains sont levées devant la poitrine, paumes tournées vers le ciel, côte à côte. Les mains sont au niveau de la poitrine ou légèrement plus haut. Les coudes sont fléchis, les avant-bras à environ 45° du corps. C\'est la position d\'invocation (du\'a) debout.',
    madhabNotes: [
      'Shafi\'ites : le qunut est récité dans la deuxième rak\'a du Fajr, après le redressement du ruku, tous les jours.',
      'Hanafites : le qunut est récité dans la troisième rak\'a du Witr uniquement.',
      'Malikites et Hanbalites : le qunut du Fajr n\'est pas pratiqué en temps normal, seulement lors de calamités (qunut an-nazila).',
    ],
  },

  // ─── Positions du Wudu (ablutions) ───
  {
    id: 'wudu-hands',
    name: 'Lavage des mains',
    nameAr: 'غسل اليدين',
    imagePath: '/images/prayer/wudu-hands.png',
    description: 'La personne se tient debout devant un point d\'eau (robinet, fontaine). Les deux mains sont tendues sous le jet d\'eau, paumes vers le haut. La personne frotte les deux mains l\'une contre l\'autre, entre les doigts, en entrelaçant les doigts pour laver les espaces interdigitaux. Les mains sont lavées jusqu\'aux poignets. Le geste est répété trois fois.',
  },
  {
    id: 'wudu-mouth',
    name: 'Rinçage de la bouche',
    nameAr: 'المضمضة',
    imagePath: '/images/prayer/wudu-mouth.png',
    description: 'La personne prend de l\'eau dans la main droite (paume creusée en coupe) et la porte à la bouche. L\'eau est introduite dans la bouche pour la rincer vigoureusement, en la faisant circuler dans toute la cavité buccale. L\'eau est ensuite recrachée. Le geste est répété trois fois.',
  },
  {
    id: 'wudu-nose',
    name: 'Rinçage du nez',
    nameAr: 'الاستنشاق',
    imagePath: '/images/prayer/wudu-nose.png',
    description: 'La personne prend de l\'eau dans la main droite (paume creusée) et l\'aspire légèrement par les narines (istinshaq). Puis elle se mouche avec la main gauche pour expulser l\'eau (istinthar). Le geste est répété trois fois. La main droite amène l\'eau au nez, la main gauche sert à expulser.',
  },
  {
    id: 'wudu-face',
    name: 'Lavage du visage',
    nameAr: 'غسل الوجه',
    imagePath: '/images/prayer/wudu-face.png',
    description: 'La personne prend de l\'eau dans les deux mains jointes (paumes creusées formant un bol) et la verse sur le visage. Le visage est lavé entièrement : du haut du front (naissance des cheveux) jusqu\'au bas du menton verticalement, et d\'une oreille à l\'autre horizontalement. L\'eau doit atteindre toute la surface de la peau du visage. Le geste est répété trois fois.',
  },
  {
    id: 'wudu-arms',
    name: 'Lavage des bras',
    nameAr: 'غسل اليدين إلى المرفقين',
    imagePath: '/images/prayer/wudu-arms.png',
    description: 'La personne lave le bras droit en premier, puis le gauche. Le bras est tendu sous le jet d\'eau. Avec la main opposée, la personne frotte depuis le bout des doigts jusqu\'au-dessus du coude (le coude est inclus dans le lavage). L\'eau doit couvrir toute la surface de l\'avant-bras et de la main, y compris entre les doigts et sous les ongles. Le geste est répété trois fois pour chaque bras.',
  },
  {
    id: 'wudu-head',
    name: 'Essuyage de la tête',
    nameAr: 'مسح الرأس',
    imagePath: '/images/prayer/wudu-head.png',
    description: 'La personne mouille ses deux mains avec de l\'eau fraîche. Les mains mouillées sont posées sur le devant de la tête (au niveau de la naissance des cheveux) et glissent vers l\'arrière jusqu\'à la nuque, puis reviennent vers l\'avant. C\'est un aller-retour unique. Les doigts sont légèrement écartés pour couvrir toute la surface du crâne. Ce geste est fait une seule fois.',
    madhabNotes: [
      'Shafi\'ites : il suffit d\'essuyer une partie de la tête (minimum un quart selon certains, ou même quelques cheveux).',
      'Malikites et Hanbalites : il faut essuyer la totalité de la tête.',
      'Hanafites : il faut essuyer au minimum un quart de la tête.',
    ],
  },
  {
    id: 'wudu-ears',
    name: 'Essuyage des oreilles',
    nameAr: 'مسح الأذنين',
    imagePath: '/images/prayer/wudu-ears.png',
    description: 'Avec l\'eau restante sur les mains (ou de l\'eau fraîche), la personne essuie les oreilles. Les index sont insérés dans les ouvertures des oreilles pour essuyer l\'intérieur des pavillons. Les pouces passent derrière les oreilles pour essuyer l\'arrière des pavillons auriculaires. Le geste couvre l\'intérieur et l\'extérieur de chaque oreille. Ce geste est fait une seule fois.',
  },
  {
    id: 'wudu-feet',
    name: 'Lavage des pieds',
    nameAr: 'غسل القدمين',
    imagePath: '/images/prayer/wudu-feet.png',
    description: 'La personne lave le pied droit en premier, puis le gauche. Avec la main, la personne frotte tout le pied : le dessus, la plante, les côtés et entre chaque orteil. Le petit doigt de la main passe entre les orteils pour nettoyer les espaces interdigitaux. L\'eau doit atteindre au-dessus de la cheville (la cheville est incluse dans le lavage). Le geste est répété trois fois pour chaque pied.',
  },
];

export function getPosition(id: string): PrayerPosition | undefined {
  return positions.find(p => p.id === id);
}
