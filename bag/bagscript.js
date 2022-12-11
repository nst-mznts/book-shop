const books = [{
    "number": 0,
    "author": "Douglas Crockford",
    "imageLink": "../img/JS_the_good_parts.jpg",
    "title": "JavaScript: The Good Parts: The Good Parts",
    "price": 30,
    "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
    },
    {
      "number": 1,
      "author": "David Herman",
      "imageLink": "../img/Effective_JS.jpg",
      "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
      "price": 22,
      "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
    },
    {
      "number": 2,
      "author": "David Flanagan",
      "imageLink": "../img/JS_the_definitive_guide.jpg",
      "title": "JavaScript: The Definitive Guide",
      "price": 40,
      "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
    },
    {
      "number": 3,
      "author": " Eric Elliott",
      "imageLink": "../img/programming_JS_applications.jpg",
      "title": "Programming JavaScript Applications",
      "price": 19,
      "description": "Take advantage of JavaScript\’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
    },
    {
      "number": 4,
      "author": "Addy Osmani",
      "imageLink": "../img/learning-javascript-design-patterns.jpg",
      "title": "Learning JavaScript Design Patterns",
      "price": 32,
      "description": "With Learning JavaScript Design Patterns, you\’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
    },
    {
      "number": 5,
      "author": "Boris Cherny",
      "imageLink": "../img/programming-typescript.jpg",
      "title": "Programming TypeScript",
      "price": 28,
      "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
    },
    {
      "number": 6,
      "author": "Alex Banks, Eve Porcello",
      "imageLink": "../img/learning_react_2nd_edition.jpg",
      "title": "Learning React, 2nd Edition",
      "price": 25,
      "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
    },
    {
      "number": 7,
      "author": "Bradley Meck Alex Young and Mike Cantelon",
      "imageLink": "../img/node_in_action.jpg",
      "title": "Node.js in Action",
      "price": 38,
      "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
    },
    {
      "number": 8,
      "author": "Kyle Simpson",
      "imageLink": "../img/you_dont_know_JS_yet.jpg",
      "title": "You Don't Know JS Yet: Get Started",
      "price": 26,
      "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
    },
    {
      "number": 9,
      "author": "John Resig and Bear Bibeault",
      "imageLink": "../img/secrets_of_the_JS_ninja.jpg",
      "title": "Secrets of the JavaScript Ninja",
      "price": 33,
      "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
    }
]

/*
Create header
*/ 
const body = document.body;
const header = document.createElement('header');
body.appendChild(header);

const homePage = document.createElement('a');
homePage.href = '../index.html';
homePage.innerText = 'Book Catalog';
homePage.classList.add('catalog');
header.appendChild(homePage);

const bag = document.createElement('a');
bag.href = '#';
const icon = document.createElement('img');
icon.classList.add('empty-icon');
icon.src = '../img/empty-icon.svg';
bag.appendChild(icon);
bag.classList.add('bag');
bag.classList.add('active');
header.appendChild(bag);

const logoContainer = document.createElement('div');
header.appendChild(logoContainer);
const textLogo = document.createElement('h1');
textLogo.innerText = 'BOOK SHOP';
logoContainer.appendChild(textLogo);
const logo = document.createElement('img');
logo.src = '../img/logo.png';
logoContainer.appendChild(logo);

/*
Create main
*/
const main = document.createElement('main');
body.appendChild(main);

const wrapper = document.createElement('div');
wrapper.classList.add('main-wrapper');
wrapper.id = 'main';
main.appendChild(wrapper);

var basket = {}; // Basket
var sum = 0; // Total amount of goods in the Basket 
checkBasket(); // Check basket in the localStorage
showBasket(); // Display items on the page

