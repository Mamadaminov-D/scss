let elCloseBtn = document.querySelector(".site-header__menu")
let elNav = document.querySelector(".nav")
let elToggleBtn = document.querySelector(".toggle__btn")

elCloseBtn.addEventListener("click", () => {
  elNav.classList.toggle("open")
})

elToggleBtn.addEventListener("click", ()=>{
  elToggleBtn.classList.toggle('left')
})