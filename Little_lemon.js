
const Menu = document.querySelector('#mobile-menu');
const Mobilebar = document.querySelector('.menu_container');

Menu.addEventListener('click', function(){
    Menu.classList.toggle('is-active');
    Mobilebar.classList.toggle('active');
})