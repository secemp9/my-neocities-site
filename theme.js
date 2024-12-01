const DEFAULT_THEME = 'light';

function setCookie(name, value) {
    document.cookie = `${name}=${value};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Immediately check and apply theme before anything else loads
(function() {
    const savedTheme = getCookie('theme') || sessionStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        setCookie('theme', DEFAULT_THEME);
        sessionStorage.setItem('theme', DEFAULT_THEME);
        document.documentElement.setAttribute('data-theme', DEFAULT_THEME);
    }
})();

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    sessionStorage.setItem('theme', theme);
    setCookie('theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const currentTheme = getCookie('theme') || sessionStorage.getItem('theme') || DEFAULT_THEME;
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
    const savedTheme = getCookie('theme') || sessionStorage.getItem('theme') || DEFAULT_THEME;
    setTheme(savedTheme);
}

document.addEventListener('DOMContentLoaded', initializeTheme);


// Ensure theme is set correctly on each page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = getCookie('theme') || sessionStorage.getItem('theme') || DEFAULT_THEME;
    setTheme(savedTheme);
});

// Force check theme state periodically
setInterval(() => {
    const currentTheme = sessionStorage.getItem('theme') || DEFAULT_THEME;
    const htmlTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme !== htmlTheme) {
        setTheme(currentTheme);
    }
}, 1000);
