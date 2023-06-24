function createHeader(id, text) {
    const header = document.createElement('header');
    header.setAttribute('id', id);
    const logo = document.createElement('h1');
    logo.textContent = text;
    header.appendChild(logo);
    return header;
}

function loadPage() {
    const content = document.querySelector('#content');

    const header = createHeader('header', 'Coffeeland');
    content.appendChild(header);
}

export default loadPage;