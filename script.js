const translations = {
    es: {
        nav: { about: "Sobre mí", focus: "Áreas", experience: "Trayectoria", projects: "Proyectos", ai: "IA Nicol", contact: "Contacto" },
        hero: { label: "Data Analyst & AI Specialist", subtitle: "Transformando datos en soluciones inteligentes para Healthcare y Business", cta: "Contáctame", projects: "Ver Proyectos" },
        why: {
            title: "¿Por qué Healthcare + AI?",
            card1: { title: "El puente entre clínica y tecnología", text: "Mi formación clínica en Fonoaudiología me enseñó que los mejores resultados provienen de entender profundamente a las personas. Ahora combino ese enfoque humano con el poder de los datos y la IA para crear soluciones tecnológicas que realmente marcan la diferencia en la atención médica." },
            card2: { title: "Datos con propósito", text: "Cada dataset representa personas reales. Mi experiencia clínica me permite interpretar datos de salud con contexto y sensibilidad, asegurando que los análisis y modelos predictivos tengan impacto real en el bienestar de los pacientes." },
            card3: { title: "Impacto medible", text: "Transformo datos clínicos en dashboards accionables, automatizo procesos de análisis y creo modelos de IA que optimizan la toma de decisiones médicas, reduciendo tiempos y mejorando la calidad de atención." }
        },
        focus: { title: "Focus Areas", p1: "Análisis de datos clínicos, métricas de atención y optimización de procesos de salud.", p2: "Machine Learning, LLMs, RAG y automatización inteligente para решения de negocio.", p3: "Análisis de patrones del habla, datos comportamentales y modelos predictivos en salud.", p4: "Dashboards, KPIs, visualización de datos y storytelling para decisiones estratégicas.", p5: "Tecnología diseñada alrededor de las personas, combinando empatía clínica con innovación técnica." },
        about: { title: "Sobre mí", p1: "Profesional analítica en transición hacia Data Analytics, combinando formación clínica en Fonoaudiología con conocimientos técnicos en Ciencia de Datos, IA y Business Intelligence.", p2: "Mi experiencia en entornos clínicos y hospitalarios me ha permitido desarrollar capacidades analíticas, pensamiento estructurado y comunicación interdisciplinaria.", p3: "Me apasiona construir sistemas inteligentes para mejorar la toma de decisiones, optimizar procesos y generar impacto real en el sector healthcare.", quote: "Transformando datos complejos en soluciones estratégicas impulsadas por IA y análisis orientado al negocio." },
        exp: { job1: "Logopeda y Fonoaudióloga", company1: "Diversas Clínicas e Instituciones", task1_1: "Evaluación clínica y diseño de tratamientos personalizados", task1_2: "Seguimiento analítico del progreso de pacientes", task1_3: "Comunicación con equipos interdisciplinarios", task1_4: "Gestión documental y organización de información", edu1: "Bootcamp Data Analytics & IA", edu2: "Máster en Terapia Miofuncional", edu3: "Grado en Fonoaudiología" },
        skills: { title: "Skills" },
        softskills: { title: "Soft Skills", s1: "Comunicación efectiva", s2: "Pensamiento analítico", s3: "Resolución de problemas", s4: "Adaptabilidad", s5: "Atención al detalle", s6: "Trabajo en equipo" },
        projects: { title: "Proyectos" },
        proj: { p1: "Visualización de datos geoespaciales interactiva.", p2: "Aplicación interactiva de Streamlit con datos de Star Wars.", p3: "Plataforma de análisis de conversaciones con IA.", p4: "Análisis de comportamientos con modelos predictivos.", p5: "Herramienta interactiva para exploración de datasets.", p6: "Plataforma web para gestión de salud mental.", p7: "Análisis de lanzamientos de SpaceX.", p8: "Proyecto demostrativo de páginas web estáticas.", view: "Ver proyecto" },
        filters: { all: "Todos" },
        ai: { title: "IA Nicol", status: "En línea", welcome: "¡Hola! Soy IA Nicol, tu asistente virtual. Puedo ayudarte con:", opt1: "Experiencia", opt2: "Skills", opt3: "Proyectos", opt4: "Contacto", opt5: "Healthcare AI" },
        contact: { title: "Contacto", location: "Ubicación", cta_title: "¿Necesitas ayuda con tus datos?", cta_text: "Estoy disponible para proyectos de Data Analytics, AI y Healthcare. ¡Hablemos!", whatsapp: "WhatsApp", email: "Email", available: "Disponible para nuevas oportunidades" },
        availability: { title: "Disponibilidad" },
        avail: { practices: "Prácticas", junior: "Junior Roles" },
        footer: { tagline: "Data Analyst & AI Healthcare", rights: "Todos los derechos reservados." }
    },
    en: {
        nav: { about: "About", focus: "Areas", experience: "Journey", projects: "Projects", ai: "AI Nicol", contact: "Contact" },
        hero: { label: "Data Analyst & AI Specialist", subtitle: "Transforming data into intelligent solutions for Healthcare and Business", cta: "Contact Me", projects: "View Projects" },
        why: {
            title: "Why Healthcare + AI?",
            card1: { title: "The bridge between clinic and technology", text: "My clinical training in Speech Therapy taught me that the best results come from deeply understanding people. Now I combine that human approach with the power of data and AI to create technological solutions that truly make a difference in healthcare." },
            card2: { title: "Data with purpose", text: "Each dataset represents real people. My clinical experience allows me to interpret health data with context and sensitivity, ensuring that analyses and predictive models have real impact on patient well-being." },
            card3: { title: "Measurable impact", text: "I transform clinical data into actionable dashboards, automate analysis processes and create AI models that optimize medical decision-making, reducing times and improving care quality." }
        },
        focus: { title: "Focus Areas", p1: "Clinical data analysis, care metrics and health process optimization.", p2: "Machine Learning, LLMs, RAG and intelligent automation for business solutions.", p3: "Speech pattern analysis, behavioral data and predictive models in health.", p4: "Dashboards, KPIs, data visualization and storytelling for strategic decisions.", p5: "Technology designed around people, combining clinical empathy with technical innovation." },
        about: { title: "About Me", p1: "Analytical professional transitioning to Data Analytics, combining clinical training in Speech Therapy with technical knowledge in Data Science, AI and Business Intelligence.", p2: "My experience in clinical and hospital settings has allowed me to develop analytical skills, structured thinking and interdisciplinary communication.", p3: "I am passionate about building intelligent systems to improve decision-making, optimize processes and generate real impact in the healthcare sector.", quote: "Transforming complex data into strategic solutions driven by AI and business-oriented analysis." },
        exp: { job1: "Speech Therapist & Audiologist", company1: "Various Clinics and Institutions", task1_1: "Clinical evaluation and personalized treatment design", task1_2: "Analytical tracking of patient progress", task1_3: "Communication with interdisciplinary teams", task1_4: "Document management and information organization", edu1: "Data Analytics & AI Bootcamp", edu2: "Master's in Myofunctional Therapy", edu3: "Degree in Speech Therapy" },
        skills: { title: "Skills" },
        softskills: { title: "Soft Skills", s1: "Effective Communication", s2: "Analytical Thinking", s3: "Problem Solving", s4: "Adaptability", s5: "Attention to Detail", s6: "Teamwork" },
        projects: { title: "Projects" },
        proj: { p1: "Interactive geospatial data visualization.", p2: "Interactive Streamlit application with Star Wars data.", p3: "AI-powered conversation analysis platform.", p4: "Behavior analysis with predictive models.", p5: "Interactive tool for dataset exploration.", p6: "Web platform for mental health management.", p7: "SpaceX launch analysis.", p8: "Static web pages demo project.", view: "View project" },
        filters: { all: "All" },
        ai: { title: "AI Nicol", status: "Online", welcome: "Hello! I'm AI Nicol, your virtual assistant. I can help you with:", opt1: "Experience", opt2: "Skills", opt3: "Projects", opt4: "Contact", opt5: "Healthcare AI" },
        contact: { title: "Contact", location: "Location", cta_title: "Need help with your data?", cta_text: "I'm available for Data Analytics, AI and Healthcare projects. Let's talk!", whatsapp: "WhatsApp", email: "Email", available: "Available for new opportunities" },
        availability: { title: "Availability" },
        avail: { practices: "Internships", junior: "Junior Roles" },
        footer: { tagline: "Data Analyst & AI Healthcare", rights: "All rights reserved." }
    },
    fr: {
        nav: { about: "À propos", focus: "Domaines", experience: "Parcours", projects: "Projets", ai: "IA Nicol", contact: "Contact" },
        hero: { label: "Data Analyst & AI Specialist", subtitle: "Transformer les données en solutions intelligentes pour la santé et les affaires", cta: "Me contacter", projects: "Voir les projets" },
        why: {
            title: "Pourquoi Healthcare + AI?",
            card1: { title: "Le pont entre clinique et technologie", text: "Ma formation clinique en orthophonie m'a appris que les meilleurs résultats viennent d'une compréhension profonde des personnes. Maintenant je combine cette approche humaine avec le pouvoir des données et l'IA pour créer des solutions technologiques qui font vraiment la différence dans les soins de santé." },
            card2: { title: "Données avec un but", text: "Chaque ensemble de données représente des personnes réelles. Mon expérience clinique me permet d'interpréter les données de santé avec contexte et sensibilité, garantissant que les analyses et modèles prédictifs ont un impact réel sur le bien-être des patients." },
            card3: { title: "Impact mesurable", text: "Je transforme les données cliniques en tableaux de bord exploitables, automatise les processus d'analyse et crée des modèles d'IA qui optimisent la prise de décision médicale, réduisant les temps et améliorant la qualité des soins." }
        },
        focus: { title: "Domaines Focus", p1: "Analyse de données cliniques, métriques de soins et optimisation des processus de santé.", p2: "Machine Learning, LLMs, RAG et automatisation intelligente pour les solutions métier.", p3: "Analyse des modèles de parole, données comportementales et modèles prédictifs en santé.", p4: "Tableaux de bord, KPI, visualisation de données et storytelling pour les décisions stratégiques.", p5: "Technologie conçue autour des personnes, combinant empathie clinique et innovation technique." },
        about: { title: "À propos de moi", p1: "Professionnelle analytique en transition vers le Data Analytics, combinant formation clinique en orthophonie avec connaissances techniques en science des données, IA et Business Intelligence.", p2: "Mon expérience en milieu clinique et hospitalier m'a permis de développer des compétences analytiques, une pensée structurée et une communication interdisciplinaire.", p3: "Je suis passionnée par la construction de systèmes intelligents pour améliorer la prise de décision, optimiser les processus et générer un impact réel dans le secteur de la santé.", quote: "Transformer des données complexes en solutions stratégiques grâce à l'IA et l'analyse orientée business." },
        exp: { job1: "Orthophoniste", company1: "Diverses cliniques et institutions", task1_1: "Évaluation clinique et conception de traitements personnalisés", task1_2: "Suivi analytique de la progression des patients", task1_3: "Communication avec les équipes interdisciplinaires", task1_4: "Gestion documentaire et organisation de l'information", edu1: "Bootcamp Data Analytics & IA", edu2: "Master en Thérapie Myofonctionnelle", edu3: "Licence en Orthophonie" },
        skills: { title: "Compétences" },
        softskills: { title: "Soft Skills", s1: "Communication efficace", s2: "Pensée analytique", s3: "Résolution de problèmes", s4: "Adaptabilité", s5: "Attention aux détails", s6: "Travail d'équipe" },
        projects: { title: "Projets" },
        proj: { p1: "Visualisation interactive de données géospatiales.", p2: "Application Streamlit interactive avec données Star Wars.", p3: "Plateforme d'analyse de conversations avec IA.", p4: "Analyse des comportements avec modèles prédictifs.", p5: "Outil interactif pour l'exploration de datasets.", p6: "Plateforme web pour la gestion de la santé mentale.", p7: "Analyse des lancements SpaceX.", p8: "Projet de démonstration de pages web statiques.", view: "Voir le projet" },
        filters: { all: "Tous" },
        ai: { title: "IA Nicol", status: "En ligne", welcome: "Bonjour! Je suis IA Nicol, votre assistant virtuel. Je peux vous aider avec:", opt1: "Expérience", opt2: "Compétences", opt3: "Projets", opt4: "Contact", opt5: "Healthcare AI" },
        contact: { title: "Contact", location: "Lieu", cta_title: "Besoin d'aide avec vos données?", cta_text: "Je suis disponible pour des projets Data Analytics, IA et Healthcare. Parlons-en!", whatsapp: "WhatsApp", email: "Email", available: "Disponible pour de nouvelles opportunités" },
        availability: { title: "Disponibilité" },
        avail: { practices: "Stages", junior: "Postes Junior" },
        footer: { tagline: "Data Analyst & IA Healthcare", rights: "Tous droits réservés." }
    },
    de: {
        nav: { about: "Über mich", focus: "Bereiche", experience: "Werdegang", projects: "Projekte", ai: "KI Nicol", contact: "Kontakt" },
        hero: { label: "Data Analyst & AI Spezialist", subtitle: "Daten in intelligente Lösungen für Healthcare und Business verwandeln", cta: "Kontakt", projects: "Projekte ansehen" },
        why: {
            title: "Warum Healthcare + AI?",
            card1: { title: "Die Brücke zwischen Klinik und Technologie", text: "Meine klinische Ausbildung in Logopädie hat mir gezeigt, dass die besten Ergebnisse aus einem tiefen Verständnis der Menschen kommen. Jetzt verbinde ich diesen menschlichen Ansatz mit der Macht der Daten und KI, um technologische Lösungen zu schaffen, die im Gesundheitswesen wirklich einen Unterschied machen." },
            card2: { title: "Daten mit Sinn", text: "Jeder Datensatz repräsentiert echte Menschen. Meine klinische Erfahrung ermöglicht es mir, Gesundheitsdaten mit Kontext und Sensibilität zu interpretieren und sicherzustellen, dass Analysen und prädiktive Modelle echte Auswirkungen auf das Wohlbefinden der Patienten haben." },
            card3: { title: "Messbare Auswirkung", text: "Ich transformiere klinische Daten in umsetzbare Dashboards, automatisiere Analyseprozesse und erstelle KI-Modelle, die die medizinische Entscheidungsfindung optimieren, Zeit verkürzen und die Versorgungsqualität verbessern." }
        },
        focus: { title: "Fokusbereiche", p1: "Klinische Datenanalyse, Versorgungsmetriken und Gesundheitsprozessoptimierung.", p2: "Machine Learning, LLMs, RAG und intelligente Automatisierung für Geschäftslösungen.", p3: "Sprachmusteranalyse, Verhaltensdaten und prädiktive Modelle im Gesundheitswesen.", p4: "Dashboards, KPIs, Datenvisualisierung und Storytelling für strategische Entscheidungen.", p5: "Um Menschen herum konzipierte Technologie, die klinische Empathie mit technischer Innovation verbindet." },
        about: { title: "Über mich", p1: "Analytische Fachkraft im Übergang zu Data Analytics, kombiniert klinische Ausbildung in Logopädie mit technischem Wissen in Data Science, KI und Business Intelligence.", p2: "Meine Erfahrung in klinischen und krankenhausumgebungen hat mir ermöglicht, analytische Fähigkeiten, strukturiertes Denken und interdisziplinäre Kommunikation zu entwickeln.", p3: "Ich bin leidenschaftlich daran interessiert, intelligente Systeme zu entwickeln, die die Entscheidungsfindung verbessern, Prozesse optimieren und echte Auswirkungen im Gesundheitswesen haben.", quote: "Komplexe Daten in strategische Lösungen durch KI und businessorientierte Analyse verwandeln." },
        exp: { job1: "Logopädin", company1: "Verschiedene Kliniken und Institutionen", task1_1: "Klinische Bewertung und Gestaltung personalisierter Behandlungen", task1_2: "Analytische Verfolgung des Patientenfortschritts", task1_3: "Kommunikation mit interdisziplinären Teams", task1_4: "Dokumentenverwaltung und Informationsorganisation", edu1: "Data Analytics & AI Bootcamp", edu2: "Master in Myofunktioneller Therapie", edu3: "Studium der Logopädie" },
        skills: { title: "Fähigkeiten" },
        softskills: { title: "Soft Skills", s1: "Effektive Kommunikation", s2: "Analytisches Denken", s3: "Problemlösung", s4: "Anpassungsfähigkeit", s5: "Auge für Details", s6: "Teamarbeit" },
        projects: { title: "Projekte" },
        proj: { p1: "Interaktive Geodaten-Visualisierung.", p2: "Interaktive Streamlit-Anwendung mit Star Wars-Daten.", p3: "KI-gestützte Gesprächsanalyse-Plattform.", p4: "Verhaltensanalyse mit prädiktiven Modellen.", p5: "Interaktives Tool zur Datensatz-Exploration.", p6: "Webplattform für psychische Gesundheit.", p7: "SpaceX-Startanalysen.", p8: "Demo-Projekt für statische Webseiten.", view: "Projekt ansehen" },
        filters: { all: "Alle" },
        ai: { title: "KI Nicol", status: "Online", welcome: "Hallo! Ich bin KI Nicol, Ihr virtueller Assistent. Ich kann Ihnen helfen bei:", opt1: "Erfahrung", opt2: "Fähigkeiten", opt3: "Projekte", opt4: "Kontakt", opt5: "Healthcare AI" },
        contact: { title: "Kontakt", location: "Standort", cta_title: "Brauchen Sie Hilfe mit Ihren Daten?", cta_text: "Ich stehe für Data Analytics, AI und Healthcare-Projekte zur Verfügung. Sprechen wir darüber!", whatsapp: "WhatsApp", email: "E-Mail", available: "Verfügbar für neue Möglichkeiten" },
        availability: { title: "Verfügbarkeit" },
        avail: { practices: "Praktika", junior: "Junior-Positionen" },
        footer: { tagline: "Data Analyst & KI Healthcare", rights: "Alle Rechte vorbehalten." }
    }
};

