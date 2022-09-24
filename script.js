let checkBox = document.querySelector(".header__mobile_checkbox");
let mobile = document.querySelector(".mobile");

checkBox.addEventListener("click", () => {
  checkBox.checked == true
    ? (mobile.style.display = "block")
    : (mobile.style.display = "none");
});
