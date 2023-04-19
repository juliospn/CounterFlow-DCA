const body = document.querySelector('body');
const menuButton = document.querySelector('#menu-toggle');
const menuLateral = document.querySelector('#menu-lateral');
const menuLinks = document.querySelectorAll('.menu-topics a');

let isOpen = false;

function closeMenu() {
  body.classList.remove('body--menu-lateral-ativo');
  menuLateral.classList.remove('menu-lateral--ativo');
  menuButton.classList.remove('is-active');
  menuButton.setAttribute('aria-expanded', 'false');
  isOpen = false;
}

menuButton.addEventListener('click', function () {
  isOpen = !isOpen;
  body.classList.toggle('body--menu-lateral-ativo', isOpen);
  menuLateral.classList.toggle('menu-lateral--ativo', isOpen);
  this.classList.toggle('is-active', isOpen);
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

function closeMenuOnScroll() {
  if (isOpen) {
    closeMenu();
  }
}

document.addEventListener('scroll', closeMenuOnScroll);
