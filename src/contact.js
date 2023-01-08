function component() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactMain = document.createElement('div');
    contactMain.classList.add('contactMain');

    contact.appendChild(contactMain);
    return contact;
}

export default component();