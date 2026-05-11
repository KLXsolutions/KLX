import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';

var LOGO_URL = 'https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/45c8a30c9_833144AB-385C-459B-A505-FF113C7374FD.png';
var BG_URL = 'https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/897d1f34b_IMG_3046.jpeg';

export default function Hero() {
  var ctx = useI18n();
  var t = ctx.t;
  return (
    <section id="home" style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:'url(' + BG_URL + ')', backgroundSize:'cover', backgroundPosition:'center' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,0.7), rgba(10,10,10,0.95))' }} />
      <div style={{ position:'relative', zIndex:10, textAlign:'center', padding:'128px 24px 80px', maxWidth:'56rem', margin:'0 auto' }}>
        <div style={{ marginBottom:'40px' }}>
          <div style={{ width:'160px', height:'160px', margin:'0 auto', borderRadius:'24px', overflow:'hidden', boxShadow:'0 25px 50px rgba(250,180,0,0.25)', border:'1px solid rgba(255,255,255,0.1)' }}>
            <img src={LOGO_URL} alt="KLX Solutions" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
        </div>
        <p style={{ fontSize:'1.125rem', color:'hsl(0,0%,55%)', maxWidth:'32rem', margin:'0 auto 40px', letterSpacing:'0.05em' }}>Empowering Homes, Energizing Industries.</p>
        <div style={{ display:'flex', justifyContent:'center', gap:'16px', flexWrap:'wrap', marginBottom:'64px' }}>
          <a href="#contact" style={{ display:'inline-flex', alignItems:'center', background:'hsl(42,98%,53%)', color:'hsl(0,0%,4%)', fontWeight:700, padding:'14px 28px', borderRadius:'999px', fontSize:'0.875rem', textDecoration:'none', minHeight:'48px' }}>{t.hero.cta1}</a>
          <a href="#services" style={{ display:'inline-flex', alignItems:'center', border:'1px solid hsl(0,0%,14%)', color:'hsl(0,0%,95%)', fontWeight:700, padding:'14px 28px', borderRadius:'999px', fontSize:'0.875rem', textDecoration:'none', minHeight:'48px' }}>{t.hero.cta2}</a>
        </div>
        <div style={{ display:'flex', justifyContent:'center', gap:'40px', flexWrap:'wrap', paddingTop:'40px', borderTop:'1px solid rgba(255,255,255,0.1)' }}>
          {[{ num:'10+', label:t.hero.stat1 },{ num:'500+', label:t.hero.stat2 },{ num:'24/7', label:t.hero.stat3 }].map(function(stat) { return (
            <div key={stat.num} style={{ textAlign:'center' }}>
              <div style={{ fontSize:'3rem', fontWeight:900, color:'hsl(42,98%,53%)', lineHeight:1 }}>{stat.num}</div>
              <div style={{ fontSize:'0.75rem', color:'hsl(0,0%,55%)', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:'8px', fontWeight:500 }}>{stat.label}</div>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}
