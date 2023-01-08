
function component() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menuMain = document.createElement('div');
    menuMain.classList.add('menuMain');

    menu.appendChild(menuMain);
    return menu;
}

export default component();