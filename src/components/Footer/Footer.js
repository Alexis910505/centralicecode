import React from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import CopyEmail from '../CopyEmail/CopyEmail';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo mono">
          <span className="nav-logo-bracket">&lt;</span>{profile.shortName}<span className="nav-logo-bracket"> /&gt;</span>
        </div>
        <div className="footer-social">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <CopyEmail />
        </div>
        <p className="footer-copy">
          {t('footer.built')} · © {year} {profile.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
