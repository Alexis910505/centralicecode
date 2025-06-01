import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics';
import SEOHelmet from './components/SEO/SEOHelmet';
import SchemaMarkup from './components/SEO/SchemaMarkup';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        {/* SEO Components */}
        <SEOHelmet />
        <SchemaMarkup />
        <GoogleAnalytics />
        
        {/* Main Components */}
        <Navbar />
        <Hero />
        <Services />
        <Stats />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App; 