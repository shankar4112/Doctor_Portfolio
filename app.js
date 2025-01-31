document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-link');
    const body = document.body;

    // Toggle menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });

    // Handle screen resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            body.style.overflow = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-slides');
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }

    function goToSlide(index) {
        currentSlide = index;
        carousel.style.transform = `translateX(-${currentSlide * 20}%)`;
        updateDots();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    // Auto-slide every 2 seconds
    setInterval(nextSlide, 3000);
});
document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-link');

menuToggle.addEventListener('click', function() {
menuToggle.classList.toggle('active');
navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
}
});

// Close menu when clicking a link
const links = document.querySelectorAll('.nav-link a');
links.forEach(link => {
link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
});
});
});
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle-btn');
    const root = document.documentElement;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add smooth transition for theme change
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    });
});

// Enhance existing hamburger menu code with theme support
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-link');
const body = document.body;

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});
<<<<<<< HEAD

// Character counter for textarea
document.querySelector('textarea').addEventListener('input', function() {
    const count = this.value.length;
    document.querySelector('.char-count').textContent = `${count} / 180`;
});

// Form submission handler
function submitForm(e) {
    e.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSeEDpA-Pu1fUupN4md81unKwpEqGlyhzC2uS7YmQAUntJbUFQ/formResponse', {
        method: 'POST',
        mode: 'no-cors', // This is important
        body: formData
    })
    .then(() => {
        alert('Thank you! Your message has been sent.');
        form.reset();
        document.querySelector('.char-count').textContent = '0 / 180';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message. Please try again.');
    });
}
=======
>>>>>>> 3cc9382 (Initial commit)
