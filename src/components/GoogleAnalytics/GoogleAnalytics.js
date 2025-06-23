import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '../../config/analytics';

const GoogleAnalytics = () => {
  useEffect(() => {
    // Solo cargar en producción o cuando esté configurado
    if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.log('🔧 Google Analytics no configurado. Configura GA_MEASUREMENT_ID en src/config/analytics.js');
      return;
    }

    // Cargar Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Configurar gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'dimension1': 'service_type',
          'dimension2': 'language'
        }
      });
    `;
    document.head.appendChild(script2);

    // Limpiar al desmontar
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

export default GoogleAnalytics; 