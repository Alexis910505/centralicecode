import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Services from './components/Services/Services';
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
        <SEOHelmet />
        <SchemaMarkup />
        <GoogleAnalytics />

        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Skills />
          <Portfolio />
          <Experience />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
