// Define default theme explicitly
const DEFAULT_THEME = 'light';

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
    // Get theme from localStorage or use default
    const savedTheme = localStorage.getItem('theme');
    const themeToSet = savedTheme || DEFAULT_THEME;
    
    // Always ensure there's a theme set in localStorage
    if (!savedTheme) {
        localStorage.setItem('theme', DEFAULT_THEME);
    }
    
    // Apply theme immediately
    document.documentElement.setAttribute('data-theme', themeToSet);
    updateThemeIcon(themeToSet);
}

// Run initialization as early as possible
initializeTheme();

// Ensure theme is properly set after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || DEFAULT_THEME;
    setTheme(currentTheme);
});

// Add event listener for storage changes (helps with multiple tabs)
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        setTheme(e.newValue || DEFAULT_THEME);
    }
});
