import React, { useState } from 'react';
import { useI18n } from '@/lib/i18n.jsx';
import SectionHeader from './SectionHeader';
import { toast } from "sonner";
import { base44 } from '@/api/base44Client';

export default function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.integrations.Core.SendEmail({
      to: 'info@klxsolutions.com',
      subject: `New Contact Form Submission from ${form.name}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\n\nMessage:\n${form.message}`
    });
    setSubmitting(false);
    toast.success(c.thanks);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const contactCards = [
    { icon: "📞", label: c.phoneEs, value: "🇪🇸 +34 666 114 258", href: "tel:+34666114258" },
    { icon: "📞", label: c.phoneBe, value: "🇧🇪 +32 473 45 46 93", href: "tel:+32473454693" },
    { icon: "✉️", label: c.email, value: "info@klxsolutions.com", href: "mailto:info@klxsolutions.com" },
    { icon: "📍", label: c.area, value: c.areaVal, href: null },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={c.title} titleAccent={c.titleAccent} sub={c.sub} />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className="flex gap-4 items-start bg-card border border-border p-5 rounded-2xl hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-bold">{card.label}</div>
                  <div className="font-semibold">
                    {card.href ? (
                      <a href={card.href} className="hover:text-primary transition-colors">{card.value}</a>
                    ) : card.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border p-8 rounded-2xl space-y-5">
            {[
              { key: 'name', label: c.formName, type: 'text', required: true },
              { key: 'email', label: c.formEmail, type: 'email', required: true },
              { key: 'phone', label: c.formPhone, type: 'tel', required: false },
            ].map(field => (
              <div key={field.key}>
                <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">{field.label}</label>
                <input
                  type={field.type}
                  required={field.required}
                  value={form[field.key]}
                  onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 rounded-xl text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-muted-foreground uppercase tracking-widest mb-2 font-bold">{c.formMsg}</label>
              <textarea
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 rounded-xl text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-vertical min-h-[110px]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-full text-sm hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 transition-all min-h-[48px]"
            >
              {submitting ? '⏳ Sending...' : c.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}