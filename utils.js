// Dark Mode Logic
function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const icon = darkModeToggle.querySelector('i');
    const text = darkModeToggle.querySelector('span');

    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');

    // Update button icon and text
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = '白天模式';
        localStorage.setItem('darkMode', 'true');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = '黑夜模式';
        localStorage.setItem('darkMode', 'false');
    }

    // Re-render Mermaid diagram for dark mode
    if (typeof mermaid !== 'undefined') {
        mermaid.init();
    }
}

// Check for saved dark mode preference or system preference
document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const icon = darkModeToggle.querySelector('i');
    const text = darkModeToggle.querySelector('span');

    // Check if user has previously set dark mode
    const savedDarkMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedDarkMode === 'true' || (!savedDarkMode && prefersDark)) {
        document.body.classList.add('dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        text.textContent = '白天模式';
    } else {
        document.body.classList.remove('dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        text.textContent = '黑夜模式';
    }

    // Initialize Highlight.js
    hljs.highlightAll();
});

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
