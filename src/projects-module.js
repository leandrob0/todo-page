const myProjects = (function() {

    let project = ['Hello'];

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

    return { addProject , removeProject , lengthArray , checkIfRepeated};
})(); 

export { myProjects };