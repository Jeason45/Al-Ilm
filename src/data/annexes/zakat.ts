import type { AssociationIslam } from '../types';

export const associationsIslam: AssociationIslam[] = [
  {
    nom: "Secours Islamique France",
    description: "ONG de solidarité internationale qui apporte aide et assistance aux populations vulnérables dans le monde, notamment en situation de crise humanitaire.",
    url: "https://www.secours-islamique.org",
    pays: "France"
  },
  {
    nom: "Muslim Hands",
    description: "Organisation humanitaire internationale présente dans plus de 30 pays, intervenant dans l'aide d'urgence, le développement et les projets de Zakat.",
    url: "https://muslimhands.fr",
    pays: "International"
  },
  {
    nom: "Islamic Relief",
    description: "L'une des plus grandes ONG humanitaires musulmanes au monde, offrant des programmes d'aide d'urgence, de développement et de collecte de la Zakat.",
    url: "https://www.islamic-relief.org",
    pays: "International"
  },
  {
    nom: "Life ONG",
    description: "Association française spécialisée dans les projets d'accès à l'eau potable, l'aide alimentaire et le parrainage d'orphelins dans les pays en développement.",
    url: "https://life-ong.org",
    pays: "France"
  },
  {
    nom: "Ummah Charity",
    description: "Association humanitaire française intervenant dans des projets d'aide d'urgence, de construction de puits, d'aide alimentaire et de soutien aux orphelins à travers le monde.",
    url: "https://ummahcharity.org",
    pays: "France"
  }
];

export const zakatInfo = {
  definition: "La Zakat est le troisième pilier de l'Islam. C'est une aumône obligatoire que chaque musulman possédant un patrimoine au-dessus du seuil minimum (nisab) doit verser annuellement. Elle purifie les biens du croyant et contribue à la solidarité sociale.",
  differenceZakatSadaqa: {
    zakat: [
      "Obligatoire (fard) pour tout musulman possédant le nisab",
      "Taux fixe de 2,5% sur l'épargne et les biens éligibles",
      "Versée une fois par an (après une année lunaire complète)",
      "Réservée à 8 catégories de bénéficiaires mentionnées dans le Coran (9:60)",
      "Purification obligatoire des biens"
    ],
    sadaqa: [
      "Volontaire et sans montant fixe",
      "Peut être donnée à tout moment et à toute personne dans le besoin",
      "Peut prendre de nombreuses formes : argent, sourire, aide physique, bonne parole",
      "Le Prophète ﷺ a dit : « Même un sourire est une sadaqa. » (Tirmidhi)",
      "Pas de conditions de montant minimum ni de délai"
    ]
  },
  nisab: "Le nisab est le seuil minimum de richesse à partir duquel la Zakat devient obligatoire. Il équivaut à 85 grammes d'or ou 595 grammes d'argent. Si votre patrimoine éligible dépasse ce seuil pendant une année lunaire complète, vous devez verser 2,5% de Zakat.",
  beneficiaires: "Les 8 catégories de bénéficiaires selon le Coran (At-Tawba, 9:60) : les pauvres (al-fuqara'), les nécessiteux (al-masakin), les collecteurs de la Zakat, ceux dont les cœurs sont à gagner à l'Islam, les esclaves à affranchir, les endettés, dans le sentier d'Allah, et le voyageur en difficulté.",
  tauxOr: 2.5,
  nisabOr: 85,
  nisabArgent: 595
};

