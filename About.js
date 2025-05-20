// Scroll animation for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1
});

const hiddenElements = document.querySelectorAll('.animate');
hiddenElements.forEach(el => observer.observe(el));

// FAQ Accordion functionality
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.classList.toggle('active');
        answer.classList.toggle('show');
        
        // Close other open FAQs
        faqQuestions.forEach(q => {
            if (q !== question && q.classList.contains('active')) {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            }
        });
    });
});

// Animate numbers in stats section
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const duration = 2000;
    const targetValues = [99, 3, 70, 24]; // Updated to match your numbers
    
    statNumbers.forEach((stat, index) => {
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const value = progress * targetValues[index];
            
            if (index === 3) { // For 24/7 stat
                stat.textContent = `${Math.floor(value)}/7`;
            } else {
                stat.textContent = Math.floor(value);
            }
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    });
}

// Trigger stats animation when section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, {threshold: 0.5});

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    });
});
// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});