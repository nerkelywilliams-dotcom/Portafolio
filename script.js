// ==========================================================================
// INTERNATIONALIZATION (i18n) & PORTFOLIO INTERACTION LOGIC
// ==========================================================================

const translations = {
    es: {
        // Navegación
        "nav-about": "// Perfil",
        "nav-metrics": "// Impacto",
        "nav-projects": "// Casos de Estudio",
        "nav-skills": "// Stack Técnico",
        "nav-contact": "// Contacto",

        // Hero Section
        "hero-status": "Online",
        "hero-badge": "&lt;Systems Engineer | Backend & Architecture /&gt;",
        "hero-subtitle": "Ingeniera de Sistemas enfocada en <strong>desarrollo backend</strong>, <strong>Clean Architecture</strong>, optimización de bases de datos relacionales (PostgreSQL) y creación de APIs robustas.",
        "hero-description": "Apasionada por la ingeniería de software moderna, la concurrencia y la eficiencia en el procesamiento de datos. Aplicando activamente <strong>Go (Golang)</strong> y <strong>TypeScript</strong> en soluciones de producción.",
        "btn-projects": "Explorar Casos de Estudio",
        "btn-cv": "Descargar CV (PDF)",

        // Sección Métricas
        "metrics-title": "Impacto Técnico en Producción",
        "metric-1-label": "Registros Mensuales Gestionados",
        "metric-1-desc": "Estructuración de transacciones ACID para ingesta masiva y consistente de datos.",
        "metric-2-label": "Reducción de Latencia",
        "metric-2-desc": "Optimización de consultas complejas e infraestructura de bases de datos.",
        "metric-3-label": "Consistencia de Inventario",
        "metric-3-desc": "Garantía de integridad transaccional no bloqueante entre múltiples sedes.",
        "metric-4-label": "Ausentismo de Pacientes",
        "metric-4-desc": "Automatización de flujos con integración de APIs y dashboards BI.",

        // Sección Proyectos
        "projects-title": "Casos de Estudio",
        "p1-title": "Indexer Concurrente & Arquitectura Backend (Altrueer)",
        "p1-challenge": "<strong>Desafío:</strong> Diseñar un motor de ingesta para procesar eventos de la capa 1 (L1) de la red sin generar cuellos de botella ni bloquear el hilo principal de la aplicación.",
        "p1-solution": "<strong>Solución Técnica:</strong> Desarrollo de infraestructura backend en <strong>Go</strong> aplicando <strong>Clean Architecture</strong> y <strong>PostgreSQL (PostGIS)</strong>. Integración de microservicios mediante <strong>gRPC/Protobuf</strong> y desarrollo de un indexador concurrente utilizando <em>Goroutines</em> y <em>Channels</em>.",

        "p2-title": "Sistema de Gestión & Trazabilidad de Inventario Masivo",
        "p2-challenge": "<strong>Desafío:</strong> Ingesta e inventario de más de 15,000 registros médicos mensuales con alta concurrencia en múltiples sedes sin pérdida de consistencia de datos.",
        "p2-solution": "<strong>Solución Técnica:</strong> Diseño de arquitectura backend en <strong>Go</strong> con <strong>PostgreSQL</strong> centrada en transacciones ACID optimizadas. Implementación de Control de Acceso Basado en Roles (RBAC) con trazabilidad en tiempo real.",

        "p3-title": "Plataforma Médica Multi-Rol & Dashboards BI",
        "p3-challenge": "<strong>Desafío:</strong> Reducir el ausentismo en consultas clínicas y optimizar el flujo operativo del personal médico.",
        "p3-solution": "<strong>Solución Técnica:</strong> Desarrollo de plataforma web multi-rol con dashboards de Inteligencia de Negocios (BI) en tiempo real e integración con la API de WhatsApp para automatización y confirmación de citas.",

        // Sección Stack Técnico
        "skills-title": "Dominio Técnico & Tecnologías",
        "skill-cat-1": "Lenguajes & Backend",
        "skill-active": "Desarrollo Activo",
        "skill-cat-2": "Arquitectura & Bases de Datos",
        "skill-sql-opt": "Optimización SQL",
        "skill-cat-3": "DevOps, Cloud & Herramientas",
        "skill-sec": "Seguridad Web",
        "skill-auto": "Automatización de Procesos",

        // Propuesta de Valor
        "about-title": "Propuesta de Valor Única",
        "about-subtitle": "Ingeniería de Sistemas + Formación Médica",
        "about-p1": "Cuento con titulación como <strong>Ingeniera de Sistemas</strong> (Politécnico Santiago Mariño) combinada con sólida formación práctica e internado clínico en <strong>Medicina</strong> (Universidad de Carabobo).",
        "about-p2": "Esta perspectiva dual me otorga una ventaja competitiva decisiva para colaborar en proyectos de sectores críticos (Health Tech, Bioinformática, Automatización): combino el rigor analítico de la arquitectura backend con un entendimiento profundo del dominio clínico donde la precisión y disponibilidad de datos son vitales.",

        // Contacto & Footer
        "contact-title": "¿Hablamos de Ingeniería?",
        "contact-desc": "Actualmente disponible para oportunidades en Desarrollo Backend, Arquitectura de Software y Liderazgo Técnico.",
        "footer-rights": "© 2026 Nerkely Williams. Diseñado con enfoque en rendimiento, arquitectura limpia y legibilidad."
    },
    en: {
        // Navigation
        "nav-about": "// Profile",
        "nav-metrics": "// Impact",
        "nav-projects": "// Case Studies",
        "nav-skills": "// Tech Stack",
        "nav-contact": "// Contact",

        // Hero Section
        "hero-status": "Online",
        "hero-badge": "&lt;Systems Engineer | Backend & Architecture /&gt;",
        "hero-subtitle": "Systems Engineer focused on <strong>backend development</strong>, <strong>Clean Architecture</strong>, relational database optimization (PostgreSQL), and building robust APIs.",
        "hero-description": "Passionate about modern software engineering, concurrency, and data processing efficiency. Actively applying <strong>Go (Golang)</strong> and <strong>TypeScript</strong> in production solutions.",
        "btn-projects": "Explore Case Studies",
        "btn-cv": "Download Resume (PDF)",

        // Metrics Section
        "metrics-title": "Production Technical Impact",
        "metric-1-label": "Monthly Records Managed",
        "metric-1-desc": "Structuring ACID transactions for massive and consistent data ingestion.",
        "metric-2-label": "Latency Reduction",
        "metric-2-desc": "Optimization of complex queries and database infrastructure.",
        "metric-3-label": "Inventory Consistency",
        "metric-3-desc": "Non-blocking transactional integrity guarantee across multiple sites.",
        "metric-4-label": "Patient Absenteeism",
        "metric-4-desc": "Workflow automation with API integrations and BI dashboards.",

        // Projects Section
        "projects-title": "Case Studies",
        "p1-title": "Concurrent Indexer & Backend Architecture (Altrueer)",
        "p1-challenge": "<strong>Challenge:</strong> Design an ingestion engine to process Layer 1 (L1) network events without creating bottlenecks or blocking the main application thread.",
        "p1-solution": "<strong>Technical Solution:</strong> Backend infrastructure development in <strong>Go</strong> applying <strong>Clean Architecture</strong> and <strong>PostgreSQL (PostGIS)</strong>. Microservices integration via <strong>gRPC/Protobuf</strong> and development of a concurrent indexer using <em>Goroutines</em> and <em>Channels</em>.",

        "p2-title": "Massive Inventory Management & Traceability System",
        "p2-challenge": "<strong>Challenge:</strong> Ingestion and inventory of over 15,000 monthly medical records with high concurrency across multiple locations without loss of data consistency.",
        "p2-solution": "<strong>Technical Solution:</strong> Backend architecture design in <strong>Go</strong> with <strong>PostgreSQL</strong> centered on optimized ACID transactions. Implementation of Role-Based Access Control (RBAC) with real-time traceability.",

        "p3-title": "Multi-Role Medical Platform & BI Dashboards",
        "p3-challenge": "<strong>Challenge:</strong> Reduce absenteeism in clinical consultations and optimize the operational workflow of medical personnel.",
        "p3-solution": "<strong>Technical Solution:</strong> Multi-role web platform development featuring real-time Business Intelligence (BI) dashboards and WhatsApp API integration for automated appointment confirmations.",

        // Skills Section
        "skills-title": "Technical Proficiency & Technologies",
        "skill-cat-1": "Languages & Backend",
        "skill-active": "Active Development",
        "skill-cat-2": "Architecture & Databases",
        "skill-sql-opt": "SQL Optimization",
        "skill-cat-3": "DevOps, Cloud & Tools",
        "skill-sec": "Web Security",
        "skill-auto": "Process Automation",

        // Value Proposition
        "about-title": "Unique Value Proposition",
        "about-subtitle": "Systems Engineering + Medical Training",
        "about-p1": "I hold a degree as a <strong>Systems Engineer</strong> (Politécnico Santiago Mariño) combined with solid practical training and clinical internship in <strong>Medicine</strong> (Universidad de Carabobo).",
        "about-p2": "This dual perspective gives me a decisive competitive edge in critical sectors (Health Tech, Bioinformatics, Automation): I combine backend architecture analytical rigor with a deep understanding of the clinical domain where data accuracy and availability are vital.",

        // Contact & Footer
        "contact-title": "Let's Talk Engineering",
        "contact-desc": "Currently available for opportunities in Backend Development, Software Architecture, and Technical Leadership.",
        "footer-rights": "© 2026 Nerkely Williams. Designed with a focus on performance, clean architecture, and readability."
    }
};

// Obtener preferencia guardada o idioma predeterminado (Español)
let currentLang = localStorage.getItem('portfolio-lang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    // Actualizar etiqueta del botón selector (Si está en ES muestra la opción de cambiar a EN)
    const langTextElement = document.getElementById('lang-text');
    if (langTextElement) {
        langTextElement.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Traducir dinámicamente cada elemento HTML marcado con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Inicialización de eventos al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    
    // Aplicar idioma inicial
    setLanguage(currentLang);

    // Event Listener para alternar idioma
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }
});
