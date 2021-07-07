import { myTodos } from './todos-module.js';
import './style.css';
import deleteIcon from './bin.svg';

function showTodos() {
    for(let i = 0; i < myTodos.lengthArray(); i++) {
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

        title.textContent = myTodos.todo[i]['Title'];
        dateDiv.textContent = myTodos.todo[i]['Date'];
        detailsDiv.textContent = 'DETAILS';
        
        const myIcon = new Image();
        myIcon.src = deleteIcon;
        myIcon.classList.add('delete-todo');
        myIcon.setAttribute('alt', 'Icons made by https://www.flaticon.com/authors/ddara - dDara');
        myIcon.addEventListener('click', () => {
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

function addLastTodo() {
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

    title.textContent = myTodos.todo[(myTodos.todo.length) - 1]['Title'];
    dateDiv.textContent = myTodos.todo[(myTodos.todo.length) - 1]['Date'];
    detailsDiv.textContent = 'DETAILS';

    const myIcon = new Image();
    myIcon.src = deleteIcon;
    myIcon.classList.add('delete-todo');
    myIcon.setAttribute('alt', 'Icons made by https://www.flaticon.com/authors/ddara - dDara');
    myIcon.addEventListener('click', () => {
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

export { addTodoButton , showTodos , addLastTodo};