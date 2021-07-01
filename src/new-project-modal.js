import './style.css';

function createNewProjectModal() {
    const body = document.querySelector('body');

    const backdrop = document.createElement('div');//for the modal
    const modal = document.createElement('div');
    const title = document.createElement('h2');
    const input = document.createElement('input');
    const buttonAccept = document.createElement('span');

    input.setAttribute('type', 'text');
    input.setAttribute('placeholder',"Write your project title here...");
    title.classList.add('title-project');
    input.classList.add('input-title');
    buttonAccept.classList.add('button-title');
    backdrop.classList.add('backdrop-modal');
    modal.classList.add('modal-project');

    title.textContent = "Set your project name: ";
    buttonAccept.textContent = "Confirm";

    modal.appendChild(title);
    modal.appendChild(input);
    modal.appendChild(buttonAccept);
    body.appendChild(backdrop);
    body.appendChild(modal);
}

function removeModalAndBack() {
    const body = document.querySelector('body');

    const backdrop = document.querySelector('.backdrop-modal');
    const modal = document.querySelector('.modal-project');

    body.removeChild(backdrop);
    body.removeChild(modal);
}

export { removeModalAndBack , createNewProjectModal }