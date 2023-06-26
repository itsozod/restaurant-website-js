// function for creating header
function createHeader(id, text, imagePath) {
  const header = document.createElement("header");
  header.setAttribute("id", id);

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");

  const logo = document.createElement("h1");
  logo.classList.add("welcome-logo");
  logo.textContent = text;

  const coffeeImage = document.createElement("img");
  coffeeImage.src = imagePath;
  coffeeImage.classList.add("coffee-img");

  headerContainer.appendChild(logo);
  headerContainer.appendChild(coffeeImage);

  header.appendChild(headerContainer);

  const navbar = createNavbar();
  header.appendChild(navbar);
  return header;
}

// function for creating nav and buttons for switching tabs
function createNavbar() {
  const navbar = document.createElement("nav");
  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "button-home");
  homeButton.textContent = "Home";
  homeButton.classList.add("active");
  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "button-menu");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.setAttribute("id", "button-contact");
  contactButton.textContent = "Contact";

  homeButton.addEventListener("click", () => {
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
  });

  menuButton.addEventListener("click", () => {
    homeButton.classList.remove("active");
    menuButton.classList.add("active");
    contactButton.classList.remove("active");
  });

  contactButton.addEventListener("click", () => {
    contactButton.classList.add("active");
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
  });
  navbar.appendChild(homeButton);
  navbar.appendChild(menuButton);
  navbar.appendChild(contactButton);
  return navbar;
}
// function for creating main
function createMain(id) {
  const main = document.createElement("main");
  main.setAttribute("id", id);
  return main;
}
// function for creating footer and link for github page
function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerSpan = document.createElement("span");

  const footerPara = document.createElement("p");
  footerPara.textContent = `Copyright © ${(footerSpan.textContent =
    new Date().getFullYear())} itsozod`;

  const footerLink = document.createElement("a");
  footerLink.href = "https://github.com/itsozod";
  footerLink.target = "_blank";

  const icon = document.createElement("i");
  icon.classList.add("fab", "fa-github");

  footerLink.appendChild(icon);

  footer.appendChild(footerPara);
  footer.appendChild(footerLink);
  return footer;
}

// adding header, nav, buttons, main and footer to the root (content) of the page and loading them
function loadPage() {
  const content = document.querySelector("#content");

  const header = createHeader("header", "Coffeeland", "./images/coffee.png");
  content.appendChild(header);

  const main = createMain("main");
  content.appendChild(main);

  const footer = createFooter();
  content.appendChild(footer);
}

export default loadPage;
