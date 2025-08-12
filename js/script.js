const headerEl = document.querySelector(".header");
const buttonEL = document.querySelector(".header__mobile-nav");

buttonEL.addEventListener("click", function () {
  headerEl.classList.toggle("header-open");
});
