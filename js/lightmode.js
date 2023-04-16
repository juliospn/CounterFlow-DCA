const mainElement = document.querySelector("main.conteudo");
const sectionElements = mainElement.querySelectorAll("section");
const lightModeButton = document.querySelector("#light-mode-button");

let isDarkMode = false;

function setColors(isDark, sections) {
  if (isDark) {
    mainElement.style.backgroundColor = "#171717";
    mainElement.style.color = "#f5f5f5";
    sections.forEach((section) => {
      section.style.backgroundColor = "#262626";
      section.style.color = "#f5f5f5";
      const h2Elements = section.querySelectorAll("h2");
      h2Elements.forEach((h2) => {
        h2.style.color = "#ddd";
      });
    });
    lightModeButton.textContent = "☀ | Light Mode";
  } else {
    mainElement.style.backgroundColor = "#f5f5f5";
    mainElement.style.color = "#171717";
    sections.forEach((section) => {
      section.style.backgroundColor = "#e6e6e6";
      section.style.color = "#171717";
      const h2Elements = section.querySelectorAll("h2");
      h2Elements.forEach((h2) => {
        h2.style.color = "#171717";
      });
    });
    lightModeButton.textContent = "☾ | Dark Mode";
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  const sectionsToChange = mainElement.querySelectorAll("section:nth-of-type(n+2):not(:last-child)");
  setColors(isDarkMode, sectionsToChange);
}

lightModeButton.addEventListener("click", toggleDarkMode);
