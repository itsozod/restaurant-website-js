function createContact() {
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("location-container");

  const locationIntro = document.createElement("h1");
  locationIntro.classList.add("loc-intro");
  locationIntro.textContent = "Location";

  locationContainer.appendChild(locationIntro);

  const dushanbe = document.createElement("h4");
  dushanbe.classList.add("dushanbe");
  dushanbe.textContent = "Dushanbe, Tajikistan 📍";

  locationContainer.appendChild(dushanbe);

  const dushanbeContainer = document.createElement("div");
  dushanbeContainer.classList.add("dushanbe-container");

  const dushanbeImage = document.createElement("img");
  dushanbeImage.classList.add("dushanbe-img");
  dushanbeImage.src = "./images/dushanbe.png";

  dushanbeContainer.appendChild(dushanbeImage);
  locationContainer.appendChild(dushanbeContainer);
  return locationContainer;
}

function loadContact() {
  const main = document.querySelector("#main");
  const locationContainer = createContact();
  main.appendChild(locationContainer);
}
export default loadContact;
