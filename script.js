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
        "hero-badge": "&lt;Systems Engineer | Backend Developer /&gt;",
        "hero-subtitle": "Ingeniera de Sistemas enfocada en <strong>desarrollo backend</strong>, gestión de <strong>bases de datos relacionales</strong> (PostgreSQL, MySQL) y desarrollo de soluciones de software.",
        "hero-description": "Apasionada por la ingeniería de software, la lógica de programación y la optimización de procesos. Con experiencia práctica en tecnologías como <strong>Python</strong>, <strong>JavaScript</strong>, <strong>C++</strong> y frameworks web.",
        "btn-projects": "Explorar Casos de Estudio",
        "btn-cv": "Descargar CV (PDF)",

        // Sección Métricas
        "metrics-title": "Impacto Técnico & Resultados",
        "metric-1-label": "Registros Gestionados",
        "metric-1-desc": "Diseño de bases de datos y lógica para ingesta masiva y consistente de información.",
        "metric-2-label": "Disponibilidad del Sistema",
        "metric-2-desc": "Estructuración limpia de módulos backend para asegurar la estabilidad operativa.",
        "metric-3-label": "Consistencia de Inventario",
        "metric-3-desc": "Garantía de integridad transaccional y control de accesos en el sistema.",
        "metric-4-label": "Visualización de Datos",
        "metric-4-desc": "Automatización e integración de flujos con tableros interactivos para toma de decisiones.",

        // Sección Proyectos
        "projects-title": "Casos de Estudio",
        "p1-title": "Sistema de Gestión para Consultorio Médico",
        "p1-challenge": "<strong>Desafío:</strong> Desarrollar una aplicación web para optimizar la administración de historias médicas, citas y datos clínicos en un entorno centralizado.",
        "p1-solution": "<strong>Solución Técnica:</strong> Diseño completo de la arquitectura de software, modelado de base de datos relacional (MySQL/PostgreSQL) e implementación de lógica backend para el control de usuarios y registro de pacientes.",

        "p2-title": "Sistema de Control de Inventario & Medicamentos",
        "p2-challenge": "<strong>Desafío:</strong> Administrar eficientemente más de 15,000 registros de insumos y medicamentos garantizando trazabilidad y evitando inconsistencias de stock.",
        "p2-solution": "<strong>Solución Técnica:</strong> Estructuración de base de datos relacional con consultas optimizadas y control de acceso basado en roles (RBAC) para el manejo seguro de la información.",

        "p3-title": "Plataforma Web Multi-Rol & Dashboards",
        "p3-challenge": "<strong>Desafío:</strong> Optimizar los procesos operativos y ofrecer una interfaz intuitiva para el monitoreo de indicadores de gestión.",
        "p3-solution": "<strong>Solución Técnica:</strong> Desarrollo frontend/backend responsivo con integración de servicios web y dashboards interactivos para la visualización fluida de datos.",

        // Sección Stack Técnico
        "skills-title": "Dominio Técnico & Tecnologías",
        "skill-cat-1": "Lenguajes & Backend",
        "skill-cat-2": "Bases de Datos & Infraestructura",
        "skill-cat-3": "Herramientas & Plataformas",

        // Propuesta de Valor
        "about-title": "Propuesta de Valor Única",
        "about-subtitle": "Ingeniería de Sistemas + Formación Médica",
        "about-p1": "Cuento con titulación como <strong>Ingeniera de Sistemas</strong> (Politécnico Santiago Mariño) combinada con formación e internado clínico en <strong>Medicina</strong> (Universidad de Carabobo).",
        "about-p2": "Esta perspectiva dual me permite abordar el desarrollo de software con un equilibrio entre pensamiento lógico-estructurado y una comprensión directa de los procesos del sector salud, facilitando la creación de soluciones enfocadas en las necesidades reales del usuario.",

        // Contacto & Footer
        "contact-title": "¿Conectamos?",
        "contact-desc": "Disponible para oportunidades laborales en Desarrollo Backend, Ingeniería de Software y Proyectos Web Junior.",
        "footer-rights": "© 2026 Nerkely Williams. Diseñado con enfoque en rendimiento y legibilidad."
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
        "hero-badge": "&lt;Systems Engineer | Backend Developer /&gt;",
        "hero-subtitle": "Systems Engineer focused on <strong>backend development</strong>, <strong>relational database management</strong> (PostgreSQL, MySQL), and software solutions.",
        "hero-description": "Passionate about software engineering, programming logic, and process optimization. Hands-on experience with technologies like <strong>Python</strong>, <strong>JavaScript</strong>, <strong>C++</strong>, and web frameworks.",
        "btn-projects": "Explore Case Studies",
        "btn-cv": "Download Resume (PDF)",

        // Metrics Section
        "metrics-title": "Technical Impact & Results",
        "metric-1-label": "Records Managed",
        "metric-1-desc": "Database design and logic for massive, consistent data ingestion.",
        "metric-2-label": "System Uptime",
        "metric-2-desc": "Clean backend modular structure ensuring operational stability.",
        "metric-3-label": "Inventory Consistency",
        "metric-3-desc": "Guaranteeing transactional integrity and system access control.",
        "metric-4-label": "Data Visualization",
        "metric-4-desc": "Workflow automation and integration with interactive dashboards for decision making.",

        // Projects Section
        "projects-title": "Case Studies",
        "p1-title": "Medical Office Management System",
        "p1-challenge": "<strong>Challenge:</strong> Develop a web application to streamline medical records, appointments, and clinical data administration in a centralized system.",
        "p1-solution": "<strong>Technical Solution:</strong> Software architecture design, relational database modeling (MySQL/PostgreSQL), and backend logic implementation for user access and patient records.",

        "p2-title": "Medical Supply & Inventory Control System",
        "p2-challenge": "<strong>Challenge:</strong> Efficiently manage over 15,000 supply records ensuring data traceability and zero stock inconsistencies.",
        "p2-solution": "<strong>Technical Solution:</strong> Relational database design with optimized queries and Role-Based Access Control (RBAC) for secure data handling.",

        "p3-title": "Multi-Role Web Platform & Dashboards",
        "p3-challenge": "<strong>Challenge:</strong> Optimize operational workflows and provide an intuitive dashboard interface for key metric monitoring.",
        "p3-solution": "<strong>Technical Solution:</strong> Responsive web platform development with API integrations and interactive dashboards for seamless data visualization.",

        // Skills Section
        "skills-title": "Technical Proficiency & Technologies",
        "skill-cat-1": "Languages & Backend",
        "skill-cat-2": "Databases & Infrastructure",
        "skill-cat-3": "Tools & Platforms",

        // Value Proposition
        "about-title": "Unique Value Proposition",
        "about-subtitle": "Systems Engineering + Medical Background",
        "about-p1": "I hold a degree in <strong>Systems Engineering</strong> (Politécnico Santiago Mariño) paired with practical clinical training and internship in <strong>Medicine</strong> (Universidad de Carabobo).",
        "about-p2": "This dual background allows me to build software solutions balancing structured analytical logic with a deep real-world understanding of health sector workflows and user needs.",

        // Contact & Footer
        "contact-title": "Let's Connect",
        "contact-desc": "Open for opportunities in Backend Development, Software Engineering, and Junior Web Projects.",
        "footer-rights": "© 2026 Nerkely Williams. Designed with a focus on performance and readability."
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'es';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;

    const langTextElement = document.getElementById('lang-text');
    if (langTextElement) {
        langTextElement.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// ==========================================================================
// INTERACTIVE & DOM LOGIC
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicialización de Idioma
    const langBtn = document.getElementById('lang-toggle');
    setLanguage(currentLang);

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // 2. Navegación Móvil (Soporta múltiples IDs comunes de botones)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn') || document.querySelector('.mobile-menu-btn') || document.querySelector('.menu-toggle');
    const navLinksContainer = document.getElementById('nav-links') || document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            mobileMenuBtn.classList.toggle('open');
        });

        document.querySelectorAll('.nav-link, .nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn.classList.remove('open');
            });
        });
    }

    // 3. Control de Métricas (Asegura valores por defecto en caso de no usar data-attributes)
    const metricNumbers = document.querySelectorAll('.metric-number');
    const fallbackValues = ['15k+', '99.9%', '100%', '100%'];

    metricNumbers.forEach((metric, index) => {
        const targetAttr = metric.getAttribute('data-target');
        if (targetAttr && targetAttr !== '0') {
            const target = parseFloat(targetAttr);
            const prefix = metric.getAttribute('data-prefix') || '';
            const suffix = metric.getAttribute('data-suffix') || '';
            metric.innerText = `${prefix}${target}${suffix}`;
        } else {
            // Si el HTML no especifica target, se asignan los valores reales del portafolio
            if (fallbackValues[index]) {
                metric.innerText = fallbackValues[index];
            }
        }
    });

    // 4. Navbar estilo visual al hacer Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // 5. Smooth Scroll para navegación interna
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
