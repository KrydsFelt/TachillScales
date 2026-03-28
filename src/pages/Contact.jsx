import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data (in real app, would send to backend)
    console.log('Form submitted:', formData);

    // Show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>{t.contact.title}</h1>
          <p>Jeg svarer normalt inden for 24 timer. Lad os snakke om dit projekt!</p>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Contact Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-form-container">
              {submitted && (
                <div className="success-message">
                  ✓ Tak for din besked! Jeg kontakter dig snart.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">{t.contact.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Dit navn"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t.contact.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="din@email.dk"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t.contact.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Fortæl mig om dit projekt..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="submit-button">
                  {t.contact.send}
                </button>
              </form>

              <p className="contact-footer">{t.contact.footer}</p>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-block">
                <h3>Email</h3>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </div>

              <div className="info-block">
                <h3>Follow</h3>
                <div className="social-links">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    X / Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
