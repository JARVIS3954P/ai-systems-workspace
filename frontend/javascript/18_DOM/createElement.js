/*
DOM Notes - Create elements dynamically

DOM = Document Object Model.
It is the browser's structured representation of HTML.
JavaScript can create, insert, update, and remove elements in the DOM.

Main methods:
- document.createElement('tag') -> creates a new element node
- appendChild(node) -> adds node at the end
- insertBefore(newNode, referenceNode) -> adds node before a target node
- setAttribute() -> sets attributes
- innerText / textContent / innerHTML -> add content
- style -> change CSS directly
*/

function demoCreateElement() {
    const parent = document.getElementById('container') || document.body;

    // 1) Create a new element
    const div = document.createElement('div');
    div.className = 'card';
    div.id = 'card-1';
    div.setAttribute('title', 'Created by JavaScript');

    // 2) Add content
    div.innerText = 'Hello from createElement';

    // 3) Style it
    div.style.backgroundColor = 'lightblue';
    div.style.padding = '10px';
    div.style.marginTop = '12px';

    // 4) Append to the DOM
    parent.appendChild(div);

    // 5) Insert before an existing element
    const note = document.createElement('p');
    note.innerText = 'This paragraph was inserted before the card.';
    parent.insertBefore(note, div);

    // 6) Create a button
    const btn = document.createElement('button');
    btn.innerText = 'Click Me';
    btn.setAttribute('type', 'button');
    btn.style.marginTop = '8px';
    parent.appendChild(btn);

    // console.log(div.outerHTML);
    // console.log(parent.children.length);
}

demoCreateElement();
