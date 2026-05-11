import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Contact() {
  var ctx = useI18n();
  var c = ctx.t.contact;
  var s1 = useState({ name:'', email:'', phone:'', message:'' });
  var form = s1[0]; var setForm = s1[1];
  var s2 = useState(false);
  var submitting = s2[0]; var setSubmitting = s2[1];
  var s3 = useState(false);
  var sent = s3[0]; var setSent = s3[1];

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    fetch('https://formspree.io/f/xpwrpqya', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone, message: form.message })
    }).catch(function() {
      window.location.href = 'mailto:info@klxsolutions.com?subject=Contact';
    }).finally(function() {
      setSubmitting(false);
      setSent(true);
      setForm({ name:'', email:'', phone:'', message:'' });
    });
  }

  var contactCards = [
    { icon: '📞', label: c.phoneEs, value: 'ES +34 666 114 258', href: 'tel:+34666114258' },
    { icon: '📞', label: c.phoneBe, value: 'BE +32 473 45 46 93', href: 'tel:+32473454693' },
    { icon: '✉️', label: c.email, value: 'info@klxsolutions.com', href: 'mailto:info@klxsolutions.com' },
    { icon: '📍', label: c.area, value: c.areaVal, href: null },
  ];

  return (
    <section id="contact" style={{ padding:'96px 24px' }}>
      <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
        <SectionHeader title={c.title} titleAccent={c.titleAccent} sub={c.sub} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'48px', alignItems:'start' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            {contactCards.map(function(card, idx) { return (
              <div key={idx} style={{ display:'flex', gap:'16px', alignItems:'flex-start', background:'hsl(0,0%,6%)', border:'1px solid hsl(0,0%,14%)', padding:'20px', borderRadius:'16px' }}>
                <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:'rgba(250,180,0,0.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.25rem', flexShrink:0 }}>{card.icon}</div>
                <div>
                  <div style={{ fontSize:'0.7rem', color:'hsl(0,0%,55%)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'4px', fontWeight:700 }}>{card.label}</div>
                  <div style={{ fontWeight:600 }}>{card.href ? <a href={card.href} style={{ color:'hsl(0,0%,95%)', textDecoration:'none' }}>{card.value}</a> : card.value}</div>
                </div>
              </div>
            ); })}
          </div>
          <form onSubmit={handleSubmit} style={{ background:'hsl(0,0%,6%)', border:'1px solid hsl(0,0%,14%)', padding:'32px', borderRadius:'16px', display:'flex', flexDirection:'column', gap:'20px' }}>
            {sent && <div style={{ background:'rgba(250,180,0,0.1)', border:'1px solid hsl(42,98%,53%)', borderRadius:'12px', padding:'16px', textAlign:'center', color:'hsl(42,98%,53%)', fontWeight:600 }}>{c.thanks}</div>}
            {[{key:'name',label:c.formName,type:'text',required:true},{key:'email',label:c.formEmail,type:'email',required:true},{key:'phone',label:c.formPhone,type:'tel',required:false}].map(function(field) { return (
              <div key={field.key}>
                <label style={{ display:'block', fontSize:'0.7rem', color:'hsl(0,0%,55%)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'8px', fontWeight:700 }}>{field.label}</label>
                <input type={field.type} required={field.required} value={form[field.key]}
                  onChange={function(e) { var update = Object.assign({}, form); update[field.key] = e.target.value; setForm(update); }}
                  style={{ width:'100%', background:'hsl(0,0%,4%)', border:'1px solid hsl(0,0%,14%)', padding:'12px 16px', borderRadius:'12px', fontSize:'0.875rem', color:'hsl(0,0%,95%)', outline:'none', boxSizing:'border-box' }} />
              </div>
            ); })}
            <div>
              <label style={{ display:'block', fontSize:'0.7rem', color:'hsl(0,0%,55%)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'8px', fontWeight:700 }}>{c.formMsg}</label>
              <textarea required value={form.message} onChange={function(e) { setForm(Object.assign({}, form, { message: e.target.value })); }}
                style={{ width:'100%', background:'hsl(0,0%,4%)', border:'1px solid hsl(0,0%,14%)', padding:'12px 16px', borderRadius:'12px', fontSize:'0.875rem', color:'hsl(0,0%,95%)', outline:'none', resize:'vertical', minHeight:'110px', boxSizing:'border-box' }} />
            </div>
            <button type="submit" disabled={submitting}
              style={{ width:'100%', background:'hsl(42,98%,53%)', color:'hsl(0,0%,4%)', fontWeight:700, padding:'14px 24px', borderRadius:'999px', fontSize:'0.875rem', border:'none', cursor: submitting ? 'not-allowed' : 'pointer', minHeight:'48px', opacity: submitting ? 0.7 : 1 }}>
              {submitting ? 'Sending...' : c.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
