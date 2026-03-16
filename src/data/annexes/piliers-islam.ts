import type { PilierIslam } from '../types';

export const piliersIslam: PilierIslam[] = [
  {
    numero: 1,
    nom: "La Shahada (Attestation de foi)",
    nomArabe: "الشَّهَادَة",
    icon: "MessageCircle",
    description: "La Shahada est la déclaration de foi, le premier et le plus fondamental des piliers de l'Islam. Elle consiste à attester qu'il n'y a de divinité digne d'adoration qu'Allah et que Muhammad est Son messager.",
    preuves: [
      "Le Prophète ﷺ a dit : « L'Islam est bâti sur cinq piliers : l'attestation qu'il n'y a de divinité qu'Allah et que Muhammad est le messager d'Allah, l'accomplissement de la prière, l'acquittement de la Zakat, le pèlerinage à la Maison sacrée et le jeûne du Ramadan. » (Bukhari & Muslim)",
      "Allah dit : « Il n'y a point de divinité à part Allah. » (Sourate Muhammad, 47:19)",
      "« Muhammad n'est qu'un messager. Des messagers avant lui sont passés. » (Sourate Al-Imran, 3:144)"
    ],
    details: [
      "La formule complète est : « Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasulu Allah » — « J'atteste qu'il n'y a de divinité qu'Allah et j'atteste que Muhammad est le messager d'Allah. »",
      "Cette attestation contient deux parties indissociables : le tawhid (unicité d'Allah) et la reconnaissance de la prophétie de Muhammad ﷺ comme sceau des prophètes.",
      "Prononcer la Shahada avec sincérité et conviction est la condition d'entrée en Islam. Elle implique de croire fermement en son contenu, de la prononcer, et d'agir en conséquence.",
      "La Shahada est récitée dans l'appel à la prière (adhan), dans la prière (tashahhud), à la naissance d'un enfant (à son oreille), et au moment de la mort."
    ]
  },
  {
    numero: 2,
    nom: "La Salat (Prière rituelle)",
    nomArabe: "الصَّلَاة",
    icon: "HandMetal",
    description: "La Salat est la prière rituelle obligatoire accomplie cinq fois par jour. Elle est le lien direct entre le serviteur et son Seigneur, et constitue le deuxième pilier de l'Islam.",
    preuves: [
      "Allah dit : « Accomplis la prière, car la prière préserve de la turpitude et du blâmable. » (Sourate Al-Ankabut, 29:45)",
      "Le Prophète ﷺ a dit : « Le pacte entre nous et eux (les non-croyants) est la prière. Celui qui l'abandonne a mécru. » (Ahmad, Tirmidhi, An-Nasai)",
      "Allah dit : « Certes, la prière est prescrite aux croyants à des heures déterminées. » (Sourate An-Nisa, 4:103)"
    ],
    details: [
      "Les cinq prières quotidiennes sont : Fajr (aube, 2 rak'at), Dhuhr (midi, 4 rak'at), Asr (après-midi, 4 rak'at), Maghrib (coucher du soleil, 3 rak'at), Isha (nuit, 4 rak'at).",
      "La prière a été prescrite lors du voyage nocturne (Isra wal Mi'raj) du Prophète ﷺ. Initialement 50 prières, elles furent réduites à 5 par la miséricorde d'Allah, mais avec la récompense de 50.",
      "Conditions de validité : être musulman, pubère, sain d'esprit, en état de pureté rituelle (wudu), habillé décemment, orienté vers la Qibla (La Mecque), et avoir l'intention (niyyah).",
      "La prière en congrégation à la mosquée est 27 fois plus méritoire que la prière individuelle (Bukhari & Muslim). La prière du vendredi (Jumu'a) est obligatoire pour les hommes."
    ]
  },
  {
    numero: 3,
    nom: "La Zakat (Aumône obligatoire)",
    nomArabe: "الزَّكَاة",
    icon: "HandCoins",
    description: "La Zakat est l'aumône obligatoire que tout musulman possédant un patrimoine au-dessus du seuil minimum (nisab) doit verser annuellement. Elle purifie les biens et redistribue la richesse.",
    preuves: [
      "Allah dit : « Prélevez de leurs biens une aumône par laquelle vous les purifiez et les rendez purs. » (Sourate At-Tawba, 9:103)",
      "Allah dit : « Accomplissez la prière et acquittez la Zakat. » (Sourate Al-Baqara, 2:43)",
      "Le Prophète ﷺ a dit : « Quiconque possède de l'or ou de l'argent et n'en paie pas le droit (la Zakat), on lui fera, au Jour de la Résurrection, des plaques de feu avec lesquelles on lui brûlera les flancs, le front et le dos. » (Muslim)"
    ],
    details: [
      "Le taux de la Zakat est de 2,5% (1/40e) de l'épargne et des biens éligibles détenus pendant une année lunaire complète.",
      "Le nisab (seuil minimum) est l'équivalent de 85 grammes d'or ou 595 grammes d'argent. En dessous de ce seuil, la Zakat n'est pas obligatoire.",
      "Les 8 catégories de bénéficiaires sont définies dans le Coran (At-Tawba, 9:60) : les pauvres, les nécessiteux, les collecteurs de Zakat, ceux dont les cœurs sont à gagner, les esclaves à affranchir, les endettés, dans le sentier d'Allah, et le voyageur en difficulté.",
      "La Zakat se distingue de la Sadaqa (aumône volontaire) par son caractère obligatoire, son taux fixe et ses bénéficiaires définis. Ne pas la verser est un péché majeur."
    ]
  },
  {
    numero: 4,
    nom: "Le Sawm (Jeûne du Ramadan)",
    nomArabe: "الصَّوْم",
    icon: "Moon",
    description: "Le Sawm est le jeûne obligatoire durant le mois de Ramadan, neuvième mois du calendrier hégirien. Il consiste à s'abstenir de manger, boire et avoir des rapports intimes de l'aube au coucher du soleil.",
    preuves: [
      "Allah dit : « Ô vous qui croyez ! Le jeûne vous a été prescrit comme il a été prescrit à ceux qui vous ont précédés, ainsi atteindrez-vous la piété. » (Sourate Al-Baqara, 2:183)",
      "Allah dit : « Le mois de Ramadan au cours duquel le Coran a été descendu comme guide pour les gens. » (Sourate Al-Baqara, 2:185)",
      "Le Prophète ﷺ a dit : « Celui qui jeûne le Ramadan avec foi et en espérant la récompense d'Allah, ses péchés antérieurs lui seront pardonnés. » (Bukhari & Muslim)"
    ],
    details: [
      "Le jeûne commence à l'aube (Fajr) et se termine au coucher du soleil (Maghrib). L'intention doit être formulée chaque nuit avant le Fajr.",
      "Sont exemptés : les enfants, les malades (temporaire : rattrapage ; chronique : fidya), les voyageurs (rattrapage), les personnes âgées incapables de jeûner (fidya). Pour les femmes enceintes ou allaitantes, les écoles divergent : certaines (hanafite) exigent uniquement le rattrapage, d'autres (shaféite, hanbalite) ajoutent la fidya si l'exemption concerne la crainte pour l'enfant. Il convient de consulter un savant selon son école.",
      "Le Ramadan est aussi le mois de la révélation du Coran, de la multiplication des récompenses, de la Nuit du Destin (Laylat al-Qadr) qui est meilleure que mille mois.",
      "Le jeûne n'est pas qu'une abstention de nourriture : le Prophète ﷺ a dit que celui qui ne délaisse pas le mensonge et sa pratique, Allah n'a nul besoin qu'il délaisse sa nourriture (Bukhari). C'est une école de patience, de maîtrise de soi et de piété."
    ]
  },
  {
    numero: 5,
    nom: "Le Hajj (Pèlerinage à La Mecque)",
    nomArabe: "الحَجّ",
    icon: "Landmark",
    description: "Le Hajj est le pèlerinage à La Mecque que tout musulman adulte, sain d'esprit et en ayant les moyens physiques et financiers doit accomplir au moins une fois dans sa vie.",
    preuves: [
      "Allah dit : « Et c'est un devoir envers Allah pour les gens qui ont les moyens d'aller faire le pèlerinage de la Maison. » (Sourate Al-Imran, 3:97)",
      "Le Prophète ﷺ a dit : « Quiconque accomplit le Hajj sans commettre de rapport charnel ni de perversité revient comme le jour où sa mère l'a mis au monde. » (Bukhari & Muslim)",
      "Le Prophète ﷺ a dit : « Le Hajj agréé n'a d'autre récompense que le Paradis. » (Bukhari & Muslim)"
    ],
    details: [
      "Le Hajj se déroule du 8 au 12 Dhul Hijja (12e mois du calendrier hégirien). Les rites principaux sont : l'Ihram (état de sacralisation), le Tawaf (circumambulation autour de la Ka'ba), le Sa'i (parcours entre Safa et Marwa), la station à Arafat, la lapidation des stèles à Mina, et le sacrifice.",
      "La station à Arafat (9 Dhul Hijja) est le pilier essentiel du Hajj. Le Prophète ﷺ a dit : « Le Hajj, c'est Arafat. » C'est le jour où Allah libère le plus de gens du Feu.",
      "La Omra (petit pèlerinage) peut être accomplie à tout moment de l'année. Elle comprend l'Ihram, le Tawaf et le Sa'i. Le Prophète ﷺ a dit : « Une Omra jusqu'à l'autre est une expiation pour les péchés commis entre les deux. » (Bukhari & Muslim)",
      "Le Hajj commémore les actes d'Ibrahim (Abraham) et de sa famille : la construction de la Ka'ba avec son fils Ismaïl, le sacrifice, et le parcours de Hajar entre Safa et Marwa à la recherche d'eau — épisode détaillé dans un long hadith de Sahih Al-Bukhari."
    ]
  }
];

export const introPiliersIslam = "L'Islam repose sur cinq piliers fondamentaux, mentionnés dans le célèbre hadith de Jibril (Gabriel) et dans de nombreux autres hadiths authentiques. Le Prophète Muhammad ﷺ a dit : « L'Islam est bâti sur cinq piliers : l'attestation qu'il n'y a de divinité qu'Allah et que Muhammad est le messager d'Allah, l'accomplissement de la prière, l'acquittement de la Zakat, le jeûne du Ramadan et le pèlerinage à la Maison sacrée pour celui qui en a la capacité. » (Bukhari & Muslim). Ces cinq piliers constituent les actes pratiques fondamentaux que tout musulman doit accomplir.";
