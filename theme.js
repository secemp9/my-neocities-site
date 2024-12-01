const DEFAULT_THEME = 'light';

// Immediately check and apply theme before anything else loads
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        localStorage.setItem('theme', DEFAULT_THEME);
        document.documentElement.setAttribute('data-theme', DEFAULT_THEME);
    }
})();

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || DEFAULT_THEME;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || DEFAULT_THEME;
    setTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', initializeTheme);

window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        setTheme(e.newValue || DEFAULT_THEME);
    }
});

// Force check theme state periodically
setInterval(() => {
    const currentTheme = localStorage.getItem('theme') || DEFAULT_THEME;
    const htmlTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme !== htmlTheme) {
        setTheme(currentTheme);
    }
}, 1000);
