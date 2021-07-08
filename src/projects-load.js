import './style.css';
import { myTodos } from './todos-module.js';
import { myProjects } from './projects-module.js';
import { loadProjectTodo } from './todos-load.js';

function addNewProjectLoad() {
    const sidebar = document.querySelector('.sidebar');
    const newProject = document.createElement('span');

    newProject.classList.add('new-project');

    newProject.textContent = 'Add a new project';

    sidebar.appendChild(newProject);
}

function projectsNameLoad() {

    //CREATES A PROJECT SPAN FOR EVERY UNIQUE PROJECT NAME
    for(let i = 0; i < myProjects.lengthArray(); i++) {
      const sidebar = document.querySelector('.sidebar');
      const projectSpan = document.createElement('span');

      projectSpan.classList.add('span-project');

      projectSpan.textContent = '• ' + myProjects.returnNameProject(i);

      sidebar.appendChild(projectSpan);
    }
}

function createdProject(projectName) {
  const sidebar = document.querySelector('.sidebar');
  const projectSpan = document.createElement('span');

  projectSpan.classList.add('span-project');

  projectSpan.textContent = '• ' + projectName;
  myProjects.addProject(projectName);

  projectSpan.addEventListener('click', () => {
    loadProjectTodo(projectName);
    myProjects.removeProject(projectName);
  });

  sidebar.appendChild(projectSpan);
}

export { createdProject , addNewProjectLoad , projectsNameLoad };