const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');


menuIcon.addEventListener('click', function() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});



menuIcon.addEventListener('click', function() {
  menu.classList.toggle('active');
});

