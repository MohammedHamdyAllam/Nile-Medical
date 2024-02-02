// Get theme element from HTML
let themeMode = document.getElementById('theme-mode');

// Write theme script
window.onload = function() {
    if(localStorage.getItem('D')) {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
        themeMode.className = 'fa-solid fa-moon theme-mode';
        localStorage.setItem('D', 'dark');
        localStorage.removeItem('L');
        theme = 1;
    }
    else if(localStorage.getItem('L')) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        themeMode.className = 'fa-solid fa-sun theme-mode';
        localStorage.setItem('L', 'light');
        localStorage.removeItem('D');
        theme = 0;
    }
}

let theme = 0;
themeMode.onclick = function() {
    if(theme === 0) {
        document.body.style.backgroundColor = '#222';
        document.body.style.color = '#fff';
        themeMode.className = 'fa-solid fa-moon theme-mode';
        localStorage.setItem('D', 'dark');
        localStorage.removeItem('L');
        theme = 1;
    }
    else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        themeMode.className = 'fa-solid fa-sun theme-mode';
        localStorage.setItem('L', 'light');
        localStorage.removeItem('D');
        theme = 0;
    }
}