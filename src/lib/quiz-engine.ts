import { surahsMeta } from '@/data/metadata';
import { nomsAllah } from '@/data/annexes/noms-allah';
import { prophetes } from '@/data/annexes/prophetes';
import { glossaire } from '@/data/annexes/glossaire';
import { invocations } from '@/data/annexes/invocations';
import { siraEvenements } from '@/data/annexes/sira';
import { compagnons } from '@/data/annexes/compagnons';
import { femmesEnIslam } from '@/data/annexes/femmes-en-islam';
import { miraclesScientifiques } from '@/data/annexes/miracles-scientifiques';
import { piliersIslam } from '@/data/annexes/piliers-islam';
import { piliersFoi } from '@/data/annexes/piliers-foi';
import { etapesAkhira } from '@/data/annexes/vie-apres-mort';
import { compilation } from '@/data/annexes/compilation';
import { ecolesJuridiques } from '@/data/annexes/ecoles';
import { histoireTimeline } from '@/data/histoire';

/* ── Types ── */
export type QuizCategory =
  | 'sourates' | 'noms-allah' | 'prophetes' | 'glossaire' | 'invocations'
  | 'sira' | 'compagnons' | 'femmes-islam' | 'miracles' | 'piliers' | 'akhira' | 'revelation'
  | 'mixte';

export type Difficulty = 'facile' | 'moyen' | 'difficile';

export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  category: QuizCategory;
  explanation: string;
}

/* ── Helpers ── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

function truncate(s: string, max: number): string {
  return s.length > max ? s.slice(0, max) + '…' : s;
}

function makeQuestion(
  q: string,
  correct: string,
  distractors: string[],
  category: QuizCategory,
  explanation: string,
): Question {
  const uniqueDistractors = [...new Set(distractors.filter(d => d !== correct))].slice(0, 3);
  const opts = shuffle([correct, ...uniqueDistractors]);
  return {
    question: q,
    options: opts,
    correctIndex: opts.indexOf(correct),
    category,
    explanation,
  };
}

function makeTrueFalse(
  statement: string,
  isTrue: boolean,
  category: QuizCategory,
  explanation: string,
): Question {
  const opts = ['Vrai', 'Faux'];
  return {
    question: statement,
    options: opts,
    correctIndex: isTrue ? 0 : 1,
    category,
    explanation,
  };
}

/* ══════════════════════════════════════════════════════════════════
   CATEGORIES
   ══════════════════════════════════════════════════════════════════ */

