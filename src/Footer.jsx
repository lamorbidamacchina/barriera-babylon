const footerStyles = `
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap');

  .site-footer {
    flex-shrink: 0;
    border-top: 1px solid rgba(17, 17, 17, 0.12);
    padding: 1rem 2rem 1.35rem;
    margin-top: auto;
  }

  .site-footer-inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 1rem;
    font-family: 'IBM Plex Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.04em;
    color: #555;
  }

  .site-footer-link {
    color: inherit;
    text-decoration: none;
  }

  .site-footer-link:hover {
    color: #111;
    text-decoration: underline;
  }

  .site-footer-sep {
    color: #c8c8c8;
    user-select: none;
    pointer-events: none;
  }
`;

export default function Footer() {
  return (
    <>
      <style>{footerStyles}</style>
      <footer className="site-footer" role="contentinfo">
        <div className="site-footer-inner">
          <a className="site-footer-link" href="/privacy">
            Privacy policy
          </a>
          <span className="site-footer-sep" aria-hidden="true">
            ·
          </span>
          <a
            className="site-footer-link"
            href="https://www.golemedizioni.it/prodotto/barriera-babylon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ordina la tua copia
          </a>
        </div>
      </footer>
    </>
  );
}
