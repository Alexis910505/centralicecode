import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import profile from '../../config/profile';
import './CopyEmail.css';

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  }
};

/**
 * Botón de email: copia la dirección al portapapeles (mailto: no funciona
 * si el visitante no tiene una app de correo configurada).
 * Pasa children para mostrar texto en vez del ícono.
 */
const CopyEmail = ({ className = '', children }) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    if (await copyText(profile.email)) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      className={`copy-email ${className}`}
      onClick={handleClick}
      aria-label={`${t('contact.copy_email')}: ${profile.email}`}
      title={profile.email}
    >
      {children || <i className={copied ? 'fas fa-check' : 'fas fa-envelope'}></i>}
      <span className={`copy-email-tip mono ${copied ? 'show' : ''}`} role="status">
        {copied ? t('contact.copied') : profile.email}
      </span>
    </button>
  );
};

export default CopyEmail;
