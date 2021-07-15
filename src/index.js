import './style.css';
import { contentLoader } from './page-load.js';
import { checkIfValid } from './validations.js';
import { createdProject } from './projects-load.js';
import { myProjects } from './projects-module.js';
import { removeOptions , createOptions } from './new-todo-modal.js';
import { myTodos } from './todos-module';
import { loadTodayTodos, showTodos , loadThisWeekTodos} from './todos-load';


//BUGS################################################################
//FIX TODO WITH LOCALSTORAGE (TODO ARRAY DOESN'T ADD MORE THAN 1 TODO).
//IN THE FUNCION GETFROMLOCALSTORAGE FROM TODOS-MODULE.JS

localStorage.clear();

//loads the whole page content
contentLoader();

/* 
#################################################

    ALL THE LOGIC OF THE ADD NEW PROJECT BUTTON

#################################################
*/
const buttonNewProject = document.querySelector('.new-project');
const buttonConfirmProject = document.querySelector('.button-title');

//this function is called in the confirm button event listener
function projectConfirmed() {
    const backdrop = document.querySelector('.backdrop-modal');
    const modal = document.querySelector('.modal-project');

    let titleValue = document.querySelector('.input-title').value;
    
    if(checkIfValid(titleValue) == 1) {
        alert(`The project title "${titleValue}" is too long(10 characters max).`);
    } else if(checkIfValid(titleValue) == 2) {
        alert(`The project title "${titleValue}" already exists.`);
    }else if(checkIfValid(titleValue) == 3){
        alert(`The project title only contains white spaces.`);
    } else {
        createdProject(titleValue);
        backdrop.style.display = 'none';
        modal.style.display = 'none';
        myProjects.saveInLocalStorage();
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

/* 
#################################################

    ALL THE LOGIC OF THE ADD NEW TODO BUTTON

#################################################
*/
const buttonTodo = document.querySelector('.inner-button');
const buttonConfirmTodo = document.querySelector('.buttonModal-todo');

function todoConfirmed() {
    const backdrop = document.querySelector('.backdrop-modal');
    const modal = document.querySelector('.modal-todo');

    let title = document.querySelector('.inputTitle-todo').value;
    let desc = document.querySelector('.inputDesc-todo').value;
    let date = document.querySelector('.inputDate-todo').value;
    let prio = document.querySelector('.inputPrio-todo').value;
    let project = document.querySelector('.inputProject-todo').value;

    if(checkIfValid(title) == 1 || checkIfValid(title) == 3) {
        alert('The title selected is invalid.');
        return;
    } else if(checkIfValid(title) == 4) {
        alert('The title selected is already in use.');
        return;
    }

    if(checkIfValid(desc) == 3) {
        alert('The description is invalid.');
        return;
    }

    if(date == undefined) {
        alert('The date is invalid.');
        return;
    }

    myTodos.addToDo(title,desc,date,prio,project);
    myTodos.saveInLocalStorage();

    backdrop.style.display = 'none';
    modal.style.display = 'none';

    //goes to the home tab
    showTodos();

    buttonConfirmTodo.removeEventListener('click', todoConfirmed);
}

buttonTodo.addEventListener('click', () => {
    const backdrop = document.querySelector('.backdrop-modal');
    const modalTodo = document.querySelector('.modal-todo');

    //dinamically creates the projects options in case i created another project
    removeOptions(); 
    createOptions();

    backdrop.style.display = 'block';
    modalTodo.style.display = 'flex';

    buttonConfirmTodo.addEventListener('click', todoConfirmed);

    backdrop.addEventListener('click', () => {
        backdrop.style.display = 'none';
        modalTodo.style.display = 'none';
    });
});

/* 
#################################################

    SIDEBAR OPTIONS TO SHOW TODOS

#################################################
*/
const homeTodos = document.querySelector('#home-bar');
const todayTodos = document.querySelector('#today-bar');
const weekTodos = document.querySelector('#week-bar');

homeTodos.addEventListener('click', showTodos);
todayTodos.addEventListener('click', loadTodayTodos);
weekTodos.addEventListener('click', loadThisWeekTodos);