import { useEffect, useRef, useState } from "react";

const questions = [
  {
    id: 1,
    text: `Una persona che conosci ti scrive: "Possiamo parlare?"`,
    options: [
      { letter: "A", text: "Rispondi subito, anche se non hai energie" },
      { letter: "B", text: "Aspetti un po' prima di aprire il messaggio" },
      { letter: "C", text: "Speri che in realta' non voglia davvero parlare" },
      { letter: "D", text: "Rispondi con una battuta per capire il tono" },
      { letter: "E", text: "Inizi gia' a immaginare il problema" },
      { letter: "F", text: "Rispondi subito: le persone lasciate sole peggiorano sempre le cose" },
    ],
  },
  {
    id: 2,
    text: "Hai una giornata libera senza obblighi. La tua idea di pace e':",
    options: [
      { letter: "A", text: "Stare per conto tuo, senza dover spiegare niente a nessuno" },
      { letter: "B", text: "Cucinare o mangiare con persone che conosci bene" },
      { letter: "C", text: "Bere qualcosa in un posto dove ti senti a casa" },
      { letter: "D", text: "Camminare senza meta precisa" },
      { letter: "E", text: "Sistemare cose pratiche che rimandi da settimane" },
      { letter: "F", text: "Dedicarti a una passione per la quale non hai mai abbastanza tempo" },
    ],
  },
  {
    id: 3,
    text: "Quale tipo di persona ti mette piu' a disagio?",
    options: [
      { letter: "A", text: "Chi vuole sempre avere ragione" },
      { letter: "B", text: "Chi tratta tutto con superficialita'" },
      { letter: "C", text: "Chi sparisce appena le cose si complicano" },
      { letter: "D", text: `Chi vuole "salvare" tutti` },
      { letter: "E", text: "Chi sembra troppo tranquillo" },
      { letter: "F", text: "Chi pensa che tanto non cambiera' mai niente" },
    ],
  },
  {
    id: 4,
    text: "Cosa ti senti dire piu' spesso?",
    options: [
      { letter: "A", text: `"Con te si parla bene"` },
      { letter: "B", text: `"Sei piu' sensibile di quanto sembri"` },
      { letter: "C", text: `"Riesci sempre a cavartela"` },
      { letter: "D", text: `"Fai sentire le persone a loro agio"` },
      { letter: "E", text: `"Sei piu' forte di quanto pensi"` },
      { letter: "F", text: `"Prendi tutto molto sul serio"` },
    ],
  },
  {
    id: 5,
    text: "Torni a casa molto tardi. Cosa fai automaticamente?",
    options: [
      { letter: "A", text: "Cammini senza pensarci" },
      { letter: "B", text: "Percorri la strada piu' illuminata" },
      { letter: "C", text: "Metti le cuffie ma resti all'erta" },
      { letter: "D", text: "Chiami qualcuno mentre cammini" },
      { letter: "E", text: "Vai tranquillo, ma osservi tutto" },
      { letter: "F", text: "C'e' sempre qualcuno con cui fare almeno un pezzo di strada insieme" },
    ],
  },
  {
    id: 6,
    text: "Quando qualcuno parla male del posto in cui vivi:",
    options: [
      { letter: "A", text: "Ti irrita subito" },
      { letter: "B", text: "Una parte di te pensa che abbia anche qualche ragione" },
      { letter: "C", text: "Difendi il posto solo con chi viene da fuori" },
      { letter: "D", text: "Fai ironia e cambi discorso" },
      { letter: "E", text: "Pensi che nessuno capisca davvero i posti degli altri" },
      { letter: "F", text: "Ti da' fastidio quando le persone parlano dei quartieri come se dentro non ci vivessero esseri umani" },
    ],
  },
  {
    id: 7,
    text: "Quale situazione ti somiglia di piu'?",
    options: [
      { letter: "A", text: "Una cucina piena di gente" },
      { letter: "B", text: "Un bar quasi vuoto a fine serata" },
      { letter: "C", text: "Un divano in una stanza silenziosa" },
      { letter: "D", text: "Un balcone acceso nel palazzo di fronte" },
      { letter: "E", text: "Una strada che conosci anche al buio" },
      { letter: "F", text: "Una merenda in un parco ripassando le grandi rivoluzioni" },
    ],
  },
  {
    id: 8,
    text: "Quando litighi con qualcuno:",
    options: [
      { letter: "A", text: "Dici cose molto precise che restano addosso" },
      { letter: "B", text: "Sparisci per un po'" },
      { letter: "C", text: "Provi a sistemare subito la situazione" },
      { letter: "D", text: "Trasformi tutto in ironia" },
      { letter: "E", text: "Ti arrabbi solo se ci tieni davvero" },
      { letter: "F", text: "Continui finche' non hai detto davvero quello che pensi" },
    ],
  },
  {
    id: 9,
    text: "Il tuo rapporto con il futuro:",
    options: [
      { letter: "A", text: "Provi a organizzarlo anche se cambia sempre tutto" },
      { letter: "B", text: "Eviti di pensarci troppo" },
      { letter: "C", text: "Immagini continuamente vite diverse" },
      { letter: "D", text: "Fai fatica a vederti lontano da dove sei ora" },
      { letter: "E", text: "Pensi soprattutto a sopravvivere bene al presente" },
      { letter: "F", text: "Fai continuamente piani per evitare che le cose peggiorino" },
    ],
  },
  {
    id: 10,
    text: "Quale frase senti piu' vicina?",
    options: [
      { letter: "A", text: `"Le persone fanno quello che possono."` },
      { letter: "B", text: `"Restare e' piu' difficile che andarsene."` },
      { letter: "C", text: `"Chi ascolta davvero nota piu' cose."` },
      { letter: "D", text: `"Nessuno e' solo una cosa sola."` },
      { letter: "E", text: `"Le regole sembrano uguali solo sulla carta."` },
      { letter: "F", text: `"Le cose non migliorano da sole."` },
    ],
  },
  {
    id: 11,
    text: "Sei stato invitato a un compleanno in un locale, entri e non conosci nessuno.",
    options: [
      { letter: "A", text: "Osservi tutti prima di parlare con qualcuno che sembri piu' simile a te" },
      { letter: "B", text: "Trovi subito qualcuno con cui attaccare bottone" },
      { letter: "C", text: "Esci dopo 5 minuti" },
      { letter: "D", text: "Vai nel gruppo di chi compie gli anni e fai una battuta per rompere il ghiaccio" },
      { letter: "E", text: "Noti immediatamente chi sembra fuori posto" },
      { letter: "F", text: "Dopo dieci minuti stai gia' discutendo di politica locale con qualcuno" },
    ],
  },
  {
    id: 12,
    text: "Una persona che conosci prende una decisione discutibile per cambiare vita.",
    options: [
      { letter: "A", text: "La capisci anche se non approvi" },
      { letter: "B", text: "Provi a convincerla a fermarsi" },
      { letter: "C", text: "Pensi che ognuno si salvi come puo'" },
      { letter: "D", text: "Cerchi di capire cosa l'abbia spinta davvero a farlo" },
      { letter: "E", text: "Fai fatica a giudicare chi e' disperato" },
      { letter: "F", text: "Ti chiedi quanto una persona sia davvero libera quando non ha alternative" },
    ],
  },
  {
    id: 13,
    text: "Quale di queste cose ti fa piu' male?",
    options: [
      { letter: "A", text: "Sentirti bloccato" },
      { letter: "B", text: "Sentirti invisibile" },
      { letter: "C", text: "Sentirti responsabile degli altri" },
      { letter: "D", text: "Sentirti fuori posto" },
      { letter: "E", text: "Sentirti osservato" },
      { letter: "F", text: "Vedere le persone smettere di reagire" },
    ],
  },
  {
    id: 14,
    text: `Quando senti parlare di "sicurezza" pensi piu' spesso:`,
    options: [
      { letter: "A", text: "Che dipenda da chi puo' permettersela" },
      { letter: "B", text: "Che la gente abbia paura di cose diverse" },
      { letter: "C", text: "Che alcuni posti vengano lasciati indietro apposta" },
      { letter: "D", text: "Che nessuno si senta davvero tranquillo" },
      { letter: "E", text: "Che controllare non significhi proteggere" },
      { letter: "F", text: "Che spesso venga usata come scusa per non affrontare i problemi veri" },
    ],
  },
  {
    id: 15,
    text: "Quale di queste cose fai piu' spesso di quanto vorresti ammettere?",
    options: [
      { letter: "A", text: "Rileggi vecchi messaggi o conversazioni" },
      { letter: "B", text: "Osservi le persone e immagini la loro vita" },
      { letter: "C", text: `Dici "va tutto bene" per chiudere il discorso` },
      { letter: "D", text: "Rimandi decisioni importanti finche' puoi" },
      { letter: "E", text: "Resti in posti, situazioni o relazioni piu' del necessario" },
      { letter: "F", text: "Trasformi una conversazione normale in una riunione improvvisata" },
    ],
  },
];

