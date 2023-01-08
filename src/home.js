
function component() {
    const home = document.createElement('div');
    home.classList.add('home');

    const home1 = document.createElement('div');
    home1.classList.add('home1');
    const home2 = document.createElement('div');
    home2.classList.add('home2');

    home.appendChild(home1);
    home.appendChild(home2);
    return home;
}
export default component();