const body = document.body;
const header = document.createElement('header');
body.appendChild(header);

const homePage = document.createElement('a');
homePage.href = '#';
homePage.innerText = 'Book Catalog';
homePage.classList.add('active');
header.appendChild(homePage);

const bag = document.createElement('a');
bag.href = '#';
bag.innerText = 'Order books';
header.appendChild(bag);

const logoContainer = document.createElement('div');
header.appendChild(logoContainer);
const textLogo = document.createElement('h1');
textLogo.innerText = 'BOOK SHOP';
logoContainer.appendChild(textLogo);
const logo = document.createElement('img');
logo.src = 'logo.png';
logoContainer.appendChild(logo);
