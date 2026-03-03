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
    nom: "Barakacity (BarakaCity)",
    description: "Association humanitaire française intervenant dans des projets d'aide d'urgence, de construction de puits et d'aide aux orphelins à travers le monde.",
    url: "https://www.barakacity.com",
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
