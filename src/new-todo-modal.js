import './style.css';

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
    title.classList.add('titleModal-todo');
    inputTitle.classList.add('inputTitle-todo');

    inputDesc.setAttribute('placeholder',"Write your project description here...");
    description.classList.add('desc-todo');
    inputDesc.classList.add('inputDesc-todo');
    
    inputDate.setAttribute('type','date');
    inputDate.classList.add('inputDate-todo');
    date.classList.add('date-todo');

    priority.classList.add('prio-todo');
    inputPrio.classList.add('inputPrio-todo');

    project.classList.add('project-todo');
    inputProject.classList.add('inputProject-todo');

    buttonAccept.classList.add('buttonModal-todo');
    modal.classList.add('modal-todo');

    title.textContent = "Set your project name: ";
    description.textContent = "Enter a description for the todo: ";
    date.textContent = "Enter an target date for the todo: ";
    priority.textContent = "Select a priority for the todo: ";
    project.textContent = "Select the project for the todo: ";
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

export { createNewTodoModal }