/* ── Zakat al-Fitr ── */
export const zakatFitrInfo = {
  definition: "La Zakat al-Fitr (ou Sadaqat al-Fitr) est une aumône obligatoire que chaque musulman doit verser avant la prière de l'Aïd al-Fitr, à la fin du mois de Ramadan. Elle purifie le jeûneur de ses manquements et permet aux pauvres de se réjouir le jour de l'Aïd.",
  hadith: "Le Prophète ﷺ a prescrit la Zakat al-Fitr : un sa' de dattes ou un sa' de orge, pour chaque musulman, homme ou femme, libre ou esclave. (Rapporté par al-Bukhari et Muslim, d'après Ibn 'Umar)",
  quand: "Elle doit être versée avant la prière de l'Aïd al-Fitr. Il est permis de la donner un ou deux jours avant l'Aïd. Versée après la prière, elle compte comme simple sadaqa.",
  pourQui: "Elle est due pour chaque membre du foyer : le chef de famille la verse pour lui-même, son épouse, ses enfants (même nourrissons) et toute personne à sa charge.",
  mesure: {
    description: "La quantité prescrite est d'un sa' de nourriture de base par personne. Un sa' correspond à environ 2,5 à 3 kg selon les écoles.",
    hanafi: "Les Hanafites estiment qu'un demi-sa' de blé suffit (~2,1 kg), ou un sa' complet pour les dattes, l'orge et les raisins secs.",
    majorite: "La majorité des savants (Malikites, Shafiites, Hanbalites) prescrivent un sa' complet (~2,5 à 3 kg) de la nourriture de base du pays.",
    monetaire: "Le versement en argent est accepté par l'école hanafite et par de nombreux savants contemporains, car il est souvent plus utile aux pauvres.",
  },
  montantDefautEur: 7, // estimation basse (Grande Mosquée de Paris)
  montantHautEur: 9,   // estimation haute (CFCM / associations)
};

/* ── Fidya ── */
export const fidyaInfo = {
  definition: "La Fidya est une compensation alimentaire que doit verser la personne qui ne peut pas jeûner le Ramadan de manière définitive (maladie chronique incurable, vieillesse extrême). Elle remplace le jeûne pour ceux qui sont dans l'incapacité permanente de le rattraper.",
  verset: "« Et pour ceux qui ne pourraient le supporter qu'avec grande difficulté, il y a une compensation : nourrir un pauvre. » (Al-Baqara, 2:184)",
  quiEstConcerne: [
    "Les personnes âgées qui ne peuvent plus jeûner",
    "Les malades chroniques dont la guérison n'est pas espérée",
    "Les femmes enceintes ou allaitantes qui craignent pour leur enfant (selon certains savants)",
  ],
  mesure: "Un mudd de nourriture par jour manqué (~750 g, soit l'équivalent d'un repas). Les savants contemporains estiment cela à environ 5 à 10 € par jour selon le coût de la vie local.",
  montantDefautEur: 7, // par jour manqué
  note: "La Fidya n'est valable que si la personne est définitivement incapable de rattraper. Si la guérison est possible, elle doit rattraper les jours manqués, pas payer la Fidya.",
};

/* ── Kaffarah ── */
export const kaffarahInfo = {
  definition: "La Kaffarah (expiation) est une pénalité imposée à celui qui rompt volontairement et sans excuse valable un jour de jeûne du Ramadan. C'est une sanction beaucoup plus lourde que la Fidya, reflétant la gravité de l'acte.",
  hadith: "Un homme vint voir le Prophète ﷺ et dit : « Je suis perdu ! J'ai eu un rapport avec ma femme pendant le Ramadan. » Le Prophète ﷺ lui prescrit par ordre : affranchir un esclave, puis jeûner 60 jours consécutifs, puis nourrir 60 pauvres. (Rapporté par al-Bukhari et Muslim, d'après Abu Hurayra)",
  options: [
    { ordre: 1, action: "Affranchir un esclave", note: "Non applicable aujourd'hui" },
    { ordre: 2, action: "Jeûner 60 jours consécutifs", note: "Si on rompt un jour (sauf excuse valable), on recommence les 60 jours" },
    { ordre: 3, action: "Nourrir 60 pauvres", note: "Un repas complet par pauvre, soit l'équivalent d'un mudd (~750 g) de nourriture de base" },
  ],
  quand: [
    "Rupture volontaire du jeûne par rapport sexuel (consensus des savants)",
    "Rupture volontaire du jeûne par la nourriture ou la boisson (selon les Hanafites et certains Malikites)",
  ],
  montantParRepasEur: 9,
  nombrePauvres: 60,
  note: "La Kaffarah s'applique par jour volontairement rompu. En plus de la Kaffarah, le jour doit être rattrapé.",
};
