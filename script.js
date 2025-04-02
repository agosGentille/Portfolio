window.onscroll = function() {
    let scrollButton = document.getElementById("backToTop");
    let sticky = document.getElementById("sticky");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
        sticky.style.display = "block";
    } else {
        scrollButton.style.display = "none";  // Oculta el botón cuando esté en la parte superior  
        sticky.style.display = "none";
    }
    if(document.body.scrollTop > window.innerHeight * 0.6 || document.documentElement.scrollTop > window.innerHeight * 0.6){
        sticky.style.opacity = "1";
    }else{
        sticky.style.opacity = "0";
    }
};

    // Función para volver al inicio de la página cuando se haga clic en el botón
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    function toggleMenu() {
        var navbar = document.querySelector('.navbar');
        var overlay = document.querySelector('.overlay');
        navbar.classList.toggle('open');  // Alterna la clase 'open' para mostrar/ocultar el menú
        overlay.classList.toggle('active'); 
    };

    function highlightSectionOnScroll() {
        const sections = document.querySelectorAll('section[id]'); 
        const navbarLinks = document.querySelectorAll('.navbar ul li a');
        let currentSection = null;
        
        // Obtener posición actual de scroll con compatibilidad cross-browser
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Umbral ajustable (50% de la altura de la ventana)
            const offset = window.innerHeight * 0.5;
            
            if (scrollPosition >= sectionTop - offset && 
                scrollPosition < sectionTop + sectionHeight - offset) {
                currentSection = sectionId;
            }
        });
        
        // Solo actualizar si encontramos una sección
        if (currentSection) {
            navbarLinks.forEach(link => {
                const linkSection = link.getAttribute('href').substring(1); // Elimina el #
                link.parentElement.classList.toggle('active', linkSection === currentSection);
            });
            
            console.log('Sección activa:', currentSection);
        } else {
            console.log('No se encontró sección activa');
        }
    }
    

    function showSection(id) {
        const sections = document.querySelectorAll('section');
        const navbarLinks = document.querySelectorAll('.navbar ul li'); 

        navbarLinks.forEach(link => {
            link.classList.remove('active');
        });

        const selectedLink = document.querySelector(`.navbar ul li a[href="#${id}"]`).parentElement;
        selectedLink.classList.add('active');

        sections.forEach(section => {
            section.classList.remove('active');
        });
        const selectedSection = document.getElementById(id);
        selectedSection.classList.add('active');

        // Cerrar el menú si está abierto
        const navbar = document.querySelector('.navbar');
        const overlay = document.querySelector('.overlay');
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            overlay.classList.remove('active'); 
        }
    }

    function copiarAlPortapapeles(event) {
        event.preventDefault(); 
        const alertMessage = {
            es: {
                alert: "Correo copiado al portapapeles: "
            },
            en: {
                alert: "Email copied to the clipboard: "
            }
        };
        const email = "gentilleagostina@gmail.com"; 
        navigator.clipboard.writeText(email).then(() => {
            const currentLang = getCurrentLanguage();
            alert(alertMessage[currentLang].alert + email); // Concatenate the message with the email
        }).catch(err => {
            console.error("Error: ", err);
        });
    }

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', highlightSectionOnScroll);
    highlightSectionOnScroll();
    const translations = {
        es: {
            Nav_header: "Inicio",
            Nav_aboutme: "Sobre mi",
            Nav_skills: "Habilidades",
            Nav_projects: "Proyectos",
            Nav_footer: "Contáctame",
            Welcome: "Bienvenido a mi Portafolio, soy",
            Career: "Soy un desarrollador web apasionado por la tecnología.",
            Description: "¡Hola! Soy Agostina Gentille, Técnica en Programación y Sistemas Informáticos. Me apasiona el desarrollo de software y la tecnología. Me encanta aprender nuevas herramientas y enfrentar desafíos tecnológicos. Siempre estoy en busca de oportunidades para seguir creciendo y aportar soluciones innovadoras.",
            SubTitle_aboutme: "Sobre mi",
            SubTitle_projects: "Mis Proyectos",
            Elderlink_description: "ElderLink es una plataforma de Alfabetización Digital para Adultos Mayores. Mediante esta App Móvil se le permite a los usuarios acceder a la información y cursos a través de una interfaz accesible, mientras que los Docentes pueden subir recursos educativos y crear nuevas herramientas de aprendizaje y autoevaluación de contenidos. Los mismos se pueden encontrar en cualquier formato (textos, videos, imágenes e incluso links a otras páginas o videos)",
            Consultorio_title:"Gestión de Consultorio Médico",
            Consultorio_description: "Esta es una Aplicación Web ideal para aquellos Consultorios Médicos que desean gestionar turnos correctamente. Los Administradores podrán acceder a un CRUD de Médicos, Pacientes e incluso Especialidades, además de generar una serie de Reportes. Por otro lado, los medicos cuentan con un Calendario el cual les permite visualizar cómodamente todos los turnos agendados para si mismos. Al final de cada uno, podrán registrar la asistencia del paciente junto a un pequeño detalle sobre la consulta.",
            Memoria_title:"Día Nacional de la Memoria, Verdad y Justicia",
            Memoria_description: "Esta página web educativa fue creada para conmemorar el Día Nacional de la Memoria por la Verdad y la Justicia en Argentina (24 de marzo), con el propósito de informar sobre la última dictadura cívico-militar (1976-1983) y preservar la memoria histórica.",
            Footer_description: "Si tenés alguna propuesta o algún proyecto en mente, ¡hablame!"
        },
        en: {
            Nav_header: "Home",
            Nav_aboutme: "About me",
            Nav_skills: "Skills",
            Nav_projects: "Projects",
            Nav_footer: "Contact me",
            Welcome: "Welcome to my Portfolio, I'm",
            Career: "Computer Systems and Programming Technician",
            Description: "Hello! I’m Agostina Gentille, a Technician in Programming and Information Systems. I’m passionate about software development and technology. I love learning new tools and tackling technological challenges. I’m always looking for opportunities to keep growing and contribute innovative solutions.",
            SubTitle_aboutme: "About me",
            SubTitle_projects: "My Projects",
            Elderlink_description: "ElderLink is a Digital Literacy platform for Older Adults. Through this Mobile App, users are allowed to access information and courses via an accessible interface, while Teachers can upload educational resources and create new learning and self-assessment tools for content. These resources can be found in any format (texts, videos, images, and even links to other pages or videos).",
            Consultorio_title:"Medical Office Management",
            Consultorio_description: "This is a Web Application ideal for Medical Offices that wish to manage appointments correctly. Administrators will be able to access a CRUD of Doctors, Patients, and even Specialties, as well as generate a series of Reports. On the other hand, doctors have a Calendar that allows them to comfortably view all the scheduled appointments for themselves. At the end of each appointment, they can register the patient's attendance along with a brief detail about the consultation.",
            Memoria_title:"National Day of Memory for Truth and Justice",
            Memoria_description: "This educational website was created to commemorate Argentina's National Day of Memory for Truth and Justice (March 24th), with the purpose of informing about the last civic-military dictatorship (1976–1983) and preserving historical memory.",
            Footer_description: "If you have any proposal or project in mind, feel free to reach out to me!"
        }
    };

    const languageSwitcher = document.getElementById("languageSwitcher");
    const Nav_header = document.getElementById("Nav_header");
    const Nav_aboutme = document.getElementById("Nav_aboutme");
    const Nav_skills = document.getElementById("Nav_skills");
    const Nav_projects = document.getElementById("Nav_projects");
    const Nav_footer = document.getElementById("Nav_footer");
    const Welcome = document.getElementById("Welcome");
    const Career = document.getElementById("Career");
    const Description = document.getElementById("Description");
    const SubTitle_aboutme = document.getElementById("SubTitle_aboutme");
    const SubTitle_projects = document.getElementById("SubTitle_projects");
    const Elderlink_description = document.getElementById("Elderlink_description");
    const Consultorio_title = document.getElementById("Consultorio_title");
    const Consultorio_description = document.getElementById("Consultorio_description");
    const Memoria_title = document.getElementById("Memoria_title");
    const Memoria_description = document.getElementById("Memoria_description");
    const Footer_description = document.getElementById("Footer_description");

    // Función para cambiar de idioma
    function switchLanguage() {
        const selectedLang = languageSwitcher.value;
        Nav_header.textContent = translations[selectedLang].Nav_header;
        Nav_aboutme.textContent = translations[selectedLang].Nav_aboutme;
        Nav_skills.textContent = translations[selectedLang].Nav_skills;
        Nav_projects.textContent = translations[selectedLang].Nav_projects;
        Nav_footer.textContent = translations[selectedLang].Nav_footer;
        Welcome.textContent = translations[selectedLang].Welcome;
        Career.textContent = translations[selectedLang].Career;
        Description.textContent = translations[selectedLang].Description;
        SubTitle_aboutme.textContent = translations[selectedLang].SubTitle_aboutme;
        SubTitle_projects.textContent = translations[selectedLang].SubTitle_projects;
        Elderlink_description.textContent = translations[selectedLang].Elderlink_description;
        Consultorio_title.textContent = translations[selectedLang].Consultorio_title;
        Consultorio_description.textContent = translations[selectedLang].Consultorio_description;
        Memoria_title.textContent = translations[selectedLang].Memoria_title;
        Memoria_description.textContent = translations[selectedLang].Memoria_description;
        Footer_description.textContent = translations[selectedLang].Footer_description;
    }

    // Detectar cambio en el select
    languageSwitcher.addEventListener("change", switchLanguage);
});

