import './style.css';
import Icon from './logo.svg';
import { sidebarLoad } from './sidebar-load.js';
import { showTodos } from './todos-load.js';
import { addNewProjectLoad , projectsNameLoad } from './projects-load';

/*
    ##
    THIS FUNCTION TAKES CARE OF ALL THE BASIC HTML STRUCTURE WITH THE ITEMS THAT WILL
    ALWAYS BE THERE.
    ##
*/

function contentLoader() {

    //ADD THE CONTAINER OF THE WHOLE PAGE
    const body = document.querySelector('body');

    const containerTotal = document.createElement('div');
    containerTotal.classList.add('container-total');
    body.appendChild(containerTotal);

    //ADDS THE PAGE HEADER WITH ALL ITS CONTENT
    const header = document.createElement('header');
    const titlePage = document.createElement('p');
    const myIcon = new Image();

    myIcon.src = Icon;
    header.classList.add('header-page');
    myIcon.classList.add('logo');
    titlePage.classList.add('title-page');
    myIcon.setAttribute('alt', 'Icon by https://freeicons.io/profile/823 - Muhammad Haq');
    titlePage.textContent = 'TODO LIST!';

    header.appendChild(myIcon);
    header.appendChild(titlePage);
    containerTotal.appendChild(header);

    //ADDS THE PAGE SIDEBAR
    const sidebar = document.createElement('div');

    sidebar.classList.add('sidebar');

    containerTotal.appendChild(sidebar);

    //loads the sidebar with the text that will always be there
    sidebarLoad();

    //ADDS THE PAGE LISTS CONTENT HOLDER
    const lists = document.createElement('div');

    lists.classList.add('lists-container');

    containerTotal.appendChild(lists);

    //this 3 lines first render the todo's then the 'button' to add new projects 
    //and then the projects already created
    showTodos();
    addNewProjectLoad();
    projectsNameLoad();

}

export { contentLoader };