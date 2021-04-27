
let isToggled = document.querySelector('.toggle');
let sidebar = document.querySelector('.sidebar');
let main = document.querySelector('.main');

isToggled.addEventListener('click', toggleMenu);


function toggleMenu(){
    isToggled.classList.toggle('active');
    sidebar.classList.toggle('active');
    main.classList.toggle('active');
}
