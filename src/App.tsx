import './App.css'

const works = [
  {
    id: 'luft',
    tag: 'Medizintechnik',
    title: 'Luftkeimsammler',
    copy: 'Luft. Sonst nichts. Präzise Erfassung und Handhabung in sterilen Umgebungen.',
    media: 'air' as const,
  },
  {
    id: 'lasten',
    tag: 'Mobilität',
    title: 'Lastenfahrrad',
    copy: 'Zustellung auf der letzten Meile — robust, ergonomisch, serienreif gedacht.',
    media: 'bike' as const,
  },
  {
    id: 'praezision',
    tag: 'Präzisionsinstrument',
    title: 'Augen-OP Instrument',
    copy: 'Mikrometergenaue Handhabung für ophthalmologische Eingriffe.',
    media: 'eye' as const,
  },
]

const services = [
  {
    num: '01',
    title: 'Design',
    copy: 'Industrial Design vom ersten Konzept bis zur Formensprache, die Produktion und Nutzung ernst nimmt.',
  },
  {
    num: '02',
    title: 'Engineering',
    copy: 'Mechanical Engineering mit Fokus auf Funktion, Toleranzen und fertigungsgerechte Konstruktion.',
  },
  {
    num: '03',
    title: 'Inno-Service',
    copy: 'Innovation als Dienstleistung — Ideen prüfen, Prototypen schärfen, den Weg zur Serie freimachen.',
  },
]

function WorkMedia({ kind }: { kind: 'air' | 'bike' | 'eye' }) {
  if (kind === 'air') {
    return (
      <div className="work-media work-media--air" aria-hidden>
        <div className="abstract abstract--air">
          <div className="ring" />
          <div className="ring" />
          <div className="ring" />
        </div>
      </div>
    )
  }
  if (kind === 'bike') {
    return (
      <div className="work-media work-media--bike" aria-hidden>
        <div className="abstract abstract--bike">
          <div className="box" />
          <div className="frame" />
          <div className="wheel" />
          <div className="wheel" />
        </div>
      </div>
    )
  }
  return (
    <div className="work-media work-media--eye" aria-hidden>
      <div className="abstract abstract--eye">
        <div className="grid" />
        <div className="needle" />
        <div className="tip" />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="page">
      <aside className="mock-badge" aria-label="Konzept Mock Hinweis">
        <span>●</span> Konzept / Mock
      </aside>

      <header className="header">
        <div className="wrap header-inner">
          <a href="#top" className="logo">
            form<em>scope</em>
          </a>
          <nav className="nav" aria-label="Hauptnavigation">
            <a href="#arbeit">Arbeit</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#atelier">Atelier</a>
            <a href="#kontakt" className="nav-cta">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="hero-kicker">Industrial Design · Mechanical Engineering</p>
              <h1>
                Vom Designkonzept
                <br />
                bis zur <span className="accent">Serienreife</span>
              </h1>
              <p className="hero-copy">
                formscope entwickelt Produkte mit Schweizer Präzision —
                kompakt, agil und mit Handwerk im Sulzerareal Winterthur.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#arbeit">
                  Ausgewählte Arbeit
                </a>
                <a className="btn btn-ghost" href="#kontakt">
                  Gespräch vereinbaren
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden>
              <div className="hero-form" />
              <div className="hero-meta">
                <div>
                  Homebase
                  <strong>Sulzerareal</strong>
                </div>
                <div style={{ textAlign: 'right' }}>
                  Seit
                  <strong>2011</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section work" id="arbeit">
          <div className="wrap">
            <div className="work-head">
              <div>
                <p className="section-label">Einblick</p>
                <h2 className="section-title">Ausgewählte Arbeit</h2>
                <p className="section-lead">
                  Drei Projekte, die Design, Mechanik und Anwendung zusammendenken.
                </p>
              </div>
            </div>

            <div className="work-grid">
              {works.map((w) => (
                <article key={w.id} className="work-card">
                  <WorkMedia kind={w.media} />
                  <div className="work-body">
                    <p className="work-tag">{w.tag}</p>
                    <h3>{w.title}</h3>
                    <p>{w.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="leistungen">
          <div className="wrap">
            <p className="section-label">Leistungen</p>
            <h2 className="section-title">Produktentwicklung aus einer Hand</h2>
            <p className="section-lead">
              Design, Engineering und Innovation-Service — ohne Umwege, ohne Overhead.
            </p>

            <div className="services-grid">
              {services.map((s) => (
                <article key={s.num} className="service">
                  <p className="service-num">{s.num}</p>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="atelier">
          <div className="wrap about-grid">
            <div>
              <p className="section-label">Atelier</p>
              <h2 className="section-title">Zu Hause ist&apos;s am schönsten</h2>
              <p className="about-copy">
                Unsere Homebase liegt in Winterthur, mitten im ehemaligen Industrieareal
                von Sulzer. Genau die richtige Umgebung, um neue Ideen zu schmieden und
                ausgeklügelte Lösungen zu finden.
              </p>
              <p className="about-copy">
                Wir sind klein genug, um effizient und flexibel zu agieren — und gross
                genug, um aufwendige Projekte zu stemmen. Sechs Partner, ein Team, eine
                Philosophie: mit Spass bei der Arbeit gute Lösungen entwickeln.
              </p>

              <div className="stats" style={{ marginTop: '2rem' }}>
                <div className="stat">
                  <strong>2011</strong>
                  <span>Gegründet</span>
                </div>
                <div className="stat">
                  <strong>6</strong>
                  <span>Partner</span>
                </div>
                <div className="stat">
                  <strong>1</strong>
                  <span>Atelier Sulzerareal</span>
                </div>
                <div className="stat">
                  <strong>∞</strong>
                  <span>Iterationen bis Serie</span>
                </div>
              </div>
            </div>

            <aside className="about-aside">
              <h3>Adresse</h3>
              <p>
                Mitten in der Kesselschmiede — Industrieerbe, kurze Wege, klare Haltung.
              </p>
              <address>
                formscope GmbH
                <br />
                Zur Kesselschmiede 29
                <br />
                CH-8400 Winterthur
              </address>
            </aside>
          </div>
        </section>

        <section className="section contact" id="kontakt">
          <div className="wrap">
            <div className="contact-panel">
              <div>
                <p className="section-label">Kontakt</p>
                <h2>Projekt im Kopf? Wir hören zu.</h2>
                <p>
                  Thomas Etter · Industrial Design / Geschäftsleitung — und das Team
                  am Sulzerareal.
                </p>
              </div>
              <div className="contact-actions">
                <a className="contact-link" href="tel:+41525776006">
                  +41 52 577 60 06
                </a>
                <a className="contact-link" href="mailto:info@formscope.ch">
                  info@formscope.ch
                </a>
                <p className="contact-note">
                  Dies ist ein Konzept-Mock — keine Live-Website.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>© formscope GmbH · Konzept-Mock für Dinner mit Thomas Etter</p>
          <p>
            <a href="https://www.formscope.ch/" target="_blank" rel="noreferrer">
              formscope.ch
            </a>
            {' · '}
            Experiment, kein Rebrand
          </p>
        </div>
      </footer>
    </div>
  )
}
