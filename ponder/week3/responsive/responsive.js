const menu = document.querySelector('nav');
const button = document.querySelector('.menu-btn');

button.addEventListener('click', function() {
  menu.classList.toggle('hide');  
  button.classList.toggle('change');
})