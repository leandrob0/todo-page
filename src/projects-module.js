const myProjects = (function() {

    function removeProject(title) {
        let projects = JSON.parse(localStorage.getItem("allProjects"));

        let index = projects.indexOf(title);
        projects.splice(index, 1);

        localStorage.setItem("allProjects", JSON.stringify(projects));
    }

    function checkIfRepeated(title) {
        let projects = JSON.parse(localStorage.getItem("allProjects"));

        if(projects === null) {
            projects = [];
        }
        for(let i = 0; i < projects.length; i++) {
            if(projects[i] == title) {
                return true;
            }
        }
        return false;
    }

    function saveInLocalStorage(title) {
        if (typeof(Storage) !== 'undefined') {

            //CODE COPIED FROM https://stackoverflow.com/questions/19635077/adding-objects-to-array-in-localstorage
            let existingEntries = JSON.parse(localStorage.getItem("allProjects"));

            if(existingEntries === null) existingEntries = [];
            
            let entry = title;

            localStorage.setItem("entryProject", JSON.stringify(entry));
            existingEntries.push(entry);
            localStorage.setItem("allProjects", JSON.stringify(existingEntries));

        } else {
            return;
        }
    }

    return { removeProject , checkIfRepeated , saveInLocalStorage};
})(); 

export { myProjects };