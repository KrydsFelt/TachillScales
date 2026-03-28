import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './ServicePage.css';

export function AIService() {
  const { t } = useLanguage();

  return (
    <main className="service-page ai-page">
      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>{t.services.ai.title}</h1>
          <p>{t.services.ai.description}</p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Features */}
      <section className="service-features">
        <div className="container">
          <h2>Hvad jeg tilbyder</h2>

          <div className="features-list">
            <div className="feature-item">
              <h3>AI Chatbots</h3>
              <p>
                Intelligente chatbots der kan håndtere kundeforespørgsler 24/7.
                Reducerer svar-tid og øger kundetilfredshed.
              </p>
            </div>

            <div className="feature-item">
              <h3>Custom Training</h3>
              <p>
                Din chatbot trænes på dine produkter, policies og FAQ'er —
                specifikt for din virksomhed.
              </p>
            </div>

            <div className="feature-item">
              <h3>Multi-Channel Integration</h3>
              <p>
                Chatbots der fungerer på website, Facebook, Instagram, og other
                messaging platforms.
              </p>
            </div>

            <div className="feature-item">
              <h3>Analytics & Insights</h3>
              <p>
                Detaljert analyser af kundeinteraktioner, common issues, og
                opportunities for forbedring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Process */}
      <section className="service-process">
        <div className="container">
          <h2>Implementation Process</h2>

          <div className="process-steps">
            <div className="process-step">
              <span className="step-number">01</span>
              <h3>Assessment</h3>
              <p>Vi analyserer dine nuværende kundeservice processes og behov.</p>
            </div>

            <div className="process-step">
              <span className="step-number">02</span>
              <h3>Bot Design</h3>
              <p>Vi designer bot flows der matcher dine use cases og tone.</p>
            </div>

            <div className="process-step">
              <span className="step-number">03</span>
              <h3>Training & Testing</h3>
              <p>
                Chatboten trænes, testet, og optimeres før den goes live.
              </p>
            </div>

            <div className="process-step">
              <span className="step-number">04</span>
              <h3>Launch & Optimize</h3>
              <p>
                Live deployment med kontinuerlig monitoring og forbedringer baseret
                på data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <h2>Transformer din kundeservice</h2>
          <p>AI kan håndtere det mundane — så du kan fokusere på hvad der betyder noget.</p>
          <Link to="/contact" className="cta-button cta-primary">
            Start en test
          </Link>
        </div>
      </section>
    </main>
  );
}
