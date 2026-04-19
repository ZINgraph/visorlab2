const container = document.getElementById("container");
const themes = document.querySelectorAll(".theme");

themes.forEach(theme => {
  theme.addEventListener("click", () => {
    const color = theme.getAttribute("data-color");
    container.style.background = color;
  });
});