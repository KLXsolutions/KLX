import React, { useState, useEffect } from 'react';
import { useI18n } from '../../lib/i18n.jsx';

const LOGO_URL = 'https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/45c8a30c9_833144AB-385C-459B-A505-FF113C7374FD.png';
const LANGS = ['en', 'es', 'hu'];

export default function Header() {
  var ctx = useI18n();
  var t = ctx.t; var lang = ctx.lang; var setLanguage = ctx.setLanguage;
  var s1 = useState(false); var menuOpen = s1[0]; var setMenuOpen = s1[1];
  var s2 = useState(false); var scrolled = s2[0]; var setScrolled = s2[1];

  var navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.refs, href: '#references' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(function() {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener('scroll', onScroll);
    return function() { window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, transition: 'all 0.3s',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid hsl(0,0%,14%)' : 'none', padding: '0 24px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img src={LOGO_URL} alt="KLX" style={{ width: '40px', height: '40px', borderRadius: '10px', objectFit: 'cover' }} />
          <span style={{ fontWeight: 900, fontSize: '1.125rem', letterSpacing: '0.05em', color: 'hsl(0,0%,95%)' }}>
            KLX <span style={{ color: 'hsl(42,98%,53%)' }}>SOLUTIONS</span>
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
          {navLinks.map(function(link) { return (
            <a key={link.href} href={link.href} style={{ color: 'hsl(0,0%,70%)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={function(e) { e.target.style.color = 'hsl(42,98%,53%)'; }}
              onMouseLeave={function(e) { e.target.style.color = 'hsl(0,0%,70%)'; }}>
              {link.label}
            </a>
          ); })}
          <div style={{ display: 'flex', gap: '4px' }}>
            {LANGS.map(function(l) { return (
              <button key={l} onClick={function() { setLanguage(l); }}
                style={{ padding: '4px 10px', borderRadius: '999px', fontSize: '0.7rem', fontWeight: 700, border: '1px solid',
                  background: lang === l ? 'hsl(42,98%,53%)' : 'transparent',
                  color: lang === l ? 'hsl(0,0%,4%)' : 'hsl(0,0%,55%)',
                  borderColor: lang === l ? 'hsl(42,98%,53%)' : 'hsl(0,0%,20%)', cursor: 'pointer', textTransform: 'uppercase' }}>
                {l}
              </button>
            ); })}
          </div>
          <a href="#contact" style={{ background: 'hsl(42,98%,53%)', color: 'hsl(0,0%,4%)', fontWeight: 700, padding: '8px 20px', borderRadius: '999px', fontSize: '0.875rem', textDecoration: 'none' }}>
            {t.nav.cta}
          </a>
        </nav>
        <button onClick={function() { setMenuOpen(function(v) { return !v; }); }} style={{ display: 'none', background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }} className="show-mobile">
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && (
        <div style={{ background: 'rgba(10,10,10,0.98)', padding: '16px 24px 24px', borderTop: '1px solid hsl(0,0%,14%)' }}>
          {navLinks.map(function(link) { return (
            <a key={link.href} href={link.href} onClick={function() { setMenuOpen(false); }}
              style={{ display: 'block', padding: '12px 0', color: 'hsl(0,0%,70%)', textDecoration: 'none', fontSize: '1rem', borderBottom: '1px solid hsl(0,0%,10%)' }}>
              {link.label}
            </a>
          ); })}
          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            {LANGS.map(function(l) { return (
              <button key={l} onClick={function() { setLanguage(l); setMenuOpen(false); }}
                style={{ padding: '6px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, border: '1px solid', cursor: 'pointer', textTransform: 'uppercase',
                  background: lang === l ? 'hsl(42,98%,53%)' : 'transparent',
                  color: lang === l ? 'hsl(0,0%,4%)' : 'hsl(0,0%,55%)',
                  borderColor: lang === l ? 'hsl(42,98%,53%)' : 'hsl(0,0%,20%)' }}>
                {l}
              </button>
            ); })}
          </div>
        </div>
      )}
      <style>{'.hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: block !important; } }'}</style>
    </header>
  );
}
