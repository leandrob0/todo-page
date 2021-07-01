import './style.css';
import { myTodos } from './todos-module';

function addNewProjectLoad() {
    const sidebar = document.querySelector('.sidebar');
    const newProject = document.createElement('span');

    newProject.classList.add('new-project');

    newProject.textContent = 'Add a new project';

    sidebar.appendChild(newProject);
}

function projectsNameLoad() {

    //GETS THE PROJECTS NAME AND SAVES THEM IN AN ARRAY.
    const getUniqueValues = arr => {
        const uniqueValues = [];
        for (let i = 0; i < arr.length; i++) {
          if (uniqueValues.indexOf(arr[i]['Project']) === -1) {
            uniqueValues.push(arr[i]['Project']);
          }
        }
      
        return uniqueValues;
    };

    let differentProjects = getUniqueValues(myTodos.todo);

    //CREATES A PROJECT SPAN FOR EVERY UNIQUE PROJECT NAME
    for(let i = 0; i < differentProjects.length; i++) {
        const sidebar = document.querySelector('.sidebar');
        const projectSpan = document.createElement('span');

        projectSpan.classList.add('span-project');

        projectSpan.textContent = '• ' + differentProjects[i];

        sidebar.appendChild(projectSpan);
    }
}

export { addNewProjectLoad , projectsNameLoad };