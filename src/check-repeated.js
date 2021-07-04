import { myProjects } from './projects-module.js';

function checkIfValid(title) {
    if(title.length > 10) {
        return 1;
    }
    if(title.split('').every(elem => elem == ' ') || title == undefined) {
        return 3;
    }
    if(myProjects.checkIfRepeated(title) == true) {
        return 2;
    }

    return 0;
}

export { checkIfValid };