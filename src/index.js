import loadPage from "./initial-page";
import loadHome from "./home";
import loadMenu from "./menu";

function showMenus() {
const homeButton = document.querySelector("#button-home");
const menuButton = document.querySelector("#button-menu");
const welcomeContainer = document.querySelector(".welcome-container");
const coffeeContainer = document.querySelector(".coffee-container");

    homeButton.addEventListener("click", () => {
        welcomeContainer.style.display = "flex";
        coffeeContainer.style.display = "none";
    });

    menuButton.addEventListener("click", () => {
        welcomeContainer.style.display = "none";
        coffeeContainer.style.display = "flex";
    });
    
}

function showPage() {
    loadPage();
    loadHome();
    loadMenu();
    showMenus();
}
showPage();