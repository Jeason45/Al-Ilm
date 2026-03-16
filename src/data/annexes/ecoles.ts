import type { EcoleJuridique } from '../types';

export const ecolesJuridiques: EcoleJuridique[] = [
  {
    nom: "Hanafite",
    nomArabe: "الحنفية",
    fondateur: "Abu Hanifa an-Nu'man",
    fondateurArabe: "أَبُو حَنِيفَةَ النُّعْمَانُ",
    epoque: "699-767 (80-150 H)",
    lieu: "Kufa, Irak",
    methodologie: "L'école hanafite est reconnue pour son usage extensif du raisonnement analogique (qiyas) et de l'opinion juridique raisonnée (ra'y). Abu Hanifa privilégiait la réflexion rationnelle lorsque les textes ne donnaient pas de réponse explicite. Il utilisait également l'istihsan (préférence juridique) pour adapter les règles aux situations concrètes.",
    geographie: "Turquie, Asie centrale, sous-continent indien (Pakistan, Inde, Bangladesh, Afghanistan), Balkans, Égypte (en partie), Irak, Syrie, Levant",
    ouvragesRef: [
      "Al-Mabsut de As-Sarakhsi",
      "Al-Hidaya de Al-Marghinani",
      "Mukhtasar al-Quduri",
      "Radd al-Muhtar (Hashiyat Ibn Abidin)"
    ],
    particularites: [
      "Usage extensif du qiyas (raisonnement analogique) et du ra'y (opinion raisonnée)",
      "Recours à l'istihsan (préférence juridique) pour adapter les règles aux réalités",
      "Grande place accordée à l'urf (coutume locale) dans les jugements",
      "École la plus suivie au monde en nombre de fidèles",
      "A été l'école officielle de l'Empire ottoman pendant des siècles"
    ]
  },
  {
    nom: "Malikite",
    nomArabe: "المالكية",
    fondateur: "Malik ibn Anas",
    fondateurArabe: "مَالِكُ بْنُ أَنَسٍ",
    epoque: "711-795 (93-179 H)",
    lieu: "Médine, Arabie",
    methodologie: "L'école malikite accorde une importance capitale à la pratique des gens de Médine ('amal ahl al-Madina), considérée comme une sunna vivante transmise de génération en génération depuis le Prophète ﷺ. Malik ibn Anas privilégiait les hadiths et les traditions de Médine, et utilisait l'istislah (intérêt général) et le sadd adh-dhara'i (blocage des moyens menant au mal).",
    geographie: "Afrique du Nord (Maroc, Algérie, Tunisie, Libye, Mauritanie), Afrique de l'Ouest et subsaharienne, Émirats arabes unis, Koweït, Bahreïn, Haute-Égypte, Soudan",
    ouvragesRef: [
      "Al-Muwatta de l'Imam Malik",
      "Al-Mudawwana de Sahnun",
      "Mukhtasar Khalil",
      "Ash-Sharh al-Kabir de Ad-Dardir"
    ],
    particularites: [
      "Référence à la pratique des gens de Médine comme source de jurisprudence",
      "Usage de l'istislah (maslaha mursala — intérêt général non textuel)",
      "Recours au sadd adh-dhara'i (blocage des prétextes menant au mal)",
      "Le Muwatta est le premier recueil de hadiths et de fiqh structuré de l'Islam",
      "École dominante au Maghreb et en Afrique de l'Ouest"
    ]
  },
  {
    nom: "Chaféite",
    nomArabe: "الشافعية",
    fondateur: "Muhammad ibn Idris ash-Shafi'i",
    fondateurArabe: "مُحَمَّدُ بْنُ إِدْرِيسَ الشَّافِعِيُّ",
    epoque: "767-820 (150-204 H)",
    lieu: "Gaza (naissance), La Mecque, Bagdad, Le Caire",
    methodologie: "L'Imam Ash-Shafi'i est considéré comme le fondateur de la science des fondements du droit islamique (usul al-fiqh). Il a établi une méthodologie rigoureuse hiérarchisant les sources : Coran, Sunna, ijma' (consensus) puis qiyas (analogie). Il refusait l'istihsan et exigeait un raisonnement analogique strict basé sur les textes.",
    geographie: "Asie du Sud-Est (Indonésie, Malaisie, Brunei, Philippines), Yémen, Somalie, Érythrée, Éthiopie, Égypte (en partie), Syrie (en partie), Kurdistan",
    ouvragesRef: [
      "Ar-Risala de l'Imam Ash-Shafi'i",
      "Al-Umm de l'Imam Ash-Shafi'i",
      "Minhaj at-Talibin de An-Nawawi",
      "Fath al-Bari de Ibn Hajar al-Asqalani"
    ],
    particularites: [
      "Fondateur de la science d'usul al-fiqh (méthodologie juridique)",
      "Hiérarchisation stricte des sources : Coran → Sunna → Ijma' → Qiyas",
      "Rejet de l'istihsan au profit d'un qiyas rigoureux",
      "Deux périodes de jurisprudence : le qawl qadim (ancien, en Irak) et le qawl jadid (nouveau, en Égypte)",
      "École dominante en Asie du Sud-Est, la région musulmane la plus peuplée"
    ]
  },
  {
    nom: "Hanbalite",
    nomArabe: "الحنبلية",
    fondateur: "Ahmad ibn Hanbal",
    fondateurArabe: "أَحْمَدُ بْنُ حَنْبَلٍ",
    epoque: "780-855 (164-241 H)",
    lieu: "Bagdad, Irak",
    methodologie: "L'école hanbalite se distingue par sa stricte adhérence aux textes du Coran et de la Sunna. Selon la position classique rapportée par Ibn Taymiyya et d'autres, Ahmad ibn Hanbal préférait un hadith faible (da'if) au raisonnement analogique (qiyas) — bien que certains savants hanbalites nuancent cette formulation en précisant qu'il s'agissait de hadiths dont la faiblesse n'était pas sévère, et seulement en l'absence de texte plus probant. Il ne recourait au qiyas qu'en ultime nécessité. Il a compilé le Musnad, l'un des plus vastes recueils de hadiths, contenant plus de 28 000 traditions.",
    geographie: "Arabie saoudite, Qatar, certaines régions du Golfe persique, minorités en Syrie, Palestine et Irak",
    ouvragesRef: [
      "Al-Musnad de l'Imam Ahmad",
      "Al-Mughni de Ibn Qudama",
      "Zad al-Ma'ad de Ibn al-Qayyim",
      "Majmu' al-Fatawa de Ibn Taymiyya"
    ],
    particularites: [
      "Adhérence stricte aux textes (Coran et Sunna) avec un usage minimal du qiyas",
      "Préférence d'un hadith faible au raisonnement analogique",
      "Ahmad ibn Hanbal a subi l'épreuve de la Mihna (inquisition) et refusa de dire que le Coran est créé",
      "Influence historique majeure sur les mouvements de réforme et le renouveau islamique, notamment via Ibn Taymiyya et Ibn al-Qayyim",
      "École officielle de l'Arabie saoudite"
    ]
  }
];

export const introEcoles = "Le fiqh (jurisprudence islamique) est la science qui déduit les règles pratiques de l'Islam à partir de ses sources. Au fil des siècles, quatre grandes écoles de jurisprudence (madhahib) se sont constituées au sein du sunnisme. Elles partagent les mêmes fondements de foi et les mêmes sources (Coran et Sunna), mais diffèrent dans leur méthodologie d'interprétation et d'extraction des règles. Ces divergences sont une miséricorde et une richesse pour la communauté musulmane, comme l'ont souligné les savants. Chaque musulman est libre de suivre l'école de son choix, et les quatre sont considérées comme valides et légitimes.";
