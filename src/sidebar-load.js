import './style.css';

function sidebarLoad() {
    const sidebar = document.querySelector('.sidebar');

    const homeBar = document.createElement('span');
    const todayBar = document.createElement('span');
    const weekBar = document.createElement('span');
    const projectsBar = document.createElement('span');

    homeBar.classList.add('span-sidebar');
    homeBar.setAttribute('id', 'home-bar');
    todayBar.classList.add('span-sidebar');
    todayBar.setAttribute('id', 'today-bar');
    weekBar.classList.add('span-sidebar');
    weekBar.setAttribute('id', 'week-bar');
    projectsBar.classList.add('span-projects');

    homeBar.textContent = 'Home';
    todayBar.textContent = 'Today';
    weekBar.textContent = 'Week';
    projectsBar.textContent = 'Projects';

    let things = [homeBar,todayBar,weekBar];
    
    things.map((span) => {
        span.addEventListener('click', () => {
            const projects = document.querySelectorAll('.span-project');

            Array.from(projects).forEach((project) => {
                if(project.classList[1] === 'active-project'){
                    project.classList.remove('active-project');
                }
            });

            things.map((span) => {
                if(span.classList[1] === 'active-project') {
                    span.classList.remove('active-project');
                }
            });

            span.classList.add('active-project');
        });
    });

    sidebar.appendChild(homeBar);
    sidebar.appendChild(todayBar);
    sidebar.appendChild(weekBar);
    sidebar.appendChild(projectsBar);
}

export { sidebarLoad };