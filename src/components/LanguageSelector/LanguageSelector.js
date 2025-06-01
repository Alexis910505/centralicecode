import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  // Obtener el idioma actual, con fallback a 'en'
  const getCurrentLanguage = () => {
    const currentLang = i18n.language || 'en';
    const normalizedLang = currentLang.split('-')[0]; // Maneja casos como 'en-US'
    return languages.find(lang => lang.code === normalizedLang) || languages[0];
  };

  const currentLanguage = getCurrentLanguage();

  const changeLanguage = (languageCode) => {
    try {
      i18n.changeLanguage(languageCode);
      setIsOpen(false);
    } catch (error) {
      console.error('Error changing language:', error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Cerrar dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.language-selector')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Cerrar dropdown con Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="language-selector">
      <motion.button
        className="language-toggle"
        onClick={toggleDropdown}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Seleccionar idioma"
        aria-expanded={isOpen}
      >
        <span className="flag" role="img" aria-label={`${currentLanguage.name} flag`}>
          {currentLanguage.flag}
        </span>
        <span className="language-code">{currentLanguage.code.toUpperCase()}</span>
        <motion.i
          className="fas fa-chevron-down"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-dropdown"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="menu"
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                className={`language-option ${currentLanguage.code === language.code ? 'active' : ''}`}
                onClick={() => changeLanguage(language.code)}
                whileHover={{ backgroundColor: 'var(--bg-light)' }}
                whileTap={{ scale: 0.98 }}
                role="menuitem"
                aria-current={currentLanguage.code === language.code ? 'true' : 'false'}
              >
                <span className="flag" role="img" aria-label={`${language.name} flag`}>
                  {language.flag}
                </span>
                <span className="language-name">{language.name}</span>
                {currentLanguage.code === language.code && (
                  <i className="fas fa-check" aria-hidden="true" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector; 