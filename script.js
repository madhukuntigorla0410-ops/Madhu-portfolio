// ========================================
// NAVIGATION FUNCTIONALITY
// ========================================

const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Smooth scroll with offset for fixed navbar
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements that should animate on scroll
const revealElements = document.querySelectorAll(`
    .about-content,
    .stat-item,
    .timeline-item,
    .education-card,
    .practice-card,
    .knowledge-item,
    .contact-item
`);

revealElements.forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
});

// ========================================
// TYPING EFFECT FOR HERO SUBTITLE
// ========================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const originalText = heroSubtitle.textContent;
    
    // Delay the typing effect slightly for better UX
    setTimeout(() => {
        typeWriter(heroSubtitle, originalText, 80);
    }, 500);
});

// ========================================
// ANIMATED COUNTERS FOR STATS
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const targetValue = statNumber.textContent;
            
            // Extract number from text (e.g., "2+" -> 2)
            const numericValue = parseInt(targetValue.replace(/\D/g, ''));
            
            if (!isNaN(numericValue)) {
                animateCounter(statNumber, numericValue, 1500);
                
                // Add back the '+' or other suffix after animation
                setTimeout(() => {
                    statNumber.textContent = targetValue;
                }, 1600);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// PARALLAX EFFECT FOR HERO SECTION
// ========================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroOverlay = document.querySelector('.hero-overlay');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
    
    if (heroOverlay && scrolled < window.innerHeight) {
        heroOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ========================================
// CONTACT FORM HANDLING (Formspree)
// ========================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        formStatus.style.display = 'none';
        
        try {
            // Get form action URL (Formspree endpoint)
            const formAction = contactForm.getAttribute('action');
            
            // Check if Formspree is configured
            if (!formAction || formAction.includes('YOUR_FORM_ID')) {
                // Fallback to mailto if Formspree not configured
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    message: document.getElementById('message').value
                };
                
                const subject = encodeURIComponent(`Legal Consultation Inquiry from ${formData.name}`);
                const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}
                `);
                
                const mailtoLink = `mailto:madhukuntigorla0410@gmail.com?subject=${subject}&body=${body}`;
                window.location.href = mailtoLink;
                
                formStatus.textContent = 'Opening your email client...';
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    contactForm.reset();
                }, 3000);
                
                return;
            }
            
            // Submit to Formspree
            const formData = new FormData(contactForm);
            const response = await fetch(formAction, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.textContent = '✓ Thank you! Your message has been sent successfully. I will get back to you soon.';
                formStatus.className = 'form-status success';
                formStatus.style.display = 'block';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.textContent = '✗ Oops! There was a problem sending your message. Please try again or email directly.';
            formStatus.className = 'form-status error';
            formStatus.style.display = 'block';
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            
            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}

// ========================================
// FLOATING ANIMATION FOR ICONS
// ========================================

// Add staggered floating animation to practice and education icons
const floatingIcons = document.querySelectorAll('.practice-icon, .education-icon');

floatingIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.2}s`;
});

// ========================================
// TIMELINE ANIMATION ON SCROLL
// ========================================

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.2}s`;
    timelineObserver.observe(item);
});

// ========================================
// PRACTICE CARDS HOVER EFFECT
// ========================================

const practiceCards = document.querySelectorAll('.practice-card');

practiceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
});

// ========================================
// KNOWLEDGE ITEMS WAVE ANIMATION
// ========================================

const knowledgeItems = document.querySelectorAll('.knowledge-item');

const knowledgeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            knowledgeItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, index * 100);
            });
            knowledgeObserver.disconnect();
        }
    });
}, { threshold: 0.2 });

knowledgeItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    item.style.transition = 'all 0.4s ease';
});

if (document.querySelector('.legal-knowledge')) {
    knowledgeObserver.observe(document.querySelector('.legal-knowledge'));
}

// ========================================
// CURSOR TRAIL EFFECT (Subtle)
// ========================================

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Only create cursor effect on desktop
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(212, 175, 55, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease;
        display: none;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.display = 'block';
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Scale cursor on clickable elements
    const clickableElements = document.querySelectorAll('a, button, .nav-link');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = 'rgba(212, 175, 55, 0.8)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = 'rgba(212, 175, 55, 0.5)';
        });
    });
}

// ========================================
// SCROLL TO TOP BUTTON
// ========================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary-navy), var(--secondary-navy));
    color: var(--gold-accent);
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(10, 31, 68, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) translateY(-3px)';
    this.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
    this.style.boxShadow = '0 4px 16px rgba(10, 31, 68, 0.3)';
});

// ========================================
// LAZY LOADING OPTIMIZATION
// ========================================

// Add fade-in effect to sections as they load
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
        }, index * 100);
    });
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Any heavy scroll calculations can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// CONSOLE SIGNATURE
// ========================================

console.log('%c Kuntigorla Madhu - Legal Portfolio ', 'background: #0a1f44; color: #d4af37; font-size: 14px; padding: 10px;');
console.log('%c Legal Associate | Corporate & Commercial Law ', 'background: #d4af37; color: #0a1f44; font-size: 12px; padding: 5px;');
console.log('%c Contact: madhukuntigorla0410@gmail.com ', 'color: #0a1f44; font-size: 11px;');
