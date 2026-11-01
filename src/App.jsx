import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Clock, ChevronDown, MessageCircle } from 'lucide-react';

const DATA = {
  "handle": "ergonomicard",
  "businessName": "Ergónomica",
  "legalOrFullTitle": "Ergónomica — Arquitectura, Interiorismo & Diseño Ergonómico",
  "tagline": "Arquitectura consciente, confort ergonómico y lujo silencioso en Santo Domingo.",
  "industry": "architecture-interiors",
  "followersEstimate": "8.4K seguidores",
  "hasWebsite": false,
  "leadScore": 94,
  "specialist": {
    "name": "Arq. Manuel Desangles",
    "role": "Director de Arquitectura & Diseño Ergonómico",
    "bioParagraph1": "Con más de 12 años de experiencia liderando proyectos de alta gama en Santo Domingo y el Caribe, el Arq. Manuel Desangles combina el rigor de la arquitectura monolítica con la ergonomía aplicada al bienestar humano en espacios residenciales y corporativos.",
    "bioParagraph2": "Su filosofía proyectual prioriza la fluidez espacial, la luz natural optimizada y una selección rigurosa de materiales nobles, creando entornos sobrios, elegantes y concebidos para durar.",
    "credentials": [
      "Máster en Arquitectura & Ergonomía Espacial",
      "Miembro del Colegio Dominicano de Ingenieros, Arquitectos y Agrimensores (CODIA)",
      "Especialista en Interiorismo Residencial y Corporativo de Lujo"
    ]
  },
  "contact": {
    "address": "Torre Forum, Av. 27 de Febrero esq. Abraham Lincoln, Piso 7, Piantini",
    "sector": "Piantini",
    "city": "Santo Domingo, D.N., República Dominicana",
    "phoneDisplay": "+1 (809) 540-3891",
    "secondaryPhone": "+1 (829) 450-2210",
    "whatsappNumber": "18095403891",
    "whatsappPrefill": "Hola, me gustaría agendar una consulta de proyecto arquitectónico con Ergónomica.",
    "instagramUrl": "https://www.instagram.com/ergonomicard/",
    "hours": "Lunes a Viernes: 8:30 AM – 6:00 PM | Sábados: 9:00 AM – 1:00 PM (Previa Cita)",
    "mapQuery": "Torre Forum Avenida 27 de Febrero Piantini Santo Domingo"
  },
  "hero": {
    "headlinePart1": "Espacios donde el",
    "headlineAccent": "confort ergonómico",
    "headlinePart2": "se transforma en arquitectura.",
    "subtitle": "Estudio de arquitectura e interiorismo de alta gama en Santo Domingo. Creamos residencias y oficinas concebidas para elevar la calidad de vida.",
    "primaryCta": "Agendar Consulta de Proyecto",
    "secondaryCta": "Explorar Obras Seleccionadas",
    "locationStamp": "SANTO DOMINGO • PIANTINI / NACO / CASA DE CAMPO",
    "highlightStatNumber": "+35,000 M²",
    "highlightStatLabel": "Diseñados y proyectados con rigor ergonómico y estética atemporal"
  },
  "authorityStrip": {
    "title": "EXCELENCIA ARQUITECTÓNICA Y EJECUCIÓN EN REPÚBLICA DOMINICANA",
    "items": [
      "Diseño Ergonómico Bioclimático",
      "Modelado BIM & Renderizado 8K",
      "Dirección Técnica de Obra",
      "Piedras Nobles & Maderas Finas",
      "Proyectos Llave en Mano"
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
      "imageCategory": "architectural_design"
    },
    {
      "number": "02",
      "title": "Interiorismo & Ergonomía Corporativa",
      "patientQuote": "Necesitamos oficinas ejecutivas que proyecten prestigio y maximicen la salud postural de todo el equipo.",
      "description": "Transformación de plantas corporativas, salas de conferencias y despachos ejecutivos combinando mobiliario de ergonomía avanzada con control acústico y lumínico.",
      "deliverable": "Especificación Técnica de Mobiliario Ergonómico + Planos de Distribución e Iluminación",
      "duration": "4 a 8 semanas",
      "imageCategory": "interior_design"
    },
    {
      "number": "03",
      "title": "Remodelación Integral Espacial",
      "patientQuote": "Quiero redistribuir por completo mi propiedad para ganar amplitud, fluidez y una estética moderna.",
      "description": "Intervención de estructuras existentes para optimizar circulaciones, aislamiento acústico y acabados en piedra caliza, hormigón arquitectónico y maderas nobles.",
      "deliverable": "Propuesta de Intervención + Presupuesto Detallado + Supervisión de Obra",
      "duration": "8 a 16 semanas según escala",
      "imageCategory": "luxury_renovation"
    },
    {
      "number": "04",
      "title": "Dirección & Gestión Llave en Mano",
      "patientQuote": "Quiero desentenderme del proceso constructivo y recibir mi obra terminada con los más altos estándares.",
      "description": "Fiscalización rigurosa de contratistas, control presupuestario y supervisión al detalle del montaje de acabados y amueblamiento final.",
      "deliverable": "Gestión 360° de Obra + Informes Quincenales + Entrega Oficial de la Propiedad",
      "duration": "Según cronograma del proyecto",
      "imageCategory": "turnkey_execution"
    }
  ],
  "cases": [
    {
      "code": "OBRA 01",
      "title": "Pent-house E14 — Piantini",
      "category": "Interiorismo Residencial & Remodelación Ergonómica",
      "challenge": "Rediseñar un pent-house de 450 m² con una distribución cerrada y deficiente aprovechamiento de la luz natural.",
      "solution": "Integración de espacios sociales mediante paneles móviles de madera, revestimientos en piedra caliza cálida e iluminación automatizada.",
      "time": "5 Meses de Ejecución"
    },
    {
      "code": "OBRA 02",
      "title": "Sede Corporativa Grupo V — Serrallés",
      "category": "Arquitectura Corporativa & Ergonomía Ambiental",
      "challenge": "Crear un entorno de trabajo de 800 m² para 60 colaboradores optimizando la acústica y el confort biomecánico.",
      "solution": "Implementación de estaciones de trabajo regulables, paneles acústicos fonoabsorbentes y zonas de descanso ergonomizadas.",
      "time": "3 Meses de Ejecución"
    },
    {
      "code": "OBRA 03",
      "title": "Villa Brisa — Las Terrenas",
      "category": "Arquitectura Residencial de Lujo",
      "challenge": "Diseñar una residencia costera con máximo aislamiento térmico y absoluta integración con el paisaje natural.",
      "solution": "Estructura monolítica en hormigón pigmentado y madera de teca con aleros voladizos y carpintería de gran formato.",
      "time": "10 Meses de Obra"
    }
  ],
  "process": [
    {
      "step": "01",
      "title": "Levantamiento & Análisis Ergonómico",
      "desc": "Evaluación presencial del terreno o inmueble en Santo Domingo, determinando las necesidades funcionales y bioclimáticas."
    },
    {
      "step": "02",
      "title": "Concepto Arquitectónico & 3D",
      "desc": "Desarrollo del modelo volumétrico, maquetas virtuales en 3D y especificación rigurosa de materiales y textura."
    },
    {
      "step": "03",
      "title": "Documentación & Dirección de Obra",
      "desc": "Elaboración del paquete ejecutivo de planos y supervisión técnica en sitio para una ejecución exacta."
    },
    {
      "step": "04",
      "title": "Entrega Llave en Mano",
      "desc": "Verificación final de acabados, montaje de mobiliario ergonómico y entrega oficial de la obra lista para ser habitada."
    }
  ],
  "testimonials": [
    {
      "name": "Ing. Roberto Hazoury",
      "context": "Propietario Pent-house en Piantini",
      "quote": "El equipo de Ergónomica transformó por completo la dinámica de nuestro hogar. El manejo de la luz, el confort térmico y la acústica cambiaron nuestra calidad de vida."
    },
    {
      "name": "Dra. Carmen Victoria Vicini",
      "context": "Diseño de Centro Médico en Naco",
      "quote": "Buscábamos un diseño donde los pacientes sintieran calma y nuestro personal trabajara de forma ergonómica. Ergónomica entregó una obra de un nivel extraordinario."
    },
    {
      "name": "Lic. Gabriel Bonetti",
      "context": "Sede Corporativa en Av. Winston Churchill",
      "quote": "Su rigor técnico en los detalles y la elección impecable de materiales como la piedra caliza le dieron a nuestras oficinas una sobriedad y elegancia insuperables."
    }
  ],
  "faqs": [
    {
      "q": "¿Dónde están ubicadas las oficinas de Ergónomica en Santo Domingo?",
      "a": "Nuestro estudio y showroom de materiales están ubicados en Piantini (Torre Forum, Av. 27 de Febrero esq. Abraham Lincoln). Atendemos exclusivamente bajo cita previa."
    },
    {
      "q": "¿Qué distingue la filosofía de diseño de Ergónomica?",
      "a": "Fusionamos la ciencia del confort ergonómico (acústica, iluminación, biomecánica) con la estética de la arquitectura monolítica y el lujo silencioso."
    },
    {
      "q": "¿Desarrollan proyectos fuera del Distrito Nacional?",
      "a": "Sí, diseñamos y supervisamos obras en zonas exclusivas como Casa de Campo, Punta Cana, Las Terrenas y Santiago de los Caballeros."
    },
    {
      "q": "¿Cómo puedo iniciar una evaluación inicial para mi proyecto?",
      "a": "Puede contactarnos vía WhatsApp al +1 (809) 540-3891 para agendar una sesión inicial de exploración arquitectónica presencial o virtual."
    }
  ],
  "brand": {
    "aestheticName": "Galería Monolítica & Lujo Silencioso Ergonómico",
    "fontDisplay": "Syne",
    "fontSans": "Plus Jakarta Sans",
    "palette": {
      "bgWarm": "#F4F1EA",
      "bgSecondary": "#EAE6DF",
      "bgDark": "#141413",
      "textDark": "#141413",
      "textMuted": "#52524E",
      "textLight": "#F4F1EA",
      "accent": "#8C6D53",
      "accentHover": "#735741",
      "accentSoft": "#E5DDD3",
      "goldAccent": "#A35C37"
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
  "services": [
    "/media/post_12.jpg",
    "/media/post_2.jpg",
    "/media/post_3.jpg",
    "/media/post_4.jpg"
  ],
  "beforeImg": "/media/post_5.jpg",
  "afterImg": "/media/post_6.jpg",
  "gallery": [
    "/media/post_7.jpg",
    "/media/post_8.jpg",
    "/media/post_9.jpg"
  ]
};
const IS_HEALTH = false;

export default function App() {
  const [activeService, setActiveService] = useState(0);
  const [sliderPos, setSliderPos] = useState(52);
  const [openFaq, setOpenFaq] = useState(0);

  const waUrl = `https://wa.me/${DATA.contact.whatsappNumber}?text=${encodeURIComponent(DATA.contact.whatsappPrefill)}`;

  const handleSliderMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const pct = Math.max(8, Math.min(92, ((clientX - rect.left) / rect.width) * 100));
    setSliderPos(pct);
  };

  return (
    <div>
      {/* NAVBAR FIJO EDITORIAL */}
      <header className="site-navbar">
        <div className="container nav-inner">
          <a href="#" className="brand-mark" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexDirection: 'row' }}>
            <img src="/media/logo_real.jpg" alt="Ergónomica" style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--accent)' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="brand-name">{DATA.businessName}</span>
              <span className="brand-sub">{DATA.tagline}</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#especialidades">Especialidades</a>
            <a href="#casos">Resultados</a>
            <a href="#especialista">{DATA.specialist.name.split(' ').slice(0, 2).join(' ')}</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>

          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand nav-cta-btn" style={{ padding: '12px 24px', fontSize: '0.92rem' }}>
            Agendar Cita <ArrowUpRight size={17} />
          </a>
        </div>
      </header>

      {/* 1. HERO EDITORIAL ASIMÉTRICO */}
      <section className="hero-section">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-title">
              {DATA.hero.headlinePart1}{' '}
              <span className="hero-title-accent">{DATA.hero.headlineAccent}</span>{' '}
              {DATA.hero.headlinePart2}
            </h1>

            <p className="hero-subtitle">{DATA.hero.subtitle}</p>

            <div className="hero-actions">
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                {DATA.hero.primaryCta} <ArrowUpRight size={19} />
              </a>
              <a href="#especialidades" className="btn-outline-editorial">
                {DATA.hero.secondaryCta}
              </a>
            </div>

            <div className="hero-meta-row">
              <div>
                <div className="hero-stat-num">{DATA.hero.highlightStatNumber}</div>
                <div className="hero-stat-label">{DATA.hero.highlightStatLabel}</div>
              </div>
              <div style={{ borderLeft: '1px solid rgba(15,23,42,0.12)', paddingLeft: '28px' }}>
                <div style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '1.02rem' }}>
                  {DATA.specialist.name}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {DATA.contact.sector}, Santo Domingo
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-stage"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-main-frame">
              <img src={MEDIA.heroMain} alt={DATA.businessName} />
            </div>
            <div className="hero-floating-photo">
              <img src={MEDIA.heroDetail} alt={DATA.tagline} loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FRANJA DE RESPALDO / SEGUROS MÉDICOS RD */}
      <section className="authority-strip">
        <div className="container">
          <div className="authority-label">{DATA.authorityStrip.title}</div>
          <div className="marquee-track-wrap">
            <div className="marquee-track">
              {IS_HEALTH ? (
                [...Array(2)].map((_, idx) => (
                  <React.Fragment key={idx}>
                    <img src="/logos-seguros/Logohumano2016.webp" alt="ARS Humano" className="insurance-logo" />
                    <img src="/logos-seguros/Mapfre_Logo_2026-s1280.png" alt="Mapfre Salud" className="insurance-logo" />
                    <img src="/logos-seguros/ars_seguros_banreservas.d729df7.png" alt="Seguros Reservas" className="insurance-logo" />
                    <img src="/logos-seguros/logo-seguros-universal.svg" alt="Seguros Universal" className="insurance-logo" />
                    <img src="/logos-seguros/logo2022.webp" alt="SeNaSa" className="insurance-logo" />
                    <img src="/logos-seguros/Worldwide Medical.png" alt="Worldwide Medical" className="insurance-logo" />
                    <img src="/logos-seguros/logos-bmi-ecuador-02.png" alt="BMI" className="insurance-logo" />
                  </React.Fragment>
                ))
              ) : (
                [...DATA.authorityStrip.items, ...DATA.authorityStrip.items].map((item, i) => (
                  <span key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                    {item}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ÍNDICE EDITORIAL NUMERADO INTERACTIVO (CERO TARJETAS) */}
      <section id="especialidades" className="editorial-services-section">
        <div className="container">
          <div style={{ maxWidth: '680px' }}>
            <h2 style={{ fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)', color: 'var(--text-light)' }}>
              Especialidades diseñadas alrededor de lo que deseas lograr.
            </h2>
          </div>

          <div className="services-layout">
            <div>
              {DATA.services.map((srv, idx) => {
                const isActive = activeService === idx;
                return (
                  <div
                    key={idx}
                    className={`service-row-item ${isActive ? 'active' : ''}`}
                    onMouseEnter={() => setActiveService(idx)}
                    onClick={() => setActiveService(idx)}
                  >
                    <div className="service-row-header">
                      <span className="service-num">{srv.number}</span>
                      <h3 className="service-title">{srv.title}</h3>
                      <ArrowUpRight size={22} color={isActive ? 'var(--accent)' : 'rgba(255,255,255,0.4)'} />
                    </div>

                    {isActive && (
                      <motion.div
                        className="service-expand"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="service-quote">“{srv.patientQuote}”</div>
                        <p className="service-desc">{srv.description}</p>
                        <div className="service-meta-bar">
                          <span>Protocolo: <strong style={{ color: '#FFFFFF' }}>{srv.deliverable}</strong></span>
                          <span>•</span>
                          <span>Tiempo: <strong style={{ color: '#FFFFFF' }}>{srv.duration}</strong></span>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                          <a
                            href={`https://wa.me/${DATA.contact.whatsappNumber}?text=${encodeURIComponent('Hola, me interesa información sobre ' + srv.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-ui)' }}
                          >
                            Consultar sobre {srv.title} por WhatsApp <ArrowUpRight size={16} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="service-visual-stage">
              <img
                src={MEDIA.services[activeService % MEDIA.services.length]}
                alt={DATA.services[activeService]?.title}
                loading="lazy"
              />
              <div className="service-visual-caption">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 600 }}>
                  {DATA.services[activeService]?.title}
                </div>
                <div style={{ fontSize: '0.95rem', opacity: 0.85, marginTop: '4px' }}>
                  {DATA.services[activeService]?.deliverable}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRANSFORMACIÓN REAL & CASOS DESTACADOS */}
      <section id="casos" className="transformation-section">
        <div className="container trans-grid">
          <div>
            <div
              className="ba-slider-container"
              onMouseMove={handleSliderMove}
              onTouchMove={handleSliderMove}
            >
              <img src={MEDIA.afterImg} alt="Resultado final" className="ba-img" />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: `${sliderPos}%`,
                  overflow: 'hidden'
                }}
              >
                <img
                  src={MEDIA.beforeImg}
                  alt="Estado inicial"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.75) brightness(0.92)' }}
                />
              </div>
              <div className="ba-divider" style={{ left: `${sliderPos}%` }}>
                <div className="ba-handle">↔</div>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '14px', textAlign: 'center' }}>
              Desliza horizontalmente sobre la imagen para comparar el antes y el acabado estético.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', marginBottom: '20px' }}>
              Resultados que hablan por su proporción y naturalidad.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.12rem' }}>
              Cada caso en {DATA.businessName} se planifica de forma individualizada, respetando la armonía y estructura propia de cada persona.
            </p>

            <div className="cases-editorial-list">
              {DATA.cases.map((c, idx) => (
                <div key={idx} className="case-strip">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-dark)' }}>{c.title}</h3>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: '0.86rem', color: 'var(--accent)', fontWeight: 600 }}>
                      {c.time}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
                    <strong style={{ color: 'var(--text-dark)' }}>Diagnóstico:</strong> {c.challenge}{' '}
                    <strong style={{ color: 'var(--text-dark)' }}>Resultado:</strong> {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EL ESPECIALISTA / DIRECCIÓN CLÍNICA */}
      <section id="especialista" className="specialist-section">
        <div className="container specialist-grid">
          <div className="specialist-portrait">
            <img src={MEDIA.specialist} alt={DATA.specialist.name} loading="lazy" />
          </div>

          <div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4.4vw, 3.9rem)', color: 'var(--text-dark)', marginBottom: '12px' }}>
              {DATA.specialist.name}
            </h2>
            <div style={{ fontFamily: 'var(--font-ui)', fontSize: '1.08rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '28px' }}>
              {DATA.specialist.role}
            </div>

            <p style={{ color: 'var(--text-dark)', fontSize: '1.16rem', marginBottom: '20px', lineHeight: 1.68 }}>
              {DATA.specialist.bioParagraph1}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.68 }}>
              {DATA.specialist.bioParagraph2}
            </p>

            <div className="credentials-row">
              {DATA.specialist.credentials.map((cred, idx) => (
                <div key={idx} className="credential-item">
                  {cred}
                </div>
              ))}
            </div>

            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
              Agendar Consulta con {DATA.specialist.name.split(' ').slice(0, 2).join(' ')} <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* 6. MOSAICO DE INSTALACIONES & PROCESO EN 4 ETAPAS */}
      <section className="experience-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(2.3rem, 4vw, 3.5rem)', color: 'var(--text-dark)', maxWidth: '640px' }}>
              Un espacio pensado para tu calma desde que cruzas la puerta.
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '420px' }}>
              Ubicados en {DATA.contact.address}, combinamos tecnología de última generación con un ambiente privado y relajado.
            </p>
          </div>

          <div className="mosaic-gallery">
            <div className="mosaic-item tall">
              <img src={MEDIA.gallery[0]} alt="Instalaciones principales" loading="lazy" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[1]} alt="Equipamiento especializado" loading="lazy" />
            </div>
            <div className="mosaic-item">
              <img src={MEDIA.gallery[2]} alt="Detalle clínico" loading="lazy" />
            </div>
          </div>

          <div className="process-horizontal">
            {DATA.process.map((p, idx) => (
              <div key={idx}>
                <div className="process-col-num">{p.step}</div>
                <h3 style={{ fontSize: '1.35rem', color: 'var(--text-dark)', marginBottom: '10px', fontFamily: 'var(--font-ui)', fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UBICACIÓN EN SANTO DOMINGO + FAQ + CONTACTO */}
      <section id="ubicacion" className="location-faq-section">
        <div className="container">
          <div className="location-split">
            <div>
              <h2 style={{ fontSize: 'clamp(2.4rem, 4.2vw, 3.6rem)', color: '#FFFFFF', marginBottom: '24px' }}>
                Visítanos en Santo Domingo o agenda tu evaluación hoy.
              </h2>

              <div style={{ display: 'grid', gap: '22px', margin: '36px 0' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <MapPin size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Dirección en Santo Domingo</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Phone size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Líneas Directas & WhatsApp</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>
                      {DATA.contact.phoneDisplay} {DATA.contact.secondaryPhone ? ` / ${DATA.contact.secondaryPhone}` : ''}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <Clock size={22} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <div style={{ fontWeight: 700, color: '#FFFFFF' }}>Horario de Atención</div>
                    <div style={{ color: 'rgba(248,250,252,0.8)' }}>{DATA.contact.hours}</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-brand">
                  Escribir por WhatsApp Ahora <ArrowUpRight size={18} />
                </a>
                <a
                  href={DATA.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-editorial"
                  style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.28)' }}
                >
                  Ver Instagram @{DATA.handle}
                </a>
              </div>

              <div className="map-frame" style={{ marginTop: '40px' }}>
                <iframe
                  title="Ubicación en Santo Domingo"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(DATA.contact.mapQuery)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '28px' }}>
                Preguntas Frecuentes
              </h3>
              <div>
                {DATA.faqs.map((f, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="faq-item-row" onClick={() => setOpenFaq(isOpen ? -1 : idx)}>
                      <div className="faq-question">
                        <span>{f.q}</span>
                        <ChevronDown
                          size={20}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                            color: 'var(--accent)'
                          }}
                        />
                      </div>
                      {isOpen && <div className="faq-answer">{f.a}</div>}
                    </div>
                  );
                })}
              </div>

              {/* Testimonios integrados sin tarjetas pesadas */}
              <div style={{ marginTop: '56px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.14)' }}>
                <div style={{ fontFamily: 'var(--font-ui)', fontSize: '0.85rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                  LO QUE DICEN NUESTROS PACIENTES EN SANTO DOMINGO
                </div>
                {DATA.testimonials.slice(0, 2).map((t, idx) => (
                  <blockquote key={idx} style={{ marginBottom: '24px' }}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontStyle: 'italic', color: '#FFFFFF', lineHeight: 1.4 }}>
                      “{t.quote}”
                    </p>
                    <footer style={{ fontSize: '0.9rem', color: 'rgba(248,250,252,0.7)', marginTop: '6px' }}>
                      — {t.name} ({t.context})
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <footer style={{ paddingTop: '42px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '0.9rem', color: 'rgba(248,250,252,0.6)' }}>
            <div>© {new Date().getFullYear()} {DATA.businessName}. Todos los derechos reservados.</div>
            <div>{DATA.contact.address} • {DATA.contact.city}</div>
          </footer>
        </div>
      </section>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <MessageCircle size={20} /> Agendar por WhatsApp
      </a>
    </div>
  );
}
