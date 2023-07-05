const hamButton = document.querySelector('#hamButton');
const nav = document.querySelector('.navigation');
const br = document.querySelector('#menu-fix');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('responsive');
});