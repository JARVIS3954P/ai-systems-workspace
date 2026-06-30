/*
DOM Notes - Editing and removing elements

DOM = Document Object Model.
It is the browser's structured representation of HTML.
JavaScript can create, update, replace, and remove elements in the DOM.

Common methods:
- document.createElement('tag') -> creates a new element
- appendChild(node) -> adds a node at the end
- textContent -> sets visible text safely
- innerHTML -> inserts HTML (use carefully)
- replaceWith(newNode) -> replaces an element
- outerHTML -> replaces the element including its own tag
- remove() -> deletes the current node

Best practice:
- Prefer textContent and appendChild for speed and safety.
- Avoid innerHTML when possible in larger projects.
*/

function demoEditElements() {
    const parent = document.getElementById('container') || document.body;

    // 1) Create a list if it does not already exist
    let list = document.getElementById('language-list');
    if (!list) {
        list = document.createElement('ul');
        list.id = 'language-list';
        parent.appendChild(list);
    }

    // 2) Add new items
    const languages = ['HTML', 'CSS', 'JavaScript'];
    languages.forEach((lang) => {
        const item = document.createElement('li');
        item.textContent = lang;
        list.appendChild(item);
    });

    // 3) Edit an existing item
    const firstItem = list.querySelector('li');
    if (firstItem) {
        firstItem.textContent = 'React';
        firstItem.style.fontWeight = 'bold';
        firstItem.style.color = 'blue';
    }

    // 4) Replace an item
    const secondItem = list.querySelectorAll('li')[1];
    if (secondItem) {
        const newItem = document.createElement('li');
        newItem.textContent = 'Node.js';
        secondItem.replaceWith(newItem);
    }

    // 5) Remove the last item
    const lastItem = list.querySelector('li:last-child');
    if (lastItem) {
        lastItem.remove();
    }

    // console.log(list.innerHTML);
    // console.log(list.outerHTML);
}

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', demoEditElements);
}
