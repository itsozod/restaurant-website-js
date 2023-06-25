function createMenu() {
    const coffeeContainer = document.createElement('div');
    coffeeContainer.classList.add('coffee-container');

    const coffeeCard = document.createElement('div');
    coffeeCard.classList.add('coffee-card');

    const coffeeName = document.createElement('h2');
    coffeeName.classList.add('coffee-name');
    coffeeName.textContent = 'Black';

    coffeeCard.appendChild(coffeeName);

    coffeeContainer.appendChild(coffeeCard);
    
    return coffeeContainer;
}

function loadMenu() {
    const main = document.querySelector('#main');
    const coffeeContainer = createMenu();
    main.appendChild(coffeeContainer);
}
export default loadMenu;