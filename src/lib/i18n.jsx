import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { about: 'About', services: 'Services', refs: 'References', faq: 'FAQ', contact: 'Contact', cta: 'Get a Quote' },
    hero: { cta1: '📞 Call Now', cta2: 'Our Services', stat1: 'Years Experience', stat2: 'Projects Completed', stat3: 'Fast Response' },
    about: {
      title: 'About', titleAccent: 'Us',
      sub: 'Trusted electricians serving Brussels & Belgium for over a decade.',
      p1: 'KLX Solutions has been providing professional electrical services for over 10 years, specializing in residential and industrial electrical installations, full electrical system design, and maintenance.',
      p2: 'As an experienced electrician, our goal is to deliver safe, energy-efficient, and reliable electrical solutions tailored to each client needs — from electrical fault finding and system upgrades to fuse box replacement and complete wiring for new construction projects.',
      p3: 'If you are looking for a reliable electrician with fast response times and competitive pricing, KLX Solutions guarantees high-quality workmanship and professional expertise.',
      f1: 'Licensed & Insured', f2: 'Fast Response', f3: 'Fair Pricing', f4: 'Modern Solutions'
    },
    services: {
      title: 'Our', titleAccent: 'Services',
      sub: 'A full range of electrical services for residential and small commercial clients.',
      items: [
        { i: '🔧', t: 'Small Repairs', d: 'No job is too small. From minor repairs to quick fixes, you can count on us.' },
        { i: '🏠', t: 'Complete House Wiring', d: 'Full installation and wiring for apartments, panel buildings, and family houses.' },
        { i: '🏭', t: 'Industrial Electrical', d: 'Installation, maintenance, and troubleshooting for industrial facilities and workshops.' },
        { i: '⚙️', t: 'System Upgrades', d: 'Modern, safe, and future-proof electrical system renovations and upgrades.' },
        { i: '🔍', t: 'Fault Finding & Repair', d: 'Fast diagnostics and professional troubleshooting for any electrical fault.' },
        { i: '🍳', t: 'Kitchen Appliances', d: 'Ovens, cooktops, and built-in appliances safely connected.' },
        { i: '♨️', t: 'Major Appliances', d: 'Boilers, heating systems, and other large appliances installation.' },
        { i: '📺', t: 'Low-Voltage Systems', d: 'TV, audio, and multimedia system setup.' },
        { i: '🌐', t: 'Low-Voltage Networks', d: 'TV, LAN, telephone, and surveillance systems installation.' },
        { i: '💡', t: 'Lighting Upgrades', d: 'LED lighting installation and energy-efficient solutions.' },
        { i: '🔌', t: 'Sockets & Switches', d: 'Replacement of switches, sockets, and light fixtures — clean & safe.' },
        { i: '⚡', t: 'Fuse Box Replacement', d: 'Modernizing outdated electrical panels (consumer units).' },
        { i: '🚗', t: 'EV Charger Install', d: 'Home electric vehicle charging solutions.' },
        { i: '🌳', t: 'Outdoor Electrical', d: 'Garden lighting, outdoor sockets, and exterior installations.' },
        { i: '🔥', t: 'Floor & Driveway Heating', d: 'Electric floor, driveway, and walkway heating systems.' },
        { i: '📋', t: 'Planning & Consultation', d: 'Personalized advice with on-site inspection.' }
      ]
    },
    refs: {
      title: 'Our', titleAccent: 'References',
      sub: 'Some of the projects we have successfully delivered.',
      items: ['Full apartment renovations', 'Electrical installations for family houses', 'System upgrades and modernization', 'Fault repairs and rapid service jobs'],
      note: '📸 Browse our completed projects below.'
    },
    faq: {
      title: 'Frequently Asked', titleAccent: 'Questions',
      sub: 'Quick answers to the questions we hear most often.',
      items: [
        { q: 'How much does electrical work cost?', a: 'Pricing depends on the type and size of the project. Contact us for a custom quote — we provide fair, transparent pricing with no hidden fees.' },
        { q: 'Do you take small jobs?', a: 'Yes — no job is too small. We handle even the smallest repairs, from a single socket replacement to minor fixes.' },
        { q: 'How long does a project take?', a: 'It depends on the scope of the work, but in many cases we can provide quick, same-day solutions for repairs and small jobs.' },
        { q: 'What areas do you serve?', a: 'We serve Brussels and all of Belgium. We also operate in Spain — contact us for availability.' },
        { q: 'Are you licensed and insured?', a: 'Yes, KLX Solutions is fully licensed and insured. All work is performed to current safety standards and regulations.' }
      ]
    },
    contact: {
      title: 'Get In', titleAccent: 'Touch',
      sub: 'Looking for a reliable electrician? Contact us today for a fast quote.',
      phoneEs: 'Phone (Spain)', phoneBe: 'Phone (Belgium)', email: 'Email', area: 'Service Area', areaVal: 'Brussels & Belgium',
      formName: 'Name', formEmail: 'Email', formPhone: 'Phone', formMsg: 'Message', formSubmit: 'Send Message ⚡',
      thanks: 'Thank you! We will get back to you as soon as possible.'
    },
    footer: { area: 'Brussels & Belgium | info@klxsolutions.com', rights: 'All rights reserved.' }
  },
  es: {
    nav: { about: 'Nosotros', services: 'Servicios', refs: 'Referencias', faq: 'Preguntas', contact: 'Contacto', cta: 'Pedir Presupuesto' },
    hero: { cta1: '📞 Llamanos', cta2: 'Nuestros Servicios', stat1: 'Anos de Experiencia', stat2: 'Proyectos Realizados', stat3: 'Respuesta Rapida' },
    about: {
      title: 'Sobre', titleAccent: 'Nosotros',
      sub: 'Electricistas de confianza con mas de una decada de experiencia en Bruselas y Belgica.',
      p1: 'KLX Solutions lleva mas de 10 anos ofreciendo servicios electricos profesionales.',
      p2: 'Como electricistas experimentados, nuestro objetivo es ofrecer soluciones electricas seguras y fiables.',
      p3: 'Si busca un electricista fiable con tiempos de respuesta rapidos y precios competitivos, KLX Solutions le garantiza trabajo de alta calidad.',
      f1: 'Profesional Certificado', f2: 'Respuesta Rapida', f3: 'Precios Justos', f4: 'Soluciones Modernas'
    },
    services: {
      title: 'Nuestros', titleAccent: 'Servicios',
      sub: 'Gama completa de servicios electricos para clientes residenciales y pequenas empresas.',
      items: [
        { i: '🔧', t: 'Pequenas Reparaciones', d: 'Ningun trabajo es demasiado pequeno.' },
        { i: '🏠', t: 'Instalacion Completa', d: 'Instalacion y cableado completo para pisos y casas familiares.' },
        { i: '🏭', t: 'Electrica Industrial', d: 'Instalacion, mantenimiento y reparacion para instalaciones industriales.' },
        { i: '⚙️', t: 'Mejoras de Sistemas', d: 'Renovaciones modernas, seguras y a prueba de futuro.' },
        { i: '🔍', t: 'Deteccion de Averias', d: 'Diagnostico rapido y reparacion profesional.' },
        { i: '🍳', t: 'Aparatos de Cocina', d: 'Hornos, vitroceramicas y electrodomesticos integrados.' },
        { i: '♨️', t: 'Grandes Aparatos', d: 'Calderas, sistemas de calefaccion y otros aparatos grandes.' },
        { i: '📺', t: 'Sistemas de Baja Tension', d: 'Configuracion de TV, audio y sistemas multimedia.' },
        { i: '🌐', t: 'Redes de Baja Tension', d: 'Instalacion de TV, LAN, telefono y sistemas de vigilancia.' },
        { i: '💡', t: 'Mejora de Iluminacion', d: 'Instalacion de iluminacion LED y soluciones eficientes.' },
        { i: '🔌', t: 'Enchufes e Interruptores', d: 'Sustitucion de interruptores, enchufes y luminarias.' },
        { i: '⚡', t: 'Cuadro Electrico', d: 'Modernizacion de cuadros electricos antiguos.' },
        { i: '🚗', t: 'Cargador VE', d: 'Soluciones de carga para vehiculos electricos en casa.' },
        { i: '🌳', t: 'Electrica Exterior', d: 'Iluminacion de jardin, enchufes exteriores e instalaciones.' },
        { i: '🔥', t: 'Calefaccion de Suelo', d: 'Sistemas de calefaccion electrica para suelos y entradas.' },
        { i: '📋', t: 'Planificacion', d: 'Asesoramiento personalizado con inspeccion en sitio.' }
      ]
    },
    refs: {
      title: 'Nuestras', titleAccent: 'Referencias',
      sub: 'Algunos de los proyectos que hemos completado con exito.',
      items: ['Reformas completas de pisos', 'Instalaciones electricas para casas familiares', 'Mejoras y modernizacion de sistemas', 'Reparacion de averias y servicio rapido'],
      note: '📸 Explora nuestros proyectos completados.'
    },
    faq: {
      title: 'Preguntas', titleAccent: 'Frecuentes',
      sub: 'Respuestas rapidas a las preguntas que mas nos hacen.',
      items: [
        { q: 'Cuanto cuesta un trabajo electrico?', a: 'El precio depende del tipo y tamano del proyecto. Contactanos para un presupuesto personalizado.' },
        { q: 'Aceptan trabajos pequenos?', a: 'Si — ningun trabajo es demasiado pequeno.' },
        { q: 'Cuanto tarda un proyecto?', a: 'Depende del alcance del trabajo, pero en muchos casos podemos ofrecer soluciones rapidas el mismo dia.' },
        { q: 'En que zonas trabajan?', a: 'Trabajamos en Bruselas y toda Belgica. Tambien operamos en Espana.' },
        { q: 'Estan autorizados y asegurados?', a: 'Si, KLX Solutions esta totalmente autorizado y asegurado.' }
      ]
    },
    contact: {
      title: 'Ponte en', titleAccent: 'Contacto',
      sub: 'Buscas un electricista fiable? Contactanos hoy mismo.',
      phoneEs: 'Telefono (Espana)', phoneBe: 'Telefono (Belgica)', email: 'Correo', area: 'Zona de Servicio', areaVal: 'Bruselas y Belgica',
      formName: 'Nombre', formEmail: 'Correo', formPhone: 'Telefono', formMsg: 'Mensaje', formSubmit: 'Enviar Mensaje ⚡',
      thanks: 'Gracias! Le responderemos lo antes posible.'
    },
    footer: { area: 'Bruselas y Belgica | info@klxsolutions.com', rights: 'Todos los derechos reservados.' }
  },
  hu: {
    nav: { about: 'Bemutatkozas', services: 'Szolgaltatasok', refs: 'Referenciak', faq: 'GY.I.K.', contact: 'Kapcsolat', cta: 'Arajanolat' },
    hero: { cta1: '📞 Hivjon Most', cta2: 'Szolgaltatasok', stat1: 'Ev Tapasztalat', stat2: 'Befejezett Projekt', stat3: 'Gyors Reakcio' },
    about: {
      title: 'Bemutat', titleAccent: 'kozas',
      sub: 'Megbízhato villanyszerelok Brusszelben es Belgiumban — tobb mint egy evtizede.',
      p1: 'A KLX Solutions tobb mint 10 eve nyujt professzionalis villanyszerelesi szolgaltatasokat.',
      p2: 'Tapasztalt villanyszerelokent celunk, hogy ügyfeleink szamara biztonsagos es megbízhato elektromos megoldasokat biztosítsunk.',
      p3: 'Ha megbízhato villanyszerelot keres gyors kiszallassal es korrekt arakon, nalunk garantalt a minosegi munka.',
      f1: 'Engedelyezett', f2: 'Gyors Kiszallas', f3: 'Korrekt Arak', f4: 'Modern Megoldasok'
    },
    services: {
      title: 'Szolgalta', titleAccent: 'tasaink',
      sub: 'Teljes köru villanyszerelesi szolgaltatas lakossagi es kisebb ipari ügyfelek szamara.',
      items: [
        { i: '🔧', t: 'Kisebb Munkak', d: 'A legkisebb munkara is kimegyek.' },
        { i: '🏠', t: 'Teljes Villanyszereles', d: 'Lakaosok, panellakaosok es kertes csaladi hazak teljes köru elektromos kivitelezese.' },
        { i: '🏭', t: 'Ipari Villanyszereles', d: 'Elektromos rendszerek kiepítese, karbantartasa ipari letesítmenyekben.' },
        { i: '⚙️', t: 'Halozat Korszerusítes', d: 'Modern, biztonsagos es jovöalló megoldasok.' },
        { i: '🔍', t: 'Hibakeresses es Javítas', d: 'Gyors hibakeresses es szakszeru javítas.' },
        { i: '🍳', t: 'Konyhai Keszülekek', d: 'Sütö, fözölap es egyeb beepíthetö eszközök csatlakoztatasa.' },
        { i: '♨️', t: 'Haztartasi Nagygepek', d: 'Bojler, kazan es egyeb berendezeseek üzembe helyezese.' },
        { i: '📺', t: 'Gyengeäramu Rendszerek', d: 'TV, audio es multimediaos rendszerek kiepítese.' },
        { i: '🌐', t: 'Gyengeäramu Halozat', d: 'TV, LAN, telefon es megfigyelörendszerek telepítese.' },
        { i: '💡', t: 'Vilagítas Korszerüsítes', d: 'LED-es fenyforrasok telepítese, energiatakarekos megoldasok.' },
        { i: '🔌', t: 'Kapcsolok, Dugaljak', d: 'Kapcsolok, dugaljak, lampatestok csereje.' },
        { i: '⚡', t: 'Biztosítoatabla Csere', d: 'Regi biztosítoatablak felujítasa, csereje.' },
        { i: '🚗', t: 'Elektromos Autotöltö', d: 'Otthoni elektromos autö töltesi megoldasok.' },
        { i: '🌳', t: 'Kültéri Szereles', d: 'Kerti lampak, dugaljak es egyeb kültéri rendszerek telepítese.' },
        { i: '🔥', t: 'Padlo- es Jardafütes', d: 'Elektromos padlo- es jarda-fütes telepítese.' },
        { i: '📋', t: 'Tervezes, Tanacsadas', d: 'Szemelyre szabott tanacsadas helyszíni bejarassal.' }
      ]
    },
    refs: {
      title: 'Referen', titleAccent: 'ciak',
      sub: 'Nehany a sikeresen megvalositott projektjeinkböl.',
      items: ['Teljes lakasfelujítasok', 'Csaladi hazak elektromos kivitelezese', 'Halozat korszerüsítesek', 'Hibajavítasok es gyorsszerviz munkak'],
      note: '📸 Tekintse meg befejezett projektjeinket.'
    },
    faq: {
      title: 'Gyako', titleAccent: 'ri Kerdesek',
      sub: 'Gyors valaszok a leggyakrabban feltett kerdesekre.',
      items: [
        { q: 'Mennyibe kerül egy villanyszerelesi munka?', a: 'Az ar minden esetben a munka jellegetöl es meretétöl függ.' },
        { q: 'Vallal kisebb munkakat is?', a: 'Igen — a legkisebb javítasokra is kiszallunk.' },
        { q: 'Mennyi ido alatt keszül el egy munka?', a: 'A munka meretétöl függ, de sok esetben aznapi megoldast is biztosítunk.' },
        { q: 'Milyen területen dolgoznak?', a: 'Brusszelben es egesz Belgiumban dolgozunk. Spanyolorszagban is elerhetöek vagyunk.' },
        { q: 'Engedelyezettek es biztosítottak?', a: 'Igen, a KLX Solutions teljes köru engedellyel es biztosítassal rendelkezik.' }
      ]
    },
    contact: {
      title: 'Vegye Fel a', titleAccent: 'Kapcsolatot',
      sub: 'Megbízhato villanyszerelöt keres? Vegye fel velünk a kapcsolatot.',
      phoneEs: 'Telefon (Spanyolorszag)', phoneBe: 'Telefon (Belgium)', email: 'E-mail', area: 'Szolgaltatasi Terület', areaVal: 'Brusszel es Belgium',
      formName: 'Nev', formEmail: 'E-mail', formPhone: 'Telefon', formMsg: 'Uzenet', formSubmit: 'Uzenet Küldese ⚡',
      thanks: 'Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.'
    },
    footer: { area: 'Brusszel es Belgium | info@klxsolutions.com', rights: 'Minden jog fenntartva.' }
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