const results = {
  A: {
    name: "BEA",
    description:
      "Ti riesce molto bene fare finta che le cose ti tocchino meno di quanto lo facciano in realta'. Hai una stanchezza che gli altri confondono spesso con freddezza e continui a rimandare decisioni che probabilmente hai gia' preso da tempo. Vorresti andartene, cambiare vita, sparire un po'. Poi, qualcuno ha bisogno di te, e resti ancora un po'.",
  },
  B: {
    name: "ZIO FRANCO",
    description:
      "Pensi che le cose si cambino piu' facilmente coltivando un orto, con una cena o con una serata fatta bene. Essere considerato un po' strano non ti ha mai spaventato davvero e hai l'aria tranquilla di chi vive ai margini delle cose, e ama farlo, come ama contrabbandare ortaggi durante un giro di walzer.",
  },
  C: {
    name: "MEI LI",
    description:
      "Hai poca pazienza per il teatro umano, pero' continui a guardarlo con interesse professionale. Il bar per te e' un osservatorio: gente che mente, si innamora male, sparisce, torna e ordina sempre lo stesso caffe'. La gente ti considera fredda perche' non fai il lavoro emotivo al posto loro. Il massimo della tua manifestazione d'affetto e' un infuso preparato al momento giusto, e una pacca (virtuale) sulle spalle. Il tuo cuore, sotto tutto quel cinismo, e' immenso.",
  },
  D: {
    name: "MAESTRA ROSANNA",
    description:
      "Credi che la gentilezza e l'educazione siano la cosa piu' rock rimasta in circolazione. All'apparenza sembri una persona molto composta, di quelle che sistemano i guanti prima di parlare e ricordano sempre le buone maniere. Poi qualcuno nomina ingiustizia sociale, degrado urbano o privatizzazione dei beni pubblici e improvvisamente diventi molto piu' difficile da ignorare. Correggi mentalmente errori grammaticali, volantini scritti male e interi sistemi politici con la stessa espressione facciale. Ti capita spesso di trasformare una semplice conversazione in qualcosa di pericolosamente vicino a un'organizzazione pratica. Continui ostinatamente a credere che il problema di questo mondo sia interessarsi poco alle cose e sai che i veri rivoluzionari sono gli appartenenti delle nuove generazioni.",
  },
  E: {
    name: "DON REMO",
    description:
      "Riesci a sembrare affidabile anche mentre racconti episodi che dimostrano il contrario.Hai sviluppato una forma di ironia utile a sopravvivere alle persone, senza smettere completamente di frequentarle. Non credi molto nelle categorie semplici: buoni, cattivi, innocenti. Hai conosciuto troppa gente per cascarci ancora.",
  },
  F: {
    name: "BARRIERA DI MILANO",
    description:
      "Ti abitui alle cose velocemente: rumori, degrado, persone che spariscono, droni, affitti assurdi, paura. Ogni tanto pensi seriamente di andartene, poi qualcuno ti chiede dov'e' il bar migliore della zona e rispondi con troppo entusiasmo. Ti difendi facendo autoironia prima che ti bullino gli altri. Sei prezioso, non credere a chi ti dice di no.",
  },
};

