
// Funcionalidad del menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');
    const navList = document.querySelector('.nav__list');
    const navLinks = document.querySelectorAll('.nav__link');

    // Función para toggle del menú móvil
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        nav.classList.toggle('mobile-active');
        navList.classList.toggle('mobile-active');
        
        // Añadir clase mobile-active a cada link
        navLinks.forEach(link => {
            link.classList.toggle('mobile-active');
        });

        // Prevenir scroll cuando el menú está abierto
        document.body.style.overflow = 
            hamburger.classList.contains('active') ? 'hidden' : '';
    }

    // Event listener para el clic en el hamburguesa
    hamburger.addEventListener('click', toggleMobileMenu);

    // Cerrar menú al hacer clic en un link (en mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Cerrar menú al redimensionar la ventana (si se cambia a desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            nav.classList.remove('mobile-active');
            navList.classList.remove('mobile-active');
            navLinks.forEach(link => {
                link.classList.remove('mobile-active');
            });
            document.body.style.overflow = '';
        }
    });
});

// portada
// Funcionalidad del carrusel automático
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carrusel__slide');
    const indicators = document.querySelectorAll('.indicador');
    let currentSlide = 0;
    let slideInterval;

    // Función para cambiar de slide
    function goToSlide(slideIndex) {
        // Remover clase activa de todos los slides e indicadores
        slides.forEach(slide => slide.classList.remove('carrusel__slide--active'));
        indicators.forEach(indicator => indicator.classList.remove('indicador--active'));
        
        // Añadir clase activa al slide e indicador actual
        slides[slideIndex].classList.add('carrusel__slide--active');
        indicators[slideIndex].classList.add('indicador--active');
        
        currentSlide = slideIndex;
    }

    // Función para ir al siguiente slide
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= slides.length) {
            next = 0;
        }
        goToSlide(next);
    }

    // Iniciar carrusel automático
    function startCarousel() {
        slideInterval = setInterval(nextSlide, 1500); // Cambia cada 1.5 segundos
    }

    // Pausar carrusel cuando el mouse está sobre la portada
    function pauseCarousel() {
        clearInterval(slideInterval);
    }

    // Reanudar carrusel cuando el mouse sale
    function resumeCarousel() {
        startCarousel();
    }

    // Event listeners para los indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            pauseCarousel();
            goToSlide(index);
            setTimeout(resumeCarousel, 5000); // Reanuda después de 5 segundos
        });
    });

    // Pausar/reanudar con hover
    const portada = document.querySelector('.portada');
    portada.addEventListener('mouseenter', pauseCarousel);
    portada.addEventListener('mouseleave', resumeCarousel);

    // Iniciar el carrusel
    startCarousel();

    // Función para el botón (scroll a servicios)
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
});


// quienes somos 
// Animaciones al hacer scroll para la sección Quienes Somos
document.addEventListener('DOMContentLoaded', function() {
    const aboutCards = document.querySelectorAll('.about-card');
    
    // Función para animar las tarjetas cuando son visibles
    function animateOnScroll() {
        aboutCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    // Inicializar opacidad y posición de las tarjetas
    aboutCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Event listener para el scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Ejecutar una vez al cargar la página
    animateOnScroll();
});


// misiom 

// Animaciones para la sección Misión
document.addEventListener('DOMContentLoaded', function() {
    const misionCard = document.querySelector('.mision-card');
    const pillars = document.querySelectorAll('.pillar');
    
    function animateMisionSection() {
        const cardPosition = misionCard.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (cardPosition < screenPosition) {
            misionCard.style.opacity = '1';
            misionCard.style.transform = 'translateY(0)';
            
            // Animación escalonada para los pilares
            pillars.forEach((pillar, index) => {
                setTimeout(() => {
                    pillar.style.opacity = '1';
                    pillar.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    }
    
    // Estado inicial de los elementos
    misionCard.style.opacity = '0';
    misionCard.style.transform = 'translateY(30px)';
    misionCard.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    pillars.forEach(pillar => {
        pillar.style.opacity = '0';
        pillar.style.transform = 'translateY(20px)';
        pillar.style.transition = 'opacity 0.6s ease, transform 0.6s ease, border-color 0.3s ease, background 0.3s ease';
    });
    
    // Event listeners
    window.addEventListener('scroll', animateMisionSection);
    animateMisionSection(); // Ejecutar al cargar
});


//vision

// Animaciones para la sección Visión
document.addEventListener('DOMContentLoaded', function() {
    const visionStatement = document.querySelector('.vision__statement');
    const goalCards = document.querySelectorAll('.goal-card');
    const visionCommitment = document.querySelector('.vision__commitment');
    
    function animateVisionSection() {
        const sectionPosition = visionStatement.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (sectionPosition < screenPosition) {
            // Animación para la declaración
            visionStatement.style.opacity = '1';
            visionStatement.style.transform = 'translateY(0)';
            
            // Animación escalonada para las metas
            goalCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 200);
            });
            
            // Animación para el compromiso
            setTimeout(() => {
                visionCommitment.style.opacity = '1';
                visionCommitment.style.transform = 'translateY(0)';
            }, 600);
        }
    }
    
    // Estado inicial de los elementos
    visionStatement.style.opacity = '0';
    visionStatement.style.transform = 'translateY(30px)';
    visionStatement.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    goalCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, all 0.3s ease';
    });
    
    visionCommitment.style.opacity = '0';
    visionCommitment.style.transform = 'translateY(30px)';
    visionCommitment.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Event listeners
    window.addEventListener('scroll', animateVisionSection);
    animateVisionSection(); // Ejecutar al cargar
});


//nuestros servicios 

// Animaciones para la sección Servicios
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.servicio-card');
    const serviciosNote = document.querySelector('.servicios__note');
    
    function animateServicesSection() {
        const sectionPosition = serviceCards[0].getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (sectionPosition < screenPosition) {
            // Animación escalonada para las tarjetas de servicio
            serviceCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            });
            
            // Animación para la nota final
            setTimeout(() => {
                serviciosNote.style.opacity = '1';
                serviciosNote.style.transform = 'translateY(0)';
            }, 800);
        }
    }
    
    // Estado inicial de los elementos
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, all 0.3s ease';
    });
    
    serviciosNote.style.opacity = '0';
    serviciosNote.style.transform = 'translateY(20px)';
    serviciosNote.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Event listeners
    window.addEventListener('scroll', animateServicesSection);
    animateServicesSection(); // Ejecutar al cargar
    
    // Función para el botón de reserva (ya debería existir de la portada)
    if (typeof scrollToSection === 'undefined') {
        window.scrollToSection = function(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };
    }
});

