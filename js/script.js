window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('darken', window.scrollY > 50);
});