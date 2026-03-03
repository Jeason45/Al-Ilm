export type TimelineItem =
  | { type: 'chapter'; numero: string; titre: string }
  | { type: 'section'; emoji: string; titre: string; sousTitre: string }
  | { type: 'event'; id: number; date: string; titre: string; contenu: string; lecon: string; sourates?: string };

export const histoireMeta = {
  titre: "L'Histoire du Coran et de Son Prophète ﷺ",
  titreAr: 'التاريخ',
  description: 'De la naissance du Prophète ﷺ à la compilation finale du Coran',
  stats: '36 événements • 23 ans de Révélation • 114 sourates',
  epilogue: `23 ans de Révélation. 114 sourates. 6236 versets.
De la grotte de Hira au mont 'Arafat.
D'un homme seul, tremblant dans l'obscurité,
à 100 000 compagnons sur la plaine d'Arafat.
D'un message murmuré dans le secret
à un Livre récité par près de 2 milliards de cœurs.

Et le Coran continue. Il attend. Il appelle.
Il suffit d'ouvrir la première page et de dire :
Bismillahi r-Rahmani r-Rahim...`,
};

export const histoireTimeline: TimelineItem[] = [
  // ============================================================
  // CHAPITRE I — AVANT LA RÉVÉLATION
  // ============================================================
  { type: 'chapter', numero: 'I', titre: 'Avant la Révélation' },

  {
    type: 'section',
    emoji: '🌟',
    titre: "L'Arabie avant l'Islam",
    sousTitre: "De 570 à 609 — La préparation d'un homme, la préparation d'un monde",
  },

  {
    type: 'event',
    id: 1,
    date: '~570',
    titre: "L'Année de l'Éléphant et la Naissance du Prophète ﷺ",
    contenu: `L'Arabie tout entière retient son souffle.
Abraha, le vice-roi chrétien du Yémen, a juré de détruire la Ka'ba. Il marche sur La Mecque à la tête d'une armée colossale, avec des éléphants de guerre que les Arabes n'ont jamais vus. La terreur se répand. 'Abd al-Mouttalib, chef des Qouraychites, va négocier. Abraha lui rend ses chameaux volés.

Abraha : « Tu me demandes tes chameaux alors que je viens détruire ta Maison sacrée ? »

'Abd al-Mouttalib : « Je suis le maître des chameaux. La Maison a un Maître qui la protégera. »

Et Allah la protégea. Des oiseaux par milliers — les Ababil — surgirent du ciel, lançant des pierres d'argile brûlante. L'armée d'Abraha fut anéantie. Les éléphants s'effondrèrent. Abraha lui-même mourut sur le chemin du retour, le corps en lambeaux.

C'est cette même année — l'Année de l'Éléphant — que naquit Mohammed fils d'Abdallah, dans le clan des Banu Hachim de la tribu de Qouraych. Son père était déjà mort avant sa naissance. Le nourrisson fut confié à Halima as-Sa'diya, une nourrice du désert, selon la coutume arabe.`,
    lecon: "Allah protège Sa Maison. Et la même année où Il sauve la Ka'ba, Il envoie celui qui en restaurera le sens.",
    sourates: 'Al-Fil (105)',
  },

  {
    type: 'event',
    id: 2,
    date: '~576-578',
    titre: "L'Orphelin",
    contenu: `Mohammed a 6 ans quand sa mère Amina meurt sur le chemin du retour de Médine. L'enfant se retrouve seul. Son grand-père 'Abd al-Mouttalib le recueille — mais deux ans plus tard, lui aussi meurt.

Orphelin de père, de mère, de grand-père. L'enfant est confié à son oncle Abou Talib, chef de clan généreux mais pauvre. Ce sera son protecteur jusqu'à la fin.

Des années plus tard, Allah lui dira :

Allah : « Ne t'a-t-Il pas trouvé orphelin ? Alors Il t'a accueilli. Ne t'a-t-Il pas trouvé égaré ? Alors Il t'a guidé. Ne t'a-t-Il pas trouvé pauvre ? Alors Il t'a enrichi. »`,
    lecon: "L'épreuve de l'orphelinat a forgé la compassion du futur Prophète. Il n'oubliera jamais les orphelins.",
    sourates: 'Ad-Douha (93:6-8)',
  },

  {
    type: 'event',
    id: 3,
    date: '~583',
    titre: 'Le Moine Bahira',
    contenu: `Mohammed, 12 ans, accompagne son oncle Abou Talib dans une caravane commerciale vers la Syrie. À Bosra, un moine chrétien nommé Bahira observe quelque chose d'étrange : un nuage suit le jeune garçon pour le protéger du soleil. Les branches d'arbre se penchent vers lui.

Bahira invite la caravane à manger — chose qu'il ne fait jamais. Il examine le dos du jeune Mohammed et y trouve le sceau de la prophétie, entre les omoplates.

Bahira à Abou Talib : « Protège bien cet enfant. Il a un destin immense. Ne le laisse pas tomber entre les mains des Romains. »`,
    lecon: "Les signes de la prophétie existaient bien avant la première révélation. Allah préparait le terrain.",
  },

  {
    type: 'event',
    id: 4,
    date: '~590',
    titre: "Le Hilf al-Foudoul — Alliance des Vertueux",
    contenu: `Un commerçant yeménite se fait voler sa marchandise par un Mecquois puissant. Personne n'ose intervenir. Quelques hommes d'honneur se réunissent dans la maison d'Abdallah ibn Joud'an et jurent un pacte : désormais, tout opprimé à La Mecque sera défendu, quel que soit son clan.

Mohammed, jeune homme, est parmi eux. Des décennies plus tard, devenu Prophète, il dira :

Le Prophète : « J'ai participé dans la maison d'Abdallah ibn Joud'an à un pacte que je n'échangerais pas contre les plus beaux chameaux. Et si on m'y appelait en Islam, j'y répondrais. »`,
    lecon: "Avant même la prophétie, Mohammed était un homme de justice. L'Islam ne naît pas dans le vide — il vient confirmer ce que la conscience humaine sait déjà.",
  },

  {
    type: 'event',
    id: 5,
    date: '~595',
    titre: 'Le Mariage avec Khadija',
    contenu: `Khadija bint Khouwaylid est une femme d'exception : riche commerçante, veuve, respectée dans toute La Mecque. Elle engage Mohammed pour diriger une caravane vers la Syrie. Maysara, son serviteur, revient ébloui par l'honnêteté et la sagesse du jeune homme.

Khadija, impressionnée, lui propose le mariage — par l'intermédiaire de son amie Nafissa. Mohammed accepte. Il a 25 ans, elle en a 40 selon la majorité des sources.

Ce mariage sera le pilier de sa vie. Khadija sera la première à croire en lui, la première à le soutenir, la première à souffrir pour l'Islam. Tant qu'elle vivra, Mohammed n'épousera aucune autre femme.`,
    lecon: "Khadija est le modèle de la femme musulmane accomplie : intelligente, indépendante, dévouée. Et c'est ELLE qui propose le mariage — pas lui.",
  },

  {
    type: 'event',
    id: 6,
    date: '~605',
    titre: 'La Reconstruction de la Ka\u2019ba et l\u2019Arbitrage',
    contenu: `La Ka'ba, endommagée par une crue, est reconstruite par les Qouraychites. Chaque clan porte des pierres. Mais quand vient le moment de replacer la Pierre Noire (al-Hajar al-Aswad), la dispute éclate : quel clan aura cet honneur suprême ? Les mains se posent sur les épées.

Pendant 4 jours, la tension monte. Puis un ancien propose : « Le premier homme qui franchira cette porte sera notre arbitre. »

Le premier homme qui entre : Mohammed. Le soulagement est général — c'est Al-Amine, le digne de confiance.

Sa solution est d'un génie simple : il pose la Pierre Noire sur un manteau et demande à un représentant de chaque clan de soulever un coin du tissu. Ensemble, ils portent la Pierre. Puis Mohammed la place de ses propres mains.`,
    lecon: "Cette scène annonce le futur Prophète : un homme qui unit au lieu de diviser, qui trouve des solutions au lieu de prendre parti.",
  },

  {
    type: 'event',
    id: 7,
    date: '~609',
    titre: 'Les Retraites dans la Grotte de Hira',
    contenu: `Mohammed se retire de plus en plus souvent dans la grotte de Hira, sur le mont An-Nour, à 3 km de La Mecque. Il y passe des nuits entières en méditation (tahannouth), contemplant le ciel étoilé.

Il ne supporte plus les idoles, les orgies, l'enterrement des filles vivantes, l'injustice tribale. Il sent qu'il y a autre chose. Il cherche, sans encore savoir quoi.

Khadija lui prépare ses provisions. Elle ne le questionne pas. Elle le laisse chercher.`,
    lecon: "La solitude prépare aux grandes missions. Avant de recevoir la Parole, il faut d'abord faire le silence en soi.",
  },

  // ============================================================
  // CHAPITRE II — LA PÉRIODE MECQUOISE
  // ============================================================
  { type: 'chapter', numero: 'II', titre: 'La Période Mecquoise' },

  {
    type: 'section',
    emoji: '📖',
    titre: 'Phase Secrète (610-613)',
    sousTitre: "3 ans dans l'ombre. Les premiers croyants. Le monde ne sait pas encore.",
  },

  {
    type: 'event',
    id: 8,
    date: '610, Ramadan',
    titre: "La Première Révélation — Iqra'",
    contenu: `C'est la nuit du Destin. Mohammed est seul dans la grotte de Hira. Le silence du désert l'enveloppe. Et soudain — une présence.

Un être de lumière. Jibril. L'ange le saisit et le serre contre lui avec une force terrifiante.

Jibril : « Lis ! »

Mohammed : « Je ne sais pas lire ! »

Jibril le serre encore. Trois fois. Jusqu'à ce que Mohammed soit à bout de forces. Puis les mots viennent — les premiers mots de la Révélation :

Jibril : « Lis, au nom de ton Seigneur qui a créé ! Il a créé l'homme d'une adhérence. Lis ! Et ton Seigneur est le Très Généreux, qui a enseigné par le calame, a enseigné à l'homme ce qu'il ne savait pas. »

Mohammed descend de la montagne en tremblant. Son cœur bat si fort qu'il croit mourir. Il court chez Khadija et crie :

Mohammed : « Couvrez-moi ! Couvrez-moi ! »

Khadija le couvre de manteaux. Elle attend que les tremblements cessent. Puis elle prononce les mots qui changeront l'histoire :

Khadija : « Non ! Par Allah ! Allah ne t'humiliera jamais. Tu maintiens les liens de parenté, tu portes les fardeaux des autres, tu donnes à celui qui n'a rien, tu accueilles l'hôte, tu secours les victimes des épreuves. »

Elle l'emmène chez son cousin Waraqah ibn Nawfal, un vieil homme chrétien érudit. Waraqah écoute et pâlit :

Waraqah : « C'est le même ange qui vint à Moïse ! Si seulement j'étais jeune quand ton peuple te chassera... »

Mohammed : « Ils me chasseront ? »

Waraqah : « Aucun homme n'a jamais apporté ce que tu apportes sans être combattu. »`,
    lecon: "La Révélation commence par « Lis ! » — dans une société qui ne lit pas. Le premier ordre divin est un ordre de savoir. Et la première croyante est une femme.",
    sourates: "Al-'Alaq (96:1-5)",
  },

  {
    type: 'event',
    id: 9,
    date: '610',
    titre: 'La Pause de la Révélation (Fatra)',
    contenu: `Après les cinq premiers versets, le silence. Plus rien. Des mois passent. Mohammed est dévasté. A-t-il été abandonné ? A-t-il déplu à Allah ? L'angoisse le ronge.

Et puis un jour, Jibril apparaît de nouveau. Immense. Assis sur un trône entre ciel et terre. Mohammed le voit et court chez lui, tremblant :

Jibril : « Ô toi, le revêtu d'un manteau ! Lève-toi et avertis ! Et ton Seigneur, glorifie-Le ! »

La mission commence pour de bon. Plus jamais la Révélation ne s'arrêtera — pendant 23 ans.`,
    lecon: "La pause avait un but : enseigner au Prophète que la Révélation ne dépend pas de lui mais d'Allah seul. Et créer en lui le désir ardent de la retrouver.",
    sourates: 'Al-Mouddathir (74:1-5)',
  },

  {
    type: 'event',
    id: 10,
    date: '610-613',
    titre: 'Les Premiers Croyants',
    contenu: `Dans le secret le plus total, les premiers embrassent l'Islam. Quatre personnes, quatre catégories de la société :

Khadija — la première femme. Elle n'hésite pas une seconde. Elle connaît son mari mieux que quiconque.

Abou Bakr — le premier homme libre. Riche commerçant respecté, il croit immédiatement et commence à convertir ses amis.

'Ali ibn Abi Talib — le premier enfant. Environ 10 ans. Cousin du Prophète, il vit chez lui. Il embrasse l'Islam avec la pureté de l'enfance.

Zayd ibn Haritha — le premier affranchi. Ancien esclave libéré par Mohammed, il le choisit lui plutôt que son propre père biologique.

Pendant 3 ans, la da'wa est secrète. Les réunions se font dans la maison d'Al-Arqam ibn Abi l-Arqam. Ils sont une poignée face à un empire de pierre.`,
    lecon: "Les quatre premiers croyants représentent les quatre piliers de la société : une femme, un homme libre, un enfant, un affranchi. L'Islam abolit les barrières dès le premier jour.",
    sourates: 'Al-Mouzzammil (73), Al-Fatiha (1)',
  },

  {
    type: 'section',
    emoji: '📣',
    titre: 'Phase Publique (613-619)',
    sousTitre: "6 ans de persécution. La da'wa au grand jour. Le prix de la vérité.",
  },

  {
    type: 'event',
    id: 11,
    date: '613',
    titre: 'La Da\u2019wa Publique depuis le Mont Safa',
    contenu: `L'ordre tombe : « Avertis tes proches les plus proches » (26:214). Mohammed monte sur le mont Safa et crie les noms des clans un par un — Banu Hachim ! Banu 'Abd al-Mouttalib ! Banu Zuhra ! Les Mecquois se rassemblent, intrigués. Al-Amine les a appelés — c'est forcément important.

Mohammed : « Si je vous disais qu'une armée se cache derrière cette colline, prête à vous attaquer, me croiriez-vous ? »

La foule : « Oui ! Nous ne t'avons jamais entendu mentir ! »

Mohammed : « Alors je suis un avertisseur pour vous devant un châtiment terrible. Dites : Il n'y a de dieu qu'Allah. »

Le silence. Puis une voix féroce perce la foule — celle de son propre oncle, Abou Lahab :

Abou Lahab : « Périsses-tu ! Est-ce pour cela que tu nous as rassemblés ?! »

La réponse d'Allah est immédiate et définitive : « Que périssent les deux mains d'Abou Lahab, et qu'il périsse ! » La sourate Al-Masad descend — une prophétie en acte : Abou Lahab et sa femme mourront mécréants. Malgré 20 ans pour la démentir, elle ne sera jamais démentie.`,
    lecon: "Ce verset est un défi ouvert. Il aurait suffi à Abou Lahab de prononcer la chahada — même par ruse — pour invalider le Coran. Il ne l'a jamais fait.",
    sourates: 'Al-Masad (111)',
  },

  {
    type: 'event',
    id: 12,
    date: '614-615',
    titre: 'Le Sang des Premiers Martyrs',
    contenu: `La persécution commence, et elle est féroce. Les puissants de Qouraych s'acharnent sur les plus faibles — ceux qui n'ont pas de clan pour les protéger.

Bilal ibn Rabah, esclave noir d'Oumayya ibn Khalaf. Chaque jour, son maître le traîne dans le désert brûlant, pose un rocher énorme sur sa poitrine et exige qu'il renie l'Islam. Bilal, écrasé, le souffle coupé, ne répète qu'un mot :

Bilal : « Ahad... Ahad... (Un seul... Un seul...) »

Abou Bakr le rachète au prix fort et le libère.

La famille de Yassir. 'Ammar, son père Yassir et sa mère Soumayya sont torturés en public. Le Prophète passe devant eux, impuissant, le cœur brisé :

Le Prophète : « Patience, famille de Yassir ! Votre rendez-vous est le Paradis. »

Abou Jahl enfonce sa lance dans le bas-ventre de Soumayya. Elle meurt. Première martyre de l'Islam. Une femme. Une esclave.

Khabbab ibn al-Aratt est placé sur des charbons ardents. Son dos fond. Il vient se plaindre au Prophète :

Le Prophète : « Avant vous, un homme était scié en deux au nom de sa foi sans renier. Mais vous êtes pressés. »`,
    lecon: "Les premiers martyrs de l'Islam sont un esclave, une femme âgée et un affranchi. Ce n'est pas un hasard : l'Islam commence par libérer les plus opprimés.",
    sourates: "Al-'Ankaboute (29:1-2), Al-Bourouj (85)",
  },

  {
    type: 'event',
    id: 13,
    date: '615',
    titre: "La Première Hijra — L'Abyssinie",
    contenu: `Le Prophète prend une décision radicale : envoyer un groupe de musulmans se réfugier en Abyssinie (actuelle Éthiopie), chez le Négus An-Najachi, un roi chrétien réputé juste.

Qouraych envoie deux ambassadeurs avec des cadeaux luxueux pour convaincre le Négus de les livrer. Le Négus convoque les musulmans et demande à Ja'far ibn Abi Talib de parler.

Ja'far se lève et prononce l'un des plus beaux discours de l'histoire de l'Islam :

Ja'far : « Ô roi ! Nous étions un peuple d'ignorance : nous adorions des idoles, nous mangions les bêtes mortes, nous commettions les turpitudes, nous rompions les liens de parenté, le fort d'entre nous dévorait le faible. Nous étions ainsi jusqu'à ce qu'Allah nous envoie un Messager que nous connaissions — sa lignée, sa sincérité, son honnêteté, sa chasteté. Il nous a appelés à Allah pour L'unifier et L'adorer... »

Puis il récite le début de sourate Maryam — l'histoire de la naissance de 'Issa (Jésus). Le Négus pleure. Il trace une ligne par terre avec son bâton :

Le Négus : « Par Dieu, la différence entre ce que vous dites et ce que Jésus a apporté ne dépasse pas cette ligne. »

Il refuse de les livrer. Les ambassadeurs de Qouraych repartent humiliés.`,
    lecon: "Le Prophète a choisi un roi chrétien pour protéger les musulmans. La justice n'a pas de religion.",
    sourates: 'Maryam (19)',
  },

  {
    type: 'event',
    id: 14,
    date: '616-619',
    titre: 'Le Boycott de Banu Hachim — 3 Ans de Famine',
    contenu: `Qouraych rédige un pacte inique et l'affiche dans la Ka'ba : boycott total du clan de Banu Hachim. Plus de commerce, plus de mariage, plus de contact. Quiconque aide les musulmans sera traité comme eux.

Pendant TROIS ANS, les musulmans et tout le clan de Banu Hachim (même les non-musulmans par solidarité tribale) vivent enfermés dans la vallée d'Abou Talib. Ils mangent des feuilles d'arbres. Les enfants pleurent de faim la nuit — leurs cris sont entendus dans tout le quartier.

Le Prophète maigrit. Khadija, qui était riche, dépense tout ce qu'elle a pour nourrir la communauté. Sa fortune fond.

Au bout de 3 ans, quelques Mecquois de conscience se révoltent. Ils vont à la Ka'ba pour déchirer le pacte et découvrent que les termites ont mangé tout le document sauf le nom d'Allah.

Le boycott est levé. Mais les dégâts sont faits. Khadija est affaiblie. Abou Talib est épuisé.`,
    lecon: "Ce boycott a testé la communauté jusqu'à l'os. Mais il a aussi montré que même les non-musulmans de Banu Hachim ont préféré souffrir avec les leurs plutôt que de les trahir.",
    sourates: "Al-An'am (6), Al-A'raf (7), Younous (10), Houd (11)",
  },

  {
    type: 'section',
    emoji: '💔',
    titre: 'Fin de la Période Mecquoise (619-622)',
    sousTitre: "L'année de la tristesse, le Voyage nocturne, et l'émigration qui changera le monde.",
  },

  {
    type: 'event',
    id: 15,
    date: '619',
    titre: "L'Année de la Tristesse ('Am al-Houzn)",
    contenu: `Le boycott est à peine levé que le malheur frappe. Deux fois.

Khadija meurt. La femme qui l'a rassuré quand il tremblait dans la grotte. La première à avoir cru. Son amour, son soutien, sa forteresse pendant 25 ans de mariage. Le Prophète ne s'en remettra jamais complètement. Des années plus tard, 'A'icha sera jalouse d'une femme morte :

'A'icha : « Allah t'a donné mieux qu'elle ! »

Le Prophète : « Non ! Allah ne m'a pas donné mieux qu'elle. Elle a cru en moi quand tout le monde me traitait de menteur. Elle m'a donné ses biens quand tout le monde m'a privé. Et Allah m'a donné des enfants par elle. »

Quelques semaines plus tard, Abou Talib meurt. L'oncle protecteur, le bouclier tribal. Sans lui, les Qouraychites ont les mains libres. Le Prophète perd en quelques semaines son soutien intime ET sa protection publique.`,
    lecon: "L'épreuve la plus dure n'est pas physique. C'est la perte de ceux qu'on aime.",
  },

  {
    type: 'event',
    id: 16,
    date: '619',
    titre: "Le Rejet de Ta'if",
    contenu: `Sans protection à La Mecque, le Prophète marche 100 km à pied jusqu'à Ta'if, ville montagneuse, pour trouver de nouveaux alliés. Il rencontre les chefs de la tribu de Thaqif. Ils le rejettent avec mépris.

Pire : ils envoient leurs enfants et leurs esclaves le poursuivre en lui jetant des pierres. Le Prophète court, ensanglanté. Le sang coule jusqu'à tremper ses sandales. Il se réfugie dans un jardin, épuisé, seul.

Jibril apparaît avec l'ange des montagnes :

L'ange des montagnes : « Ô Mohammed ! Si tu le souhaites, j'écrase Ta'if entre ces deux montagnes. »

Le Prophète, le visage couvert de sang, répond :

Le Prophète : « Non. J'espère qu'Allah fera sortir de leurs reins des gens qui L'adoreront sans rien Lui associer. »

C'est peut-être le moment le plus grand de la Sira. Le jour le plus dur de sa vie. Et il choisit le pardon.`,
    lecon: "Le Prophète est envoyé comme miséricorde, pas comme châtiment. Ta'if embrassera l'Islam quelques années plus tard.",
  },

  {
    type: 'event',
    id: 17,
    date: '620',
    titre: "L'Isra' wal-Mi'raj — Le Voyage Nocturne et l'Ascension",
    contenu: `Après le plus bas, le plus haut. Après Ta'if, le Ciel.

Une nuit, le Prophète est transporté par Al-Bouraq de La Mecque à Jérusalem (Al-Masjid al-Aqsa). Là, il dirige la prière devant TOUS les prophètes précédents — Adam, Ibrahim, Moussa, 'Issa... Tous derrière lui.

Puis l'Ascension. Jibril l'accompagne à travers les sept cieux. À chaque ciel, un prophète l'accueille. Au premier : Adam. Au deuxième : 'Issa et Yahya. Au troisième : Youssof. Au quatrième : Idris. Au cinquième : Haroun. Au sixième : Moussa. Au septième : Ibrahim, adossé au Bayt al-Ma'mour (la Ka'ba céleste).

Au Lotus de la Limite (Sidrat al-Mountaha), Jibril s'arrête :

Jibril : « Au-delà de ce point, je ne peux avancer. »

Mohammed continue seul. Allah lui prescrit 50 prières par jour. En redescendant, Moussa l'intercepte :

Moussa : « Retourne vers ton Seigneur ! Ton peuple ne pourra pas. J'ai essayé avec les fils d'Isra'il, je sais de quoi je parle. »

Mohammed remonte. Plusieurs fois, il négocie. Jusqu'à 5 prières, avec la récompense de 50.

Le lendemain, quand il raconte le voyage, les Mecquois rient. Même certains musulmans doutent. Mais Abou Bakr ne cille pas :

Abou Bakr : « S'il le dit, c'est vrai. Je le crois pour des choses bien plus grandes que cela — la Révélation qui vient du ciel chaque matin et chaque soir. »

Ce jour-là, Abou Bakr reçoit le surnom éternel : As-Siddiq, le Véridique.`,
    lecon: "Après la plus grande épreuve, Allah donne la plus grande consolation. Et les 5 prières quotidiennes deviennent le cadeau de ce voyage.",
    sourates: 'Al-Isra (17), An-Najm (53)',
  },

  {
    type: 'event',
    id: 18,
    date: '620-622',
    titre: "Les Serments d'Al-'Aqaba — Médine ouvre ses bras",
    contenu: `Chaque année, des tribus viennent à La Mecque pour le pèlerinage. Le Prophète va de campement en campement, proposant l'Islam. Personne n'accepte. Jusqu'au jour où 6 hommes de Médine, de la tribu des Khazraj, l'écoutent.

Médine est déchirée par une guerre civile entre Aws et Khazraj. Ces hommes cherchent un arbitre. Le message du Prophète les touche. Ils rentrent à Médine et parlent de lui.

L'année suivante, 12 Médinois reviennent et prêtent le Premier Serment d'Al-'Aqaba. Mous'ab ibn 'Oumayr est envoyé comme enseignant — en un an, il convertit la quasi-totalité des leaders de Médine.

Puis le Second Serment d'Al-'Aqaba. 73 hommes et 2 femmes, dans la nuit noire, dans le secret. Ils jurent de protéger le Prophète comme ils protègent leurs propres familles.

Al-'Abbas (oncle du Prophète) : « Savez-vous ce que cela implique ? Vous vous mettrez en guerre contre les Arabes rouges et noirs. Si vous pensez le livrer quand cela deviendra dur, alors laissez-le maintenant. »

Les Médinois : « Nous savons. Et nous acceptons. »

Le feu vert est donné. La Hijra peut commencer.`,
    lecon: "Quand une porte se ferme (La Mecque), Allah en ouvre une autre (Médine). Mais Médine ne tombe pas du ciel — il a fallu des années de patience et de da'wa.",
  },

  {
    type: 'event',
    id: 19,
    date: '622, Safar-Rabi\u2019 I',
    titre: "La Hijra — L'Émigration qui changea le monde",
    contenu: `Les musulmans émigrent discrètement, par petits groupes. La Mecque se vide. Qouraych commence à paniquer. Ils se réunissent au Dar an-Nadwa pour décider du sort de Mohammed.

Certains proposent l'exil, d'autres la prison. Abou Jahl propose le plan final : un jeune homme de chaque clan frappera Mohammed simultanément. Le sang sera réparti entre tous les clans. Banu Hachim ne pourra pas se venger de tous.

Mais Jibril avertit le Prophète. Cette nuit-là, 'Ali ibn Abi Talib, 23 ans, dort dans le lit du Prophète, couvert de son manteau vert. Les assassins entourent la maison. Mohammed sort au milieu d'eux, récitant le début de sourate Ya-Sin — Allah les aveugle. Il marche entre eux sans être vu.

Avec Abou Bakr, ils prennent la direction du SUD (opposée à Médine) pour semer les poursuivants. Ils se cachent 3 jours dans la grotte de Thawr. Les Qouraychites arrivent à l'entrée. Abou Bakr tremble :

Abou Bakr : « Ô Messager d'Allah ! Si l'un d'eux regarde sous ses pieds, il nous verra ! »

Le Prophète : « Que penses-tu de deux personnes dont Allah est le troisième ? »

La tradition rapporte qu'une araignée tissa sa toile à l'entrée et qu'un pigeon y pondit ses œufs. Les poursuivants passèrent sans entrer.

Asma' bint Abi Bakr, enceinte, leur apporte la nourriture en cachette, déchirant sa ceinture en deux pour attacher les provisions. Sur le chemin de Médine, Souraqa ibn Malik les poursuit pour la prime de 100 chameaux. Son cheval s'enfonce dans le sable. Deux fois. Trois fois. Il comprend et fait demi-tour.

Le Prophète à Souraqa : « Que dirais-tu si tu portais les bracelets de Chosroès ? »

Une prophétie impensable — un fugitif sans le sou promettant les bracelets de l'empereur de Perse. Mais Souraqa les portera effectivement, 15 ans plus tard, après la conquête de la Perse par 'Omar.

Arrivée à Médine. Les Ansar sortent sur la route, chantant :

Les Ansar : « Tala'a l-Badrou 'alayna ! (La pleine lune s'est levée sur nous !) »

C'est le début du calendrier islamique. L'histoire du monde vient de changer.`,
    lecon: "La Hijra n'est pas une fuite. C'est un plan divin. Elle enseigne que parfois, quitter ce qu'on aime est le premier pas vers la victoire.",
    sourates: 'At-Tawba (9:40), Ya-Sin (36:9)',
  },

  // ============================================================
  // CHAPITRE III — LA PÉRIODE MÉDINOISE
  // ============================================================
  { type: 'chapter', numero: 'III', titre: 'La Période Médinoise' },

  {
    type: 'section',
    emoji: '🏗️',
    titre: 'Établissement (622-624)',
    sousTitre: "Construire un État, une fraternité, une identité. Et se préparer au combat.",
  },

  {
    type: 'event',
    id: 20,
    date: '622',
    titre: 'La Mosquée et la Fraternisation',
    contenu: `Le Prophète arrive à Qouba, banlieue de Médine. Il y construit la première mosquée de l'Islam (Masjid Qouba). Puis il entre à Médine et sa chamelle s'agenouille sur un terrain vague. « C'est ici », dit-il. La mosquée de Médine (Al-Masjid an-Nabawi) est construite en briques crues et troncs de palmier. Le Prophète porte les briques lui-même.

Puis vient un geste révolutionnaire : la fraternisation (al-mouakhaat). Chaque Mouhajir (émigré mecquois, qui a tout perdu) est apparié à un Ansari (Médinois). L'Ansari partage la moitié de ses biens, de sa maison, de ses terres.

Abderrahman ibn 'Awf, riche commerçant mecquois désormais sans le sou, est apparié à Sa'd ibn ar-Rabi' qui lui propose la moitié de ses biens et même une de ses épouses (par divorce). Abderrahman refuse avec élégance :

Abderrahman : « Qu'Allah bénisse ta famille et tes biens. Indique-moi seulement le chemin du marché. »

En quelques semaines, il rebâtit sa fortune.`,
    lecon: "L'Islam ne dit pas seulement « soyez frères ». Il organise la fraternité concrètement : partage des biens, des maisons, des terres. C'est un système, pas un vœu pieux.",
  },

  {
    type: 'event',
    id: 21,
    date: '622',
    titre: 'La Constitution de Médine (Sahifat al-Madina)',
    contenu: `Le Prophète rédige un document constitutionnel révolutionnaire pour son époque : un pacte écrit entre les musulmans, les tribus juives et les païens de Médine. Principes :

Les musulmans forment une Oumma unique. Les juifs de Médine sont libres de pratiquer leur religion. Aucune tribu ne peut conclure de paix séparée. Médine est un sanctuaire : pas de violence dans ses murs. En cas de conflit, Mohammed est l'arbitre final.

C'est un document remarquable pour le 7e siècle : il pose la liberté religieuse, la défense commune, la justice interne et l'autorité d'un chef accepté par consentement.`,
    lecon: "Bien avant les déclarations modernes des droits de l'homme, Médine avait une constitution écrite garantissant la liberté religieuse et l'égalité devant la loi.",
  },

  {
    type: 'event',
    id: 22,
    date: '623-624',
    titre: 'Le Changement de Qibla',
    contenu: `Pendant 16 à 17 mois à Médine, les musulmans prient vers Jérusalem. Le Prophète lève souvent le regard vers le ciel, comme s'il attendait quelque chose.

Un jour, en pleine prière de Dhouhr dans la mosquée de Banu Salima, la révélation descend :

Allah : « Tourne ton visage vers la Mosquée sacrée (la Ka'ba). Où que vous soyez, tournez-y vos visages. »

Le Prophète pivote en pleine prière — du nord vers le sud. Les rangs pivotent derrière lui. La mosquée de Banu Salima s'appellera désormais Masjid al-Qiblatayn (la mosquée aux deux qiblas).

Les juifs de Médine s'indignent. Les hypocrites s'en servent comme argument. Mais pour les musulmans, c'est un moment identitaire majeur : l'Islam affirme son indépendance — ni judaïsme, ni christianisme, mais la voie d'Ibrahim.`,
    lecon: "La Qibla n'est pas qu'une direction. C'est un choix d'identité. Se tourner vers la Ka'ba, c'est se rattacher à Ibrahim et au monothéisme originel.",
    sourates: 'Al-Baqara (2:144)',
  },

  {
    type: 'section',
    emoji: '⚔️',
    titre: 'Les Batailles Décisives (624-627)',
    sousTitre: "Trois batailles qui forgeront à jamais la communauté musulmane.",
  },

  {
    type: 'event',
    id: 23,
    date: '624, 17 Ramadan',
    titre: "La Bataille de Badr — Le Tournant de l'Histoire",
    contenu: `Les musulmans interceptent une caravane commerciale d'Abou Soufyan. Mais la caravane leur échappe et Qouraych envoie une armée de représailles : environ 1000 guerriers, 100 chevaux, 700 chameaux. Face à eux : 313 musulmans. 2 chevaux. 70 chameaux. La plupart mal équipés.

Le Prophète passe la nuit en prière. Il supplie Allah avec une intensité que ses compagnons n'ont jamais vue :

Le Prophète : « Ô Allah ! Si ce groupe périt aujourd'hui, Tu ne seras plus adoré sur terre ! »

Abou Bakr le prend par l'épaule :

Abou Bakr : « Ô Messager d'Allah, Allah tiendra Sa promesse. »

L'aube se lève. Les deux armées se font face à Badr. Les duels commencent. 'Ali, Hamza et 'Oubayda affrontent trois champions de Qouraych et les terrassent. Puis l'assaut général.

Et Allah envoie Ses anges. Le sable se soulève. Les Mecquois voient des guerriers qu'ils ne peuvent pas atteindre. La panique se répand. Abou Jahl — le « Pharaon de cette communauté » — est tué. 70 chefs de Qouraych meurent. 70 sont faits prisonniers.

Le débat sur les prisonniers. 'Omar veut les exécuter. Abou Bakr propose la rançon. Le Prophète choisit la rançon — et mieux : chaque prisonnier lettré qui enseigne la lecture à 10 enfants musulmans sera libéré gratuitement.

Badr est LE tournant. Avant Badr, l'Islam était un mouvement de réfugiés. Après Badr, c'est une puissance.`,
    lecon: "« Ce n'est pas vous qui les avez tués, c'est Allah qui les a tués » (8:17). La victoire appartient à Allah. Et le premier acte après la victoire est d'enseigner la lecture.",
    sourates: 'Al-Anfal (8)',
  },

  {
    type: 'event',
    id: 24,
    date: '625, Chawwal',
    titre: "La Bataille d'Ouhoud — Le Prix de la Désobéissance",
    contenu: `Qouraych veut sa revanche. 3000 guerriers sous Abou Soufyan marchent sur Médine. Le Prophète hésite entre rester à Médine (position défensive) ou sortir. Les jeunes compagnons, brûlant de zèle, insistent pour sortir. Il accepte.

Mais en route, Abdallah ibn Oubayy (chef des hypocrites) fait demi-tour avec 300 hommes — un tiers de l'armée. Il reste 700 musulmans contre 3000.

Le Prophète place 50 archers sur le mont Ouhoud avec un ordre formel :

Le Prophète : « Ne quittez PAS cette position, même si vous voyez les oiseaux nous dévorer ! »

Le combat commence. Les musulmans dominent. Les Mecquois fuient. Le butin est au sol. Et là... les archers regardent en bas. L'or brille. La tentation est trop forte. Malgré les protestations de leur chef Abdallah ibn Joubayr, la plupart descendent.

Khalid ibn al-Walid (encore païen) voit la colline vide. Il contourne avec sa cavalerie et attaque par derrière. Carnage. Les musulmans sont pris en étau. La panique se répand. Le cri retentit : « Mohammed est mort ! »

Hamza ibn 'Abd al-Mouttalib, le « Lion d'Allah », l'oncle du Prophète, est tué par la lance de Wahchi. Hind bint 'Outba lui ouvre le ventre et mâche son foie par vengeance.

Le Prophète est blessé au visage. Sa dent est cassée. Le sang coule sur son visage. Nousayba bint Ka'b (Oumm 'Imara), une femme, le défend à l'épée, recevant 12 blessures.

70 musulmans tombent en martyrs ce jour-là. La défaite est amère. Mais elle n'est pas un abandon divin — c'est une leçon.`,
    lecon: "Ouhoud enseigne que la victoire n'est pas garantie par la foi seule — il faut aussi la discipline. La désobéissance d'une poignée peut coûter la victoire de tous.",
    sourates: 'Aal-Imran (3:121-188)',
  },

  {
    type: 'event',
    id: 25,
    date: '627, Chawwal',
    titre: 'La Bataille du Fossé (Khandaq) — Le Siège de Médine',
    contenu: `La plus grande coalition jamais formée contre les musulmans. 10 000 guerriers : Qouraych, les tribus de Ghatafan, les Banu Nadir exilés, et d'autres. Ils veulent en finir définitivement.

Salman al-Farisi, le compagnon persan, propose une stratégie inédite en Arabie :

Salman : « En Perse, quand nous sommes assiégés, nous creusons un fossé. »

En 6 jours, un fossé d'environ 5 km de long est creusé au nord de Médine. Le Prophète creuse avec eux, la poussière sur le visage, la faim au ventre.

Pendant le creusement, un énorme rocher bloque les pelles. Le Prophète le frappe trois fois. À chaque coup, une étincelle :

Le Prophète : « La première étincelle : les clés de la Perse me sont données. La deuxième : les clés de Byzance. La troisième : les clés du Yémen. »

Les hypocrites rient. Un homme assiégé dans un fossé qui promet les empires du monde.

Le siège dure environ 25 jours. Froid, faim, peur. Les ennemis sont partout. Puis la trahison : les Banu Qurayza (dernière tribu juive de Médine, alliée par le pacte) négocient avec les coalisés pour attaquer les musulmans de l'intérieur. La panique est à son comble.

Mais Allah intervient. Un vent violent se lève dans la nuit. Les tentes des coalisés s'envolent. Leurs feux s'éteignent. Leurs marmites se renversent. Au matin, le camp est vide. 10 000 hommes ont disparu dans la nuit.

Le Prophète : « Désormais, c'est nous qui les attaquerons, et non plus eux. »`,
    lecon: "Khandaq est la dernière offensive de Qouraych. Après ce siège, l'initiative change de camp à jamais. Et les trois prophéties du rocher se réaliseront en moins de 15 ans.",
    sourates: 'Al-Ahzab (33)',
  },

  {
    type: 'section',
    emoji: '🏆',
    titre: 'Vers la Victoire (628-630)',
    sousTitre: "De la diplomatie à la conquête. La patience porte ses fruits.",
  },

  {
    type: 'event',
    id: 26,
    date: '628, Dhoul-Qi\u2019da',
    titre: "Al-Houdaybiya — La Victoire Déguisée en Défaite",
    contenu: `Le Prophète voit en rêve qu'il fait la 'Omra à La Mecque. Il part avec 1400 compagnons, en tenue de pèlerinage (ihram), sans armes de guerre — seulement une épée de voyage. Ils emmènent 70 chameaux pour le sacrifice.

Qouraych bloque l'accès. Négociations tendues. Plusieurs émissaires. 'Othman est envoyé à La Mecque et retenu — la rumeur dit qu'il est tué. Le Prophète s'assoit sous un arbre et les compagnons jurent de se battre jusqu'à la mort : c'est la Bay'at ar-Ridwan (le Serment de l'Agrément).

'Othman revient sain et sauf. Un traité est signé. Les conditions semblent humiliantes : pas de 'Omra cette année (retour l'année suivante), tout Mecquois qui rejoint les musulmans sera RENVOYÉ (pas l'inverse), paix de 10 ans.

'Omar est furieux. Il va voir le Prophète :

'Omar : « N'es-tu pas le Prophète d'Allah ? Ne sommes-nous pas sur la vérité ? »

Le Prophète : « Si. »

'Omar : « Alors pourquoi accepter cette humiliation ?! »

Le Prophète : « Je suis le serviteur d'Allah et Son messager. Je ne Lui désobéirai pas et Il ne me perdra pas. »

Les compagnons refusent de se raser la tête et de sacrifier leurs bêtes (signe de clôture du pèlerinage sans l'avoir fait). Oumm Salama, épouse du Prophète, lui donne un conseil de génie :

Oumm Salama : « Sors, ne dis rien à personne, rase ta tête et égorge ton sacrifice. Ils suivront. »

Il le fait. Les compagnons suivent en pleurant.

Sur le chemin du retour, la révélation descend :

Allah : « Nous t'avons accordé une victoire éclatante. »

Le résultat ? En 2 ans de paix, PLUS de gens embrassent l'Islam qu'en 18 ans de guerre. Parmi eux : Khalid ibn al-Walid et 'Amr ibn al-'As, deux génies militaires qui changeront la face du monde.`,
    lecon: "Houdaybiya enseigne que la vraie victoire n'est pas toujours celle qu'on voit. Ce qui semble une défaite peut être le plus grand triomphe. Le critère n'est pas l'apparence immédiate mais le plan d'Allah à long terme.",
    sourates: 'Al-Fath (48)',
  },

  {
    type: 'event',
    id: 27,
    date: '629',
    titre: 'La Bataille de Mou\u2019ta — Face à Byzance',
    contenu: `Première confrontation majeure avec l'Empire byzantin. Un ambassadeur musulman est tué par le gouverneur de Bosra. Le Prophète envoie 3000 hommes. À Mou'ta (dans le sud de la Jordanie actuelle), ils font face à une armée byzantine et arabe chrétienne considérablement supérieure en nombre.

Trois commandants sont désignés à l'avance. Zayd ibn Haritha tombe en premier. Ja'far ibn Abi Talib saisit le drapeau. Les deux bras coupés, il serre l'étendard avec ses moignons ensanglantés. Il tombe. Abdallah ibn Rawaha hésite un instant, se mord la main, puis charge. Il tombe.

Le drapeau est au sol. Khalid ibn al-Walid — converti depuis quelques mois seulement — le ramasse et organise un retrait stratégique brillant. Il fait tourner ses ailes toute la nuit pour donner l'impression de renforts. Au matin, l'ennemi hésite. L'armée musulmane se replie intacte.

À Médine, le Prophète a tout vu par révélation. Les larmes coulent sur ses joues :

Le Prophète : « Zayd a pris le drapeau et a été frappé. Puis Ja'far l'a pris et a été frappé. Puis Ibn Rawaha l'a pris et a été frappé. — Et il pleurait. — Puis une épée parmi les épées d'Allah l'a pris et Allah leur a ouvert. »

Ce jour-là, Khalid reçoit le surnom de « Sayfoullah » — l'Épée d'Allah.`,
    lecon: "Le courage n'est pas l'absence de peur. C'est charger quand on sait qu'on va mourir. Ja'far avec ses moignons est l'image éternelle de cette vérité.",
  },

  {
    type: 'event',
    id: 28,
    date: '630, Ramadan',
    titre: 'La Conquête de La Mecque — Le Retour du Fils',
    contenu: `Qouraych viole le traité d'Al-Houdaybiya en attaquant les Banu Khouza'a (alliés des musulmans). Abou Soufyan se précipite à Médine pour renouveler le traité, mais personne ne le reçoit. Le Prophète prépare secrètement la plus grande armée jamais vue en Arabie : 10 000 hommes.

La nuit, aux portes de La Mecque. 10 000 feux de camp illuminent la vallée. Abou Soufyan, envoyé en éclaireur par 'Abbas (oncle du Prophète), voit le spectacle et pâlit :

'Abbas : « Malheur à toi, Abou Soufyan ! Embrasse l'Islam avant de perdre la tête. »

Abou Soufyan embrasse l'Islam. Le Prophète lui accorde un honneur :

Le Prophète : « Quiconque entre dans la maison d'Abou Soufyan est en sécurité. »

L'armée entre dans La Mecque par quatre côtés simultanément. AUCUN combat majeur — seulement une escarmouche mineure au sud avec Khalid. Le Prophète entre dans la ville qui l'a chassé, persécuté, boycotté, tenté de tuer.

Il entre humblement. La tête si baissée sur sa monture que sa barbe touche la selle. Il récite sourate Al-Fath.

Il va à la Ka'ba. 360 idoles l'entourent. Avec son bâton, il les fait tomber une par une en récitant :

Le Prophète : « La vérité est venue, le faux a disparu. Certes, le faux est voué à disparaître. »

Puis il se tourne vers les Qouraychites rassemblés — ceux qui l'ont torturé, boycotté, chassé :

Le Prophète : « Ô Qouraych ! Que pensez-vous que je vais faire de vous ? »

Qouraych : « Du bien. Tu es un frère noble, fils d'un frère noble. »

Le Prophète : « Allez, vous êtes libres. »

AMNISTIE GÉNÉRALE. Pas de représailles. Pas de vengeance. Pas de sang. Hind bint 'Outba, qui avait mâché le foie de Hamza, embrasse l'Islam ce jour-là.

Bilal — l'ancien esclave torturé sous les rochers de La Mecque — monte sur le toit de la Ka'ba et lance l'Adhan. Sa voix résonne dans la ville entière. Les idolâtres qui l'avaient torturé l'écoutent en silence.`,
    lecon: "La plus grande victoire n'est pas militaire. C'est le pardon. Le Prophète avait le pouvoir de détruire — il a choisi de pardonner. Et ce pardon a converti plus de cœurs que n'importe quelle bataille.",
    sourates: 'An-Nasr (110), Al-Isra (17:81)',
  },

  {
    type: 'section',
    emoji: '✅',
    titre: 'Achèvement (630-632)',
    sousTitre: "Les dernières batailles. Le Hajj d'adieu. Le départ du Prophète.",
  },

  {
    type: 'event',
    id: 29,
    date: '630',
    titre: 'Hounayn, Ta\u2019if et Tabouk',
    contenu: `Juste après la conquête, les tribus de Hawazin et Thaqif rassemblent une armée estimée à 20 000 guerriers. Les musulmans sont 12 000 — la plus grande armée jamais rassemblée par le Prophète. Certains murmurent : « Nous ne serons pas vaincus par le nombre aujourd'hui. »

C'est exactement cette arrogance qu'Allah teste. Dans la vallée de Hounayn, embuscade. Des milliers de flèches pleuvent. Panique totale. L'armée fuit. Le Prophète reste seul avec une poignée de compagnons, sur sa mule blanche, criant :

Le Prophète : « Ô serviteurs d'Allah ! Je suis le Prophète, ce n'est pas un mensonge ! Je suis le fils d''Abd al-Mouttalib ! »

'Abbas crie à pleins poumons les noms des compagnons de l'arbre (Houdaybiya) et des compagnons de Badr. Ils reviennent. La victoire est totale.

Puis Ta'if est assiégée. C'est la ville qui l'avait lapidé. Le siège échoue. Le Prophète lève le siège et prie pour eux. Ils embrasseront l'Islam l'année suivante.

Puis Tabouk — 700 km au nord, en pleine canicule. 30 000 hommes marchent vers les Byzantins. Les hypocrites restent. Les sincères marchent. Sourate At-Tawba les démasque un par un.`,
    lecon: "« Ce n'est pas par le nombre que vous serez vaincus » — cette pensée elle-même a causé la défaite initiale à Hounayn. La confiance doit être en Allah, pas dans les effectifs.",
    sourates: 'At-Tawba (9:25-26, 9:118)',
  },

  {
    type: 'event',
    id: 30,
    date: '632, Dhoul-Hijja',
    titre: "Le Hajj d'Adieu — Le Testament du Prophète",
    contenu: `Plus de 100 000 compagnons. Le Prophète accomplit son unique et dernier Hajj. Sur le mont 'Arafat, il prononce le Sermon d'adieu — l'un des plus grands discours de l'histoire humaine :

Le Prophète : « Ô gens ! Votre sang, vos biens et votre honneur sont sacrés, comme ce jour est sacré, dans ce mois sacré, dans cette terre sacrée. »

Le Prophète : « Pas de supériorité d'un Arabe sur un non-Arabe, ni d'un non-Arabe sur un Arabe, ni d'un Blanc sur un Noir, ni d'un Noir sur un Blanc — sauf par la piété. »

Le Prophète : « Traitez vos femmes avec bonté ! Elles sont vos partenaires et vos compagnes dévouées. »

Le Prophète : « Ai-je transmis le message ? »

100 000 voix : « OUI ! »

Le Prophète : « Ô Allah, sois témoin ! »

Ce jour-là, le dernier verset de la législation descend sur 'Arafat :

Allah : « Aujourd'hui, J'ai parachevé pour vous votre religion, J'ai complété Mon bienfait sur vous, et J'ai agréé l'Islam comme religion pour vous. »

'Omar pleure en entendant ce verset. On lui demande pourquoi. Il répond : « Ce qui est parachevé ne peut que décliner. » Il a compris que le départ du Prophète est proche.`,
    lecon: "Le Sermon d'adieu est un appel à l'égalité raciale, aux droits des femmes, à la sacralité de la vie — bien avant les déclarations modernes.",
    sourates: "Al-Ma'ida (5:3)",
  },

  {
    type: 'event',
    id: 31,
    date: '632, 12 Rabi\u2019 al-Awwal',
    titre: 'Le Décès du Prophète ﷺ',
    contenu: `Le Prophète tombe malade. La fièvre le consume. Il libère ses esclaves. Il rend tout ce qu'il a emprunté. Il demande pardon à quiconque il aurait pu blesser.

Ses derniers jours, il ne peut plus diriger la prière. Il demande qu'Abou Bakr le remplace — signe clair de succession.

Le lundi matin, il écarte le rideau de la chambre de 'A'icha et voit les compagnons en rang pour la prière, Abou Bakr devant. Un sourire illumine son visage. C'est la dernière fois qu'ils voient ce sourire.

Ses derniers mots :

Le Prophète : « La prière ! La prière ! Et ce que vos mains droites possèdent (les esclaves)... »

Puis, la tête sur les genoux de 'A'icha, levant le doigt vers le ciel :

Le Prophète : « Plutôt le Compagnon le plus Haut... Plutôt le Compagnon le plus Haut... »

Sa main retombe. Il est parti. Il a 63 ans.

Médine s'effondre. 'Omar, sous le choc, sort l'épée :

'Omar : « Quiconque dit que Mohammed est mort, je lui trancherai la tête ! Il est allé rencontrer son Seigneur comme Moïse et il reviendra ! »

Abou Bakr arrive. Il entre dans la chambre, embrasse le front du Prophète et murmure : « Que tu es beau, vivant ou mort. » Puis il sort face à la foule et prononce les mots qui rétablissent le calme :

Abou Bakr : « Quiconque adorait Mohammed, que Mohammed est mort. Et quiconque adore Allah, qu'Allah est vivant et ne meurt pas. »

Puis il récite : « Mohammed n'est qu'un messager. Des messagers avant lui sont déjà passés. S'il mourait ou était tué, retourneriez-vous sur vos pas ? » (3:144)

'Omar dit plus tard : « Quand j'ai entendu Abou Bakr réciter ce verset, mes jambes m'ont lâché. J'ai compris que le Prophète était vraiment mort. »`,
    lecon: "Le Prophète est mort en ne possédant presque rien. Son bouclier était en gage chez un juif pour de l'orge. Il a vécu en serviteur et est parti en serviteur.",
    sourates: 'Aal-Imran (3:144)',
  },

  // ============================================================
  // CHAPITRE IV — APRÈS LE PROPHÈTE
  // ============================================================
  { type: 'chapter', numero: 'IV', titre: 'Après le Prophète' },

  {
    type: 'section',
    emoji: '📜',
    titre: 'Compilation et Expansion (632-656)',
    sousTitre: "Les Califes Bien-Guidés. La préservation du Coran. La conquête du monde.",
  },

  {
    type: 'event',
    id: 32,
    date: '632-633',
    titre: "Les Guerres d'Apostasie — Abou Bakr Sauve l'Islam",
    contenu: `À peine le Prophète enterré, l'Arabie éclate. Plusieurs tribus apostasient. De faux prophètes surgissent : Moussaylima al-Kadhdhab (le plus dangereux), Sajah, Toulayhah, Al-Aswad al-'Ansi. D'autres tribus refusent simplement de payer la Zakat tout en restant « musulmanes ».

'Omar conseille la prudence. Abou Bakr se dresse avec une fermeté de fer :

Abou Bakr : « Par Allah ! Si elles me refusaient ne serait-ce qu'un licol de chameau qu'elles donnaient au Messager d'Allah, je les combattrais pour cela ! »

Plusieurs armées sont envoyées sous le commandement général de Khalid ibn al-Walid. En un an, l'Arabie est réunifiée.`,
    lecon: "Sans la fermeté d'Abou Bakr, l'Islam aurait peut-être disparu dans les premières années. La Zakat n'est pas un don volontaire — c'est un pilier de l'Islam.",
  },

  {
    type: 'event',
    id: 33,
    date: '633',
    titre: 'Yamama — Le Déclencheur de la Compilation',
    contenu: `La bataille la plus sanglante des guerres d'apostasie. L'armée musulmane fait face aux dizaines de milliers de partisans de Moussaylima. Le combat est féroce. Victoire musulmane, mais le prix est terrible : de nombreux houffadh — des compagnons récitateurs du Coran — tombent en martyrs.

'Omar vient voir Abou Bakr, alarmé :

'Omar : « Le massacre s'intensifie parmi les récitateurs du Coran. Si cela continue, une grande partie du Coran disparaîtra avec eux. Je pense que tu devrais ordonner la compilation du Coran. »

Abou Bakr : « Comment ferais-je quelque chose que le Messager d'Allah n'a pas fait ? »

'Omar : « Par Allah, c'est un bien. »

'Omar insiste. Abou Bakr finit par comprendre. Il charge Zayd ibn Thabit — le scribe le plus assidu du Prophète, qui connaît le Coran par cœur ET l'a écrit sous dictée.`,
    lecon: "Yamama montre qu'Allah utilise les épreuves pour préserver Sa religion. Sans cette bataille tragique, la compilation n'aurait peut-être pas eu lieu aussi vite.",
  },

  {
    type: 'event',
    id: 34,
    date: '633-634',
    titre: 'La Compilation sous Abou Bakr — Les Souhuf',
    contenu: `Zayd ibn Thabit hésite. C'est un fardeau immense :

Zayd : « Par Allah, si on m'avait demandé de déplacer une montagne, cela aurait été plus facile que ce qu'on me demande. »

Mais il accepte. Sa méthode est d'une rigueur sans précédent dans l'Antiquité. Pour CHAQUE verset, il exige : au minimum DEUX témoins indépendants qui ont entendu le verset directement de la bouche du Prophète, PLUS la vérification avec le support écrit original (omoplate de chameau, pierre plate, morceau de cuir, nervure de palme).

Et cela MALGRÉ le fait que Zayd lui-même connaisse le Coran par cœur. Sa mémoire seule ne suffit pas — il veut une chaîne de preuves irréfutable.

Le résultat : les Souhuf (feuillets). L'intégralité du Coran en un seul recueil, dans l'ordre que le Prophète avait indiqué lors des révisions avec Jibril. Les feuillets sont confiés à Abou Bakr, puis à 'Omar, puis à Hafsa bint 'Omar.`,
    lecon: "La méthode de Zayd est un modèle d'authentification historique. Bien avant la méthode scientifique moderne, il applique un protocole de double vérification indépendante.",
  },

  {
    type: 'event',
    id: 35,
    date: '634-644',
    titre: "Le Califat de 'Omar — L'Expansion Fulgurante",
    contenu: `Sous 'Omar, l'Islam s'étend à une vitesse stupéfiante. Les deux plus grands empires du monde s'effondrent :

636 — Yarmouk : les forces musulmanes remportent une victoire décisive contre l'armée byzantine, largement supérieure en nombre. La Syrie tombe.

636-637 — Qadisiyya : les forces musulmanes défont l'armée sassanide. L'Empire perse s'effondre.

638 — 'Omar se rend à Jérusalem pour recevoir les clés de la ville. Il arrive sur un âne, en vêtements rapiécés, alternant avec son serviteur pour monter l'âne. Le patriarche Sophrone est choqué par sa simplicité. Il lui propose de prier dans le Saint-Sépulcre. 'Omar refuse :

'Omar : « Si je prie ici, les musulmans après moi transformeront cette église en mosquée. »

Il prie à côté. L'église est préservée. Il nettoie de ses propres mains l'esplanade du Temple, désormais site d'Al-Aqsa.

641 — 'Amr ibn al-'As conquiert l'Égypte et fonde Foustat (futur Le Caire).

'Omar instaure le calendrier hégirien, le Bayt al-Mal (trésor public), le système judiciaire, la solde des soldats. Il patrouille la nuit dans Médine déguisé, pour vérifier que personne ne souffre.

644 — Il est assassiné par Abou Lou'lou'a al-Majousi (un esclave persan) pendant la prière du Fajr.`,
    lecon: "'Omar conquérait des empires le jour et portait des vêtements rapiécés la nuit. Le pouvoir en Islam est un service, pas un privilège.",
  },

  {
    type: 'event',
    id: 36,
    date: '644-656',
    titre: "Le Califat de 'Othman et la Standardisation du Coran",
    contenu: `L'Islam continue de s'étendre. Mais un problème apparaît : les nouveaux convertis de Perse, de Syrie, d'Irak et d'Égypte récitent le Coran dans des dialectes arabes différents. Les disputes éclatent.

Houdhayfa ibn al-Yaman, de retour du front en Arménie, alerte 'Othman :

Houdhayfa : « Ô Commandeur des croyants ! Sauve cette communauté avant qu'elle ne diverge sur le Livre comme les juifs et les chrétiens ont divergé ! »

'Othman forme une commission de 4 : Zayd ibn Thabit (le compilateur original) et 3 Qouraychites. Règle : en cas de désaccord sur la prononciation, le dialecte de Qouraych (celui du Prophète) prévaut.

À partir des Souhuf de Hafsa, la commission produit plusieurs copies identiques du Coran en un seul dialecte standard. 'Othman envoie une copie à chaque grande ville (La Mecque, Médine, Koufa, Basra, Damas), accompagnée d'un récitateur qualifié. Les copies divergentes sont brûlées pour éviter toute confusion.

Depuis 'Othman (vers 650), le texte du Coran n'a PLUS JAMAIS CHANGÉ. Les manuscrits anciens retrouvés — Sanaa, Topkapi, Samarcande, Birmingham (dont le parchemin est daté au carbone 14 entre 568 et 645, ce qui situe sa production au plus tard à l'époque des premiers califes) — confirment l'identité parfaite avec le Coran actuel.

656 — 'Othman est assassiné par des révoltés. Il meurt chez lui, en lisant le Coran. Son sang tombe sur le verset : « Allah te suffira contre eux » (2:137).`,
    lecon: "Aucun autre texte religieux au monde ne peut se prévaloir d'une telle chaîne de transmission ininterrompue. Le Coran que vous lisez aujourd'hui est, lettre pour lettre, celui que le Prophète a récité il y a 14 siècles.",
  },
];
