import loadPage from "./initial-page";
import loadHome from "./home";
import loadMenu from "./menu";

// function for showing tabs after clicking on the buttons
function showTabs() {
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

// function for showing the particular tab after the particular button was clicked
function showPage() {
    loadPage();
    loadHome();
    loadMenu();
    showTabs();
}
showPage();