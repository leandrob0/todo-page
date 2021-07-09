import { myTodos } from './todos-module.js';
import './style.css';
import deleteIcon from './bin.svg';

function showTodos() {

    const everyTodo = document.querySelectorAll('.container-todo');
    Array.from(everyTodo).forEach(element => {
        element.parentNode.removeChild(element);
    });

    myTodos.getFromLocalStorage();

    for(let i = 0; i < myTodos.lengthArray(); i++) {
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
    myTodos.getFromLocalStorage();

    for(let i = 0; i < myTodos.lengthArray(); i++) {

        let isToday = myTodos.todo[i]['Date'].split('-');
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
    myTodos.getFromLocalStorage();

    for(let i = 0; i < myTodos.lengthArray(); i++) {

        let isToday = myTodos.todo[i]['Date'].split('-');
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

    myTodos.getFromLocalStorage();

    for(let i = 0; i < myTodos.lengthArray(); i++) {
        if(project == myTodos.todo[i]['Project']) {
          createTheWholeTodo(i);
        }
      }
}

function createTheWholeTodo(index) {
    const containerTodos = document.querySelector('.lists-container');

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

    title.textContent = myTodos.todo[index]['Title'];
    dateDiv.textContent = myTodos.todo[index]['Date'];
    detailsDiv.textContent = 'DETAILS';

    const myIcon = new Image();
    myIcon.src = deleteIcon;
    myIcon.classList.add('delete-todo');
    myIcon.setAttribute('alt', 'Icons made by https://www.flaticon.com/authors/ddara - dDara');
    myIcon.addEventListener('click', () => {
        myTodos.removeToDo(myIcon.parentNode.firstChild.lastChild.textContent);
        containerTodos.removeChild(myIcon.parentNode.parentNode);
    });

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