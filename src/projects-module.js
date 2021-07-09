const myProjects = (function() {

    let project = [];

    function addProject(title) {
        project.push(title);
    }

    function removeProject(title) {
        let index = project.indexOf(title);
        project.splice(index, 1);
    }

    function lengthArray() {
        return project.length;
    }

    function checkIfRepeated(title) {
        for(let i = 0; i < project.length; i++) {
            if(project[i] == title) {
                return true;
            }
        }
        return false;
    }

    function returnNameProject(index) {
        return project[index];
    }

    function saveInLocalStorage() {
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem("projects", JSON.stringify(project));
        } else {
            return;
        }
    }

    function getFromLocalStorage() {
        if(JSON.parse(localStorage.getItem("projects")) !== null) {
            project = JSON.parse(localStorage.getItem("projects"));
        } else {return};
    }

    function removeSpecificItem(title) {
        getFromLocalStorage();

        if(indexOf(title) === -1) {
            return;
        } else {
            project.splice(indexOf(title),1);
        }

        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem("projects", JSON.stringify(project));
        } else {
            return;
        }
    }

    return { addProject , removeProject , lengthArray , checkIfRepeated , returnNameProject , saveInLocalStorage , getFromLocalStorage , removeSpecificItem};
})(); 

export { myProjects };