const messages = {
    es: {
        readMore: "Leer más...",
        readLess: "Leer menos..."
    },
    en: {
        readMore: "Read more...",
        readLess: "Read less..."
    }
};

function getCurrentLanguage() {
    return document.documentElement.lang || 'es'; // Default to Spanish if no lang attribute is found
}

function toggleReadMore(event, element) {
    event.stopPropagation(); // Evita que el click en "Leer más" redireccione a GitHub

    let paragraph = element.previousElementSibling;
    paragraph.classList.toggle("expanded");

    // Obtener el idioma actual
    const currentLang = getCurrentLanguage();

    // Cambiar el texto del botón según el idioma
    if (paragraph.classList.contains("expanded")) {
        element.textContent = messages[currentLang].readLess;
    } else {
        element.textContent = messages[currentLang].readMore;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.getElementById("languageSwitcher");
    languageSwitcher.addEventListener("change", function () {
        // Cambiar el atributo 'lang' del HTML según el idioma seleccionado
        const selectedLang = languageSwitcher.value;
        document.documentElement.lang = selectedLang;

        const readMoreButtons = document.querySelectorAll('.read-more');
        readMoreButtons.forEach(button => {
            const paragraph = button.previousElementSibling;
            if (paragraph.classList.contains("expanded")) {
                button.textContent = messages[selectedLang].readLess;
            } else {
                button.textContent = messages[selectedLang].readMore;
            }
        });
    });
});
