import './style.css';

function sidebarLoad() {
    const sidebar = document.querySelector('.sidebar');

    const homeBar = document.createElement('span');
    const todayBar = document.createElement('span');
    const weekBar = document.createElement('span');
    const projectsBar = document.createElement('span');

    homeBar.classList.add('span-sidebar');
    todayBar.classList.add('span-sidebar');
    weekBar.classList.add('span-sidebar');
    projectsBar.classList.add('span-projects');

    homeBar.textContent = 'Home';
    todayBar.textContent = 'Today';
    weekBar.textContent = 'Week';
    projectsBar.textContent = 'Projects';

    sidebar.appendChild(homeBar);
    sidebar.appendChild(todayBar);
    sidebar.appendChild(weekBar);
    sidebar.appendChild(projectsBar);
}

export { sidebarLoad };