// galeria 

// Funcionalidad de la galería y lightbox
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.galeria__item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('.lightbox__close');
    const lightboxPrev = document.querySelector('.lightbox__prev');
    const lightboxNext = document.querySelector('.lightbox__next');
    
    let currentImageIndex = 0;
    const images = Array.from(galleryItems);

    // Función para abrir el lightbox
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightbox();
        lightbox.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    // Función para actualizar el lightbox con la imagen actual
    function updateLightbox() {
        const currentItem = images[currentImageIndex];
        const imgSrc = currentItem.querySelector('.galeria__image').src;
        const caption = currentItem.querySelector('.overlay__text').textContent;
        
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = caption;
    }

    // Función para cerrar el lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = ''; // Restaurar scroll
    }

    // Función para navegar a la imagen anterior
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    // Función para navegar a la siguiente imagen
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateLightbox();
    }

    // Event listeners para los items de la galería
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Event listeners para los controles del lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    // Cerrar lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'block') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    prevImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });

    // Animaciones al hacer scroll
    function animateGalleryOnScroll() {
        galleryItems.forEach((item, index) => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (itemPosition < screenPosition) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }

    // Estado inicial de los items
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease, all 0.3s ease';
    });

    // Event listener para el scroll
    window.addEventListener('scroll', animateGalleryOnScroll);
    animateGalleryOnScroll(); // Ejecutar al cargar
}); // <-- ESTA ES LA LLAVE QUE FALTABA


// footer 

// Animaciones para el footer
document.addEventListener('DOMContentLoaded', function() {
    const footerPhrase = document.querySelector('.footer__phrase');
    const socialLinks = document.querySelectorAll('.social__link');
    const infoItems = document.querySelectorAll('.info__item');
    
    function animateFooterOnScroll() {
        const footerPosition = footerPhrase.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.1;
        
        if (footerPosition < screenPosition) {
            // Animación para la frase
            footerPhrase.style.opacity = '1';
            footerPhrase.style.transform = 'translateY(0)';
            
            // Animación escalonada para los iconos sociales
            socialLinks.forEach((link, index) => {
                setTimeout(() => {
                    link.style.opacity = '1';
                    link.style.transform = 'translateY(0) scale(1)';
                }, index * 200);
            });
            
            // Animación para la información
            infoItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 400 + (index * 100));
            });
        }
    }
    
    // Estado inicial de los elementos
    footerPhrase.style.opacity = '0';
    footerPhrase.style.transform = 'translateY(30px)';
    footerPhrase.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    socialLinks.forEach(link => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px) scale(0.8)';
        link.style.transition = 'opacity 0.6s ease, transform 0.6s ease, all 0.3s ease';
    });
    
    infoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Event listener para el scroll
    window.addEventListener('scroll', animateFooterOnScroll);
    animateFooterOnScroll(); // Ejecutar al cargar
    
    // Efecto de aparición suave al cargar la página
    setTimeout(() => {
        document.querySelector('.footer').style.opacity = '1';
    }, 500);
});

// Inicializar opacidad del footer
document.querySelector('.footer').style.opacity = '0';
document.querySelector('.footer').style.transition = 'opacity 0.8s ease';

// boton dinamico de whatsap
// Botón de WhatsApp dinámico
document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    // Número de teléfono y mensaje predefinido
    const phoneNumber = '3028374848'; // Reemplaza con el número real
    const defaultMessage = 'Hola, me interesa conocer más sobre sus servicios de uñas.';
    
    // Función para abrir WhatsApp
    function openWhatsApp() {
        const encodedMessage = encodeURIComponent(defaultMessage);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    }
    
    // Función de animación al hacer click
    function animateClick() {
        whatsappBtn.classList.add('clicked');
        setTimeout(() => {
            whatsappBtn.classList.remove('clicked');
        }, 400);
    }
    
    // Event listeners
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        animateClick();
        
        // Pequeño delay para que se vea la animación antes de abrir WhatsApp
        setTimeout(openWhatsApp, 200);
    });
    
    // Efecto adicional al hacer hover (opcional)
    whatsappBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    whatsappBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});