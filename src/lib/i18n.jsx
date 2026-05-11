import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { about: "About", services: "Services", refs: "References", faq: "FAQ", contact: "Contact", cta: "Get a Quote" },
    hero: { cta1: "Call Now", cta2: "Our Services", stat1: "Years Experience", stat2: "Projects Completed", stat3: "Fast Response" },
    about: {
      title: "About", titleAccent: "Us",
      sub: "Trusted electricians serving Brussels & Belgium for over a decade.",
      p1: "KLX Solutions has been providing professional electrical services for over 10 years, specializing in residential and industrial electrical installations.",
      p2: "Our goal is to deliver safe, energy-efficient, and reliable electrical solutions tailored to each client's needs.",
      p3: "If you are looking for a reliable electrician with fast response times and competitive pricing, KLX Solutions guarantees high-quality workmanship.",
      f1: "Licensed & Insured", f2: "Fast Response", f3: "Fair Pricing", f4: "Modern Solutions"
    },
    services: {
      title: "Our", titleAccent: "Services",
      sub: "A full range of electrical services for residential and small commercial clients.",
      items: [
        { i: "🔧", t: "Small Repairs", d: "No job is too small. From minor repairs to quick fixes, you can count on us." },
        { i: "🏠", t: "Complete House Wiring", d: "Full installation and wiring for apartments, panel buildings, and family houses." },
        { i: "🏭", t: "Industrial Electrical", d: "Installation, maintenance, and troubleshooting for industrial facilities." },
        { i: "⚙️", t: "System Upgrades", d: "Modern, safe, and future-proof electrical system renovations." },
        { i: "🔍", t: "Fault Finding & Repair", d: "Fast diagnostics and professional troubleshooting." },
        { i: "🍳", t: "Kitchen Appliances", d: "Ovens, cooktops, and built-in appliances safely connected." },
        { i: "♨️", t: "Major Appliances", d: "Boilers, heating systems, and other large appliances installation." },
        { i: "💡", t: "Lighting Upgrades", d: "LED lighting installation and energy-efficient solutions." },
        { i: "🔌", t: "Sockets & Switches", d: "Replacement of switches, sockets, and light fixtures." },
        { i: "⚡", t: "Fuse Box Replacement", d: "Modernizing outdated electrical panels." },
        { i: "🚗", t: "EV Charger Install", d: "Home electric vehicle charging solutions." },
        { i: "🌳", t: "Outdoor Electrical", d: "Garden lighting, outdoor sockets, and exterior installations." },
        { i: "🔥", t: "Floor Heating", d: "Electric floor, driveway, and walkway heating systems." },
        { i: "📋", t: "Planning & Consultation", d: "Personalized advice with on-site inspection." }
      ]
    },
    refs: { title: "Our", titleAccent: "References", sub: "Some of the projects we have successfully delivered." },
    faq: {
      title: "Frequently Asked", titleAccent: "Questions",
      sub: "Quick answers to the questions we hear most often.",
      items: [
        { q: "How much does electrical work cost?", a: "Pricing depends on the type and size of the project. Contact us for a custom quote with fair, transparent pricing." },
        { q: "Do you take small jobs?", a: "Yes — no job is too small. We handle even the smallest repairs." },
        { q: "How long does a project take?", a: "It depends on the scope, but we can often provide same-day solutions for repairs." },
        { q: "What areas do you serve?", a: "We serve Brussels and all of Belgium. We also operate in Spain." },
        { q: "Are you licensed and insured?", a: "Yes, KLX Solutions is fully licensed and insured." }
      ]
    },
    contact: {
      title: "Get In", titleAccent: "Touch",
      sub: "Looking for a reliable electrician? Contact us today for a fast quote.",
      phoneEs: "Phone (Spain)", phoneBe: "Phone (Belgium)", email: "Email", area: "Service Area", areaVal: "Brussels & Belgium",
      formName: "Name", formEmail: "Email", formPhone: "Phone", formMsg: "Message", formSubmit: "Send Message",
      thanks: "Thank you! We will get back to you as soon as possible."
    },
    footer: { area: "Brussels & Belgium | info@klxsolutions.com", rights: "All rights reserved." }
  },
  es: {
    nav: { about: "Nosotros", services: "Servicios", refs: "Referencias", faq: "Preguntas", contact: "Contacto", cta: "Pedir Presupuesto" },
    hero: { cta1: "Llamanos", cta2: "Nuestros Servicios", stat1: "Anos de Experiencia", stat2: "Proyectos Realizados", stat3: "Respuesta Rapida" },
    about: {
      title: "Sobre", titleAccent: "Nosotros",
      sub: "Electricistas de confianza con mas de una decada de experiencia.",
      p1: "KLX Solutions lleva mas de 10 anos ofreciendo servicios electricos profesionales.",
      p2: "Nuestro objetivo es ofrecer soluciones electricas seguras, eficientes y fiables.",
      p3: "Si busca un electricista fiable con tiempos de respuesta rapidos y precios competitivos, KLX Solutions le garantiza trabajo de alta calidad.",
      f1: "Certificado", f2: "Respuesta Rapida", f3: "Precios Justos", f4: "Soluciones Modernas"
    },
    services: {
      title: "Nuestros", titleAccent: "Servicios",
      sub: "Gama completa de servicios electricos para clientes residenciales y pequenas empresas.",
      items: [
        { i: "🔧", t: "Pequenas Reparaciones", d: "Ningun trabajo es demasiado pequeno." },
        { i: "🏠", t: "Instalacion Completa", d: "Instalacion y cableado completo para pisos y casas." },
        { i: "🏭", t: "Electrica Industrial", d: "Instalacion, mantenimiento y reparacion industrial." },
        { i: "⚙️", t: "Mejoras de Sistemas", d: "Renovaciones modernas, seguras y a prueba de futuro." },
        { i: "🔍", t: "Deteccion de Averias", d: "Diagnostico rapido y reparacion profesional." },
        { i: "🍳", t: "Aparatos de Cocina", d: "Hornos y electrodomesticos conectados con seguridad." },
        { i: "♨️", t: "Grandes Aparatos", d: "Calderas y sistemas de calefaccion." },
        { i: "💡", t: "Mejora de Iluminacion", d: "Instalacion de iluminacion LED." },
        { i: "🔌", t: "Enchufes e Interruptores", d: "Sustitucion de interruptores y enchufes." },
        { i: "⚡", t: "Cuadro Electrico", d: "Modernizacion de cuadros electricos." },
        { i: "🚗", t: "Cargador VE", d: "Soluciones de carga para vehiculos electricos." },
        { i: "🌳", t: "Electrica Exterior", d: "Iluminacion de jardin y enchufes exteriores." },
        { i: "🔥", t: "Calefaccion de Suelo", d: "Sistemas de calefaccion electrica para suelos." },
        { i: "📋", t: "Planificacion", d: "Asesoramiento personalizado con inspeccion." }
      ]
    },
    refs: { title: "Nuestras", titleAccent: "Referencias", sub: "Algunos de los proyectos que hemos completado con exito." },
    faq: {
      title: "Preguntas", titleAccent: "Frecuentes",
      sub: "Respuestas rapidas a las preguntas que mas nos hacen.",
      items: [
        { q: "Cuanto cuesta un trabajo electrico?", a: "El precio depende del tipo y tamano del proyecto." },
        { q: "Aceptan trabajos pequenos?", a: "Si, ningun trabajo es demasiado pequeno." },
        { q: "Cuanto tarda un proyecto?", a: "En muchos casos podemos ofrecer soluciones rapidas el mismo dia." },
        { q: "En que zonas trabajan?", a: "Trabajamos en Bruselas y toda Belgica. Tambien operamos en Espana." },
        { q: "Estan autorizados y asegurados?", a: "Si, KLX Solutions esta totalmente autorizado y asegurado." }
      ]
    },
    contact: {
      title: "Ponte en", titleAccent: "Contacto",
      sub: "Buscas un electricista fiable? Contactanos hoy mismo.",
      phoneEs: "Telefono (Espana)", phoneBe: "Telefono (Belgica)", email: "Correo", area: "Zona de Servicio", areaVal: "Bruselas y Belgica",
      formName: "Nombre", formEmail: "Correo", formPhone: "Telefono", formMsg: "Mensaje", formSubmit: "Enviar Mensaje",
      thanks: "Gracias! Le responderemos lo antes posible."
    },
    footer: { area: "Bruselas y Belgica | info@klxsolutions.com", rights: "Todos los derechos reservados." }
  },
  hu: {
    nav: { about: "Bemutatkozas", services: "Szolgaltatasok", refs: "Referenciak", faq: "GY.I.K.", contact: "Kapcsolat", cta: "Arajanlat" },
    hero: { cta1: "Hivjon Most", cta2: "Szolgaltatasok", stat1: "Ev Tapasztalat", stat2: "Befejezett Projekt", stat3: "Gyors Reakcio" },
    about: {
      title: "Bemutat", titleAccent: "kozas",
      sub: "Megbizhato villanyszerelok Brusszelben es Belgiumban.",
      p1: "A KLX Solutions tobb mint 10 eve nyujt professzionalis villanyszerelesi szolgaltatasokat.",
      p2: "Tapasztalt villanyszerelokent celunk, hogy ugyfeleinke szamara biztonsagos megoldasokat biztositsunk.",
      p3: "Ha megbizhato villanyszerelot keres gyors kiszallassal es korrekt arakon, nalunk garantalt a minosegi munka.",
      f1: "Engedelyezett", f2: "Gyors Kiszallas", f3: "Korrekt Arak", f4: "Modern Megoldasok"
    },
    services: {
      title: "Szolgalta", titleAccent: "tasaink",
      sub: "Teljes koru villanyszerelesi szolgaltatas.",
      items: [
        { i: "🔧", t: "Kisebb Munkak", d: "A legkisebb munkara is kimegyek." },
        { i: "🏠", t: "Teljes Villanyszereles", d: "Lakasok es csaladiHazak teljes koru kivitelezese." },
        { i: "🏭", t: "Ipari Villanyszereles", d: "Ipari letesitmenyek kiszolgalasa." },
        { i: "⚙️", t: "Halozat Korszeru", d: "Modern es jovooallo megoldasok." },
        { i: "🔍", t: "Hibakeress", d: "Gyors hibakeresses es szakszeru javitas." },
        { i: "🍳", t: "Konyhai Keszulek", d: "Suto es beepitheto eszkozok csatlakoztatas." },
        { i: "♨️", t: "Haztartasi Nagygepek", d: "Bojler es kazan uzembe helyezese." },
        { i: "💡", t: "Vilagitas Kors", d: "LED-es fenyforrasok telepitese." },
        { i: "🔌", t: "Kapcsolok, Dugaljak", d: "Kapcsolok es dugaljak csereje." },
        { i: "⚡", t: "Biztositotabla", d: "Regi biztositotablak felujitasa." },
        { i: "🚗", t: "EV Toltok", d: "Otthoni elektromos auto tolto." },
        { i: "🌳", t: "Kulterei Szereles", d: "Kerti lampak es kulterei rendszerek." },
        { i: "🔥", t: "Padlofutes", d: "Elektromos padlofutes telepitese." },
        { i: "📋", t: "Tervezes", d: "Szemelyre szabott tanacsadas." }
      ]
    },
    refs: { title: "Referen", titleAccent: "ciak", sub: "Nehany a sikeresen megvalositott projektjeinkbol." },
    faq: {
      title: "Gyakori", titleAccent: "Kerdesek",
      sub: "Gyors valaszok a leggyakrabban feltett kerdesekre.",
      items: [
        { q: "Mennyibe kerul egy villanyszerelesi munka?", a: "Az ar a munka jellegetol es meretitol fugg." },
        { q: "Vallal kisebb munkakat is?", a: "Igen, a legkisebb javitasokra is kiszallunk." },
        { q: "Mennyi ido alatt keszul el egy munka?", a: "Sok esetben aznapi megoldast biztositunk." },
        { q: "Milyen teruleten dolgoznak?", a: "Brusszelben es egesz Belgiumban. Spanyolorszagban is." },
        { q: "Engedelyezettek es biztositottak?", a: "Igen, a KLX Solutions teljes koru engedelllyel rendelkezik." }
      ]
    },
    contact: {
      title: "Vegye Fel a", titleAccent: "Kapcsolatot",
      sub: "Megbizhato villanyszerelot keres? Vegye fel velunk a kapcsolatot.",
      phoneEs: "Telefon (Spanyolorszag)", phoneBe: "Telefon (Belgium)", email: "E-mail", area: "Szolgaltatasi Terulet", areaVal: "Brusszel es Belgium",
      formName: "Nev", formEmail: "E-mail", formPhone: "Telefon", formMsg: "Uzenet", formSubmit: "Uzenet Kuldese",
      thanks: "Koszonjuk! Hamarosan felvesszuk Onnel a kapcsolatot."
    },
    footer: { area: "Brusszel es Belgium | info@klxsolutions.com", rights: "Minden jog fenntartva." }
  }
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(function() {
    try { return localStorage.getItem('klx_lang') || 'en'; } catch(e) { return 'en'; }
  });
  const setLanguage = function(l) {
    setLang(l);
    try { localStorage.setItem('klx_lang', l); } catch(e) {}
  };
  const t = translations[lang] || translations.en;
  return React.createElement(I18nContext.Provider, { value: { lang, setLanguage, t } }, children);
}

export function useI18n() {
  return useContext(I18nContext);
}
