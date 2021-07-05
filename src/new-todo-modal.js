import './style.css';
import { myProjects } from './projects-module.js';

function createNewTodoModal() {
    const body = document.querySelector('body');

    const modal = document.createElement('div');

    const title = document.createElement('h2');
    const inputTitle = document.createElement('input');

    const description = document.createElement('h2');
    const inputDesc = document.createElement('textarea');

    const date = document.createElement('h2');
    const inputDate = document.createElement('input');

    const priority = document.createElement('h2');
    const inputPrio = document.createElement('select');

    const project = document.createElement('h2');
    const inputProject = document.createElement('select');

    const buttonAccept = document.createElement('span');

    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('placeholder',"Write your project title here...");
    title.classList.add('todo-label');
    inputTitle.classList.add('inputTitle-todo');

    inputDesc.setAttribute('placeholder',"Write your project description here...");
    description.classList.add('todo-label');
    inputDesc.classList.add('inputDesc-todo');
    
    inputDate.setAttribute('type','date');
    inputDate.classList.add('inputDate-todo');
    date.classList.add('todo-label');

    priority.classList.add('todo-label');
    inputPrio.classList.add('inputPrio-todo');

    project.classList.add('todo-label');
    inputProject.classList.add('inputProject-todo');

    buttonAccept.classList.add('buttonModal-todo');
    modal.classList.add('modal-todo');

    title.textContent = "Todo name: ";
    description.textContent = "Description: ";
    date.textContent = "Target date: ";
    priority.textContent = "Prioroty: ";
    project.textContent = "Project: ";
    buttonAccept.textContent = "Confirm";

    modal.appendChild(title);
    modal.appendChild(inputTitle);

    modal.appendChild(description);
    modal.appendChild(inputDesc);

    modal.appendChild(date);
    modal.appendChild(inputDate);

    modal.appendChild(priority);
    modal.appendChild(inputPrio);

    modal.appendChild(project);
    modal.appendChild(inputProject);

    modal.appendChild(buttonAccept);
    body.appendChild(modal);
}

function createOptions() {
    const select = document.querySelector('.inputProject-todo');
    const selectPrio = document.querySelector('.inputPrio-todo');

    let prios = ['High','Medium','Low'];

    for(let i = 0; i < myProjects.lengthArray(); i++) {
        let name = myProjects.returnNameProject(i);

        const option = document.createElement('option');
        option.textContent = name;

        select.appendChild(option);
    }

    for(let i = 0; i < 3; i++) {
        const option = document.createElement('option');
        option.textContent = prios[i];

        selectPrio.appendChild(option);
    }
}

function removeOptions() {
    const select = document.querySelector('.inputProject-todo');
    const selectPrio = document.querySelector('.inputPrio-todo');

    while(select.firstChild) {
        select.removeChild(select.firstChild);
    }

    while(selectPrio.firstChild) {
        selectPrio.removeChild(selectPrio.firstChild);
    }
}

export { removeOptions , createOptions , createNewTodoModal }