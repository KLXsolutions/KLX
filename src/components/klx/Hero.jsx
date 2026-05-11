import React from 'react';
import { useI18n } from '@/lib/i18n.jsx';
import { motion } from 'framer-motion';

const LOGO_URL = "https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/45c8a30c9_833144AB-385C-459B-A505-FF113C7374FD.png";
const BG_URL = "https://media.base44.com/images/public/user_6a00a71274279c19560dc38a/897d1f34b_IMG_3046.jpeg";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/95" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
        }}
      />

      <div className="relative z-10 text-center px-6 pt-32 pb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="w-40 h-40 mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-primary/25 border border-border/50">
            <img src={LOGO_URL} alt="KLX Solutions Logo" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 tracking-wide"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
        >
          Empowering Homes, Energizing Industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-full text-sm hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 transition-all min-h-[48px]"
          >
            {t.hero.cta1}
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-border text-foreground font-bold px-7 py-3.5 rounded-full text-sm hover:border-primary hover:text-primary transition-all min-h-[48px]"
            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
          >
            {t.hero.cta2}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-10 md:gap-16 flex-wrap pt-10 border-t border-border/50"
        >
          {[
            { num: "10+", label: t.hero.stat1 },
            { num: "500+", label: t.hero.stat2 },
            { num: "24/7", label: t.hero.stat3 },
          ].map((stat) => (
            <div key={stat.num} className="text-center">
              <div
                className="text-4xl md:text-5xl font-black text-primary leading-none"
                style={{ textShadow: '0 2px 12px hsla(var(--primary), 0.3)' }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs text-muted-foreground uppercase tracking-widest mt-2 font-medium"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}