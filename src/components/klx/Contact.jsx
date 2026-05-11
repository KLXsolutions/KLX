import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await fetch(`mailto:info@klxsolutions.com`);
    setSubmitting(false);
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const contactCards = [
    { icon: "📞", label: c.phoneEs, value: "🇪🇸 +34 666 114 258", href: "tel:+34666114258" },
    { icon: "📞", label: c.phoneBe, value: "🇧🇪 +32 473 45 46 93", href: "tel:+32473454693" },
    { icon: "✉️", label: c.email, value: "info@klxsolutions.com", href: "mailto:info@klxsolutions.com" },
    { icon: "📍", label: c.area, value: c.areaVal, href: null },
  ];

  return (
    <section id="contact" style={{padding:'96px 24px',background:'hsl(0 0% 4%)'}}>
      <div style={{maxWidth:'1152px',margin:'0 auto'}}>
        <SectionHeader title={c.title} titleAccent={c.titleAccent} sub={c.sub} />
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'start'}}>
          <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            {contactCards.map((card, idx) => (
              <div key={idx} style={{display:'flex',gap:'16px',alignItems:'flex-start',background:'hsl(0 0% 6%)',border:'1px solid hsl(0 0% 14%)',padding:'20px',borderRadius:'16px'}}>
                <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(251,191,36,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'20px',flexShrink:0}}>{card.icon}</div>
                <div>
                  <div style={{fontSize:'11px',color:'hsl(0 0% 55%)',textTransform:'uppercase',letterSpacing:'2px',marginBottom:'4px',fontWeight:700}}>{card.label}</div>
                  <div style={{fontWeight:600,color:'hsl(0 0% 95%)'}}>
                    {card.href ? <a href={card.href} style={{color:'hsl(0 0% 95%)',textDecoration:'none'}}>{card.value}</a> : card.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{background:'hsl(0 0% 6%)',border:'1px solid hsl(0 0% 14%)',padding:'32px',borderRadius:'16px',display:'flex',flexDirection:'column',gap:'20px'}}>
            {sent && <div style={{color:'hsl(42 98% 53%)',fontWeight:600,textAlign:'center',padding:'12px',background:'rgba(251,191,36,0.1)',borderRadius:'8px'}}>{c.thanks}</div>}
            {[{key:'name',label:c.formName,type:'text',required:true},{key:'email',label:c.formEmail,type:'email',required:true},{key:'phone',label:c.formPhone,type:'tel',required:false}].map(field => (
              <div key={field.key}>
                <label style={{display:'block',fontSize:'11px',color:'hsl(0 0% 55%)',textTransform:'uppercase',letterSpacing:'2px',marginBottom:'8px',fontWeight:700}}>{field.label}</label>
                <input type={field.type} required={field.required} value={form[field.key]} onChange={e => setForm({...form,[field.key]:e.target.value})} style={{width:'100%',background:'hsl(0 0% 4%)',border:'1px solid hsl(0 0% 14%)',padding:'12px 16px',borderRadius:'12px',fontSize:'14px',color:'hsl(0 0% 95%)',outline:'none',boxSizing:'border-box'}} />
              </div>
            ))}
            <div>
              <label style={{display:'block',fontSize:'11px',color:'hsl(0 0% 55%)',textTransform:'uppercase',letterSpacing:'2px',marginBottom:'8px',fontWeight:700}}>{c.formMsg}</label>
              <textarea required value={form.message} onChange={e => setForm({...form,message:e.target.value})} style={{width:'100%',background:'hsl(0 0% 4%)',border:'1px solid hsl(0 0% 14%)',padding:'12px 16px',borderRadius:'12px',fontSize:'14px',color:'hsl(0 0% 95%)',outline:'none',boxSizing:'border-box',minHeight:'110px',resize:'vertical'}} />
            </div>
            <button type="submit" style={{width:'100%',background:'hsl(42 98% 53%)',color:'hsl(0 0% 4%)',fontWeight:700,padding:'14px 24px',borderRadius:'999px',fontSize:'14px',border:'none',cursor:'pointer'}}>
              {submitting ? '⏳ Sending...' : c.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
