import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './ServicePage.css';

export function Website() {
  const { t } = useLanguage();

  return (
    <main className="service-page website-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>{t.services.website.title}</h1>
          <p>{t.services.website.description}</p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>Hvad jeg tilbyder</h2>

          <div className="features-list">
            <div className="feature-item">
              <h3>Modern Design</h3>
              <p>
                Smuk, moderne design inspireret af Polestar, Awwwards og andre
                premium brands. Din site skal se fremragende ud.
              </p>
            </div>

            <div className="feature-item">
              <h3>Responsive & Fast</h3>
              <p>
                Websites der fungerer perfekt på alle devices. Optimeret for
                hastighed — det påvirker både brugere og SEO.
              </p>
            </div>

            <div className="feature-item">
              <h3>React Development</h3>
              <p>
                Moderne React-baserede hjemmesider med smooth navigering, og
                interaktive elementer.
              </p>
            </div>

            <div className="feature-item">
              <h3>SEO Ready</h3>
              <p>
                Alle hjemmesider bygges med SEO som en grundsten — fra struktur
                til metadata til performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Process */}
      <section className="service-process">
        <div className="container">
          <h2>Min Designproces</h2>

          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3>Discovery & Strategy</h3>
              <p>Vi talker grundigt om dine mål, brand, og målgruppe.</p>
            </div>

            <div className="process-step">
              <span className="step-number">02</span>
              <h3>Design & Wireframes</h3>
              <p>Wireframes og designforslag der viser det endelige resultat.</p>
            </div>

            <div className="process-step">
              <span className="step-number">03</span>
              <h3>Development</h3>
              <p>Jeg bygger dit site med React, styling, og alle funktioner.</p>
            </div>

            <div className="process-step">
              <span className="step-number">04</span>
              <h3>Launch & Support</h3>
              <p>Site lanceres og du får support til at vedligeholde det.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <h2>Klar til en ny hjemmeside?</h2>
          <p>Lad mig hjælpe dig med at skabe en premium online tilstedeværelse.</p>
          <Link to="/contact" className="cta-button cta-primary">
            Få et tilbud
          </Link>
        </div>
      </section>
    </main>
  );
}
