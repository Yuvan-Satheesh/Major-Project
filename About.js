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