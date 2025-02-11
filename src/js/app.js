const navbarMobileMenu = document.querySelector("#navbar-mobile-menu");
const navbarMenu = document.querySelector(".navbar-menu");

navbarMobileMenu.addEventListener("click", () => {
    navbarMobileMenu.classList.toggle("is-active")
    navbarMenu.classList.toggle("active")
})

// navbarMobileMenu.classList.add(".active")


