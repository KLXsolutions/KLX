import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';

const LOGO_URL = "https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/45c8a30c9_833144AB-385C-459B-A505-FF113C7374FD.png";

export default function Header() {
  const { lang, setLanguage, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#services", label: t.nav.services },
    { href: "#references", label: t.nav.refs },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header style={{position:'fixed',top:0,left:0,right:0,zIndex:50,background:'rgba(10,10,10,0.92)',backdropFilter:'blur(20px)',borderBottom:'1px solid hsl(0 0% 14%)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 24px'}}>
        <a href="#home" style={{display:'flex',alignItems:'center',gap:'12px',textDecoration:'none'}}>
          <span style={{fontWeight:900,fontSize:'18px',letterSpacing:'2px',color:'hsl(0 0% 95%)'}}>
            KLX <span style={{color:'hsl(42 98% 53%)'}}>SOLUTIONS</span>
          </span>
        </a>

        <nav style={{display: menuOpen ? 'none' : 'flex', gap:'28px'}} className="hidden-mobile">
          {links.map(link => (
            <a key={link.href} href={link.href} style={{fontSize:'14px',fontWeight:500,color:'hsl(0 0% 55%)',textDecoration:'none',transition:'color 0.2s'}} onMouseOver={e=>e.target.style.color='hsl(0 0% 95%)'} onMouseOut={e=>e.target.style.color='hsl(0 0% 55%)'}>
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
          <div style={{display:'flex',background:'hsl(0 0% 10%)',border:'1px solid hsl(0 0% 14%)',borderRadius:'999px',padding:'4px'}}>
            {['en', 'es', 'hu'].map(l => (
              <button key={l} onClick={() => setLanguage(l)} style={{padding:'6px 12px',fontSize:'12px',fontWeight:700,borderRadius:'999px',border:'none',cursor:'pointer',transition:'all 0.2s',background: lang === l ? 'hsl(42 98% 53%)' : 'transparent',color: lang === l ? 'hsl(0 0% 4%)' : 'hsl(0 0% 55%)'}}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'hsl(42 98% 53%)',color:'hsl(0 0% 4%)',fontWeight:700,padding:'10px 20px',borderRadius:'999px',fontSize:'14px',textDecoration:'none'}}>
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
