import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';

export default function Header() {
  var ctx = useI18n();
  var lang = ctx.lang;
  var setLanguage = ctx.setLanguage;
  var t = ctx.t;
  var links = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#references', label: t.nav.refs },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];
  return (
    <header style={{ position:'fixed', top:0, left:0, right:0, zIndex:50, background:'rgba(10,10,10,0.95)', borderBottom:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(20px)' }}>
      <div style={{ maxWidth:'80rem', margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'14px 32px' }}>
        <a href="#home" style={{ fontWeight:900, fontSize:'1.1rem', letterSpacing:'0.1em', color:'hsl(0,0%,95%)', textDecoration:'none' }}>
          KLX <span style={{ color:'hsl(42,98%,53%)' }}>SOLUTIONS</span>
        </a>
        <nav style={{ display:'flex', gap:'28px' }}>
          {links.map(function(link) { return (
            <a key={link.href} href={link.href} style={{ fontSize:'0.875rem', fontWeight:500, color:'hsl(0,0%,55%)', textDecoration:'none' }}>{link.label}</a>
          ); })}
        </nav>
        <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
          <div style={{ display:'flex', background:'hsl(0,0%,10%)', border:'1px solid hsl(0,0%,14%)', borderRadius:'999px', padding:'4px' }}>
            {['en', 'es', 'hu'].map(function(l) { return (
              <button key={l} onClick={function() { setLanguage(l); }}
                style={{ padding:'6px 12px', fontSize:'0.7rem', fontWeight:700, borderRadius:'999px', border:'none', cursor:'pointer',
                  background: lang === l ? 'hsl(42,98%,53%)' : 'transparent',
                  color: lang === l ? 'hsl(0,0%,4%)' : 'hsl(0,0%,55%)' }}>
                {l.toUpperCase()}
              </button>
            ); })}
          </div>
          <a href="#contact" style={{ display:'inline-flex', alignItems:'center', background:'hsl(42,98%,53%)', color:'hsl(0,0%,4%)', fontWeight:700, padding:'10px 20px', borderRadius:'999px', fontSize:'0.875rem', textDecoration:'none' }}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