const aiResponses = {
    es: {
        experience: "Tengo experiencia como Logopeda y Fonoaudióloga en diversas clínicas de Barcelona y Bogotá (2022-2025). Mi formación incluye Bootcamp Data Analytics & IA en Upgrade Hub Madrid, Máster en Terapia Miofuncional y Grado en Fonoaudiología por la Universidad del Rosario.",
        skills: "Mis skills incluyen: Python, SQL, Pandas, ETL, Power BI, Microsoft Fabric, Machine Learning, Azure AI, LLMs, RAG, Streamlit, Git, VS Code, n8n. También tengo soft skills como comunicación efectiva, pensamiento analítico y resolución de problemas.",
        projects: "Tengo 8 proyectos en GitHub: GeoDash Explorer (datos geoespaciales), Streamlit Star Wars, AI Chat Analytics, Autism Behaviors, Mini Data Explorer, Healthbrain Web, Análisis SpaceX y GitHub Pages. Todos están disponibles en mi GitHub.",
        contact: "Puedes contactarme por email: nicolescobar3330@gmail.com, por WhatsApp: +34 671 304 754, o LinkedIn. Estoy ubicada en Marbella, España y disponible para proyectos remote.",
        healthcare: "Combino mi experiencia clínica en Fonoaudiología con conocimientos en Data Analytics y AI para crear soluciones tecnológicas centradas en la salud. Transformed datos clínicos en dashboards accionables y modelos predictivos para mejorar la atención médica."
    },
    en: {
        experience: "I have experience as a Speech Therapist & Audiologist at various clinics in Barcelona and Bogotá (2022-2025). My training includes Data Analytics & AI Bootcamp at Upgrade Hub Madrid, Master's in Myofunctional Therapy, and Degree in Speech Therapy from Universidad del Rosario.",
        skills: "My skills include: Python, SQL, Pandas, ETL, Power BI, Microsoft Fabric, Machine Learning, Azure AI, LLMs, RAG, Streamlit, Git, VS Code, n8n. I also have soft skills like effective communication, analytical thinking and problem solving.",
        projects: "I have 8 projects on GitHub: GeoDash Explorer (geospatial data), Streamlit Star Wars, AI Chat Analytics, Autism Behaviors, Mini Data Explorer, Healthbrain Web, SpaceX Analysis and GitHub Pages. All available on my GitHub.",
        contact: "You can contact me by email: nicolescobar3330@gmail.com, WhatsApp: +34 671 304 754, or LinkedIn. I'm located in Marbella, Spain and available for remote projects.",
        healthcare: "I combine my clinical experience in Speech Therapy with knowledge in Data Analytics and AI to create technology solutions focused on health. I transform clinical data into actionable dashboards and predictive models to improve healthcare."
    },
    fr: {
        experience: "J'ai de l'expérience en orthophonie dans diverses cliniques de Barcelone et Bogota (2022-2025). Ma formation inclut un Bootcamp Data Analytics & IA à Upgrade Hub Madrid, un Master en Thérapie Myofonctionnelle et une Licence en Orthophonie.",
        skills: "Mes compétences incluent: Python, SQL, Pandas, ETL, Power BI, Machine Learning, Azure AI, LLMs, RAG, Streamlit, Git, VS Code, n8n. J'ai aussi des soft skills comme la communication efficace et la pensée analytique.",
        projects: "J'ai 8 projets sur GitHub: GeoDash Explorer, Streamlit Star Wars, AI Chat Analytics, Autism Behaviors, Mini Data Explorer, Healthbrain Web, Analyse SpaceX et GitHub Pages.",
        contact: "Vous pouvez me contacter par email: nicolescobar3330@gmail.com, WhatsApp: +34 671 304 754, ou LinkedIn. Je suis à Marbella, Espagne et disponible pour des projets à distance.",
        healthcare: "Je combine mon expérience clinique en orthophonie avec des connaissances en Data Analytics et IA pour créer des solutions technologiques axées sur la santé."
    },
    de: {
        experience: "Ich habe Erfahrung als Logopädin in verschiedenen Kliniken in Barcelona und Bogotá (2022-2025). meine Ausbildung umfasst Data Analytics & AI Bootcamp, Master in Myofunktioneller Therapie und Studium der Logopädie.",
        skills: "Meine Fähigkeiten umfassen: Python, SQL, Pandas, ETL, Power BI, Machine Learning, Azure AI, LLMs, RAG, Streamlit, Git, VS Code, n8n.",
        projects: "Ich habe 8 Projekte auf GitHub: GeoDash Explorer, Streamlit Star Wars, AI Chat Analytics, Autism Behaviors, Mini Data Explorer, Healthbrain Web, SpaceX Analyse und GitHub Pages.",
        contact: "Sie können mich kontaktieren: nicolescobar3330@gmail.com, WhatsApp: +34 671 304 754, oder LinkedIn. Ich bin in Marbella, Spanien.",
        healthcare: "Ich kombiniere meine klinische Erfahrung in Logopädie mit Wissen in Data Analytics und KI, um auf Gesundheit fokussierte technologische Lösungen zu schaffen."
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const scrollProgress = document.querySelector('.scroll-progress');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const themeToggle = document.getElementById('themeToggle');

    applyTranslations(currentLang);
    currentLangSpan.textContent = currentLang.toUpperCase();

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('active');
    });

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang');
            currentLang = lang;
            localStorage.setItem('lang', lang);
            applyTranslations(lang);
            currentLangSpan.textContent = lang.toUpperCase();
            langDropdown.classList.remove('active');
            
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            const keys = key.split('.');
            let value = translations[lang];
            
            for (const k of keys) {
                value = value?.[k];
            }
            
            if (value) {
                el.textContent = value;
            }
        });
    }

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    });

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

