let elCloseBtn = document.querySelector(".site-header__menu")
let elNav = document.querySelector(".nav")

elCloseBtn.addEventListener("click", () => {
  elNav.classList.toggle("open")
})