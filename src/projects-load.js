import './style.css';
import { myProjects } from './projects-module.js';
import { loadProjectTodo } from './todos-load.js';
import { myTodos } from './todos-module.js';

function addNewProjectLoad() {
    const sidebar = document.querySelector('.sidebar');
    const newProject = document.createElement('span');

    newProject.classList.add('new-project');

    newProject.textContent = 'Add a new project';

    sidebar.appendChild(newProject);
}

function projectsNameLoad() {

    let projects = JSON.parse(localStorage.getItem("allProjects"));

    if(projects === null) projects = [];

    //CREATES A PROJECT SPAN FOR EVERY UNIQUE PROJECT NAME
    for(let i = 0; i < projects.length; i++) {
      const sidebar = document.querySelector('.sidebar');
      const containerSpan = document.createElement('span');
      const projectSpan = document.createElement('span');
      const deleteSpan = document.createElement('span');

      projectSpan.classList.add('span-project');
      deleteSpan.classList.add('delete-span-project');
      containerSpan.classList.add('container-span-project');

      projectSpan.textContent = '• ' + projects[i];
      deleteSpan.textContent = 'X';

      projectSpan.addEventListener('click', () => {
        loadProjectTodo(projects[i]);

        //TAKES CARE OF THE ACTIVE MENU ITEM STYLING
        const everyProject = document.querySelectorAll('.span-project');
        const everyDefaultProject = document.querySelectorAll('.span-sidebar');

        Array.from(everyProject).forEach((project) => {
          if(project.classList[1] === 'active-project') {
            project.classList.remove('active-project');
          }
        });

        Array.from(everyDefaultProject).forEach((project) => {
          if(project.classList[1] === 'active-project') {
            project.classList.remove('active-project');
          }
        });

        projectSpan.classList.add("active-project");
      });
    
      deleteSpan.addEventListener('click', () => {
        myProjects.removeProject(projects[i]);
        myTodos.removeToDos(projects[i]);
        sidebar.removeChild(deleteSpan.parentNode);
        location.reload();
      });

      containerSpan.appendChild(projectSpan);
      containerSpan.appendChild(deleteSpan);
      sidebar.appendChild(containerSpan);
    }
}

function createdProject(projectName) {
  const sidebar = document.querySelector('.sidebar');
  const projectSpan = document.createElement('span');
  const containerSpan = document.createElement('span');
  const deleteSpan = document.createElement('span');

  projectSpan.classList.add('span-project');
  deleteSpan.classList.add('delete-span-project');
  containerSpan.classList.add('container-span-project');

  projectSpan.textContent = '• ' + projectName;
  deleteSpan.textContent = 'X';

  projectSpan.addEventListener('click', () => {

    loadProjectTodo(projectName);

    //TAKES CARE OF THE ACTIVE MENU ITEM STYLING
    const everyProject = document.querySelectorAll('.span-project');
    const everyDefaultProject = document.querySelectorAll('.span-sidebar');

    Array.from(everyProject).forEach((project) => {
      if(project.classList[1] === 'active-project') {
        project.classList.remove('active-project');
      }
    });

    Array.from(everyDefaultProject).forEach((project) => {
      if(project.classList[1] === 'active-project') {
        project.classList.remove('active-project');
      }
    });
    
    projectSpan.classList.add("active-project");
  });

  deleteSpan.addEventListener('click', () => {
    myProjects.removeProject(projectName);
    myTodos.removeToDos(projectName);
    sidebar.removeChild(deleteSpan.parentNode);

    location.reload();
  });

  containerSpan.appendChild(projectSpan);
  containerSpan.appendChild(deleteSpan);
  sidebar.appendChild(containerSpan);
}

export { createdProject , addNewProjectLoad , projectsNameLoad };