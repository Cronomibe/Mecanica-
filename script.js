document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileBtn.querySelector('i').classList.toggle('fa-bars');
        mobileBtn.querySelector('i').classList.toggle('fa-xmark');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.add('fa-bars');
            mobileBtn.querySelector('i').classList.remove('fa-xmark');
        });
    });

    // Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(15, 15, 15, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'rgba(15, 15, 15, 0.9)';
        }
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .about-text, .section-header');
    animatedElements.forEach(el => {
        el.style.opacity = '0'; // Initial state
        observer.observe(el);
    });

    // Add animation class to elements when they come into view
    // Note: The CSS for .fade-in-up handles the actual animation
});