function showBasket() {
  checkBasket();
  let keys = Object.keys(basket);
  for (let i = 0, l = keys.length; i < l; i++) {
    let miniCard = document.createElement('div');
    miniCard.classList.add('miniCard');
    miniCard.id = keys[i];
    wrapper.appendChild(miniCard);
    let bookImg = document.createElement('img');
    bookImg.src = books[keys[i]].imageLink;
    miniCard.appendChild(bookImg);
    let textWrapper = document.createElement('div');
    textWrapper.classList.add('textWrapper');
    miniCard.appendChild(textWrapper);
    let bookAuthor = document.createElement('h4');
    bookAuthor.innerHTML = books[keys[i]].author;
    textWrapper.appendChild(bookAuthor);
    let bookTitle = document.createElement('p');
    bookTitle.innerHTML = books[keys[i]].title;
    textWrapper.appendChild(bookTitle);
    let countWrapper = document.createElement('div');
    countWrapper.classList.add('countWrapper');
    miniCard.appendChild(countWrapper);
    let minusGood = document.createElement('button');
    minusGood.innerHTML = '-';
    minusGood.id = keys[i];
    countWrapper.appendChild(minusGood);
    let count = document.createElement('p');
    count.innerHTML = basket[keys[i]];
    countWrapper.appendChild(count);
    let plusGood = document.createElement('button');
    plusGood.innerHTML = '+';
    plusGood.id = keys[i];
    countWrapper.appendChild(plusGood);
    let price = document.createElement('p');
    price.innerHTML = '$' + basket[keys[i]] * books[keys[i]].price;
    price.classList.add('price');
    price.id = basket[keys[i]] * books[keys[i]].price;
    countWrapper.appendChild(price);
    let closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    closeBtn.classList.add('delete-item');
    closeBtn.id = keys[i];
    miniCard.appendChild(closeBtn); 
    plusGood.addEventListener("click", plusGoods);
    minusGood.addEventListener("click", minusGoods);
    closeBtn.addEventListener("click", deleteGoods);
  }
};

// Display buttons to increase and decrease the number of items on the page
function showBtns() {
  checkBasket();
  let keys = Object.keys(basket);
  for (let i = 0, l = keys.length; i < l; i++) {
    let countWrapper = document.createElement('div');
    countWrapper.classList.add('countWrapper');
    miniCard.appendChild(countWrapper);
    let minusGood = document.createElement('button');
    minusGood.innerHTML = '-';
    minusGood.id = keys[i];
    countWrapper.appendChild(minusGood);
    let count = document.createElement('p');
    count.innerHTML = basket[keys[i]];
    countWrapper.appendChild(count);
    let plusGood = document.createElement('button');
    plusGood.innerHTML = '+';
    plusGood.id = keys[i];
    countWrapper.appendChild(plusGood);
    let price = document.createElement('p');
    price.innerHTML = '$' + basket[keys[i]] * books[keys[i]].price;
    price.classList.add('price');
    price.id = basket[keys[i]] * books[keys[i]].price;
    countWrapper.appendChild(price);
    let closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    closeBtn.classList.add('delete-item');
    closeBtn.id = keys[i];
    miniCard.appendChild(closeBtn); 
    plusGood.addEventListener("click", plusGoods);
    minusGood.addEventListener("click", minusGoods);
    closeBtn.addEventListener("click", deleteGoods);
  }
};

// Increase items
function plusGoods(event) {
  checkBasket();
  var articul = event.target.id;
  basket[articul]++;
  saveCartToLS();
  showBtns();
};

// Reduce items
function minusGoods(event) {
  checkBasket();
  var articul = event.target.id;
  if (basket[articul] > 1) {
    basket[articul]--;
  }
  else {
    delete basket[articul];
  }
  saveCartToLS();
  showBtns();
};

// Delete items
function deleteGoods(event) {
  checkBasket();
  var articul = event.target.id;
  delete basket[articul];
  saveCartToLS();
  showBtns();
};

// Check basket in the localStorage
function checkBasket() {
  if (localStorage.getItem('basket') !== null) {
    basket = JSON.parse(localStorage.getItem('basket'));
  }
  if (localStorage.getItem('basket').length > 2) {
    document.querySelector('.empty-icon').src = '../img/full-icon.svg';
  }
};

// Save basket to localStorage
function saveCartToLS() {
  localStorage.setItem('basket', JSON.stringify(basket));
  location.reload();
};

/*
Total
*/

// Create total sum
let total = document.createElement('div');
total.classList.add('total');
body.appendChild(total);

const prices = document.querySelectorAll('.price');
prices.forEach((e) => {
  sum += Number(e.id);
});
total.innerHTML = 'Total: $' + sum;

// Create a confirmation button that opens the delivery form
const confirmBtn = document.createElement('button');
confirmBtn.innerHTML = 'Confirm order';
confirmBtn.classList.add('confirm');
total.appendChild(confirmBtn);

function disableBtn() {
  if (localStorage.getItem('basket').length > 2) {
    document.querySelector('.confirm').disabled = false;
  }
  else {
    document.querySelector('.confirm').disabled = true;
  }
};
disableBtn();

/* 
Delivery form
*/

// Open form
confirmBtn.addEventListener('click',(e) => {
  e.preventDefault();
  document.querySelector(".form__bg").classList.add('active');
  document.querySelector(".form").classList.add('active');
});

