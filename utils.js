// Mobile Menu Logic
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (menu.classList.contains('hidden-menu')) {
        // Open
        menu.classList.remove('hidden-menu');
        menu.classList.add('visible-menu');
        overlay.classList.remove('hidden');
    } else {
        // Close
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    menu.classList.remove('visible-menu');
    menu.classList.add('hidden-menu');
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 100);
}

// Initialize Highlight.js
document.addEventListener('DOMContentLoaded', function() {
    hljs.highlightAll();
});
