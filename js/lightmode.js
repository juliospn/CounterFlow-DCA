const mainElement = document.querySelector("main.conteudo");
const headerElement = document.querySelector("header");
const sectionElements = document.querySelectorAll("section");
const lateralMenuElement = document.querySelector(".menu-lateral");
const lightModeButton = document.querySelector("#light-mode-button");

let isDarkMode = false;

function setColors(isDark, elements) {
  const backgroundColor = isDark ? "#171717" : "#ffffff";
  const firstSection = elements[0];

  elements.forEach((element, index) => {
    element.style.backgroundColor = backgroundColor;

    if (element !== headerElement) {
      const textColor = isDark ? "#f5f5f5" : "#171717";
      element.style.color = textColor;

      const h2Elements = element.querySelectorAll("h2");
      h2Elements.forEach((h2) => {
        h2.style.color = textColor;
      });
    }

    if (index >= 1 && index % 2 !== 0) {
      const darkerBackgroundColor = isDark ? "#101010" : "#E6E6FA";
      element.style.backgroundColor = darkerBackgroundColor;
    }
  });

  // Set header background color as the same as the first section
  if (firstSection) {
    const firstSectionBgColor = getComputedStyle(firstSection).backgroundColor;
    headerElement.style.backgroundColor = firstSectionBgColor;
  }

  // Apply specific background to lateral menu
  const lateralMenuBackground = isDark
    ? "linear-gradient(to right, #000000, #151417 90%)"
    : "";
  lateralMenuElement.style.backgroundImage = lateralMenuBackground;

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