import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const DATA = {
  "handle": "ergonomicard",
  "businessName": "Ergónomica",
  "legalOrFullTitle": "Ergónomica Arquitectura & Diseño Ergonómico SRL",
  "tagline": "Arquitectura consciente, confort ergonómico y lujo silencioso",
  "industry": "architecture-interiors",
  "followersEstimate": "8.4K seguidores",
  "hasWebsite": false,
  "leadScore": 96,
  "specialist": {
    "name": "Arq. Manuel Desangles, CODIA #24810",
    "role": "Director de Arquitectura & Diseño Ergonómico",
    "bioParagraph1": "Con más de 12 años de experiencia liderando proyectos de alta gama en Santo Domingo y el Caribe, el Arq. Manuel Desangles combina el rigor de la arquitectura monolítica con la ergonomía aplicada al bienestar humano en espacios residenciales y corporativos.",
    "bioParagraph2": "Su filosofía proyectual prioriza la fluidez espacial, la luz natural optimizada, el acondicionamiento biomecánico y una selección rigurosa de materiales nobles, creando entornos sobrios, elegantes y concebidos para durar.",
    "credentials": [
      "Colegiado CODIA #24810",
      "Especialista en Ergonomía Ambiental & Bioclimática",
      "Miembro de la Sociedad de Arquitectos de la República Dominicana (SARD)"
    ]
  },
  "contact": {
    "address": "Torre Forum, Av. 27 de Febrero esq. Abraham Lincoln, Piso 7",
    "sector": "Piantini",
    "city": "Santo Domingo, D.N., República Dominicana",
    "phoneDisplay": "+1 (809) 540-3891",
    "secondaryPhone": "+1 (829) 450-2210",
    "whatsappNumber": "18095403891",
    "whatsappPrefill": "Hola, me gustaría agendar una evaluación inicial para mi proyecto con el Arq. Manuel Desangles.",
    "instagramUrl": "https://www.instagram.com/ergonomicard/",
    "hours": "Lunes a Viernes: 8:30 AM – 6:00 PM | Sábados: 9:00 AM – 1:00 PM (Previa Cita)",
    "mapQuery": "Torre Forum Av 27 de Febrero Santo Domingo"
  },
  "hero": {
    "headlinePart1": "Arquitectura Consciente y",
    "headlineAccent": "Confort Ergonómico",
    "headlinePart2": "en Santo Domingo",
    "subtitle": "Fusionamos la ciencia del confort biomecánico, la acústica ambiental y la iluminación optimizada con la estética de la arquitectura monolítica y el lujo silencioso.",
    "primaryCta": "Iniciar Conversación de Proyecto",
    "secondaryCta": "Explorar Obras Seleccionadas",
    "locationStamp": "SANTO DOMINGO • PIANTINI • 18°28'N 69°53'W",
    "highlightStatNumber": "35,000+",
    "highlightStatLabel": "m² Diseñados con Rigor Ergonómico y Estético"
  },
  "dataSheet": {
    "projectName": "Pent-house E14 • Obra Insigne",
    "location": "Piantini, Santo Domingo, República Dominicana",
    "area": "450 m²",
    "typology": "Interiorismo Residencial & Remodelación Ergonómica",
    "scope": "Redistribución Espacial, Paneles Móviles, Iluminación & Control Acústico",
    "materials": "Piedra Caliza Cálida, Roble Curado & Cristal Fonoabsorbente"
  },
  "authorityStrip": {
    "title": "RIGOR TÉCNICO, CONFORTE BIOMECÁNICO Y DIRECCIÓN DE OBRA CODIA",
    "items": [
      "Arquitectura Residencial de Lujo",
      "Ergonomía Corporativa",
      "Remodelación Integral Espacial",
      "Gestión Llave en Mano",
      "Acondicionamiento Acústico & Lumínico"
    ]
  },
  "services": [
    {
      "number": "01",
      "title": "Arquitectura Residencial de Lujo",
      "patientQuote": "Busco una residencia que integre luz natural, ventilación pasiva y un confort ergonómico impecable.",
      "description": "Concepción integral de villas y pent-houses adaptados al clima tropical caribeño, priorizando volumetrías limpias, proporciones armónicas y espacialidad fluida.",
      "deliverable": "Proyecto Arquitectónico Completo + Planos BIM + Renders Fotorrealistas 8K",
      "duration": "6 a 12 semanas de desarrollo conceptual",
      "imageCategory": "architecture"
    },
    {
      "number": "02",
      "title": "Interiorismo & Ergonomía Corporativa",
      "patientQuote": "Necesitamos oficinas ejecutivas que proyecten prestigio y maximicen la salud postural de todo el equipo.",
      "description": "Transformación de plantas corporativas, salas de conferencias y despachos ejecutivos combinando mobiliario de ergonomía avanzada con control acústico y lumínico.",
      "deliverable": "Especificación Técnica de Mobiliario Ergonómico + Planos de Distribución e Iluminación",
      "duration": "4 a 8 semanas de desarrollo",
      "imageCategory": "interiors"
    },
    {
      "number": "03",
      "title": "Remodelación Integral Espacial",
      "patientQuote": "Quiero redistribuir por completo mi propiedad para ganar amplitud, fluidez y una estética moderna.",
      "description": "Intervención de estructuras existentes para optimizar circulaciones, aislamiento acústico y acabados en piedra caliza, hormigón arquitectónico y maderas nobles.",
      "deliverable": "Propuesta de Intervención + Presupuesto Detallado + Supervisión de Obra",
      "duration": "8 a 16 semanas según escala",
      "imageCategory": "construction"
    },
    {
      "number": "04",
      "title": "Dirección & Gestión Llave en Mano",
      "patientQuote": "Quiero desentenderme del proceso constructivo y recibir mi obra terminada con los más altos estándares.",
      "description": "Fiscalización rigurosa de contratistas, control presupuestario y supervisión al detalle del montaje de acabados, ebanistería y amueblamiento final.",
      "deliverable": "Gestión 360° de Obra + Informes Quincenales + Entrega Oficial de la Propiedad",
      "duration": "Acompañamiento continuo según cronograma de obra",
      "imageCategory": "masterplanning"
    }
  ],
  "cases": [
    {
      "code": "OBRA 01",
      "title": "Pent-house E14 • Piantini",
      "category": "Interiorismo Residencial & Remodelación Ergonómica",
      "challenge": "Rediseñar un pent-house de 450 m² con una distribución cerrada y deficiente aprovechamiento de la luz natural.",
      "solution": "Integración de espacios sociales mediante paneles móviles de madera, revestimientos en piedra caliza cálida e iluminación automatizada de confort.",
      "time": "450 m² • 5 Meses de Ejecución"
    },
    {
      "code": "OBRA 02",
      "title": "Sede Corporativa Grupo V • Serrallés",
      "category": "Arquitectura Corporativa & Ergonomía Ambiental",
      "challenge": "Crear un entorno de trabajo de 800 m² para 60 colaboradores optimizando la acústica y el confort biomecánico.",
      "solution": "Implementación de estaciones de trabajo regulables, paneles acústicos fonoabsorbentes en cielo raso y zonas de descanso ergonomizadas.",
      "time": "800 m² • 3 Meses de Ejecución"
    },
    {
      "code": "OBRA 03",
      "title": "Villa Brisa • Las Terrenas",
      "category": "Arquitectura Residencial de Lujo",
      "challenge": "Diseñar una residencia costera con máximo aislamiento térmico y absoluta integración con el paisaje natural.",
      "solution": "Estructura monolítica en hormigón pigmentado y madera de teca con aleros voladizos pasivos y carpintería de gran formato resistente a vientos marinos.",
      "time": "620 m² • 10 Meses de Obra"
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Levantamiento & Análisis Bioclimático",
      "desc": "Estudio del sitio, asoleamiento, vientos y levantamiento de requerimientos ergonómicos del cliente."
    },
    {
      "step": "02",
      "title": "Anteproyecto & Modelado 3D BIM",
      "desc": "Definición de volumetrías, fluidez espacial, acabados nobles y visualizaciones fotorrealistas en 8K."
    },
    {
      "step": "03",
      "title": "Planimetría Ejecutiva & Ingenierías",
      "desc": "Desarrollo de planos técnicos de ebanistería, acondicionamiento acústico, iluminación y licencias MOPC."
    },
    {
      "step": "04",
      "title": "Dirección & Entrega Llave en Mano",
      "desc": "Supervisión técnica directa en sitio, fiscalización de detalles y entrega oficial de la obra lista para habitar."
    }
  ],
  "testimonials": [
    {
      "name": "Ing. Roberto Campagna",
      "context": "Propietario Pent-house E14, Piantini",
      "quote": "La transformación de nuestro pent-house fue absoluta. El equilibrio entre la luz natural, la acústica y la calidad de los materiales supera lo que imaginamos. Vivir el espacio es una experiencia serena."
    },
    {
      "name": "Lic. Claudia Vicini",
      "context": "Directora Ejecutiva Grupo V, Serrallés",
      "quote": "El rediseño ergonómico de nuestra sede elevó la productividad y la comodidad del equipo desde el primer día. El Arq. Manuel Desangles manejó el cronograma y el presupuesto con precisión quirúrgica."
    },
    {
      "name": "Dr. Fernando Rainieri",
      "context": "Propietario Villa Brisa, Las Terrenas",
      "quote": "Lograron una integración impecable de la residencia con el entorno marino. La madera de teca y el hormigón pigmentado le dan un carácter maduro y atemporal a la propiedad."
    }
  ],
  "faqs": [
    {
      "q": "¿Dónde están ubicadas las oficinas de Ergónomica en Santo Domingo?",
      "a": "Nuestro estudio y showroom de materiales están ubicados en Piantini (Torre Forum, Av. 27 de Febrero esq. Abraham Lincoln, Piso 7). Atendemos exclusivamente bajo cita previa."
    },
    {
      "q": "¿Qué distingue la filosofía de diseño de Ergónomica?",
      "a": "Fusionamos la ciencia del confort ergonómico (acústica, iluminación, biomecánica) con la estética de la arquitectura monolítica y el lujo silencioso."
    },
    {
      "q": "¿Desarrollan proyectos fuera del Distrito Nacional?",
      "a": "Sí, diseñamos y supervisamos obras en zonas exclusivas como Casa de Campo, Punta Cana, Las Terrenas, Cap Cana y Santiago de los Caballeros."
    },
    {
      "q": "¿Cómo puedo iniciar una evaluación inicial para mi proyecto?",
      "a": "Puede contactarnos vía WhatsApp al +1 (809) 540-3891 para agendar una sesión inicial de exploración arquitectónica presencial o virtual con el Arq. Manuel Desangles."
    }
  ],
  "brand": {
    "aestheticName": "Editorial Arquitectónico & Lujo Silencioso",
    "fontDisplay": "Cormorant Garamond",
    "fontSans": "Plus Jakarta Sans",
    "palette": {
      "bgWarm": "#F6F4EF",
      "bgSecondary": "#EDE8DF",
      "bgDark": "#121212",
      "textDark": "#141413",
      "textMuted": "#6B6862",
      "textLight": "#F6F4EF",
      "accent": "#8D6E53",
      "accentHover": "#70553E",
      "accentSoft": "#EFE7DE",
      "goldAccent": "#A25D38"
    },
    "inspirationRefs": [
      "/inspiration/architecture-interiors/d1.webp",
      "/inspiration/architecture-interiors/d10.webp",
      "/inspiration/architecture-interiors/d11.webp",
      "/inspiration/architecture-interiors/d12.webp",
      "/inspiration/architecture-interiors/d13.webp",
      "/inspiration/architecture-interiors/d14.webp"
    ]
  }
};
const MEDIA = {
  "heroMain": "/media/post_1.jpg",
  "heroDetail": "/media/post_10.jpg",
  "specialist": "/media/post_11.jpg",
  "project1": "/media/post_12.jpg",
  "project2": "/media/post_2.jpg",
  "triptych": [
    "/media/post_3.jpg",
    "/media/post_4.jpg",
    "/media/post_5.jpg"
  ],
  "services": [
    "/media/post_6.jpg",
    "/media/post_7.jpg",
    "/media/post_8.jpg",
    "/media/post_9.jpg"
  ],
  "blueprint": "/architecture/d1.webp",
  "gallery": [
    "/architecture/d12.webp",
    "/architecture/d14.webp",
    "/architecture/d17.webp"
  ]
};

