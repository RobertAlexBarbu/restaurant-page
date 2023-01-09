import './styles.css';
import home from './home.js';
import {text22b} from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import footer from './footer.js';


function component() {
    const main = document.createElement('div');
    main.classList.add('header');

    // NAME SECTION
    const nameSection = document.createElement('div');
    nameSection.classList.add('nameSection');

    const name = document.createElement('div');
    name.classList.add('name');
    name.textContent = 'Mealy';
    nameSection.appendChild(name);
    

    // OPTIONS SECTION
    const optionsSection = document.createElement('div');
    optionsSection.classList.add('optionsSection');

    const option = [];
    option[0] = document.createElement('button');
    option[1] = document.createElement('button');
    option[2] = document.createElement('button');
    option[0].textContent = 'Home';
    option[1].textContent = 'Menu';
    option[2].textContent = 'Contact';
    option.forEach((element, index) => {
        element.classList.add('option');
        element.addEventListener('click', changeState);
        optionsSection.appendChild(element);
    })
    text22b.addEventListener('click', changeState);
    let state = 'home';
    function changeState(event) {
        switch(state) {
            case 'home':
                content.removeChild(home);
                break;
            case 'menu':
                content.removeChild(menu);
                break;
            case 'contact':
                content.removeChild(contact);
                break;
        }
        switch(event.target.textContent) {
            case 'Home':
                content.appendChild(home);
                state = 'home';
                break;
            case 'Menu':
            case 'HERE':
                content.appendChild(menu);
                state = 'menu';
                break;
            case 'Contact':
                content.appendChild(contact);
                state = 'contact';
                break;
        }
        window.scrollTo(0, 0);
    }
    

    // BUILD HEADER
    main.appendChild(nameSection);
    main.appendChild(optionsSection);
    return main;
}

const content = document.querySelector('#content');

content.appendChild(component());
content.appendChild(home);
home.appendChild(footer);
menu.appendChild(footer.cloneNode());
contact.appendChild(footer.cloneNode());
