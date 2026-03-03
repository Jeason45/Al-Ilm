import type { CourantIslam } from '../types';

export const courantsIslam: CourantIslam[] = [
  {
    nom: "Sunnisme",
    nomArabe: "أهل السنة والجماعة",
    origine: "Le sunnisme (Ahl as-Sunnah wa al-Jama'a — les gens de la Tradition prophétique et du consensus) est le courant majoritaire de l'Islam. Il se fonde sur le Coran et la Sunna du Prophète ﷺ tels que transmis par les compagnons (Sahaba). Après la mort du Prophète ﷺ, la majorité de la communauté a reconnu la légitimité des quatre califes bien guidés (Abu Bakr, Umar, Uthman, Ali) dans cet ordre.",
    croyances: [
      "Le Coran est la parole incréée d'Allah et la Sunna est la seconde source de législation",
      "Respect et reconnaissance des quatre califes bien guidés dans leur ordre de succession",
      "Les compagnons du Prophète ﷺ sont tous dignes de confiance et de respect",
      "La foi comprend la croyance du cœur, la parole de la langue et les actes des membres",
      "Suivi de l'une des quatre écoles de jurisprudence (Hanafi, Maliki, Shafi'i, Hanbali)",
      "En théologie : écoles Ash'arite, Maturidite ou Atharite"
    ],
    population: "85-90% des musulmans dans le monde",
    geographie: "Majoritaire dans presque tous les pays musulmans : monde arabe, Turquie, Asie du Sud-Est, Asie du Sud, Afrique",
    sousCourants: [
      "Ash'arisme (théologie rationaliste modérée — Al-Ash'ari)",
      "Maturidisme (théologie rationaliste — Al-Maturidi)",
      "Atharisme (théologie textualiste — Ahmad ibn Hanbal, Ibn Taymiyya)"
    ]
  },
  {
    nom: "Chiisme",
    nomArabe: "الشيعة",
    origine: "Le chiisme (Shi'at Ali — les partisans d'Ali) est né de la conviction que le leadership de la communauté musulmane après le Prophète ﷺ revenait de droit à Ali ibn Abi Talib, cousin et gendre du Prophète, puis à sa descendance (Ahl al-Bayt). Le chiisme s'est développé progressivement après les événements de Karbala (680/61 H), où Husayn, petit-fils du Prophète, fut tué.",
    croyances: [
      "L'imamat (leadership) est un pilier de la foi réservé à la descendance du Prophète ﷺ via Ali et Fatima",
      "Les imams sont considérés comme infaillibles (ma'sum) et guidés divinement",
      "Importance particulière accordée à Ahl al-Bayt (la famille du Prophète ﷺ)",
      "Commémoration d'Achoura (martyre de Husayn à Karbala)",
      "Sources de hadiths distinctes (Al-Kafi, Man la yahduruhu al-Faqih, etc.)"
    ],
    population: "10-15% des musulmans dans le monde",
    geographie: "Iran (majorité), Irak (majorité), Bahreïn (majorité), Azerbaïdjan, Liban (communauté importante), Yémen, Pakistan, Afghanistan",
    sousCourants: [
      "Duodécimains (Ithna 'Ashariyya) — courant majoritaire, croient en 12 imams, dominant en Iran et Irak",
      "Ismaéliens (Sab'iyya) — branche qui diverge au 7e imam (Ismaïl), présents en Inde, Pakistan, Syrie",
      "Zaïdites — branche modérée plus proche du sunnisme, présents au Yémen"
    ]
  },
  {
    nom: "Ibadisme",
    nomArabe: "الإباضية",
    origine: "L'ibadisme est un courant distinct, souvent considéré comme la troisième grande branche de l'Islam. Il tire son nom d'Abdullah ibn Ibad (VIIe siècle). Les ibadites se distinguent par une approche modérée, rejetant les extrêmes des kharijites dont ils sont historiquement issus. Ils prônent un imam choisi par la communauté sur la base du mérite et de la piété, indépendamment de la lignée.",
    croyances: [
      "Le leadership (imamat) est basé sur le mérite et la piété, pas sur la lignée",
      "Rejet de la violence politique et de l'extrémisme",
      "Approche rigoriste mais tolérante dans la pratique religieuse",
      "La foi est indissociable des actes (pas de foi sans pratique)",
      "Sources : Coran, Sunna, ijma' de leurs savants, raisonnement juridique propre"
    ],
    population: "Environ 1-3% des musulmans (2-3 millions)",
    geographie: "Oman (courant majoritaire), Mzab (Algérie), Djerba (Tunisie), Djebel Nafoussa (Libye), Zanzibar (Tanzanie)"
  },
  {
    nom: "Soufisme",
    nomArabe: "التصوف",
    origine: "Le soufisme (tasawwuf) est la dimension spirituelle et mystique de l'Islam, et non un courant séparé. Il se concentre sur la purification de l'âme (tazkiyat an-nafs), le rapprochement avec Allah et l'excellence dans l'adoration (ihsan). Il est pratiqué aussi bien par des sunnites que par des chiites. Le terme dériverait de « suf » (laine), en référence aux vêtements simples des premiers ascètes musulmans.",
    croyances: [
      "Recherche de l'ihsan : « Adorer Allah comme si tu Le voyais, car si tu ne Le vois pas, Lui te voit »",
      "Purification de l'âme (tazkiyat an-nafs) et lutte contre l'ego (nafs)",
      "Pratique du dhikr (rappel d'Allah) sous différentes formes",
      "Relation maître-disciple (sheikh/murshid et murid) pour l'éducation spirituelle",
      "Organisation en confréries (turuq) : Qadiriyya, Naqshbandiyya, Tijaniyya, Shadhiliyya, etc."
    ],
    population: "Présent dans toutes les régions du monde musulman (estimation difficile car transversal)",
    geographie: "Afrique de l'Ouest et du Nord, Turquie, Asie du Sud (Inde, Pakistan), Asie centrale, Égypte, Levant, Balkans"
  },
  {
    nom: "Salafisme",
    nomArabe: "السلفية",
    origine: "Le salafisme est un mouvement de réforme au sein du sunnisme qui appelle au retour aux pratiques des « Salaf as-Salih » (pieux prédécesseurs : les trois premières générations de musulmans). Il rejette ce qu'il considère comme des innovations (bid'a) ajoutées à l'Islam au fil des siècles. Ses références principales incluent Ibn Taymiyya (XIVe s.), Ibn al-Qayyim et Muhammad ibn Abd al-Wahhab (XVIIIe s.).",
    croyances: [
      "Retour strict au Coran et à la Sunna selon la compréhension des Salaf (pieux prédécesseurs)",
      "Rejet des innovations religieuses (bid'a) et des pratiques jugées non-fondées dans les textes",
      "Affirmation littérale des attributs divins sans interprétation allégorique (tafwid ou ithbat)",
      "Insistance sur le tawhid (unicité d'Allah) dans toutes ses dimensions",
      "Pluralité interne : courant quiétiste (majoritaire), courant activiste, courant jihadiste (minoritaire et contesté)"
    ],
    population: "Minorité au sein du sunnisme (estimation variable selon les définitions)",
    geographie: "Arabie saoudite, pays du Golfe, présence dans les communautés musulmanes du monde entier"
  }
];

export const introCourants = "L'Islam est une religion fondée sur l'unicité d'Allah (tawhid), la prophétie de Muhammad ﷺ et les cinq piliers. Tous les musulmans partagent ces fondements essentiels, le même Coran et la même direction de prière (qibla). Au cours de l'histoire, des différences d'interprétation sur des questions théologiques, juridiques et politiques ont donné naissance à différents courants. Cette page présente ces courants de manière factuelle et éducative, dans un esprit de compréhension mutuelle.";
