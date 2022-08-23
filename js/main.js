var ElOpenBtn = document.querySelector(".site-header__burger-btn");
var ElCloseBtn = document.querySelector(".site-header__reset-btn");
var siteNavbar = document.querySelector(".site-header__navbar");

ElOpenBtn.addEventListener("click", function () {
  siteNavbar.classList.add("shownav");
});
ElCloseBtn.addEventListener("click", function () {
  siteNavbar.classList.remove("shownav");
});

