
    const home = document.createElement('div');
    home.classList.add('home');

    const home1 = document.createElement('div');
    home1.classList.add('home1');
    const home2 = document.createElement('div');
    home2.classList.add('home2');
    
    const text1 = document.createElement('div');
    text1.textContent = 'SAY NO TO MEATS ON DRUGS'
    text1.classList.add('text1');
    const text2 = document.createElement('div');
    const text21 = document.createElement('div');
    text21.textContent = 'The fabric of Mealy was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table.'
    const text22 = document.createElement('div');
    text22.classList.add('checkMenu');
    const text22a = document.createElement('div');
    text22a.textContent= 'Check our menu ';
    const text22b = document.createElement('div');
    text22b.classList.add('hereBtn');
    text22b.textContent= 'HERE';
    text22.appendChild(text22a);
    text22.appendChild(text22b);
    text2.appendChild(text21);
    text2.appendChild(text22);
    text2.classList.add('text2');

    const mainHome = document.createElement('div');
    mainHome.classList.add('mainHome');
    mainHome.appendChild(text1);
    mainHome.appendChild(text2);
    home2.appendChild(mainHome);
    home.appendChild(home1);
    home1.appendChild(home2);
    
export {text22b};
export default home;