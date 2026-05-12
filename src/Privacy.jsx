import { useEffect } from "react";
import Footer from "./Footer.jsx";

const assetBase = import.meta.env.BASE_URL;

const privacyStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,400;0,500;1,400&display=swap');

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

  .app-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 0;
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

  .privacy-doc {
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
    padding: 2rem 2rem 3.5rem;
  }

  .privacy-back {
    margin-bottom: 1.75rem;
  }

  .privacy-back a {
    font-size: 1rem;
    color: #324780;
    text-decoration: none;
  }

  .privacy-back a:hover {
    text-decoration: underline;
  }

  .privacy-doc h1 {
    font-size: 1.65rem;
    font-weight: 500;
    margin-bottom: 0.65rem;
    color: #111;
  }

  .privacy-meta {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 2rem;
    font-style: italic;
  }

  .privacy-doc h2 {
    font-size: 1.1rem;
    font-weight: 500;
    color: #222;
    margin-top: 2.25rem;
    margin-bottom: 0.85rem;
  }

  .privacy-doc p {
    font-size: 1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 1rem;
  }

  .privacy-doc ul {
    margin: 0 0 1rem 1.25rem;
    padding: 0;
  }

  .privacy-doc li {
    margin-bottom: 0.45rem;
    line-height: 1.75;
    color: #333;
  }

  .privacy-doc a {
    color: #324780;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  .privacy-doc a:hover {
    color: #253660;
  }

  .privacy-placeholder {
    font-style: italic;
    color: #555;
  }
`;

export default function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <style>{privacyStyles}</style>
      <div className="app">
        <header
          className="header"
          role="banner"
          aria-label="Barriera Babylon — Profilazione civica non autorizzata"
        />

        <div className="app-body">
          <article className="privacy-doc">
            <p className="privacy-back">
              <a href="/">← Torna alla home</a>
            </p>

            <h1>Privacy Policy</h1>
            <p className="privacy-meta">Ultimo aggiornamento: 12 maggio 2026</p>

            <p>
              Questa informativa descrive come vengono gestiti i dati personali raccolti
              attraverso il sito web dedicato al romanzo &quot;Barriera Babylon&quot;.
            </p>

            <h2>1. Titolare del Trattamento dei Dati</h2>
            <p>La Titolare del trattamento è Barbara Santise.</p>
            <p>
              Per qualsiasi domanda o per esercitare i propri diritti, è possibile contattare la
              titolare all&apos;indirizzo email:{" "}
              <span className="privacy-placeholder">basantise@gmail.com</span>.
            </p>

            <h2>2. Tipologia di Dati Raccolti</h2>
            <p>Il sito raccoglie dati in due modi:</p>
            <p>
              <strong>Dati forniti volontariamente:</strong> L&apos;indirizzo email
              dell&apos;utente, qualora decida di iscriversi per ricevere aggiornamenti sulle
              iniziative legate al romanzo.
            </p>
            <p>
              <strong>Dati tecnici minimi:</strong> Durante la navigazione, i server di hosting (GitHub) raccolgono automaticamente alcuni dati tecnici necessari al funzionamento del sito (come l'indirizzo IP), trattati in conformità alle loro policy. <strong>Questo sito non utilizza cookie di tracciamento o profilazione</strong>.
            </p>

            <h2>3. Finalità del Trattamento</h2>
            <p>I dati vengono raccolti esclusivamente per le seguenti finalità:</p>
            <p>
              <strong>Comunicazione:</strong> Inviare aggiornamenti, eventi o notizie relative al
              romanzo &quot;Barriera Babylon&quot;.
            </p>
            <p>
              <strong>Funzionamento tecnico:</strong> Consentire la corretta visualizzazione dei
              font e l&apos;hosting dei contenuti.
            </p>

            <h2>4. Servizi di Terze Parti e Trasferimento Dati</h2>
            <p>
              Il sito utilizza i seguenti servizi che potrebbero comportare il trasferimento di
              dati al di fuori dell&apos;Unione Europea (USA), protetti da accordi sulla privacy
              (Data Privacy Framework):
            </p>
            <p>
              <strong>GitHub Pages (GitHub, Inc.):</strong> Servizio di hosting utilizzato per la
              pubblicazione del sito.{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy di GitHub
              </a>
              .
            </p>
            <p>
              <strong>Google Fonts (Google Ireland Limited):</strong> Servizio di visualizzazione
              di stili di carattere. La chiamata ai server di Google è necessaria per visualizzare
              correttamente il testo del sito.{" "} <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy di Google
              </a>
            </p>

            <h2>5. Base Giuridica del Trattamento</h2>
            <p>
              Il trattamento della tua email si basa sul tuo consenso esplicito, fornito al momento
              dell&apos;inserimento nel modulo di contatto. Il trattamento dei dati tecnici è
              necessario per il legittimo interesse della titolare a mantenere il sito funzionante e
              sicuro.
            </p>

            <h2>6. Periodo di Conservazione</h2>
            <p>
              L'indirizzo email sarà conservato esclusivamente fino a quando non richiederai la disiscrizione o la rimozione dai nostri contatti.
            </p>

            <h2>7. Diritti dell&apos;Interessato</h2>
            <p>In ogni momento, hai il diritto di:</p>
            <ul>
              <li>Chiedere l&apos;accesso ai tuoi dati.</li>
              <li>Chiederne la rettifica o la cancellazione (&quot;diritto all&apos;oblio&quot;).</li>
              <li>Revocare il consenso precedentemente fornito.</li>
              <li>Proporre reclamo al Garante per la Protezione dei Dati Personali.</li>
            </ul>
          </article>
        </div>

        <Footer />
      </div>
    </>
  );
}
