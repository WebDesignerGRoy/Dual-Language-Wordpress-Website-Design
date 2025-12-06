// Navigation scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
const sections = document.querySelectorAll('section > .container');
sections.forEach(section => {
    observer.observe(section);
});

// Video play button interaction
const videoContainers = document.querySelectorAll('.video-container');
videoContainers.forEach(container => {
    container.addEventListener('click', () => {
        alert('Video player would open here. In a production site, this would trigger a video modal or embedded player.');
    });
});

// Gallery image interaction
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        alert(`Gallery lightbox would open here for image ${index + 1}. In a production site, this would show a full-screen image viewer.`);
    });
});

// Contact button interactions
const contactButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
contactButtons.forEach(button => {
    if (button.textContent.includes('Contact')) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Contact form would open here. In a production site, this would show a contact form or redirect to a contact page.');
        });
    }
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.5;
    
    if (hero) {
        hero.style.backgroundPositionY = rate + 'px';
    }
});

console.log('Bonsai website loaded successfully!');
