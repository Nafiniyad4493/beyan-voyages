document.addEventListener('DOMContentLoaded', () => {

    /* --- Navbar Scroll Effect --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Mobile Menu Toggle (Basic implementation) --- */
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileBtn.addEventListener('click', () => {
        // In a full implementation, you'd toggle a class to show/hide a mobile menu.
        // For now, since links are hidden on mobile via CSS, we'd add logic here.
        alert('Mobile menu clicked! (To be expanded based on design specs)');
    });

    /* --- Hero Background Slider --- */
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 6 seconds
    setInterval(nextSlide, 6000);

    /* --- Scroll Reveal Animations --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    /* --- Smooth Scrolling for Navigation Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* --- Form Submission Handler --- */
    const consultationForm = document.getElementById('consultationForm');
    if(consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you'd gather data and send via fetch/axios
            alert('Thank you! Your luxury travel inquiry has been received. We will contact you shortly.');
            consultationForm.reset();
        });
    }

    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if(whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            // Dummy logic
            alert('Redirecting to WhatsApp for consultation...');
        });
    }

});
