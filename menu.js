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
