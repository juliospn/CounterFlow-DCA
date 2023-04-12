const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');

hamburger.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
});

window.addEventListener('resize', function() {
  if (window.innerWidth < 600) {
    document.querySelector('.hamburger').style.display = 'block';
    document.querySelector('.menu-overlay').style.display = 'block';
  } else {
    document.querySelector('.hamburger').style.display = 'none';
    document.querySelector('.menu-overlay').style.display = 'none';
    document.querySelector('.menu-lateral').classList.remove('active');
  }
});

const menuHamburgerButton = document.getElementById("menu-hamburger-button");
const menuLateral = document.getElementById("menu-lateral");

menuHamburgerButton.addEventListener("click", function() {
    menuLateral.classList.toggle("active");
});