import loadPage from "./initial-page";
import loadHome from "./home";

showPage();

function showMenus() {
    const homeButton = document.querySelector("#button-home");
    const menuButton = document.querySelector("#button-menu");
    const contactButton = document.querySelector("#button-contact");
}

function showPage() {
    loadPage();
    loadHome();
}