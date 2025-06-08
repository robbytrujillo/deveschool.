const hamburger = document.querySelector(".ri-menu-line");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
});

const scrollUp = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollUp.classList.add("scroll-active");
    } else {
        scrollUp.classList.remove("scroll-active");
    }
});