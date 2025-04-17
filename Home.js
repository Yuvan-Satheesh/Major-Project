// Auto slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, slideInterval);

// Animate on scroll
const animatedElements = document.querySelectorAll('.animate');

const animateOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            el.classList.add('show');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
