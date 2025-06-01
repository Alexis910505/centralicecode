// Google Analytics 4 Configuration
// Para obtener el GA_MEASUREMENT_ID:
// 1. Ve a https://analytics.google.com/
// 2. Crea una propiedad GA4
// 3. Copia el ID (formato: G-XXXXXXXXXX)

// ✅ CONFIGURADO - Google Analytics ID real
export const GA_MEASUREMENT_ID = 'G-R6DPVS5NVN'; // 🎯 ID CONFIGURADO

// Configuración de eventos personalizados
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: window.location.pathname,
      ...parameters
    });
  }
};

// Eventos específicos para el sitio
export const trackContactForm = (service) => {
  trackEvent('contact_form_submit', {
    event_category: 'lead_generation',
    service_type: service
  });
};

export const trackServiceView = (service) => {
  trackEvent('service_view', {
    event_category: 'service_engagement',
    service_name: service
  });
};

export const trackLanguageChange = (language) => {
  trackEvent('language_change', {
    event_category: 'user_interaction',
    language: language
  });
};

export default GA_MEASUREMENT_ID; 