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