// Close form
const clFormBtn = document.querySelector('.close-the-form');
clFormBtn.addEventListener('click',(e) => {
  e.preventDefault();
  document.querySelector(".form__bg").classList.remove('active');
  document.querySelector(".form").classList.remove('active');
});

// Validation rules for the delivery form
const inputs = document.querySelectorAll('input[data-rule]');
let adress = [];
adress[0] = 'Customer: ';
adress[3] = 'Delivery adress: ';
adress[6] = 'house';
adress[8] = 'flat';

for (let input of inputs) {
  input.addEventListener('blur', function() {
    let rule = this.dataset.rule;
    let value = this.value;
    let check;
    let int = /[0-9]/.test(value);
    let space = /\s/.test(value);

    switch (rule) {
      case 'name':
        if (value.length < 4) {
          check = false;
          document.querySelector('.nameer').innerHTML = 'The field is invalid';
        }
        else {
          if (int || space) {
            check = false;
            document.querySelector('.nameer').innerHTML = 'The field is invalid';
          }
          else {
            check = true;
            document.querySelector('.nameer').innerHTML = '';
            adress[1] = value;
          }
        }
      break;
      
      case 'surname':
        if (value.length < 5) {
          check = false;
          document.querySelector('.surnameer').innerHTML = 'The field is invalid';
        }
        else {
          if (int || space) {
            check = false;
            document.querySelector('.surnameer').innerHTML = 'The field is invalid';
          }
          else {
            check = true;
            document.querySelector('.surnameer').innerHTML = '';
            adress[2] = value;
          }
        }
      break;

      case 'date':
        const inputDate = new Date(value).toISOString().slice(0, 10); // Entered date (year-month-day)
        const currentDate = new Date().toISOString().slice(0, 10); // Current date (year-month-day)
        console.log(inputDate);
        console.log(currentDate);
        if (inputDate <= currentDate) {
          check = false;
          document.querySelector('.dateer').innerHTML = 'The field is invalid';
        }
        else {
          check = true;
          document.querySelector('.dateer').innerHTML = '';
        }
        
      break;

      case 'street':
        if (value.length >= 5) {
          check = true;
          document.querySelector('.streeter').innerHTML = '';
          adress[4] = value;
        }
        else {
          check = false;
          document.querySelector('.streeter').innerHTML = 'The field is invalid';
        }
      break; 

      case 'house-number':
      if (/(?<![-\d])\d+/g.test(value)) {
        check = true;
        document.querySelector('.houseer').innerHTML = '';
        adress[5] = value;
      }
      else {
        check = false;
        document.querySelector('.houseer').innerHTML = 'The field is invalid';
      }
      break;

      case 'flat-number':
        if (/(?<![-\d])\d+/g.test(value)) {
          check = true;
          document.querySelector('.flater').innerHTML = '';
          adress[7] = value;
        }
        else {
          check = false;
          document.querySelector('.flater').innerHTML = 'The field is invalid';
        }
      break; 
    };

    this.classList.remove('valid');
    this.classList.remove('invalid');
    if (check) {
      this.classList.add('valid');
    }
    else {
      this.classList.add('invalid');
    }
  });
};

// Checking that all the fields of the form are filled out with valid infotmation
const form = document.getElementById('delivery-form');
const formSubmit = document.getElementById('submit');
const formInputs = document.querySelectorAll('input[data-rule]');
form.addEventListener('change', changeFormHandler);

function changeFormHandler() {
  console.log(form.checkValidity());
  let res=1;
  for (let field of formInputs) {
    if (field.classList.contains('valid')) {
      res+=1;
    }
  }
  console.log(res);
  if (res === 6) {
    formSubmit.removeAttribute('disabled');
  }
};

// Display the delivery address on a new page when user clicks on Complete button
document.getElementById('submit').addEventListener('click',() => {
  var myWindow = window.open("../confirm/example.htm", "_self", "");
  myWindow.document.write("<h1>Thank you for your order!</h1>");
  myWindow.document.write(adress.join(' '));
  myWindow.document.write("<br>");
  myWindow.document.write("<br>");
  let image = "<img src='../img/stack-of-books.png'  width=200 height=200>";
  myWindow.document.write(image);
  myWindow.document.write("<br>");
  myWindow.document.write("<br>");
  myWindow.document.write("<form><input type=button value='Return' onclick='history.back()'></form>");
  basket = {};
  localStorage.setItem('basket', JSON.stringify(basket));
});