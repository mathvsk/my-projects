const clickButton = document.querySelector(".switch");
const theme = document.querySelector(".theme");

clickButton.addEventListener("click", () => {
  theme.classList.toggle("light")
});