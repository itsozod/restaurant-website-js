function createHome() {
    const welcomeContainer = document.createElement('div');
    welcomeContainer.classList.add('welcome-container');
  
    const welcomeHeader = document.createElement('h1');
    welcomeHeader.classList.add('welcome');
    welcomeHeader.textContent = 'Welcome to Coffeeland';

    const imagecontainer = document.createElement('div');
    imagecontainer.classList.add('img-container');

    const coffeeImage = document.createElement('img');
    coffeeImage.classList.add('img');
    coffeeImage.src = './images/coffee-and-snacks.png';

    imagecontainer.appendChild(coffeeImage);

    const para = document.createElement('p');
    para.classList.add('intro');
    para.textContent = 'Whenever you feel like you need coffee, just straight come to our coffee shop, you will any type of coffee!'
    const strong = document.createElement('strong');
    strong.textContent = ' Buy a coffee and get snacks for free!'
    para.appendChild(strong);

    const daysContainer = document.createElement('div');
    daysContainer.classList.add('days-container');

    const workDays = document.createElement('div');
    workDays.classList.add('work-days');

    daysContainer.appendChild(workDays);

    const workIntro = document.createElement('h3');
    workIntro.classList.add('work-intro');
    workIntro.textContent = 'Working days';

    workDays.appendChild(workIntro);

    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const para4 = document.createElement('p');
    const para5 = document.createElement('p');
    const para6 = document.createElement('p');
    const para7 = document.createElement('p');
    para1.classList.add('days');
    para2.classList.add('days');
    para3.classList.add('days');
    para4.classList.add('days');
    para5.classList.add('days');
    para6.classList.add('days');
    para7.classList.add('days');
    // adding textContent
    para1.textContent = 'Monday: 7AM-11PM';
    para2.textContent = 'Tuesday: 7AM-11PM';
    para3.textContent = 'Wednesday: 7AM-11PM';
    para4.textContent = 'Thursday: 7AM-11PM';
    para5.textContent = 'Friday: 7AM-11PM';
    para6.textContent = 'Saturday: 10AM-11PM';
    para7.textContent = 'Sunday: 10AM-11PM';

    workDays.appendChild(para1);
    workDays.appendChild(para2);
    workDays.appendChild(para3);
    workDays.appendChild(para4);
    workDays.appendChild(para5);
    workDays.appendChild(para6);
    workDays.appendChild(para7);


  
    welcomeContainer.appendChild(welcomeHeader);
    welcomeContainer.appendChild(imagecontainer);
    welcomeContainer.appendChild(para);
    welcomeContainer.appendChild(daysContainer);
  
    return welcomeContainer;
  }
  
  function loadHome() {
    const main = document.querySelector('#main');
    const welcomeContainer = createHome();
    main.appendChild(welcomeContainer);
  }
  
  export default loadHome;
  