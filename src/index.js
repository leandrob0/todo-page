import './style.css';
import { contentLoader } from './page-load';
import { removeModalAndBack , createNewProjectModal } from './new-project-modal.js';

contentLoader();

const buttonNewProject = document.querySelector('.new-project');
buttonNewProject.addEventListener('click', () => {
    createNewProjectModal();
    
    const backdropModal = document.querySelector('.backdrop-modal');
    backdropModal.addEventListener('click', removeModalAndBack);
});