export default function App() {
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  const waUrl = `https://wa.me/${DATA.contact.whatsappNumber}?text=${encodeURIComponent(DATA.contact.whatsappPrefill)}`;

  return (
    <div>
      {/* NAVBAR MONOLÍTICO */}
      <header className="arch-navbar">
        <div className="container arch-nav-inner">
          <a href="#" className="arch-logo-wrap">
            <span className="arch-logo-title">{DATA.businessName}</span>
            <span className="arch-logo-sub">{DATA.tagline || 'ARQUITECTURA & INTERIORES • SANTO DOMINGO'}</span>
          </a>

          <nav className="arch-nav-menu">
            <a href="#obras">Obras</a>
            <a href="#ficha">Ficha Técnica</a>
            <a href="#manifiesto">Manifiesto</a>
            <a href="#disciplinas">Disciplinas</a>
            <a href="#estudio">Estudio</a>
          </nav>

          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-arch" style={{ padding: '12px 24px', fontSize: '0.82rem' }}>
            Iniciar Proyecto <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      {/* 1. HERO ARQUITECTÓNICO ASIMÉTRICO */}
      <section className="arch-hero">
        <div className="container arch-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-meta arch-hero-meta">
              {DATA.hero.locationStamp || 'SANTO DOMINGO • PIANTINI • 18°28\'N 69°53\'W'}
            </div>

            <h1 className="arch-hero-h1">
              {DATA.hero.headlinePart1}{' '}
              <span className="serif-accent">{DATA.hero.headlineAccent}</span>{' '}
              {DATA.hero.headlinePart2}
            </h1>

            <p className="arch-hero-sub">{DATA.hero.subtitle}</p>

            <div className="arch-hero-ctas">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-arch">
                {DATA.hero.primaryCta} <ArrowUpRight size={17} />
              </a>
              <a href="#obras" className="btn-arch-outline">
                {DATA.hero.secondaryCta}
              </a>
            </div>

            <div className="arch-hero-metrics">
              <div>
                <div className="arch-metric-val">{DATA.hero.highlightStatNumber}</div>
                <div className="arch-metric-lbl">{DATA.hero.highlightStatLabel}</div>
              </div>
              <div>
                <div className="arch-metric-val">CODIA</div>
                <div className="arch-metric-lbl">Supervisión Técnica & Rigor Legal</div>
              </div>
              <div>
                <div className="arch-metric-val">100%</div>
                <div className="arch-metric-lbl">Gestión Llave en Mano</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="arch-hero-stage"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="arch-hero-main-frame">
              <img src={MEDIA.heroMain} alt={DATA.businessName} />
            </div>
            <div className="arch-hero-detail-frame">
              <img src={MEDIA.heroDetail} alt="Detalle arquitectónico" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FICHA TÉCNICA (DATA SHEET) */}
      <section id="ficha" className="arch-datasheet-section">
        <div className="container">
          <div className="arch-datasheet-header">
            <div>
              <div className="mono-meta" style={{ marginBottom: '8px' }}>01 / ESPECIFICACIONES TÉCNICAS</div>
              <h2 className="serif-heading" style={{ fontSize: 'clamp(2rem, 3.4vw, 3rem)' }}>
                Ficha Técnica de Proyecto Insigne
              </h2>
            </div>
            <div className="mono-meta" style={{ color: 'var(--accent-bronze)' }}>
              REPÚBLICA DOMINICANA
            </div>
          </div>

          <div className="arch-datasheet-table">
            <div className="arch-datasheet-row">
              <div className="arch-datasheet-key">01 / PROYECTO</div>
              <div className="arch-datasheet-val">{DATA.dataSheet?.projectName || DATA.cases[0]?.title || 'Villa Coralina • Casa de Campo'}</div>
            </div>
            <div className="arch-datasheet-row">
              <div className="arch-datasheet-key">02 / UBICACIÓN</div>
              <div className="arch-datasheet-val">{DATA.dataSheet?.location || (DATA.contact.sector + ', República Dominicana')}</div>
            </div>
            <div className="arch-datasheet-row">
              <div className="arch-datasheet-key">03 / SUPERFICIE CONSTRUIDA</div>
              <div className="arch-datasheet-val">{DATA.dataSheet?.area || '640 m²'}</div>
            </div>
            <div className="arch-datasheet-row">
              <div className="arch-datasheet-key">04 / TIPOLOGÍA</div>
              <div className="arch-datasheet-val">{DATA.dataSheet?.typology || 'Residencia Unifamiliar Privada Contemporánea'}</div>
            </div>
            <div className="arch-datasheet-row">
              <div className="arch-datasheet-key">05 / ALCANCE DEL ESTUDIO</div>
              <div className="arch-datasheet-val">{DATA.dataSheet?.scope || 'Diseño Arquitectónico, Interiorismo & Dirección de Obra'}</div>
            </div>
            <div className="arch-datasheet-row">
              <div className="arch-datasheet-key">06 / MATERIALIDAD PRINCIPAL</div>
              <div className="arch-datasheet-val">{DATA.dataSheet?.materials || 'Hormigón Visto, Piedra Coralina Autóctona & Vidrio Low-E'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANIFIESTO BASÁLTICO & PILARES */}
      <section id="manifiesto" className="arch-manifesto-section">
        <div className="container arch-manifesto-grid">
          <div>
            <div className="mono-meta" style={{ color: 'var(--accent-bronze)', marginBottom: '20px' }}>
              02 / FILOSOFÍA DEL ESTUDIO
            </div>
            <div className="arch-manifesto-quote">
              “La arquitectura no es una acumulación de formas, sino el diálogo preciso entre el terreno, la luz caribeña y la permanencia de los materiales.”
            </div>
          </div>

          <div className="arch-manifesto-pillars">
            <div>
              <div className="arch-pillar-num">01 / VOLUMEN & SOMBRA</div>
              <div className="arch-pillar-title">Respuesta Bioclimática</div>
              <p className="arch-pillar-desc">
                Diseñamos envolventes y celosías que protegen de la radiación directa y canalizan los vientos alisios, asegurando confort térmico sin sobreuso electromecánico.
              </p>
            </div>
            <div>
              <div className="arch-pillar-num">02 / TEXTURA & TACTILIDAD</div>
              <div className="arch-pillar-title">Honestidad Material</div>
              <p className="arch-pillar-desc">
                Empleamos piedra coralina autóctona, hormigón visto y maderas nobles curadas que envejecen con dignidad frente a la humedad y salinidad tropical.
              </p>
            </div>
            <div>
              <div className="arch-pillar-num">03 / RIGOR & FISCALIZACIÓN</div>
              <div className="arch-pillar-title">Dirección de Obra CODIA</div>
              <p className="arch-pillar-desc">
                Cada detalle planimétrico es supervisado en el terreno por arquitectos e ingenieros colegiados, garantizando fidelidad estructural y control del costo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OBRAS SELECCIONADAS (ASIMÉTRICO / CERO CARDS) */}
      <section id="obras" className="arch-portfolio-section">
        <div className="container">
          <div className="arch-portfolio-head">
            <div>
              <div className="mono-meta" style={{ marginBottom: '8px' }}>03 / PORTAFOLIO DE PROYECTOS</div>
              <h2 className="serif-heading" style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)' }}>
                Obras Seleccionadas
              </h2>
            </div>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-arch-outline">
              Solicitar Dossier Completo <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Proyecto 01 */}
          <div className="arch-project-strip">
            <div className="arch-project-img">
              <img src={MEDIA.project1} alt={DATA.cases[0]?.title || 'Obra 01'} loading="lazy" />
            </div>
            <div className="arch-project-info">
              <div className="arch-project-code">OBRA / 01</div>
              <h3 className="arch-project-title">{DATA.cases[0]?.title || 'Villa Coralina • Casa de Campo'}</h3>
              <p className="arch-project-desc">{DATA.cases[0]?.solution || 'Volúmenes suspendidos en hormigón visto y celosías en piedra coralina que enmarcan la vista al mar y reducen la carga térmica.'}</p>
              <div className="arch-project-specs-row">
                <span>Tipología: <strong>{DATA.cases[0]?.category || 'Residencial Costera'}</strong></span>
                <span>•</span>
                <span>Alcance: <strong>{DATA.cases[0]?.time || '680 m²'}</strong></span>
              </div>
              <div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-arch-outline" style={{ padding: '12px 22px', fontSize: '0.8rem' }}>
                  Consultar sobre esta Obra <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Proyecto 02 (Invertido) */}
          <div className="arch-project-strip reversed">
            <div className="arch-project-img">
              <img src={MEDIA.project2} alt={DATA.cases[1]?.title || 'Obra 02'} loading="lazy" />
            </div>
            <div className="arch-project-info">
              <div className="arch-project-code">OBRA / 02</div>
              <h3 className="arch-project-title">{DATA.cases[1]?.title || 'Residencia Monolithe • Naco'}</h3>
              <p className="arch-project-desc">{DATA.cases[1]?.solution || 'Fachada ciega escultural en travertino claro con un atrio interior a doble altura inundado de luz natural y vegetación tropical.'}</p>
              <div className="arch-project-specs-row">
                <span>Tipología: <strong>{DATA.cases[1]?.category || 'Residencial Urbana'}</strong></span>
                <span>•</span>
                <span>Alcance: <strong>{DATA.cases[1]?.time || '520 m²'}</strong></span>
              </div>
              <div>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-arch-outline" style={{ padding: '12px 22px', fontSize: '0.8rem' }}>
                  Consultar sobre esta Obra <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Tríptico de Proyectos */}
          <div style={{ marginTop: '80px' }}>
            <div className="mono-meta" style={{ marginBottom: '24px' }}>TRÍPTICO VISUAL • DETALLES ARQUITECTÓNICOS</div>
            <div className="arch-triptych-grid">
              {MEDIA.triptych.map((imgSrc, idx) => (
                <div key={idx} className="arch-triptych-item">
                  <div className="arch-triptych-frame">
                    <img src={imgSrc} alt={`Detalle ${idx + 1}`} loading="lazy" />
                  </div>
                  <div className="arch-triptych-title">
                    {idx === 0 ? 'Pabellón de Acceso' : idx === 1 ? 'Galería Interior' : 'Terraza Volada'}
                  </div>
                  <div className="arch-triptych-loc">
                    {idx === 0 ? 'Piantini, Santo Domingo' : idx === 1 ? 'Naco, Santo Domingo' : 'Cap Cana, R.D.'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PLANIMETRÍA CAD & AXONOMETRÍA */}
      <section className="arch-blueprint-section">
        <div className="container arch-blueprint-grid">
          <div>
            <div className="mono-meta" style={{ marginBottom: '12px' }}>04 / INGENIERÍA & PLANIMETRÍA</div>
            <h2 className="serif-heading" style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)', marginBottom: '20px' }}>
              Rigor Técnico Desde la Primera Línea
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.65 }}>
              Todo proyecto en {DATA.businessName} se modela bajo estándares BIM y planimetría de detalle milimétrica. La estética nunca se improvisa: se sustenta en cálculo y coordinación espacial rigurosa.
            </p>

            <div className="arch-cad-points">
              <div className="arch-cad-point-row">
                <span className="arch-cad-point-num">01</span>
                <div>
                  <div className="arch-cad-point-title">Estudio Topográfico & Geotécnico</div>
                  <div className="arch-cad-point-desc">Levantamiento de curvas de nivel, mecánica de suelos y análisis de vientos alisios predominantes.</div>
                </div>
              </div>
              <div className="arch-cad-point-row">
                <span className="arch-cad-point-num">02</span>
                <div>
                  <div className="arch-cad-point-title">Modulación Estructural de Vanos</div>
                  <div className="arch-cad-point-desc">Crujías optimizadas en hormigón armado y perfiles de acero para reducir columnas interiores.</div>
                </div>
              </div>
              <div className="arch-cad-point-row">
                <span className="arch-cad-point-num">03</span>
                <div>
                  <div className="arch-cad-point-title">Planimetría Ejecutiva de Instalaciones</div>
                  <div className="arch-cad-point-desc">Coordinación MEP (eléctrico, sanitario, climatización VRF y domótica oculta).</div>
                </div>
              </div>
            </div>
          </div>

          <div className="arch-cad-schematic">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--hairline-light)', paddingBottom: '12px' }}>
              <span className="mono-meta">CAD / ESQUEMA AXONOMÉTRICO</span>
              <span className="mono-meta">ESC: 1:100</span>
            </div>
            <div style={{ padding: '36px 0', textAlign: 'center' }}>
              <svg width="100%" height="220" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 180 L200 120 L350 180 L200 215 Z" stroke="#141413" strokeWidth="1.5" strokeDasharray="4 4"/>
                <path d="M50 110 L200 50 L350 110 L200 145 Z" stroke="#141413" strokeWidth="2"/>
                <path d="M50 110 L50 180 M200 50 L200 120 M350 110 L350 180 M200 145 L200 215" stroke="#141413" strokeWidth="1.5"/>
                <circle cx="200" cy="50" r="4" fill="#8D6E53"/>
                <circle cx="50" cy="110" r="4" fill="#8D6E53"/>
                <circle cx="350" cy="110" r="4" fill="#8D6E53"/>
                <line x1="200" y1="20" x2="200" y2="50" stroke="#8D6E53" strokeWidth="1.5"/>
                <text x="210" y="32" fontFamily="var(--font-meta)" fontSize="10" fill="#8D6E53" letterSpacing="0.1em">COTA: +8.40 M</text>
                <text x="260" y="160" fontFamily="var(--font-meta)" fontSize="9" fill="#68655E" letterSpacing="0.1em">CRUJÍA ESTRUCTURAL</text>
              </svg>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--hairline-light)', paddingTop: '12px' }}>
              <span className="mono-meta">{DATA.businessName}</span>
              <span className="mono-meta">SANTO DOMINGO, R.D.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DISCIPLINAS & SERVICIOS (ÍNDICE TÉCNICO) */}
      <section id="disciplinas" className="arch-disciplines-section">
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div className="mono-meta" style={{ color: 'var(--accent-bronze)', marginBottom: '12px' }}>05 / ÁREAS DE PRÁCTICA</div>
            <h2 className="serif-heading" style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', color: 'var(--text-light)' }}>
              Disciplinas Proyectuales
            </h2>
          </div>

          <div className="arch-disciplines-layout">
            <div>
              {DATA.services.map((srv, idx) => {
                const isActive = activeDiscipline === idx;
                return (
                  <div
                    key={idx}
                    className={`arch-discipline-row ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveDiscipline(idx)}
                    onClick={() => setActiveDiscipline(idx)}
                  >
                    <div className="arch-discipline-head">
                      <span className="arch-discipline-num">{srv.number}</span>
                      <h3 className="arch-discipline-title">{srv.title}</h3>
                      <ArrowUpRight size={20} color={isActive ? 'var(--accent-bronze)' : 'rgba(246,244,239,0.3)'} />
                    </div>

                    {isActive && (
                      <motion.div
                        className="arch-discipline-body"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="arch-discipline-quote">“{srv.patientQuote}”</div>
                        <p className="arch-discipline-desc">{srv.description}</p>
                        <div className="arch-discipline-meta">
                          <span>Entregable: <strong style={{ color: '#FFFFFF' }}>{srv.deliverable}</strong></span>
                          <span>•</span>
                          <span>Plazo: <strong style={{ color: '#FFFFFF' }}>{srv.duration}</strong></span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="arch-discipline-stage">
              <img
                src={MEDIA.services[activeDiscipline % MEDIA.services.length]}
                alt={DATA.services[activeDiscipline]?.title}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. DIRECCIÓN DEL ESTUDIO & CODIA */}
      <section id="estudio" className="arch-studio-section">
        <div className="container arch-studio-grid">
          <div className="arch-studio-portrait">
            <img src={MEDIA.specialist} alt={DATA.specialist.name} loading="lazy" />
          </div>

          <div>
            <div className="mono-meta" style={{ marginBottom: '12px' }}>06 / DIRECCIÓN ARQUITECTÓNICA</div>
            <h2 className="serif-heading" style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)', marginBottom: '8px' }}>
              {DATA.specialist.name}
            </h2>
            <div style={{ fontFamily: 'var(--font-meta)', fontSize: '0.92rem', color: 'var(--accent-bronze)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
              {DATA.specialist.role}
            </div>

            <p style={{ color: 'var(--text-primary)', fontSize: '1.12rem', marginBottom: '18px', lineHeight: 1.68 }}>
              {DATA.specialist.bioParagraph1}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.68 }}>
              {DATA.specialist.bioParagraph2}
            </p>

            <div className="arch-credentials-list">
              {DATA.specialist.credentials.map((cred, idx) => (
                <div key={idx} className="arch-credential-item">
                  {cred}
                </div>
              ))}
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-arch">
              Agendar Reunión en Estudio Piantini <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* 8. PROCESO EN 4 HITOS */}
      <section className="arch-process-section">
        <div className="container">
          <div className="mono-meta">07 / METODOLOGÍA CONSTRUCTIVA</div>
          <h2 className="serif-heading" style={{ fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', marginTop: '8px' }}>
            Del Territorio a la Llave en Mano
          </h2>

          <div className="arch-process-grid">
            {DATA.process.map((p, idx) => (
              <div key={idx} className="arch-process-col">
                <div className="arch-process-step">FASE / {p.step}</div>
                <div className="arch-process-title">{p.title}</div>
                <p className="arch-process-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. PIE MONUMENTAL (MEGA WORDMARK) */}
      <footer className="arch-footer">
        <div className="container">
          <div className="arch-footer-grid">
            <div>
              <div className="arch-footer-lead-text">
                Construimos espacios con permanencia, calma y carácter en la República Dominicana.
              </div>
              <div style={{ marginTop: '28px' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-arch" style={{ backgroundColor: 'var(--accent-bronze)', borderColor: 'var(--accent-bronze)' }}>
                  Iniciar Conversación de Proyecto <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div>
              <div className="arch-footer-col-title">ESTUDIO & CONTACTO</div>
              <div className="arch-footer-col-body">
                <p style={{ fontWeight: 600, color: '#FFFFFF' }}>{DATA.contact.address}</p>
                <p>{DATA.contact.city}</p>
                <p style={{ marginTop: '12px' }}>{DATA.contact.phoneDisplay}</p>
                <p>{DATA.contact.hours}</p>
              </div>
            </div>

            <div>
              <div className="arch-footer-col-title">RIGOR & ACREDITACIONES</div>
              <div className="arch-footer-col-body">
                <p>Colegio Dominicano de Ingenieros, Arquitectos y Agrimensores (CODIA).</p>
                <p style={{ marginTop: '8px' }}>Sociedad de Arquitectos de la República Dominicana (SARD).</p>
                <p style={{ marginTop: '8px', color: 'var(--accent-bronze)' }}>Licencias MOPC & Alcaldía D.N.</p>
              </div>
            </div>
          </div>

          <div className="arch-mega-wordmark">
            {DATA.businessName}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', borderTop: '1px solid var(--hairline-dark)', paddingTop: '32px' }}>
            <span className="mono-meta">© {new Date().getFullYear()} {DATA.businessName}. TODOS LOS DERECHOS RESERVADOS.</span>
            <span className="mono-meta">SANTO DOMINGO • REPÚBLICA DOMINICANA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
