const mainElement = document.querySelector("main.conteudo");
const headerElement = document.querySelector("header");
const sectionElements = document.querySelectorAll("section");
const lightModeButton = document.querySelector("#light-mode-button");

let isDarkMode = false;

function setColors(isDark, elements) {
  const backgroundColor = isDark ? "#171717" : "#f5f5f5";
  const textColor = isDark ? "#f5f5f5" : "#171717";

  elements.forEach((element) => {
    element.style.backgroundColor = backgroundColor;
    element.style.color = textColor;

    const h2Elements = element.querySelectorAll("h2");
    h2Elements.forEach((h2) => {
      h2.style.color = textColor;
    });
  });

  if (isDark) {
    lightModeButton.textContent = "☀ | Light Mode";
  } else {
    lightModeButton.textContent = "☾ | Dark Mode";
  }
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  setColors(isDarkMode, [mainElement, headerElement, ...sectionElements]);
}

lightModeButton.addEventListener("click", toggleDarkMode);
