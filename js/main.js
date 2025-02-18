AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Scroll navigation menu animation
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black/50');
    } else {
        nav.classList.remove('bg-black/50');
    }
});

// Smooth scroll for navigation menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 