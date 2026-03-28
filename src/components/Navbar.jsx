import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Navbar.css';

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show navbar if scrolling up or at top
          if (currentScrollY < lastScrollY || currentScrollY < 50) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 150) {
            // Hide navbar if scrolling down significantly
            setIsVisible(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, false);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleLanguage = () => {
    setLanguage(language === 'da' ? 'en' : 'da');
  };

  return (
    <nav className={`navbar ${!isVisible ? 'hidden' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Tony Truong</span>
        </Link>

        {/* Menu toggle for mobile */}
        <button
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            {t.nav.home}
          </Link>
          <Link to="/marketing" className={`nav-link ${isActive('/marketing') || isActive('/website') || isActive('/ai') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            Services & Produkter
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>
            {t.nav.contact}
          </Link>

          {/* Language toggle */}
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'da' ? 'EN' : 'DA'}
          </button>
        </div>
      </div>
    </nav>
  );
}
