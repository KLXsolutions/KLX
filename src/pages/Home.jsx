import React from 'react';
import { I18nProvider } from '../lib/i18n.jsx';
import Header from '../components/klx/Header.jsx';
import Hero from '../components/klx/Hero.jsx';
import About from '../components/klx/About.jsx';
import Services from '../components/klx/Services.jsx';
import References from '../components/klx/References.jsx';
import FAQ from '../components/klx/FAQ.jsx';
import Contact from '../components/klx/Contact.jsx';
import Footer from '../components/klx/Footer.jsx';

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: 'Inter, sans-serif' }}>
        <Header />
        <Hero />
        <About />
        <Services />
        <References />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </I18nProvider>
  );
}
