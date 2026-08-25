// Mobile menu toggle
const mobileMenuButton = document.getElementById('menu-btn');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    });
}

// Section fade-in system
function initializeSectionFadeIn() {
    const sections = document.querySelectorAll('section[data-animate]');
    if (sections.length === 0) return;

    if (!('IntersectionObserver' in window)) {
        sections.forEach(section => section.classList.add('fade-in-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => observer.observe(section));
}

// The script may be loaded before or after DOMContentLoaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSectionFadeIn, { once: true });
} else {
    initializeSectionFadeIn();
}
