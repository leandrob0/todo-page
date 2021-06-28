import './style.css';

function contentLoader() {

    //ADD THE CONTAINER OF THE WHOLE PAGE
    const body = document.querySelector('body');
    const containerTotal = document.createElement('div');
    containerTotal.classList.add('container-total');
    body.appendChild(containerTotal);

    //ADDS THE PAGE HEADER 
    const header = document.createElement('header');
    const logo = document.createElement('div');

    header.classList.add('header-page');
    logo.classList.add('logo');

    header.appendChild(logo);
    containerTotal.appendChild(header);

    //ADDS THE PAGE SIDEBAR
    const sidebar = document.createElement('div');

    sidebar.classList.add('sidebar');

    containerTotal.appendChild(sidebar);

    //ADDS THE PAGE LISTS CONTENT HOLDER
    const lists = document.createElement('div');

    lists.classList.add('lists-container');

    containerTotal.appendChild(lists);

}

export { contentLoader };