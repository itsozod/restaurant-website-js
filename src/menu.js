function createMenu() {
    const coffeeContainer = document.createElement('div');
    coffeeContainer.classList.add('coffee-container');
  
    // first coffee-card
    const coffeeCard = document.createElement('div');
    coffeeCard.classList.add('coffee-card');
  
    const coffeeName = document.createElement('h2');
    coffeeName.classList.add('coffee-name');
    coffeeName.textContent = 'Black Coffee';
  
    coffeeCard.appendChild(coffeeName);

    const coffee = document.createElement('img');
    coffee.classList.add('coffee');
    coffee.src = './images/black coffee.jpg';

    coffeeCard.appendChild(coffee);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = '$2.70';

    coffeeCard.appendChild(price);

    // second coffee-card
    const coffeeCard1 = document.createElement('div');
    coffeeCard1.classList.add('coffee-card');

    const coffeeName1 = document.createElement('h2');
    coffeeName1.classList.add('coffee-name');
    coffeeName1.textContent = 'Latte';
  
    coffeeCard1.appendChild(coffeeName1);

    const coffee1 = document.createElement('img');
    coffee1.classList.add('coffee');
    coffee1.src = './images/latte coffee.jpg';

    coffeeCard1.appendChild(coffee1);

    const price1 = document.createElement('p');
    price1.classList.add('price');
    price1.textContent = '$4.16';

    coffeeCard1.appendChild(price1);

        // third coffee-card
        const coffeeCard2 = document.createElement('div');
        coffeeCard2.classList.add('coffee-card');
    
        const coffeeName2 = document.createElement('h2');
        coffeeName2.classList.add('coffee-name');
        coffeeName2.textContent = 'Cappuccino';
      
        coffeeCard2.appendChild(coffeeName2);
    
        const coffee2 = document.createElement('img');
        coffee2.classList.add('coffee');
        coffee2.src = './images/coffee cappuccino.jpg';
    
        coffeeCard2.appendChild(coffee2);
    
        const price2 = document.createElement('p');
        price2.classList.add('price');
        price2.textContent = '$4.36';
    
        coffeeCard2.appendChild(price2);

                // fourth coffee-card
                const coffeeCard3 = document.createElement('div');
                coffeeCard3.classList.add('coffee-card');
            
                const coffeeName3 = document.createElement('h2');
                coffeeName3.classList.add('coffee-name');
                coffeeName3.textContent = 'Americano';
              
                coffeeCard3.appendChild(coffeeName3);
            
                const coffee3 = document.createElement('img');
                coffee3.classList.add('coffee');
                coffee3.src = './images/coffee americano.jpg';
            
                coffeeCard3.appendChild(coffee3);
            
                const price3 = document.createElement('p');
                price3.classList.add('price');
                price3.textContent = '$2.62';
            
                coffeeCard3.appendChild(price3);

                // fifth coffee-card
                const coffeeCard4 = document.createElement('div');
                coffeeCard4.classList.add('coffee-card');
            
                const coffeeName4 = document.createElement('h2');
                coffeeName4.classList.add('coffee-name');
                coffeeName4.textContent = 'Espresso';
              
                coffeeCard4.appendChild(coffeeName4);
            
                const coffee4 = document.createElement('img');
                coffee4.classList.add('coffee');
                coffee4.src = './images/coffee espresso.jpg';
            
                coffeeCard4.appendChild(coffee4);
            
                const price4 = document.createElement('p');
                price4.classList.add('price');
                price4.textContent = '$5.76';
            
                coffeeCard4.appendChild(price4);

                               // sixth coffee-card
                               const coffeeCard5 = document.createElement('div');
                               coffeeCard5.classList.add('coffee-card');
                           
                               const coffeeName5 = document.createElement('h2');
                               coffeeName5.classList.add('coffee-name');
                               coffeeName5.textContent = 'Iced Coffee';
                             
                               coffeeCard5.appendChild(coffeeName5);
                           
                               const coffee5 = document.createElement('img');
                               coffee5.classList.add('coffee');
                               coffee5.src = './images/ice coffee.jpg';
                           
                               coffeeCard5.appendChild(coffee5);
                           
                               const price5 = document.createElement('p');
                               price5.classList.add('price');
                               price5.textContent = '$2.25';
                           
                               coffeeCard5.appendChild(price5);
  
    coffeeContainer.appendChild(coffeeCard);
    coffeeContainer.appendChild(coffeeCard1);
    coffeeContainer.appendChild(coffeeCard2);
    coffeeContainer.appendChild(coffeeCard3);
    coffeeContainer.appendChild(coffeeCard4);
    coffeeContainer.appendChild(coffeeCard5);
  
    return coffeeContainer;
  }
  
  function loadMenu() {
    const main = document.querySelector('#main');
    const coffeeContainer = createMenu();
    main.appendChild(coffeeContainer);
  }
  
  export default loadMenu;
  