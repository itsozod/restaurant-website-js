import loadPage from "./initial-page";
import loadHome from "./home";
import loadMenu from "./menu";

showPage();

function showMenus() {
const homeButton = document.querySelector("#button-home");
const menuButton = document.querySelector("#button-menu");
// const contactButton = document.querySelector("#button-contact");
const welcomeContainer = document.querySelector(".welcome-container");
const coffeeContainer = document.querySelector(".coffee-container");

    homeButton.addEventListener("click", () => {
        welcomeContainer.style.display = "flex";
        coffeeContainer.style.display = "none";
        // loadHome();
    });

    menuButton.addEventListener("click", () => {
        welcomeContainer.style.display = "none";
        coffeeContainer.style.display = "flex";
        // loadMenu();
    });
    
}

function showPage() {
    loadPage();
    loadHome();
    showMenus();
    loadMenu();
}