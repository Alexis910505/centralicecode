import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import profile from '../../config/profile';
import './Navbar.css';

const sections = [
  { id: 'inicio', key: 'home' },
  { id: 'sobre-mi', key: 'about' },
  { id: 'stack', key: 'skills' },
  { id: 'proyectos', key: 'projects' },
  { id: 'experiencia', key: 'experience' },
  { id: 'servicios', key: 'services' },
  { id: 'contacto', key: 'contact' },
];

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const offset = window.scrollY + 140;
      let current = 'inicio';
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      });
      setActive(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <button className="nav-logo" onClick={() => scrollToSection('inicio')} aria-label="Inicio">
          <span className="nav-logo-bracket">&lt;</span>
          {profile.shortName}
          <span className="nav-logo-bracket"> /&gt;</span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {sections.map(({ id, key }) => (
            <li key={id}>
              <button
                className={`nav-link ${active === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {t(`navbar.${key}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <LanguageSelector />
          <a className="nav-cv" href={profile.cv} download={profile.cvFileName}>
            <i className="fas fa-download"></i>
            <span>{t('navbar.cv')}</span>
          </a>
          <button
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
