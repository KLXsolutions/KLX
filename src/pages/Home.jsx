import React from 'react';
import { I18nProvider } from '../lib/i18n.jsx';
import Header from '../components/klx/Header';
import Hero from '../components/klx/Hero';
import About from '../components/klx/About';
import Services from '../components/klx/Services';
import References from '../components/klx/References';
import FAQ from '../components/klx/FAQ';
import Contact from '../components/klx/Contact';
import Footer from '../components/klx/Footer';

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground">
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