const findNav = () => document.querySelector(".js-c-nav");
const hasElement = nav => nav;

function createBackground() {
    const background = document.createElement("div");
    background.classList.add("c-nav__background", "js-c-nav__background");
    background.setAttribute("onclick", "hideNav();");
    document.body.appendChild(background);
}

function hideNav() {
    const nav = findNav();
    if (hasElement(nav))
        nav.style.display = "none";

    removeBackground();
}

function removeBackground() {
    const background = document.querySelector(".js-c-nav__background");
    if (hasElement(background))
        background.remove();
}

function showNav() {
    const nav = findNav();
    if (hasElement(nav))
        nav.style.display = "flex";
    createBackground();
}