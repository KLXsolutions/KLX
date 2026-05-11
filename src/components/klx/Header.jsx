import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const { lang, setLanguage, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#references', label: t.nav.refs },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3.5 md:px-8">
        <a href="#home"><span className="font-black text-lg tracking-wider">KLX <span className="text-primary">SOLUTIONS</span></span></a>
        <nav className="hidden lg:block">
          <ul className="flex gap-7">
            {links.map(link => (
              <li key={link.href}><a href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group py-1.5">{link.label}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" /></a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="flex bg-secondary border border-border rounded-full p-1">
            {['en', 'es', 'hu'].map(l => (<button key={l} onClick={() => setLanguage(l)} className={`px-3 py-1.5 text-xs font-bold rounded-full tracking-wide transition-all ${lang === l ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>{l.toUpperCase()}</button>))}
          </div>
          <a href="#contact" className="hidden md:inline-flex bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-full text-sm hover:-translate-y-0.5 transition-all">{t.nav.cta}</a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-secondary">
          {links.map(link => (<a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block px-8 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{link.label}</a>))}
        </div>
      )}
    </header>
  );
}