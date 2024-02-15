const close = document.getElementById("close");
const navbar = document.getElementsByClassName("navbar-nav");
const nav = document.getElementsByClassName("nav-item");
const navlink = document.getElementsByClassName("nav-link")
if (close) {
    close.addEventListener('click', () => {
        navlink.classList.remove("active");
    })
}