import './style.css';
import { contentLoader } from './page-load.js';
import { checkIfValid } from './check-repeated.js';
import { createdProject } from './projects-load.js';
import { myProjects } from './projects-module.js';

//loads the whole page content
contentLoader();

//takes care of the logic of the add new project button
const buttonNewProject = document.querySelector('.new-project');
const buttonConfirmProject = document.querySelector('.button-title');

function projectConfirmed() {
    let titleValue = document.querySelector('.input-title').value;
    console.log(titleValue);
    
    if(checkIfValid(titleValue) == 1) {
        alert(`The project title "${titleValue}" is too long(10 characters max).`);
    } else if(checkIfValid(titleValue) == 2) {
        alert(`The project title "${titleValue}" already exists.`);
    } else {
        createdProject(titleValue);
        myProjects.addProject(titleValue);
        buttonConfirmProject.removeEventListener('click', projectConfirmed);
    }
}

buttonNewProject.addEventListener('click', () => {
    //sets the modal to visible
    const backdrop = document.querySelector('.backdrop-modal');
    const modal = document.querySelector('.modal-project');

    backdrop.style.display = 'block';
    modal.style.display = 'flex';

    //adds a event listener on the button to confirm the title selected
    buttonConfirmProject.addEventListener('click', projectConfirmed);

    //adds a event listener on the backdrop to get out of the modal
    backdrop.addEventListener('click', () => {
        backdrop.style.display = 'none';
        modal.style.display = 'none';
    });
});
