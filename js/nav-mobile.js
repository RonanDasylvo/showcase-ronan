const nav = document.querySelector(".nav-mobile");

function setNav() {
    if (nav.classList.contains("nav-closed")) {
        nav.classList.replace("nav-closed", "nav-open");
    }
    else {
        nav.classList.replace("nav-open", "nav-closed");
    }
}