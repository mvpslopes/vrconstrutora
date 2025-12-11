// ============================================
// VR CONSTRUTORA - JavaScript
// Interatividade e funcionalidades
// ============================================

// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Smooth Scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

            // Fechar menu mobile se estiver aberto
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        }
    });
});

// Atualizar link ativo na navegação ao fazer scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    let current = '';
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = sectionId || 'home';
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}` || (current === 'home' && href === '#home')) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();

// Header scroll effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Category Navigation - Projects
const categoryItems = document.querySelectorAll('.category-item');
const mainProjectImage = document.getElementById('mainProjectImage');

const projectImages = {
    arquitetura: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop',
    interiores: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
    estrutural: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop',
    planejamento: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=600&fit=crop',
    mep: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=600&fit=crop',
    supervisao: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop'
};

if (categoryItems.length > 0 && mainProjectImage) {
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Get category from data attribute
            const category = item.getAttribute('data-category');
            
            // Update main project image
            if (projectImages[category]) {
                mainProjectImage.style.opacity = '0';
                setTimeout(() => {
                    mainProjectImage.src = projectImages[category];
                    mainProjectImage.style.opacity = '1';
                }, 200);
            }
        });
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message (you can customize this)
        alert('Obrigado pelo seu contato! Entraremos em contato em breve.');
        
        // Reset form
        contactForm.reset();
    });
}

// Scroll animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
const animateElements = document.querySelectorAll('.feature-item, .service-item, .project-card, .benefit-item, .process-step');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Services carousel scroll behavior
const servicesCarousel = document.querySelector('.services-carousel');

if (servicesCarousel) {
    let isDown = false;
    let startX;
    let scrollLeft;

    servicesCarousel.addEventListener('mousedown', (e) => {
        isDown = true;
        servicesCarousel.style.cursor = 'grabbing';
        startX = e.pageX - servicesCarousel.offsetLeft;
        scrollLeft = servicesCarousel.scrollLeft;
    });

    servicesCarousel.addEventListener('mouseleave', () => {
        isDown = false;
        servicesCarousel.style.cursor = 'grab';
    });

    servicesCarousel.addEventListener('mouseup', () => {
        isDown = false;
        servicesCarousel.style.cursor = 'grab';
    });

    servicesCarousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - servicesCarousel.offsetLeft;
        const walk = (x - startX) * 2;
        servicesCarousel.scrollLeft = scrollLeft - walk;
    });
}

// Button click animations
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Hero stats counter animation
const heroStats = document.querySelector('.hero-stats span');
if (heroStats) {
    const targetText = heroStats.textContent;
    const numberMatch = targetText.match(/(\d+)/);
    
    if (numberMatch) {
        const targetNumber = parseInt(numberMatch[1]);
        let currentNumber = 0;
        const increment = targetNumber / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const counter = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counter);
            }
            heroStats.textContent = targetText.replace(/\d+/, Math.floor(currentNumber) + '+');
        }, stepTime);
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav && nav.classList.contains('active')) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    }
});

// Prevent body scroll when mobile menu is open
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

console.log('VR Construtora - Site carregado com sucesso!');

