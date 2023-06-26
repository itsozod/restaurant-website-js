import loadPage from "./initial-page";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// function for showing tabs after clicking on the buttons
function showTabs() {
  const homeButton = document.querySelector("#button-home");
  const menuButton = document.querySelector("#button-menu");
  const contactButton = document.querySelector("#button-contact");
  const welcomeContainer = document.querySelector(".welcome-container");
  const coffeeContainer = document.querySelector(".coffee-container");
  const locationContainer = document.querySelector(".location-container");

  homeButton.addEventListener("click", () => {
    welcomeContainer.style.display = "flex";
    coffeeContainer.style.display = "none";
    locationContainer.style.display = "none";
  });

  menuButton.addEventListener("click", () => {
    coffeeContainer.style.display = "flex";
    welcomeContainer.style.display = "none";
    locationContainer.style.display = "none";
  });

  contactButton.addEventListener("click", () => {
    locationContainer.style.display = "flex";
    welcomeContainer.style.display = "none";
    coffeeContainer.style.display = "none";
  });
}

// function for showing the particular tab after the particular button was clicked
function showPage() {
  loadPage();
  loadHome();
  loadMenu();
  loadContact();
  showTabs();
}
showPage();
