function createHeader(id, text, imagePath) {
    const header = document.createElement('header');
    header.setAttribute('id', id);

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const logo = document.createElement('h1');
    logo.classList.add('welcome-logo');
    logo.textContent = text;

    const coffeeImage = document.createElement('img');
    coffeeImage.src = imagePath;
    coffeeImage.classList.add('coffee-img');

    headerContainer.appendChild(logo);
    headerContainer.appendChild(coffeeImage);

    header.appendChild(headerContainer);
    return header;
}

function loadPage() {
    const content = document.querySelector('#content');

    const header = createHeader('header', 'Coffeeland', './images/coffee.png');
    content.appendChild(header);
}

export default loadPage;