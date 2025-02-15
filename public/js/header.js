// Bayrak ile dil değiştirmek için.
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;

            const trFlag = document.getElementById('trFlag');
            const enFlag = document.getElementById('enFlag');

            function changeLanguage(lang) {
                let currentPath = window.location.pathname;
                let newPath = currentPath.replace('/en/', '/tr/').replace('/tr/', '/en/');
                if (lang === 'tr') {
                    if (!currentPath.includes('/tr/')) {
                        newPath = '/pages/tr' + currentPath.replace('/pages/en', '');
                    }
                    trFlag.style.display = 'none';
                    enFlag.style.display = 'block';
                    localStorage.setItem('selectedFlag', 'tr');
                } else if (lang === 'en') {
                    if (!currentPath.includes('/en/')) {
                        newPath = '/pages/en' + currentPath.replace('/pages/tr', '');
                    }
                    trFlag.style.display = 'block';
                    enFlag.style.display = 'none';
                    localStorage.setItem('selectedFlag', 'en');
                }
                window.location.href = newPath;
            }

            trFlag.onclick = () => changeLanguage('tr');
            enFlag.onclick = () => changeLanguage('en');

            const selectedFlag = localStorage.getItem('selectedFlag');
            if (selectedFlag === 'tr') {
                trFlag.style.display = 'none';
                enFlag.style.display = 'block';
            } else if (selectedFlag === 'en') {
                trFlag.style.display = 'block';
                enFlag.style.display = 'none';
            } else {
                trFlag.style.display = 'none';
                enFlag.style.display = 'block';
            }
        });
});
// Hamburger menü için.
function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth <= 768) {
        if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            menu.classList.add('closed');
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        } else {
            menu.style.display = 'flex';
            menu.classList.remove('closed');
            menu.classList.add('open');
        }
    }
}
// Hamburger menü açılma-kapanma animasyonu için.
window.addEventListener('resize', () => {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 768) {
        menu.style.display = 'flex';
        menu.classList.remove('open', 'closed');
    } else if (!menu.classList.contains('open')) {
        menu.style.display = 'none';
    }
});
