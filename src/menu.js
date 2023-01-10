import entrySrc from './entry.jpg';
function component() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const menuMain = document.createElement('div');
    menuMain.classList.add('menuMain');
    for(let i=0; i<3; i++) {
        let test = document.createElement('div');
        test.classList.add('category');
        let name = document.createElement('div');
        name.classList.add('categoryName');
        name.textContent = `Category ${i+1}`;
        test.appendChild(name);
        let entries = document.createElement('div');
        entries.classList.add('entries');
        test.appendChild(entries);
        for(let j=0; j<3+i; j++) {
            let entry = document.createElement('div');
            entry.classList.add('entry');
            entries.appendChild(entry);
            let entryName = document.createElement('div');
            entryName.textContent = 'Burgerito menito alinito';
            if(j==0) {
                entryName.textContent = 'Burgerito';
            }
            entryName.classList.add('entryName');
            entry.appendChild(entryName);
            let entryImg = document.createElement('img');
            entryImg.src = entrySrc;
            entryImg.classList.add('entryImg');
            entry.appendChild(entryImg);
            let entryPrice = document.createElement('div');
            entryPrice.textContent = '19.99 RON';
            entryPrice.classList.add('entryPrice');
            entry.appendChild(entryPrice);
        }
        menuMain.appendChild(test);
    }
    menu.appendChild(menuMain);
    return menu;
}

export default component();