/* ── Sourates ── */
function generateSurahQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(surahsMeta);
  const questions: Question[] = [];

  // Type 1: Numéro de la sourate
  for (const s of all.slice(0, 4)) {
    const distractors = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => String(x.numero));
    questions.push(makeQuestion(
      `Quel est le numéro de la sourate ${s.nom} ?`,
      String(s.numero),
      distractors,
      'sourates',
      `${s.nom} (${s.nomFrancais}) est la sourate n°${s.numero} du Coran.`,
    ));
  }

  // Type 2: Mecquoise ou médinoise (vrai ET faux)
  for (const s of all.slice(4, 6)) {
    const correct = s.type === 'mecquoise' ? 'mecquoise' : 'médinoise';
    questions.push(makeTrueFalse(
      `La sourate ${s.nom} est une sourate ${correct}.`,
      true,
      'sourates',
      `Vrai. ${s.nom} est bien une sourate ${s.type}.`,
    ));
  }
  for (const s of all.slice(6, 8)) {
    const wrong = s.type === 'mecquoise' ? 'médinoise' : 'mecquoise';
    questions.push(makeTrueFalse(
      `La sourate ${s.nom} est une sourate ${wrong}.`,
      false,
      'sourates',
      `Faux. ${s.nom} est une sourate ${s.type}, pas ${wrong}.`,
    ));
  }

  // Type 3: Traduction française
  for (const s of all.slice(8, 12)) {
    const distractors = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => x.nomFrancais);
    questions.push(makeQuestion(
      `Quelle est la traduction française du nom de la sourate ${s.nom} ?`,
      s.nomFrancais,
      distractors,
      'sourates',
      `${s.nom} signifie "${s.nomFrancais}" en français.`,
    ));
  }

  // Type 4: Nom arabe → sourate
  for (const s of all.slice(12, 15)) {
    const distractors = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => x.nomFrancais);
    questions.push(makeQuestion(
      `Quelle sourate porte le numéro ${s.numero} ?`,
      s.nom,
      pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => x.nom),
      'sourates',
      `La sourate n°${s.numero} est ${s.nom} (${s.nomFrancais}).`,
    ));
  }

  // Type 5: Thème central → sourate (moyen+)
  if (difficulty !== 'facile') {
    for (const s of all.slice(15, 19)) {
      const distractors = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quelle sourate a pour thème central : "${truncate(s.themeCentral, 100)}" ?`,
        s.nom,
        distractors,
        'sourates',
        `C'est la sourate ${s.nom} (n°${s.numero}, ${s.nomFrancais}).`,
      ));
    }
  }

  // Type 6: Sourate → thème (difficile)
  if (difficulty === 'difficile') {
    for (const s of all.slice(19, 22)) {
      const distractors = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => truncate(x.themeCentral, 100));
      questions.push(makeQuestion(
        `Quel est le thème central de la sourate ${s.nom} ?`,
        truncate(s.themeCentral, 100),
        distractors,
        'sourates',
        `Le thème central de la sourate ${s.nom} (${s.nomFrancais}) est : ${s.themeCentral}.`,
      ));
    }

    // Type 7: Nombre de versets (difficile)
    for (const s of all.slice(22, 24)) {
      const distractors = pick(surahsMeta.filter(x => x.numero !== s.numero), 3).map(x => String(x.nombreVersets));
      questions.push(makeQuestion(
        `Combien de versets compte la sourate ${s.nom} ?`,
        String(s.nombreVersets),
        distractors,
        'sourates',
        `La sourate ${s.nom} (${s.nomFrancais}) contient ${s.nombreVersets} versets.`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Noms d'Allah ── */
function generateNomsAllahQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(nomsAllah);
  const questions: Question[] = [];

  // Type 1: Nom → signification
  for (const n of all.slice(0, 5)) {
    const distractors = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.signification);
    questions.push(makeQuestion(
      `Quelle est la signification du nom "${n.nom}" ?`,
      n.signification,
      distractors,
      'noms-allah',
      `${n.nom} (${n.arabe}) signifie "${n.signification}". ${truncate(n.explication, 150)}`,
    ));
  }

  // Type 2: Signification → nom
  for (const n of all.slice(5, 10)) {
    const distractors = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quel nom d'Allah signifie "${n.signification}" ?`,
      n.nom,
      distractors,
      'noms-allah',
      `"${n.signification}" correspond au nom ${n.nom} (${n.arabe}).`,
    ));
  }

  // Type 3: Arabe → nom (moyen+)
  if (difficulty !== 'facile') {
    for (const n of all.slice(10, 14)) {
      const distractors = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quel nom d'Allah correspond à "${n.arabe}" en arabe ?`,
        n.nom,
        distractors,
        'noms-allah',
        `${n.arabe} est la forme arabe du nom ${n.nom} qui signifie "${n.signification}".`,
      ));
    }
  }

  // Type 4: Explication → nom (difficile)
  if (difficulty === 'difficile') {
    for (const n of all.slice(14, 17)) {
      const distractors = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quel nom d'Allah correspond à cette explication : "${truncate(n.explication, 120)}" ?`,
        n.nom,
        distractors,
        'noms-allah',
        `Il s'agit du nom ${n.nom} (${n.arabe}) — "${n.signification}".`,
      ));
    }

    // Type 5: Numéro → nom (difficile)
    for (const n of all.slice(17, 19)) {
      const distractors = pick(nomsAllah.filter(x => x.numero !== n.numero), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quel est le ${n.numero}${n.numero === 1 ? 'er' : 'ème'} nom d'Allah ?`,
        n.nom,
        distractors,
        'noms-allah',
        `Le ${n.numero}${n.numero === 1 ? 'er' : 'ème'} nom d'Allah est ${n.nom} (${n.arabe}) — "${n.signification}".`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Prophètes ── */
function generateProphetesQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(prophetes);
  const questions: Question[] = [];

  // Type 1: Prophète → titre
  for (const p of all.slice(0, 4)) {
    const distractors = pick(prophetes.filter(x => x.nom !== p.nom), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quel est le titre du prophète ${p.nom} ?`,
      p.titre,
      distractors,
      'prophetes',
      `Le prophète ${p.nom} (${p.nomArabe}) est connu comme "${p.titre}".`,
    ));
  }

  // Type 2: Titre → prophète
  for (const p of all.slice(4, 8)) {
    const distractors = pick(prophetes.filter(x => x.nom !== p.nom), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quel prophète est connu comme "${p.titre}" ?`,
      p.nom,
      distractors,
      'prophetes',
      `"${p.titre}" désigne le prophète ${p.nom} (${p.nomArabe}).`,
    ));
  }

  // Type 3: Vrai/faux titre (vrai ET faux)
  for (const p of all.slice(8, 9)) {
    questions.push(makeTrueFalse(
      `Le prophète ${p.nom} est surnommé "${p.titre}".`,
      true,
      'prophetes',
      `Vrai. Le prophète ${p.nom} (${p.nomArabe}) est bien connu comme "${p.titre}".`,
    ));
  }
  for (const p of all.slice(9, 10)) {
    const wrongProphet = pick(prophetes.filter(x => x.nom !== p.nom), 1)[0];
    if (wrongProphet) {
      questions.push(makeTrueFalse(
        `Le prophète ${p.nom} est surnommé "${wrongProphet.titre}".`,
        false,
        'prophetes',
        `Faux. "${wrongProphet.titre}" est le titre de ${wrongProphet.nom}. Le titre de ${p.nom} est "${p.titre}".`,
      ));
    }
  }

  // Type 4: Histoire → prophète (moyen+)
  if (difficulty !== 'facile') {
    for (const p of all.slice(10, 14)) {
      const distractors = pick(prophetes.filter(x => x.nom !== p.nom), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quel prophète est décrit ainsi : "${truncate(p.histoire, 120)}" ?`,
        p.nom,
        distractors,
        'prophetes',
        `Il s'agit du prophète ${p.nom} (${p.nomArabe}), "${p.titre}".`,
      ));
    }
  }

  // Type 5: Sourate → prophète (difficile)
  if (difficulty === 'difficile') {
    const withSurahs = all.filter(p => p.sourates && p.sourates.length > 0);
    for (const p of withSurahs.slice(0, 3)) {
      const correctSurah = p.sourates[0];
      const otherSurahs = prophetes
        .filter(x => x.nom !== p.nom)
        .flatMap(x => x.sourates || [])
        .filter(s => !p.sourates.includes(s));
      const distractors = pick([...new Set(otherSurahs)], 3);
      questions.push(makeQuestion(
        `Dans quelle sourate le prophète ${p.nom} est-il mentionné ?`,
        correctSurah,
        distractors,
        'prophetes',
        `Le prophète ${p.nom} est mentionné dans les sourates : ${p.sourates.join(', ')}.`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Glossaire ── */
function generateGlossaireQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(glossaire);
  const questions: Question[] = [];

  // Type 1: Définition → terme
  for (const g of all.slice(0, 4)) {
    const distractors = pick(glossaire.filter(x => x.terme !== g.terme), 3).map(x => x.terme);
    questions.push(makeQuestion(
      `Quel terme islamique correspond à cette définition : "${truncate(g.definition, 100)}" ?`,
      g.terme,
      distractors,
      'glossaire',
      `Il s'agit du terme ${g.terme} (${g.arabe}). ${g.definition}`,
    ));
  }

  // Type 2: Arabe → terme
  for (const g of all.slice(4, 8)) {
    const distractors = pick(glossaire.filter(x => x.terme !== g.terme), 3).map(x => x.terme);
    questions.push(makeQuestion(
      `Quel terme islamique correspond au mot arabe "${g.arabe}" ?`,
      g.terme,
      distractors,
      'glossaire',
      `${g.arabe} est la forme arabe du terme ${g.terme}. ${truncate(g.definition, 120)}`,
    ));
  }

  // Type 3: Terme → définition (moyen+)
  if (difficulty !== 'facile') {
    for (const g of all.slice(8, 12)) {
      const distractors = pick(glossaire.filter(x => x.terme !== g.terme), 3).map(x => truncate(x.definition, 80));
      questions.push(makeQuestion(
        `Quelle est la définition du terme "${g.terme}" ?`,
        truncate(g.definition, 80),
        distractors,
        'glossaire',
        `${g.terme} (${g.arabe}) : ${g.definition}`,
      ));
    }
  }

  // Type 4: Vrai/faux (difficile — vrai ET faux)
  if (difficulty === 'difficile') {
    for (const g of all.slice(12, 13)) {
      questions.push(makeTrueFalse(
        `Le terme "${g.terme}" signifie : "${truncate(g.definition, 80)}".`,
        true,
        'glossaire',
        `Vrai. ${g.terme} (${g.arabe}) signifie bien : ${truncate(g.definition, 120)}.`,
      ));
    }
    for (const g of all.slice(13, 14)) {
      const wrongTerm = pick(glossaire.filter(x => x.terme !== g.terme), 1)[0];
      if (wrongTerm) {
        questions.push(makeTrueFalse(
          `Le terme "${g.terme}" signifie : "${truncate(wrongTerm.definition, 80)}".`,
          false,
          'glossaire',
          `Faux. "${g.terme}" signifie : ${truncate(g.definition, 120)}. La définition proposée correspond à "${wrongTerm.terme}".`,
        ));
      }
    }
  }

  return shuffle(questions);
}

/* ── Invocations ── */
function generateInvocationQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(invocations);
  const questions: Question[] = [];

  // Type 1: Occasion → invocation
  for (const inv of all.slice(0, 4)) {
    const distractors = pick(invocations.filter(x => x.titre !== inv.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quelle invocation est recommandée pour l'occasion suivante : "${truncate(inv.occasion, 80)}" ?`,
      inv.titre,
      distractors,
      'invocations',
      `L'invocation "${inv.titre}" est recommandée pour cette occasion. Référence : ${inv.reference}.`,
    ));
  }

  // Type 2: Invocation → occasion
  for (const inv of all.slice(4, 7)) {
    const distractors = pick(invocations.filter(x => x.titre !== inv.titre), 3).map(x => truncate(x.occasion, 60));
    questions.push(makeQuestion(
      `À quelle occasion récite-t-on l'invocation "${inv.titre}" ?`,
      truncate(inv.occasion, 60),
      distractors,
      'invocations',
      `"${inv.titre}" se récite : ${inv.occasion}. Référence : ${inv.reference}.`,
    ));
  }

  // Type 3: Traduction → invocation (moyen+)
  if (difficulty !== 'facile') {
    for (const inv of all.slice(7, 10)) {
      const distractors = pick(invocations.filter(x => x.titre !== inv.titre), 3).map(x => x.titre);
      questions.push(makeQuestion(
        `De quelle invocation est tirée cette traduction : "${truncate(inv.traduction, 120)}" ?`,
        inv.titre,
        distractors,
        'invocations',
        `Il s'agit de l'invocation "${inv.titre}". Référence : ${inv.reference}.`,
      ));
    }
  }

  // Type 4: Référence → invocation (difficile)
  if (difficulty === 'difficile') {
    for (const inv of all.slice(10, 12)) {
      const distractors = pick(invocations.filter(x => x.titre !== inv.titre), 3).map(x => x.titre);
      questions.push(makeQuestion(
        `Quelle invocation a pour référence "${inv.reference}" ?`,
        inv.titre,
        distractors,
        'invocations',
        `"${inv.titre}" — Référence : ${inv.reference}. Occasion : ${inv.occasion}.`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Sira (Vie du Prophète) ── */
function generateSiraQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(siraEvenements);
  const questions: Question[] = [];

  // Type 1: Lieu d'un événement
  for (const e of all.slice(0, 3)) {
    const distractors = [...new Set(siraEvenements.filter(x => x.lieu !== e.lieu).map(x => x.lieu))];
    questions.push(makeQuestion(
      `Où a eu lieu l'événement « ${e.titre} » ?`,
      e.lieu,
      pick(distractors, 3),
      'sira',
      `« ${e.titre} » a eu lieu à ${e.lieu} (${e.date}).`,
    ));
  }

  // Type 2: Identifier l'événement par sa date
  for (const e of all.slice(3, 6)) {
    const distractors = pick(siraEvenements.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quel événement de la Sira correspond à la date « ${e.date} » ?`,
      e.titre,
      distractors,
      'sira',
      `${e.titre} — ${e.date}, à ${e.lieu}.`,
    ));
  }

  // Type 3: Vrai/faux lieu (vrai ET faux)
  for (const e of all.slice(6, 7)) {
    questions.push(makeTrueFalse(
      `L'événement « ${e.titre} » a eu lieu à ${e.lieu}.`,
      true,
      'sira',
      `Vrai. « ${e.titre} » a bien eu lieu à ${e.lieu} (${e.date}).`,
    ));
  }
  for (const e of all.slice(7, 8)) {
    const wrongLieu = pick(siraEvenements.filter(x => x.lieu !== e.lieu), 1)[0];
    if (wrongLieu) {
      questions.push(makeTrueFalse(
        `L'événement « ${e.titre} » a eu lieu à ${wrongLieu.lieu}.`,
        false,
        'sira',
        `Faux. « ${e.titre} » a eu lieu à ${e.lieu}, pas à ${wrongLieu.lieu}.`,
      ));
    }
  }

  // Type 4: Description → événement (moyen+)
  if (difficulty !== 'facile') {
    for (const e of all.slice(8, Math.min(11, all.length))) {
      if (!e.description?.length) continue;
      const distractors = pick(siraEvenements.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
      questions.push(makeQuestion(
        `Quel événement est décrit ainsi : « ${truncate(e.description[0], 130)} » ?`,
        e.titre,
        distractors,
        'sira',
        `Il s'agit de « ${e.titre} » (${e.date}, ${e.lieu}).`,
      ));
    }
  }

  // Type 5: Date d'un événement (difficile)
  if (difficulty === 'difficile') {
    for (const e of all.slice(11, Math.min(14, all.length))) {
      const distractors = pick(siraEvenements.filter(x => x.date !== e.date), 3).map(x => x.date);
      questions.push(makeQuestion(
        `À quelle date situe-t-on « ${e.titre} » ?`,
        e.date,
        distractors,
        'sira',
        `« ${e.titre} » est daté de ${e.date}, à ${e.lieu}.`,
      ));
    }

    // Type 6: Ordonnancement chronologique (difficile — vrai ET faux)
    const chronological = [...siraEvenements].sort((a, b) => {
      const yearA = parseInt(a.date.match(/-?\d+/)?.[0] || '0');
      const yearB = parseInt(b.date.match(/-?\d+/)?.[0] || '0');
      return yearA - yearB;
    });
    if (chronological.length >= 3) {
      const idx = Math.floor(Math.random() * (chronological.length - 2));
      const before = chronological[idx];
      const after = chronological[idx + 2];
      questions.push(makeTrueFalse(
        `« ${before.titre} » a eu lieu avant « ${after.titre} ».`,
        true,
        'sira',
        `Vrai. ${before.titre} (${before.date}) précède ${after.titre} (${after.date}).`,
      ));
      questions.push(makeTrueFalse(
        `« ${after.titre} » a eu lieu avant « ${before.titre} ».`,
        false,
        'sira',
        `Faux. ${before.titre} (${before.date}) a eu lieu avant ${after.titre} (${after.date}).`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Compagnons ── */
function generateCompagnonsQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(compagnons);
  const questions: Question[] = [];

  // Type 1: Titre → compagnon
  for (const c of all.slice(0, 4)) {
    const distractors = pick(compagnons.filter(x => x.nom !== c.nom), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quel compagnon est connu comme « ${truncate(c.titre, 80)} » ?`,
      c.nom,
      distractors,
      'compagnons',
      `« ${c.titre} » désigne ${c.nom} (${c.nomArabe}).`,
    ));
  }

  // Type 2: Compagnon → titre
  for (const c of all.slice(4, 7)) {
    const distractors = pick(compagnons.filter(x => x.nom !== c.nom), 3).map(x => truncate(x.titre, 60));
    questions.push(makeQuestion(
      `Quel est le titre de ${c.nom} ?`,
      truncate(c.titre, 60),
      distractors,
      'compagnons',
      `${c.nom} (${c.nomArabe}) est connu comme « ${c.titre} ».`,
    ));
  }

  // Type 3: Vrai/faux titre (vrai ET faux)
  for (const c of all.slice(7, Math.min(8, all.length))) {
    questions.push(makeTrueFalse(
      `${c.nom} est surnommé « ${c.titre} ».`,
      true,
      'compagnons',
      `Vrai. ${c.nom} (${c.nomArabe}) est bien connu comme « ${c.titre} ».`,
    ));
  }
  for (const c of all.slice(8, Math.min(9, all.length))) {
    const wrongCompanion = pick(compagnons.filter(x => x.nom !== c.nom), 1)[0];
    if (wrongCompanion) {
      questions.push(makeTrueFalse(
        `${c.nom} est surnommé « ${wrongCompanion.titre} ».`,
        false,
        'compagnons',
        `Faux. « ${wrongCompanion.titre} » est le titre de ${wrongCompanion.nom}. ${c.nom} est connu comme « ${c.titre} ».`,
      ));
    }
  }

  // Type 4: Histoire → identification (moyen+)
  if (difficulty !== 'facile') {
    for (const c of all.slice(9, Math.min(11, all.length))) {
      const distractors = pick(compagnons.filter(x => x.nom !== c.nom), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quel compagnon est décrit ainsi : « ${truncate(c.histoire, 130)} » ?`,
        c.nom,
        distractors,
        'compagnons',
        `Il s'agit de ${c.nom} (${c.nomArabe}), « ${c.titre} ».`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Femmes en Islam ── */
function generateFemmesIslamQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(femmesEnIslam);
  const questions: Question[] = [];

  // Type 1: Titre → femme
  for (const f of all.slice(0, 3)) {
    const distractors = pick(femmesEnIslam.filter(x => x.nom !== f.nom), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quelle femme est décrite comme « ${f.titre} » ?`,
      f.nom,
      distractors,
      'femmes-islam',
      `« ${f.titre} » désigne ${f.nom}. Mentionnée dans : ${f.sourate}.`,
    ));
  }

  // Type 2: Femme → titre
  for (const f of all.slice(3, 6)) {
    const distractors = pick(femmesEnIslam.filter(x => x.nom !== f.nom), 3).map(x => truncate(x.titre, 60));
    questions.push(makeQuestion(
      `Quel est le titre de ${f.nom} dans le Coran et la Sunna ?`,
      truncate(f.titre, 60),
      distractors,
      'femmes-islam',
      `${f.nom} est connue comme « ${f.titre} ». Sourate(s) : ${f.sourate}.`,
    ));
  }

  // Type 3: Sourate → femme
  for (const f of all.slice(6, Math.min(8, all.length))) {
    const distractors = pick(femmesEnIslam.filter(x => x.nom !== f.nom), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quelle femme est mentionnée dans ${truncate(f.sourate, 80)} ?`,
      f.nom,
      distractors,
      'femmes-islam',
      `${f.nom} — « ${f.titre} ». Sourate(s) : ${f.sourate}.`,
    ));
  }

  // Type 4: Histoire → identification (moyen+)
  if (difficulty !== 'facile') {
    for (const f of all.slice(8, Math.min(11, all.length))) {
      const distractors = pick(femmesEnIslam.filter(x => x.nom !== f.nom), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quelle femme est décrite ainsi : « ${truncate(f.histoire, 130)} » ?`,
        f.nom,
        distractors,
        'femmes-islam',
        `Il s'agit de ${f.nom}, « ${f.titre} ».`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Miracles scientifiques ── */
function generateMiraclesQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(miraclesScientifiques);
  const questions: Question[] = [];

  // Type 1: Référence coranique → miracle
  for (const m of all.slice(0, 4)) {
    const distractors = pick(miraclesScientifiques.filter(x => x.titre !== m.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quel miracle scientifique est mentionné dans la sourate ${m.reference} ?`,
      m.titre,
      distractors,
      'miracles',
      `${m.titre} — Référence : ${m.reference}.`,
    ));
  }

  // Type 2: Découverte moderne → miracle
  for (const m of all.slice(4, 7)) {
    const distractors = pick(miraclesScientifiques.filter(x => x.titre !== m.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quel sujet coranique correspond à cette découverte : « ${truncate(m.decouverteModerne, 120)} » ?`,
      m.titre,
      distractors,
      'miracles',
      `${m.titre} — ${m.reference}. ${truncate(m.decouverteModerne, 150)}`,
    ));
  }

  // Type 3: Vrai/faux miracle (vrai ET faux)
  for (const m of all.slice(7, 8)) {
    questions.push(makeTrueFalse(
      `« ${m.titre} » est mentionné dans la sourate ${m.reference}.`,
      true,
      'miracles',
      `Vrai. « ${m.titre} » est bien mentionné dans ${m.reference}.`,
    ));
  }
  for (const m of all.slice(8, 9)) {
    const wrongRef = pick(miraclesScientifiques.filter(x => x.reference !== m.reference), 1)[0];
    if (wrongRef) {
      questions.push(makeTrueFalse(
        `« ${m.titre} » est mentionné dans la sourate ${wrongRef.reference}.`,
        false,
        'miracles',
        `Faux. « ${m.titre} » est mentionné dans ${m.reference}, pas dans ${wrongRef.reference}.`,
      ));
    }
  }

  // Type 4: Miracle → référence (moyen+)
  if (difficulty !== 'facile') {
    for (const m of all.slice(9, Math.min(12, all.length))) {
      const distractors = pick(miraclesScientifiques.filter(x => x.reference !== m.reference), 3).map(x => x.reference);
      questions.push(makeQuestion(
        `Dans quelle sourate le Coran fait-il référence à « ${m.titre} » ?`,
        m.reference,
        distractors,
        'miracles',
        `« ${m.titre} » est mentionné dans ${m.reference}.`,
      ));
    }
  }

  // Type 5: Explication → miracle (difficile)
  if (difficulty === 'difficile') {
    for (const m of all.slice(12, Math.min(14, all.length))) {
      const distractors = pick(miraclesScientifiques.filter(x => x.titre !== m.titre), 3).map(x => x.titre);
      questions.push(makeQuestion(
        `Quel miracle correspond à cette explication : « ${truncate(m.explication, 130)} » ?`,
        m.titre,
        distractors,
        'miracles',
        `Il s'agit de « ${m.titre} » — ${m.reference}.`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Piliers (Islam + Foi) ── */
function generatePiliersQuestions(difficulty: Difficulty): Question[] {
  const questions: Question[] = [];
  const allIslam = shuffle(piliersIslam);
  const allFoi = shuffle(piliersFoi);
  const combined = shuffle([...piliersIslam, ...piliersFoi]);

  // Type 1: Numéro → pilier Islam
  for (const p of allIslam.slice(0, 3)) {
    const distractors = pick(piliersIslam.filter(x => x.numero !== p.numero), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quel est le ${p.numero}${p.numero === 1 ? 'er' : 'ème'} pilier de l'Islam ?`,
      p.nom,
      distractors,
      'piliers',
      `Le ${p.numero}${p.numero === 1 ? 'er' : 'ème'} pilier de l'Islam est ${p.nom} (${p.nomArabe}).`,
    ));
  }

  // Type 2: Description → pilier Foi
  for (const p of allFoi.slice(0, 3)) {
    const distractors = pick(piliersFoi.filter(x => x.numero !== p.numero), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quel pilier de la foi correspond à : « ${truncate(p.description, 100)} » ?`,
      p.nom,
      distractors,
      'piliers',
      `Il s'agit de ${p.nom} (${p.nomArabe}), le ${p.numero}${p.numero === 1 ? 'er' : 'ème'} pilier de la foi.`,
    ));
  }

  // Type 3: Vrai/faux
  questions.push(makeTrueFalse(
    `L'Islam compte 5 piliers et la foi (iman) compte 6 piliers.`,
    true,
    'piliers',
    `Vrai. Les 5 piliers de l'Islam sont : Shahada, Salat, Zakat, Sawm, Hajj. Les 6 piliers de la foi sont : croire en Allah, les anges, les livres, les messagers, le Jour Dernier et le destin.`,
  ));

  // Type 4: Nom arabe → pilier (moyen+)
  if (difficulty !== 'facile') {
    for (const p of combined.slice(0, 4)) {
      const distractors = pick(combined.filter(x => x.nom !== p.nom), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Que signifie « ${p.nomArabe} » ?`,
        p.nom,
        distractors,
        'piliers',
        `${p.nomArabe} désigne ${p.nom}.`,
      ));
    }

    // Type 5: Numéro → pilier foi (moyen+)
    for (const p of allFoi.slice(3, Math.min(6, allFoi.length))) {
      const distractors = pick(piliersFoi.filter(x => x.numero !== p.numero), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quel est le ${p.numero}${p.numero === 1 ? 'er' : 'ème'} pilier de la foi ?`,
        p.nom,
        distractors,
        'piliers',
        `Le ${p.numero}${p.numero === 1 ? 'er' : 'ème'} pilier de la foi est ${p.nom} (${p.nomArabe}).`,
      ));
    }
  }

  // Type 6: Preuve → pilier (difficile)
  if (difficulty === 'difficile') {
    for (const p of combined.slice(0, 3)) {
      if (!p.preuves?.length) continue;
      const distractors = pick(combined.filter(x => x.nom !== p.nom), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quelle croyance est étayée par cette preuve : « ${truncate(p.preuves[0], 120)} » ?`,
        p.nom,
        distractors,
        'piliers',
        `Cette preuve concerne ${p.nom} (${p.nomArabe}).`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Vie après la mort (Akhira) ── */
function generateAkhiraQuestions(difficulty: Difficulty): Question[] {
  const all = shuffle(etapesAkhira);
  const ordered = etapesAkhira; // ordre original = chronologique
  const questions: Question[] = [];

  // Type 1: Titre arabe → étape
  for (const e of all.slice(0, 3)) {
    const distractors = pick(etapesAkhira.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Que signifie « ${e.titreArabe} » dans les étapes de l'au-delà ?`,
      e.titre,
      distractors,
      'akhira',
      `${e.titreArabe} désigne « ${e.titre} ».`,
    ));
  }

  // Type 2: Étape → titre arabe
  for (const e of all.slice(3, 6)) {
    const distractors = pick(etapesAkhira.filter(x => x.titre !== e.titre), 3).map(x => x.titreArabe);
    questions.push(makeQuestion(
      `Quel est le nom arabe de l'étape « ${e.titre} » ?`,
      e.titreArabe,
      distractors,
      'akhira',
      `« ${e.titre} » se dit « ${e.titreArabe} » en arabe.`,
    ));
  }

  // Type 3: Description → étape
  for (const e of all.slice(6, Math.min(9, all.length))) {
    if (!e.contenu?.length) continue;
    const distractors = pick(etapesAkhira.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quelle étape de l'au-delà est décrite ainsi : « ${truncate(e.contenu[0], 130)} » ?`,
      e.titre,
      distractors,
      'akhira',
      `Il s'agit de « ${e.titre} » (${e.titreArabe}).`,
    ));
  }

  // Type 4: Séquence (moyen+)
  if (difficulty !== 'facile') {
    const usedPairs = new Set<string>();
    for (let attempt = 0; attempt < 10 && usedPairs.size < 3; attempt++) {
      const idx = Math.floor(Math.random() * (ordered.length - 1));
      const key = `${idx}`;
      if (usedPairs.has(key)) continue;
      usedPairs.add(key);
      const current = ordered[idx];
      const next = ordered[idx + 1];
      const distractors = pick(etapesAkhira.filter(x => x.titre !== next.titre), 3).map(x => x.titre);
      questions.push(makeQuestion(
        `Quelle étape vient après « ${current.titre} » ?`,
        next.titre,
        distractors,
        'akhira',
        `Après « ${current.titre} » vient « ${next.titre} » (${next.titreArabe}).`,
      ));
    }

    // Type 5: Vrai/faux séquence (moyen+ — vrai ET faux)
    if (ordered.length >= 4) {
      const i = Math.floor(Math.random() * (ordered.length - 3));
      questions.push(makeTrueFalse(
        `L'étape « ${ordered[i].titre} » précède « ${ordered[i + 2].titre} » dans l'au-delà.`,
        true,
        'akhira',
        `Vrai. L'ordre correct est : ${ordered[i].titre} → ${ordered[i + 1].titre} → ${ordered[i + 2].titre}.`,
      ));
      const j = Math.floor(Math.random() * (ordered.length - 3));
      questions.push(makeTrueFalse(
        `L'étape « ${ordered[j + 2].titre} » précède « ${ordered[j].titre} » dans l'au-delà.`,
        false,
        'akhira',
        `Faux. L'ordre correct est : ${ordered[j].titre} → ${ordered[j + 1].titre} → ${ordered[j + 2].titre}.`,
      ));
    }
  }

  return shuffle(questions);
}

/* ── Révélation (Histoire du Coran + Écoles juridiques) ── */
function generateRevelationQuestions(difficulty: Difficulty): Question[] {
  const events = histoireTimeline.filter((e): e is Extract<typeof e, { type: 'event' }> => e.type === 'event');
  const all = shuffle(events);
  const questions: Question[] = [];

  // Type 1: Date → événement
  for (const e of all.slice(0, 3)) {
    const distractors = pick(events.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quel événement de l'histoire de la Révélation correspond à la date « ${e.date} » ?`,
      e.titre,
      distractors,
      'revelation',
      `« ${e.titre} » — ${e.date}. ${e.lecon}`,
    ));
  }

  // Type 2: Leçon → événement
  for (const e of all.slice(3, 6)) {
    const distractors = pick(events.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
    questions.push(makeQuestion(
      `Quel événement tire cette leçon : « ${truncate(e.lecon, 120)} » ?`,
      e.titre,
      distractors,
      'revelation',
      `« ${e.titre} » (${e.date}). Leçon : ${e.lecon}`,
    ));
  }

  // Type 3: Écoles juridiques — fondateur → école
  const ecolesShuffle = shuffle(ecolesJuridiques);
  for (const ec of ecolesShuffle.slice(0, 2)) {
    const distractors = pick(ecolesJuridiques.filter(x => x.nom !== ec.nom), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quelle école juridique a été fondée par ${ec.fondateur} ?`,
      ec.nom,
      distractors,
      'revelation',
      `${ec.fondateur} (${ec.fondateurArabe}) a fondé l'école ${ec.nom} à ${ec.lieu} (${ec.epoque}).`,
    ));
  }

  // Type 4: Écoles juridiques — géographie → école
  for (const ec of ecolesShuffle.slice(2, 4)) {
    const shortGeo = truncate(ec.geographie, 80);
    const distractors = pick(ecolesJuridiques.filter(x => x.nom !== ec.nom), 3).map(x => x.nom);
    questions.push(makeQuestion(
      `Quelle école juridique est dominante dans ces régions : « ${shortGeo} » ?`,
      ec.nom,
      distractors,
      'revelation',
      `L'école ${ec.nom} est dominante dans : ${ec.geographie}.`,
    ));
  }

  // Type 5: Sourate révélée → événement (moyen+)
  if (difficulty !== 'facile') {
    const withSurahs = all.filter(e => e.sourates);
    for (const e of withSurahs.slice(0, 3)) {
      const distractors = pick(events.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
      questions.push(makeQuestion(
        `Quel événement est lié à la révélation de la sourate ${e.sourates} ?`,
        e.titre,
        distractors,
        'revelation',
        `La sourate ${e.sourates} est liée à « ${e.titre} » (${e.date}).`,
      ));
    }

    // Type 6: École → méthodologie (moyen+)
    for (const ec of ecolesShuffle.slice(0, 2)) {
      const shortMethodo = truncate(ec.methodologie, 120);
      const distractors = pick(ecolesJuridiques.filter(x => x.nom !== ec.nom), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quelle école juridique est décrite ainsi : « ${shortMethodo} » ?`,
        ec.nom,
        distractors,
        'revelation',
        `Il s'agit de l'école ${ec.nom}, fondée par ${ec.fondateur}.`,
      ));
    }

    // Type 7: École → particularité (moyen+)
    for (const ec of ecolesShuffle.slice(2, 4)) {
      if (!ec.particularites?.length) continue;
      const partIdx = Math.floor(Math.random() * ec.particularites.length);
      const distractors = pick(ecolesJuridiques.filter(x => x.nom !== ec.nom), 3).map(x => x.nom);
      questions.push(makeQuestion(
        `Quelle école juridique est caractérisée par : « ${truncate(ec.particularites[partIdx], 100)} » ?`,
        ec.nom,
        distractors,
        'revelation',
        `Cette particularité est propre à l'école ${ec.nom} (${ec.fondateur}).`,
      ));
    }
  }

  // Type 8: Description → événement (difficile)
  if (difficulty === 'difficile') {
    for (const e of all.slice(6, Math.min(9, all.length))) {
      if (!e.contenu) continue;
      const distractors = pick(events.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
      questions.push(makeQuestion(
        `Quel événement est décrit ainsi : « ${truncate(e.contenu, 130)} » ?`,
        e.titre,
        distractors,
        'revelation',
        `Il s'agit de « ${e.titre} » (${e.date}).`,
      ));
    }

    // Type 9: Compilation du Coran
    const etapes = compilation.etapes;
    if (etapes.length >= 2) {
      const shuffledEtapes = shuffle(etapes);
      for (const e of shuffledEtapes.slice(0, 2)) {
        const distractors = pick(etapes.filter(x => x.titre !== e.titre), 3).map(x => x.titre);
        questions.push(makeQuestion(
          `Quelle étape de la compilation du Coran correspond à la période « ${e.periode} » ?`,
          e.titre,
          distractors,
          'revelation',
          `« ${e.titre} » — ${e.periode}.`,
        ));
      }
    }

    // Type 10: École → époque (difficile)
    for (const ec of ecolesShuffle.slice(0, 2)) {
      const distractors = pick(ecolesJuridiques.filter(x => x.nom !== ec.nom), 3).map(x => x.epoque);
      questions.push(makeQuestion(
        `À quelle époque vivait ${ec.fondateur}, fondateur de l'école ${ec.nom} ?`,
        ec.epoque,
        distractors,
        'revelation',
        `${ec.fondateur} a vécu de ${ec.epoque} à ${ec.lieu}.`,
      ));
    }
  }

  return shuffle(questions);
}

/* ══════════════════════════════════════════════════════════════════
   MAIN GENERATOR
   ══════════════════════════════════════════════════════════════════ */

const SINGLE_GENERATORS: Record<Exclude<QuizCategory, 'mixte'>, (d: Difficulty) => Question[]> = {
  'sourates': generateSurahQuestions,
  'noms-allah': generateNomsAllahQuestions,
  'prophetes': generateProphetesQuestions,
  'glossaire': generateGlossaireQuestions,
  'invocations': generateInvocationQuestions,
  'sira': generateSiraQuestions,
  'compagnons': generateCompagnonsQuestions,
  'femmes-islam': generateFemmesIslamQuestions,
  'miracles': generateMiraclesQuestions,
  'piliers': generatePiliersQuestions,
  'akhira': generateAkhiraQuestions,
  'revelation': generateRevelationQuestions,
};

export function generateQuestions(category: QuizCategory, count: number, difficulty: Difficulty): Question[] {
  if (category !== 'mixte') {
    const generator = SINGLE_GENERATORS[category];
    const pool = generator(difficulty);
    return shuffle(pool).slice(0, count);
  }

  // Mode mixte : sélectionner un sous-ensemble de catégories si count < nombre total
  const allCategories = shuffle(Object.keys(SINGLE_GENERATORS) as Exclude<QuizCategory, 'mixte'>[]);
  // En facile (10 questions), on prend 8 catégories au hasard pour garder de la variété
  // En moyen/difficile on prend toutes les catégories
  const maxCats = count <= 10 ? 8 : count <= 15 ? 10 : allCategories.length;
  const categories = allCategories.slice(0, Math.min(maxCats, allCategories.length));
  const perCategory = Math.max(1, Math.ceil((count + 2) / categories.length));
  let pool: Question[] = [];

  for (const cat of categories) {
    const catQuestions = SINGLE_GENERATORS[cat](difficulty);
    pool.push(...shuffle(catQuestions).slice(0, perCategory));
  }

  return shuffle(pool).slice(0, count);
}

/* ── Question counts by difficulty ── */
export const QUESTION_COUNTS: Record<Difficulty, number> = {
  facile: 10,
  moyen: 15,
  difficile: 20,
};
