import './style.css';
import { myTodos } from './todos-module.js';

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
    let today = new Date().toISOString().slice(0, 10); //get current date and set it to the minimum date
    inputDate.setAttribute('min', today);

    priority.classList.add('todo-label');
    inputPrio.classList.add('inputPrio-todo');

    project.classList.add('todo-label');
    inputProject.classList.add('inputProject-todo');

    buttonAccept.classList.add('buttonModal-todo');
    modal.classList.add('modal-todo');

    title.textContent = "Todo name: ";
    description.textContent = "Description: ";
    date.textContent = "Target date: ";
    priority.textContent = "Priority: ";
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

function showDetailsModal(titleTodo) {
    let todos = JSON.parse(localStorage.getItem("allEntries"));
    let indexTitle = todos.findIndex(el => el["Title"] === titleTodo);

    console.log(indexTitle);

    let labels = document.querySelectorAll('.label-details');
    let content = document.querySelectorAll('.content-details');
    
    let arrayLabels = ["Title: ", "Description: ", "Target Date: ", "Priority: ", "Title: "];
    let arrayContents = [todos[indexTitle]['Title'], todos[indexTitle]['Description'] , todos[indexTitle]['Date'] , todos[indexTitle]['Priority'] , todos[indexTitle]['Project']];

    labels = Array.from(labels);
    content = Array.from(content);

    labels.forEach((label,index) => {
        label.textContent = arrayLabels[index];
    });

    content.forEach((content,index) => {
        content.textContent = arrayContents[index];
    });
}

function createDetailsModal() {

    let body = document.querySelector('body');
    let modalDetails = document.createElement('div');

    let title = document.createElement('h2');
    let titleContent = document.createElement('p');

    let desc = document.createElement('h2');
    let descContent = document.createElement('p');
    
    let date = document.createElement('h2');
    let dateContent = document.createElement('p');

    let prio = document.createElement('h2');
    let prioContent = document.createElement('p');

    let project = document.createElement('h2');
    let projectContent = document.createElement('p');

    let exit = document.createElement('div');

    modalDetails.classList.add('modal-details');
    title.classList.add('label-details');
    titleContent.classList.add('content-details');
    desc.classList.add('label-details');
    descContent.classList.add('content-details');
    date.classList.add('label-details');
    dateContent.classList.add('content-details');
    prio.classList.add('label-details');
    prioContent.classList.add('content-details');
    project.classList.add('label-details');
    projectContent.classList.add('content-details');
    exit.classList.add('exit-details');

    exit.textContent = "X";

    modalDetails.appendChild(title);
    modalDetails.appendChild(titleContent);

    modalDetails.appendChild(desc);
    modalDetails.appendChild(descContent);

    modalDetails.appendChild(date);
    modalDetails.appendChild(dateContent);

    modalDetails.appendChild(prio);
    modalDetails.appendChild(prioContent);

    modalDetails.appendChild(project);
    modalDetails.appendChild(projectContent);

    modalDetails.appendChild(exit);
    body.appendChild(modalDetails);

}

function createOptions() {
    const select = document.querySelector('.inputProject-todo');
    const selectPrio = document.querySelector('.inputPrio-todo');

    let prios = ['High','Medium','Low'];
    let colors = ['#e05355', '#CCCA3A', '#4a8f51'];

    //NO PROJECT OPTION
    const optionEmpty = document.createElement('option');
    optionEmpty.textContent = "no project";

    select.appendChild(optionEmpty);

    let projects = JSON.parse(localStorage.getItem("allProjects"));
    if(projects === null) projects = [];

    for(let i = 0; i < projects.length; i++) {
        let name = projects[i];

        const option = document.createElement('option');
        option.textContent = name;

        select.appendChild(option);
    }

    for(let i = 0; i < 3; i++) {
        const option = document.createElement('option');
        option.textContent = prios[i];
        option.style.backgroundColor = 'black';
        option.style.color = colors[i];

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

export { removeOptions , createOptions , createNewTodoModal , showDetailsModal , createDetailsModal}