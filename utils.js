// Dark Mode Logic
function toggleDarkMode() {
    try {
        const body = document.body;
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (!darkModeToggle) {
            console.error('Dark mode toggle button not found');
            return;
        }

        const icon = darkModeToggle.querySelector('i');
        const text = darkModeToggle.querySelector('span');
        if (!icon || !text) {
            console.error('Dark mode toggle button elements not found');
            return;
        }

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
            // 使用 Mermaid 10.x 的 API 重新渲染
            if (mermaid.contentLoaded) {
                mermaid.contentLoaded();
            } else if (mermaid.init) {
                mermaid.init();
            } else {
                console.warn('Mermaid render method not found');
            }
        }
    } catch (error) {
        console.error('Error toggling dark mode:', error);
    }
}

// Check for saved dark mode preference or system preference
document.addEventListener('DOMContentLoaded', function() {
    try {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (!darkModeToggle) {
            console.error('Dark mode toggle button not found');
            return;
        }

        const icon = darkModeToggle.querySelector('i');
        const text = darkModeToggle.querySelector('span');
        if (!icon || !text) {
            console.error('Dark mode toggle button elements not found');
            return;
        }

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
        if (typeof hljs !== 'undefined') {
            hljs.highlightAll();
        } else {
            console.warn('Highlight.js not found');
        }
    } catch (error) {
        console.error('Error initializing dark mode:', error);
    }
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