function computeResult(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  Object.values(answers).forEach((letter) => {
    counts[letter] = (counts[letter] || 0) + 1;
  });
  return Object.entries(counts).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

const assetBase = import.meta.env.BASE_URL;
const canonicalSiteUrl = "https://barrierababylon.it";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #fff;
    color: #111;
    font-family: 'IBM Plex Serif', Georgia, serif;
    min-height: 100vh;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 56px;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    height: 60px;
    border-bottom: 1px solid rgba(17, 17, 17, 0.25);
    background-color: #2a3140;
    background-image: url('${assetBase}header-v2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  @media (min-width: 768px) {
    .app {
      padding-top: 72px;
    }

    .header {
      height: 80px;
    }
  }

  .progress-bar-outer {
    height: 2px;
    background: #e0e0e0;
    width: 100%;
  }

  .progress-bar-inner {
    height: 2px;
    background: #111;
    transition: width 0.4s ease;
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    padding: 2.25rem 2rem 3rem;
  }

  .question-transition {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .question-transition.visible {
    opacity: 1;
  }

  .question-meta {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.12em;
    color: #888;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .question-text {
    font-size: 1.35rem;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 2.5rem;
    font-style: italic;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .option-btn {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem 1rem;
    border: none;
    border-top: 1px solid #e8e8e8;
    background: transparent;
    cursor: pointer;
    text-align: left;
    width: 100%;
    transition: background 0.15s;
    font-family: inherit;
    color: #111;
  }

  .option-btn:last-child {
    border-bottom: 1px solid #e8e8e8;
  }

  .option-btn:hover {
    background: #f5f5f5;
  }

  .option-btn.selected {
    background: #324780;
    color: #fff;
    border-color: #324780;
  }

  .option-letter {
    display: none;
  }

  .option-text {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
  }

  .nav-btn {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid #111;
    color: #111;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }

  .nav-btn:hover:not(:disabled) {
    background: #111;
    color: #fff;
  }

  .nav-btn:disabled {
    opacity: 0.25;
    cursor: default;
  }

  .nav-btn.primary {
    background: #324780;
    color: #fff;
    border-color: #324780;
  }

  .nav-btn.primary:hover:not(:disabled) {
    background: #253660;
  }

  .counter {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.7rem;
    color: #888;
    letter-spacing: 0.05em;
  }

  .result {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    padding: 2.25rem 2rem 3.5rem;
  }

  .result-label {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 0.5rem;
  }

  .result-name {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 2.2rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    line-height: 1.1;
    margin-bottom: 2.5rem;
    border-bottom: 2px solid #111;
    padding-bottom: 1.5rem;
  }

  .result-body {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  .result-image {
    width: 220px;
    height: 220px;
    flex-shrink: 0;
    object-fit: cover;
    display: block;
    background: #e8e8e8;
  }

  @media (max-width: 560px) {
    .result-body {
      flex-direction: column;
    }
    .result-image {
      width: 100%;
      height: auto;
      aspect-ratio: 1;
    }
  }

  .result-description {
    font-size: 1.05rem;
    line-height: 1.8;
    white-space: pre-line;
    color: #222;
  }

  .result-footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e0e0e0;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .result-footer .cta {
    margin-top: 0;
    padding: 0.6rem 1.2rem;
    font-size: 0.7rem;
  }

  .result-footer .restart-btn,
  .result-footer .cta,
  .result-footer .share-btn {
    min-height: 38px;
    line-height: 1;
  }

  .share-btn {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid #c7c7c7;
    color: #555;
    padding: 0.6rem 1rem;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }

  .share-btn:hover {
    background: #f7f7f7;
    border-color: #a8a8a8;
    color: #222;
  }

  .share-feedback {
    width: 100%;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.62rem;
    letter-spacing: 0.04em;
    color: #777;
    margin-top: 0.35rem;
  }

  .restart-btn {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid #111;
    color: #111;
    padding: 0.6rem 1.2rem;
    cursor: pointer;
    transition: background 0.15s, color 0.15s;
  }

  .restart-btn:hover {
    background: #111;
    color: #fff;
  }

  .book-note {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    color: #aaa;
    letter-spacing: 0.05em;
    padding-top: 0.65rem;
    line-height: 1.6;
  }

  .intro {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 2rem 3.5rem;
  }

  .intro-tag {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #888;
    margin-bottom: 2rem;
    display: block;
  }

  .intro-subtitle {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #555;
    margin-bottom: 2rem;
  }

  .intro-divider {
    border: none;
    border-top: 1px solid #111;
    margin-bottom: 2.5rem;
  }

  .intro-body {
    font-size: 1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 2.25rem;
    font-style: italic;
  }

  .intro-instructions {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.7rem;
    color: #888;
    letter-spacing: 0.05em;
    line-height: 1.8;
    margin-bottom: 1.1rem;
  }

  .start-btn {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    background: #324780;
    border: 1px solid #324780;
    color: #fff;
    padding: 0.8rem 2rem;
    margin-bottom: 1.4rem;
    cursor: pointer;
    transition: background 0.15s;
  }

  .start-btn:hover {
    background: #253660;
  }

  .cta {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    background: #fff;
    border: 1px solid #8fa0c9;
    color: #324780;
    padding: 0.72rem 1.8rem;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }

  .cta:hover {
    background: #f4f6fb;
    border-color: #6f84b5;
    color: #253660;
  }

  .cta-icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
`;

export default function App() {
  const [phase, setPhase] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);
  const [shareFeedback, setShareFeedback] = useState("");
  const transitionTimeoutRef = useRef(null);
  const shareFeedbackTimeoutRef = useRef(null);

  const totalQ = questions.length;
  const q = questions[current];
  const selected = answers[q?.id];
  const progress = Object.keys(answers).length / totalQ;

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
      if (shareFeedbackTimeoutRef.current) clearTimeout(shareFeedbackTimeoutRef.current);
    };
  }, []);

  function resetShareFeedbackWithDelay(message) {
    if (shareFeedbackTimeoutRef.current) clearTimeout(shareFeedbackTimeoutRef.current);
    setShareFeedback(message);
    shareFeedbackTimeoutRef.current = setTimeout(() => setShareFeedback(""), 2600);
  }

  function getProfileShareUrl(profileKey) {
    const normalizedKey = profileKey?.toLowerCase();
    if (!normalizedKey) return canonicalSiteUrl;
    return `${canonicalSiteUrl}/share/${normalizedKey}.html`;
  }

  function handleShareFacebook() {
    if (!resultData || !resultKey) return;
    const quote = `Ho fatto la Profilazione Civica Non Autorizzata di Barriera Babylon: sono ${resultData.name}. ${resultData.description}`;
    const shareTargetUrl = getProfileShareUrl(resultKey);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareTargetUrl)}&quote=${encodeURIComponent(quote)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  }

  async function handleShareInstagram() {
    if (!resultData) return;

    const shareTargetUrl = getProfileShareUrl(resultKey);
    const shareText = `Ho fatto la Profilazione Civica Non Autorizzata di Barriera Babylon e il mio profilo e': ${resultData.name}.\n\n${resultData.description}\n\nE tu chi sei dentro Barriera?\n${shareTargetUrl}\n\n#BarrieraBabylon #BarrieraDiMilano #Torino #Romanzo #Distopico #NoirItaliano`;
    try {
      await navigator.clipboard.writeText(shareText);
      resetShareFeedbackWithDelay("Testo copiato. Incollalo su Instagram.");
    } catch {
      resetShareFeedbackWithDelay("Copia manuale non disponibile su questo browser.");
    }
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
  }

  function handleSelect(letter) {
    setAnswers((prev) => ({ ...prev, [q.id]: letter }));
  }

  function transitionToQuestion(nextIndex) {
    setIsQuestionVisible(false);
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    transitionTimeoutRef.current = setTimeout(() => {
      setCurrent(nextIndex);
      setIsQuestionVisible(true);
    }, 120);
  }

  function handleNext() {
    if (current < totalQ - 1) {
      transitionToQuestion(current + 1);
    } else {
      setPhase("result");
    }
  }

  function handleBack() {
    if (current > 0) transitionToQuestion(current - 1);
  }

  function handleRestart() {
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    setAnswers({});
    setCurrent(0);
    setIsQuestionVisible(true);
    setPhase("intro");
  }

  function handleStart() {
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
    setCurrent(0);
    setIsQuestionVisible(true);
    setPhase("quiz");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  const resultKey = phase === "result" ? computeResult(answers) : null;
  const resultData = resultKey ? results[resultKey] : null;

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <header
          className="header"
          role="banner"
          aria-label="Barriera Babylon — Profilazione civica non autorizzata"
        />

        {phase !== "intro" && (
          <div className="progress-bar-outer">
            <div
              className="progress-bar-inner"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        )}

        {phase === "intro" && (
          <div className="intro">
            <span className="intro-tag">Documento riservato — uso interno</span>
            <p className="intro-subtitle">Profilazione Civica Non Autorizzata</p>
            <hr className="intro-divider" />
            <p className="intro-body">
              In una Barriera di Milano di un futuro prossimo, tra droni di sorveglianza,
              tensioni sociali e poliziotti armati a presidiare le strade, Torino decide di
              costruire un muro per separare il quartiere dal resto della citta' e allontanare
              tutto quello che non vuole piu' vedere.
              <br /><br />
              Ma dall'altra parte continuano a esserci vite normali, relazioni complicate,
              persone che resistono, spariscono, si aiutano e cercano comunque un modo per
              andare avanti.
              <br /><br />
              Scopri chi sei tu dentro <em>Barriera Babylon</em>.
            </p>
            <button className="start-btn" onClick={handleStart}>
              Avvia profilazione →
            </button>
            <p className="intro-instructions">
              — 15 domande<br />
              — una risposta per domanda<br />
              — nessuna risposta giusta
            </p>
            <button
              className="cta"
              onClick={() => window.open("https://www.golemedizioni.it/prodotto/barriera-babylon/", "_blank", "noopener,noreferrer")}
            >
              <svg className="cta-icon" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M1.5 2.5h1.8l1.2 6.2h6.6l1.3-4.7H5.3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6.2" cy="12.2" r="1" fill="currentColor" />
                <circle cx="10.6" cy="12.2" r="1" fill="currentColor" />
              </svg>
              Ordina la tua copia
            </button>
            
          </div>
        )}

        {phase === "quiz" && (
          <main className={`main question-transition${isQuestionVisible ? " visible" : ""}`}>
            <p className="question-meta">
              Domanda {current + 1} di {totalQ}
            </p>
            <h2 className="question-text">{q.text}</h2>
            <div className="options" role="radiogroup">
              {q.options.map((opt) => (
                <button
                  key={opt.letter}
                  className={`option-btn${selected === opt.letter ? " selected" : ""}`}
                  onClick={() => handleSelect(opt.letter)}
                  role="radio"
                  aria-checked={selected === opt.letter}
                >
                  <span className="option-letter">{opt.letter}</span>
                  <span className="option-text">{opt.text}</span>
                </button>
              ))}
            </div>
            <nav className="nav">
              <button className="nav-btn" onClick={handleBack} disabled={current === 0}>
                Indietro
              </button>
              <span className="counter">
                {Object.keys(answers).length}/{totalQ}
              </span>
              <button
                className="nav-btn primary"
                onClick={handleNext}
                disabled={!selected}
              >
                {current === totalQ - 1 ? "Risultato" : "Avanti"}
              </button>
            </nav>
          </main>
        )}

        {phase === "result" && resultData && (
          <div className="result">
            <p className="result-label">Profilo rilevato</p>
            <h2 className="result-name">SEI {resultData.name}</h2>
            <div className="result-body">
              <img
                className="result-image"
                src={`./images/${resultKey.toLowerCase()}.jpg`}
                alt={resultData.name}
              />
              <p className="result-description">{resultData.description}</p>
            </div>
            <div className="result-footer">
              <button className="restart-btn" onClick={handleRestart}>
                Ricomincia
              </button>
              <button
                className="cta"
                onClick={() => window.open("https://www.golemedizioni.it/prodotto/barriera-babylon/", "_blank", "noopener,noreferrer")}
              >
                <svg className="cta-icon" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M1.5 2.5h1.8l1.2 6.2h6.6l1.3-4.7H5.3" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="6.2" cy="12.2" r="1" fill="currentColor" />
                  <circle cx="10.6" cy="12.2" r="1" fill="currentColor" />
                </svg>
                Ordina la tua copia
              </button>
              <button className="share-btn" onClick={handleShareFacebook}>
                Condividi su Facebook
              </button>
              <button className="share-btn" onClick={handleShareInstagram}>
                Condividi su Instagram
              </button>
              {shareFeedback && <p className="share-feedback">{shareFeedback}</p>}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
