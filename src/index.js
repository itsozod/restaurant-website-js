import loadPage from "./initial-page";
import loadHome from "./home";

showPage();

function showMenus() {
    const homeButton = document.querySelector("#button-home");
    const menuButton = document.querySelector("#button-menu");
    const contactButton = document.querySelector("#button-contact");
    const welcomeContainer = document.querySelector(".welcome-container");

    homeButton.addEventListener("click", () => {
        welcomeContainer.style.display = "flex";
        loadHome();
    });

    menuButton.addEventListener("click", () => {
        welcomeContainer.style.display = "none";
    });
    
}

function showPage() {
    loadPage();
    loadHome();
    showMenus();
}