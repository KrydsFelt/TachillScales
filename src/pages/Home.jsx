import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { ServiceCard } from '../components/ServiceCard';
import { ChatAnimation } from '../components/ChatAnimation';
import { BrandBanner } from '../components/BrandBanner';
import './Home.css';

export function Home() {
  const { t } = useLanguage();

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1>{t.hero.title}</h1>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
              <div className="hero-ctas">
                <Link to="/contact" className="cta-button cta-primary">
                  {t.hero.cta2}
                </Link>
                <Link to="/marketing" className="cta-button cta-secondary">
                  {t.hero.cta1}
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <ChatAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Banner */}
      <BrandBanner />

      <div className="hero-divider"></div>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-grid">
            <ServiceCard
              title={t.services.marketing.title}
              description={t.services.marketing.description}
              link="/marketing"
              icon="🚀"
            />
            <ServiceCard
              title={t.services.website.title}
              description={t.services.website.description}
              link="/website"
              icon="✨"
            />
            <ServiceCard
              title={t.services.ai.title}
              description={t.services.ai.description}
              link="/ai"
              icon="⚡"
            />
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <h2>{t.about.title}</h2>
            <p>{t.about.text}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
