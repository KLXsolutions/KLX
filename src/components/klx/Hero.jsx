import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';

const LOGO_URL = "https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/45c8a30c9_833144AB-385C-459B-A505-FF113C7374FD.png";
const BG_URL = "https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/897d1f34b_IMG_3046.jpeg";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="home" style={{position:'relative',minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:`url(${BG_URL})`,backgroundSize:'cover',backgroundPosition:'center'}} />
      <div style={{position:'absolute',inset:0,background:'linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.6), rgba(10,10,10,0.95))'}} />

      <div style={{position:'relative',zIndex:10,textAlign:'center',padding:'128px 24px 80px',maxWidth:'900px',margin:'0 auto'}}>
        <div style={{marginBottom:'40px'}}>
          <div style={{width:'160px',height:'160px',margin:'0 auto',borderRadius:'24px',overflow:'hidden',border:'1px solid rgba(255,255,255,0.1)'}}>
            <img src={LOGO_URL} alt="KLX Solutions" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </div>
        </div>

        <p style={{fontSize:'18px',color:'hsl(0 0% 55%)',maxWidth:'560px',margin:'0 auto 40px',textShadow:'0 2px 8px rgba(0,0,0,0.8)'}}>
          Empowering Homes, Energizing Industries.
        </p>

        <div style={{display:'flex',justifyContent:'center',gap:'16px',flexWrap:'wrap',marginBottom:'64px'}}>
          <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'hsl(42 98% 53%)',color:'hsl(0 0% 4%)',fontWeight:700,padding:'14px 28px',borderRadius:'999px',fontSize:'14px',textDecoration:'none'}}>
            {t.hero.cta1}
          </a>
          <a href="#services" style={{display:'inline-flex',alignItems:'center',gap:'8px',border:'1px solid hsl(0 0% 14%)',color:'hsl(0 0% 95%)',fontWeight:700,padding:'14px 28px',borderRadius:'999px',fontSize:'14px',textDecoration:'none',textShadow:'0 1px 4px rgba(0,0,0,0.5)'}}>
            {t.hero.cta2}
          </a>
        </div>

        <div style={{display:'flex',justifyContent:'center',gap:'60px',flexWrap:'wrap',paddingTop:'40px',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
          {[{num:'10+',label:t.hero.stat1},{num:'500+',label:t.hero.stat2},{num:'24/7',label:t.hero.stat3}].map(stat => (
            <div key={stat.num} style={{textAlign:'center'}}>
              <div style={{fontSize:'48px',fontWeight:900,color:'hsl(42 98% 53%)',lineHeight:1}}>{stat.num}</div>
              <div style={{fontSize:'11px',color:'hsl(0 0% 55%)',textTransform:'uppercase',letterSpacing:'3px',marginTop:'8px',textShadow:'0 1px 4px rgba(0,0,0,0.8)'}}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
