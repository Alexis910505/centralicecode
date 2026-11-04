import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import CopyEmail from '../CopyEmail/CopyEmail';
import './Hero.css';

const useTypewriter = (words) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setIndex(0);
    setText('');
    setDeleting(false);
  }, [words]);

  useEffect(() => {
    const word = words[index % words.length] || '';
    let delay = deleting ? 40 : 85;
    if (!deleting && text === word) delay = 1800;
    if (deleting && text === '') delay = 300;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return text;
};

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en';
  const typed = useTypewriter(profile.heroRoles[lang]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.12 } } };
  const item = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } } };

  return (
    <section id="inicio" className="hero">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
          {profile.available && (
            <motion.div className="hero-badge" variants={item}>
              <span className="pulse-dot"></span>
              {t('hero.available')}
            </motion.div>
          )}
          <motion.p className="hero-greeting mono" variants={item}>{t('hero.greeting')}</motion.p>
          <motion.h1 variants={item}>{profile.name}</motion.h1>
          <motion.h2 className="hero-role" variants={item}>
            <span className="hero-role-text">{typed}</span>
            <span className="cursor">|</span>
          </motion.h2>
          <motion.p className="hero-description" variants={item}>{t('hero.description')}</motion.p>

          <motion.div className="hero-buttons" variants={item}>
            <button className="btn-primary" onClick={() => scrollTo('proyectos')}>
              {t('hero.cta_projects')} <i className="fas fa-arrow-right"></i>
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('contacto')}>
              {t('hero.cta_contact')}
            </button>
          </motion.div>

          <motion.div className="hero-social" variants={item}>
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <CopyEmail />
          </motion.div>
        </motion.div>

        <motion.div
          className="code-window"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="code-window-bar">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="code-window-title mono">developer.ts</span>
          </div>
          <pre className="code-body mono">
<span className="c-key">const</span> <span className="c-var">developer</span> = {'{\n'}
{'  '}<span className="c-prop">name</span>: <span className="c-str">'{profile.name}'</span>,{'\n'}
{'  '}<span className="c-prop">role</span>: <span className="c-str">'{profile.role[lang]}'</span>,{'\n'}
{'  '}<span className="c-prop">experience</span>: <span className="c-num">{profile.stats.years}</span>, <span className="c-comment">{'// '}{lang === 'es' ? 'años' : 'years'}</span>{'\n'}
{'  '}<span className="c-prop">mobile</span>: [<span className="c-str">'Flutter'</span>, <span className="c-str">'Dart'</span>],{'\n'}
{'  '}<span className="c-prop">frontend</span>: [<span className="c-str">'React'</span>, <span className="c-str">'Next.js'</span>],{'\n'}
{'  '}<span className="c-prop">backend</span>: [<span className="c-str">'NestJS'</span>, <span className="c-str">'Node.js'</span>],{'\n'}
{'  '}<span className="c-prop">data</span>: [<span className="c-str">'PostgreSQL'</span>, <span className="c-str">'Firebase'</span>],{'\n'}
{'  '}<span className="c-prop">remote</span>: <span className="c-key">true</span>,{'\n'}
{'};\n\n'}
<span className="c-var">developer</span>.<span className="c-fn">ship</span>(<span className="c-str">'your-next-product'</span>);
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
