// document.querySelector("body").style.width = "none";

if (window.outerWidth <= 600) {
  document.querySelector(".header__navigation").style.display = "none";
} else {
  document.querySelector(".header__navigation").style.display = "flex";
}

console.log(window.outerWidth);

document.querySelector("body").style.width.onchange = function () {
  console.log(window.outerWidth);
};
