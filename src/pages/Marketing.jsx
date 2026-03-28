import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './ServicePage.css';

export function Marketing() {
  const { t } = useLanguage();

  return (
    <main className="service-page marketing-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>{t.services.marketing.title}</h1>
          <p>{t.services.marketing.description}</p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>Hvad jeg tilbyder</h2>

          <div className="features-list">
            <div className="feature-item">
              <h3>SEO & Content</h3>
              <p>
                Strategisk søgemaskineoptimering og content marketing der driver
                organisk trafik og engagerer dine målgruppe.
              </p>
            </div>

            <div className="feature-item">
              <h3>Data-Driven Campaigns</h3>
              <p>
                Kampagner baseret på data-analyse for maksimal ROI. A/B testing,
                konverteringsoptimering og performance tracking.
              </p>
            </div>

            <div className="feature-item">
              <h3>Social Media Strategy</h3>
              <p>
                Strategisk social media tilstedeværelse på dine vigtigste
                platforme med content der konverterer.
              </p>
            </div>

            <div className="feature-item">
              <h3>Email Marketing</h3>
              <p>
                Personaliserede email-kampagner der bygger relationer og driver
                gentagede salg fra dine eksisterende kunder.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Process */}
      <section className="service-process">
        <div className="container">
          <h2>Min Proces</h2>

          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3>Analyse</h3>
              <p>Jeg udfører en grundig analyse af dine mål, marked og konkurrenter.</p>
            </div>

            <div className="process-step">
              <span className="step-number">02</span>
              <h3>Strategi</h3>
              <p>Vi udvikler en skræddersyet strategi der passar til dine behov og budget.</p>
            </div>

            <div className="process-step">
              <span className="step-number">03</span>
              <h3>Implementering</h3>
              <p>
                Kampagner lanceres og overvåges tæt med daglige optimiseringer.
              </p>
            </div>

            <div className="process-step">
              <span className="step-number">04</span>
              <h3>Rapportering</h3>
              <p>
                Du modtager detaljerede rapporter, der viser resultater og
                fremgang.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <h2>Lad os arbejde sammen</h2>
          <p>Klar til at få dine marketing til næste niveau?</p>
          <Link to="/contact" className="cta-button cta-primary">
            Start en samtale
          </Link>
        </div>
      </section>
    </main>
  );
}
