const chatGpt = document.querySelector('#chat-gpt');
const text = chatGpt.textContent;
chatGpt.textContent = '';

let index = 0;
function escrever() {
  chatGpt.textContent += text[index];
  index++;
  if (index > text.length - 1) {
    clearInterval(intervalo);
  }
}

const intervalo = setInterval(escrever, 45);

window.addEventListener('scroll', function() {
  const navLinks = document.querySelectorAll('nav ul li');
  const sections = document.querySelectorAll('section');
  let currentSectionIndex = 0;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      currentSectionIndex = i;
    } else {
      break;
    }
  }
  navLinks.forEach(link => link.classList.remove('active'));
  const currentNavLink = navLinks[currentSectionIndex];
  currentNavLink.classList.add('active');
});
