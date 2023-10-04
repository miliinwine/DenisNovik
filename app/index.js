const openButton = document.querySelector(".header__button")
const closeButton = document.querySelector(".mobile__menu__close")
const mobileMenu = document.querySelector(".mobile__menu")

function openMenu(){
openButton.style.display = "none"
mobileMenu.style.display = "flex"
}
function closeMenu(){
openButton.style.display = "block"
mobileMenu.style.display = "none"
}

openButton.addEventListener("click", openMenu)
closeButton.addEventListener("click", closeMenu)