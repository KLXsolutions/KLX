import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-10 px-6 md:px-8" style={{ background: '#050505' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-black text-base tracking-wider mb-2">KLX <span className="text-primary">SOLUTIONS</span></div>
            <p className="text-muted-foreground text-xs italic">Empowering Homes, Energizing Industries.</p>
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-bold">Contact</div>
            <p className="text-muted-foreground mb-1">🇪🇸 +34 666 114 258</p>
            <p className="text-muted-foreground mb-1">🇧🇪 +32 473 45 46 93</p>
            <p className="text-muted-foreground">info@klxsolutions.com</p>
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-bold">Area</div>
            <p className="text-muted-foreground">{t.footer.area}</p>
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-bold">Navigation</div>
            <div className="flex flex-col gap-1.5">
              {['#about', '#services', '#references', '#faq', '#contact'].map(href => (
                <a key={href} href={href} className="text-muted-foreground hover:text-primary transition-colors text-xs">{href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">© 2026 KLX Solutions. {t.footer.rights}</div>
      </div>
    </footer>
  );
}