const toggle = document.getElementById('toggleTheme');

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});
