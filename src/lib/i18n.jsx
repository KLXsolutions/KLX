import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { about: "About", services: "Services", why: "Why Us", refs: "References", faq: "FAQ", contact: "Contact", cta: "Get a Quote" },
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
    why: {
      title: "Why Choose", titleAccent: "KLX",
      sub: "Five reasons our clients trust us with their electrical needs.",
      items: [
        { i: "⚡", t: "10+ Years Experience", d: "A decade of expertise in residential & industrial work." },
        { i: "🛠️", t: "Reliable Workmanship", d: "Precise, professional, and built to last." },
        { i: "⏱️", t: "Fast Response", d: "Quick callouts and same-day service when possible." },
        { i: "💶", t: "Transparent Pricing", d: "Fair, clear quotes — no hidden fees." },
        { i: "🔒", t: "Modern & Safe", d: "Up-to-date methods and certified materials." }
      ]
    },
    refs: {
      title: "Our", titleAccent: "References",
      sub: "Some of the projects we've successfully delivered.",
      items: ["Full apartment renovations", "Electrical installations for family houses", "System upgrades and modernization", "Fault repairs and rapid service jobs"],
      note: "📸 Browse our completed projects below."
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
    nav: { about: "Nosotros", services: "Servicios", why: "Por Qué", refs: "Referencias", faq: "Preguntas", contact: "Contacto", cta: "Pedir Presupuesto" },
    hero: { cta1: "📞 Llámanos", cta2: "Nuestros Servicios", stat1: "Años de Experiencia", stat2: "Proyectos Realizados", stat3: "Respuesta Rápida" },
    about: {
      title: "Sobre", titleAccent: "Nosotros",
      sub: "Electricistas de confianza con más de una década de experiencia en Bruselas y Bélgica.",
      p1: "KLX Solutions lleva más de 10 años ofreciendo servicios eléctricos profesionales, especializándose en instalaciones eléctricas residenciales e industriales, diseño completo de sistemas eléctricos y mantenimiento.",
      p2: "Como electricistas experimentados, nuestro objetivo es ofrecer soluciones eléctricas seguras, eficientes energéticamente y fiables, adaptadas a las necesidades de cada cliente — desde detección de averías y mejoras de sistemas hasta sustitución de cuadros eléctricos e instalación completa para nuevas construcciones.",
      p3: "Si busca un electricista fiable con tiempos de respuesta rápidos y precios competitivos, KLX Solutions le garantiza trabajo de alta calidad y experiencia profesional.",
      f1: "Profesional Certificado", f2: "Respuesta Rápida", f3: "Precios Justos", f4: "Soluciones Modernas"
    },
    services: {
      title: "Nuestros", titleAccent: "Servicios",
      sub: "Gama completa de servicios eléctricos para clientes residenciales y pequeñas empresas.",
      items: [
        { i: "🔧", t: "Pequeñas Reparaciones", d: "Ningún trabajo es demasiado pequeño. Desde reparaciones menores hasta arreglos rápidos." },
        { i: "🏠", t: "Instalación Completa", d: "Instalación y cableado completo para pisos, edificios y casas familiares." },
        { i: "🏭", t: "Eléctrica Industrial", d: "Instalación, mantenimiento y reparación para instalaciones industriales y talleres." },
        { i: "⚙️", t: "Mejoras de Sistemas", d: "Renovaciones modernas, seguras y a prueba de futuro." },
        { i: "🔍", t: "Detección de Averías", d: "Diagnóstico rápido y reparación profesional de cualquier fallo eléctrico." },
        { i: "🍳", t: "Aparatos de Cocina", d: "Hornos, vitrocerámicas y electrodomésticos integrados conectados con seguridad." },
        { i: "♨️", t: "Grandes Aparatos", d: "Calderas, sistemas de calefacción y otros aparatos grandes." },
        { i: "📺", t: "Sistemas de Baja Tensión", d: "Configuración de TV, audio y sistemas multimedia." },
        { i: "🌐", t: "Redes de Baja Tensión", d: "Instalación de TV, LAN, teléfono y sistemas de vigilancia." },
        { i: "💡", t: "Mejora de Iluminación", d: "Instalación de iluminación LED y soluciones eficientes." },
        { i: "🔌", t: "Enchufes e Interruptores", d: "Sustitución de interruptores, enchufes y luminarias — limpio y seguro." },
        { i: "⚡", t: "Cuadro Eléctrico", d: "Modernización de cuadros eléctricos antiguos." },
        { i: "🚗", t: "Cargador VE", d: "Soluciones de carga para vehículos eléctricos en casa." },
        { i: "🌳", t: "Eléctrica Exterior", d: "Iluminación de jardín, enchufes exteriores e instalaciones." },
        { i: "🔥", t: "Calefacción de Suelo", d: "Sistemas de calefacción eléctrica para suelos, entradas y aceras." },
        { i: "📋", t: "Planificación", d: "Asesoramiento personalizado con inspección en sitio." }
      ]
    },
    why: {
      title: "¿Por Qué Elegir", titleAccent: "KLX",
      sub: "Cinco razones por las que nuestros clientes confían en nosotros.",
      items: [
        { i: "⚡", t: "Más de 10 Años", d: "Una década de experiencia en trabajos residenciales e industriales." },
        { i: "🛠️", t: "Trabajo Fiable", d: "Preciso, profesional y duradero." },
        { i: "⏱️", t: "Respuesta Rápida", d: "Servicio rápido y, cuando es posible, en el mismo día." },
        { i: "💶", t: "Precios Transparentes", d: "Presupuestos justos y claros — sin costes ocultos." },
        { i: "🔒", t: "Moderno y Seguro", d: "Métodos actualizados y materiales certificados." }
      ]
    },
    refs: {
      title: "Nuestras", titleAccent: "Referencias",
      sub: "Algunos de los proyectos que hemos completado con éxito.",
      items: ["Reformas completas de pisos", "Instalaciones eléctricas para casas familiares", "Mejoras y modernización de sistemas", "Reparación de averías y servicio rápido"],
      note: "📸 Explora nuestros proyectos completados."
    },
    faq: {
      title: "Preguntas", titleAccent: "Frecuentes",
      sub: "Respuestas rápidas a las preguntas que más nos hacen.",
      items: [
        { q: "¿Cuánto cuesta un trabajo eléctrico?", a: "El precio depende del tipo y tamaño del proyecto. Contáctanos para un presupuesto personalizado — ofrecemos precios justos y transparentes, sin costes ocultos." },
        { q: "¿Aceptan trabajos pequeños?", a: "Sí — ningún trabajo es demasiado pequeño. Realizamos incluso las reparaciones más pequeñas, desde cambiar un enchufe hasta arreglos menores." },
        { q: "¿Cuánto tarda un proyecto?", a: "Depende del alcance del trabajo, pero en muchos casos podemos ofrecer soluciones rápidas el mismo día para reparaciones y trabajos pequeños." },
        { q: "¿En qué zonas trabajan?", a: "Trabajamos en Bruselas y toda Bélgica. También operamos en España — contáctanos para conocer la disponibilidad." },
        { q: "¿Están autorizados y asegurados?", a: "Sí, KLX Solutions está totalmente autorizado y asegurado. Todos los trabajos se realizan según las normas de seguridad vigentes." }
      ]
    },
    contact: {
      title: "Ponte en", titleAccent: "Contacto",
      sub: "¿Buscas un electricista fiable? Contáctanos hoy mismo para un presupuesto rápido.",
      phoneEs: "Teléfono (España)", phoneBe: "Teléfono (Bélgica)", email: "Correo", area: "Zona de Servicio", areaVal: "Bruselas y Bélgica",
      formName: "Nombre", formEmail: "Correo", formPhone: "Teléfono", formMsg: "Mensaje", formSubmit: "Enviar Mensaje ⚡",
      thanks: "¡Gracias! Le responderemos lo antes posible."
    },
    footer: { area: "Bruselas y Bélgica | info@klxsolutions.com", rights: "Todos los derechos reservados." }
  },
  hu: {
    nav: { about: "Bemutatkozás", services: "Szolgáltatások", why: "Miért Mi", refs: "Referenciák", faq: "GY.I.K.", contact: "Kapcsolat", cta: "Árajánlat" },
    hero: { cta1: "📞 Hívjon Most", cta2: "Szolgáltatások", stat1: "Év Tapasztalat", stat2: "Befejezett Projekt", stat3: "Gyors Reakció" },
    about: {
      title: "Bemutat", titleAccent: "kozás",
      sub: "Megbízható villanyszerelők Brüsszelben és Belgiumban — több mint egy évtizede.",
      p1: "A KLX Solutions több mint 10 éve nyújt professzionális villanyszerelési szolgáltatásokat, legyen szó lakossági villanyszerelésről, ipari kivitelezésről vagy elektromos hálózatok teljes körű kiépítéséről és karbantartásáról.",
      p2: "Tapasztalt villanyszerelőként célunk, hogy ügyfeleink számára biztonságos, energiatakarékos és hosszú távon megbízható elektromos megoldásokat biztosítsunk — a hibakereséstől és hálózat-korszerűsítéstől a biztosítéktábla-cseréig és új építésű ingatlanok komplett villanyszereléséig.",
      p3: "Ha megbízható villanyszerelőt keres gyors kiszállással és korrekt árakon, nálunk garantált a minőségi munka és a szakértelem.",
      f1: "Engedélyezett", f2: "Gyors Kiszállás", f3: "Korrekt Árak", f4: "Modern Megoldások"
    },
    services: {
      title: "Szolgálta", titleAccent: "tásaink",
      sub: "Teljes körű villanyszerelési szolgáltatás lakossági és kisebb ipari ügyfelek számára.",
      items: [
        { i: "🔧", t: "Kisebb Munkák", d: "A legkisebb munkára is kimegyek — egy konnektorcsere vagy apró javítás esetén is segítünk." },
        { i: "🏠", t: "Teljes Villanyszerelés", d: "Lakások, panellakások és kertes családi házak teljes körű elektromos kivitelezése." },
        { i: "🏭", t: "Ipari Villanyszerelés", d: "Elektromos rendszerek kiépítése, karbantartása ipari létesítményekben és műhelyekben." },
        { i: "⚙️", t: "Hálózat Korszerűsítés", d: "Modern, biztonságos és jövőálló megoldások a meglévő rendszerek felújítására." },
        { i: "🔍", t: "Hibakeresés és Javítás", d: "Gyors hibakeresés és szakszerű javítás bármilyen elektromos hibára." },
        { i: "🍳", t: "Konyhai Készülékek", d: "Sütő, főzőlap és egyéb beépíthető eszközök szakszerű csatlakoztatása." },
        { i: "♨️", t: "Háztartási Nagygépek", d: "Bojler, kazán és egyéb berendezések biztonságos üzembe helyezése." },
        { i: "📺", t: "Gyengeáramú Rendszerek", d: "TV, audio és multimédiás rendszerek kiépítése." },
        { i: "🌐", t: "Gyengeáramú Hálózat", d: "TV, LAN, telefon és megfigyelőrendszerek telepítése." },
        { i: "💡", t: "Világítás Korszerűsítés", d: "LED-es fényforrások telepítése, energiatakarékos megoldások." },
        { i: "🔌", t: "Kapcsolók, Dugaljak", d: "Kapcsolók, dugaljak, lámpatestek esztétikus és biztonságos cseréje." },
        { i: "⚡", t: "Biztosítótábla Csere", d: "Régi biztosítótáblák felújítása, cseréje, bővítése." },
        { i: "🚗", t: "Elektromos Autótöltő", d: "Otthoni elektromos autó töltési megoldások kialakítása." },
        { i: "🌳", t: "Kültéri Szerelés", d: "Kerti lámpák, dugaljak és egyéb kültéri rendszerek telepítése." },
        { i: "🔥", t: "Padló- és Járdafűtés", d: "Elektromos padló-, garázslejáró és járdafűtés telepítése." },
        { i: "📋", t: "Tervezés, Tanácsadás", d: "Személyre szabott tanácsadás helyszíni bejárással." }
      ]
    },
    why: {
      title: "Miért a", titleAccent: "KLX",
      sub: "Öt ok, amiért ügyfeleink ránk bízzák az elektromos munkákat.",
      items: [
        { i: "⚡", t: "10+ Év Tapasztalat", d: "Egy évtizednyi szakértelem lakossági és ipari munkákban." },
        { i: "🛠️", t: "Megbízható Munka", d: "Pontos, szakszerű és tartós kivitelezés." },
        { i: "⏱️", t: "Gyors Reakció", d: "Gyors kiszállás, lehetőség szerint aznapi szervizzel." },
        { i: "💶", t: "Átlátható Árak", d: "Korrekt, világos árajánlatok — rejtett költségek nélkül." },
        { i: "🔒", t: "Modern és Biztonságos", d: "Naprakész módszerek és tanúsított anyagok." }
      ]
    },
    refs: {
      title: "Referen", titleAccent: "ciák",
      sub: "Néhány a sikeresen megvalósított projektjeinkből.",
      items: ["Teljes lakásfelújítások", "Családi házak elektromos kivitelezése", "Hálózat korszerűsítések", "Hibajavítások és gyorsszerviz munkák"],
      note: "📸 Tekintse meg befejezett projektjeinket."
    },
    faq: {
      title: "Gyakori", titleAccent: "Kérdések",
      sub: "Gyors válaszok a leggyakrabban feltett kérdésekre.",
      items: [
        { q: "Mennyibe kerül egy villanyszerelési munka?", a: "Az ár minden esetben a munka jellegétől és méretétől függ. Kérjen egyedi árajánlatot — korrekt, átlátható árazással dolgozunk, rejtett költségek nélkül." },
        { q: "Vállal kisebb munkákat is?", a: "Igen — a legkisebb javításokra is kiszállunk, akár egyetlen konnektorcsere vagy apró javítás esetén is." },
        { q: "Mennyi idő alatt készül el egy munka?", a: "A munka méretétől függ, de sok esetben akár aznapi azonnali megoldást is biztosítunk kisebb javítások esetén." },
        { q: "Milyen területen dolgoznak?", a: "Brüsszelben és egész Belgiumban dolgozunk. Spanyolországban is elérhetőek vagyunk — vegye fel velünk a kapcsolatot." },
        { q: "Engedélyezettek és biztosítottak?", a: "Igen, a KLX Solutions teljes körű engedéllyel és biztosítással rendelkezik. Minden munkát az érvényes biztonsági előírásoknak megfelelően végzünk." }
      ]
    },
    contact: {
      title: "Vegye Fel a", titleAccent: "Kapcsolatot",
      sub: "Megbízható villanyszerelőt keres? Vegye fel velünk a kapcsolatot egy gyors árajánlatért.",
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