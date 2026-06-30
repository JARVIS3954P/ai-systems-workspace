/*
DOM (Document Object Model) Notes
- DOM is the browser's structured representation of HTML.
- JavaScript uses the DOM to select, read, update, and delete elements.
- Common selectors:
  - getElementById() -> single element
  - querySelector() -> first matching element
  - querySelectorAll() -> NodeList of all matches
  - getElementsByClassName()/getElementsByTagName() -> HTMLCollection
- Content methods:
  - innerHTML -> adds/reads HTML markup
  - textContent -> adds/reads plain text, including hidden text
  - innerText -> adds/reads visible text only
- Attribute methods:
  - getAttribute() -> read an attribute
  - setAttribute() -> add/update an attribute
*/

// 1) Select elements
const title = document.getElementById('title');
const heading = document.querySelector('.heading');
const paragraphs = document.querySelectorAll('p');
const divs = document.getElementsByTagName('div');

// 2) Add or change content
title.innerHTML = 'DOM Learning <span>Updated</span>';
heading.textContent = 'DOM notes from Chai aur Code';
heading.innerText = 'DOM notes from Chai aur Code';

// 3) Work with attributes
title.setAttribute('data-topic', 'dom');
const topic = title.getAttribute('data-topic');

// 4) NodeList example (querySelectorAll returns NodeList)
paragraphs.forEach((para, index) => {
    para.style.color = index === 0 ? 'lightgreen' : 'orange';
});

// 5) HTMLCollection example (getElementsByTagName returns HTMLCollection)
Array.from(divs).forEach((div, index) => {
    div.setAttribute('data-index', index);
});

// console.log(title.innerHTML);
// console.log(heading.textContent);
// console.log(topic);
