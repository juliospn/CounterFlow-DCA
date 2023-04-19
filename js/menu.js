const body = document.querySelector('body');
const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
  botaoMenu.classList.toggle('ativo');
  menu.classList.toggle('menu-lateral--ativo');
  body.classList.toggle('body--menu-lateral-ativo');
});

const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.querySelectorAll('.menu-topics a');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#menu-lateral').classList.remove('menu-lateral-ativo');
    menuToggle.classList.remove('is-active');
  });
});

const menu2 = document.querySelector('#menu-lateral');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('aberto');
  menu2.classList.toggle('menu-lateral--ativo');
});
