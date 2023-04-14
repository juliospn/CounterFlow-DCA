const mainElement = document.querySelector("main.conteudo");
const sectionElements = mainElement.querySelectorAll("section");
const lightModeButton = document.querySelector("#light-mode-button");

let isDarkMode = false;

function setColors(isDark) {
  if (isDark) {
    mainElement.style.backgroundColor = "#171717";
    mainElement.style.color = "#f5f5f5";
    sectionElements.forEach((section) => {
      section.style.backgroundColor = "#262626";
      section.style.color = "#f5f5f5";
    });
    lightModeButton.textContent = "☀ | Light Mode";
  } else {
    mainElement.style.backgroundColor = "#f5f5f5";
    mainElement.style.color = "#171717";
    sectionElements.forEach((section) => {
      section.style.backgroundColor = "#e6e6e6";
      section.style.color = "#171717";
    });
    lightModeButton.textContent = "☾ | Dark Mode";
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  setColors(isDarkMode);
}

lightModeButton.addEventListener("click", toggleDarkMode);
