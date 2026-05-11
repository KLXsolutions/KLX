import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { about: "About", services: "Services", refs: "References", faq: "FAQ", contact: "Contact", cta: "Get a Quote" },
    hero: { cta1: "📞 Call Now", cta2: "Our Services", stat1: "Years Experience", stat2: "Projects Completed", stat3: "Fast Response" },
    about: {
      title: "About", titleAccent: "Us",
      sub: "Trusted electricians serving Brussels & Belgium for over a decade.",
      p1: "KLX Solutions has been providing professional electrical services for over 10 years, specializing in residential and industrial electrical installations, full electrical system design, and maintenance.",
      p2: "As an experienced electrician, our goal is to deliver safe, energy-efficient, and reliable electrical solutions tailored to each client's needs — from electrical fault finding and system upgrades to fuse box replacement and complete wiring for new construction projects.",
      p3: "If you are looking for a reliable electrician with fast response times and competitive pricing, KLX Solutions guarantees high-quality workmanship and professional expertise.",
      f1: "Licensed & Insured", f2: "Fast Response", f3: "Fair Pricing", f4: "Modern Solutions"
    },
    services: {
      title: "Our", titleAccent: "Services",
      sub: "A full range of electrical services for residential and small commercial clients.",
      items: [
        { i: "🔧", t: "Small Repairs", d: "No job is too small. From minor repairs to quick fixes, you can count on us." },
        { i: "🏠", t: "Complete House Wiring", d: "Full installation and wiring for apartments, panel buildings, and family houses." },
        { i: "🏭", t: "Industrial Electrical", d: "Installation, maintenance, and troubleshooting for industrial facilities and workshops." },
        { i: "⚙️", t: "System Upgrades", d: "Modern, safe, and future-proof electrical system renovations and upgrades." },
        { i: "🔍", t: "Fault Finding & Repair", d: "Fast diagnostics and professional troubleshooting for any electrical fault." },
        { i: "🍳", t: "Kitchen Appliances", d: "Ovens, cooktops, and built-in appliances safely connected." },
        { i: "♨️", t: "Major Appliances", d: "Boilers, heating systems, and other large appliances installation." },
        { i: "📺", t: "Low-Voltage Systems", d: "TV, audio, and multimedia system setup." },
        { i: "🌐", t: "Low-Voltage Networks", d: "TV, LAN, telephone, and surveillance systems installation." },
        { i: "💡", t: "Lighting Upgrades", d: "LED lighting installation and energy-efficient solutions." },
        { i: "🔌", t: "Sockets & Switches", d: "Replacement of switches, sockets, and light fixtures — clean & safe." },
        { i: "⚡", t: "Fuse Box Replacement", d: "Modernizing outdated electrical panels (consumer units)." },
        { i: "🚗", t: "EV Charger Install", d: "Home electric vehicle charging solutions." },
        { i: "🌳", t: "Outdoor Electrical", d: "Garden lighting, outdoor sockets, and exterior installations." },
        { i: "🔥", t: "Floor & Driveway Heating", d: "Electric floor, driveway, and walkway heating systems." },
        { i: "📋", t: "Planning & Consultation", d: "Personalized advice with on-site inspection." }
      ]
    },
    refs: {
      title: "Our", titleAccent: "References",
      sub: "Some of the projects we've successfully delivered."
    },
    faq: {
      title: "Frequently Asked", titleAccent: "Questions",
      sub: "Quick answers to the questions we hear most often.",
      items: [
        { q: "How much does electrical work cost?", a: "Pricing depends on the type and size of the project. Contact us for a custom quote — we provide fair, transparent pricing with no hidden fees." },
        { q: "Do you take small jobs?", a: "Yes — no job is too small. We handle even the smallest repairs, from a single socket replacement to minor fixes." },
        { q: "How long does a project take?", a: "It depends on the scope of the work, but in many cases we can provide quick, same-day solutions for repairs and small jobs." },
        { q: "What areas do you serve?", a: "We serve Brussels and all of Belgium. We also operate in Spain — contact us for availability." },
        { q: "Are you licensed and insured?", a: "Yes, KLX Solutions is fully licensed and insured. All work is performed to current safety standards and regulations." }
      ]
    },
    contact: {
      title: "Get In", titleAccent: "Touch",
      sub: "Looking for a reliable electrician? Contact us today for a fast quote.",
      phoneEs: "Phone (Spain)", phoneBe: "Phone (Belgium)", email: "Email", area: "Service Area", areaVal: "Brussels & Belgium",
      formName: "Name", formEmail: "Email", formPhone: "Phone", formMsg: "Message", formSubmit: "Send Message ⚡",
      thanks: "Thank you! We'll get back to you as soon as possible."
    },
    footer: { area: "Brussels & Belgium | info@klxsolutions.com", rights: "All rights reserved." }
  },
  es: {
    nav: { about: "Nosotros", services: "Servicios", refs: "Referencias", faq: "Preguntas", contact: "Contacto", cta: "Pedir Presupuesto" },
    hero: { cta1: "📞 Llámanos", cta2: "Nuestros Servicios", stat1: "Años de Experiencia", stat2: "Proyectos Realizados", stat3: "Respuesta Rápida" },
    about: {
      title: "Sobre", titleAccent: "Nosotros",
      sub: "Electricistas de confianza con más de una década de experiencia en Bruselas y Bélgica.",
      p1: "KLX Solutions lleva más de 10 años ofreciendo servicios eléctricos profesionales.",
      p2: "Nuestro objetivo es ofrecer soluciones eléctricas seguras, eficientes energéticamente y fiables.",
      p3: "Si busca un electricista fiable con tiempos de respuesta rápidos y precios competitivos, KLX Solutions le garantiza trabajo de alta calidad.",
      f1: "Profesional Certificado", f2: "Respuesta Rápida", f3: "Precios Justos", f4: "Soluciones Modernas"
    },
    services: {
      title: "Nuestros", titleAccent: "Servicios",
      sub: "Gama completa de servicios eléctricos para clientes residenciales y pequeñas empresas.",
      items: [
        { i: "🔧", t: "Pequeñas Reparaciones", d: "Ningún trabajo es demasiado pequeño." },
        { i: "🏠", t: "Instalación Completa", d: "Instalación y cableado completo para pisos y casas." },
        { i: "🏭", t: "Eléctrica Industrial", d: "Instalación, mantenimiento y reparación industrial." },
        { i: "⚙️", t: "Mejoras de Sistemas", d: "Renovaciones modernas, seguras y a prueba de futuro." },
        { i: "🔍", t: "Detección de Averías", d: "Diagnóstico rápido y reparación profesional." },
        { i: "🍳", t: "Aparatos de Cocina", d: "Hornos y electrodomésticos conectados con seguridad." },
        { i: "♨️", t: "Grandes Aparatos", d: "Calderas y sistemas de calefacción." },
        { i: "📺", t: "Sistemas de Baja Tensión", d: "TV, audio y sistemas multimedia." },
        { i: "🌐", t: "Redes de Baja Tensión", d: "TV, LAN, teléfono y sistemas de vigilancia." },
        { i: "💡", t: "Mejora de Iluminación", d: "Instalación de iluminación LED." },
        { i: "🔌", t: "Enchufes e Interruptores", d: "Sustitución de interruptores y enchufes." },
        { i: "⚡", t: "Cuadro Eléctrico", d: "Modernización de cuadros eléctricos." },
        { i: "🚗", t: "Cargador VE", d: "Soluciones de carga para vehículos eléctricos." },
        { i: "🌳", t: "Eléctrica Exterior", d: "Iluminación de jardín y enchufes exteriores." },
        { i: "🔥", t: "Calefacción de Suelo", d: "Sistemas de calefacción eléctrica para suelos." },
        { i: "📋", t: "Planificación", d: "Asesoramiento personalizado con inspección en sitio." }
      ]
    },
    refs: { title: "Nuestras", titleAccent: "Referencias", sub: "Algunos de los proyectos que hemos completado." },
    faq: {
      title: "Preguntas", titleAccent: "Frecuentes",
      sub: "Respuestas rápidas a las preguntas más frecuentes.",
      items: [
        { q: "¿Cuánto cuesta un trabajo eléctrico?", a: "El precio depende del tipo y tamaño del proyecto. Contáctanos para un presupuesto personalizado." },
        { q: "¿Aceptan trabajos pequeños?", a: "Sí — ningún trabajo es demasiado pequeño." },
        { q: "¿Cuánto tarda un proyecto?", a: "Depende del alcance, pero muchas veces ofrecemos soluciones el mismo día." },
        { q: "¿En qué zonas trabajan?", a: "Trabajamos en Bruselas y toda Bélgica. También en España." },
        { q: "¿Están autorizados y asegurados?", a: "Sí, KLX Solutions está totalmente autorizado y asegurado." }
      ]
    },
    contact: {
      title: "Ponte en", titleAccent: "Contacto",
      sub: "¿Buscas un electricista fiable? Contáctanos hoy mismo.",
      phoneEs: "Teléfono (España)", phoneBe: "Teléfono (Bélgica)", email: "Correo", area: "Zona de Servicio", areaVal: "Bruselas y Bélgica",
      formName: "Nombre", formEmail: "Correo", formPhone: "Teléfono", formMsg: "Mensaje", formSubmit: "Enviar Mensaje ⚡",
      thanks: "¡Gracias! Le responderemos lo antes posible."
    },
    footer: { area: "Bruselas y Bélgica | info@klxsolutions.com", rights: "Todos los derechos reservados." }
  },
  hu: {
    nav: { about: "Bemutatkozás", services: "Szolgáltatások", refs: "Referenciák", faq: "GY.I.K.", contact: "Kapcsolat", cta: "Árajánlat" },
    hero: { cta1: "📞 Hívjon Most", cta2: "Szolgáltatások", stat1: "Év Tapasztalat", stat2: "Befejezett Projekt", stat3: "Gyors Reakció" },
    about: {
      title: "Bemutat", titleAccent: "kozás",
      sub: "Megbízható villanyszerelők Brüsszelben és Belgiumban — több mint egy évtizede.",
      p1: "A KLX Solutions több mint 10 éve nyújt professzionális villanyszerelési szolgáltatásokat.",
      p2: "Célunk biztonságos, energiatakarékos és megbízható elektromos megoldásokat biztosítani ügyfeleinknek.",
      p3: "Megbízható villanyszerelőt keres? Nálunk garantált a minőségi munka és a szakértelem.",
      f1: "Engedélyezett", f2: "Gyors Kiszállás", f3: "Korrekt Árak", f4: "Modern Megoldások"
    },
    services: {
      title: "Szolgálta", titleAccent: "tásaink",
      sub: "Teljes körű villanyszerelési szolgáltatás.",
      items: [
        { i: "🔧", t: "Kisebb Munkák", d: "A legkisebb munkára is kimegyek." },
        { i: "🏠", t: "Teljes Villanyszerelés", d: "Lakások és házak teljes körű kivitelezése." },
        { i: "🏭", t: "Ipari Villanyszerelés", d: "Ipari rendszerek kiépítése és karbantartása." },
        { i: "⚙️", t: "Hálózat Korszerűsítés", d: "Modern, biztonságos megoldások felújításra." },
        { i: "🔍", t: "Hibakeresés és Javítás", d: "Gyors hibakeresés és szakszerű javítás." },
        { i: "🍳", t: "Konyhai Készülékek", d: "Sütő és főzőlap szakszerű csatlakoztatása." },
        { i: "♨️", t: "Háztartási Nagygépek", d: "Bojler és kazán biztonságos üzembe helyezése." },
        { i: "📺", t: "Gyengeáramú Rendszerek", d: "TV, audio és multimédiás rendszerek." },
        { i: "🌐", t: "Gyengeáramú Hálózat", d: "TV, LAN, telefon és megfigyelőrendszerek." },
        { i: "💡", t: "Világítás Korszerűsítés", d: "LED-es fényforrások telepítése." },
        { i: "🔌", t: "Kapcsolók, Dugaljak", d: "Kapcsolók és dugaljak esztétikus cseréje." },
        { i: "⚡", t: "Biztosítótábla Csere", d: "Régi biztosítótáblák felújítása és cseréje." },
        { i: "🚗", t: "Elektromos Autótöltő", d: "Otthoni elektromos autó töltési megoldások." },
        { i: "🌳", t: "Kültéri Szerelés", d: "Kerti lámpák és kültéri rendszerek telepítése." },
        { i: "🔥", t: "Padló- és Járdafűtés", d: "Elektromos padlófűtés telepítése." },
        { i: "📋", t: "Tervezés, Tanácsadás", d: "Személyre szabott tanácsadás helyszíni bejárással." }
      ]
    },
    refs: { title: "Referen", titleAccent: "ciák", sub: "Néhány a sikeresen megvalósított projektjeinkből." },
    faq: {
      title: "Gyakori", titleAccent: "Kérdések",
      sub: "Gyors válaszok a leggyakrabban feltett kérdésekre.",
      items: [
        { q: "Mennyibe kerül egy villanyszerelési munka?", a: "Az ár a munka jellegétől és méretétől függ. Kérjen egyedi árajánlatot." },
        { q: "Vállal kisebb munkákat is?", a: "Igen — a legkisebb javításokra is kiszállunk." },
        { q: "Mennyi idő alatt készül el egy munka?", a: "Sok esetben akár aznapi megoldást is biztosítunk." },
        { q: "Milyen területen dolgoznak?", a: "Brüsszelben és egész Belgiumban. Spanyolországban is." },
        { q: "Engedélyezettek és biztosítottak?", a: "Igen, a KLX Solutions teljes körű engedéllyel és biztosítással rendelkezik." }
      ]
    },
    contact: {
      title: "Vegye Fel a", titleAccent: "Kapcsolatot",
      sub: "Megbízható villanyszerelőt keres? Vegye fel velünk a kapcsolatot.",
      phoneEs: "Telefon (Spanyolország)", phoneBe: "Telefon (Belgium)", email: "E-mail", area: "Szolgáltatási Terület", areaVal: "Brüsszel és Belgium",
      formName: "Név", formEmail: "E-mail", formPhone: "Telefon", formMsg: "Üzenet", formSubmit: "Üzenet Küldése ⚡",
      thanks: "Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot."
    },
    footer: { area: "Brüsszel és Belgium | info@klxsolutions.com", rights: "Minden jog fenntartva." }
  }
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('klx_lang') || 'en'; } catch { return 'en'; }
  });

  const setLanguage = (l) => {
    setLang(l);
    try { localStorage.setItem('klx_lang', l); } catch {}
  };

  const t = translations[lang] || translations.en;

  return (
    <I18nContext.Provider value={{ lang, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
