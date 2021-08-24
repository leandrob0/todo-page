import { myTodos } from './todos-module.js';
import './style.css';
import deleteIcon from './bin.svg';

function showTodos() {

    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let todos = JSON.parse(localStorage.getItem("allEntries"));
    if(todos === null) todos = [];

    for(let i = 0; i < todos.length; i++) {
        createTheWholeTodo(i);
    }
}

function addTodoButton() {
    const containerTodos = document.querySelector('.lists-container');

    const buttonTodo = document.createElement('div');
    const innerButton = document.createElement('div');

    buttonTodo.classList.add('button-todo');
    innerButton.classList.add('inner-button');

    innerButton.textContent = "+";

    buttonTodo.appendChild(innerButton);
    containerTodos.appendChild(buttonTodo);
}

function loadTodayTodos() {

    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let today = new Date().toISOString().slice(0, 10);
    let todos = JSON.parse(localStorage.getItem("allEntries"));

    if(todos === null) todos = [];

    for(let i = 0; i < todos.length; i++) {

        let isToday = todos[i]['Date'].split('-');
        let isToday2 = today.split('-');

        //CHECKS THE LAST VALUE OF THE DATE WHICH IS THE DAY, IF THAT IS THE SAME, THE TODO SHOWS
        if(isToday[2] == isToday2[2]) {
            createTheWholeTodo(i);
        }
    }
}

function loadThisWeekTodos() {

    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let today = new Date().toISOString().slice(0, 10);
    let todos = JSON.parse(localStorage.getItem("allEntries"));
    if(todos === null) todos = [];

    for(let i = 0; i < todos.length; i++) {

        let isToday = todos[i]['Date'].split('-');
        let isToday2 = today.split('-');

        //CHECKS THE LAST VALUE OF THE DATE WHICH IS THE DAY, IF THAT IS THE SAME, THE TODO SHOWS
        if(isToday[1] == isToday2[1]) {
            if(isToday[2] > isToday2[2]) {
                if(parseInt(isToday[2]) - parseInt(isToday2[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            }else if(isToday[2] < isToday2[2]) {
                if(parseInt(isToday2[2]) - parseInt(isToday[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            } else {
                createTheWholeTodo(i);
            }
        } else if((parseInt(isToday[1]) + 1 ) == isToday2[1] || (parseInt(isToday2[1]) + 1 ) == isToday[1]) {
            if(isToday[2] > isToday2[2]) {
                if(parseInt(isToday[2]) - parseInt(isToday2[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            }else if(isToday[2] < isToday2[2]) {
                if(parseInt(isToday2[2]) - parseInt(isToday[2]) <= 7) {
                    createTheWholeTodo(i);
                }
            } else {
                createTheWholeTodo(i);
            }
        }
    }
}

function loadProjectTodo(project) {
    
    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    let todos = JSON.parse(localStorage.getItem("allEntries"));

    if(todos === null) {
        todos = [];
    }

    for(let i = 0; i < todos.length; i++) {
        if(project == todos[i]['Project']) {
          createTheWholeTodo(i);
        }
    }
}

function createTheWholeTodo(index) {
    const containerTodos = document.querySelector('.lists-container');

    let todos = JSON.parse(localStorage.getItem("allEntries"));
    if(todos === null) todos = [];

    const totalContainer = document.createElement('div');
    const leftSideDiv = document.createElement('div');
    const rigthSideDiv = document.createElement('div');
    const checkbox = document.createElement('div');
    const title = document.createElement('div');
    const dateDiv = document.createElement('div');
    const detailsDiv = document.createElement('div');
    const editDiv = document.createElement('div');

    totalContainer.classList.add('container-todo');
    leftSideDiv.classList.add('side-div');
    rigthSideDiv.classList.add('side-div');
    checkbox.classList.add('checkbox-todo');
    title.classList.add('title-todo');
    dateDiv.classList.add('date-todo');
    detailsDiv.classList.add('details-todo');
    editDiv.classList.add('edit-todo');

    title.textContent = todos[index]["Title"];
    dateDiv.textContent = todos[index]["Date"];
    detailsDiv.textContent = 'DETAILS';

    const myIcon = new Image();
    myIcon.src = deleteIcon;
    myIcon.classList.add('delete-todo');
    myIcon.setAttribute('alt', 'Icons made by https://www.flaticon.com/authors/ddara - dDara');
    
    //DELETE ICON BUTTON.
    myIcon.addEventListener('click', () => {
        myTodos.removeToDo(myIcon.parentNode.firstChild.lastChild.textContent);
        containerTodos.removeChild(myIcon.parentNode.parentNode);
    });

    //THIS EVENT LISTENER IS COPIED FROM https://stackoverflow.com/questions/39513705/make-html-element-disappear-with-css-animation
    //IT TAKES CARE OF THE DISAPPEAR ANIMATION WHEN THE USER CHECKS THE BOX.
    checkbox.addEventListener('click', () => {
        checkbox.parentElement.parentElement.style.opacity = '0';
        window.setTimeout( function removethis() {
            checkbox.parentElement.parentElement.style.display='none';
        }, 300);
        window.setTimeout(() => {
            myTodos.removeToDo(checkbox.nextSibling.textContent);
            containerTodos.removeChild(checkbox.parentElement.parentElement);
        }, 300);
    });

    //DETAILS EVENT LISTENER.
    detailsDiv.addEventListener('click', () => {
        
    });

    //THIS MAKES THE BORDER THE SPECIFIC COLOR IT NEEDS TO BE ACORDING TO THE PRIO.
    (todos[index]['Priority'] === 'High') ? totalContainer.style.border = '2px solid #e05355' :
    (todos[index]['Priority'] === 'Medium') ? totalContainer.style.border = '2px solid #CCCA3A' :
    totalContainer.style.border = '2px solid #4a8f51';

    leftSideDiv.appendChild(checkbox);
    leftSideDiv.appendChild(title);
    rigthSideDiv.appendChild(detailsDiv);
    rigthSideDiv.appendChild(dateDiv);
    rigthSideDiv.appendChild(editDiv);
    rigthSideDiv.appendChild(myIcon);

    totalContainer.appendChild(leftSideDiv);
    totalContainer.appendChild(rigthSideDiv);

    containerTodos.appendChild(totalContainer);
}

export { addTodoButton , showTodos , loadProjectTodo , loadTodayTodos , loadThisWeekTodos};