let currentAITopic = null;

function askAI(topic) {
    const responseArea = document.getElementById('aiResponseArea');
    const topicLabels = {
        experience: translations[currentLang]?.ai?.opt1 || 'Experience',
        skills: translations[currentLang]?.ai?.opt2 || 'Skills',
        projects: translations[currentLang]?.ai?.opt3 || 'Projects',
        contact: translations[currentLang]?.ai?.opt4 || 'Contact',
        healthcare: translations[currentLang]?.ai?.opt5 || 'Healthcare AI'
    };

    if (currentAITopic === topic) {
        responseArea.innerHTML = '';
        currentAITopic = null;
        return;
    }

    if (responseArea.firstElementChild) {
        const existing = responseArea.firstElementChild;
        existing.classList.add('fade-out');
        setTimeout(() => {
            responseArea.innerHTML = '';
            showAIResponse(topic, topicLabels[topic]);
        }, 300);
    } else {
        showAIResponse(topic, topicLabels[topic]);
    }
}

function showAIResponse(topic, label) {
    const responseArea = document.getElementById('aiResponseArea');
    currentAITopic = topic;
    
    const responseItem = document.createElement('div');
    responseItem.className = 'ai-response-item';
    responseItem.innerHTML = `<p>${aiResponses[currentLang][topic]}</p>`;
    
    responseArea.appendChild(responseItem);
    responseArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function clearAIChat() {
    const responseArea = document.getElementById('aiResponseArea');
    if (responseArea.firstElementChild) {
        const existing = responseArea.firstElementChild;
        existing.classList.add('fade-out');
        setTimeout(() => {
            responseArea.innerHTML = '';
            currentAITopic = null;
        }, 300);
    } else {
        currentAITopic = null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const aiClearBtn = document.getElementById('aiClear');
    if (aiClearBtn) {
        aiClearBtn.addEventListener('click', clearAIChat);
    }

    const aiTopicBtns = document.querySelectorAll('.ai-topic-btn');
    aiTopicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const topic = btn.getAttribute('data-topic');
            askAI(topic);
        });
    });
});